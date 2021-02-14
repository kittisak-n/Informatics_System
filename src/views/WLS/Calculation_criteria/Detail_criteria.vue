<template>
  <div id="Detail_criteria">
    <a-card size="small">
      <a-row :gutter="[8, 8]">
        <a-col :span="24" style="margin: 0.2em 0px">
          <a-card-meta title="แสดงรายละเอียดหลักเกณฑ์การกำหนดภาระงานสอน">
            <a-icon
              slot="avatar"
              type="search"
              :style="{
                fontSize: '150%',
              }"
            /> </a-card-meta
        ></a-col>
      </a-row>
    </a-card>

    <a-card size="small">
      <a-row :gutter="[8, 8]">
        <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
        <a-col :span="6" style="margin: 0.2em 0px">ชื่อกำหนดการ:</a-col>
        <a-col :span="6" style="margin: 0.2em 0px">
          <a-input
            style="width: 100%"
            disabled
            v-model="schedule.criteria_name"
        /></a-col>
        <a-col :span="6" style="margin: 0.2em 0px"></a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
        <a-col :span="6" style="margin: 0.2em 0px">วันที่เริ่มใช้:</a-col>
        <a-col :span="6" style="margin: 0.2em 0px">
          <a-date-picker
            style="width: 100%"
            v-model="schedule.criteria_start_date"
            disabled
          />
        </a-col>
        <a-col :span="6" style="margin: 0.2em 0px"></a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
        <a-col :span="6" style="margin: 0.2em 0px">ผู้สร้างกำหนดการ:</a-col>
        <a-col :span="6" style="margin: 0.2em 0px">
          <a-input
            v-model="schedule.criteria_creat_by"
            style="width: 100%"
            disabled
        /></a-col>
        <a-col :span="6" style="margin: 0.2em 0px"></a-col>
      </a-row>
      <a-row :gutter="[8, 8]">
        <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
        <a-col :span="6" style="margin: 0.2em 0px">อัตราเงินต่อหน่วยกิต:</a-col>
        <a-col :span="6" style="margin: 0.2em 0px">
          <a-input
            style="width: 100%"
            v-model="schedule.criteria_rate_per_credit"
            disabled
            addon-after="บาท"
            type="number"
        /></a-col>
        <a-col :span="6" style="margin: 0.2em 0px"></a-col>
      </a-row>

      <a-row :gutter="[8, 8]" style="text-align: start">
        <a-col :span="24" style="margin: 0.2em 0px"
          ><h1>
            กำหนดภาระงานเพื่อการจ่ายค่าตอบแทนสอนเกินของคณาจารย์ประจำที่ไม่ได้ดำรงตำแหน่งบริหาร
          </h1></a-col
        >
      </a-row>

      <a-row :gutter="[8, 8]" style="text-align: center">
        <a-col :span="12" style="margin: 0.2em 0px; text-align: center">
          ขั้นต่ำ:
          <a-input
            addon-after="หน่วยภาระงานสอน"
            type="number"
            style="width: 70%"
            disabled
            v-model="schedule.nmp_minimum"
          />
        </a-col>

        <a-col :span="12" style="margin: 0.2em 0px; text-align: start">
          ขั้นสูง:
          <a-input
            addon-after="หน่วยภาระงานสอน"
            type="number"
            style="width: 70%"
            v-model="schedule.nmp_maximum"
            disabled
          />
        </a-col>
      </a-row>
    </a-card>
    <!-- สิ้นสุด ส่วนตั้งค่าทั่วไป -->
    <!-- วิชาในหลักสูตร -->
    <a-row :gutter="[8, 8]">
      <a-col :span="12" style="margin: 0.2em 0px; text-align: center">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0p">
              <a-card-meta title="วิชาในหลักสูตร"> </a-card-meta>
            </a-col>
          </a-row>
        </a-card>
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <h1>การสอนแบบบรรยาย</h1>
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: start">
              <h1>จำนวนนิสิตต่อกลุ่ม</h1>
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับปริญญาตรี :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input
                v-model="schedule.criteria_Internal.lecture.Bachelor"
                disabled
                addon-after="คน"
                type="number"
              />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input
                v-model="schedule.criteria_Internal.lecture.Graduate"
                disabled
                addon-after="คน"
                type="number"
              />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

          <a-row
            :gutter="[8, 8]"
            v-for="data in schedule.criteria_Internal.lecture.condition"
            :key="data.key"
          >
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <span>จำนวนนิสิตที่เกิน: </span>
              <a-input
                :value="data.Minimum_number_students"
                disabled
                style="width: 100px"
                addon-after="คน"
              />
              <span> ถึง </span>
              <a-input
                :value="data.Maximum_number_students"
                disabled
                style="width: 100px"
                addon-after="คน"
              />
              <span> เท่ากับ </span
              ><a-input
                :value="data.Weight_per_credit"
                disabled
                style="width: 100px"
              />
              <span> ค่าน้ำหนักต่อหน่วยกิต</span>
            </a-col>
          </a-row>
        </a-card>
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <h1>การสอนแบบปฏิบัติการ</h1>
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: start">
              <h1>จำนวนนิสิตต่อกลุ่ม</h1>
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับปริญญาตรี :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input
                v-model="schedule.criteria_Internal.lab.Bachelor"
                disabled
                addon-after="คน"
                type="number"
              />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input
                v-model="schedule.criteria_Internal.lab.Graduate"
                disabled
                addon-after="คน"
                type="number"
              />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

          <a-row
            :gutter="[8, 8]"
            v-for="data in schedule.criteria_Internal.lab.condition"
            :key="data.key"
          >
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <span>จำนวนนิสิตที่เกิน: </span>
              <a-input
                :value="data.Minimum_number_students"
                disabled
                style="width: 100px"
                addon-after="คน"
              />
              <span> ถึง </span>
              <a-input
                :value="data.Maximum_number_students"
                disabled
                style="width: 100px"
                addon-after="คน"
              />
              <span> เท่ากับ </span
              ><a-input
                :value="data.Weight_per_credit"
                disabled
                style="width: 100px"
              />
              <span> ค่าน้ำหนักต่อหน่วยกิต</span>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <!-- สิ้นสุด วิชาในหลักสูตร -->

      <!-- วิชาศึกษาทั่วไป -->
      <a-col :span="12" style="margin: 0.2em 0px; text-align: center">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0p">
              <a-card-meta title="วิชาศึกษาทั่วไป"> </a-card-meta>
            </a-col>
          </a-row>
        </a-card>
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <h1>การสอนแบบบรรยาย</h1>
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: start">
              <h1>จำนวนนิสิตต่อกลุ่ม</h1>
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับปริญญาตรี :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input
                v-model="schedule.criteria_external.lecture.Bachelor"
                disabled
                addon-after="คน"
                type="number"
              />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input
                v-model="schedule.criteria_external.lecture.Graduate"
                disabled
                addon-after="คน"
                type="number"
              />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

          <a-row
            :gutter="[8, 8]"
            v-for="data in schedule.criteria_external.lecture.condition"
            :key="data.key"
          >
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <span>จำนวนนิสิตที่เกิน: </span>
              <a-input
                :value="data.Minimum_number_students"
                disabled
                style="width: 100px"
                addon-after="คน"
              />
              <span> ถึง </span>
              <a-input
                :value="data.Maximum_number_students"
                disabled
                style="width: 100px"
                addon-after="คน"
              />
              <span> เท่ากับ </span
              ><a-input
                :value="data.Weight_per_credit"
                disabled
                style="width: 100px"
              />
              <span> ค่าน้ำหนักต่อหน่วยกิต</span>
            </a-col>
          </a-row>
        </a-card>
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <h1>การสอนแบบปฏิบัติการ</h1>
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: start">
              <h1>จำนวนนิสิตต่อกลุ่ม</h1>
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับปริญญาตรี :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input
                v-model="schedule.criteria_external.lab.Bachelor"
                disabled
                addon-after="คน"
                type="number"
              />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input
                v-model="schedule.criteria_external.lab.Graduate"
                disabled
                addon-after="คน"
                type="number"
              />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

          <a-row
            :gutter="[8, 8]"
            v-for="data in schedule.criteria_external.lab.condition"
            :key="data.key"
          >
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <span>จำนวนนิสิตที่เกิน: </span>
              <a-input
                :value="data.Minimum_number_students"
                disabled
                style="width: 100px"
                addon-after="คน"
              />
              <span> ถึง </span>
              <a-input
                :value="data.Maximum_number_students"
                disabled
                style="width: 100px"
                addon-after="คน"
              />
              <span> เท่ากับ </span
              ><a-input
                :value="data.Weight_per_credit"
                disabled
                style="width: 100px"
              />
              <span> ค่าน้ำหนักต่อหน่วยกิต</span>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <!-- END -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      schedule_detail: [
        {
          schedule_detail_id: 1,
          schedule_detail_type: 0,
          schedule_detail_subject: 1,
          schedule_detail_bachelor: 20,
          schedule_detail_graduate: 50,
        },
        {
          schedule_detail_id: 2,
          schedule_detail_type: 0,
          schedule_detail_subject: 0,
          schedule_detail_bachelor: 99,
          schedule_detail_graduate: 50,
        },
        {
          schedule_detail_id: 3,
          schedule_detail_type: 1,
          schedule_detail_subject: 1,
          schedule_detail_bachelor: 30,
          schedule_detail_graduate: 20,
        },
        {
          schedule_detail_id: 4,
          schedule_detail_type: 1,
          schedule_detail_subject: 0,
          schedule_detail_bachelor: 10,
          schedule_detail_graduate: 30,
        },
      ],
      schedule: {
        schedule_id: 2,
        schedule_name: "กำหนดการวิทยาการสารสนเทศ คำนวณภาระงานอาจารย์",
        schedule_start_date: "2021-02-19T17:00:00.000Z",
        schedule_per_credit: 400,
        //  กำหนดภาระงานเพื่อการจ่ายค่าตอบแทนสอนเกินของคณาจารย์ประจำที่ไม่ได้ดำรงตำแหน่งบริหาร
        schedule_general_min: 6,
        schedule_general_max: 18,
        schedule_create_by: "666",
      },
      // วิชาในหลักสูตร
      criteria_Internal: {
        lab: {
          Bachelor: 20,
          Graduate: 50,
          index_condition: 0,
          condition: [
            {
              key: 1,
              Minimum_number_students: 1,
              Maximum_number_students: 10,
              Weight_per_credit: 0.0015,
            },
          ],
        },
        lecture: {
          Bachelor: 50,
          Graduate: 20,
          index_condition: 0,
          condition: [
            {
              key: 1,
              Minimum_number_students: 1,
              Maximum_number_students: 10,
              Weight_per_credit: 0.0015,
            },
            {
              key: 2,
              Minimum_number_students: 11,
              Maximum_number_students: 30,
              Weight_per_credit: 0.0015,
            },
          ],
        },
      },

      // วิชานอกหลักสูตร
      criteria_external: {
        lab: {
          Bachelor: 30,
          Graduate: 20,
          index_condition: 0,
          condition: [
            {
              key: 1,
              Minimum_number_students: 1,
              Maximum_number_students: 10,
              Weight_per_credit: 0.0015,
            },
            {
              key: 2,
              Minimum_number_students: 11,
              Maximum_number_students: 30,
              Weight_per_credit: 0.0015,
            },
            {
              key: 3,
              Minimum_number_students: 31,
              Maximum_number_students: 35,
              Weight_per_credit: 0.0015,
            },
          ],
        },
        lecture: {
          Bachelor: 10,
          Graduate: 20,
          index_condition: 0,
          condition: [
            {
              key: 1,
              Minimum_number_students: 1,
              Maximum_number_students: 10,
              Weight_per_credit: 0.0015,
            },
          ],
        },
      },
    };
  },

  methods: {
    get_schedule_by_Id() {
      // console.log("schedule_id = " + this.$store.state.schedule_id);
    },
    get_schedule_detail_by_scheduleID() {
      // console.log("schedule_id = " + this.$store.state.schedule_id);
    },
    get_condition_by_schedule_detail_id() {
      // schedule_detail_id ใช้ หา condition
    },
  },
  mounted() {
    console.log("schedule_id = " + this.$store.state.schedule_id);
    this.get_schedule_by_Id();
    this.get_schedule_detail_by_scheduleID();
    this.get_condition_by_schedule_detail_id();
  },
};
</script>

<style>
</style>