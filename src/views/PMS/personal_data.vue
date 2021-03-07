<template>
  <div id="personal_data">
    <a-card>
      <br />
      <a-row :gutter="[8, 8]" type="flex">
        <a-col :span="6" style="text-align:end">
          ชื่อ-นามสกุล (ภาษาไทย) :
        </a-col>
        <a-col :span="4">
          <a-select
            style="width:100%"
            v-model="person.prefix_id"
            show-search
            placeholder="โปรดเลือกคำนำหน้า"
          >
            <!-- <a-select-option :value="null" v-if="(value = null)">
              <b>คำนำหน้าชื่อ</b>
            </a-select-option> -->
            <a-select-option
              v-for="item in dataPrefix"
              :key="item.key"
              :value="item.pf_id"
            >
              {{ item.pf_name_abbr }}
            </a-select-option>
          </a-select>
        </a-col>

        <a-col :span="6">
          <a-input
            style="width:100%"
            v-model="person.nameThai"
            placeholder="กรอกชื่อจริงผู้ใช้งาน"
          />
        </a-col>
        <a-col :span="6">
          <a-input
            style="width:100%"
            v-model="person.lastnameThai"
            placeholder="กรอกนามสกุลผู้ใช้งาน"
          />
        </a-col>
      </a-row>
      <br />
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="2" style="text-align:end">
          ตำแหน่ง :
        </a-col>

        <a-col :span="6">
          <a-select
            style="width:100%"
            v-model="person.position_id"
            show-search
            placeholder="โปรดเลือกตำแหน่ง"
          >
            <!-- <a-select-option :value="null" v-if="(value = null)">
              ตำแหน่ง
            </a-select-option> -->
            <a-select-option
              v-for="item in dataPosition"
              :key="item.key"
              :value="item.postion_id"
            >
              {{ item.postition_name }}
            </a-select-option>
          </a-select>
        </a-col>

        <a-col :span="2" style="text-align:end">
          ที่อยู่ :
        </a-col>
        <a-col :span="6">
          <a-input
            style="width:100%"
            v-model="person.address"
            placeholder="กรอกที่อยู่บ้านเลขที่"
          />
        </a-col>
      </a-row>
      <br />
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="2" style="text-align:end">
          จังหวัด :
        </a-col>
        <a-col :span="4">
          <a-select
            show-search
            placeholder="โปรดเลือกจังหวัด"
            option-filter-prop="children"
            style="width: 100%"
            v-model="person.province_id"
            :filter-option="filterOptionProvince"
            @change="getAllAmphur()"
          >
            <a-select-option
              v-for="item in dataProvinces"
              :key="item.key"
              :value="item.value"
            >
              {{ item.name_th }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="2" style="text-align:end">
          อำเภอ :
        </a-col>
        <a-col :span="4">
          <a-select
            show-search
            placeholder="โปรดเลือกอำเภอ"
            option-filter-prop="children"
            style="width: 100%"
            v-model="person.amphure_id"
            :filter-option="filterOptionAmphure"
            @change="getAllDistrict()"
          >
            <a-select-option
              v-for="item in dataAmphures"
              :key="item.key"
              :value="item.value"
            >
              {{ item.name_th }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="2" style="text-align:end">
          ตำบล :
        </a-col>
        <a-col :span="4">
          <a-select
            show-search
            placeholder="โปรดเลือกตำบล"
            option-filter-prop="children"
            style="width: 100%"
            v-model="person.district_id"
            :filter-option="filterOptionDistrict"
            @change="getAllDistrict()"
          >
            <a-select-option
              v-for="item in dataDistricts"
              :key="item.key"
              :value="item.value"
            >
              {{ item.name_th }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="2" style="text-align:end">
          รหัสไปรษณีย์ :
        </a-col>
        <a-col :span="4">
          <a-select style="width:100%" v-model="person.district_id" disabled>
            <a-select-option :value="null">
              โปรดเลือก
            </a-select-option>
            <a-select-option
              v-for="item in dataDistricts"
              :key="item.key"
              :value="item.value"
            >
              {{ item.zip_code }}
            </a-select-option>
          </a-select>
        </a-col>
      </a-row>
      <br />
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="24" style="text-align:center">
          <a-button type="success" @click="updatePerson()">
            บันทึก
          </a-button>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      person: {
        username_search: "",
        nameEng: "",
        lastnameEng: "",
        prefix_id: undefined,
        nameThai: "",
        lastnameThai: "",
        position_id: undefined,
        position_access: [
          {
            key: 1,
            position_access_id: undefined,
          },
        ],
        address: "",
        province_id: undefined,
        amphure_id: undefined,
        district_id: undefined,
        zipcode: undefined,
        create_by: this.$store.state.user.user_id,
      },
      dataPrefix: [],
      dataAmphures: [],
      dataDistricts: [],
      dataProvinces: [],
      dataPosition: [],
      dataPositionAccess: [],
      nameEngVeri: "",
      nameThaiVeri: "",
    };
  },
  methods: {
    getByIdPerson() {
      const self = this;
      axios
        .post("http://localhost:8080/personRouters/getByIdPerson", {
          person_id: self.$store.state.user.user_id,
        })
        .then(function(res) {
          const data = res.data;
          console.log("data");
          console.log(data);

          // if (data.results[0].pf_name_abbr == null) {
          //   data.results[0].pf_name_abbr = "";
          // }

          // self.nameInfo =
          //   data.results[0].pf_name_abbr + data.results[0].person_firstname_TH;
          // self.lastnameInfo = data.results[0].person_lastname_TH;
          // self.positionInfo = data.results[0].postition_name;
          self.addressInfo = data.results[0].person_address;
          self.person.province_id = 1;
          self.amphurInfo = data.results[0].amphures;
          // self.districtInfo = data.results[0].districts;
          // self.zipcodeInfo = data.results[0].zipcode;
          self.person.nameThai = data.results[0].person_firstname_TH;
          self.person.lastnameThai = data.results[0].person_lastname_TH;
          self.person.address = data.results[0].person_address;

          // self.person.prefix = data.results[0].pf_name_abbr;
        });
    },
    updatePerson() {
      const self = this;
      axios
        .post("http://localhost:8080/personRouters/updatePerson", {
          person_id: self.$store.state.user.user_id,
        })
        .then(function(res) {
          const data = res.data;
          console.log(data);
        });
    },
    saveUser() {
      const self = this;
      console.log(self.person);
      axios
        .post("http://localhost:8080/personRouters/insertPerson", self.person)
        .then(function(res) {
          console.log(res.data);
        });

      this.$notification["success"]({
        message: "การแจ้งเตือน",
        description: "เพิ่มผู้ใช้งานสำเร็จ",
        duration: 3,
      });
    },
    getAllPrefix() {
      const self = this;
      axios
        .post("http://localhost:8080/personRouters/getPrefixTh")
        .then(function(res) {
          console.log(res.data);
          const data = res.data;
          // console.log(data.results);
          data.results.forEach(function(ele, index) {
            let data = {
              key: index + 1,
              pf_id: ele.pf_id,
              pf_name_abbr: ele.pf_name_abbr,
            };
            self.dataPrefix.push(data);
          });
          console.log(self.dataPrefix);
        });
    },
    getAllProvice() {
      const self = this;
      axios
        .post("http://localhost:8080/personRouters/getProvinces")
        .then(function(res) {
          console.log(res.data);
          const data = res.data;
          // console.log(data.results);
          data.results.forEach(function(ele, index) {
            let data = {
              key: index + 1,
              value: ele.id,
              name_th: ele.name_th,
            };
            self.dataProvinces.push(data);
          });
          console.log(self.dataProvinces);
        });
    },
    getAllAmphur() {
      const self = this;
      console.log(1);
      const amphures = self.person.province_id;
      axios
        .post("http://localhost:8080/personRouters/getAmphures", {
          province_id: amphures,
        })
        .then(function(res) {
          console.log(res.data);
          const data = res.data;
          self.dataAmphures = [];
          data.results.forEach(function(ele, index) {
            self.dataAmphures.push({
              key: index + 1,
              value: ele.id,
              name_th: ele.name_th,
              province_id: ele.province_id,
            });
          });
          console.log(self.dataAmphures);
        });
    },
    getAllDistrict() {
      const self = this;
      const districts = self.person.amphure_id;
      axios
        .post("http://localhost:8080/personRouters/getDistricts", {
          amphure_id: districts,
        })
        .then(function(res) {
          console.log(res.data);
          const data = res.data;
          data.results.forEach(function(ele, index) {
            self.dataDistricts.push({
              key: index + 1,
              value: ele.id,
              zip_code: ele.zip_code,
              name_th: ele.name_th,
              amphure_id: ele.amphure_id,
            });
          });
          console.log(self.dataDistricts);
        });
    },
    getAllPosition() {
      const self = this;
      axios
        .post("http://localhost:8080/personRouters/getPosition")
        .then(function(res) {
          console.log(res.data);
          const data = res.data;
          // console.log(data.results);
          data.results.forEach(function(ele, index) {
            let data = {
              key: index + 1,
              postion_id: ele.postion_id,
              postition_name: ele.postition_name,
            };
            self.dataPosition.push(data);
          });
          console.log(self.dataPosition);
        });
    },
    getAllPositionAccess() {
      const self = this;
      axios
        .post("http://localhost:8080/personRouters/getPostionAccess")
        .then(function(res) {
          console.log(res.data);
          const data = res.data;
          // console.log(data.results);
          data.results.forEach(function(ele, index) {
            self.dataPositionAccess.push({
              key: index + 1,
              postion_access_id: ele.postion_access_id,
              postion_access_name_TH: ele.postion_access_name_TH,
            });
          });
          console.log(self.dataPositionAccess);
        });
    },
    filterOptionProvince(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    filterOptionAmphure(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    filterOptionDistrict(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    filterOptionPositionAccess(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
  },
  created() {
    this.getByIdPerson();
    this.getAllPrefix();
    this.getAllProvice();
    this.getAllPosition();
    this.getAllPositionAccess();
  },
};
</script>

<style></style>
