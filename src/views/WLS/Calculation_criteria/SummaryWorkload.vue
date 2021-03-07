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
                :data-source="test"
                :pagination="false"
                bordered
                size="small"
              >
                <span slot="summary_id" slot-scope="text, record, index">
                  <div
                    v-if="year == test[index].year"
                    :style="{ textAlign: 'center' }"
                  >
                    {{ index + 1 }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>

                <span slot="person_lastname_TH" slot-scope="text, record, index">
                  <div
                    v-if="year == test[index].year"
                    :style="{ textAlign: 'start' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>
                <span slot="positition_name" slot-scope="text, record, index">
                  <div
                    v-if="year == test[index].year"
                    :style="{ textAlign: 'start' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>
                <span slot="TeachingJobs" slot-scope="text, record, index">
                  <div
                    v-if="year == test[index].year"
                    :style="{ textAlign: 'center' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>
                <span slot="LMW" slot-scope="text, record, index">
                  <div
                    v-if="year == test[index].year"
                    :style="{ textAlign: 'center' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>

                <span slot="LMWE" slot-scope="text, record, index">
                  <div
                    v-if="year == test[index].year"
                    :style="{ textAlign: 'center' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>

                <span slot="PW" slot-scope="text, record, index">
                  <div
                    v-if="year == test[index].year"
                    :style="{ textAlign: 'center' }"
                  >
                    {{ text }}
                  </div>
                  <div v-else :style="{ textAlign: 'center' }">ไม่มีข้อมูล</div>
                </span>

                <span slot="action" slot-scope="text, record, index">
                  <div
                    v-if="year == test[index].year"
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
const axios = require("axios");

import pdfMake from "pdfmake";
import pdfFonts from "@/assets/fontsPDF/THSarabunPsk-fonts.js"; // 1. import custom fonts

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
      summary_data: [
      
      ],
      semester: 1,
      year: new Date().getFullYear() + 543, // 2020,
      data,
      columns,
    };
  },
  methods: {
    get_summary() {
      const self = this;
      axios
        .post(this.$store.state.url + "/summaryRouters/get_summary")
        .then((res) => {
          console.log(res);

      
        })
        .catch((err) => {
          console.error(err);
        });
        
    },
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
   
      const Receipt = {
        pageSize: "A4",

        info: {
          title: "บ.๑๔",
          author: "666",
          subject: "Receipt",
          keywords: "Receipt",
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
                    border: [true, true, false, false],
                    // if you specify width, image will scale proportionally
                    text:
                      "https://www.informatics.buu.ac.th/2020/wp-content/uploads/2018/11/buu_logo_thai.jpg",
                    width: 150,
                    opacity: 0.5,

                    style: "images",
                    alignment: "center",
                    colSpan: 2,
                  },
                  {},
                  {
                    border: [false, true, true, false],
                    text: "(บ.๑๔)",
                    style: "tableHeader",
                    alignment: "right",
                    margin: [0, 6, 10, 0],
                  },
                ],
                [
                  {
                    border: [true, false, true, false],
                    text: "ใบสำคัญรับเงิน",
                    style: "header",
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
          {
            margin: [0, 50, 0, 0],
            columns: [
              {
                text: "หมายเหตุ",
                decoration: "underline",
                width: 160,
                margin: [110, 0, 0, 0],
              },
              {
                text:
                  "การใช้ใบสำคัญรับเงินเป็นไปตามระเบียบมหาวิทยาลัยบูรพาว่าด้วยการจ่ายเงินและวิธีการจ่ายเงิน",
                alignment: "left",

                width: 300,
              },
              {},
            ],
            pageBreak: "after",
          },
          // หน้าใหม่
          {
            columns: [
              {
                text: "รูป",
                margin: [20, 0, 0, 0],
                width: 160,
              },
              {
                text: "บันทึกข้อความ",
                style: "header",
                alignment: "left",
                margin: [50, 0, 0, 0],
              },
            ],
          },
          {
            margin: [0, 50, 0, 0],
            columns: [
              {
                text: "ส่วนงาน",
                style: "bold",
                width: 50,
              },
              {
                text: "คณะวิทยาการสารสนเทศ สำนักงานคณบดี โทร 3060",
                alignment: "left",
                margin: [10, 0, 0, 0],
              },
            ],
          },
          {
            margin: [0, 10, 0, 0],
            columns: [
              {
                text: "ที่",
                style: "bold",
                width: 50,
              },
              {
                text: "อว 8113.1/",
                alignment: "left",
                margin: [10, 0, 0, 0],
                width: 305,
              },
              {
                text: "วันที่",
                style: "bold",
                width: 50,
              },
              {
                text: "26 ตุลาคม พ.ศ 2563",
                alignment: "left",
                margin: [8, 0, 0, 0],
              },
            ],
          },
          {
            margin: [0, 10, 0, 0],
            columns: [
              {
                text: "เรื่อง",
                style: "bold",
                width: 50,
              },
              {
                text:
                  "ขออนุมัติเบิกค่าตอบแทนสอนเกินเกณฑ์ภาระงาน ประจำภาคต้น ปีการศึกษา 2563",
                alignment: "left",
                margin: [10, 0, 0, 0],
              },
            ],
          },
          {
            margin: [0, 20, 0, 0],
            columns: [
              {
                text: "เรียน",
                style: "bold",
                width: 50,
              },
              {
                text: "คณบดีคณะวิทยาการสารสนเทศ",
                alignment: "left",
                margin: [10, 0, 0, 0],
              },
            ],
          },

          {
            margin: [0, 35, 0, 0],
            text:
              "ตามที่ นายพีระศักดิ์ เพียรประสิทธ    ส่งภาระงานเพื่อประกอบการเบิกจ่ายค่าตอบแทนสอนเกินเกณฑ์\n ประจำภาคต้น ปีการศึกษา 2563 นั้น ดังนั้นเพื่อให้การเบิกจ่ายค่าตอบแทนสอนเกินเกณฑ์เป็นไปด้วยความเรียบร้อยงานการเงินคณะวิทยาการสารสนเทศ \nจึงเรียนมาเพื่อขออนุมัติเบิกค่าตอบแทนสอนเกินเกณฑ์ภาระงาน ประจำภาคต้น ปีการศึกษา 2563 งวดที่ 4 (เดือน ตุลาคม 2563) ตามประกาศคณะวิทยาการสารสนเทศ เรื่อง หลักเกณฑ์การกำหนดภาระงานสอนเพื่อการจ่ายค่าตอบแทนของคณาจารย์ประจำคณะวิทยาการสารสนเทศ\n พ.ศ. 2561 และที่แก้ไขเพิ่มเติม รายละเอียดดังนี้",
            alignment: "left",
          },
          {
            margin: [0, 25, 0, 0],
            table: {
              heights: [
                "auto",
                "auto",
                "auto",
                "auto",
                "auto",
                "auto",
                "auto",
                "auto",
              ],
              widths: [30, 200, 55, 60, 65, 62],
              body: [
                [
                  {
                    text: "ลำดับ",
                    style: "tableHeader",
                  },
                  {
                    text: "ชื่อ-สกุล",
                    style: "tableHeader",
                  },
                  {
                    text: "จำนวนที่เบิกได้\n(หน่วยกิต)",
                    style: "tableHeader",
                  },
                  {
                    text: "อัตรา/\n(หน่วยกิต)",
                    style: "tableHeader",
                  },
                  {
                    text: "รวมเป็นเงิน\n15 สัปดาห์",
                    style: "tableHeader",
                  },
                  {
                    text: "จำนวนเงิกที่เบิกแบ่งจ่าย4งวด\n(งวด4)",
                    style: "tableHeader",
                  },
                ],
                [
                  { text: "1", alignment: "center" },
                  "นายพีระศักดิ์ เพียรประสิทธิ์",
                  { text: "3.50", style: "number" },
                  { text: "400", style: "number" },
                  { text: "21,000.00", style: "number" },
                  { text: "5,250.00", style: "number" },
                ],
                [
                  {
                    colSpan: 2,
                    text: "รวมเป็นเงิน",
                    style: "tableHeader",
                    alignment: "right",
                  },
                  {},

                  {
                    text: "3.50",
                    style: ["tableHeader", "number"],
                  },
                  {
                    text: "400",
                    style: ["tableHeader", "number"],
                  },
                  {
                    text: "21,000.00",
                    style: ["tableHeader", "number"],
                  },
                  {
                    text: "5,250.00",
                    style: ["tableHeader", "number"],
                  },
                ],
              ],
            },
          },
          {
            margin: [0, 35, 0, 0],
            alignment: "center",
            text:
              "จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ โดยเบิกจากเงินรายได้ แผนงานจัดการจัดศึกษาอุดมศึกษา งานจัดการศึกษาระดับปริญญาตรีด้านวิทยาศาสตร์และเทคโนโลยี ",
          },
          {
            margin: [0, 5, 0, 0],
            text:
              "งบดำเนินงาน หมวดค่าตอบแทนใช้สอยและวัสดุ เป็นเงิน 5,250.00 บาท",
          },
          {
            margin: [0, 70, 70, 0],
            text:
              "................................................................",
            alignment: "right",
          },
          {
            margin: [0, 5, 90, 0],
            alignment: "right",
            text: "(นางสาวหรรษา รอดเงิน)",
          },
          {
            margin: [0, 5, 90, 0],
            alignment: "right",
            text: "นักวิชาการเงินและบัญชี",
          },
          {
            margin: [65, 70, 0, 0],
            text: "อนุมัติ",
            alignment: "left",
          },
          {
            margin: [25, 40, 0, 0],
            text:
              "..............................................................",
            alignment: "left",
          },
          {
            margin: [28, 5, 0, 0],
            text: "(ผู้ช่วยศาสตราจารย์กฤษณะ ชินสาร)",
            alignment: "left",
          },
          {
            margin: [30, 5, 0, 0],
            text: "คณบดีคณะวิทยาการสารสนเทศ",
            alignment: "left",
          },
          {
            pageOrientation: "landscape",
            pageBreak: "before",
            alignment: "center",
            text:
              "สรุปภาระงานสอนเพื่อการจ่ายค่าตอบแทนของคณาจารย์ประจำคณะวิทยาการสารสนเทศ\nภาคต้น ปีการศึกษา 2563",
          },
          {
            alignment: "left",
            text: "ชื่อ - สกุล อาจารย์พีระศักดิ์ เพียรประสิทธิ์",
          },
          {
            style: "bold",
            text:
              ".................................................................................................................................................................................................................................................................................................................................................................................",
          },
          {
            margin: [0, 10, 0, 0],
            table: {
              widths: [
                100,
                25,
                100,
                40,
                30,
                30,
                60,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                30,
                // 15 col
              ],
              headerRows: 3,
              // keepWithHeaderRows: 1,
              body: [
                [
                  {
                    text: "หมวดวิชา / รหัสวิชา",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 3,
                  },

                  {
                    text: "หน่วยกิต",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 3,
                  },
                  {
                    text: "วัน-เวลา",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 3,
                  },
                  {
                    text: "กลุ่ม",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 3,
                  },
                  {
                    text: "จำนวนหน่วยกิต",
                    style: "headersmall",
                    alignment: "center",
                    colSpan: 2,
                  },
                  {},
                  {
                    text: "จำนวนนิสิตที่ลงทะเบียน\nเรียนในรายวิชา",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 3,
                  },
                  {
                    text: "จำนวนกลุ่มที่สอน",
                    style: "headersmall",
                    alignment: "center",
                    colSpan: 2,
                  },
                  {},
                  {
                    text: "ภาระงาน",
                    style: "headersmall",
                    alignment: "center",
                    colSpan: 3,
                  },
                  {},
                  {},
                  {
                    text: "ภาระงานรวม(นก)",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 3,
                  },
                  {
                    text: "สัดส่วน\nภาระงาน\nที่สอน\n(สัปดาห์)",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 3,
                  },
                  {
                    text: "ภาระงาน\nรวมที่ได้\nตามสัดส่วน\nการสอน(นก)",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 3,
                  },
                ],
                // row 2
                [
                  {},
                  {},
                  {},
                  {},
                  {
                    text: "บรรยาย",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 2,
                  },
                  {
                    text: "lab",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 2,
                  },
                  {},
                  {
                    text: "บรรยาย",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 2,
                  },
                  {
                    text: "lab",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 2,
                  },
                  {
                    text: "ภาระงานพื้นฐาน",
                    style: "headersmall",
                    alignment: "center",
                    rowSpan: 2,
                  },
                  {
                    text: "ภาระงานตรวจงาน",
                    style: "headersmall",
                    alignment: "center",
                    colSpan: 2,
                  },

                  {
                    text: "ภาระงาน",
                    style: "headersmall",
                    alignment: "center",
                  },
                  {},
                  {
                    text: "สัดส่วนภาระงานที่สอน(สัปดาห์)",
                    style: "headersmall",
                    alignment: "center",
                  },
                  {
                    text: "ภาระงานรวมที่ได้ตามสัดส่วนการสอน(นก)",
                    style: "headersmall",
                    alignment: "center",
                  },
                ],
                // ROw3
                [
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {
                    text: "ชั่วโมง\nบรรยาย",
                    style: "headersmall",
                    alignment: "center",
                  },
                  {
                    text: "ชั่วโมง \nlab",
                    style: "headersmall",
                    alignment: "center",
                  },
                  {},
                  {},
                  {},
                ],
                [
                  {
                    text: "รายวิชาของคณะ(ระดับปริญญาตรี)",
                    style: "headersmall",
                    alignment: "left",
                    colSpan: 15,
                  },
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                ],
                [
                  {
                    text: "Lecture + lab 3 ชั่วโมง",
                    style: "headersmall",
                    alignment: "left",
                    colSpan: 15,
                  },
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                ],
                [
                  {
                    text: "88814259",
                    style: "fontsmall",
                    alignment: "center",
                  },
                  { text: "1(0-3-6)", style: "fontsmall", alignment: "center" },
                  {
                    text: "Lab WE 17:00-19:50 IF-3C04",
                    style: "fontsmall",
                    alignment: "center",
                  },
                  { text: "3+4", style: "fontsmall", alignment: "center" },
                  { text: "-", style: "fontsmall", alignment: "center" },
                  { text: "1", style: "fontsmall", alignment: "center" },
                  { text: "31", style: "fontsmall", alignment: "center" },
                  { text: "-", style: "fontsmall", alignment: "center" },
                  { text: "1", style: "fontsmall", alignment: "center" },
                  { text: "1.25", style: "fontsmall", alignment: "center" },
                  { text: "0", style: "fontsmall", alignment: "center" },
                  { text: "0.02", style: "fontsmall", alignment: "center" },
                  { text: "1.27", style: "fontsmall", alignment: "center" },
                  { text: "1.5", style: "fontsmall", alignment: "center" },
                  { text: "1.27", style: "fontsmall", alignment: "center" },
                ],
                [
                  {
                    border: [false, true, true, false],
                    text: "รวมภาระงานสอน",
                    style: "headersmall",
                    alignment: "left",
                    colSpan: 12,
                  },
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  { text: "13.71", style: "headersmall", alignment: "center" },
                  {},
                  { text: "13.71", style: "headersmall", alignment: "center" },
                ],
                [
                  {
                    border: [false, false, true, false],
                    text: "รวมภาระงานสอน(ปัดเศษ) ข้อ 8",
                    style: "headersmall",
                    alignment: "left",
                    colSpan: 12,
                  },
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  { text: "13.50", style: "headersmall", alignment: "center" },
                  {},
                  { text: "13.50", style: "headersmall", alignment: "center" },
                ],
              ],
            },
          },
          {
            pageBreak: "before",
            text: "สรุปภาระงาน",
            bold: true,
            alignment: "left",
            decoration: "underline",
          },
          {
            margin: [0, 15, 0, 0],
            text: "ตามประกาศคณะวิทยาการสารสนเทศ ที่ 0045/2563",
            bold: true,
            alignment: "left",
          },
          {
            margin: [0, 15, 0, 0],
            text:
              "เรื่อง หลักเกณฑ์การกำหนดภาระงานสอนเพื่อการจ่ายค่าตอบแทนของคณาจารย์ประจำคณะวิทยาการสารสนเทศ พ.ศ. 2563",
            bold: true,
            alignment: "left",
          },
          {
            margin: [0, 15, 0, 0],
            columns: [
              {
                // auto-sized columns have their widths based on their content
                width: 50,
                text: "1)",
                alignment: "right",
              },
              {
                margin: [10, 0, 0, 0],
                width: 250,
                text: "รวมภาระงานสอบ(ปัดเศษ) ข้อ 8",
                alignment: "left",
              },
              {
                width: 100,
                text: "13.50",
                alignment: "center",
              },
              {
                width: 100,
                text: "หน่วยกิต",
                alignment: "left",
              },
            ],
          },
          {
            margin: [0, 10, 0, 0],
            columns: [
              {
                // auto-sized columns have their widths based on their content
                width: 50,
                text: "2)",
                alignment: "right",
              },
              {
                margin: [10, 0, 0, 0],
                width: 250,
                text: "หัก ภาระงานขั้นต่ำ",
                alignment: "left",
              },
              {
                width: 100,
                text: "6.00",
                alignment: "center",
                decoration: "underline",
              },
              {
                width: 100,
                text: "หน่วยกิต",
                alignment: "left",
              },
            ],
          },
          {
            margin: [0, 10, 0, 0],
            columns: [
              {
                // auto-sized columns have their widths based on their content
                width: 50,
                text: "3)",
                alignment: "right",
              },
              {
                margin: [10, 0, 0, 0],
                width: 250,
                text: "หัก ภาระงาน Extra workload",
                alignment: "left",
              },
              {
                width: 100,
                text: "4.00",
                alignment: "center",
                decoration: "underline",
              },
              {
                width: 100,
                text: "หน่วยกิต",
                alignment: "left",
              },
            ],
          },
          {
            margin: [0, 10, 0, 0],
            columns: [
              {
                // auto-sized columns have their widths based on their content
                width: 50,
                text: "4)",
                alignment: "right",
              },
              {
                margin: [10, 0, 0, 0],
                width: 250,
                text: "รวมภาระงานที่สามารถเบิกค่าตอบแทน",
                alignment: "left",
              },
              {
                width: 100,
                text: "3.50",
                alignment: "center",
                decoration: "underline",
              },
              {
                width: 100,
                text: "หน่วยกิต",
                alignment: "left",
              },
            ],
          },
          {
            margin: [0, 10, 0, 0],
            columns: [
              {
                width: 50,
                text: "",
              },
              {
                width: 250,
                text: "ค่าสอน หน่วยกิตละ 400 บาท จำนวน 15 สัปดาห์ เป็นเงิน  ",
              },
              {
                width: 100,
                text: "21,000.00  บาท ",
                alignment: "center",
              },
              {
                width: 100,
                text: "แบ่งจ่ายเป็น 4 งวด ",
                alignment: "left",
              },
              {
                text: "5,250.00 บาท",
                alignment: "center",
              },
            ],
          },
          {
            margin: [0, 10, 0, 0],
            columns: [
              {
                width: 50,
                text: "",
              },
              {
                text:
                  "ข้าพเจ้าขอรับรองว่าได้ตรวจสอบข้อมูลข้างต้นแล้วและขอรับรองว่าข้อมูลดังกล่าวเป็นจริง",
              },
            ],
          },
          {
            margin: [0, 25, 100, 0],
            alignment: "right",
            text:
              "ลงชื่อ   ....................................................................................",
          },
          {
            margin: [0, 5, 125, 0],
            alignment: "right",
            text: "(       อาจารย์พีระศักดิ์ เพียรประสิทธิ์       )",
          },
          {
            margin: [0, 25, 100, 0],
            alignment: "right",
            text:
              "ลงชื่อ   ....................................................................................",
          },
          {
            margin: [0, 5, 135, 0],
            alignment: "right",
            text: "(       นางสาวหรรษา รอดเงิน       )",
          },
          {
            margin: [0, 25, 100, 0],
            alignment: "right",
            text:
              "ลงชื่อ   ....................................................................................",
          },
          {
            margin: [0, 5, 125, 0],
            alignment: "right",
            text: "(       อาจารย์เบญจภรณ์ จันทรกองกุล       )",
          },
          {
            margin: [360, 5, 0, 0],
            alignment: "center",
            text: "รองคณบดี\nผู้รับรอง",
          },
          {
            alignment: "left",
            margin: [45, 10, 0, 0],
            text: "อนุมัติ",
          },
          {
            margin: [0, 20, 0, 0],
            alignment: "left",
            text:
              "...............................................................",
          },
          {
            margin: [0, 5, 0, 0],
            alignment: "left",
            text: "(ผู้ช่วยศาสตราจารย์กฤษณะ ชินสาร)",
          },
          {
            margin: [10, 5, 0, 0],
            alignment: "left",
            text: "คณบดีคณะวิทยาการสารสนเทศ",
          },
        ],

        styles: {
          fontsmall: {
            fontSize: 8,
            color: "black",
            alignment: "center",
          },
          headersmall: {
            bold: true,
            fontSize: 8,
            color: "black",
            alignment: "center",
          },
          number: {
            alignment: "right",
          },
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
            alignment: "center",
          },
          tableExample: {
            margin: [0, 5, 0, 15],
          },
          header: {
            fontSize: 20,
            bold: true,
          },
          bold: {
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

      pdfMake.createPdf(Receipt).open({});
    },
 
  },
     created(){
      this.get_summary();
    },
};
</script>

<style scoped></style>
