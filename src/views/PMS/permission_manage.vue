<template>
  <div id="permisson">
    <a-row :gutter="[8, 8]">
      <a-col :span="7">
        <a-card>
          <a-row>
            <a-col :span="4">
              <a-icon
                type="user"
                :style="{
                  fontSize: '580%',
                  color: '#f0b95a',
                }"
              />
            </a-col>
            <a-col :span="20" style="text-align:end">
              <br />
              <div class="text-head">จำนวนบุคลากรที่มีอยู่ในระบบ</div>
              <div><span class="text-number ">3 </span>คน</div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="20" style="margin: 0.2em 0px;">
              <a-card-meta title="รายการผู้มีสิทธิ์การใช้งานระบบ">
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
              <router-link :to="{ path: '/permission_manage/adduser' }">
                <a-button type="primary" icon="plus">
                  เพิ่มผู้มีสิทธิ์เข้าใช้ระบบ
                </a-button>
              </router-link>
            </a-col>
          </a-row>
          <hr style="width:100%" />
          <br />
          <a-row :gutter="[8, 8]">
            <a-col :span="24">
              <a-table
                :columns="columns"
                :data-source="data"
                :pagination="false"
                size="small"
              >
                <!-- <span slot="name" slot-scope="text, record, index">
                  <div style="text-align:center">
                    {{ index }}
                    {{ text }}
                    {{ record }}
                  </div> -->
                <span slot="key" slot-scope="text">
                  <div style="text-align:center">
                    {{ text }}
                  </div>
                </span>
                <span slot="name" slot-scope="text">
                  <div style="margin-left:15%">
                    {{ text }}
                  </div>
                </span>

                <span slot="position" slot-scope="text">
                  <div style="text-align:center">
                    {{ text }}
                  </div>
                </span>

                <span slot="test" slot-scope="text">
                  <div style="text-align:center">
                    {{ text }}
                  </div>
                </span>

                <span slot="status">
                  <div style="text-align:center">
                    <a-switch default-checked>
                      <a-icon slot="checkedChildren" type="check" />
                      <a-icon slot="unCheckedChildren" type="close" />
                    </a-switch>
                  </div>
                </span>

                <span slot="action">
                  <div style="text-align:center">
                    <a-tooltip placement="top" title="จัดการสิทธิ์">
                      <a-button
                        type="warning"
                        @click="showModal_manage"
                        icon="edit"
                      >
                      </a-button>
                    </a-tooltip>
                    <a-tooltip placement="top" title="ปิดการใช้งาน">
                      <a-button type="danger" icon="close"> </a-button>
                    </a-tooltip>
                    <a-tooltip placement="top" title="ตรวจสอบข้อมูล">
                      <a-button
                        type="primary"
                        @click="showModal_info"
                        icon="search"
                      >
                      </a-button>
                    </a-tooltip>
                  </div>
                </span>
              </a-table>
            </a-col>
          </a-row>
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
                <a-select-option value="10">
                  10
                </a-select-option>
                <a-select-option value="25">
                  25
                </a-select-option>
                <a-select-option value="50">
                  50
                </a-select-option>
                <a-select-option value="100">
                  100
                </a-select-option>
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

    <!-- modal -->
    <div>
      <a-modal
        v-model="visible_manage"
        title="จัดการสิทธิ์"
        @ok="handleOk"
        cancelText="ปิด"
        okText="ยืนยัน"
      >
        <a-table
          :columns="columns_modal_manage"
          :data-source="data_modal_manage"
          size="small"
          :pagination="false"
          bordered
        >
          <template slot="permission" slot-scope="text, record, index">
            <div v-if="index < data_modal_manage.length - 1">
              {{ text }}
            </div>
            <div
              v-if="index == data_modal_manage.length - 1"
              style="text-align:center"
            >
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
            </div>
          </template>

          <span slot="status_modal" slot-scope="text, record, index">
            <div
              v-if="index < data_modal_manage.length - 1"
              style="text-align:center"
            >
              <a-switch default-checked />
            </div>
            <div
              v-if="index == data_modal_manage.length - 1"
              style="text-align:center"
            >
              <a-button type="success" icon="save"></a-button>
            </div>
          </span>
          <!-- <template slot="title" >
            Header
          </template> -->
          <!-- <template slot="footer">
            Footer
          </template> -->
        </a-table>
      </a-modal>

      <a-modal
        v-model="visible_info"
        title="ข้อมูลรายละเอียด"
        @ok="handleOk"
        :footer="null"
      >
        <a-row :gutter="[8, 8]">
          <a-col :span="12">
            <a-card>
              <a-row>
                <a-col :span="4">
                  <a-icon
                    type="database"
                    :style="{
                      fontSize: '300%',
                      color: '#000080',
                    }"
                  />
                </a-col>
                <a-col :span="20" style="text-align:end">
                  <div class="text-head">จำนวนระบบ</div>
                  <div><span class="text-number ">2 </span>ระบบ</div>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :span="12">
            <a-card>
              <a-row>
                <a-col :span="4">
                  <a-icon
                    type="clock-circle"
                    :style="{
                      fontSize: '300%',
                      color: '#008000',
                    }"
                  />
                </a-col>
                <a-col :span="20" style="text-align:end">
                  <div class="text-head">จำนวนการเข้าใช้ระบบ</div>
                  <div><span class="text-number ">10 </span>จำนวนครั้ง</div>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
        </a-row>
        <a-row :gutter="[8, 8]">
          <a-col>
            <a-table
              :columns="columns_modal_info"
              :data-source="data_modal_info"
              :pagination="false"
              size="small"
            >
            </a-table>
          </a-col>
        </a-row>
        <br />
        <a-row :gutter="[8, 8]">
          <a-col :span="24">
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
          </a-col>
        </a-row>
      </a-modal>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: "key",
    key: "key",
    title: "ลำดับ",
    width: "10%",
    scopedSlots: { customRender: "key" },
  },
  {
    dataIndex: "name",
    key: "name",
    title: "ชื่อ - นามสกุล",
    width: "20%",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "ตำแหน่ง",
    dataIndex: "position",
    width: "20%",
    key: "age",
    scopedSlots: { customRender: "position" },
  },
  // {
  //   title: "ไว้ก่อน",
  //   dataIndex: "address",
  //   width: "20%",
  //   key: "address",
  //   scopedSlots: { customRender: "test" },
  // },
  {
    title: "สถานะ",
    key: "tags",
    dataIndex: "tags",
    width: "20%",
    scopedSlots: { customRender: "status" },
  },
  {
    title: "ดำเนินการ",
    key: "action",
    width: "30%",
    scopedSlots: { customRender: "action" },
  },
];

