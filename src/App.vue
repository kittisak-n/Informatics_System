<template>
  <div id="app">
    <a-layout
      id="components-layout-demo-custom-trigger"
      :style="{
        height: '100%',
      }"
    >
      <a-drawer
        class="display_mobile"
        :width="250"
        :placement="placement"
        :closable="false"
        :visible="visible"
        @close="onClose"
      >
        <div
          @click="() => (visible = !visible)"
          :style="{
            paddingLeft: '24px',
            paddingTop: '40px',
            paddingBottom: '20px',
            height: 'auto',
          }"
        >
          <div class="logo">
            <img
              class="img-logo"
              src="https://www.informatics.buu.ac.th/2020/wp-content/uploads/2018/11/iclub-noGradient-CircleBk.png"
            />
          </div>
        </div>
        <hr />
        <a-menu
          class="menu"
          mode="inline"
          theme="dark"
          :default-selected-keys="['home']"
        >
          <a-menu-item key="home">
            <a-icon type="home" />
            <span>หน้าแรก</span>
          </a-menu-item>
          <a-sub-menu key="cal">
            <span slot="title">
              <a-icon type="calculator" />
              <span>คำนวณภาระงาน</span>
            </span>
            <a-menu-item key="cal_1" @click="() => (visible = !visible)">
              cal_1
            </a-menu-item>
            <a-menu-item key="cal_2" @click="() => (visible = !visible)">
              cal_2
            </a-menu-item>
            <a-menu-item key="cal_3" @click="() => (visible = !visible)">
              cal_3
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="report">
            <span slot="title">
              <a-icon type="area-chart" />
              <span>รายงานการเงิน</span>
            </span>
            <a-menu-item key="report_1" @click="() => (visible = !visible)">
              report_1
            </a-menu-item>
            <a-menu-item key="report_2" @click="() => (visible = !visible)">
              report_2
            </a-menu-item>
            <a-menu-item key="report_3" @click="() => (visible = !visible)">
              report_3
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="payment">
            <span slot="title">
              <a-icon type="form" />
              <span>เบิกจ่ายเงินสวัสดิการ</span>
            </span>
            <a-menu-item key="payment_1" @click="() => (visible = !visible)">
              payment_1
            </a-menu-item>
            <a-menu-item key="payment_2" @click="() => (visible = !visible)">
              payment_2
            </a-menu-item>
            <a-menu-item key="payment_3" @click="() => (visible = !visible)">
              payment_3
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="stock">
            <span slot="title">
              <a-icon type="gift" />
              <span>รายการพัสดุ</span>
            </span>
            <a-menu-item
              key="MDS_exchequer"
              @click="() => (visible = !visible)"
            >
              stock_1
            </a-menu-item>
            <a-menu-item key="stock_2" @click="() => (visible = !visible)">
              stock_2
            </a-menu-item>
            <a-menu-item key="stock_3" @click="() => (visible = !visible)">
              stock_3
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="poweroff" @click="() => (visible = !visible)">
            <a-icon type="poweroff" />
            <span>ออกจากระบบ</span>
          </a-menu-item>
        </a-menu>
      </a-drawer>
      <a-layout-sider
        width="220"
        class="display_web"
        v-model="collapsed"
        :trigger="null"
        collapsible
        :style="{ Background: '#035096' }"
      >
        <div class="logo">
          <img
            class="img-logo"
            src="https://www.informatics.buu.ac.th/2020/wp-content/uploads/2018/11/iclub-noGradient-CircleBk.png"
          />
        </div>
        <a-menu
          class="menu"
          theme="dark"
          mode="inline"
          :style="{ Background: '#035096' }"
          :default-selected-keys="['home']"
        >
          <a-menu-item key="home">
            <a-icon type="home" theme="filled" />
            <span>หน้าแรก</span>
          </a-menu-item>
          <a-menu-item key="user">
            <a-icon type="user" />
            <span>ข้อมูลส่วนตัว</span>
          </a-menu-item>
          <a-menu-item key="management">
            <a-icon type="api" theme="filled" />
            <span>จัดการสิทธิ์เข้าใช้งาน</span>
          </a-menu-item>
          <a-sub-menu key="CWS">
            <span slot="title">
              <a-icon type="calculator" theme="filled" />
              <span>ระบบคำนวณภาระงาน</span>
            </span>
            <a-menu-item key="CWS_show">
              <router-link :to="{ path: '/calculator/Show_course' }">
              <a-icon type="folder-open" theme="filled" />ข้อมูลรายวิชา
              </router-link>
            </a-menu-item>
            <a-menu-item key="CWS_setting">
              <router-link :to="{ path: '/calculator/Calculation_criteria' }">
              <a-icon type="file-sync" />หลักเกณฑ์การคำนวณ
              </router-link>
            </a-menu-item>
            <a-menu-item key="CWS_calculation">
              <a-icon type="calculator" theme="filled" />คำนวณภาระงาน
            </a-menu-item>
            <a-menu-item key="CWS_conclution">
                <router-link :to="{ path: '/calculator/SummaryWorkload' }">
              <a-icon type="area-chart"  />สรุปภาระงานเพื่อการจ่ายค่าตอบแทน </router-link>
            </a-menu-item>
            <a-menu-item key="CWS_check">
              <a-icon type="search" />ตรวจสอบภาระงาน
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="MDS">
            <span slot="title">
              <a-icon type="switcher" theme="filled" />
              <span>ระบบเบิกจ่ายวัสดุ</span>
            </span>
            <a-menu-item key="MDS_exchequer">
              <router-link :to="{ path: '/MDS_exchequer' }">
                <a-icon type="folder-open" theme="filled" />รายการวัสดุในคลัง
              </router-link>
            </a-menu-item>
            <a-menu-item key="MDS_import">
              <router-link :to="{ path: '/MDS_import' }">
                <a-icon type="file-done" />รายการนำเข้าวัสดุ
              </router-link>
            </a-menu-item>
            <a-menu-item key="MDS_disbursement_admin">
              <router-link :to="{ path: '/MDS_disbursement_admin' }">
                <a-icon type="file-sync" />รายการเบิกจ่ายวัสดุ
              </router-link>
            </a-menu-item>
            <a-menu-item key="MDS_report">
              <router-link :to="{ path: '/MDS_disbursement_user' }">
                <a-icon type="area-chart" />รายงานผลเบิกจ่ายวัสดุ
              </router-link>
            </a-menu-item>
            <a-menu-item key="MDS_setting">
              <router-link :to="{ path: '/MDS_disbursement_user' }">
                <a-icon type="setting" theme="filled" />ตั้งต่าระบบเบิกจ่าย
              </router-link>
            </a-menu-item>
            <a-menu-item key="MDS_disbursement_user">
              <router-link :to="{ path: '/MDS_disbursement_user' }">
                <a-icon type="block" />เบิกจ่ายวัสดุ
              </router-link>
            </a-menu-item>

            <!-- <a-menu-item key="MDS_report">
              <router-link :to="{ path: '/stock/reveal_report' }">
                รายงานผลการเบิกพัสดุ
              </router-link>
            </a-menu-item> -->
          </a-sub-menu>

          <a-menu-item key="poweroff">
            <a-icon type="poweroff" />
            <span>ออกจากระบบ</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-affix :offset-top="0.01" style="width:auto">
          <a-layout-header
            :style="{
              backgroundColor: '#e8e8e8',
              padding: '0px',
              textAlign: 'left',
              color: '#000000',
            }"
          >
            <a-row :gutter="[16, 0]" class="display_web">
              <a-col class="gutter-row" :span="10">
                <a-icon
                  class="trigger"
                  :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                  @click="() => (collapsed = !collapsed)"
                />
                <span :style="{ fontSize: '20px' }">
                  <b>INFORMATICS SYSTEM</b>
                </span>
              </a-col>
              <a-col
                class="gutter-row"
                :span="14"
                :style="{
                  textAlign: 'end',
                }"
              >
                <span
                  :style="{
                    fontSize: '16px',
                  }"
                >
                  นายกิตติศักดิ์ น้อยดอนไพร
                </span>
                <a-icon
                  slot="count"
                  type="exclamation"
                  style="color: #f5222d"
                />
                <a-dropdown placement="bottomRight">
                  <a-avatar
                    @click="(e) => e.preventDefault()"
                    shape="square"
                    :size="36"
                    :style="{
                      marginRight: '20px',
                    }"
                    src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.0-9/116792568_3107531436021477_941072729078493831_n.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=xa-rE7az62MAX-G6EHp&_nc_ht=scontent.fbkk12-4.fna&oh=72ac5d3434718e78e51293b004689639&oe=5F90AE28"
                  />

                  <br />
                  <a-menu
                    slot="overlay"
                    :style="{
                      marginTop: '12px',
                      width: '200px',
                    }"
                  >
                    <a-menu-item
                      :style="{
                        fontSize: '16px',
                        lineHeight: '2',
                      }"
                    >
                      <a-icon type="user" />
                      <span>ข้อมูลส่วนตัว</span>
                    </a-menu-item>
                    <a-menu-item
                      :style="{
                        fontSize: '16px',
                        lineHeight: '2',
                      }"
                    >
                      <a-icon type="poweroff" /><span>ออกจากระบบ</span>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </a-col>
            </a-row>
            <a-row :gutter="[0, 0]" class="display_mobile">
              <a-col class="gutter-row" :span="16">
                <a-icon
                  class="trigger"
                  :type="visible ? 'menu-unfold' : 'menu-fold'"
                  @click="() => (visible = !visible)"
                />
                <span class="logo"> </span>
              </a-col>
              <a-col
                class="gutter-row"
                :span="8"
                :style="{
                  textAlign: 'end',
                }"
              >
              </a-col>
            </a-row>
          </a-layout-header>
        </a-affix>
        <a-layout-content
          :style="{
            margin: '10px 10px',
            textAlign: 'left',
          }"
        >
          <div>
            <a-page-header :title="crumbs[crumbs.length - 1].breadcrumbName">
              ตำแหน่งที่อยู่ :
              <span>
                <a-breadcrumb :routes="crumbs">
                  <a-breadcrumb-item>Location</a-breadcrumb-item>
                  <a-breadcrumb-separator>:</a-breadcrumb-separator>
                  <template slot="itemRender" slot-scope="{ route, routes }">
                    <span v-if="routes.indexOf(route) === routes.length - 1">
                      {{ route.breadcrumbName }}
                    </span>
                    <router-link v-else :to="route.to">
                      {{ route.breadcrumbName }}
                    </router-link>
                  </template>
                </a-breadcrumb>
              </span>
            </a-page-header>
          </div>
          <div class="body-router">
            <router-view />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadcrumbList: [],
      collapsed: false,
      visible: false,
      placement: "left",
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange(e) {
      this.placement = e.target.value;
    },
  },
  computed: {
    crumbs: function() {
      let pathArray = this.$route.path.split("/");
      pathArray.shift();
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path,
          breadcrumbName: this.$route.matched[idx].meta.breadCrumb || path,
        });
        return breadcrumbArray;
      }, []);
      console.log(breadcrumbs);
      return breadcrumbs;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.ant-layout-sider {
  background: #ffffff !important;
}
#components-layout-demo-custom-trigger .trigger {
  left: 0%;
  font-size: 18px;
  line-height: 64px;
  padding: 0 16px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  margin: 16px;
}

