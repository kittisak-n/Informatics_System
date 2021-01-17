<template>
  <div id="Detail_criteria">
    <a-card size="small">
      <a-row :gutter="[8, 8]">
        <a-col :span="24" style="margin: 0.2em 0px">
          <a-card-meta title="แสดงรายละเอียดอัตราการจ่ายค่าตอบแทนภาระงานสอน">
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
          <a-input id="" name="" disabled v-model="criteria_name"
        /></a-col>
        <a-col :span="6" style="margin: 0.2em 0px"></a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
        <a-col :span="6" style="margin: 0.2em 0px">วันที่เริ่มใช้:</a-col>
        <a-col :span="6" style="margin: 0.2em 0px">
          <a-date-picker
            style="width: 500px"
            v-model="criteria_start_date"
            disabled
          />
        </a-col>
        <a-col :span="6" style="margin: 0.2em 0px"></a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
        <a-col :span="6" style="margin: 0.2em 0px">ผู้สร้างกำหนดการ:</a-col>
        <a-col :span="6" style="margin: 0.2em 0px">
          <a-input id="" name="" disabled
        /></a-col>
        <a-col :span="6" style="margin: 0.2em 0px"></a-col>
      </a-row>
      <a-row :gutter="[8, 8]">
        <a-col :span="6" style="margin: 0.2em 0px"> </a-col>
        <a-col :span="6" style="margin: 0.2em 0px">อัตราเงินต่อหน่วยกิต:</a-col>
        <a-col :span="6" style="margin: 0.2em 0px">
          <a-input
            v-model="criteria_rate_per_credit"
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
            style="width: 400px"
            disabled
            v-model="nmp_minimum"
          />
        </a-col>

        <a-col :span="12" style="margin: 0.2em 0px; text-align: start">
          ขั้นสูง:
          <a-input
            addon-after="หน่วยภาระงานสอน"
            type="number"
            style="width: 400px"
            v-model="nmp_maximum"
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
              <a-input disabled addon-after="คน" type="number" />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input disabled addon-after="คน" type="number" />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <span>จำนวนนิสิตที่เกิน: </span>
              <a-input disabled style="width: 100px" addon-after="คน" />
              <span> ถึง </span>
              <a-input disabled style="width: 100px" addon-after="คน" />
              <span> เท่ากับ </span><a-input disabled style="width: 100px" />
              <span> ค่าน้ำหนักต่อหน่วยกิต</span>
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
              <a-input disabled addon-after="คน" type="number" />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input disabled addon-after="คน" type="number" />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <span>จำนวนนิสิตที่เกิน: </span>
              <a-input disabled style="width: 100px" addon-after="คน" />
              <span> ถึง </span>
              <a-input disabled style="width: 100px" addon-after="คน" />
              <span> เท่ากับ </span><a-input disabled style="width: 100px" />
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
              <a-card-meta title="วิชาในหลักสูตร"> </a-card-meta>
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
              <a-input disabled addon-after="คน" type="number" />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input disabled addon-after="คน" type="number" />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <span>จำนวนนิสิตที่เกิน: </span>
              <a-input disabled style="width: 100px" addon-after="คน" />
              <span> ถึง </span>
              <a-input disabled style="width: 100px" addon-after="คน" />
              <span> เท่ากับ </span><a-input disabled style="width: 100px" />
              <span> ค่าน้ำหนักต่อหน่วยกิต</span>
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
              <a-input disabled addon-after="คน" type="number" />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input disabled addon-after="คน" type="number" />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <span>จำนวนนิสิตที่เกิน: </span>
              <a-input disabled style="width: 100px" addon-after="คน" />
              <span> ถึง </span>
              <a-input disabled style="width: 100px" addon-after="คน" />
              <span> เท่ากับ </span><a-input disabled style="width: 100px" />
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
      id: 0,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },

  methods: {

    show_criteriaId(){
      console.log("show_criteriaId = " + this.$store.state.criteriaId)
    }
  },
  mounted() {

    this.show_criteriaId()
  },
};
</script>

<style>
</style>