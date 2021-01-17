import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";



//MDS_exchequer
import MDS_exchequer from "../views/MDS/MDS_exchequer/MDS_exchequer.vue";
import MDS_exchequer_adjust_suppiles from "../views/MDS/MDS_exchequer/MDS_exchequer_adjust_suppiles.vue";

import MDS_import from "../views/MDS/MDS_import/MDS_import.vue";
import MDS_import_form from "../views/MDS/MDS_import/MDS_import_form.vue";
import MDS_export from "../views/MDS/MDS_export/MDS_export.vue"
import MDS_report from "../views/MDS/MDS_report/MDS_report.vue"
import MDS_disbursement from "../views/MDS/MDS_disbursement/MDS_disbursement.vue";
import MDS_disbursement_form from "../views/MDS/MDS_disbursement/MDS_disbursement_form.vue";

Vue.use(VueRouter);

const routes = [{
        path: "",
        name: "Home",
        component: {
            render(c) {
                return c("router-view");
            }
        },
        meta: { breadCrumb: "หน้าแรก" },
        children: [{
                path: "",
                component: Home
            },
            {
                path: "/home",
                component: Home
            }
        ]
    },
    {
        path: "/calculator",
        name: "Login",
        component: {
            render(c) {
                return c("router-view");
            }
        },
        meta: { breadCrumb: "คำนวนภาระงานอาจารย์ประจำ" },
        children: [{
            path: "",

        }, ]
    },

    {
        path: "/MDS_exchequer",
        name: 'MDS_exchequer',
        meta: { breadCrumb: 'รายการวัสดุในคลัง' },
        component: {
            render(c) {
                return c("router-view");
            }
        },
        children: [

            {
                path: '',
                component: MDS_exchequer
            },
            {
                path: 'MDS_exchequer_adjust_suppiles',
                name: 'MDS_exchequer_adjust_suppiles',
                meta: { breadCrumb: 'ปรับยอดรายการวัสดุ' },
                component: {
                    render(c) {
                        return c("router-view");
                    }
                },
                children: [{
                    path: '',
                    component: MDS_exchequer_adjust_suppiles
                }, ]
            }
        ]
    }, {
        path: "/MDS_disbursement",
        name: 'MDS_disbursement',
        component: {
            render(c) {
                return c("router-view");
            }
        },
        meta: { breadCrumb: 'เบิกวัสดุ' },
        children: [{
                path: '',
                component: MDS_disbursement
            }, {

                path: 'MDS_disbursement_form',
                component: {
                    render(c) {
                        return c("router-view");
                    }
                },
                meta: { breadCrumb: 'แบบฟอร์มเบิกวัสดุ' },
                children: [{
                    path: "",
                    component: MDS_disbursement_form,

                }]

            },

        ]
    },
    {
        path: "/MDS_export",
        name: 'MDS_export',
        component: {
            render(c) {
                return c("router-view");
            }
        },
        meta: { breadCrumb: "รายการเบิกจ่ายวัสดุ" },
        children: [{
                path: '',
                component: MDS_export
            },

        ]
    },
    {
        path: "/MDS_report",
        name: 'MDS_report',
        component: {
            render(c) {
                return c("router-view");
            }
        },
        meta: { breadCrumb: "รายงานผลการเบิกจ่ายวัสดุ" },
        children: [{
                path: '',
                component: MDS_report
            },

        ]
    },
    {
        path: "/MDS_import",
        name: 'MDS_import',
        component: {
            render(c) {
                return c("router-view");
            }
        },
        meta: { breadCrumb: 'รายการนำเข้าวัสดุ' },
        children: [{
                path: '',
                component: MDS_import
            },
            {
                path: "MDS_import_form",
                name: 'MDS_import_form',
                component: {
                    render(c) {
                        return c("router-view");
                    }
                },
                meta: { breadCrumb: 'ฟอร์มนำข้าวัสดุ' },
                children: [{
                    path: '',
                    component: MDS_import_form
                }, ]
            }

        ]
    },



];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;