hr {
  width: 80%;
  border-top: 1px solid #d1d0ce;
}

.img-logo {
  height: 32px;
  width: 32px;
}

#components-layout-demo-custom-trigger .menu {
  text-align: left;
  background: #035096;
}

.ant-menu-sub {
  .ant-menu-item {
    padding-left: 30px !important;
  }
}

.ant-drawer-body {
  padding: 0px !important;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
}

.ant-layout-sider-children {
  background: #035096;
}

.ant-menu-sub.ant-menu-inline {
  color: #ffffff;
  background: #035096;
}

.ant-menu-dark .ant-menu-inline.ant-menu-sub {
  background: #7280 !important;
  /* color: #000000 !important; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45) inset;
}

.ant-drawer-wrapper-body {
  height: 100%;
  overflow: auto;
  background: #035096;
}

.ant-menu-dark.ant-menu-inline,
.ant-menu-dark.ant-menu-vertical,
.ant-menu-dark.ant-menu-vertical-left,
.ant-menu-dark.ant-menu-vertical-right {
  border-right: 0;
  background: #035096;
}

.ant-page-header-content {
  padding-top: 0px !important;
  overflow: hidden;
}

.ant-page-header {
  padding: 12px !important;
  background: #fff !important;
}

.ant-breadcrumb {
  display: inline;
}

.body-router {
  margin-top: 10px;
}

.fixed-header {
  top: 0;
}
.ant-table {
  .ant-btn {
    margin: 0px 1%;
  }
}

.ant-btn-success {
  color: #fff !important;
  background-color: #28a745 !important;
  border-color: #28a745 !important;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.ant-btn-success-disabled,
.ant-btn-success.disabled,
.ant-btn-success[disabled],
.ant-btn-success-disabled:hover,
.ant-btn-success.disabled:hover,
.ant-btn-success[disabled]:hover,
.ant-btn-success-disabled:focus,
.ant-btn-success.disabled:focus,
.ant-btn-success[disabled]:focus,
.ant-btn-success-disabled:active,
.ant-btn-success.disabled:active,
.ant-btn-success[disabled]:active,
.ant-btn-success-disabled.active,
.ant-btn-success.disabled.active,
.ant-btn-success[disabled].active {
  color: rgba(0, 0, 0, 0.25) !important;
  background-color: #f5f5f5 !important;
  border-color: #d9d9d9 !important;
  text-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.ant-btn-success:hover,
.ant-btn-success:focus {
  color: #fff !important;
  background-color: #34ce57 !important;
  border-color: #34ce57 !important;
}
.ant-btn-success:active,
.ant-btn-success.active {
  color: #fff !important;
  background-color: #1e7e34 !important;
  border-color: #1e7e34 !important;
}
.ant-btn-background-ghost.ant-btn-success {
  color: #28a745 !important;
  background: transparent !important;
  border-color: #28a745 !important;
  text-shadow: none !important;
}
.ant-btn-background-ghost.ant-btn-success:hover,
.ant-btn-background-ghost.ant-btn-success:focus {
  color: #34ce57 !important;
  background: transparent !important;
  border-color: #34ce57 !important;
}
.ant-btn-background-ghost.ant-btn-success:active,
.ant-btn-background-ghost.ant-btn-success.active {
  color: #28a745 !important;
  background: transparent !important;
  border-color: #1e7e34 !important;
}
.ant-btn-warning {
  color: #fff !important;
  background-color: #eca52b !important;
  border-color: #eca52b !important;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.ant-btn-warning-disabled,
.ant-btn-warning.disabled,
.ant-btn-warning[disabled],
.ant-btn-warning-disabled:hover,
.ant-btn-warning.disabled:hover,
.ant-btn-warning[disabled]:hover,
.ant-btn-warning-disabled:focus,
.ant-btn-warning.disabled:focus,
.ant-btn-warning[disabled]:focus,
.ant-btn-warning-disabled:active,
.ant-btn-warning.disabled:active,
.ant-btn-warning[disabled]:active,
.ant-btn-warning-disabled.active,
.ant-btn-warning.disabled.active,
.ant-btn-warning[disabled].active {
  color: rgba(0, 0, 0, 0.25) !important;
  background-color: #f5f5f5 !important;
  border-color: #d9d9d9 !important;
  text-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.ant-btn-warning:hover,
.ant-btn-warning:focus {
  color: #fff !important;
  background-color: #f0b95a !important;
  border-color: #f0b95a !important;
}
.ant-btn-warning:active,
.ant-btn-warning.active {
  color: #fff !important;
  background-color: #d18b13 !important;
  border-color: #d18b13 !important;
}
.ant-btn-background-ghost.ant-btn-warning {
  color: #eca52b !important;
  background: transparent !important;
  border-color: #eca52b !important;
  text-shadow: none !important;
}
.ant-btn-background-ghost.ant-btn-warning:hover,
.ant-btn-background-ghost.ant-btn-warning:focus {
  color: #f0b95a !important;
  background: transparent !important;
  border-color: #f0b95a !important;
}
.ant-btn-background-ghost.ant-btn-warning:active,
.ant-btn-background-ghost.ant-btn-warning.active {
  color: #eca52b !important;
  background: transparent !important;
  border-color: #d18b13 !important;
}
.ant-btn-info {
  color: #fff !important;
  background-color: #17a2b8 !important;
  border-color: #17a2b8 !important;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.ant-btn-info-disabled,
.ant-btn-info.disabled,
.ant-btn-info[disabled],
.ant-btn-info-disabled:hover,
.ant-btn-info.disabled:hover,
.ant-btn-info[disabled]:hover,
.ant-btn-info-disabled:focus,
.ant-btn-info.disabled:focus,
.ant-btn-info[disabled]:focus,
.ant-btn-info-disabled:active,
.ant-btn-info.disabled:active,
.ant-btn-info[disabled]:active,
.ant-btn-info-disabled.active,
.ant-btn-info.disabled.active,
.ant-btn-info[disabled].active {
  color: rgba(0, 0, 0, 0.25) !important;
  background-color: #f5f5f5 !important;
  border-color: #d9d9d9 !important;
  text-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.ant-btn-info:hover,
.ant-btn-info:focus {
  color: #fff !important;
  background-color: #1fc8e3 !important;
  border-color: #1fc8e3 !important;
}
.ant-btn-info:active,
.ant-btn-info.active {
  color: #fff !important;
  background-color: #117a8b !important;
  border-color: #117a8b !important;
}
.ant-btn-background-ghost.ant-btn-info {
  color: #17a2b8 !important;
  background: transparent !important;
  border-color: #17a2b8 !important;
  text-shadow: none !important;
}
.ant-btn-background-ghost.ant-btn-info:hover,
.ant-btn-background-ghost.ant-btn-info:focus {
  color: #1fc8e3 !important;
  background: transparent !important;
  border-color: #1fc8e3 !important;
}
.ant-btn-background-ghost.ant-btn-info:active,
.ant-btn-background-ghost.ant-btn-info.active {
  color: #17a2b8 !important;
  background: transparent !important;
  border-color: #117a8b !important;
}

// usage :
// <Button type="primary">Primary Button</Button>
// <Button type="danger">Danger Button</Button>
// <Button type="success">Success Button</Button>
// <Button type="info">Info Button</Button>
// <Button type="warning">Warning Button</Button>

.tableNoborded {
  .ant-table {
    border: 0px !important;
    th {
      text-align: start !important;
      border: none !important;
    }

    .ant-btn {
      margin: 0px 1%;
    }
  }
}
.highcharts-credits {
  display: none;
}

.ant-card {
  .ant-card-meta {
    padding: 0.5% 0px !important;
    .ant-card-meta-avatar {
      float: left;
      padding-right: 0.5% !important;
    }
  }
}
.ant-menu-item .anticon,
.ant-menu-submenu-title .anticon {
  margin-right: 8px !important;
}
</style>
