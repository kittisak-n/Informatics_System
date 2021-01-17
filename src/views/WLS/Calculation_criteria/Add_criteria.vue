<template>
  <div id="Add_criteria">
    <a-card size="small">
      <a-row :gutter="[8, 8]">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <a-steps :current="current + 1">
            >
            <a-step v-for="item in steps" :key="item.index" :title="item.title">
              {{ index }}
            </a-step>
          </a-steps>
        </a-col>
      </a-row>

      <div class="steps-content">
        <!-- STEP 0 -->
        <div v-if="current == 0" style="padding-top: 50px">
          <a-row :gutter="[8, 8]">
            <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
            <a-col
              :xs="24"
              :sm="24"
              :md="14"
              :lg="14"
              :xl="14"
              style="margin: 0.2em 0px"
            >
              <span>ชื่อกำหนดการ: </span>

              <a-input
                v-model="criteria_name"
                placeholder="กรุณากรอกชื่อ"
                allow-clear
                @change="onChange"
                style="width: 50%"
              />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
            <a-col
              :xs="24"
              :sm="24"
              :md="14"
              :lg="14"
              :xl="14"
              style="margin: 0.2em 0px"
            >
              <span>วันที่เริ่มใช้งาน: </span>

              <a-date-picker
                style="width: 50%"
                v-model="criteria_start_date"
                @change="onChangedate"
              />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
          </a-row>
        </div>
        <!-- END SETP 0 -->

        <!-- STEP 1 -->
        <div v-if="current == 1">
          <a-card size="small">
            <a-row :gutter="[8, 8]">
              <a-col
                :xs="24"
                :sm="24"
                :md="24"
                :lg="24"
                :xl="24"
                style="margin: 0.2em 0px"
              >
                <a-card-meta title="ตั้งค่าทั่วไป"> </a-card-meta
              ></a-col>
            </a-row>
          </a-card>
          <a-card size="small">
            <a-row :gutter="[8, 8]">
              <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
              <a-col :span="6" style="margin: 0.2em 0px"
                >อัตราเงินต่อหน่วยกิต:</a-col
              >
              <a-col :span="6" style="margin: 0.2em 0px">
                <a-input
                  v-model="criteria_rate_per_credit"
                  addon-after="บาท"
                  type="number"
                  min="1"
                  style="width: 100%"
              /></a-col>
              <a-col :span="6" style="margin: 0.2em 0px"></a-col>
            </a-row>

            <a-row :gutter="[8, 8]" style="text-align: start">
              <a-col :span="24" style="margin: 0.2em 0px"
                ><h1>
                  กำหนดภาระงานเพื่อการจ่ายค่าตอบแทนสอนเกินของคณาจารย์ประจำที่ไม่ได้ดำรงตำแหน่งบริหาร
                </h1></a-col
              >
            </a-row>

            <a-row :gutter="[8, 8]" style="text-align: center">
              <a-col
                :xs="12"
                :sm="12"
                :md="12"
                :lg="12"
                :xl="12"
                style="margin: 0.2em 0px; text-align: center"
              >
                ขั้นต่ำ:
                <a-input
                  addon-after="หน่วยภาระงานสอน"
                  type="number"
                  style="width: 80%"
                  v-model="nmp_minimum"
                  min="1"
                />
              </a-col>

              <a-col
                :xs="12"
                :sm="12"
                :md="12"
                :lg="12"
                :xl="12"
                style="margin: 0.2em 0px; text-align: start"
              >
                ขั้นสูง:
                <a-input
                  addon-after="หน่วยภาระงานสอน"
                  type="number"
                  style="width: 80%"
                  v-model="nmp_maximum"
                  min="1"
                />
              </a-col>
            </a-row>
          </a-card>
          <!-- สิ้นสุด ตั้งค่าทั่วไป -->
          <a-row :gutter="[8, 8]">
            <!-- วิชาในหลักสูตร -->
            <a-col :span="12" style="margin: 0.2em 0px; text-align: center">
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col :span="24" style="margin: 0.2em 0p">
                    <a-card-meta title="วิชาในหลักสูตร"> </a-card-meta>
                  </a-col>
                </a-row>
              </a-card>
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>การสอนแบบปฏิบัติการ</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>จำนวนนิสิตต่อกลุ่ม</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับปริญญาตรี :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 80%"
                      min="1"
                      v-model="criteria_Internal.lab.Bachelor"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับบัณฑิตศึกษา :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 80%"
                      min="1"
                      v-model="criteria_Internal.lab.Graduate"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="12"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]" justify="center">
                  <a-col :span="24">
                    <a-table
                      :columns="columns_condition"
                      :data-source="criteria_Internal.lab.condition"
                      :pagination="false"
                      size="small"
                      bordered
                    >
                      <span slot="key" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          {{ index + 1 }}
                        </div>
                      </span>
                      <span slot="condition" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <span style="font-size: 18px"
                            >จำนวนนิสิตที่เกิน:
                          </span>

                          <a-input
                            min="1"
                            type="number"
                            style="width: 14%"
                            addon-after="คน"
                            v-model="
                              criteria_Internal.lab.condition[index]
                                .Minimum_number_students
                            "
                          >
                          </a-input>
                          <span style="font-size: 18px"> ถึง </span>
                          <a-input
                            min="1"
                            type="number"
                            placeholder=""
                            style="width: 10%"
                            addon-after="คน"
                            v-model="
                              criteria_Internal.lab.condition[index]
                                .Maximum_number_students
                            "
                          ></a-input>
                          <span style="font-size: 18px"> เท่ากับ </span>
                          <a-input
                            min="0"
                            type="number"
                            placeholder=""
                            style="width: 40%"
                            addon-after="ค่าน้ำหนักต่อหน่วยกิต"
                            v-model="
                              criteria_Internal.lab.condition[index]
                                .Weight_per_credit
                            "
                          ></a-input>
                        </div>
                      </span>

                      <span slot="action" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <a-tooltip placement="top">
                            <template slot="title">
                              <span>ลบข้อมูลวัสดุ</span>
                            </template>
                            <a-button
                              :disabled="
                                criteria_Internal.lab.condition.length == 1
                              "
                              type="danger"
                              icon="close"
                              @click="
                                delet_criteria_Internal_condition_lab(index)
                              "
                            >
                            </a-button>
                          </a-tooltip>
                        </div>
                      </span>
                    </a-table>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]" type="flex" justify="center">
                  <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <a-button
                      type="dashed"
                      style="width: 100%"
                      icon="plus"
                      @click="add_criteria_Internal_condition_lab()"
                      >เพิ่มเงื่อนไขช่วงค่าน้ำหนักต่อหน่วยกิต
                    </a-button>
                  </a-col>
                </a-row>
              </a-card>
              <!-- เงื่อนไขค่าน้ำหนัก -->
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>การสอนแบบบรรยาย</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>จำนวนนิสิตต่อกลุ่ม</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับปริญญาตรี :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      min="1"
                      v-model="criteria_Internal.lecture.Bachelor"
                      addon-after="คน"
                      type="number"
                      style="width: 80%"
                    />
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับบัณฑิตศึกษา :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      min="1"
                      v-model="criteria_Internal.lecture.Graduate"
                      addon-after="คน"
                      type="number"
                      style="width: 80%"
                    />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="12"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]" justify="center">
                  <a-col :span="24">
                    <a-table
                      :columns="columns_condition"
                      :data-source="criteria_Internal.lecture.condition"
                      :pagination="false"
                      size="small"
                      bordered
                    >
                      <span slot="key" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          {{ index + 1 }}
                        </div>
                      </span>
                      <span slot="condition" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <span style="font-size: 18px"
                            >จำนวนนิสิตที่เกิน:
                          </span>

                          <a-input
                            min="1"
                            type="number"
                            style="width: 14%"
                            addon-after="คน"
                            v-model="
                              criteria_Internal.lecture.condition[index]
                                .Minimum_number_students
                            "
                          >
                          </a-input>
                          <span style="font-size: 18px"> ถึง </span>
                          <a-input
                            min="1"
                            type="number"
                            placeholder=""
                            style="width: 14%"
                            addon-after="คน"
                            v-model="
                              criteria_Internal.lecture.condition[index]
                                .Maximum_number_students
                            "
                          ></a-input>
                          <span style="font-size: 18px"> เท่ากับ </span>
                          <a-input
                            min="0"
                            type="number"
                            placeholder=""
                            style="width: 40%"
                            addon-after="ค่าน้ำหนักต่อหน่วยกิต"
                            v-model="
                              criteria_Internal.lecture.condition[index]
                                .Weight_per_credit
                            "
                          ></a-input>
                        </div>
                      </span>

                      <span slot="action" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <a-tooltip placement="top">
                            <template slot="title">
                              <span>ลบข้อมูลวัสดุ</span>
                            </template>
                            <a-button
                              :disabled="
                                criteria_Internal.lecture.condition.length == 1
                              "
                              type="danger"
                              icon="close"
                              @click="
                                delet_criteria_Internal_condition_lecture(index)
                              "
                            >
                            </a-button>
                          </a-tooltip>
                        </div>
                      </span>
                    </a-table>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]" type="flex" justify="center">
                  <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <a-button
                      type="dashed"
                      style="width: 100%"
                      icon="plus"
                      @click="add_criteria_Internal_condition_lecture()"
                      >เพิ่มเงื่อนไขช่วงค่าน้ำหนักต่อหน่วยกิต
                    </a-button>
                  </a-col>
                </a-row>
              </a-card>
              <!-- สิ้นสุดเงื่อนไขค่าน้ำหนัก -->
            </a-col>

            <!-- วิชาศึกษาทั่วไป วิชานอก -->
            <a-col :span="12" style="margin: 0.2em 0px; text-align: center">
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col :span="24" style="margin: 0.2em 0p">
                    <a-card-meta title="วิชาศึกษาทั่วไป"> </a-card-meta>
                  </a-col>
                </a-row>
              </a-card>
              <!-- เงื่อนไขค่าน้ำหนัก -->
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>การสอนแบบปฏิบัติการ</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>จำนวนนิสิตต่อกลุ่ม</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับปริญญาตรี :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 80%"
                      min="1"
                      v-model="criteria_external.lab.Bachelor"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับบัณฑิตศึกษา :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 80%"
                      min="1"
                      v-model="criteria_external.lab.Graduate"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="12"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]" justify="center">
                  <a-col :span="24">
                    <a-table
                      :columns="columns_condition"
                      :data-source="criteria_external.lab.condition"
                      :pagination="false"
                      size="small"
                      bordered
                    >
                      <span slot="key" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          {{ index + 1 }}
                        </div>
                      </span>
                      <span slot="condition" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <span style="font-size: 18px"
                            >จำนวนนิสิตที่เกิน:
                          </span>

                          <a-input
                            min="1"
                            type="number"
                            style="width: 14%"
                            addon-after="คน"
                            v-model="
                              criteria_external.lab.condition[index]
                                .Minimum_number_students
                            "
                          >
                          </a-input>
                          <span style="font-size: 18px"> ถึง </span>
                          <a-input
                            min="1"
                            type="number"
                            placeholder=""
                            style="width: 14%"
                            addon-after="คน"
                            v-model="
                              criteria_external.lab.condition[index]
                                .Maximum_number_students
                            "
                          ></a-input>
                          <span style="font-size: 18px"> เท่ากับ </span>
                          <a-input
                            min="0"
                            type="number"
                            placeholder=""
                            style="width: 40%"
                            addon-after="ค่าน้ำหนักต่อหน่วยกิต"
                            v-model="
                              criteria_external.lab.condition[index]
                                .Weight_per_credit
                            "
                          ></a-input>
                        </div>
                      </span>

                      <span slot="action" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <a-tooltip placement="top">
                            <template slot="title">
                              <span>ลบข้อมูลวัสดุ</span>
                            </template>
                            <a-button
                              :disabled="
                                criteria_external.lab.condition.length == 1
                              "
                              type="danger"
                              icon="close"
                              @click="
                                delet_criteria_external_condition_lab(index)
                              "
                            >
                            </a-button>
                          </a-tooltip>
                        </div>
                      </span>
                    </a-table>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]" type="flex" justify="center">
                  <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <a-button
                      type="dashed"
                      style="width: 100%"
                      icon="plus"
                      @click="add_criteria_external_condition_lab()"
                      >เพิ่มเงื่อนไขช่วงค่าน้ำหนักต่อหน่วยกิต
                    </a-button>
                  </a-col>
                </a-row>
              </a-card>
              <!-- สิ้นสุดเงื่อนไขค่าน้ำหนัก -->
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>การสอนแบบบรรยาย</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>จำนวนนิสิตต่อกลุ่ม</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับปริญญาตรี :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 80%"
                      v-model="criteria_external.lecture.Bachelor"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับบัณฑิตศึกษา :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 80%"
                      v-model="criteria_external.lecture.Graduate"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="12"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]" justify="center">
                  <a-col :span="24">
                    <a-table
                      :columns="columns_condition"
                      :data-source="criteria_external.lecture.condition"
                      :pagination="false"
                      size="small"
                      bordered
                    >
                      <span slot="key" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          {{ index + 1 }}
                        </div>
                      </span>
                      <span slot="condition" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <span style="font-size: 18px"
                            >จำนวนนิสิตที่เกิน:
                          </span>

                          <a-input
                            type="number"
                            style="width: 14%"
                            addon-after="คน"
                            v-model="
                              criteria_external.lecture.condition[index]
                                .Minimum_number_students
                            "
                          >
                          </a-input>
                          <span style="font-size: 18px"> ถึง </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 14%"
                            addon-after="คน"
                            v-model="
                              criteria_external.lecture.condition[index]
                                .Maximum_number_students
                            "
                          ></a-input>
                          <span style="font-size: 18px"> เท่ากับ </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 40%"
                            addon-after="ค่าน้ำหนักต่อหน่วยกิต"
                            v-model="
                              criteria_external.lecture.condition[index]
                                .Weight_per_credit
                            "
                          ></a-input>
                        </div>
                      </span>

                      <span slot="action" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <a-tooltip placement="top">
                            <template slot="title">
                              <span>ลบข้อมูลวัสดุ</span>
                            </template>
                            <a-button
                              :disabled="
                                criteria_external.lecture.condition.length == 1
                              "
                              type="danger"
                              icon="close"
                              @click="
                                delet_criteria_external_condition_lecture(index)
                              "
                            >
                            </a-button>
                          </a-tooltip>
                        </div>
                      </span>
                    </a-table>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]" type="flex" justify="center">
                  <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <a-button
                      type="dashed"
                      style="width: 100%"
                      icon="plus"
                      @click="add_criteria_external_condition_lecture()"
                      >เพิ่มเงื่อนไขช่วงค่าน้ำหนักต่อหน่วยกิต
                    </a-button>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <!-- END STEP 1-->

        <!-- STEP 2 -->
        <div v-if="current == 2">
          <!-- เริ่ม ส่วนตั้งค่าทั่วไป -->
          <a-card size="small">
            <a-row :gutter="[8, 8]">
              <a-col :span="24" style="margin: 0.2em 0px">
                <a-card-meta title="ตั้งค่าทั่วไป"> </a-card-meta
              ></a-col>
            </a-row>
          </a-card>

          <a-card size="small">
            <a-row :gutter="[8, 8]">
              <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
              <a-col :span="6" style="margin: 0.2em 0px">ชื่อกำหนดการ:</a-col>
              <a-col :span="6" style="margin: 0.2em 0px">
                <a-input style="width: 100%" disabled v-model="criteria_name"
              /></a-col>
              <a-col :span="6" style="margin: 0.2em 0px"></a-col>
            </a-row>

            <a-row :gutter="[8, 8]">
              <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
              <a-col :span="6" style="margin: 0.2em 0px">วันที่เริ่มใช้:</a-col>
              <a-col :span="6" style="margin: 0.2em 0px">
                <a-date-picker
                  style="width: 100%"
                  v-model="criteria_start_date"
                  disabled
                />
              </a-col>
              <a-col :span="6" style="margin: 0.2em 0px"></a-col>
            </a-row>

            <a-row :gutter="[8, 8]">
              <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
              <a-col :span="6" style="margin: 0.2em 0px"
                >ผู้สร้างกำหนดการ:</a-col
              >
              <a-col :span="6" style="margin: 0.2em 0px">
                <a-input style="width: 100%" disabled
              /></a-col>
              <a-col :span="6" style="margin: 0.2em 0px"></a-col>
            </a-row>
            <a-row :gutter="[8, 8]">
              <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
              <a-col :span="6" style="margin: 0.2em 0px"
                >อัตราเงินต่อหน่วยกิต:</a-col
              >
              <a-col :span="6" style="margin: 0.2em 0px">
                <a-input
                  style="width: 100%"
                  v-model="criteria_rate_per_credit"
                  disabled
                  addon-after="บาท"
                  type="number"
              /></a-col>
              <a-col :span="6" style="margin: 0.2em 0px"></a-col>
            </a-row>

            <a-row :gutter="[8, 8]" style="text-align: start">
              <a-col :span="24" style="margin: 0.2em 0px"
                ><h1>
                  กำหนดภาระงานเพื่อการจ่ายค่าตอบแทนสอนเกินของคณาจารย์ประจำที่ไม่ได้ดำรงตำแหน่งบริหาร
                </h1></a-col
              >
            </a-row>

            <a-row :gutter="[8, 8]" style="text-align: center">
              <a-col
                :xs="12"
                :sm="12"
                :md="12"
                :lg="12"
                :xl="12"
                style="margin: 0.2em 0px; text-align: center"
              >
                ขั้นต่ำ:
                <a-input
                  addon-after="หน่วยภาระงานสอน"
                  type="number"
                  style="width: 70%"
                  disabled
                  v-model="nmp_minimum"
                />
              </a-col>

              <a-col
                :xs="12"
                :sm="12"
                :md="12"
                :lg="12"
                :xl="12"
                style="margin: 0.2em 0px; text-align: start"
              >
                ขั้นสูง:
                <a-input
                  addon-after="หน่วยภาระงานสอน"
                  type="number"
                  style="width: 70%"
                  v-model="nmp_maximum"
                  disabled
                />
              </a-col>
            </a-row>
          </a-card>
          <!-- สิ้นสุด ส่วนตั้งค่าทั่วไป -->
          <!-- วิชาในหลักสูตร -->
          <a-row :gutter="[8, 8]">
            <a-col :span="12" style="margin: 0.2em 0px; text-align: center">
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col :span="24" style="margin: 0.2em 0p">
                    <a-card-meta title="วิชาในหลักสูตร"> </a-card-meta>
                  </a-col>
                </a-row>
              </a-card>
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>การสอนแบบปฏิบัติการ</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>จำนวนนิสิตต่อกลุ่ม</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับปริญญาตรี :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 100%"
                      disabled
                      v-model="criteria_Internal.lab.Bachelor"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับบัณฑิตศึกษา :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 100%"
                      disabled
                      v-model="criteria_Internal.lab.Graduate"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="12"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row
                  :gutter="[8, 8]"
                  v-for="data in criteria_Internal.lab.condition"
                  :key="data.key"
                >
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span>จำนวนนิสิตที่เกิน: </span>
                    <a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Minimum_number_students"
                      addon-after="คน"
                    />
                    <span> ถึง </span>
                    <a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Maximum_number_students"
                      addon-after="คน"
                    />
                    <span> เท่ากับ </span
                    ><a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Weight_per_credit"
                    />
                    <span> ค่าน้ำหนักต่อหน่วยกิต</span>
                  </a-col>
                </a-row>
              </a-card>
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>การสอนแบบบรรยาย</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>จำนวนนิสิตต่อกลุ่ม</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับปริญญาตรี :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 100%"
                      disabled
                      v-model="criteria_Internal.lecture.Bachelor"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับบัณฑิตศึกษา :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 100%"
                      disabled
                      v-model="criteria_Internal.lecture.Graduate"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="12"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row
                  :gutter="[8, 8]"
                  v-for="data in criteria_Internal.lecture.condition"
                  :key="data.key"
                >
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span>จำนวนนิสิตที่เกิน: </span>
                    <a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Minimum_number_students"
                      addon-after="คน"
                    />
                    <span> ถึง </span>
                    <a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Maximum_number_students"
                      addon-after="คน"
                    />
                    <span> เท่ากับ </span
                    ><a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Weight_per_credit"
                    />
                    <span> ค่าน้ำหนักต่อหน่วยกิต</span>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
            <!-- สิ้นสุด วิชาในหลักสูตร -->

            <!-- วิชาศึกษาทั่วไป -->
            <a-col :span="12" style="margin: 0.2em 0px; text-align: center">
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col :span="24" style="margin: 0.2em 0p">
                    <a-card-meta title="วิชาในหลักสูตร"> </a-card-meta>
                  </a-col>
                </a-row>
              </a-card>
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>การสอนแบบปฏิบัติการ</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>จำนวนนิสิตต่อกลุ่ม</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับปริญญาตรี :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 100%"
                      disabled
                      v-model="criteria_external.lab.Bachelor"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับบัณฑิตศึกษา :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 100%"
                      disabled
                      v-model="criteria_external.lab.Graduate"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="12"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row
                  :gutter="[8, 8]"
                  v-for="data in criteria_external.lab.condition"
                  :key="data.key"
                >
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span>จำนวนนิสิตที่เกิน: </span>
                    <a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Minimum_number_students"
                      addon-after="คน"
                    />
                    <span> ถึง </span>
                    <a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Maximum_number_students"
                      addon-after="คน"
                    />
                    <span> เท่ากับ </span
                    ><a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Weight_per_credit"
                    />
                    <span> ค่าน้ำหนักต่อหน่วยกิต</span>
                  </a-col>
                </a-row>
              </a-card>
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>การสอนแบบบรรยาย</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>จำนวนนิสิตต่อกลุ่ม</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับปริญญาตรี :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 100%"
                      disabled
                      v-model="criteria_external.lecture.Bachelor"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span> ระดับบัณฑิตศึกษา :</span>
                  </a-col>
                  <a-col
                    :span="6"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <a-input
                      style="width: 100%"
                      disabled
                      v-model="criteria_external.lecture.Graduate"
                      addon-after="คน"
                      type="number"
                    />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="12"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row
                  :gutter="[8, 8]"
                  v-for="data in criteria_external.lecture.condition"
                  :key="data.key"
                >
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span>จำนวนนิสิตที่เกิน: </span>
                    <a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Minimum_number_students"
                      addon-after="คน"
                    />
                    <span> ถึง </span>
                    <a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Maximum_number_students"
                      addon-after="คน"
                    />
                    <span> เท่ากับ </span
                    ><a-input
                      disabled
                      style="width: 15%"
                      v-model="data.Weight_per_credit"
                    />
                    <span> ค่าน้ำหนักต่อหน่วยกิต</span>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
          <!-- สิ้นสุด วิชาศึกษาทั่วไป -->
        </div>
        <!-- END STEP 2-->
      </div>
      <div class="steps-action" style="text-align: end">
        <a-button v-if="current > 0" style="margin-right: 91%" @click="prev">
          ย้อนกลับ
        </a-button>
        <a-button
          v-if="current < steps.length - 1"
          type="primary"
          @click="next"
        >
          ถัดไป
        </a-button>
        <router-link :to="{ path: '/Calculation_criteria' }">
          <a-button
            v-if="current == steps.length - 1"
            type="primary"
            @click="add_criteria()"
          >
            บันทึก
          </a-button></router-link
        >
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns_condition: [
        {
          title: "ลำดับ",
          dataIndex: "key",
          key: "key",
          width: "3%",
          scopedSlots: {
            customRender: "key",
          },
        },
        {
          title: "เงื่อนไข",
          dataIndex: "condition",
          key: "condition",
          width: "50%",
          scopedSlots: {
            customRender: "condition",
          },
        },
        {
          title: "",
          dataIndex: "action",
          key: "action",
          width: "1%",
          scopedSlots: {
            customRender: "action",
          },
        },
      ],

      // ตัวแปรที่ใช้ในการกำหนดอัตราการจ่ายค่าตอบแทน
      criteria_name: null,
      criteria_start_date: null,
      criteria_creat_by: null,
      criteria_rate_per_credit: null,
      nmp_minimum: null,
      nmp_maximum: null,
      // วิชาในหลักสูตร
      criteria_Internal: {
        lab: {
          Bachelor: null,
          Graduate: null,
          index_condition: 0,
          condition: [
            {
              key: 1,
              Minimum_number_students: null,
              Maximum_number_students: null,
              Weight_per_credit: null,
            },
          ],
        },
        lecture: {
          Bachelor: null,
          Graduate: null,
          index_condition: 0,
          condition: [
            {
              key: 1,
              Minimum_number_students: null,
              Maximum_number_students: null,
              Weight_per_credit: null,
            },
          ],
        },
      },

      // วิชานอกหลักสูตร
      criteria_external: {
        lab: {
          Bachelor: null,
          Graduate: null,
          index_condition: 0,
          condition: [
            {
              key: 1,
              Minimum_number_students: null,
              Maximum_number_students: null,
              Weight_per_credit: null,
            },
          ],
        },
        lecture: {
          Bachelor: null,
          Graduate: null,
          index_condition: 0,
          condition: [
            {
              key: 1,
              Minimum_number_students: null,
              Maximum_number_students: null,
              Weight_per_credit: null,
            },
          ],
        },
      },

      value: undefined,
      current: 0,
      steps: [
        {
          index: 1,
          title: "กำหนดชื่อ",
        },
        {
          index: 2,
          title: "ตั้งค่าเงื่อนไขการคำนวณ",
        },
        {
          index: 3,
          title: "ตรวจสอบ",
        },
      ],
    };
  },
  methods: {
    //ตรวจสอบการกรอกข้อมูล
    validate_add() {
      //false กรุณากรอก ข้อมูลว่าง
      let check = null;

      if (this.current == 0) {
        if (
          this.criteria_name == null ||
          this.criteria_start_date == null ||
          this.criteria_name == ""
        ) {
          check = false;
          console.log("test");
        } else {
          check = true;
          console.log("กรอกแล้ว");
        }
      } else if (this.current == 1) {
        if (
          this.criteria_rate_per_credit == null || this.criteria_rate_per_credit == "" ||
          this.criteria_start_date == null ||
          this.criteria_name == ""
        ) {
          check = false;
          console.log("test");
        } else {
          check = true;
          console.log("กรอกแล้ว");
        }
      }

      return check;
    },
    // บันทึก ตั้งค่าอัตราการจ่ายค่าตอบแทนภาระงานสอน
    add_criteria() {
      this.$message.success(
        "บันทึกตั้งค่าอัตราการจ่ายค่าตอบแทนภาระงานสอนเสร็จสิ้น"
      );

      console.log(
        "ตัวแปรที่ใช้ในการกำหนดอัตราการจ่ายค่าตอบแทน\n" +
          "criteria_name : " +
          this.criteria_name +
          "\n" +
          "criteria_start_date : " +
          this.criteria_start_date +
          "\n" +
          "criteria_creat_by : " +
          this.criteria_creat_by +
          "\n" +
          "criteria_rate_per_credit : " +
          this.criteria_rate_per_credit +
          "\n" +
          "nmp_minimum : " +
          this.nmp_minimum +
          "\n" +
          "nmp_maximum : " +
          this.nmp_maximum +
          "\n"
      );

      console.log("วิชาในหลักสูตร\n");
      console.log(this.criteria_Internal);

      console.log("วิชานอกหลักสูตร\n");
      console.log(this.criteria_external);
    },

    next() {
      if (this.validate_add()) {
        console.log(this.criteria_name);
        this.current++;
      } else {
        console.log("กรุณากรอกข้อความ");
        console.log(this.validate_add());
      }
    },
    prev() {
      this.current--;
    },
    onChange(e) {
      console.log(e);
    },
    onChangedate(date, dateString) {
      console.log(date, dateString);
    },
    handleSearch(value) {
      fetch(value, (data) => (this.data = data));
    },
    handleChange(value) {
      console.log(value);
      this.value = value;
      fetch(value, (data) => (this.data = data));
    },

    //  วิชาใน
    //delet_criteria_Internal_condition_lecture ลบเงื่อนไขวิชาใน บรรยาย
    delet_criteria_Internal_condition_lecture(index) {
      this.criteria_Internal.lecture.index_condition--;
      this.criteria_Internal.lecture.condition.splice(index, 1);
      console.log(this.criteria_Internal.lecture.index_condition);
      console.log(
        this.criteria_Internal.lecture.condition[
          this.criteria_Internal.lecture.index_condition
        ]
      );
    },
    //add_criteria_Internal_condition_lecture  เพิ่มเงื่อนไขวิชาใน บรรยาย
    add_criteria_Internal_condition_lecture() {
      let data = {
        key: this.criteria_Internal.lecture.condition.length + 1,
        Minimum_number_students: this.criteria_Internal.lecture.condition[
          this.criteria_Internal.lecture.index_condition
        ].Minimum_number_students,
        Maximum_number_students: this.criteria_Internal.lecture.condition[
          this.criteria_Internal.lecture.index_condition
        ].Maximum_number_students,
        Weight_per_credit: this.criteria_Internal.lecture.condition[
          this.criteria_Internal.lecture.index_condition
        ].Weight_per_credit,
      };

      console.log(
        "ก่อนเพิ่ม : " + this.criteria_Internal.lecture.index_condition
      );
      this.criteria_Internal.lecture.condition.push(data);
      console.log(this.criteria_Internal.lecture.condition);
      this.criteria_Internal.lecture.index_condition++;
      console.log(
        "หลังเพิ่ม : " + this.criteria_Internal.lecture.index_condition
      );
    },
    //delet_criteria_Internal_condition_lab  ลบเงื่อนไขวิชาใน การสอนแบบปฏิบัติการ
    delet_criteria_Internal_condition_lab(index) {
      this.criteria_Internal.lab.index_condition--;
      this.criteria_Internal.lab.condition.splice(index, 1);
      console.log(this.criteria_Internal.lab.index_condition);
      console.log(
        this.criteria_Internal.lab.condition[
          this.criteria_Internal.lab.index_condition
        ]
      );
    },
    //add_criteria_Internal_condition_lab  เพิ่มเงื่อนไขวิชาใน การสอนแบบปฏิบัติการ
    add_criteria_Internal_condition_lab() {
      let data = {
        key: this.criteria_Internal.lab.condition.length + 1,
        Minimum_number_students: this.criteria_Internal.lab.condition[
          this.criteria_Internal.lab.index_condition
        ].Minimum_number_students,
        Maximum_number_students: this.criteria_Internal.lab.condition[
          this.criteria_Internal.lab.index_condition
        ].Maximum_number_students,
        Weight_per_credit: this.criteria_Internal.lab.condition[
          this.criteria_Internal.lab.index_condition
        ].Weight_per_credit,
      };

      console.log("ก่อนเพิ่ม : " + this.criteria_Internal.lab.index_condition);
      this.criteria_Internal.lab.condition.push(data);
      console.log(this.criteria_Internal.lab.condition);
      this.criteria_Internal.lab.index_condition++;
      console.log("หลังเพิ่ม : " + this.criteria_Internal.lab.index_condition);
    },

    //  วิชานอก
    //delet_criteria_external_condition_lecture ลบเงื่อนไขวิชาใน การสอนแบบบรรยาย
    delet_criteria_external_condition_lecture(index) {
      this.criteria_external.lecture.index_condition--;
      this.criteria_external.lecture.condition.splice(index, 1);
      console.log(this.criteria_external.lecture.index_condition);
      console.log(
        this.criteria_external.lecture.condition[
          this.criteria_external.lecture.index_condition
        ]
      );
    },
    //add_criteria_external_condition_lecture  เพิ่มเงื่อนไขวิชาใน การสอนแบบบรรยาย
    add_criteria_external_condition_lecture() {
      let data = {
        key: this.criteria_external.lecture.condition.length + 1,
        Minimum_number_students: this.criteria_external.lecture.condition[
          this.criteria_external.lecture.index_condition
        ].Minimum_number_students,
        Maximum_number_students: this.criteria_external.lecture.condition[
          this.criteria_external.lecture.index_condition
        ].Maximum_number_students,
        Weight_per_credit: this.criteria_external.lecture.condition[
          this.criteria_external.lecture.index_condition
        ].Weight_per_credit,
      };

      console.log(
        "ก่อนเพิ่ม : " + this.criteria_external.lecture.index_condition
      );
      this.criteria_external.lecture.condition.push(data);
      console.log(this.criteria_external.lecture.condition);
      this.criteria_external.lecture.index_condition++;
      console.log(
        "หลังเพิ่ม : " + this.criteria_external.lecture.index_condition
      );
    },
    //delet_criteria_external_condition_lab  ลบเงื่อนไขวิชาใน การสอนแบบปฏิบัติการ
    delet_criteria_external_condition_lab(index) {
      this.criteria_external.lab.index_condition--;
      this.criteria_external.lab.condition.splice(index, 1);
      console.log(this.criteria_external.lab.index_condition);
      console.log(
        this.criteria_external.lab.condition[
          this.criteria_external.lab.index_condition
        ]
      );
    },
    //add_criteria_external_condition_lab  เพิ่มเงื่อนไขวิชาใน การสอนแบบปฏิบัติการ
    add_criteria_external_condition_lab() {
      let data = {
        key: this.criteria_external.lab.condition.length + 1,
        Minimum_number_students: this.criteria_external.lab.condition[
          this.criteria_external.lab.index_condition
        ].Minimum_number_students,
        Maximum_number_students: this.criteria_external.lab.condition[
          this.criteria_external.lab.index_condition
        ].Maximum_number_students,
        Weight_per_credit: this.criteria_external.lab.condition[
          this.criteria_external.lab.index_condition
        ].Weight_per_credit,
      };

      console.log("ก่อนเพิ่ม : " + this.criteria_external.lab.index_condition);
      this.criteria_external.lab.condition.push(data);
      console.log(this.criteria_external.lab.condition);
      this.criteria_external.lab.index_condition++;
      console.log("หลังเพิ่ม : " + this.criteria_external.lab.index_condition);
    },
  },
};
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #ffffff;
  min-height: 200px;
  text-align: center;
}

.steps-action {
  margin-top: 10px;
}
</style>