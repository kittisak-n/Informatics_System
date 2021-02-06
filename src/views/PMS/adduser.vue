<template>
  <div class="add">
    <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px;">
              <a-card-meta title="แบบฟอร์มเพิ่มข้อมูลผู้ใช้งาน">
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
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px;">
              <a-steps :current="current">
                <a-step
                  v-for="item in steps"
                  :key="item.title"
                  :title="item.title"
                />
              </a-steps>
            </a-col>
          </a-row>
          <br />
          <a-row :gutter="[8, 8]">
            <a-col class="form-addUser" v-if="current == 0" :span="24">
              <br />
              <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="4" style="text-align:end">
                  ชื่อผู้ใช้งาน :
                </a-col>
                <a-col :span="14">
                  <a-input style="width:100%">
                    <span slot="addonAfter">
                      <a-icon type="search" /> ตรวจสอบผู้ใช้งาน
                    </span>
                  </a-input>
                </a-col>
              </a-row>
              <br />
              <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="2" style="text-align:end">
                  ชื่อ (อังกฤษ) :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  นามสกุล (อังกฤษ) :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
              </a-row>
              <br />
              <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="2" style="text-align:end">
                  ชื่อ (ภาษาไทย) :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  นามสกุล (ภาษาไทย) :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
              </a-row>
              <br />
              <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="2" style="text-align:end">
                  ต่ำแหน่ง :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  ที่อยู่ :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
              </a-row>
              <br />
              <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="2" style="text-align:end">
                  จังหวัด :
                </a-col>
                <a-col :span="2">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  อำเภอ :
                </a-col>
                <a-col :span="2">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  ตำบล :
                </a-col>
                <a-col :span="2">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  รหัสไปรษณีย์ :
                </a-col>
                <a-col :span="2">
                  <a-input style="width:100%" />
                </a-col>
              </a-row>
              <br />
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col
              class="form-addUser"
              v-if="current == 1"
              :span="24"
              style="margin: 0.2em 0px;"
            >
              <br />
              <a-row :gutter="[8, 8]" v-for="item in positon" :key="item.id">
                <a-col :span="24" :offset="10">
                  <a-checkbox>
                    {{ item.name }}
                  </a-checkbox>
                  <a-button icon="search" @click="showModal_adduser">
                  </a-button>
                </a-col>
              </a-row>
              <br />
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col
              class="form-addUser"
              v-if="current == 2"
              :span="24"
              style="margin: 0.2em 0px;"
            >
              <!-- <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="2" style="text-align:end">
                  รหัสผ่านผู้ใช้งาน :
                </a-col>
                <a-col :span="14">
                  <a-input style="width:100%">
                    <span slot="addonAfter">
                      <a-icon type="search" /> ตรวจสอบผู้ใช้งาน
                    </span>
                  </a-input>
                </a-col>
              </a-row> -->
              <br />

              <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="24" style="text-align:center">
                  <h3>ตรวจสอบรายละอียดข้อมูล</h3>
                </a-col>
              </a-row>
              <br />
              <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="2" style="text-align:end">
                  ชื่อ (อังกฤษ) :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  นามสกุล (อังกฤษ) :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
              </a-row>
              <br />
              <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="2" style="text-align:end">
                  ชื่อ (ภาษาไทย) :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  นามสกุล (ภาษาไทย) :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
              </a-row>
              <br />
              <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="2" style="text-align:end">
                  ต่ำแหน่ง :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  ที่อยู่ :
                </a-col>
                <a-col :span="6">
                  <a-input style="width:100%" />
                </a-col>
              </a-row>
              <br />
              <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="2" style="text-align:end">
                  จังหวัด :
                </a-col>
                <a-col :span="2">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  อำเภอ :
                </a-col>
                <a-col :span="2">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  ตำบล :
                </a-col>
                <a-col :span="2">
                  <a-input style="width:100%" />
                </a-col>
                <a-col :span="2" style="text-align:end">
                  รหัสไปรษณีย์ :
                </a-col>
                <a-col :span="2">
                  <a-input style="width:100%" />
                </a-col>
              </a-row>
              <hr style="width:90%" />
              <br />

              <a-row :gutter="[8, 8]" type="flex" justify="center">
                <a-col :span="24" style="text-align:center">
                  <h3>ตรวจสอบสิทธิ์</h3>
                </a-col>
              </a-row>
              <br />

              <a-row :gutter="[8, 8]">
                <a-col :span="24" :offset="10">
                  <b>ฝ่ายธุระการ</b>
                </a-col>
              </a-row>
              <a-row :gutter="[8, 8]">
                <a-col :span="24" :offset="11">
                  <p>ระบบคำนวณภาระงาน</p>
                </a-col>
              </a-row>
              <a-row :gutter="[8, 8]">
                <a-col :span="24" :offset="12">
                  <p>ข้อมูลรายวิชา</p>
                </a-col>
              </a-row>
              <a-row :gutter="[8, 8]">
                <a-col :span="24" :offset="12">
                  <p>สรุปภาระงาน</p>
                </a-col>
              </a-row>

              <a-row :gutter="[8, 8]">
                <a-col :span="24" :offset="10">
                  <b>ฝ่ายบุคลากร</b>
                </a-col>
              </a-row>
              <a-row :gutter="[8, 8]">
                <a-col :span="24" :offset="11">
                  <p>ระบบเบิกจ่ายวัสดุ</p>
                </a-col>
              </a-row>
              <a-row :gutter="[8, 8]">
                <a-col :span="24" :offset="12">
                  <p>รายการเบิกจ่ายวัสดุ</p>
                </a-col>
              </a-row>
              <a-row :gutter="[8, 8]">
                <a-col :span="24" :offset="12">
                  <p>เบิกจ่ายวัสดุ</p>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
          <br />
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px;">
              <div class="steps-action" style="text-align:right">
                <a-button
                  v-if="current > 0"
                  style="margin-right: 8px"
                  @click="prev"
                >
                  ย้อนกลับ
                </a-button>
                <router-link :to="{ path: '/permission_manage' }">
                  <a-button v-if="current == 0" style="margin-right: 8px">
                    ยกเลิก
                  </a-button>
                </router-link>
                <a-button
                  v-if="current < steps.length - 1"
                  type="primary"
                  @click="next"
                >
                  ถัดไป
                </a-button>
                <!-- <router-link :to="{ path: '/permission_manage' }">
                  <a-button v-if="current < steps.length - 1">
                    ยกเลิก
                  </a-button>
                </router-link> -->
                <router-link :to="{ path: '/permission_manage' }">
                  <a-button
                    v-if="current == steps.length - 1"
                    type="primary"
                    @click="$message.success('เพิ่มผู้ใช้งานสำเร็จ')"
                  >
                    เสร็จสิ้น
                  </a-button>
                </router-link>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>

    <a-modal
      v-model="visible_adduser"
      title="ตรวจสอบตำแหน่งงาน"
      @ok="handleOk"
      :footer="null"
    >
      <a-row :gutter="[8, 8]">
        <a-col :span="24">
          <p>ระบบคำนวณภาระงาน</p>
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="24">
          <p>ระบบเบิกจ่ายวัสดุ</p>
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      positon: [
        { id: "1", name: "ฝ่ายธุระการ" },
        { id: "2", name: "บุคลากร" },
        { id: "3", name: "การเงิน" },
      ],
      current: 0,
      steps: [
        {
          title: "กรอกข้อมูลส่วนตัว",
          content: "First-content",
        },
        {
          title: "กำหนดสิทธิ์",
          content: "Second-content",
        },
        {
          title: "ตรวจสอบ",
          content: "Last-content",
        },
      ],
      visible_adduser: false,
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    showModal_adduser() {
      this.visible_adduser = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible_adduser = false;
    },
  },
};
</script>
<style lang="scss">
.add {
  .form-addUser {
    border: 1px solid;
    border-radius: 5px;
  }
}
</style>
