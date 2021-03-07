<template>
  <div id="SummaryWorkload">
    <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card
          size="small"
          title="ตารางแสดงรายละเอียดการจ่ายค่าตอบแทนของคณาจารย์ประจำคณะวิทยาการสารสนเทศ"
        >
          <a-row :gutter="[8, 8]" type="flex" justify="center">
            <a-col :span="24" style="text-align: center">
              <h1>
                สรุปภาระงานเพื่อการจ่ายค่าตอบแทนของคณาจารย์ประจำคณะวิทยาการสารสนเทศ
              </h1>
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]" type="flex" justify="center">
            <a-col :span="8" style="text-align: end">
              <span style="font-size: 18px">ปีการศึกษา </span>
              <a-select v-model="year" style="width: 100px; font-size: 15px">
                <a-select-option :value="2564"> 2564 </a-select-option>
                <a-select-option :value="2563"> 2563 </a-select-option>
              </a-select>
            </a-col>

            <a-col :span="8" style="text-align: start">
              <span style="font-size: 18px"> ภาคเรียนที่ </span>

              <a-select
                v-model="semester"
                style="width: 100px; font-size: 15px"
              >
                <a-select-option :value="1"> 1 </a-select-option>
                <a-select-option :value="2"> 2 </a-select-option>
              </a-select>
            </a-col>
          </a-row>
          <br />
          <a-row :gutter="[8, 8]">
            <a-col :span="24">
              <a-table
                :columns="columns"
                :data-source="data"
                :pagination="false"
                bordered
                size="small"
              >
                <span slot="key" slot-scope="text, record, index">
                  <div
                    v-if="year == data[index].year"
                    :style="{ textAlign: 'center' }"
                  >
                    {{ index + 1 }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>

                <span slot="name" slot-scope="text, record, index">
                  <div
                    v-if="year == data[index].year"
                    :style="{ textAlign: 'start' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>
                <span slot="position" slot-scope="text, record, index">
                  <div
                    v-if="year == data[index].year"
                    :style="{ textAlign: 'start' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>
                <span slot="TeachingJobs" slot-scope="text, record, index">
                  <div
                    v-if="year == data[index].year"
                    :style="{ textAlign: 'center' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>
                <span slot="LMW" slot-scope="text, record, index">
                  <div
                    v-if="year == data[index].year"
                    :style="{ textAlign: 'center' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>

                <span slot="LMWE" slot-scope="text, record, index">
                  <div
                    v-if="year == data[index].year"
                    :style="{ textAlign: 'center' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>

                <span slot="PW" slot-scope="text, record, index">
                  <div
                    v-if="year == data[index].year"
                    :style="{ textAlign: 'center' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>

                <span slot="action" slot-scope="text, record, index">
                  <div
                    v-if="year == data[index].year"
                    :style="{ textAlign: 'center' }"
                  >
                    <template slot="title">
                      <span>แสดงรายละเอียด</span>
                    </template>

                    <a-button type="primary" icon="search"> </a-button>

                    <template slot="title">
                      <span>ส่งออกไฟล์ PDF</span>
                    </template>
                    <a-button
                      type="danger"
                      icon="file-pdf"
                      :style="{ marginRight: '3%' }"
                      @click="exportPDF()"
                    />

                    <template slot="title">
                      <span>ส่งออกไฟล์ EXCEL</span>
                    </template>
                    <a-button
                      type="success"
                      icon="file-excel"
                      :style="{ marginRight: '3%' }"
                    />

                    <router-link
                      :to="{
                        path:
                          '/Calculation_workload?person_id=' + record.person_id,
                      }"
                    >
                      <a-button type="primary" :style="{ marginRight: '3%' }"
                        >คำนวณ</a-button
                      ></router-link
                    >
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>
              </a-table>
            </a-col>
          </a-row>
          <br />
          <a-row>
            <a-col :span="15">
              <p :style="{ marginTop: '0.3em' }">1-10 จาก 10 รายการ</p>
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

              <a-pagination
                :style="{ display: 'inline' }"
                v-model="current"
                :total="total"
                :page-size="10"
              />
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import pdfMake from "pdfmake";
import pdfFonts from "@/assets/fontsPDF/THSarabunPsk-fonts.js"; // 1. import custom fonts
const axios = require("axios");
const columns = [
  {
    title: "ลำดับ",
    dataIndex: "key",
    key: "key",
    width: "5%",
    scopedSlots: { customRender: "key" },
  },

  {
    title: "ชื่อ-สกุล",
    dataIndex: "name",
    key: "name",
    width: "15%",
    scopedSlots: { customRender: "name" },
  },

  {
    title: "ตำแหน่ง",
    dataIndex: "position",
    key: "position",
    width: "15%",
    scopedSlots: { customRender: "position" },
  },

  {
    title: "ภาระงานสอน",
    dataIndex: "summary_total",
    key: "summary_total",
    width: "5%",
    scopedSlots: { customRender: "summary_total" },
  },
  {
    title: "หักภาระงานขั้นต่ำ",
    dataIndex: "summary_total_around", //Less minimum workload
    key: "summary_total_around",
    width: "5%",
    scopedSlots: { customRender: "summary_total_around" },
  },
  {
    title: "หักภาระงาน Extraworkload",
    dataIndex: "summary_total_extra", // Less minimum workload Extraworkload
    key: "summary_total_extra",
    width: "5%",
    scopedSlots: { customRender: "summary_total_extra" },
  },
  {
    title: "ภาระงานที่เบิกได้",
    dataIndex: "summary_bonus", //Payable workload
    key: "summary_bonus",
    width: "5%",
    scopedSlots: { customRender: "summary_bonus" },
  },
  {
    title: "ดำเนินการ",
    dataIndex: "action",
    key: "action",
    width: "5%",
    scopedSlots: { customRender: "action" },
  },
];

