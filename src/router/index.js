import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

//MDS_exchequer
import MDS_exchequer from "../views/MDS/MDS_exchequer/MDS_exchequer.vue";
import MDS_exchequer_adjust_suppiles from "../views/MDS/MDS_exchequer/MDS_exchequer_adjust_suppiles.vue";

//MDS_disbursement_user
import MDS_disbursement_user from "../views/MDS/MDS_disbursement/user/MDS_disbursement.vue";
import MDS_disbursement_form_user from "../views/MDS/MDS_disbursement/user/MDS_disbursement_form.vue";

//MDS_disbursement_admin
import MDS_disbursement_admin from "../views/MDS/MDS_disbursement/admin/MDS_disbursement.vue";
import MDS_disbursement_form_admin from "../views/MDS/MDS_disbursement/admin/MDS_disbursement_form.vue";

import MDS_import from "../views/MDS/MDS_import/MDS_import.vue";
import MDS_import_form from "../views/MDS/MDS_import/MDS_import_form.vue";

//WLS
import Calculation_criteria from "../views/WLS/Calculation_criteria/Calculation_criteria.vue";
import Detail_criteria from "../views/WLS/Calculation_criteria/Detail_criteria.vue";
import Add_criteria from "../views/WLS/Calculation_criteria/Add_criteria.vue";
import SummaryWorkload from "../views/WLS/Calculation_criteria/SummaryWorkload.vue";
// import Show_course from "../views/WLS/Show_course/ShowCourse.vue";
// import InsertCourse from "../views/WLS/Show_course/Insert_Course_form.vue";
import Calculation_workload from "../views/WLS/Calculation_criteria/Calculation_workload.vue";
import Inspect_workload from "../views/WLS/Calculation_criteria/Inspect_workload.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    meta: { breadCrumb: "หน้าแรก" },
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "/home",
        component: Home,
      },
    ],
  },
  

  // หลักเกณฑ์การคำนวณ
  {
    path: "/Calculation_criteria",
    name: "Calculation_criteria",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    meta: { breadCrumb: "หลักเกณฑ์การคำนวณ" },
    children: [
      {
        path: "",
        component: Calculation_criteria,
      },
      {
        path: "Add_criteria",
        name: "Add_criteria",
        meta: { breadCrumb: "ตั้งค่าอัตราการจ่ายค่าตอบแทน" },
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            component: Add_criteria,
          },
        ],
      },
      {
        path: "Detail_criteria",
        name: "Detail_criteria",
        meta: { breadCrumb: "แสดงรายละเอียดหลักเกณฑ์" },
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            component: Detail_criteria,
          },
        ],
      },
    ],
  },


  // ตรวจสอบภาระงาน
  {
    path: "/Inspect_workload",
    name: "Inspect_workload",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    meta: { breadCrumb: "ตรวจสอบภาระงาน" },
    children: [
      {
        path: "",
        component: Inspect_workload,
      },
    ],
  },
  
  //สรุปภาระงานเพื่อจ่ายค่าตอบแทนอาจารย์ประจำ
  {
    path: "/SummaryWorkload",
    name: "SummaryWorkload",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    meta: { breadCrumb: "ตรวจสอบภาระงาน" },
    children: [
      {
        path: "",
        component: SummaryWorkload,
      },
    ],
  },

  
   //คำนวณภาระงาน Calculation_workload
   {
    path: "/Calculation_workload",
    name: "Calculation_workload",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    meta: { breadCrumb: "คำนวณภาระงาน" },
    children: [
      {
        path: "",
        component: Calculation_workload,
      },
    ],
  },

  {
    path: "/MDS_exchequer",
    name: "MDS_exchequer",
    meta: { breadCrumb: "รายการวัสดุในคลัง" },
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "",
        component: MDS_exchequer,
      },
      {
        path: "MDS_exchequer_adjust_suppiles",
        name: "MDS_exchequer_adjust_suppiles",
        meta: { breadCrumb: "ปรับยอดรายการวัสดุ" },
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            component: MDS_exchequer_adjust_suppiles,
          },
        ],
      },
    ],
  },
  {
    path: "/MDS_disbursement_user",
    name: "MDS_disbursement",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    meta: { breadCrumb: "เบิกวัสดุ" },
    children: [
      {
        path: "",
        component: MDS_disbursement_user,
      },
      {
        path: "MDS_disbursement_form_user",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        meta: { breadCrumb: "แบบฟอร์มเบิกวัสดุ" },
        children: [
          {
            path: "",
            component: MDS_disbursement_form_user,
          },
        ],
      },
    ],
  },
  {
    path: "/MDS_disbursement_admin",
    name: "MDS_disbursement",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    meta: { breadCrumb: "เบิกวัสดุ" },
    children: [
      {
        path: "",
        component: MDS_disbursement_admin,
      },
      {
        path: "MDS_disbursement_form_admin",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        meta: { breadCrumb: "แบบฟอร์มเบิกวัสดุ" },
        children: [
          {
            path: "",
            component: MDS_disbursement_form_admin,
          },
        ],
      },
    ],
  },
  {
    path: "/MDS_import",
    name: "MDS_import",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    meta: { breadCrumb: "รายการนำเข้าวัสดุ" },
    children: [
      {
        path: "",
        component: MDS_import,
      },
      {
        path: "MDS_import_form",
        name: "MDS_import_form",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        meta: { breadCrumb: "ฟอร์มนำข้าวัสดุ" },
        children: [
          {
            path: "",
            component: MDS_import_form,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