const columns_modal_manage = [
  {
    title: "สิทธิ์การใช้งาน",
    dataIndex: "permission",
    scopedSlots: { customRender: "permission" },
  },
  {
    title: "จัดการ",
    scopedSlots: { customRender: "status_modal" },
  },
];

const columns_modal_info = [
  {
    title: "ระบบที่มีสิทธิ์เข้าถึง",
    dataIndex: "permission_activate",
    scopedSlots: { customRender: "" },
  },
];

const data = [
  {
    key: "1",
    name: "ประไพพรรณ สุ่มทรัพย์",
    position: "เจ้าหน้าที่ฝ่ายธุรการ",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "นันทิกานต์ คุ้มเพชร",
    position: "เจ้าหน้าที่เบิกวัสดุ",
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "ปุณณานันท์ มีเงินมาก",
    position: "อาจารย์ที่ปรึกษา",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const data_modal_manage = [
  {
    key: "1",
    permission: "เจ้าหน้าที่ฝ่ายธุรการ",
  },
  {
    key: "2",
    permission: "บุคลากรทั่วไป",
  },
  {
    key: "3",
    permission: "บุคลากรทั่วไป",
  },
];

const data_modal_info = [
  {
    key: "1",
    permission_activate: "ระบบคำนวณภาระงาน",
  },
  {
    key: "2",
    permission_activate: "ระบบเบิกจ่ายวัสดุ",
  },
];

export default {
  data() {
    return {
      data,
      columns,
      data_modal_manage,
      columns_modal_manage,
      data_modal_info,
      columns_modal_info,
      visible_manage: false,
      visible_info: false,
    };
  },
  methods: {
    showModal_manage() {
      this.visible_manage = true;
    },
    showModal_info() {
      this.visible_info = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible_manage = false;
      this.visible_info = false;
    },
  },
};
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}

#setColor {
  background-color: #ffcc00;
}
</style>
