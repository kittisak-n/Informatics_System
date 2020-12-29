<template>
  <div id="MDS_exchequer">
    <a-row :gutter="[8, 8]">
      <a-col :span="14">
        <a-card>
          <a-row>
            <a-col :span="24">
              <highcharts
                :options="chartOptions"
                ref="lineCharts"
                style="position: relative; height:20.6vh; width:auto"
              ></highcharts>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="10">
        <a-row :gutter="[8, 8]">
          <a-col :span="12">
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
                  <div><span class="text-number ">125 </span>รายการ</div>
                  <div>รายการวัสดุที่สามารถเบิกได้</div>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :span="12">
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
                  <div><span class="text-number ">125 </span>รายการ</div>
                  <div>รายการวัสดุที่ไม่สามารถเบิกได้</div>
                </a-col>
              </a-row>
            </a-card>
          </a-col>

          <a-col :span="12">
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
                  <div class="text-head">รายการวัสดุใกล้หมดสต๊อก</div>
                  <div><span class="text-number ">125 </span>รายการ</div>
                  <div>วัสดุที่คงเหลือน้อยกว่าค่าต่ำสุด</div>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :span="12">
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
                  <div class="text-head">รายการวัสดุหมดสต๊อก</div>
                  <div><span class="text-number ">125 </span>รายการ</div>
                  <div>รายการวัสดุที่คงเหลือเป็น 0</div>
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
            <a-col :span="12" style="margin: 0.2em 0px;">
              <a-card-meta title="รายการวัสดุ/อุปกรณ์ : เดือน ธันวาคม 2563">
                <a-icon
                  slot="avatar"
                  type="folder-open"
                  :style="{
                    fontSize: '150%',
                  }"
                />
              </a-card-meta>
            </a-col>
            <a-col
              :span="4"
              style="text-align:end;font-size: 115%;margin: 0.2em 0px;"
              >แสดงรายการ
            </a-col>
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
                placeholder="รหัสหรือชื่อวัสดุ"
                style="width: 100%"
              />
            </a-col>
          </a-row>
          <hr style="width:100%" />
          <br />
          <a-row :gutter="[8, 8]">
            <a-col :span="24">
              <a-table
                :columns="columns"
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
                <span slot="meterail_name" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="meterail_unit" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="meterail_balance" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="meterail_note">
                  <div :style="{ textAlign: 'center' }">
                    <a-input placeholder="ระบุหมายเหตุการเบิก" />
                  </div>
                </span>

                <span slot="action">
                  <div :style="{ textAlign: 'center' }">
                    <a-tooltip placement="top">
                      <template slot="title">
                        <span>ตรวจสอบข้อมูลวัสดุุ</span>
                      </template>
                      <a-button
                        type="primary"
                        icon="search"
                        @click="visible = !visible"
                      >
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
    <a-modal
      width="1000px"
      :dialog-style="{ top: '5%' }"
      v-model="visible"
      title="รายละเอียดวัสดุ/อุปกรณ์หมายเลข : OFM5011020"
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
          <p><b>หมายเลขวัสดุ</b> : OFM5011020</p>
          <p>
            <b>รายการ</b> : กระดาษถ่ายเอกสาร A4 Double A
          </p>
          <p><b>หมวดหมู่</b> : อุปกรณ์สำนักงาน</p>
          <p><b>หน่วยนับ (นำเข้า/ส่งออก)</b> : ลัง / รีม</p>
          <p><b>จำนวนคงเหลือ </b> : 400 รีม</p>
          <p><b>สถานะ </b> : สามารถเบิกได้</p>
        </a-col>
      </a-row>
      <a-row :gutter="[8, 8]">
        <a-col :span="19" style="margin: 0.3em 0px;font-size: 115%;"
          ><b>ตารางแสดงรายการนำเข้าวัสดุ</b>
        </a-col>
        <a-col :span="5" style="text-align:end">
          <a-input-search placeholder="รหัสหรือชื่อวัสดุ" style="width: 100%" />
        </a-col>
      </a-row>
      <a-row :gutter="[8, 8]">
        <a-col :span="24" style="text-align:center">
          <a-table
            :columns="columns_metertail_detail"
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
            <span slot="meterail_name" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="meterail_unit" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="meterail_balance" slot-scope="text">
              <div :style="{ textAlign: 'center' }">
                {{ text }}
              </div>
            </span>
            <span slot="meterail_note">
              <div :style="{ textAlign: 'center' }">
                <a-input placeholder="ระบุหมายเหตุการเบิก" />
              </div>
            </span>

            <span slot="action">
              <div :style="{ textAlign: 'center' }">
                <a-tooltip placement="top">
                  <template slot="title">
                    <span>ตรวจสอบข้อมูลวัสดุุ</span>
                  </template>
                  <a-button
                    type="primary"
                    icon="search"
                    @click="visible = !visible"
                  >
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
        <a-button key="back" @click="handleCancel">
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
          title: "รหัสวัสดุ",
          dataIndex: "meterail_code",
          key: "meterail_code",
          width: "10%",
          scopedSlots: {
            customRender: "meterail_code",
          },
        },
        {
          title: "วัสดุ",
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
          title: "ค่าต่ำสุด",
          dataIndex: "meterail_min",
          key: "meterail_min",
          width: "5%",
          scopedSlots: { customRender: "meterail_min" },
        },
        {
          title: "คงเหลือ",
          dataIndex: "meterail_balance",
          key: "meterail_balance",
          width: "5%",
          scopedSlots: { customRender: "meterail_balance" },
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
      columns_metertail_detail: [
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
          title: "หมายเลขใบสั่งซื้อ",
          dataIndex: "meterail_code",
          key: "meterail_code",
          width: "10%",
          scopedSlots: {
            customRender: "meterail_code",
          },
        },
        {
          title: "ผู้จัดจำหน่าย",
          dataIndex: "meterail_name",
          key: "meterail_name",
          width: "10%",
          scopedSlots: {
            customRender: "meterail_name",
          },
        },
        {
          title: "วันที่นำเข้า",
          dataIndex: "meterail_name",
          key: "meterail_name",
          width: "10%",
          scopedSlots: {
            customRender: "meterail_name",
          },
        },
        {
          title: "นำเข้า",
          dataIndex: "meterail_import",
          key: "meterail_import",
          width: "5%",
          scopedSlots: { customRender: "meterail_import" },
        },
        {
          title: "ผู้ตรวจรับ",
          dataIndex: "meterail_name",
          key: "meterail_name",
          width: "10%",
          scopedSlots: {
            customRender: "meterail_name",
          },
        },
        {
          title: "คงเหลือ",
          dataIndex: "meterail_balance",
          key: "meterail_balance",
          width: "5%",
          scopedSlots: { customRender: "meterail_balance" },
        },
      ],
      meterail: [
        {
          key: 1,
          meterail_code: "",
          meterail_name: "",
          meterail_balance: 0,
          meterail_reveal: null,
          meterail_note: null,
        },
        {
          key: 2,
          meterail_code: "",
          meterail_name: "",
          meterail_balance: 0,
          meterail_reveal: null,
          meterail_note: null,
        },
        {
          key: 3,
          meterail_code: "",
          meterail_name: "",
          meterail_balance: 0,
          meterail_reveal: null,
          meterail_note: null,
        },
        {
          key: 4,
          meterail_code: "",
          meterail_name: "",
          meterail_balance: 0,
          meterail_reveal: null,
          meterail_note: null,
        },
        {
          key: 5,
          meterail_code: "",
          meterail_name: "",
          meterail_balance: 0,
          meterail_reveal: null,
          meterail_note: null,
        },
        {
          key: 6,
          meterail_code: "",
          meterail_name: "",
          meterail_balance: 0,
          meterail_reveal: null,
          meterail_note: null,
        },
        {
          key: 7,
          meterail_code: "",
          meterail_name: "",
          meterail_balance: 0,
          meterail_reveal: null,
          meterail_note: null,
        },
        {
          key: 8,
          meterail_code: "",
          meterail_name: "",
          meterail_balance: 0,
          meterail_reveal: null,
          meterail_note: null,
        },
        {
          key: 9,
          meterail_code: "",
          meterail_name: "",
          meterail_balance: 0,
          meterail_reveal: null,
          meterail_note: null,
        },
        {
          key: 10,
          meterail_code: "",
          meterail_name: "",
          meterail_balance: 0,
          meterail_reveal: null,
          meterail_note: null,
        },
      ],

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
                name: "Chrome",
                y: 62.74,
                drilldown: "Chrome",
              },
              {
                name: "Firefox",
                y: 10.57,
                drilldown: "Firefox",
              },
              {
                name: "Internet Explorer",
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
      visible: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scope>
.text-head {
  font-size: 135%;
  font-weight: 600;
}

.text-number {
  font-size: 135%;
  font-weight: 600;
}
</style>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
