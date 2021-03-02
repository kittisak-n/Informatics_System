<template>
  <div id="content">
    <!-- panel -->
    <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="20" style="margin: 0.2em 0px">
              <a-card-meta title="รายชื่อวิชาทั้งหมดที่เปิดสอน">
                <a-icon
                  slot="avatar"
                  type="folder-open"
                  :style="{
                    fontSize: '150%',
                  }"
                />
              </a-card-meta>
            </a-col>
            <a-col :span="4" :style="{ textAlign: 'right' }">
              <a-button
                type="primary"
                icon="plus"
                :style="{ marginRight: '3%' }"
                @click="showModal"
              >
                เพิ่มรายวิชา
              </a-button>
              <a-tooltip placement="top">
                <template slot="title">
                  <span>ส่งออกไฟล์ PDF</span>
                </template>
                <a-button
                  type="danger"
                  icon="file-pdf"
                  :style="{ marginRight: '3%' }"
                  @click="exportPDF()"
                />
              </a-tooltip>

              <a-tooltip placement="top">
                <template slot="title">
                  <span>ส่งออกไฟล์ EXCEL</span>
                </template>
                <a-button
                  type="success"
                  icon="file-excel"
                  :style="{ marginRight: '3%' }"
                />
              </a-tooltip>
            </a-col>
          </a-row>
          <hr style="width: 100%" />
          <a-row :gutter="[8, 8]" type="flex" justify="end">
            <a-col :span="5" style="text-align: end">
              <a-input-search
                placeholder="ค้นหารหัสวิชา หรือ ชื่อวิชา"
                style="width: 100%"
              />
            </a-col>
          </a-row>
          <!-- End panel -->
          <!-- Table -->
          <a-row :gutter="[8, 8]">
            <a-col :span="24">
              <a-table
                :columns="course_columns"
                :data-source="course_record"
                :pagination="false"
                size="large"
                :scroll="{ y: 500 }"
                bordered
              >
                <span slot="Action" slot-scope="record">
                  <a-button
                    type="primary"
                    @click="get_course_detail(record.course_id)"
                    ><a-icon type="search" />
                  </a-button>
                </span>
              </a-table>
            </a-col>
          </a-row>
          <!-- End Table -->
          <br />
          <a-row>
            <a-col :span="15">
              <p :style="{ margin: '0.3em 0.5%' }">1-10 จาก 10 รายการ</p>
            </a-col>
            <a-col :span="9" :style="{ textAlign: 'Right' }">
              แสดงทีละ
              <a-select
                default-value="10"
                :style="{ width: '60px', marginRight: '1%' }"
              >
                <a-select-option value="10"> 10 </a-select-option>
                <a-select-option value="25"> 25 </a-select-option>
                <a-select-option value="50"> 50 </a-select-option>
                <a-select-option value="100"> 100 </a-select-option>
              </a-select>
              <a-pagination :style="{ display: 'inline' }" :page-size="10" />
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>

    <!-- Start Modal Insert-->
    <div id="modal">
      <a-modal
        title="เพิ่มรายวิชา"
        :visible="modal_insert"
        :confirm-loading="confirmLoading"
      >
        <template slot="footer">
          <a-button key="back" @click="handleCancel"> ยกเลิก </a-button>
          <a-button
            key="submit"
            type="success"
            v-if="import_status"
            @click="handleSubmit"
          >
            บันทึก
          </a-button>
        </template>
        <!-- <a-row :gutter="[10, 50]">
          <a-col :span="24" :style="{ textAlign: 'center' }">
            <router-link :to="{ path: '/Show_course/InsertCourse' }">
              <a-button type="primary" style="width: 80%">
                เพิ่มรายวิชาด้วยตนเอง
              </a-button>
            </router-link>
          </a-col>
        </a-row>
        <br />
        <hr />
        <br /> -->
        <a-row :gutter="[10, 10]">
          <a-col :span="6" :style="{ textAlign: 'end' }">
            <p style="margin-top: 5px">ภาคเรียนที่ :</p>
          </a-col>
          <a-col :span="3">
            <a-select
              label-in-value
              style="width: 60px"
              :default-value="{ key: '1' }"
            >
              <a-select-option value="1"> 1 </a-select-option>
              <a-select-option value="2"> 2 </a-select-option>
            </a-select>
          </a-col>
          <a-col :span="6" :style="{ textAlign: 'end' }">
            <p style="margin-top: 5px">ปีการศึกษา :</p>
          </a-col>
          <a-col :span="6">
            <a-select
              label-in-value
              style="width: 100%"
              :default-value="{ key: '1' }"
            >
              <a-select-option value="1"> 2564 </a-select-option>
              <a-select-option value="2"> 2563 </a-select-option>
            </a-select>
          </a-col>
        </a-row>
        <a-row :gutter="[10, 10]">
          <a-col :span="24" :style="{ textAlign: 'center' }">
            <input
              type="file"
              name="import_csv_file"
              id="import_csv_file"
              ref="import_csv_file"
              accept=".xlsx"
              @change="importExcel"
              hidden
            />
            <a-button
              style="width: 80%"
              icon="upload"
              type="file"
              @click="upload_file_click"
            >
              Upload file Excel
            </a-button>
          </a-col>
        </a-row>
        <a-row :gutter="[10, 10]">
          <a-col :span="24" :style="{ textAlign: 'center' }">
            <p>{{ import_filename }}</p>
          </a-col>
        </a-row>
      </a-modal>
      <!-- End Modal Insert -->

      <!-- Start Modal Detail -->
      <a-modal v-model="modal_detail" title="รายละเอียดวิชา" on-ok="handleOk">
        <template slot="footer">
          <a-button key="back" type="danger" @click="handleCancel">
            ปิด
          </a-button>
        </template>
        <p>Some contents...</p>
      </a-modal>
      <!-- End Modal Detail -->
    </div>
  </div>
