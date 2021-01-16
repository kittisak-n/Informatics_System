<template>
  <div id="permisson">
    <a-row :gutter="[8, 8]">
      <a-col :span="6">
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
                      <a-button type="warning" @click="showModal" icon="edit">
                      </a-button>
                    </a-tooltip>
                    <a-tooltip placement="top" title="ปิดการใช้งาน">
                      <a-button type="danger" icon="close"> </a-button>
                    </a-tooltip>
                    <a-tooltip placement="top" title="ตรวจสอบข้อมูล">
                      <a-button type="primary" icon="search"> </a-button>
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
        v-model="visible"
        title="จัดการสิทธิ์"
        @ok="handleOk"
        cancelText="ปิด"
        okText="ยืนยัน"
      >
        <a-table
          :columns="columns_modal"
          :data-source="data_modal"
          size="small"
          :pagination="false"
          bordered
        >
          <template slot="name_system" slot-scope="text, record, index">
            <div v-if="index < data_modal.length - 1">
              {{ text }}
            </div>
            <div
              v-if="index == data_modal.length - 1"
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
            <div v-if="index < data_modal.length - 1" style="text-align:center">
              <a-switch default-checked />
            </div>
            <div
              v-if="index == data_modal.length - 1"
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
    </div>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: "key",
    key: "key",
    title: "ลำดับ",
    width: "5%",
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
  {
    title: "ไว้ก่อน",
    dataIndex: "address",
    width: "20%",
    key: "address",
    scopedSlots: { customRender: "test" },
  },
  {
    title: "สถานะ",
    key: "tags",
    dataIndex: "tags",
    width: "20%",
    scopedSlots: { customRender: "status" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const columns_modal = [
  {
    title: "สิทธิ์การใช้งาน",
    dataIndex: "name_system",
    scopedSlots: { customRender: "name_system" },
  },
  {
    title: "จัดการ",
    scopedSlots: { customRender: "status_modal" },
  },
];

const data = [
  {
    key: "1",
    name: "นายมีชัย มีโชค",
    position: "เจ้าหน้าที่ ฝ่ายธุรการ",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "นายมีชัย มีโชค",
    position: "เบิกวัสดุ",
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "นายมีชัย มีโชค",
    position: "Test",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const data_modal = [
  {
    key: "1",
    name_system: "เจ้าหน้าที่ฝ่ายธุรการ",
  },
  {
    key: "2",
    name_system: "บุคลากรทั่วไป",
  },
  {
    key: "3",
    name_system: "บุคลากรทั่วไป",
  },
];

export default {
  data() {
    return {
      data,
      columns,
      visible: false,
      data_modal,
      columns_modal,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
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
