<template>
  <div class="MDS_exchequer">
    <!-- ส่วนแสดง CARD รายงาน -->
    <a-row :gutter="[8, 8]">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xxl="4">
        <a-card>
          <a-row>
            <a-col :span="5">
              <a-icon
                type="database"
                :style="{
                  fontSize: '580%',
                  color: '#1890ff',
                }"
              />
            </a-col>
            <a-col :span="19" style="text-align:end">
              <div class="text-head">วัสดุทังหมด</div>
              <div><span class="text-number "> 4 </span>รายการ</div>
              <div>วัสดุทั้งหมดที่มีในคลัง</div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xxl="5">
        <a-card>
          <a-row :gutter="[8, 8]">
            <a-col :span="5">
              <a-icon
                type="check-circle"
                :style="{
                  fontSize: '550%',
                  color: '#28a745',
                }"
              />
            </a-col>
            <a-col :span="19" style="text-align:end">
              <div class="text-head">รายการวัสดุที่เบิกได้</div>
              <div><span class="text-number ">3 </span>รายการ</div>
              <div>รายการวัสดุที่สามารถเบิกได้</div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xxl="5">
        <a-card>
          <a-row :gutter="[8, 8]">
            <a-col :span="5">
              <a-icon
                type="close-circle"
                :style="{
                  fontSize: '550%',
                }"
              />
            </a-col>
            <a-col :span="19" style="text-align:end">
              <div class="text-head">รายการวัสดุที่งดเบิก</div>
              <div><span class="text-number ">1 </span>รายการ</div>
              <div>รายการวัสดุที่ไม่สามารถเบิกได้</div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xxl="5">
        <a-card>
          <a-row>
            <a-col :span="4">
              <a-icon
                type="warning"
                :style="{
                  fontSize: '580%',
                  color: '#f0b95a',
                }"
              />
            </a-col>
            <a-col :span="20" style="text-align:end">
              <div class="text-head">รายการวัสดุใกล้หมดคลัง</div>
              <div><span class="text-number ">1 </span>รายการ</div>
              <div>วัสดุที่คงเหลือน้อยกว่าค่าต่ำสุด</div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xxl="5">
        <a-card>
          <a-row>
            <a-col :span="4">
              <a-icon
                type="stop"
                :style="{
                  fontSize: '580%',
                  color: '#ff4d4f',
                }"
              />
            </a-col>
            <a-col :span="20" style="text-align:end">
              <div class="text-head">รายการวัสดุหมดคลัง</div>
              <div><span class="text-number ">1 </span>รายการ</div>
              <div>รายการวัสดุที่คงเหลือเป็น 0</div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <!-- สิ้นสุดส่วนแสดง CARD รายงาน -->
    <!-- ส่วนแสดงรายการวัสดุ -->
    <a-row :gutter="[8, 8]">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xxl="24">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="20" style="margin: 0.2em 0px;">
              <a-card-meta title="รายการวัสดุ/อุปกรณ์ : ปี 2563">
                <a-icon
                  slot="avatar"
                  type="folder-open"
                  :style="{
                    fontSize: '150%',
                  }"
                />
              </a-card-meta>
            </a-col>
            <a-col :span="4" :style="{ textAlign: 'right' }">
              <a-tooltip placement="top">
                <template slot="title">
                  <span>ส่งออกไฟล์ PDF</span>
                </template>
                <a-button
                  type="danger"
                  icon="file-pdf"
                  :style="{ marginRight: '3%' }"
                  @click="exportPDF()"
                />
              </a-tooltip>

              <a-tooltip placement="top">
                <template slot="title">
                  <span>ส่งออกไฟล์ EXCEL</span>
                </template>
                <a-button
                  type="success"
                  icon="file-excel"
                  :style="{ marginRight: '3%' }"
                />
              </a-tooltip>

              <a-button
                type="primary"
                icon="plus"
                @click="insertAndupdateMeterail('insert')"
              >
                เพิ่มรายการวัสดุ
              </a-button>
            </a-col>
          </a-row>
          <hr style="width:100%" />
          <a-row :gutter="[8, 8]" type="flex" justify="end">
            <a-col :span="3" style="text-align:end">
              <a-select :default-value="null" style="width: 100%">
                <a-select-option :value="null">
                  วัสดุทั้งหมด
                </a-select-option>
                <a-select-option value="1">
                  วัสดุที่สามารถเบิกได้
                </a-select-option>
                <a-select-option value="2">
                  วัสดุงดเบิก
                </a-select-option>
                <a-select-option value="3">
                  วัสดุใกล้หมดสต๊อก
                </a-select-option>
                <a-select-option value="4">
                  วัสดุหมดสต๊อก
                </a-select-option>
              </a-select>
            </a-col>
            <a-col :span="5" style="text-align:end">
              <a-input-search
                placeholder="ค้นหาตามรหัส หรือ ชื่อวัสดุ"
                style="width: 100%"
              />
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="24">
              <a-table
                :columns="meterail_columns"
                :data-source="meterail_record"
                :pagination="false"
                size="small"
                :scroll="{ y: 500 }"
                bordered
              >
                <span slot="key" slot-scope="text, record, index">
                  <div :style="{ textAlign: 'center' }">
                    {{ index + 1 }}
                  </div>
                </span>
                <span slot="meterail_image" slot-scope="text">
                  <div :style="{ textAlign: 'center', marginTop: '10%' }">
                    <img :src="text" alt="" />
                  </div>
                </span>
                <span slot="meterail_list" slot-scope="text, record, index">
                  <div :style="{ textAlign: 'left', fontSize: '16px' }">
                    <b>หมายเลขวัสดุ : </b> {{ record.meterail_code }}
                  </div>
                  <div :style="{ textAlign: 'left', fontSize: '16px' }">
                    <b>ชื่อวัสดุ : </b> {{ record.meterail_name }}
                  </div>
                  <div :style="{ textAlign: 'left', fontSize: '16px' }">
                    <b>หมวดหมู่ : </b>
                    {{ catergory[record.meterail_catergory].text }}
                  </div>
                  <div :style="{ textAlign: 'left', fontSize: '16px' }">
                    <b>จำนวนขั้นต่ำ : </b> {{ record.meterail_minimum }}
                  </div>
                  <div :style="{ textAlign: 'left', fontSize: '16px' }">
                    <b>หน่วยนับ : </b> {{ unit[record.meterail_unit - 1].text }}
                  </div>
                  <div :style="{ textAlign: 'left', fontSize: '16px' }">
                    <b>สถานะ : </b>
                    <span>
                      <a-tag
                        v-for="tag in record.meterail_status"
                        :key="tag"
                        :color="
                          tag.status === 1
                            ? '#28a745'
                            : tag.status === 2
                            ? ''
                            : tag.status === 3
                            ? '#f0b95a'
                            : '#ff4d4f'
                        "
                      >
                        {{ tag.tag }}
                      </a-tag>
                    </span>
                  </div>
                  <br />
                  <div :style="{ textAlign: 'left', fontSize: '16px' }">
                    <a-button
                      type="primary"
                      icon="search"
                      @click="visible = !visible"
                    >
                      ตรวจสอบ
                    </a-button>
                    <a-button
                      type="warning"
                      icon="edit"
                      @click="insertAndupdateMeterail(index)"
                    >
                      แก้ไขข้อมูลวัสดุ
                    </a-button>
                    <router-link
                      :to="{
                        path: '/MDS_exchequer/MDS_exchequer_adjust_suppiles',
                      }"
                    >
                      <a-button type="info" icon="block">
                        ปรับยอดคงเหลือวัสดุ
                      </a-button>
                    </router-link>
                  </div>
                </span>
                <span slot="meterail_import" slot-scope="text">
                  <div :style="{ textAlign: 'center', fontSize: '16px' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="meterail_export" slot-scope="text">
                  <div :style="{ textAlign: 'center', fontSize: '16px' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="meterail_adjust" slot-scope="text">
                  <div :style="{ textAlign: 'center', fontSize: '16px' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="meterail_balance" slot-scope="text">
                  <div :style="{ textAlign: 'center', fontSize: '16px' }">
                    {{ text }}
                  </div>
                </span>
              </a-table>
            </a-col>
          </a-row>
          <br />
          <a-row>
            <a-col :span="15">
              <p :style="{ margin: '0.3em 0.5%' }">1-10 จาก 10 รายการ</p>
            </a-col>
            <a-col :span="9" :style="{ textAlign: 'Right' }">
              แสดงทีละ
              <a-select
                default-value="10"
                :style="{ width: '60px', marginRight: '1%' }"
              >
                <a-select-option value="10">
                  10
                </a-select-option>
                <a-select-option value="25">
                  25
                </a-select-option>
                <a-select-option value="50">
                  50
                </a-select-option>
                <a-select-option value="100">
                  100
                </a-select-option>
              </a-select>

              <a-pagination
                :style="{ display: 'inline' }"
                v-model="current"
                :total="total"
                :page-size="10"
              />
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <!-- สิ้นสุดส่วนแสดงรายการวัสดุ -->
    <!-- Modal แก้ไขวัสดุ -->
    <a-modal
      name="insert_and_edit_meterail"
      width="800px"
      centered
      v-model="meterail_insert"
      :title="title_modal_edit"
    >
      <a-row :gutter="[24, 16]">
        <a-col :span="11">
          <a-upload
            name="avatar"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="false"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :before-upload="beforeUpload"
            @change="handleChange"
          >
            <img
              v-if="meterail.meterail_image"
              :src="meterail.meterail_image"
              alt="avatar"
            />
            <div style="width:auto" v-else>
              <a-icon :type="loading ? 'loading' : 'plus'" />
              <div class="ant-upload-text">
                เลือกรูปวัสดุ
              </div>
            </div>
          </a-upload>
        </a-col>
        <a-col :span="13">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" class="label">
              ชื่อวัสดุ
            </a-col>
            <a-col :span="24">
              <a-input
                width="100%"
                placeholder="ชื่อวัสดุ"
                v-model="meterail.meterail_name"
              />
            </a-col>
            <a-col :span="24" class="label">
              หมวดหมู่วัสดุ
            </a-col>
            <a-col :span="24">
              <a-select
                :default-value="meterail.meterail_catergory"
                v-model="meterail.meterail_catergory"
                style="width: 100%"
              >
                <a-select-option :value="null" disabled>
                  โปรดเลือกหมวดหมู่วัสดุ
                </a-select-option>
                <a-select-option :value="1">
                  อุปกรณ์สำนักงาน
                </a-select-option>
                <a-select-option :value="2">
                  อุปกรณ์ทั่วไป
                </a-select-option>
              </a-select>
            </a-col>
            <a-col :span="14" class="label">
              จำนวนขั้นต่ำ
            </a-col>
            <a-col :span="10" class="label">
              หน่วยนับ
            </a-col>
            <a-col :span="14">
              <a-input
                width="100%"
                placeholder="ชื่อวัสดุ"
                type="number"
                min="0"
                v-model="meterail.meterail_minimum"
              />
            </a-col>
            <a-col :span="10">
              <a-select
                :default-value="meterail.meterail_unit"
                v-model="meterail.meterail_unit"
                style="width: 100%"
                @change="handleChange"
              >
                <a-select-option :value="null" disabled>
                  โปรดเลือกหน่วยนับวัสดุ
                </a-select-option>
                <a-select-option :value="1">
                  รีม
                </a-select-option>
                <a-select-option :value="2">
                  ด้าม
                </a-select-option>
                <a-select-option :value="3">
                  ม้วน
                </a-select-option>
                <a-select-option :value="4">
                  กล่อง
                </a-select-option>
              </a-select>
            </a-col>
            <a-col :span="24" class="label">
              สถานะการเบิกจ่าย
            </a-col>
            <a-col :span="24">
              <a-select
                :default-value="meterail.meterail_status"
                v-model="meterail.meterail_status"
                style="width: 100%"
              >
                <a-select-option :value="1">
                  เบิกได้
                </a-select-option>
                <a-select-option :value="2">
                  งดเบิก
                </a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      <template slot="footer">
        <a-row :gutter="[8, 8]">
          <a-col :span="12" :style="{ textAlign: 'start' }">
            <a-button type="danger">
              ยกเลิก
            </a-button>
          </a-col>
          <a-col :span="12">
            <a-button type="success" icon="save" @click="saveMeterail()">
              บันทึก
            </a-button>
          </a-col>
        </a-row>
      </template>
    </a-modal>
    <!-- ส้นสุด Modal แก้ไขวัสดุ -->
    <!-- Modal ตรวจสอบ -->
    <a-modal
      width="1000px"
      :dialog-style="{ top: '5%' }"
      v-model="visible"
      title="การทำรายการวัสดุหมายเลข : MDS5010770"
    >
      <a-row :gutter="[8, 8]">
        <a-col :span="10" style="text-align:center">
          <img
            alt="example"
            width="50%"
            src="https://www.dohome.co.th/media/catalog/product/cache/2/image/255x255/9df78eab33525d08d6e5fb8d27136e95/1/0/10024002_REM_1200_1.jpg"
          />
        </a-col>
        <a-col :span="14">
          <p><b>หมายเลขวัสดุ</b> : MDS5010770</p>
          <p><b>ชื่อวัสดุ</b> : กระดาษถ่ายเอกสาร A4 Double A</p>
          <p><b>หมวดหมู่</b> : อุปกรณ์สำนักงาน</p>
          <p><b>หน่วยนับ </b> : รีม</p>
          <p><b>จำนวนคงเหลือ </b> : 65</p>
          <p>
            <b>สถานะ </b> :
            <a-tag :color="'#28a745'">
              เบิกได้
            </a-tag>
          </p>
        </a-col>
      </a-row>
      <a-row :gutter="[8, 8]">
        <a-col :span="15" style="margin: 0.3em 0px;font-size: 115%;"
          ><b>ตารางแสดงรายการทำรายการ</b>
        </a-col>
        <a-col
          :span="7"
          style="margin: 0.3em 0px;font-size: 115%; text-align:end"
          ><b>ปี </b>
        </a-col>
        <a-col :span="2" style="text-align:end">
          <a-select :default-value="2563" style="width: 100%">
            <a-select-option :value="2563">
              2563
            </a-select-option>
            <a-select-option :value="2562">
              2562
            </a-select-option>
            <a-select-option :value="2561">
              2561
            </a-select-option>
          </a-select>
        </a-col>
      </a-row>
      <a-row :gutter="[8, 8]">
        <a-col :span="24" style="text-align:center">
          <a-table
            :columns="columns_metertail_detail"
            :data-source="metertail_detail"
            :pagination="false"
            size="small"
            bordered
          >
            <span slot="index" slot-scope="text, record, index">
              <div :style="{ textAlign: 'center' }">
                {{ index + 1 }}
              </div>
            </span>
            <span slot="metertail_detail_date" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="metertail_detail_type" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="metertail_detail_amount" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="metertail_detail_balance" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>

            <span slot="metertail_detail_note" slot-scope="text">
              <div :style="{ textAlign: 'left' }">
                {{ text }}
              </div>
            </span>
          </a-table>
        </a-col>
      </a-row>
      <br />
      <a-row>
        <a-col :span="15">
          <p :style="{ margin: '0.3em 0.5%' }">1-10 จาก 10 รายการ</p>
        </a-col>
        <a-col :span="9" :style="{ textAlign: 'Right' }">
          แสดงทีละ
          <a-select
            default-value="10"
            :style="{ width: '60px', marginRight: '1%' }"
          >
            <a-select-option value="10">
              10
            </a-select-option>
            <a-select-option value="25">
              25
            </a-select-option>
            <a-select-option value="50">
              50
            </a-select-option>
            <a-select-option value="100">
              100
            </a-select-option>
          </a-select>

          <a-pagination
            :style="{ display: 'inline' }"
            v-model="current"
            :total="total"
            :page-size="10"
          />
        </a-col>
      </a-row>
      <template slot="footer">
        <a-button @click="visible = !visible">
          ปิด
        </a-button>
      </template>
    </a-modal>
    <!-- สิ้นสุด Modal ตรวจสอบ -->
  </div>
