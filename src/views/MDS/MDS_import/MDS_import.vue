<template>
  <div class="MDS_import">
    <a-row :gutter="[8, 8]">
      <a-col :span="14">
        <a-card>
          <a-row>
            <a-col :span="24">
              <highcharts
                :options="chartOptions"
                ref="lineCharts"
                style="position: relative; height:22.7vh; width:auto"
              ></highcharts>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="10">
        <a-row :gutter="[8, 8]">
          <a-col :span="24">
            <a-card>
              <a-row :gutter="[8, 8]">
                <a-col :span="4">
                  <a-icon
                    type="file-sync"
                    :style="{
                      fontSize: '550%',
                      color: '#1890ff',
                    }"
                  />
                </a-col>
                <a-col :span="20" style="text-align:end">
                  <div class="text-head">
                    จำนวนรายการนำเข้าวัสดุทั้งหมด : ปี 2563
                  </div>
                  <div><span class="text-number ">2 </span>รายการ</div>
                  <div>
                    จำนวนรายการนำเข้าวัสดุทั้งหมด ตั้งแต่วันที่ 1 ม.ค. 2563 ถึง
                    29 ธ.ค. 2563
                  </div>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :span="12">
            <a-card>
              <a-row>
                <a-col :span="4">
                  <a-icon
                    type="file-done"
                    :style="{
                      fontSize: '580%',
                      color: '#28a745',
                    }"
                  />
                </a-col>
                <a-col :span="20" style="text-align:end">
                  <div class="text-head">รายการนำเข้าคงเหลือ</div>
                  <div><span class="text-number ">2 </span>รายการ</div>
                  <div>รายการนำเข้าวัสดุที่คงเหลือวัสดุ</div>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :span="12">
            <a-card>
              <a-row>
                <a-col :span="4">
                  <a-icon
                    type="exception"
                    :style="{
                      fontSize: '580%',
                      color: '#ff4d4f',
                    }"
                  />
                </a-col>
                <a-col :span="20" style="text-align:end">
                  <div class="text-head">รายการนำเข้าหมด</div>
                  <div><span class="text-number ">0 </span>รายการ</div>
                  <div>รายการนำเข้าวัสดุที่คงเหลือเป็น 0</div>
                </a-col>
              </a-row>
            </a-card>
          </a-col></a-row
        >
      </a-col>
    </a-row>
    <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="20" style="margin: 0.2em 0px;">
              <a-card-meta title="รายการนำเข้าวัสดุ/อุปกรณ์ : ปี 2563">
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

              <router-link :to="{ path: '/MDS_import/MDS_import_form' }">
                <a-button type="primary" icon="plus">
                  เพิ่มรายการนำเข้าวัสดุ
                </a-button>
              </router-link>
            </a-col>
          </a-row>
          <hr style="width:100%" />
          <a-row :gutter="[8, 8]" type="flex" justify="end">
            <a-col :span="3" style="text-align:end">
              <a-date-picker
                v-model="startValue"
                :disabled-date="disabledStartDate"
                :format="moment(startValue).format('LL')"
                placeholder="วันที่เริ่มต้น"
                @openChange="handleStartOpenChange"
              />
            </a-col>
            <a-col :span="3">
              <a-date-picker
                v-model="endValue"
                :disabled-date="disabledEndDate"
                :format="moment(endValue).format('LL')"
                placeholder="วันที่สิ้นสุด"
                :open="endOpen"
                @openChange="handleEndOpenChange"
              />
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
                :columns="columns_order_import"
                :data-source="order_import"
                :pagination="false"
                size="small"
                bordered
              >
                <span slot="key" slot-scope="text, record, index">
                  <div :style="{ textAlign: 'center' }">
                    {{ index + 1 }}
                  </div>
                </span>
                <span slot="order_import_code" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="order_import_company" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="order_import_date" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="order_import_total" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="order_import_paymant" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="order_import_vat" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="order_import_paymant_total" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="order_import_creator" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>

                <span slot="action" slot-scope="text, record, index">
                  <div :style="{ textAlign: 'center' }">
                    <a-tooltip placement="top">
                      <template slot="title">
                        <span>ตรวจสอบรายการ</span>
                      </template>
                      <a-button
                        type="primary"
                        icon="search"
                        @click="visible = !visible"
                      >
                      </a-button>
                    </a-tooltip>
                    <a-tooltip placement="top">
                      <template slot="title">
                        <span>แก้ไขรายการ</span>
                      </template>
                      <a-button
                        type="warning"
                        icon="edit"
                        @click="deleteRecordMeterail(index)"
                      >
                      </a-button>
                    </a-tooltip>
                  </div>
                </span>
              </a-table>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <a-modal
      width="1200px"
      :dialog-style="{ top: '5%' }"
      v-model="visible"
      title="รายละเอียดใบรายการนำเข้าวัสดุหมายเลข : 1103-01-0005"
    >
      <a-row :gutter="[8, 0]">
        <a-col :span="24">
          <p><b>หมายเลขใบรายการ</b> : 1103-01-0005</p>
        </a-col>
        <a-col :span="8">
          <p><b>วันที่นำเข้าวัสดุ</b> : 1 ธันวาคม 2563</p>
        </a-col>
        <a-col :span="8">
          <p><b>ผู้ตรวจรับ</b> : นายกิตติศักดิ์ น้อยดอนไพร</p>
        </a-col>
        <a-col :span="8">
          <p><b>จำนวน</b> : 3 รายการ</p>
        </a-col>
        <a-col :span="8">
          <p><b>ยอดชำระ</b> : 7500.00 บาท</p>
        </a-col>
        <a-col :span="8">
          <p><b>ภาษี (7%)</b> : 525.00 บาท</p>
        </a-col>
        <a-col :span="8">
          <p><b>ยอดชำระสุทธิ</b> : 8025.00 บาท</p>
        </a-col>
      </a-row>
      <a-row :gutter="[8, 0]">
        <a-col :span="24">
          <p><b>ผู้จัดจำหน่าย</b> : บริษัท ออฟฟิศเมท (ไทย) จำกัด</p>
        </a-col>
        <a-col :span="24">
          <p>
            <b>ที่อยู่</b> : สำนักงานใหญ่ เลขที่ 919/555 อาคารเซาท์ทาวเวอร์ ชั้น
            14 ห้อง 2-6 และ 9 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500
          </p>
        </a-col>
        <a-col :span="8">
          <p><b>เบอร์ติดต่อ</b> : 1281</p>
        </a-col>
        <a-col :span="8">
          <p><b>FAX</b> : 02-763-5555</p>
        </a-col>
        <a-col :span="8">
          <p><b>E-mail</b> : contact@officemate.co.th</p>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="24" style="margin: 0.3em 0px;font-size: 100%;"
          ><b>รายการวัสดุนำเข้า</b>
        </a-col>
      </a-row>
      <a-row :gutter="[8, 8]">
        <a-col :span="24" style="text-align:center">
          <a-table
            :columns="columns_order_meterail"
            :data-source="order_meterail"
            :pagination="false"
            size="small"
            bordered
          >
            <span slot="key" slot-scope="text, record, index">
              <div :style="{ textAlign: 'center' }">
                {{ index + 1 }}
              </div>
            </span>
            <span slot="order_meterail_code" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="order_meterail_name" slot-scope="text">
              <div :style="{ textAlign: 'left' }">
                {{ text }}
              </div>
            </span>
            <span slot="order_meterail_amount" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="order_meterail_unit" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="order_meterail_price" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}.00
              </div>
            </span>
          </a-table>
        </a-col>
      </a-row>

      <template slot="footer">
        <a-button @click="visible = !visible">
          ปิด
        </a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import dataModule from "highcharts/modules/data";
