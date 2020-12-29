<template>
  <div class="MDS_disbursement_admin">
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
        <a-card size="small" title="ตารางแสดงรายการเบิกจ่ายวัสดุ">
          <div slot="extra">
            <router-link
              :to="{ path: '/MDS_disbursement/MDS_disbursement_form' }"
            >
              <a-button type="primary" icon="edit" style="width:100%">
                กรอกฟอร์มเบิกวัสดุ
              </a-button>
            </router-link>
          </div>
          <a-row :gutter="[8, 8]" type="flex" justify="end">
            <a-col :span="4" style="text-align:end">
              <a-select :default-value="null" style="width: 100%">
                <a-select-option :value="null">
                  รายการรออนุมัติ
                </a-select-option>
                <a-select-option value="disabled">
                  รายการรอเบิกจ่าย
                </a-select-option>
                <a-select-option value="Yiminghe">
                  รายการเบิกวัสดุเสร็จสิ้น
                </a-select-option>
                <a-select-option value="ฟหกฟหก">
                  รายการเบิกไม่ถูกอนุมัติ
                </a-select-option>
                <a-select-option value="all">
                  รายการทั้งหมด
                </a-select-option>
              </a-select>
            </a-col>
            <a-col :span="4" style="text-align:end">
              <a-input-search
                placeholder="รหัสหรือชื่อวัสดุ"
                style="width: 100%"
              />
            </a-col>
          </a-row>
          <br />
          <a-row :gutter="[8, 8]">
            <a-col :span="24">
              <a-table
                :columns="columns"
                :data-source="disbursement"
                :pagination="false"
                bordered
                size="small"
              >
                <span slot="key" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="disbursement_code" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="disbursement_date" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="disbursement_total" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="disbursement_status" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="action" slot-scope="">
                  <div :style="{ textAlign: 'center' }">
                    <a-tooltip placement="top">
                      <template slot="title">
                        <span>ตรวจสอบราบการเบิกวัสดุ</span>
                      </template>
                      <a-button type="primary" icon="search" @click="showModal">
                      </a-button>
                    </a-tooltip>
                  </div>
                </span>
              </a-table>
            </a-col>
          </a-row>
          <br />
          <a-row>
            <a-col :span="15">
              <p :style="{ marginTop: '0.3em' }">1-10 จาก 10 รายการ</p>
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
    <a-modal
      v-model="visible"
      title="รายละเอียดใบเบิกวัสดุหมายเลข"
      on-ok="handleOk"
      width="900px"
    >
      <a-row :gutter="[8, 8]">
        <a-col :span="24">
          รายละเอียดการเบิกวัสดุ
        </a-col>
        <a-col :span="8">ผู้เบิกวัสดุ : นายกิตติศักดิ์ น้อยดอนไพร </a-col>
        <a-col :span="8">วันที่ทำการเบิก : 22/05/2020 </a-col>
        <a-col :span="2" style="text-align:end">สถานะ :</a-col>
        <a-col :span="6">
          <a-select :default-value="null" size="small" style="width: 100%">
            <a-select-option :value="null">
              อนุมัติ
            </a-select-option>
            <a-select-option value="disabled">
              ไม่อนุมัติ
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="24">
          หมายเหตุ :
        </a-col>
        <a-col :span="24">
          ตารางแสดงรายการเบิกวัสดุ
        </a-col>
        <a-col :span="24">
          <a-table
            :columns="columns_order"
            :data-source="disbursement"
            :pagination="false"
            bordered
            size="small"
            :scroll="{ y: '450px' }"
          >
            <span slot="key" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="disbursement_code" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="disbursement_date" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="disbursement_total" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="disbursement_status" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="action" slot-scope="text, record, index">
              <div :style="{ textAlign: 'center' }">
                <a-tooltip placement="top">
                  <template slot="title">
                    <span>ตรวจสอบราบการเบิกวัสดุ</span>
                  </template>
                  <a-button type="primary" icon="search" @click="showModal">
                  </a-button>
                </a-tooltip>
                <a-tooltip placement="top">
                  <template slot="title">
                    <span>ยกเลิกรายการเบิกวัสดุ</span>
                  </template>
                  <a-button
                    type="danger"
                    icon="close"
                    @click="deleteMeterailReccord(index)"
                  >
                  </a-button>
                </a-tooltip>
              </div>
            </span>
          </a-table>
        </a-col>
      </a-row>
      <template slot="footer">
        <a-row :gutter="[8, 8]">
          <a-col :span="12" style="text-align:start">
            <a-button key="back" @click="handleCancel">ยกเลิก </a-button>
          </a-col>
          <a-col :span="12">
            <a-button
              key="submit"
              type="primary"
              :loading="loading"
              @click="handleOk"
            >
              ยืนยัน
            </a-button>
          </a-col>
        </a-row>
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
export default {
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      columns: [
        {
          title: "#",
          dataIndex: "key",
          key: "key",
          width: "5%",
          scopedSlots: {
            customRender: "key",
          },
        },
        {
          title: "หมายเลขใบรายการเบิกวัสดุ",
          dataIndex: "disbursement_code",
          key: "disbursement_code",
          width: "15%",
          scopedSlots: {
            customRender: "disbursement_code",
          },
        },
        {
          title: "ชื่อผู้เบิกวัสดุ",
          dataIndex: "disbursement_date",
          key: "disbursement_date",
          width: "15%",
          scopedSlots: { customRender: "disbursement_date" },
        },
        {
          title: "วันที่ทำการเบิกวัสดุ",
          dataIndex: "disbursement_date",
          key: "disbursement_date",
          width: "15%",
          scopedSlots: { customRender: "disbursement_date" },
        },

        {
          title: "จำนวนรายการเบิก",
          dataIndex: "disbursement_total",
          key: "disbursement_total",
          width: "10%",
          scopedSlots: {
            customRender: "disbursement_total",
          },
        },
        {
          title: "สถานะ",
          dataIndex: "disbursement_status",
          key: "disbursement_status",
          width: "10%",
          scopedSlots: {
            customRender: "disbursement_status",
          },
        },
        {
          title: "ดำเนินการ",
          dataIndex: "action",
          key: "action",
          width: "5%",
          scopedSlots: { customRender: "action" },
        },
      ],
      disbursement: [
        {
          key: 1,
          meterail_name: null,
          meterail_type: null,
          meterail_import_unit: null,
          meterail_export_unit: null,
          meterail_alert_amount: null,
        },
      ],
      columns_order: [
        {
          title: "#",
          dataIndex: "key",
          key: "key",
          width: "5%",
          scopedSlots: {
            customRender: "key",
          },
        },
        {
          title: "รหัสวัสดุ",
          dataIndex: "meterail_code",
          key: "meterail_code",
          width: "10%",
          scopedSlots: {
            customRender: "meterail_code",
          },
        },
        {
          title: "ชื่อวัสดุ",
          dataIndex: "meterail_name",
          key: "meterail_name",
          width: "10%",
          scopedSlots: {
            customRender: "meterail_name",
          },
        },
        {
          title: "หน่วย",
          dataIndex: "meterail_unit",
          key: "meterail_unit",
          width: "5%",
          scopedSlots: {
            customRender: "meterail_unit",
          },
        },
        {
          title: "จำนวน",
          children: [
            {
              title: "คงเหลือ",
              dataIndex: "meterail_balance",
              key: "disbursement_code",
              width: "5%",
              scopedSlots: {
                customRender: "disbursement_code",
              },
            },
            {
              title: "ขอเบิก",
              dataIndex: "meterail_balance",
              key: "meterail_balance",
              width: "5%",
              scopedSlots: {
                customRender: "meterail_balance",
              },
            },
            {
              title: "เบิกได้",
              dataIndex: "disbursement_code",
              key: "disbursement_code",
              width: "5%",
              scopedSlots: {
                customRender: "disbursement_code",
              },
            },
          ],
        },
        {
          title: "หมายเหตุ",
          dataIndex: "disbursement_code",
          key: "disbursement_code",
          width: "10%",
          scopedSlots: {
            customRender: "disbursement_code",
          },
        },
      ],
      loading: false,
      visible: false,
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "จำนวนวัสดุ/เบิกจ่าย เดือน ธันวาคม 2563",
        },
        subtitle: {
          text:
            'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
        },
        accessibility: {
          announceNewData: {
            enabled: true,
          },
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          title: {
            text: "Total percent market share",
          },
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}%",
            },
          },
        },

        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
        },

        series: [
          {
            name: "Browsers",
            colorByPoint: true,
            data: [
              {
                name: "กระดาษ A4",
                y: 62.74,
                drilldown: "Chrome",
              },
              {
                name: "ปากกาเมจิก",
                y: 10.57,
                drilldown: "Firefox",
              },
              {
                name: "เทปใส",
                y: 7.23,
                drilldown: "Internet Explorer",
              },
              {
                name: "Safari",
                y: 5.58,
                drilldown: "Safari",
              },
              {
                name: "Edge",
                y: 4.02,
                drilldown: "Edge",
              },
              {
                name: "Opera",
                y: 1.92,
                drilldown: "Opera",
              },
              {
                name: "Other",
                y: 7.62,
                drilldown: null,
              },
              {
                name: "asdasd",
                y: 7.62,
                drilldown: null,
              },
              {
                name: "asdassssd",
                y: 7.62,
                drilldown: null,
              },
              {
                name: "asdasaaaaaa",
                y: 7.62,
                drilldown: null,
              },
            ],
          },
        ],
        drilldown: {
          series: [
            {
              name: "Chrome",
              id: "Chrome",
              data: [
                ["v65.0", 0.1],
                ["v64.0", 1.3],
                ["v63.0", 53.02],
                ["v62.0", 1.4],
                ["v61.0", 0.88],
                ["v60.0", 0.56],
                ["v59.0", 0.45],
                ["v58.0", 0.49],
                ["v57.0", 0.32],
                ["v56.0", 0.29],
                ["v55.0", 0.79],
                ["v54.0", 0.18],
                ["v51.0", 0.13],
                ["v49.0", 2.16],
                ["v48.0", 0.13],
                ["v47.0", 0.11],
                ["v43.0", 0.17],
                ["v29.0", 0.26],
              ],
            },
            {
              name: "Firefox",
              id: "Firefox",
              data: [
                ["v58.0", 1.02],
                ["v57.0", 7.36],
                ["v56.0", 0.35],
                ["v55.0", 0.11],
                ["v54.0", 0.1],
                ["v52.0", 0.95],
                ["v51.0", 0.15],
                ["v50.0", 0.1],
                ["v48.0", 0.31],
                ["v47.0", 0.12],
              ],
            },
            {
              name: "Internet Explorer",
              id: "Internet Explorer",
              data: [
                ["v11.0", 6.2],
                ["v10.0", 0.29],
                ["v9.0", 0.27],
                ["v8.0", 0.47],
              ],
            },
            {
              name: "Safari",
              id: "Safari",
              data: [
                ["v11.0", 3.39],
                ["v10.1", 0.96],
                ["v10.0", 0.36],
                ["v9.1", 0.54],
                ["v9.0", 0.13],
                ["v5.1", 0.2],
              ],
            },
            {
              name: "Edge",
              id: "Edge",
              data: [
                ["v16", 2.6],
                ["v15", 0.92],
                ["v14", 0.4],
                ["v13", 0.1],
              ],
            },
            {
              name: "Opera",
              id: "Opera",
              data: [
                ["v50.0", 0.96],
                ["v49.0", 0.82],
                ["v12.1", 0.14],
              ],
            },
          ],
        },
      },
    };
  },
  methods: {
    deleteMeterailReccord(index) {
      // const seft = this;
      console.log(index);
      this.$confirm({
        title: "ยกเลิกรายการเบิกวัสดุ",
        content: "ยืนยันยกเลิกรายการเบิกวัสดุ ",
        onOk() {
          console.log(index);
        },
        onCancel() {
          console.log("Cancel");
        },
        okText: "ยืนยัน",
        cancelText: "ยกเลิก",
      });
    },
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>
<style lang="scss" scope>
.head {
  .ant-card-body {
    padding: 14px !important;
  }
}

.card {
  .ant-card-body {
    padding: 12px !important;
    .head_card {
      font-size: 18px;
      font-weight: 500;
    }
    .body_card {
      p {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }
    }
  }
}
.ant-collapse-header {
  font-size: 16px;
  .ant-collapse-extra {
    float: left !important;
    margin-right: 5px;
  }
}
</style>
