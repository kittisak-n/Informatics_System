<template>
  <div id="">
    <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card size="small" title="">
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
              <a-select
                :default-value="2564"
                style="width: 100px; font-size: 15px"
              >
                <a-select-option :value="2564"> 2564 </a-select-option>
              </a-select>
            </a-col>
            <a-col :span="8" style="text-align: start">
              <span style="font-size: 18px"> ภาคเรียนที่ </span>
              <a-select
                :default-value="1"
                style="width: 100px; font-size: 15px"
              >
                <a-select-option :value="1"> 1 </a-select-option>
                <a-select-option :value="2"> 2 </a-select-option>
              </a-select>
            </a-col>
          </a-row>
          <p>อาจารย์ : พีระศักดิ์ เพียรประสิทธิ์</p>

          <a-row :gutter="[8, 8]">
            <a-col :span="24">
              <a-table
                size="small"
                :columns="columns"
                :data-source="data"
                bordered
                :pagination="false"
              >
                <a-table
                  size="small"
                  slot="expandedRowRender"
                  slot-scope="text, record, index"
                  :columns="sub_columns"
                  :data-source="data[index].sub_data"
                  :pagination="false"
                  
                >
                  <span slot="number_group" slot-scope="text">
                    <div
                      :style="{
                        textAlign: 'center',
                        margin: 'auto',
                      }"
                    >
                      {{ text }}
                    </div>
                  </span>
                  <span slot="count_group_lecture">
                    <div
                      :style="{
                        textAlign: 'center',
                        margin: 'auto',
                      }"
                    >
                      <a-input style="width:100%" />
                    </div>
                  </span>
                  <span slot="count_group_lab">
                    <div
                      :style="{
                        textAlign: 'center',
                        margin: 'auto',
                      }"
                    >
                      <a-input style="width:100%" />
                    </div>
                  </span>
                  <span slot="proportion_workload">
                    <div
                      :style="{
                        textAlign: 'center',
                        margin: 'auto',
                      }"
                    >
                      <a-input style="width:100%" />
                    </div>
                  </span>
                </a-table>
              </a-table>

              <div style="margin-top:50px">
                <router-link to="/calculator/calculation_subworkload">
                <a-button type="primary" style="margin-left:720px">
                  ถัดไป
                </a-button></router-link>

                 <router-link to="/calculator/SummaryWorkload">
                <a-button style="margin-left:20px">ย้อนกลับ</a-button>
                </router-link>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const renderTitleContent = (value, row) => {
  const obj = {
    children: value,
    attrs: {},
  };
  if (row.species) {
    obj.attrs.colSpan = 8;
  }
  return obj;
};
const renderContent = (value, row) => {
  const obj = {
    children: value,
    attrs: {},
  };
  if (row.species) {
    obj.attrs.colSpan = 0;
  }
  return obj;
};
var data = [
  {
    code_major: "รายวิชาของคณะ(ระดับปริญญาตรี)",
    species: true,
  },
  {
    key: "1",
    code_major: "88841759",
    credit: "1(0-3-6)",
    course_name: "Software Engineering Seminar",
    group: "1,2,3,4,5",
    count_credit_lecture: 1,
    count_credit_lab: 0,
    count_student: 50,
    sub_data: [
      {
        time: "Lec WE 17:00-19:50 IF-11M280",
        number_group: "1",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab MO 9:00-12:00 IF-3C04",
        number_group: "2",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab WE17:00-19:50 IF-3C04",
        number_group: "3",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab MO 9:00-12:00 IF-3C04",
        number_group: "4",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab WE17:00-19:50 IF-3C04",
        number_group: "5",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
    ],
  },
  {
    key: "2",
    code_major: "88510059",
    credit: "2(1-2-3)",
    course_name: "Logical Thinking and Problem Solving for Innovation",
    group: "1,2",
    count_credit_lecture: 1,
    count_credit_lab: 0,
    count_student: 92,
    sub_data: [
      {
        time: "Lec WE 17:00-19:50 IF-11M280",
        number_group: "1",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab MO 9:00-12:00 IF-3C04",
        number_group: "2",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab WE17:00-19:50 IF-3C04",
        number_group: "3",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab MO 9:00-12:00 IF-3C04",
        number_group: "4",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab WE17:00-19:50 IF-3C04",
        number_group: "5",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
    ],
  },
  {
    key: "3",
    code_major: "88510159",
    credit: "3(2-2-5)",
    course_name: "Moving Forward in a Digital Society with ICT",
    group: "24,25",
    count_credit_lecture: 1,
    count_credit_lab: 0,
    count_student: 53,
    sub_data: [
      {
        time: "Lec WE 17:00-19:50 IF-11M280",
        number_group: "1",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab MO 9:00-12:00 IF-3C04",
        number_group: "2",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab WE17:00-19:50 IF-3C04",
        number_group: "3",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab MO 9:00-12:00 IF-3C04",
        number_group: "4",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
      {
        time: "Lab WE17:00-19:50 IF-3C04",
        number_group: "5",
        count_group_lecture: 0,
        count_group_lab: 0,
        proportion_workload: 0,
      },
    ],
  },
];

const columns = [
  {
    title: "หมวด/รหัสวิชา",
    dataIndex: "code_major",
    customRender: renderTitleContent,
  }, //หมวด/รหัสวิชา

  {
    title: "หน่วยกิต",
    dataIndex: "credit",
    customRender: renderContent,
  }, //หน่วยกิต

  {
    title: "ชื่อรายวิชา",
    dataIndex: "course_name",
    customRender: renderContent,
  }, //ชื่อรายวิชา

  {
    title: "กลุ่ม",
    dataIndex: "group",
    customRender: renderContent,
  }, //กลุ่ม

  {
    title: "จำนวนหน่วยกิต",
    children: [
      {
        title: "บรรยาย",
        dataIndex: "count_credit_lecture",
        key: "count_credit_lecture",
        width: 90,
        customRender: renderContent,
      },
      {
        title: "lab",
        dataIndex: "count_credit_lab",
        key: "count_credit_lab",
        width: 90,
        customRender: renderContent,
      },
    ],
  }, //จำนวนหน่วยกิต

  {
    title: "จำนวนนิสิตที่ลงทะเบียนในรายวิชา",
    dataIndex: "count_student",
    customRender: renderContent,

    // scopedSlots: { customRender: "count_student" },
  }, //จำนวนนิสิตที่ลงทะเบียนในรายวิชา

  // {
  //   title: "ภาระงาน",
  //   children: [
  //     {
  //       title: "ภาระงานพื้นฐาน",
  //       dataIndex: "std_workload",
  //       key: "std_workload",
  //
  //     },
  //     {
  //       title: "ภาระงานตรวจสอบ",
  //       children: [
  //         {
  //           title: "ชั่วโมงบรรยาย",
  //           dataIndex: "hour_lecture_workload",
  //           key: "hour_lecture_workload",
  //
  //         },
  //         {
  //           title: "ชั่วโมง lab",
  //           dataIndex: "hour_lab_workload",
  //           key: "hour_lab_workload",
  //
  //         },
  //       ],
  //     },
  //   ],
  // }, //ภาระงาน
  // {
  //   title: "ภาระงานรวม",
  //   dataIndex: "sum_workload",
  //
  // }, //ภาระงานรวม
  // {
  //   title: "ภาระงานรวมที่ได้รับตามสัดส่วนการสอน",
  //   dataIndex: "sum_proportion",
  //
  // }, //ภาระงานรวมที่ได้รับตามสัดส่วนการสอน
];
const sub_columns = [
  {
    title: "วัน-เวลา",
    dataIndex: "time",
    width: 180,
  }, //วัน-เวลา
  {
    title: "กลุ่ม",
    dataIndex: "number_group",
    width: "10%",
    scopedSlots: { customRender: "number_group" },
  }, //กลุ่มที่
  {
    title: "จำนวนกลุ่มที่สอน",
    children: [
      {
        title: "บรรยาย",
        dataIndex: "count_group_lecture",
        // key: "count_group_lecture",
        width: 90,
        scopedSlots: { customRender: "count_group_lecture" },
      },
      {
        title: "lab",
        dataIndex: "count_group_lab",
        // key: "count_group_lab",
        width: 90,
        scopedSlots: { customRender: "count_group_lab" },
      },
    ],
  }, //จำนวนกลุ่มที่สอน
  {
    title: "สัดส่วนภาระงานที่สอน(สัปดาห์)",
    dataIndex: "proportion_workload",
    width: 150,
    scopedSlots: { customRender: "proportion_workload" },
  }, //สัดส่วนภาระงานที่สอน(สัปดาห์)
];

for (let i = 0; i < data.length; i++) {
  if (data[i].type == "lec+lab") {
    data[i].sum_workload =
      data[i].std_workload +
      data[i].hour_lecture_workload +
      data[i].hour_lab_workload;

    data[i].sum_proportion =
      (data[i].sum_workload * data[i].proportion_workload) /
      data[i].proportion_workload;
  } else if (data[i].type == "lec") {
    data[i].sum_workload =
      data[i].std_workload +
      data[i].hour_lecture_workload +
      data[i].hour_lab_workload;

    data[i].sum_proportion =
      (data[i].sum_workload * data[i].proportion_workload) /
      data[i].proportion_workload;
  }
}

export default {
  data() {
    return {
      data,
      columns,
      sub_columns,
    };
  },
};
</script>
