<template>
  <div id="Calculation_criteria" name="Calculation_criteria">
    <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="20" style="margin: 0.2em 0px">
              <a-card-meta title="หลักเกณฑ์การคำนวณ">
                <a-icon
                  slot="avatar"
                  type="schedule"
                  :style="{
                    fontSize: '150%',
                  }"
                /> </a-card-meta
            ></a-col>

            <a-col :span="4" :style="{ textAlign: 'right' }">
              <router-link :to="{ path: '/calculator/Add_criteria' }">
                <a-button type="primary" icon="setting">
                  ตั้งค่าอัตราการจ่ายค่าตอบแทนภาระงานสอน
                </a-button>
              </router-link>
            </a-col>
          </a-row>
          <hr style="width: 100%" />
          <a-row :gutter="[8, 8]" type="flex" justify="end">
            <a-col :span="24" style="text-align: end">
              <a-table
                :columns="columns_calculation_criteria"
                :data-source="calculation_criteria"
                :pagination="false"
                size="small"
                bordered
              >
                <span slot="key" slot-scope="text, record, index">
                  <div :style="{ textAlign: 'center' }">
                    {{ index + 1 }}
                  </div>
                </span>
                <span slot="cc_name" slot-scope="text">
                  <div :style="{ textAlign: 'left' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="cc_start_date" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>

                <span slot="cc_status" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    <span v-if="text === 1">
                      <a-tag color="green"> กำลังใช้งาน </a-tag></span
                    >
                    <span v-if="text === 0">
                      <a-tag color="red"> ไม่ได้ใช้งาน </a-tag>
                    </span>
                  </div>
                </span>
                <span slot="action" slot-scope="text, record, index">
                  <div :style="{ textAlign: 'center' }">
                    <a-tooltip placement="top">
                      <template slot="title">
                        <span>ดูรายละเอียด</span>
                      </template>
                      <router-link
                        :to="{ name: 'Detail_criteria', params: { id: index } } " 
                      >
                   

                        <a-button type="warning" icon="search"> </a-button
                      ></router-link>
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
export default {
  data() {
    return {
      columns_calculation_criteria: [
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
          title: "ชื่อหลักเกณฑ์การคำนวณ",
          dataIndex: "cc_name",
          key: "cc_name",
          width: "15%",
          scopedSlots: {
            customRender: "cc_name",
          },
        },
        {
          title: "วันที่เริ่มใช้งาน",
          dataIndex: "cc_start_date",
          key: "cc_start_date",
          width: "5%",
          scopedSlots: {
            customRender: "cc_start_date",
          },
        },
        {
          title: "สถานะการใช้งาน",
          dataIndex: "cc_status",
          key: "cc_status",
          width: "5%",
          scopedSlots: {
            customRender: "cc_status",
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
      calculation_criteria: [
        {
          key: 0,
          cc_name: "กำหนดการภาระงาน คณะวิทยาการสารสนเทศ",
          cc_start_date: "1 ธันวาคม 2563",
          cc_status: 1,
        },
        {
          key: 1,
          cc_name: "กำหนดการภาระงาน คณะวิทยาการสารสนเทศ / ภาคเรียนที่ 1",
          cc_start_date: "1 มกราคม 2562",
          cc_status: 0,
        },
      ],
    };
  },
  methods: {
    detail(index) {
      console.log("in methods detail : " + index);
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
