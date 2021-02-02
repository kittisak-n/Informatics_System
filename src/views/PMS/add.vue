<template>
  <div id="add">
    <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card>
          <a-row :gutter="[8, 8]">
            <a-col :span="8">
              <b>ชื่อ</b> :
              <a-input />
            </a-col>

            <a-col :span="8">
              <b>นามสกุล</b> :
              <a-input />
            </a-col>

            <a-col :span="8">
              <b>ตำแหน่ง</b> :
              <a-input />
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="8">
              <b>ที่อยู่</b> :
              <a-input />
            </a-col>

            <a-col :span="8">
              <b>ตำบล</b> :
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
            </a-col>

            <a-col :span="8">
              <b>อำเภอ</b> :
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
            </a-col>
          </a-row>

          <a-row :gutter="[8, 8]">
            <a-col :span="12">
              <b>จังหวัด</b> :
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
            </a-col>

            <a-col :span="12">
              <b>รหัสไปรษณีย์</b> :
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
            </a-col>

            <a-row :gutter="[8, 8]">
              <a-col :span="24" style="text-align:center">
                <a-col :span="12" style="text-align:right">
                  <a-button>ยกเลิก</a-button>
                </a-col>
                <a-col :span="12" style="text-align:left">
                  <a-button type="primary">
                    บันทึก
                  </a-button>
                </a-col>
              </a-col>
            </a-row>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