</template>

<script>
import xlsx from "xlsx";
import Axios from "axios";

export default {
  data() {
    return {
      self: this,

      modal_detail: false,
      modal_insert: false,
      confirmLoading: false,

      course_year: 1,
      course_term: 1,
      import_filename: "",
      import_status: false,
      data_course_import: {},

      course_detail_record: [],
      course_record: [],
      course_columns: [
        {
          title: "รหัสวิชา",
          dataIndex: "course_code",
          key: "course_code",
          width: "5%",
          scopedSlots: {
            customRender: "course_code",
          },
          type: "flex",
          align: "center",
        },
        {
          title: "ปีหลักสูตร",
          dataIndex: "course_year",
          key: "course_year",
          width: "5%",
          scopedSlots: {
            customRender: "course_year",
          },
          type: "flex",
          align: "center",
        },
        {
          title: "ชื่อวิชา",
          dataIndex: "course_name",
          key: "course_name",
          width: "10%",
          scopedSlots: {
            customRender: "course_name",
          },
        },
        {
          title: "หน่วยกิต",
          dataIndex: "course_credit",
          key: "course_credit",
          width: "5%",
          scopedSlots: {
            customRender: "course_credit",
          },
          type: "flex",
          align: "center",
        },
        {
          title: "ดำเนินการ",
          width: "5%",
          scopedSlots: { customRender: "Action" },
          align: "center",
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.modal_insert = true;
    },
    handleCancel() {
      console.log("Clicked cancel button");

      this.modal_detail = false;
      this.modal_insert = false;

      this.import_status = false;
      this.import_filename = "";
      this.$refs.import_csv_file.value = null;
    },
    handleSubmit() {
      this.Insert_course();
      this.modal_insert = false;
      this.import_status = false;
      this.import_filename = "";
      this.$refs.import_csv_file.value = null;
    },
    upload_file_click() {
      this.$refs.import_csv_file.click();
    },
    importExcel(e) {
      const files = e.target.files;
      console.log(files);
      console.log(files[0].name);

      if (!files.length) {
        return;
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        return alert(
          "The upload format is incorrect. Please upload xls or xlsx format"
        );
      }
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result;
          const XLSX = xlsx;
          const workbook = XLSX.read(data, {
            type: "binary",
          });
          const wsname = workbook.SheetNames[0]; // Take the first sheet，wb.SheetNames[0] :Take the name of the first sheet in the sheets
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); // Generate JSON table content，wb.Sheets[Sheet名]    Get the data of the first sheet
          const excellist = []; // Clear received data
          // Edit data
          for (var i = 0; i < ws.length; i++) {
            excellist.push(ws[i]);
          }
          console.log("Read results", excellist); // At this point, you get an array containing objects that need to be processed
          self.data_course_import = excellist;
          this.import_filename = files[0].name;
          this.import_status = true;
        } catch (e) {
          return alert("Read failure!");
        }
      };
      fileReader.readAsBinaryString(files[0]);
      var input = document.getElementById("upload");
      input.value = "";
    },
    async Insert_course() {
      await Axios.post("http://localhost:8080/WlsInsert/insertcourse", {
        course: self.data_course_import,
      })
        .then(console.log("Insert Pass"))
        .catch((err) => alert(err));
    },
    async get_all_sourse() {
      var thisself = this;
      await Axios.post("http://localhost:8080/WlsInsert/getallcourse")
        .then((response) => {
          response.data.results.forEach((element) => {
            let course = {
              course_id: element.course_id,
              course_code: element.course_code,
              course_year: element.course_year,
              course_name: element.course_name,
              course_credit:
                element.course_unit +
                " (" +
                element.course_lecture_unit +
                "-" +
                element.course_lab_unit +
                "-" +
                element.course_learning_unit +
                ")",
            };
            thisself.course_record.push(course);
          });

          console.log(self.course_record);
        })
        .catch((err) => alert(err));
    },
    get_course_detail(id) {
      console.log("ID Button :",id);
      console.log("Course Detail :",this.course_detail_record)
      this.modal_detail = true;
    },
  },
  created() {
    this.get_all_sourse();
  },
};
</script>

<style>
</style>