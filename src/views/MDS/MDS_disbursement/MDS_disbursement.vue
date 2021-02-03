<template>
  <div class="MDS_export">
    <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-row :gutter="[8, 8]">
          <a-col :span="12">
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
                    จำนวนรายการเบิกเข้าวัสดุทั้งหมด : ปี 2563
                  </div>
                  <div><span class="text-number ">2 </span>รายการ</div>
                  <div>
                    จำนวนรายการเบิกวัสดุทั้งหมด ตั้งแต่วันที่ 1 ม.ค. 2563 ถึง 29
                    ธ.ค. 2563
                  </div>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :span="6">
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
                  <div class="text-head">รายการรออนุมัติ</div>
                  <div><span class="text-number ">2 </span>รายการ</div>
                  <div>รายการรออนุมัติการเบิกจ่ายวัสดุ</div>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :span="6">
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
                  <div class="text-head">รายการรอจ่าย</div>
                  <div><span class="text-number ">0 </span>รายการ</div>
                  <div>รายการรอการจ่ายวัสดุ</div>
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
          <a-tabs default-active-key="1">
            <a-tab-pane key="1">
              <span slot="tab">
                <a-icon type="file-done" />
                รายการเบิกจ่ายรออนุมัติ
              </span>
              <Approval_list />
            </a-tab-pane>
            <a-tab-pane key="2">
              <span slot="tab">
                <a-icon type="exception" />
                รายการรอเบิกจ่ายวัสดุ
              </span>
              <Disburse_list />
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import Approval_list from "../../../components/MDS/MDS_export/approval_list_user.vue";
import Disburse_list from "../../../components/MDS/MDS_export/disburse_list.vue";

export default {
  components: {
    Approval_list,
    Disburse_list,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "จำนวนวัสดุเบิกจ่ายประจำปี 2563",
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
  methods: {},
};
</script>
<style lang="scss" scope>
.MDS_export {
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
