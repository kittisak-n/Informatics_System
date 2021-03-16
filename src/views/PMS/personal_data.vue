<template>
  <div id="personal_data">
    <!-- <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card>
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="text-align:right">
              <a-button type="warning">
                แก้ไข
              </a-button>
            </a-col>
          </a-row>
          <br>

          <a-row :gutter="[8, 8]">
            <a-col :span="12">
              <div style="text-align:center">
                <span>ชื่อ : </span>
                <span>ประไพพรรณ</span>
              </div>
            </a-col>
            <a-col :span="12">
              <div style="text-align:center">
                <span>นามสกุล : </span>
                <span>สุ่มทรัพย์</span>
              </div>
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12">
              <div style="text-align:center">
                <span>ตำแหน่ง : </span>
                <span>เจ้าหน้าที่ฝ่ายธุรการ</span>
              </div>
            </a-col>
            <a-col :span="12">
              <div style="text-align:center">
                <span>ที่อยู่ : </span>
                <span>199/116 หมู่16</span>
              </div>
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12">
              <div style="text-align:center">
                <span>ตำบล : </span>
                <span>ศรีราชา</span>
              </div>
            </a-col>
            <a-col :span="12">
              <div style="text-align:center">
                <span>อำเภอ : </span>
                <span>ศรีราชา</span>
              </div>
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12">
              <div style="text-align:center">
                <span>จังหวัด : </span>
                <span>ชลบุรี</span>
              </div>
            </a-col>
            <a-col :span="12">
              <div style="text-align:center">
                <span>รหัสไปรษณีย์ : </span>
                <span>20000</span>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row> -->
    <!-- <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card>
          <a-row :gutter="[8, 8]">
            <a-col :span="8">
              <b>ชื่อ</b> :
              <a-input />
            </a-col>

            <a-col :span="8">
              <b>นามสกุล</b> :
              <a-input />
            </a-col>

            <a-col :span="8">
              <b>ตำแหน่ง</b> :
              <a-input />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="8">
              <b>ที่อยู่</b> :
              <a-input />
            </a-col>

            <a-col :span="8">
              <b>ตำบล</b> :
              <a-select
                default-value="lucy"
                style="width: 100%"
                @change="handleChange"
              >
                <a-select-opt-group>
                  <span slot="label"><a-icon type="user" />Manager</span>
                  <a-select-option value="jack">
                    Jack
                  </a-select-option>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                </a-select-opt-group>
                <a-select-opt-group label="Engineer">
                  <a-select-option value="Yiminghe">
                    yiminghe
                  </a-select-option>
                </a-select-opt-group>
              </a-select>
            </a-col>

            <a-col :span="8">
              <b>อำเภอ</b> :
              <a-select
                default-value="lucy"
                style="width: 100%"
                @change="handleChange"
              >
                <a-select-opt-group>
                  <span slot="label"><a-icon type="user" />Manager</span>
                  <a-select-option value="jack">
                    Jack
                  </a-select-option>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                </a-select-opt-group>
                <a-select-opt-group label="Engineer">
                  <a-select-option value="Yiminghe">
                    yiminghe
                  </a-select-option>
                </a-select-opt-group>
              </a-select>
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12">
              <b>จังหวัด</b> :
              <a-select
                default-value="lucy"
                style="width: 100%"
                @change="handleChange"
              >
                <a-select-opt-group>
                  <span slot="label"><a-icon type="user" />Manager</span>
                  <a-select-option value="jack">
                    Jack
                  </a-select-option>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                </a-select-opt-group>
                <a-select-opt-group label="Engineer">
                  <a-select-option value="Yiminghe">
                    yiminghe
                  </a-select-option>
                </a-select-opt-group>
              </a-select>
            </a-col>

            <a-col :span="12">
              <b>รหัสไปรษณีย์</b> :
              <a-select
                default-value="lucy"
                style="width: 100%"
                @change="handleChange"
              >
                <a-select-opt-group>
                  <span slot="label"><a-icon type="user" />Manager</span>
                  <a-select-option value="jack">
                    Jack
                  </a-select-option>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                </a-select-opt-group>
                <a-select-opt-group label="Engineer">
                  <a-select-option value="Yiminghe">
                    yiminghe
                  </a-select-option>
                </a-select-opt-group>
              </a-select>
            </a-col>

            <a-row :gutter="[8, 8]">
              <a-col :span="24" style="text-align:center">
                <a-col :span="12" style="text-align:right">
                  <a-button>ยกเลิก</a-button>
                </a-col>
                <a-col :span="12" style="text-align:left">
                  <a-button type="primary">
                    บันทึก
                  </a-button>
                </a-col>
              </a-col>
            </a-row>
          </a-row>
        </a-card>
      </a-col>
    </a-row> -->
    <a-card>
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="24" style="text-align: center">
          <h3>รายละเอียดข้อมูลส่วนตัว</h3>
        </a-col>
      </a-row>
      <br />

      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="2" style="text-align: end"> ชื่อ (อังกฤษ) : </a-col>
        <a-col :span="6">
          <a-input style="width: 100%" placeholder="Papai" />
        </a-col>
        <a-col :span="2" style="text-align: end"> นามสกุล (อังกฤษ) : </a-col>
        <a-col :span="6">
          <a-input style="width: 100%" placeholder="Papai" />
        </a-col>
      </a-row>
      <br />
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="2" style="text-align: end"> ชื่อ (ภาษาไทย) : </a-col>
        <a-col :span="6">
          <a-input style="width: 100%" placeholder="ประไพพรรณ" />
        </a-col>
        <a-col :span="2" style="text-align: end"> นามสกุล (ภาษาไทย) : </a-col>
        <a-col :span="6">
          <a-input style="width: 100%" placeholder="สุ่มทรัพย์" />
        </a-col>
      </a-row>
      <br />
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="2" style="text-align: end"> ต่ำแหน่ง : </a-col>
        <a-col :span="6">
          <a-input style="width: 100%" placeholder="เจ้าหน้าที่ฝ่ายธุรการ" />
        </a-col>
        <a-col :span="2" style="text-align: end"> ที่อยู่ : </a-col>
        <a-col :span="6">
          <a-input style="width: 100%" placeholder="199/116 หมู่16" />
        </a-col>
      </a-row>
      <br />

      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="2" style="text-align: end"> จังหวัด : </a-col>
        <a-col :span="2">
          <a-input style="width: 100%" placeholder="ชลบุรี" />
        </a-col>
        <a-col :span="2" style="text-align: end"> อำเภอ : </a-col>
        <a-col :span="2">
          <a-input style="width: 100%" placeholder="ศรีราชา" />
        </a-col>
        <a-col :span="2" style="text-align: end"> ตำบล : </a-col>
        <a-col :span="2">
          <a-input style="width: 100%" placeholder="ศรีราชา" />
        </a-col>
        <a-col :span="2" style="text-align: end"> รหัสไปรษณีย์ : </a-col>
        <a-col :span="2">
          <a-input style="width: 100%" placeholder="20000" />
        </a-col>
      </a-row>
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="24" style="text-align: end">
          <a-button type="primary"> บันทึก </a-button>
        </a-col>
      </a-row>
    </a-card>
    <br />
    <a-card>
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <h3>รายละเอียดรายวิชาที่สอน</h3>
      </a-row>
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="24" style="text-align: end">
          <a-table :columns="subject_columns" :data-source="subject_data">
            <span slot="action" slot-scope="record">
              <a-button
                type="warning"
                @click="ModalEditUnit(record.person_id, record.section_id)"
                ><a-icon type="edit"
              /></a-button>
            </span>
          </a-table>
        </a-col>
      </a-row>
    </a-card>

    <!-- modal edit unit -->
    <a-modal
      v-model="edit_unit_modal"
      title="แก้ไขหน่วยกิต"
      on-ok="handleOk"
      width="900px"
    >
      <template slot="footer">
        <a-button @click="close_modal_edit"> ยกเลิก </a-button>
        <a-button
          type="success"
          v-if="edit_unit != 0"
          @click="EditUnitPerson()"
        >
          ยืนยัน
        </a-button>
      </template>
      <a-row :gutter="[8, 8]">
        <a-col :span="2" :style="{ textAlign: 'end', marginTop: '3px' }"
          >หน่วยกิต :
        </a-col>
        <a-col :span="3"
          ><a-input-number v-model="edit_unit" :min="0" :max="10"
        /></a-col>
        <a-col :span="2" :style="{ textAlign: 'end', marginTop: '3px' }"
          >บรรยาย :
        </a-col>
        <a-col :span="3"
          ><a-input-number v-model="edit_lecture_unit" :min="0" :max="10"
        /></a-col>
        <a-col :span="2" :style="{ textAlign: 'end', marginTop: '3px' }"
          >ปฏิบัติ :
        </a-col>
        <a-col :span="3"
          ><a-input-number v-model="edit_lab_unit" :min="0" :max="10"
        /></a-col>
        <a-col :span="4" :style="{ textAlign: 'end', marginTop: '3px' }"
          >เรียนรู้ด้วยตนเอง :
        </a-col>
        <a-col :span="3"
          ><a-input-number v-model="edit_learning_unit" :min="0" :max="10"
        /></a-col>
      </a-row>
    </a-modal>
    <!-- end modal edit unit -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      edit_unit_modal: false, // modal edit unit
      edit_unit: 0,
      edit_lecture_unit: 0,
      edit_lab_unit: 0,
      edit_learning_unit: 0,

      subject_columns: [
        {
          title: "รหัสวิชา",
          dataIndex: "course_code",
          key: "course_code",
          scopedSlots: { customRender: "course_code" },
          type: "flex",
          align: "center",
        },
        {
          title: "ชื่อวิชา",
          dataIndex: "course_name",
          key: "course_name",
          scopedSlots: { customRender: "course_name" },
          type: "flex",
          align: "center",
        },
        {
          title: "กลุ่มเรียน",
          dataIndex: "section_number",
          key: "section_number",
          scopedSlots: { customRender: "section_number" },
          type: "flex",
          align: "center",
        },
        {
          title: "รายละเอียดกลุ่มเรียน",
          dataIndex: "section_name",
          key: "section_name",
          scopedSlots: { customRender: "section_name" },
          type: "flex",
          align: "center",
        },
        // {
        //   title: "หน่วยกิต",
        //   dataIndex: "section_unit",
        //   key: "section_unit",
        //   scopedSlots: { customRender: "section_unit" },
        //   type: "flex",
        //   align: "center",
        // },
        // {
        //   title: "ดำเนินการ",
        //   key: "action",
        //   scopedSlots: { customRender: "action" },
        //   type: "flex",
        //   align: "center",
        // },
      ],
      subject_data: [],
      subject_edit_data: [],
    };
  },
  methods: {
    close_modal_edit() {
      this.edit_unit_modal = false;
    },
    GetSubject() {
      let self = this;
      Axios.post("http://localhost:8080/WlsInsert/getsubject", {
        person_id: 1, //รอ User
      })
        .then(function (result) {
          console.log(result.data.results);
          result.data.results.forEach((element) => {
            let data = {
              section_id: element.section_id,
              person_id: element.person_id,
              course_code: element.course_code,
              course_name: element.course_name,
              section_number: element.section_number,
              section_name: element.section_name,
              section_unit:
                element.section_person_unit +
                " (" +
                element.section_person_lecture_unit +
                "-" +
                element.section_person_lab_unit  +
                "-" +
                element.section_person_learning_unit +
                ")",
            };
            self.subject_data.push(data);
          });
        })
        .catch((err) => alert(err));
    },
    EditUnitPerson() {
      let self = this;
      Axios.post("http://localhost:8080/WlsInsert/editpersonsection", {
        person_id: self.subject_edit_data[0].person_id,
        section_id: self.subject_edit_data[0].section_id,
        unit: self.edit_unit,
        lecture_unit: self.edit_lecture_unit,
        lab_unit: self.edit_lab_unit,
        learning_unit: self.edit_learning_unit,
      });
      self.close_modal_edit();
      location.reload();
    },
    ModalEditUnit(person, section) {
      var self = this;
      self.edit_unit_modal = true;
      console.log("Person :", person);
      console.log("Section :", section);
      Axios.post("http://localhost:8080/WlsInsert/getsubjectunit", {
        person_id: person,
        section_id: section,
      })
        .then(function (result) {
          console.log(result.data.results);
          result.data.results.forEach((element) => {
            let data = {
              person_id: element.person_id,
              section_id: element.section_id,
            };
            (self.edit_unit = element.section_person_unit),
              (self.edit_lecture_unit = element.section_person_lecture_unit),
              (self.edit_lab_unit = element.section_person_lab_unit),
              (self.edit_learning_unit = element.section_person_learning_unit),
              self.subject_edit_data.push(data);
          });
        })
        .catch((err) => alert(err));
    },
  },
  created() {
    this.GetSubject();
  },
};
</script>

<style></style>
