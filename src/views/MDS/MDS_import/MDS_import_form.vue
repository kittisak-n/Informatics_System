<template>
  <div id="reveal_form">
    <a-row :gutter="[8, 8]" type="flex" justify="center">
      <a-col :span="24">
        <a-card size="small">
          <a-row :gutter="[8, 8]">
            <a-col :span="20" style="margin: 0.2em 0px;">
              <a-card-meta title="เพิ่มรายการนำเข้าวัสดุ/อุปกรณ์">
                <a-icon
                  slot="avatar"
                  type="folder-add"
                  :style="{
                    fontSize: '150%',
                  }"
                />
              </a-card-meta>
            </a-col>
          </a-row>
          <hr style="width:100%" />
          <br />
          <a-row :gutter="[8, 8]" type="flex" justify="start">
            <a-col :span="24" :style="{ fontSize: '120%' }">
              <b>ข้อมูลการสั่งซื้อ</b>
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]" type="flex" justify="center">
            <a-col :span="2" :style="{ textAlign: 'end', margin: '0.2em 0px' }">
              <b>หมายเลขใบรายการ</b> :
            </a-col>
            <a-col :span="8">
              <a-input />
            </a-col>
            <a-col :span="2" :style="{ textAlign: 'end', margin: '0.2em 0px' }">
              <b>ผู้จัดจำหน่าย</b>
            </a-col>
            <a-col :span="8">
              <a-input />
            </a-col>
          </a-row>
          <br />
          <a-row :gutter="[8, 8]" type="flex" justify="center">
            <a-col :span="2" :style="{ textAlign: 'end', margin: '0.2em 0px' }">
              <b>วันที่นำเข้าวัสดุ</b> :
            </a-col>
            <a-col :span="8">
              <a-input />
            </a-col>
            <a-col :span="2" :style="{ textAlign: 'end', margin: '0.2em 0px' }">
              <b>ผู้ตรวจรับ</b> :
            </a-col>
            <a-col :span="8">
              <a-input />
            </a-col>
          </a-row>
          <br />
          <a-row :gutter="[8, 8]" type="flex" justify="center">
            <a-col :span="2" :style="{ textAlign: 'end', margin: '0.2em 0px' }">
              <b>จำนวน</b> :
            </a-col>
            <a-col :span="3">
              <a-input />
            </a-col>
            <a-col :span="2" :style="{ textAlign: 'end', margin: '0.2em 0px' }">
              <b>ยอดชำระ</b> :</a-col
            >
            <a-col :span="3">
              <a-input />
            </a-col>
            <a-col :span="2" :style="{ textAlign: 'end', margin: '0.2em 0px' }">
              <b>ภาษี (7%)</b> :
            </a-col>
            <a-col :span="3">
              <a-input />
            </a-col>
            <a-col :span="2" :style="{ textAlign: 'end', margin: '0.2em 0px' }">
              <b>ยอดชำระสุทธิ</b> :
            </a-col>
            <a-col :span="3">
              <a-input />
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]">
            <a-col :span="24" :style="{ fontSize: '120%' }">
              <b>รายการวัสดุนำเข้า</b>
            </a-col>
          </a-row>
          <br />
          <a-row :gutter="[8, 8]" type="flex" justify="center">
            <a-col :span="20">
              <a-table
                :columns="columns_order_meterail"
                :data-source="meterail"
                :pagination="false"
                size="small"
                bordered
              >
                <span slot="key" slot-scope="text, record, index">
                  <div :style="{ textAlign: 'center' }">
                    {{ index + 1 }}
                  </div>
                </span>
                <span slot="order_meterail_name">
                  <div :style="{ textAlign: 'center' }">
                    <a-select
                      show-search
                      :value="value"
                      placeholder="กรอกชื่อวัสดุที่ต้องการเบิก"
                      style="width: 100%"
                      :default-active-first-option="false"
                      :show-arrow="false"
                      :filter-option="false"
                      :not-found-content="null"
                      @search="handleSearch"
                      @change="handleChange"
                    >
                      <a-select-option v-for="d in data" :key="d.value">
                        {{ d.text }}
                      </a-select-option>
                    </a-select>
                  </div>
                </span>
                <span slot="order_meterail_amount">
                  <div :style="{ textAlign: 'center' }">
                    <a-input placeholder="จำนวนวัสดุ" />
                  </div>
                </span>
                <span slot="meterail_balance" slot-scope="text">
                  <div :style="{ textAlign: 'center' }">
                    {{ text }}
                  </div>
                </span>
                <span slot="order_meterail_price">
                  <div :style="{ textAlign: 'center' }">
                    <a-input placeholder="ราคารวมของวัสดุ" />
                  </div>
                </span>

                <span slot="meterail_note">
                  <div :style="{ textAlign: 'center' }">
                    <a-input placeholder="ระบุหมายเหตุการเบิก" />
                  </div>
                </span>

                <span slot="action" slot-scope="text, record, index">
                  <div :style="{ textAlign: 'center' }">
                    <a-tooltip placement="top">
                      <template slot="title">
                        <span>ลบข้อมูลวัสดุ</span>
                      </template>
                      <a-button
                        :disabled="meterail.length == 1"
                        type="danger"
                        icon="close"
                        @click="deleteRecordMeterail(index)"
                      >
                      </a-button>
                    </a-tooltip>
                  </div>
                </span>
              </a-table>
            </a-col>
          </a-row>
          <a-row :gutter="[8, 8]" type="flex" justify="center">
            <a-col :span="20">
              <a-button
                type="dashed"
                style="width:100%"
                icon="plus"
                @click="addRecordMeterail()"
                >เพิ่มรายการข้อมูล
              </a-button>
            </a-col>
          </a-row>

          <template slot="actions" class="ant-card-actions">
            <a-row :gutter="[8, 8]" type="flex" justify="center">
              <a-col :span="12" style="text-align:start">
                <a-button type="danger" style="width:25%;margin:0px 1.5%"
                  >ยกเลิก
                </a-button>
              </a-col>
              <a-col :span="12" style="text-align:end">
                <a-button
                  type="success"
                  style="width:25%;margin:0px 1.5%"
                  icon="save"
                  >บันทึกรายการ
                </a-button>
              </a-col>
            </a-row>
          </template>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import jsonp from "fetch-jsonp";
