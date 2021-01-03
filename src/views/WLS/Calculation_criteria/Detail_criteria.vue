<template>
  <div id="Detail_criteria">
    <a-row :gutter="[8, 8]">
      <a-col :span="24" style="margin: 0.2em 0px">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px">
              <a-card-meta
                title="รายละเอียดตั้งค่าอัตราการจ่ายค่าตอบแทนภาระงานสอน"
              >
                <a-icon
                  slot="avatar"
                  type="search"
                  :style="{
                    fontSize: '150%',
                  }"
                />
              </a-card-meta>
            </a-col>
          </a-row>
        </a-card>
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span>ชื่อกำหนดการ :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input id="cc_name" name="cc_name" />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span>ปีการศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input id="academic_year" name="academic_year" />
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span>วันที่เริ่มใช้ :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input id="cc_start_date" name="cc_start_date" />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span>ชื่อผู้สร้างกำหนดการ :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input id="cc_create_by" name="cc_create_by" />
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>

    <a-row :gutter="[8, 8]">
      <a-col :span="12" style="margin: 0.2em 0px; text-align: center">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0p;">
              <a-card-meta title="วิชาในหลักสูตร">
                <a-icon
                  slot="avatar"
                  type="search"
                  :style="{
                    fontSize: '150%',
                  
                  }"
                />
              </a-card-meta>
            </a-col>
          </a-row>
        </a-card>
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <h1>ปฏิบัติการ</h1>
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
              <a-input id="" name="" addon-after="คน" />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input id="" name="" addon-after="คน" />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <span>จำนวนนิสิตที่เกิน: </span>
              <a-input style="width: 100px" id="" name="" addon-after="คน" />
              <span>ถึง</span>
              <a-input style="width: 100px" id="" name="" addon-after="คน" />
              <span> เท่ากับ </span
              ><a-input style="width: 100px" id="" name="" />
              <span>ค่าน้ำหนักต่อหน่วยกิต</span>
            </a-col>
          </a-row>
        </a-card>
           <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <h1>บรรยาย</h1>
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
              <a-input id="" name="" addon-after="คน" />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input id="" name="" addon-after="คน" />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

           <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
                
                         <span>จำนวนนิสิตที่เกิน:  </span> <a-input style="width:100px;" id="" name="" addon-after="คน" /> <span>ถึง</span> <a-input style="width:100px;" id="" name="" addon-after="คน" /> <span> เท่ากับ </span><a-input style="width:100px;" id="" name=""  /> <span>ค่าน้ำหนักต่อหน่วยกิต</span>
             
            </a-col>
          </a-row>

        </a-card>
      </a-col>
 <a-col :span="12" style="margin: 0.2em 0px; text-align: center">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0p;">
              <a-card-meta title="วิชาศึกษาทั่วไป">
                <a-icon
                  slot="avatar"
                  type="search"
                  :style="{
                    fontSize: '150%',
                  
                  }"
                />
              </a-card-meta>
            </a-col>
          </a-row>
        </a-card>
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <h1>ปฏิบัติการ</h1>
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
              <a-input id="" name="" addon-after="คน" />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input id="" name="" addon-after="คน" />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <span>จำนวนนิสิตที่เกิน: </span>
              <a-input style="width: 100px" id="" name="" addon-after="คน" />
              <span>ถึง</span>
              <a-input style="width: 100px" id="" name="" addon-after="คน" />
              <span> เท่ากับ </span
              ><a-input style="width: 100px" id="" name="" />
              <span>ค่าน้ำหนักต่อหน่วยกิต</span>
            </a-col>
          </a-row>
        </a-card>
           <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
              <h1>บรรยาย</h1>
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
              <a-input id="" name="" addon-after="คน" />
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <span> ระดับบัณฑิตศึกษา :</span>
            </a-col>
            <a-col :span="6" style="margin: 0.2em 0px; text-align: center">
              <a-input id="" name="" addon-after="คน" />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: start">
              <h1>เงื่อนไขค่าน้ำหนัก</h1>
            </a-col>
          </a-row>

           <a-row :gutter="[8, 8]">
            <a-col :span="24" style="margin: 0.2em 0px; text-align: center">
                
                         <span>จำนวนนิสิตที่เกิน:  </span> <a-input style="width:100px;" id="" name="" addon-after="คน" /> <span>ถึง</span> <a-input style="width:100px;" id="" name="" addon-after="คน" /> <span> เท่ากับ </span><a-input style="width:100px;" id="" name=""  /> <span>ค่าน้ำหนักต่อหน่วยกิต</span>
             
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
      id: 0,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },

  methods: {},
};
</script>

<style>
</style>