<template>
  <div id="Calculation_criteria" name="Calculation_criteria">
    <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col
              :xs="24"
              :sm="20"
              :md="18"
              :lg="15"
              :xl="10"
              style="margin: 0.2em 0px"
            >
              <a-card-meta
                title="หลักเกณฑ์การกำหนดภาระงานสอนเพื่อการจ่ายค่าตอบแทน"
              >
                <a-icon
                  slot="avatar"
                  type="schedule"
                  :style="{
                    fontSize: '150%',
                  }"
                /> </a-card-meta
            ></a-col>

            <a-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
              :style="{ textAlign: 'right' }"
            >
              <router-link :to="{ path: '/Calculation_criteria/Add_criteria' }">
                <a-button type="primary" icon="setting">
                  ตั้งค่าอัตราการจ่ายค่าตอบแทนภาระงานสอน
                </a-button>
              </router-link>
            </a-col>
          </a-row>
          <hr style="width: 100%" />
          <a-row :gutter="[8, 8]" justify="end">
            <a-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
              style="text-align: end"
            >
              <a-table
                :columns="columns_schedule"
                :data-source="schedule"
                :pagination="false"
                size="small"
                bordered
              >
                <span slot="schedule_id" slot-scope="text, record, index">
                  <div :style="{ textAlign: 'center' }">
                    {{ index + 1 }}
                  </div>
                </span>
                <span slot="schedule_name" slot-scope="text">
                  <div :style="{ textAlign: 'left' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="schedule_start_date" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>

                <span slot="schedule_status" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    <span v-if="text === 1">
                      <a-tag color="green"> กำลังใช้งาน </a-tag></span
                    >
                    <span v-if="text === 0">
                      <a-tag color="red"> ไม่ใช้งาน </a-tag>
                    </span>
                  </div>
                </span>
                <span slot="action" slot-scope="record, index">
                  <div :style="{ textAlign: 'center' }">
                    <a-tooltip placement="top">
                      <template slot="title">
                        <span>ดูรายละเอียด</span>
                      </template>
                      <a-button
                        type="warning"
                        icon="search"
                        @click="go_to_detail(index)"
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
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      columns_schedule: [
        {
          title: "ลำดับ",
          dataIndex: "schedule_id",
          key: "schedule_id",
          width: "3%",
          scopedSlots: {
            customRender: "schedule_id",
          },
        },
        {
          title: "ชื่อหลักเกณฑ์การกำหนดภาระงาน",
          dataIndex: "schedule_name",
          key: "schedule_name",
          width: "15%",
          scopedSlots: {
            customRender: "schedule_name",
          },
        },
        {
          title: "วันที่เริ่มใช้งาน",
          dataIndex: "schedule_start_date",
          key: "schedule_start_date",
          width: "5%",
          scopedSlots: {
            customRender: "schedule_start_date",
          },
        },
        {
          title: "สถานะการใช้งาน",
          dataIndex: "schedule_status",
          key: "schedule_status",
          width: "5%",
          scopedSlots: {
            customRender: "schedule_status",
          },
        },
        {
          title: "ดำเนินการ",
          dataIndex: "action",
          key: "action",
          width: "5%",
          scopedSlots: {
            customRender: "action",
          },
        },
      ],
      schedule: [
        {
          schedule_id: 1,
          schedule_name: "กำหนดการวิทยาการสารสนเทศ คำนวณภาระงานอาจารย์",
          schedule_start_date: "2021-02-12T17:00:00.000Z",
          schedule_per_credit: "400",
          schedule_general_min: 1,
          schedule_general_max: 18,
          schedule_status: 0,
          schedule_create_by: 666,
          schedule_create_date: "2021-02-12T17:00:00.000Z",
        },
        {
          schedule_id: 2,
          schedule_name: "กำหนดการวิทยาการสารสนเทศ คำนวณภาระงานอาจารย์ ภายนอก",
          schedule_start_date: "2021-02-19T17:00:00.000Z",
          schedule_per_credit: "400",
          schedule_general_min: 6,
          schedule_general_max: 18,
          schedule_status: 1,
          schedule_create_by: 666,
          schedule_create_date: "2021-02-13T17:00:00.000Z",
        },
      ],
    };
  },
  methods: {
    detail(index) {
      console.log("in methods detail : " + index);
    },
    go_to_detail(index) {
      console.log(index);
      this.$store.state.schedule_id = index.schedule_id;
      this.$router.push("Calculation_criteria/Detail_criteria");
    },
    get_all_schedule() {
      axios
        .post(this.$store.state.url + "/WlsTouters/Get_all_schedule", {
          params: [],
        })
        .then(function (response) {

          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed  ถ้าเจอ  Eror ทำไรต่อ
        });
    },
  },
  mounted() {
    this.get_all_schedule();
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