import querystring from "querystring";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: "utf-8",
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then((response) => response.json())
      .then((d) => {
        if (currentValue === value) {
          const result = d.result;
          const data = [];
          result.forEach((r) => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}
export default {
  name: "reveal_form",
  components: {},
  data() {
    return {
      columns_order_meterail: [
        {
          title: "#",
          dataIndex: "key",
          key: "key",
          width: "3%",
          scopedSlots: {
            customRender: "key",
          },
        },
        {
          title: "รายการวัสดุ",
          dataIndex: "order_meterail_name",
          key: "order_meterail_name",
          width: "15%",
          scopedSlots: {
            customRender: "order_meterail_name",
          },
        },
        {
          title: "จำนวน",
          dataIndex: "order_meterail_amount",
          key: "order_meterail_amount",
          width: "7%",
          scopedSlots: {
            customRender: "order_meterail_amount",
          },
        },
        {
          title: "หน่วยนับ",
          dataIndex: "order_meterail_unit",
          key: "order_meterail_unit",
          width: "5%",
          scopedSlots: {
            customRender: "order_meterail_unit",
          },
        },

        {
          title: "ราคารวม (บาท)",
          dataIndex: "order_meterail_price",
          key: "order_meterail_price",
          width: "10%",
          scopedSlots: {
            customRender: "order_meterail_price",
          },
        },
        {
          title: "",
          dataIndex: "action",
          key: "action",
          width: "5%",
          scopedSlots: {
            customRender: "action",
          },
        },
      ],
      meterail: [
        {
          key: 1,
          meterail_name: null,
          meterail_balance: 0,
          meterail_reveal: null,
          meterail_note: null,
        },
      ],
      data: [],
      value: undefined,
    };
  },
  methods: {
    handleSearch(value) {
      fetch(value, (data) => (this.data = data));
    },
    handleChange(value) {
      console.log(value);
      this.value = value;
      fetch(value, (data) => (this.data = data));
    },
    addRecordMeterail() {
      let data_meterail = {
        key: this.meterail.length + 1,
        meterail_name: null,
        meterail_balance: 0,
        meterail_reveal: null,
        meterail_note: null,
      };
      this.meterail.push(data_meterail);
    },
    deleteRecordMeterail(index) {
      this.meterail.splice(index, 1);
    },
    SaveRecordMeterail() {},
  },
};
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  min-height: 200px;
  padding: 20px;
}

.steps-action {
  margin-top: 24px;
  text-align: end;
}
</style>
