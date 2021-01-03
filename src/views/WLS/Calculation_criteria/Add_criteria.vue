<template>
  <div id="Add_criteria">
    <a-card size="small">
      <a-steps :current="current">
        <a-step v-for="item in steps" :key="item.title" :title="item.title" />
      </a-steps>
      <div class="steps-content">
        <div v-if="current == 0" style="padding-top: 50px">
          <a-row :gutter="[8, 8]">
            <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
            <a-col :span="12" style="margin: 0.2em 0px">
              <span>ชื่อกำหนดการ: </span>

              <a-input
                v-model="criteria_name"
                placeholder="กรุณากรอกชื่อ"
                allow-clear
                @change="onChange"
                style="width: 500px"
              />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
            <a-col :span="12" style="margin: 0.2em 0px">
              <span>วันที่เริ่มใช้งาน: </span>

              <a-date-picker
                style="width: 500px"
                v-model="criteria_start_date"
                @change="onChangedate"
              />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
          </a-row>
        </div>
        <div v-if="current == 1">
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
              <a-col :span="6" style="margin: 0.2em 0px"
                >อัตราเงินต่อหน่วยกิต:</a-col
              >
              <a-col :span="6" style="margin: 0.2em 0px">
                <a-input v-model="criteria_rate_per_credit"  addon-after="บาท" type="number"
              /></a-col>
              <a-col :span="6" style="margin: 0.2em 0px"></a-col>
            </a-row>
          </a-card>

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
                    <h1>ปฏิบัติการ</h1>
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
              
                    <a-input v-model="criteria_Internal.lab.Bachelor"  addon-after="คน" type="number" />
                  
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
                    <a-input v-model="criteria_Internal.lab.Graduate" addon-after="คน" type="number" />
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
                      :columns="columns_order_meterail"
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
                      <span slot="order_meterail_name" >
                        <div :style="{ textAlign: 'center' }">
                          <span style="font-size: 18px"
                            >จำนวนนิสิตที่เกิน:
                          </span>
                       
                          <a-input
                            
                            type="number"
                            style="width: 14%"
                            addon-after="คน"
                          >

                          </a-input>
                          <span style="font-size: 18px"> ถึง </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 14%"
                            addon-after="คน"
                          ></a-input>
                          <span style="font-size: 18px"> เท่ากับ </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 40%"
                            addon-after="ค่าน้ำหนักต่อหน่วยกิต"
                          ></a-input>
                        </div>
                      </span>
                      <span slot="order_meterail_amount">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="จำนวนวัสดุ" />
                        </div>
                      </span>

                      <span slot="order_meterail_price">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="ราคารวมของวัสดุ" />
                        </div>
                      </span>

                      <span slot="meterail_note">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="ระบุหมายเหตุการเบิก" />
                        </div>
                      </span>

                      <span slot="action" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <a-tooltip placement="top">
                            <template slot="title">
                              <span>ลบข้อมูลวัสดุ</span>
                            </template>
                            <a-button
                              :disabled="meterail.length == 1"
                              type="danger"
                              icon="close"
                              @click="deleteRecordMeterail(index)"
                            >
                            </a-button>
                          </a-tooltip>
                        </div>
                      </span>
                    </a-table>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]" type="flex" justify="center">
                  <a-col :span="20">
                    <a-button
                      type="dashed"
                      style="width: 100%"
                      icon="plus"
                      @click="addtest()"
                      >เพิ่มเงื่อนไขช่วงค่าน้ำหนักต่อหน่วยกิต
                    </a-button>
                  </a-col>
                </a-row>
              </a-card>
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>บรรยาย</h1>
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
                    <a-input v-model="bachelors_degree" addon-after="คน" />
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
                    <a-input id="" name="" addon-after="คน" />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]" justify="center">
                  <a-col :span="24">
                    <a-table
                      :columns="columns_order_meterail"
                      :data-source="meterail"
                      :pagination="false"
                      size="small"
                      bordered
                    >
                      <span slot="key" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          {{ index + 1 }}
                        </div>
                      </span>
                      <span slot="order_meterail_name">
                        <div :style="{ textAlign: 'center' }">
                          <span style="font-size: 18px"
                            >จำนวนนิสิตที่เกิน:
                          </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 14%"
                            addon-after="คน"
                          >
                          </a-input>
                          <span style="font-size: 18px"> ถึง </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 14%"
                            addon-after="คน"
                          ></a-input>
                          <span style="font-size: 18px"> เท่ากับ </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 40%"
                            addon-after="ค่าน้ำหนักต่อหน่วยกิต"
                          ></a-input>
                        </div>
                      </span>
                      <span slot="order_meterail_amount">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="จำนวนวัสดุ" />
                        </div>
                      </span>

                      <span slot="order_meterail_price">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="ราคารวมของวัสดุ" />
                        </div>
                      </span>

                      <span slot="meterail_note">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="ระบุหมายเหตุการเบิก" />
                        </div>
                      </span>

                      <span slot="action" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <a-tooltip placement="top">
                            <template slot="title">
                              <span>ลบข้อมูลวัสดุ</span>
                            </template>
                            <a-button
                              :disabled="meterail.length == 1"
                              type="danger"
                              icon="close"
                              @click="deleteRecordMeterail(index)"
                            >
                            </a-button>
                          </a-tooltip>
                        </div>
                      </span>
                    </a-table>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]" type="flex" justify="center">
                  <a-col :span="20">
                    <a-button
                      type="dashed"
                      style="width: 100%"
                      icon="plus"
                      @click="addRecordMeterail()"
                      >เพิ่มเงื่อนไขช่วงค่าน้ำหนักต่อหน่วยกิต
                    </a-button>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
            <a-col :span="12" style="margin: 0.2em 0px; text-align: center">
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col :span="24" style="margin: 0.2em 0p">
                    <a-card-meta title="วิชาศึกษาทั่วไป"> </a-card-meta>
                  </a-col>
                </a-row>
              </a-card>
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>ปฏิบัติการ</h1>
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
                    <a-input id="" name="" addon-after="คน" />
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
                    <a-input id="" name="" addon-after="คน" />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]" justify="center">
                  <a-col :span="24">
                    <a-table
                      :columns="columns_order_meterail"
                      :data-source="meterail"
                      :pagination="false"
                      size="small"
                      bordered
                    >
                      <span slot="key" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          {{ index + 1 }}
                        </div>
                      </span>
                      <span slot="order_meterail_name">
                        <div :style="{ textAlign: 'center' }">
                          <span style="font-size: 18px"
                            >จำนวนนิสิตที่เกิน:
                          </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 14%"
                            addon-after="คน"
                          >
                          </a-input>
                          <span style="font-size: 18px"> ถึง </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 14%"
                            addon-after="คน"
                          ></a-input>
                          <span style="font-size: 18px"> เท่ากับ </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 40%"
                            addon-after="ค่าน้ำหนักต่อหน่วยกิต"
                          ></a-input>
                        </div>
                      </span>
                      <span slot="order_meterail_amount">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="จำนวนวัสดุ" />
                        </div>
                      </span>

                      <span slot="order_meterail_price">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="ราคารวมของวัสดุ" />
                        </div>
                      </span>

                      <span slot="meterail_note">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="ระบุหมายเหตุการเบิก" />
                        </div>
                      </span>

                      <span slot="action" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <a-tooltip placement="top">
                            <template slot="title">
                              <span>ลบข้อมูลวัสดุ</span>
                            </template>
                            <a-button
                              :disabled="meterail.length == 1"
                              type="danger"
                              icon="close"
                              @click="deleteRecordMeterail(index)"
                            >
                            </a-button>
                          </a-tooltip>
                        </div>
                      </span>
                    </a-table>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]" type="flex" justify="center">
                  <a-col :span="20">
                    <a-button
                      type="dashed"
                      style="width: 100%"
                      icon="plus"
                      @click="addRecordMeterail()"
                      >เพิ่มเงื่อนไขช่วงค่าน้ำหนักต่อหน่วยกิต
                    </a-button>
                  </a-col>
                </a-row>
              </a-card>
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>บรรยาย</h1>
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
                    <a-input id="" name="" addon-after="คน" />
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
                    <a-input id="" name="" addon-after="คน" />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]" justify="center">
                  <a-col :span="24">
                    <a-table
                      :columns="columns_order_meterail"
                      :data-source="meterail"
                      :pagination="false"
                      size="small"
                      bordered
                    >
                      <span slot="key" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          {{ index + 1 }}
                        </div>
                      </span>
                      <span slot="order_meterail_name">
                        <div :style="{ textAlign: 'center' }">
                          <span style="font-size: 18px"
                            >จำนวนนิสิตที่เกิน:
                          </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 14%"
                            addon-after="คน"
                          >
                          </a-input>
                          <span style="font-size: 18px"> ถึง </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 14%"
                            addon-after="คน"
                          ></a-input>
                          <span style="font-size: 18px"> เท่ากับ </span>
                          <a-input
                            type="number"
                            placeholder=""
                            style="width: 40%"
                            addon-after="ค่าน้ำหนักต่อหน่วยกิต"
                          ></a-input>
                        </div>
                      </span>
                      <span slot="order_meterail_amount">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="จำนวนวัสดุ" />
                        </div>
                      </span>

                      <span slot="order_meterail_price">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="ราคารวมของวัสดุ" />
                        </div>
                      </span>

                      <span slot="meterail_note">
                        <div :style="{ textAlign: 'center' }">
                          <a-input placeholder="ระบุหมายเหตุการเบิก" />
                        </div>
                      </span>

                      <span slot="action" slot-scope="text, record, index">
                        <div :style="{ textAlign: 'center' }">
                          <a-tooltip placement="top">
                            <template slot="title">
                              <span>ลบข้อมูลวัสดุ</span>
                            </template>
                            <a-button
                              :disabled="meterail.length == 1"
                              type="danger"
                              icon="close"
                              @click="deleteRecordMeterail(index)"
                            >
                            </a-button>
                          </a-tooltip>
                        </div>
                      </span>
                    </a-table>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]" type="flex" justify="center">
                  <a-col :span="20">
                    <a-button
                      type="dashed"
                      style="width: 100%"
                      icon="plus"
                      @click="addRecordMeterail()"
                      >เพิ่มเงื่อนไขช่วงค่าน้ำหนักต่อหน่วยกิต
                    </a-button>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>

        <button @click="test">sss</button>
        </div>
        <div v-if="current == 2">
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
                <a-input id="" name="" disabled v-model="criteria_name"
              /></a-col>
              <a-col :span="6" style="margin: 0.2em 0px"></a-col>
            </a-row>

            <a-row :gutter="[8, 8]">
              <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
              <a-col :span="6" style="margin: 0.2em 0px">วันที่เริ่มใช้:</a-col>
              <a-col :span="6" style="margin: 0.2em 0px">
                <a-date-picker
                  style="width: 500px"
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
                <a-input id="" name="" disabled
              /></a-col>
              <a-col :span="6" style="margin: 0.2em 0px"></a-col>
            </a-row>
            <a-row :gutter="[8, 8]">
              <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
              <a-col :span="6" style="margin: 0.2em 0px"
                >อัตราเงินต่อหน่วยกิต:</a-col
              >
              <a-col :span="6" style="margin: 0.2em 0px">
                <a-input id="" name="" addon-after="บาท" type="number"
              /></a-col>
              <a-col :span="6" style="margin: 0.2em 0px"></a-col>
            </a-row>
          </a-card>

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
                    <h1>ปฏิบัติการ</h1>
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
                    <a-input id="" name="" addon-after="คน" type="number" />
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
                    <a-input id="" name="" addon-after="คน" type="number" />
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
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span>จำนวนนิสิตที่เกิน: </span>
                    <a-input
                      style="width: 100px"
                      id=""
                      name=""
                      addon-after="คน"
                    />
                    <span> ถึง </span>
                    <a-input
                      style="width: 100px"
                      id=""
                      name=""
                      addon-after="คน"
                    />
                    <span> เท่ากับ </span
                    ><a-input style="width: 100px" id="" name="" />
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
                    <h1>บรรยาย</h1>
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
                    <a-input id="" name="" addon-after="คน" />
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
                    <a-input id="" name="" addon-after="คน" />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span>จำนวนนิสิตที่เกิน: </span>
                    <a-input
                      style="width: 100px"
                      id=""
                      name=""
                      addon-after="คน"
                    />
                    <span> ถึง </span>
                    <a-input
                      style="width: 100px"
                      id=""
                      name=""
                      addon-after="คน"
                    />
                    <span> เท่ากับ </span
                    ><a-input style="width: 100px" id="" name="" />
                    <span> ค่าน้ำหนักต่อหน่วยกิต</span>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
            <a-col :span="12" style="margin: 0.2em 0px; text-align: center">
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col :span="24" style="margin: 0.2em 0p">
                    <a-card-meta title="วิชาศึกษาทั่วไป"> </a-card-meta>
                  </a-col>
                </a-row>
              </a-card>
              <a-card size="small">
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <h1>ปฏิบัติการ</h1>
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
                    <a-input id="" name="" addon-after="คน" />
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
                    <a-input id="" name="" addon-after="คน" />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>
                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span>จำนวนนิสิตที่เกิน: </span>
                    <a-input
                      style="width: 100px"
                      id=""
                      name=""
                      addon-after="คน"
                    />
                    <span> ถึง </span>
                    <a-input
                      style="width: 100px"
                      id=""
                      name=""
                      addon-after="คน"
                    />
                    <span> เท่ากับ </span
                    ><a-input style="width: 100px" id="" name="" />
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
                    <h1>บรรยาย</h1>
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
                    <a-input id="" name="" addon-after="คน" />
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
                    <a-input id="" name="" addon-after="คน" />
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: start"
                  >
                    <h1>เงื่อนไขค่าน้ำหนัก</h1>
                  </a-col>
                </a-row>

                <a-row :gutter="[8, 8]">
                  <a-col
                    :span="24"
                    style="margin: 0.2em 0px; text-align: center"
                  >
                    <span>จำนวนนิสิตที่เกิน: </span>
                    <a-input
                      style="width: 100px"
                      id=""
                      name=""
                      addon-after="คน"
                    />
                    <span> ถึง </span>
                    <a-input
                      style="width: 100px"
                      id=""
                      name=""
                      addon-after="คน"
                    />
                    <span> เท่ากับ </span
                    ><a-input style="width: 100px" id="" name="" />
                    <span> ค่าน้ำหนักต่อหน่วยกิต</span>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="steps-action" style="text-align: end">
        <a-button v-if="current > 0" style="margin-right: 92%" @click="prev">
          ย้อนกลับ
        </a-button>
        <a-button
          v-if="current < steps.length - 1"
          type="primary"
          @click="next"
        >
          ถัดไป
        </a-button>
        <router-link
        :to="{ path: '/calculator/Calculation_criteria' }"
        >
        <a-button
          v-if="current == steps.length - 1"
          type="primary"
          @click="$message.success('บันทึกเสร็จสิน')"

        >
          บันทึก
        </a-button></router-link>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns_order_meterail: [
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
          dataIndex: "order_meterail_name",
          key: "order_meterail_name",
          width: "50%",
          scopedSlots: {
            customRender: "order_meterail_name",
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
      criteria_name: null,
    criteria_rate_per_credit :null,
    criteria_Internal:{
        
        lab:{
            Bachelor :null,
            Graduate : null,
            index_condition:0,
            condition :[{
                    key: 1,
                    Minimum_number_students: 1,
                    Maximum_number_students: null,
                    Weight_per_credit: null,
                }]
        },
        lectur:{

        },
    }
      
    

    ,
      meterail: [
        {
          key: 1,
          meterail_name: null,
          meterail_reveal: null,
          meterail_note: null,
        },
      ],

    
      criteria_start_date: null,
      data: [],
      value: undefined,
      current: 0,
      steps: [
        {
          title: "กำหนดชื่อ",
        },
        {
          title: "ตั้งค่าเงื่อนไขการคำนวณ",
        },
        {
          title: "ตรวจสอบ",
        },
      ],
    };
  },
  methods: {
      test(){
         
          console.log(this.criteria_Internal.lab.condition[0].Minimum_number_students)
      },
    next() {
      this.current++;
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
    addRecordMeterail() {
      let data_meterail = {
        key: this.meterail.length + 1,
        meterail_name: this.meterail.meterail_name,
        meterail_reveal: null,
        meterail_note: null,
      };
      console.log(this.meterail);
      this.meterail.push(data_meterail);
    },


      
    deleteRecordMeterail(index) {
      this.meterail.splice(index, 1);
      
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