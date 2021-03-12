<template>
  <div id="addposition">
    <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card>
          <a-row :gutter="[8, 8]" type="flex" justify="center">
            <a-col :span="2" style="text-align:end">
              ตำแหน่ง :
            </a-col>
            <a-col :span="8">
              <a-input style="width:100%"> </a-input>
            </a-col>
          </a-row>
          <br />
          <a-row :gutter="[8, 8]" type="flex" justify="center">
            <a-col :span="2" style="text-align:end">
              <p>เลือกระบบ :</p>
            </a-col>
            <a-col :span="8">
              <a-select
                style="width:100%"
                v-model="system"
                default-value="0"
                @change="show_system()"
              >
                <a-select-option value="1">
                  ระบบคำนวณภาระงาน
                </a-select-option>
                <a-select-option value="2">
                  ระบบเบิกจ่ายวัสดุ
                </a-select-option>
              </a-select>
            </a-col>
          </a-row>
          <div v-if="this.system == 1">
            <a-row
              :gutter="[8, 8]"
              type="flex"
              justify="center"
              v-for="item in IF_System"
              :key="item.id"
            >
              <a-col :span="6">
                <a-checkbox v-if="item.status == 1">
                  {{ item.name }}
                </a-checkbox>
              </a-col>
            </a-row>
          </div>

          <div v-if="this.system == 2">
            <a-row
              :gutter="[8, 8]"
              type="flex"
              justify="center"
              v-for="item in IF_System"
              :key="item.id"
              
            >
              <a-col :span="6">
                <a-checkbox v-if="item.status == 2">
                  {{ item.name }}
                </a-checkbox>
              </a-col>
            </a-row>
          </div>

          <!-- <a-row
            :gutter="[8, 8]"
            v-if="this.system == 2"
            type="flex"
            justify="center"
          >
            <a-col :span="10" v-for="item in IF_System" :key="item.id">
              <a-checkbox v-if="item.status == 1">
                {{ item.name }}
              </a-checkbox>
            </a-col>
          </a-row> -->

          <!-- <div v-if="this.system == 2">
            <a-row :gutter="[8, 8]" v-for="item in IF_System" :key="item.id">
              <a-col :span="24">
                <a-checkbox v-if="item.status == 2">
                  {{ item.name }}
                </a-checkbox>
              </a-col>
            </a-row>
          </div> -->

          <div v-if="this.system > 0">
            <a-row :gutter="[8, 8]">
              <a-col :span="24" style="text-align:center">
                <a-col :span="12" style="text-align:right">
                  <router-link :to="{ path: '/permission_manage' }">
                    <a-button>ยกเลิก</a-button>
                  </router-link>
                </a-col>
                <a-col :span="12" style="text-align:left">
                  <router-link :to="{ path: '/permission_manage' }">
                    <a-button type="primary" v-on:click="add_success">
                      บันทึก
                    </a-button>
                  </router-link>
                </a-col>
              </a-col>
            </a-row>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      system: "----- โปรดเลือก -----",
      IF_System: [
        { id: "1", name: "ข้อมูลรายวิชา", status: 1 },
        { id: "2", name: "หลักเกณฑ์การคำนวณ", status: 1 },
        { id: "3", name: "คำนวณภาระงาน", status: 1 },
        { id: "4", name: "สรุปภาระงาน", status: 1 },
        { id: "5", name: "ตรวจสอบภาระงาน", status: 1 },
        { id: "6", name: "รายการวัสดุในคลัง", status: 2 },
        { id: "7", name: "รายการนำเข้าวัสดุ", status: 2 },
        { id: "8", name: "รายการเบิกจ่ายวัสดุ", status: 2 },
        { id: "9", name: "รายงานผลเบิกจ่ายวัสดุ", status: 2 },
        { id: "10", name: "ตั้งค่าระบบเบิกจ่าย", status: 2 },
        { id: "11", name: "เบิกจ่ายวัสดุ", status: 2 },
      ],
    };
  },
  methods: {
    show_system() {
      console.log(this.system);
    },
  },
};
</script>

<style></style>