var data = [];

export default {
  name: "SummaryWorkload",
  components: {},
  data() {
    return {
      semester: 1,
      year: new Date().getFullYear() + 543, // 2020,
      data,
      columns,
    };
  },
  methods: {
    exportPDF() {
      pdfMake.vfs = pdfFonts.pdfMake.vfs; // 2. set vfs pdf font
      pdfMake.fonts = {
        THSarabunPsk: {
          normal: "THSarabun.ttf",
          bold: "THSarabun-Bold.ttf",
          italics: "THSarabu-Italic.ttf",
          bolditalics: "THSarabun-Bold-Italic.ttf",
        },
      };
      const docDefinition = {
        header: {
          text: "(บ.๑๔)",
          style: "tableHeader",
          alignment: "right",
          margin: [0, 6, 10, 0],
        },
        footer: {
          columns: [
            {
              text: "หมายเหตุ",
              decoration: "underline",
              width: 200,
              margin: [150, 0, 0, 0],
            },
            {
              text:
                "การใช้ใบสำคัญรับเงินเป็นไปตามระเบียบมหาวิทยาลัยบูรพาว่าด้วยการจ่ายเงินและวิธีการจ่ายเงิน",
              alignment: "left",
              width: 300,
            },
          ],
        },
        content: [
          {
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              // headerRows: 1,
              // widths: [505],
              heights: [
                "auto",
                "auto",
                "auto",
                "auto",
                "auto",
                "auto",
                "auto",
                "auto",
                250,
                20,
                150,
              ],
              widths: [355, 80, 50],
              headerRows: 1,

              body: [
                [
                  {
                    border: [true, true, true, false],
                    text: "รูป",
                    style: "images",
                    colSpan: 3,
                    alignment: "center",
                  },
                  {},
                  {},
                ],
                [
                  {
                    border: [true, false, true, false],
                    text: "ใบสำคัญรับเงิน",
                    style: "tableHeader",
                    colSpan: 3,
                    alignment: "center",
                  },
                  {},
                  {},
                ],
                [
                  {
                    border: [true, false, true, false],
                    margin: [5, 5, 5, 15],
                    text:
                      "วันที่ ............................................................",
                    colSpan: 3,
                    alignment: "right",
                  },
                  {},
                  {},
                ],
                [
                  {
                    border: [true, false, true, false],
                    margin: [20, 5, 5, 0],
                    text: "ข้าพเจ้าชื่อ  นายพีระศักดิ์ เพียรประสิทธิ์",
                    colSpan: 3,
                    alignment: "left",
                  },
                  {},
                  {},
                ],
                [
                  {
                    border: [true, false, true, false],
                    margin: [0, 0, 0, 5],
                    text:
                      "บ้านเลขที่ 40 หมู่ 1 ตำบลสำนักบก อำเภอเมือง จังหวัดชลบุรี",
                    colSpan: 3,
                    alignment: "left",
                  },
                  {},
                  {},
                ],
                [
                  {
                    border: [true, false, true, false],
                    margin: [0, 0, 0, 5],
                    text: "ได้รับเงินจากมหาวิทยาลัยบูรพา ดังรายการต่อไปนี้",
                    colSpan: 3,
                    alignment: "left",
                  },
                  {},
                  {},
                ],

                [
                  {
                    text: "รายการ",
                    style: "tableHeader",
                    rowSpan: 2,
                    alignment: "center",
                  },
                  {
                    text: "จำนวนเงิน",
                    colSpan: 2,
                    style: "tableHeader",
                    alignment: "center",
                  },
                  {},
                ],
                [
                  {},
                  { text: "บาท", style: "tableHeader", alignment: "center" },
                  { text: "สตางค์", style: "tableHeader", alignment: "center" },
                ],
                [
                  {
                    text:
                      "ค่าตอบแทนสอนเกินเกณฑ์ภาระงาน ปีการศึกษา 2563\nงวด 1 (กรกฏาคม 2563)",
                  },
                  { text: "5,250", alignment: "center" },
                  { text: "-", alignment: "center" },
                ],
                [
                  { text: "รวมเงิน", alignment: "right", style: "tableHeader" },
                  { text: "5,250", alignment: "center", style: "tableHeader" },
                  { text: "-", alignment: "center", style: "tableHeader" },
                ],
                [
                  {
                    alignment: "center",
                    margin: [15, 15],
                    colSpan: 3,
                    text:
                      "จำนวนเงิน (ตัวอักษร)   .....................................................................................\n\n\n(ลงชื่อ) ...................................................................(ผู้รับเงิน)\n\n\n  (ลงชื่อ) ...................................................................(ผู้จ่ายเงิน)",
                  },
                  {},
                  {},
                ],
              ],
            },
          },
        ],

        styles: {
          images: {
            margin: [25, 30, 25, 25],
          },
          tab: {
            margin: [15, 0, 0, 0],
          },
          tableHeader: {
            bold: true,
            fontSize: 13,
            color: "black",
          },
          tableExample: {
            margin: [0, 5, 0, 15],
          },
          header: {
            fontSize: 22,
            bold: true,
          },
          anotherStyle: {
            italics: true,
            alignment: "right",
          },
        },

        defaultStyle: {
          font: "THSarabunPsk",
        },
      };
      pdfMake.createPdf(docDefinition).open({}, window.open());
    },
    Get_detail_summary() {
      const self = this;
      axios
        .post(self.$store.state.url + "/Wlssummary/Get_detail_summary", {})
        .then(function(response) {
          self.data = [];
          const data = response.data.results;
          data.forEach(function(ele, index) {
            let subject = {
              key: index + 1,
              year: 2564,
              name: ele.person_firstname_TH + " " + ele.person_lastname_TH,
              position: ele.postition_name,
              summary_total: ele.summary_total,
              summary_total_around: ele.summary_total_around,
              summary_total_extra: ele.summary_total_extra,
              summary_bonus: ele.summary_bonus,
              person_id: ele.person_id,
            };
            self.data.push(subject);
          });
          // console.log(self.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    
  },
  created() {
    this.Get_detail_summary();
  },
};
</script>

<style scoped></style>
