<template>
  <div id="content">
    <a-card title="เพิ่มรายวิชา">
      <a-row :span="24" :gutter="[8, 8]">
        <a-col :span="2" :style="{ textAlign: 'end' }">
          <p style="margin-top: 5px">รหัสวิชา :</p>
        </a-col>
        <a-col :span="3">
          <a-input name="course-id" />
        </a-col>
        <a-col :span="2" :style="{ textAlign: 'end' }">
          <p style="margin-top: 5px">ปีหลักสูตร :</p>
        </a-col>
        <a-col :span="3">
          <a-select
            label-in-value
            @change="DatehandleChange"
            style="width: 100%"
            :default-value="{ key: '1' }"
          >
            <a-select-option value="1"> --- โปรดเลือก --- </a-select-option>
            <a-select-option v-for="item in course_years" :key="item">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="2" :style="{ textAlign: 'end' }">
          <p style="margin-top: 5px">ชื่อวิชา :</p>
        </a-col>
        <a-col :span="5">
          <a-input name="course_name" />
        </a-col>
        <a-col :span="2" :style="{ textAlign: 'end' }">
          <p style="margin-top: 5px">หน่วยกิต :</p>
        </a-col>
        <a-col :span="3">
          <a-input name="course_credit" />
        </a-col>
      </a-row>
      <a-row :span="24" :gutter="[8, 8]">
        <a-col :span="2" :style="{ textAlign: 'end' }">
          <p style="margin-top: 5px">กลุ่ม :</p>
        </a-col>
        <a-col :span="3">
          <a-input-number
            id="inputNumber"
            v-model="sec"
            :min="1"
            @change="SeconChange"
            style="width: 80px"
          />
        </a-col>
        <a-col :span="2" :style="{ textAlign: 'end' }">
          <p style="margin-top: 5px">จำนวน :</p>
        </a-col>
        <a-col :span="3">
          <a-input-number
            id="inputNumber"
            v-model="student"
            :min="1"
            @change="StudentChange"
            style="width: 80px"
          />
        </a-col>
        <a-col :span="2" :style="{ textAlign: 'end' }">
          <p style="margin-top: 5px">วันที่สอน :</p>
        </a-col>
        <a-col :span="5">
          <a-select
            label-in-value
            @change="DatehandleChange"
            style="width: 100px"
            :default-value="{ key: '2' }"
          >
            <a-select-option value="1"> SUN </a-select-option>
            <a-select-option value="2"> MON </a-select-option>
            <a-select-option value="3"> TU </a-select-option>
            <a-select-option value="4"> WE </a-select-option>
            <a-select-option value="5"> TH </a-select-option>
            <a-select-option value="6"> FRI </a-select-option>
            <a-select-option value="7"> ST </a-select-option>
          </a-select>
        </a-col>
      </a-row>
       <a-row :span="24" :gutter="[8, 8]">
         
       </a-row>
    </a-card>
  </div>
  <!-- <a-row :span="24">
      <a-col :span="24" :offset="10">
        <a-card
          title="เพิ่มข้อมูลรายวิชา"
          :bordered="false"
          style="width: 300px"
        >
          <a-row :span="24" :gutter="[8, 24]">
            <a-col :span="8">
              <p style="margin-top: 5px">รหัสวิชา :</p>
            </a-col>
            <a-col :span="13">
              <a-input name="name-basic" />
            </a-col>
          </a-row>
          <a-row :span="24" :gutter="[8, 24]">
            <a-col :span="8">
              <p style="margin-top: 5px">ปีหลักสูตร :</p>
            </a-col>
            <a-col :span="6">
              <a-input name="name-basic" />
            </a-col>
          </a-row>
          <a-row :span="24" :gutter="[8, 24]">
            <a-col :span="8">
              <p style="margin-top: 5px">ชื่อวิชา :</p>
            </a-col>
            <a-col :span="16">
              <a-input name="name-basic" />
            </a-col>
          </a-row>
          <a-row :span="24" :gutter="[8, 24]">
            <a-col :span="8">
              <p style="margin-top: 5px">หน่วยกิต :</p>
            </a-col>
            <a-col :span="16">
              <a-input name="name-basic" />
            </a-col>
          </a-row>
          <a-row :span="24" :gutter="[8, 24]">
            <a-col :span="8">
              <p style="margin-top: 5px">กลุ่ม :</p>
            </a-col>
            <a-col :span="5">
              <a-input-number
                id="inputNumber"
                v-model="sec"
                :min="1"
                @change="SeconChange"
                style="width: 80px"
              />
            </a-col>
          </a-row>
          <a-row :span="24" :gutter="[8, 24]">
            <a-col :span="8">
              <p style="margin-top: 5px">จำนวน :</p>
            </a-col>
            <a-col :span="5">
              <a-input-number
                id="inputNumber"
                v-model="student"
                :min="1"
                @change="StudentChange"
                style="width: 80px"
              />
            </a-col>
          </a-row>
          <a-row :span="24" :gutter="[8, 24]">
            <a-col :span="8">
              <p style="margin-top: 5px">วันที่สอน :</p>
            </a-col>
            <a-col :span="13">
              <a-select
                label-in-value
                @change="DatehandleChange"
                style="width: 100px"
                :default-value="{ key: '2' }"
              >
                <a-select-option value="1"> SUN </a-select-option>
                <a-select-option value="2"> MON </a-select-option>
                <a-select-option value="3"> TU </a-select-option>
                <a-select-option value="4"> WE </a-select-option>
                <a-select-option value="5"> TH </a-select-option>
                <a-select-option value="6"> FRI </a-select-option>
                <a-select-option value="7"> ST </a-select-option>
              </a-select>
            </a-col>
          </a-row>
          <a-row :span="24" :gutter="[8, 24]">
            <a-col :span="8">
              <p style="margin-top: 5px">เริ่มเรียน :</p>
            </a-col>
            <a-col :span="5">
              <a-time-picker
                :default-value="moment('12:08', 'HH:mm')"
                format="HH:mm"
              />
            </a-col>
          </a-row>
          <a-row :span="24" :gutter="[8, 24]">
            <a-col :span="8">
              <p style="margin-top: 5px">เลิกเรียน :</p>
            </a-col>
            <a-col :span="5">
              <a-time-picker
                :default-value="moment('12:08', 'HH:mm')"
                format="HH:mm"
              />
            </a-col>
          </a-row>
          <a-row :span="24" :gutter="[8, 24]">
            <a-col :span="8">
              <p style="margin-top: 5px">ห้องเรียน :</p>
            </a-col>
            <a-col :span="16">
              <a-input name="name-basic" />
            </a-col>
          </a-row>
          <a-row :span="24" :gutter="[8, 24]">
            <a-col :span="8">
              <p style="margin-top: 5px">อาจารย์ :</p>
            </a-col>
            <a-col :span="16">
              <a-select
                label-in-value
                @change="DatehandleChange"
                style="width: 100%"
                :default-value="{ key: '2' }"
              >
                <a-select-option value="1">
                  อาจารย์ ดร.พิเชษ วะยะลุน
                </a-select-option>
                <a-select-option value="2">
                  อาจารย์พีระศักดิ์ เพียรประสิทธิ์
                </a-select-option>
                <a-select-option value="3">
                  อาจารย์กิตติพา คลังวิสาร
                </a-select-option>
              </a-select>
            </a-col>
          </a-row>
          <a-row :span="24" :gutter="[8, 24]">
             <router-link :to="{ path: '/calculator/Show_course' }">
            <a-button type="success" block> บันทึก </a-button>
             </router-link>
          </a-row>
        </a-card>
      </a-col>
    </a-row> -->
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      course_years: [],
      sec: 1,
      student: 1,
    };
  },
  methods: {
    moment,
    SeconChange(value) {
      console.log("changed", value);
    },
    StudentChange(value) {
      console.log("changed", value);
    },
    DatehandleChange(value) {
      console.log(value);
    },
    Years_course() {
      var j = 0;
      for (var i = 10; i > 0; i--) {
        if (i == 10) {
          this.course_years.push(new Date().getFullYear() + 543);
        } else {
          this.course_years.push(new Date().getFullYear() - j + 543);
        }
        j++;
      }
      console.log(this.course_years);
    },
  },
  mounted() {
    this.Years_course();
  },
};
</script>

<style>
</style>