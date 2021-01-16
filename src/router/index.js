import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue"
import Home from "../views/Home.vue";

//PMS_manage
import permission_manage from "../views/PMS/permission_manage.vue";
import adduser from "../views/PMS/add.vue";

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

Vue.use(VueRouter);

const routes = [{
        path: "/home",
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
            
        ]
    },
    {
        path:'',
        name:'login',
        meta:{breadCrumb : "เข้าสู่ระบบ"},
        component:{
            render(c){
                return c("router-view");
            }
        },
        children: [{
            path: "",
            component: login
        },
    ]
    },   
    {
        path:'/permission_manage',
        name:'permission_manage',
        meta:{breadCrumb : "จัดการสิทธิ์การใช้งาน"},
        component:{
            render(c){
                return c("router-view");
            }
        },
        children: [{
            path: "",
            component: permission_manage
        },
        {
            path: "adduser",
            meta:{breadCrumb : "เพิ่มผู้ใช้งาน"},
            component:{
                render(c){
                    return c("router-view");
                }
            },
            children:[{
                path: "",
                component: adduser
            }]
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
        path: "/MDS_disbursement_user",
        name: 'MDS_disbursement',
        component: {
            render(c) {
                return c("router-view");
            }
        },
        meta: { breadCrumb: 'เบิกวัสดุ' },
        children: [{
                path: '',
                component: MDS_disbursement_user
            }, {

                path: 'MDS_disbursement_form_user',
                component: {
                    render(c) {
                        return c("router-view");
                    }
                },
                meta: { breadCrumb: 'แบบฟอร์มเบิกวัสดุ' },
                children: [{
                    path: "",
                    component: MDS_disbursement_form_user,

                }]

            },

        ]
    },
    {
        path: "/MDS_disbursement_admin",
        name: 'MDS_disbursement',
        component: {
            render(c) {
                return c("router-view");
            }
        },
        meta: { breadCrumb: 'เบิกวัสดุ' },
        children: [{
                path: '',
                component: MDS_disbursement_admin
            }, {

                path: 'MDS_disbursement_form_admin',
                component: {
                    render(c) {
                        return c("router-view");
                    }
                },
                meta: { breadCrumb: 'แบบฟอร์มเบิกวัสดุ' },
                children: [{
                    path: "",
                    component: MDS_disbursement_form_admin,

                }]

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