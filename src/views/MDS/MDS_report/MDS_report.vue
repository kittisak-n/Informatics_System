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
                    จำนวนรายการเบิกเข้าวัสดุทั้งหมด : 2561 - 2563
                  </div>
                  <div><span class="text-number ">2 </span>รายการ</div>
                  <div>
                    จำนวนรายการเบิกวัสดุทั้งหมด ตั้งแต่วันที่ 1 ม.ค. 2561 ถึง 29
                    ธ.ค. 2563
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
                  <div class="text-head">รายการเบิกสำเร็จ</div>
                  <div><span class="text-number ">2 </span>รายการ</div>
                  <div>รายการที่ทำรายการเบิกเสร็จสิ้น</div>
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
                  <div class="text-head">รายการเบิกไม่สำเร็จ</div>
                  <div><span class="text-number ">0 </span>รายการ</div>
                  <div>รายการที่ทำรายการเบิกไม่เสร็จสิ้น</div>
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
              <a-card-meta title="รายการเบิกจ่ายวัสดุ : ปี 2561 - ปี 2563">
                <a-icon
                  slot="avatar"
                  type="folder-open"
                  :style="{
                    fontSize: '150%',
                  }"
                />
              </a-card-meta>
            </a-col>
          </a-row>
          <hr style="width:100%" />
          <Report_list />
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
          <p><b>รายการ</b> : กระดาษถ่ายเอกสาร A4 Double A</p>
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
import Report_list from "../../../components/MDS/MDS_export/report_list.vue";

drilldown(Highcharts);
dataModule(Highcharts);

export default {
  components: {
    highcharts: Chart,
    Report_list,
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
          text: "วัสดุถูกเบิกจ่ายตั้งแต่ ปี 2561 ถึง ปี 2563",
        },
        subtitle: {
          text: "โดยคิดจาก 10 อันดับแรกของวัสดุที่มีการเบิกจ่ายมากที่สุด",
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
              ],
            },
            {
              name: "Firefox",
              id: "Firefox",
              data: [
                ["v58.0", 1.02],
                ["v57.0", 7.36],
                ["v56.0", 0.35],
              ],
            },
            {
              name: "Internet Explorer",
              id: "Internet Explorer",
              data: [
                ["v11.0", 6.2],
                ["v10.0", 0.29],
                ["v9.0", 0.27],
              ],
            },
            {
              name: "Safari",
              id: "Safari",
              data: [
                ["v11.0", 3.39],
                ["v10.1", 0.96],
                ["v10.0", 0.36],
              ],
            },
            {
              name: "Edge",
              id: "Edge",
              data: [
                ["v16", 2.6],
                ["v15", 0.92],
                ["v14", 0.4],
              ],
            },
            {
              name: "Opera",
              id: "Opera",
              data: [
                ["v50.0", 0.96],
                ["v49.0", 0.82],
              ],
            },
          ],
        },
      },
      visible: false,
    };
  },
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