import drilldown from "highcharts/modules/drilldown";

drilldown(Highcharts);
dataModule(Highcharts);
import moment from "moment";
import "moment/locale/th";
export default {
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      moment,
      startValue: null,
      endValue: null,
      endOpen: false,
      chartOptions: {
        chart: {
          type: "line",
        },
        title: {
          text: "จำนวนรายการนำเข้าวัสดุ/อุปกรณ์ : ปี 2563",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          categories: [
            "ม.ค.",
            "ก.พ.",
            "มี.ค.",
            "เม.ย.",
            "พ.ค.",
            "มิ.ย.",
            "ก.ค.",
            "ส.ค.",
            "ก.ย.",
            "ต.ค.",
            "พ.ย.",
            "ธ.ค.",
          ],
        },
        yAxis: {
          title: {
            text: "จำนวนรายการนำเข้าวัสดุ",
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: true,
          },
        },
        series: [
          {
            name: "Office Mate",
            data: [
              7.0,
              6.9,
              9.5,
              14.5,
              18.4,
              21.5,
              25.2,
              26.5,
              23.3,
              18.3,
              13.9,
              9.6,
            ],
          },
          {
            name: "Excel Choice",
            data: [
              3.9,
              4.2,
              5.7,
              8.5,
              11.9,
              15.2,
              17.0,
              16.6,
              14.2,
              10.3,
              6.6,
              4.8,
            ],
          },
        ],
      },
      columns_order_import: [
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
          title: "หมายเลขใบรายการ",
          dataIndex: "order_import_code",
          key: "order_import_code",
          width: "5%",
          scopedSlots: {
            customRender: "order_import_code",
          },
        },
        {
          title: "ผู้จัดจำหน่าย",
          dataIndex: "order_import_company",
          key: "order_import_company",
          width: "10%",
          scopedSlots: {
            customRender: "order_import_company",
          },
        },
        {
          title: "วันที่นำเข้าวัสดุ",
          dataIndex: "order_import_date",
          key: "order_import_date",
          width: "5%",
          scopedSlots: {
            customRender: "order_import_date",
          },
        },
        {
          title: "จำนวนรายการ",
          dataIndex: "order_import_total",
          key: "order_import_total",
          width: "5%",
          scopedSlots: { customRender: "order_import_total" },
        },
        {
          title: "ราคา",
          children: [
            {
              title: "ยอดชำระ",
              dataIndex: "order_import_paymant",
              key: "order_import_paymant",
              width: "5%",
              scopedSlots: { customRender: "order_import_paymant" },
            },
            {
              title: "ภาษี (7%)",
              dataIndex: "order_import_vat",
              key: "order_import_vat",
              width: "5%",
              scopedSlots: { customRender: "order_import_vat" },
            },
            {
              title: "ยอดชำระสุทธิ",
              dataIndex: "order_import_paymant_total",
              key: "order_import_paymant_total",
              width: "5%",
              scopedSlots: { customRender: "order_import_paymant_total" },
            },
          ],
        },
        {
          title: "ผู้ทำรายการ",
          dataIndex: "order_import_creator",
          key: "order_import_creator",
          width: "5%",
          scopedSlots: { customRender: "order_import_creator" },
        },
        {
          title: "ตรวจสอบ",
          dataIndex: "action",
          key: "action",
          width: "5%",
          scopedSlots: {
            customRender: "action",
          },
        },
      ],
      order_import: [
        {
          key: 1,
          order_import_code: "1103-01-0005",
          order_import_company: "บริษัท ออฟฟิศเมท (ไทย) จำกัด",
          order_import_date: "1 ธันวาคม 2563",
          order_import_total: "3",
          order_import_paymant: 7500,
          order_import_vat: 525,
          order_import_paymant_total: 8025,
          order_import_creator: "กิตติศักดิ์",
        },
        {
          key: 2,
          order_import_code: "1103-01-0007",
          order_import_company: "บริษัท ออฟฟิศเมท (ไทย) จำกัด",

          order_import_date: "3 ธันวาคม 2563",
          order_import_total: "2",
          order_import_paymant: 8000,
          order_import_vat: 560,
          order_import_paymant_total: 8560,
          order_import_creator: "กิตติศักดิ์",
        },
      ],
      columns_order_meterail: [
        {
          title: "#",
          dataIndex: "key",
          key: "key",
          width: "3%",
          scopedSlots: {
            customRender: "key",
          },
        },
        {
          title: "รหัสวัสดุ",
          dataIndex: "order_meterail_code",
          key: "order_meterail_code",
          width: "10%",
          scopedSlots: {
            customRender: "order_meterail_code",
          },
        },
        {
          title: "รายการวัสดุ",
          dataIndex: "order_meterail_name",
          key: "order_meterail_name",
          width: "15%",
          scopedSlots: {
            customRender: "order_meterail_name",
          },
        },
        {
          title: "จำนวน",
          dataIndex: "order_meterail_amount",
          key: "order_meterail_amount",
          width: "7%",
          scopedSlots: {
            customRender: "order_meterail_amount",
          },
        },
        {
          title: "หน่วยนับ",
          dataIndex: "order_meterail_unit",
          key: "order_meterail_unit",
          width: "5%",
          scopedSlots: {
            customRender: "order_meterail_unit",
          },
        },

        {
          title: "ราคารวม (บาท)",
          dataIndex: "order_meterail_price",
          key: "order_meterail_price",
          width: "10%",
          scopedSlots: {
            customRender: "order_meterail_price",
          },
        },
      ],
      order_meterail: [
        {
          key: 1,
          order_meterail_code: "MDS5010770",
          order_meterail_name: "กระดาษถ่ายเอกสาร A4 Double A",
          order_meterail_amount: 50,
          order_meterail_unit: "ริม",
          order_meterail_price: "6500",
        },
        {
          key: 2,
          order_meterail_code: "MDS1000787",
          order_meterail_name: "ปากกามาร์คเกอร์ 2 หัว หมึกสีดำ ตราม้า",
          order_meterail_amount: 50,
          order_meterail_unit: "ด้าม",
          order_meterail_price: "500",
        },
        {
          key: 3,
          order_meterail_code: "MDS3101160",
          order_meterail_name: "เทปใส แกน 1 นิ้ว 3/4 นิ้วx36 หลา",
          order_meterail_amount: 10,
          order_meterail_unit: "ม้วน",
          order_meterail_price: "500",
        },
      ],
      visible: false,
    };
  },
  watch: {
    startValue(val) {
      console.log("startValue", val);
    },
    endValue(val) {
      console.log("endValue", val);
    },
  },
  methods: {
    disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open;
    },
  },
};
</script>
<style lang="scss" scope>
.MDS_import {
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
    }
  }

  .label {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