</template>
<script>
import pdfMake from "pdfmake";
import pdfFonts from "@/assets/fontsPDF/THSarabunPsk-fonts.js"; // 1. import custom fonts

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  components: {},
  data() {
    return {
      meterail_columns: [
        {
          title: "#",
          dataIndex: "key",
          key: "key",
          width: "2%",
          scopedSlots: {
            customRender: "key",
          },
          type: "flex",
          align: "top",
        },
        {
          title: "รูปภาพ",
          dataIndex: "meterail_image",
          key: "meterail_image",
          width: "5%",
          scopedSlots: {
            customRender: "meterail_image",
          },
        },
        {
          title: "รายการ",
          dataIndex: "meterail_list",
          key: "meterail_list",
          width: "15%",
          scopedSlots: {
            customRender: "meterail_list",
          },
        },
        {
          title: "จำนวนวัสดุ",
          children: [
            {
              title: "นำเข้า",
              dataIndex: "meterail_import",
              key: "meterail_import",
              width: "5%",
              scopedSlots: { customRender: "meterail_import" },
            },
            {
              title: "เบิกจ่าย",
              dataIndex: "meterail_export",
              key: "meterail_export",
              width: "5%",
              scopedSlots: { customRender: "meterail_export" },
            },
            {
              title: "ปรับยอด",
              dataIndex: "meterail_adjust",
              key: "meterail_adjust",
              width: "5%",
              scopedSlots: { customRender: "meterail_adjust" },
            },
            {
              title: "คงเหลือ",
              dataIndex: "meterail_balance",
              key: "meterail_balance",
              width: "5%",
              scopedSlots: { customRender: "meterail_balance" },
            },
          ],
        },
      ],
      meterail_record: [
        {
          key: 1,
          meterail_image:
            "https://www.dohome.co.th/media/catalog/product/cache/2/image/255x255/9df78eab33525d08d6e5fb8d27136e95/1/0/10024002_REM_1200_1.jpg",
          meterail_code: "MDS5010770",
          meterail_name: "กระดาษถ่ายเอกสาร A4 Double A",
          meterail_catergory: 1,
          meterail_unit: 1,
          meterail_status: [
            {
              status: 1,
              tag: "งดเบิก",
            },
          ],
          meterail_minimum: 50,
          meterail_import: 100,
          meterail_export: 25,
          meterail_adjust: 10,
          meterail_balance: 65,
        },
        {
          key: 2,
          meterail_image:
            "https://www.janivisoffice.co.th/wp-content/uploads/2017/11/%E0%B8%9B%E0%B8%B2%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B9%80%E0%B8%84%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%87%E0%B8%AB%E0%B8%B1%E0%B8%A7-%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B9%89%E0%B8%B2-%E0%B8%AA%E0%B8%B5%E0%B8%94%E0%B8%B3-1.jpeg",
          meterail_code: "MDS1000787",
          meterail_name: "ปากกามาร์คเกอร์ 2 หัว หมึกสีดำ ตราม้า",
          meterail_catergory: 1,
          meterail_unit: 2,
          meterail_status: [
            {
              status: 2,
              tag: "งดเบิก",
            },
          ],
          meterail_minimum: 20,
          meterail_import: 50,
          meterail_export: 10,
          meterail_adjust: 10,
          meterail_balance: 30,
        },
        {
          key: 3,
          meterail_image:
            "https://aumento.officemate.co.th/media/catalog/product/O/F/OFM3101160.jpg?imwidth=640",
          meterail_code: "MDS3101160",
          meterail_name: "เทปใส แกน 1 นิ้ว 3/4 นิ้วx36 หลา",
          meterail_catergory: 1,
          meterail_unit: 3,
          meterail_status: [
            {
              status: 1,
              tag: "เบิกได้",
            },
            {
              status: 3,
              tag: "ใกล้หมด",
            },
          ],
          meterail_minimum: 10,
          meterail_import: 10,
          meterail_export: 5,
          meterail_adjust: 2,
          meterail_balance: 5,
        },
        {
          key: 4,
          meterail_image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQOrUDgpMtEcV18mI8Go6RQdfHQPjjqp4c7idVcFkUpYcC019fSvUuclTZ4oBWbRstTj_A1ptjnZgI&usqp=CAc",
          meterail_code: "MDS2000131",
          meterail_name: "ลวดเย็บแม็กซ์ 10-1M",
          meterail_catergory: 1,
          meterail_unit: 4,
          meterail_status: [
            {
              status: 1,
              tag: "เบิกได้",
            },
            {
              status: 4,
              tag: "หมด",
            },
          ],
          meterail_minimum: 10,
          meterail_import: 10,
          meterail_export: 5,
          meterail_adjust: 5,
          meterail_balance: 0,
        },
      ],
      title_modal_edit: "",
      meterail: {},
      meterail_insert: false,
      visible: false,
      loading: false,
      imageUrl: "",
      unit: [
        {
          key: 1,
          text: "รีม",
        },
        {
          key: 2,
          text: "ด้าม",
        },
        {
          key: 3,
          text: "ม้วน",
        },
        {
          key: 4,
          text: "กล่อง",
        },
      ],
      catergory: [
        {
          key: 1,
          text: "อุปกรณ์สำนักงาน",
        },
        {
          key: 2,
          text: "อุปกรณ์ทั่วไป",
        },
      ],
      columns_metertail_detail: [
        {
          title: "#",
          dataIndex: "index",
          key: "index",
          width: "2%",
          scopedSlots: {
            customRender: "index",
          },
        },
        {
          title: "วันที่รายการ",
          dataIndex: "metertail_detail_date",
          key: "metertail_detail_date",
          width: "7%",
          scopedSlots: {
            customRender: "metertail_detail_date",
          },
        },
        {
          title: "ประเภท",
          dataIndex: "metertail_detail_type",
          key: "metertail_detail_type",
          width: "7%",
          scopedSlots: {
            customRender: "metertail_detail_type",
          },
        },
        {
          title: "จำนวน",
          dataIndex: "metertail_detail_amount",
          key: "metertail_detail_amount",
          width: "7%",
          scopedSlots: {
            customRender: "metertail_detail_amount",
          },
        },
        {
          title: "คงเหลือ",
          dataIndex: "metertail_detail_balance",
          key: "metertail_detail_balance",
          width: "7%",
          scopedSlots: {
            customRender: "metertail_detail_balance",
          },
        },
        {
          title: "หมายเหตุ",
          dataIndex: "metertail_detail_note",
          key: "metertail_detail_note",
          width: "10%",
          scopedSlots: {
            customRender: "metertail_detail_note",
          },
        },
      ],
      metertail_detail: [
        {
          key: 1,
          metertail_detail_date: "10 ธันวาคม 2563",
          metertail_detail_type: "เบิกจ่าย",
          metertail_detail_amount: 25,
          metertail_detail_balance: 65,
          metertail_detail_note: "",
        },
        {
          key: 2,
          metertail_detail_date: "5 ธันวาคม 2563",
          metertail_detail_type: "ปรับยอด",
          metertail_detail_amount: 10,
          metertail_detail_balance: 90,
          metertail_detail_note: "วัสดุชำรุด/เสียหาย",
        },
        {
          key: 3,
          metertail_detail_date: "3 ธันวาคม 2563",
          metertail_detail_type: "นำเข้า",
          metertail_detail_amount: 50,
          metertail_detail_balance: 100,
          metertail_detail_note: "",
        },
        {
          key: 3,
          metertail_detail_date: "1 ธันวาคม 2563",
          metertail_detail_type: "นำเข้า",
          metertail_detail_amount: 50,
          metertail_detail_balance: 50,
          metertail_detail_note: "",
        },
      ],
    };
  },
  methods: {
    insertAndupdateMeterail(key) {
      if (key === "insert") {
        this.title_modal_edit = "เพิ่มรายการวัสดุ";
        this.meterail = {};
        this.meterail.key = -12;
        this.meterail.meterail_image = null;
        this.meterail.meterail_name = null;
        this.meterail.meterail_catergory = null;
        this.meterail.meterail_unit = null;
        this.meterail.meterail_minimum = 0;
        this.meterail.meterail_status = 1;
        this.meterail.meterail_import = 0;
        this.meterail.meterail_export = 0;
        this.meterail.meterail_adjust = 0;
        this.meterail.meterail_balance = 0;
      } else {
        this.title_modal_edit =
          "แก้ไขรายการวัสดุ : " + this.meterail_record[key].meterail_code;
        this.meterail = {};
        this.meterail.key = key;
        this.meterail.meterail_image = this.meterail_record[key].meterail_image;
        this.meterail.meterail_name = this.meterail_record[key].meterail_name;
        this.meterail.meterail_catergory = this.meterail_record[
          key
        ].meterail_catergory;
        this.meterail.meterail_unit = this.meterail_record[key].meterail_unit;
        this.meterail.meterail_minimum = this.meterail_record[
          key
        ].meterail_minimum;
        this.meterail.meterail_status = this.meterail_record[
          key
        ].meterail_status[0].status;
      }
      this.meterail_insert = true;
    },
    cancleMeterail() {
      this.meterail_insert = false;
    },
    saveMeterail() {
      this.meterail_insert = false;
    },

    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.meterail.meterail_image = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
    exportPDF() {
      let body = [["First", "Second", "Third", "The last one"]];
      let table_row = [];
      for (let i = 1; i <= 4; i++) {
        table_row.push(i);
      }
      body.push(table_row);
      console.log(body);
      pdfMake.vfs = pdfFonts.pdfMake.vfs; // 2. set vfs pdf font
      pdfMake.fonts = {
        THSarabunPsk: {
          normal: "THSarabun.ttf",
          bold: "THSarabun-Bold.ttf",
          italics: "THSarabu-Italic.ttf",
          bolditalics: "THSarabun-Bold-Italic.ttf",
        },
      };
      const docDefinition = {
        content: [
          {
            layout: "lightHorizontalLines", // optional
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 1,
              widths: ["*", "auto", 100, "*"],
              body: body,
            },
          },
        ],
        defaultStyle: {
          font: "THSarabunPsk",
        },
      };
      pdfMake.createPdf(docDefinition).open({}, window.open());
    },
  },
};
</script>
<style lang="scss">
.MDS_exchequer {
  .text-head {
    font-size: 135%;
    font-weight: 600;
  }
  .text-number {
    font-size: 135%;
    font-weight: 600;
  }

  .btn-margi_two {
    .ant-btn {
      margin-right: 1%;
    }
  }
  .ant-table {
    img {
      width: 120px;
      width: 120px;
    }
    th {
      font-size: 16px;
      font-weight: 600;
    }
    td {
      vertical-align: top;
    }
  }

  .label {
    font-size: 16px;
    font-weight: 500;
  }
}
.ant-upload {
  width: 100% !important;
  height: 309px !important;
  img {
    width: 100% !important;
    height: 309px !important;
  }
}
</style>
