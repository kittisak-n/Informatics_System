<template>
  <div id="personal_data">
    <!-- <a-row :gutter="[8, 8]">
      <a-col :span="24">
        <a-card>
          <a-row :gutter="[8, 8]">
            <a-col :span="24" style="text-align:right">
              <a-button type="warning">
                แก้ไข
              </a-button>
            </a-col>
          </a-row>
          <br>

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
        </a-card>
      </a-col>
    </a-row> -->
    <!-- <a-row :gutter="[8, 8]">
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
    </a-row> -->
    <a-card>
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="24" style="text-align:center">
          <h3>รายละเอียดข้อมูลส่วนตัว</h3>
        </a-col>
      </a-row>
      <br />

      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="2" style="text-align:end">
          ชื่อ (อังกฤษ) :
        </a-col>
        <a-col :span="6">
          <a-input style="width:100%" placeholder="Papai" />
        </a-col>
        <a-col :span="2" style="text-align:end">
          นามสกุล (อังกฤษ) :
        </a-col>
        <a-col :span="6">
          <a-input style="width:100%" placeholder="Papai" />
        </a-col>
      </a-row>
      <br />
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="2" style="text-align:end">
          ชื่อ (ภาษาไทย) :
        </a-col>
        <a-col :span="6">
          <a-input style="width:100%" placeholder="ประไพพรรณ" />
        </a-col>
        <a-col :span="2" style="text-align:end">
          นามสกุล (ภาษาไทย) :
        </a-col>
        <a-col :span="6">
          <a-input style="width:100%" placeholder="สุ่มทรัพย์" />
        </a-col>
      </a-row>
      <br />
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="2" style="text-align:end">
          ต่ำแหน่ง :
        </a-col>
        <a-col :span="6">
          <a-input style="width:100%" placeholder="เจ้าหน้าที่ฝ่ายธุรการ" />
        </a-col>
        <a-col :span="2" style="text-align:end">
          ที่อยู่ :
        </a-col>
        <a-col :span="6">
          <a-input style="width:100%" placeholder="199/116 หมู่16" />
        </a-col>
      </a-row>
      <br />

      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="2" style="text-align:end">
          จังหวัด :
        </a-col>
        <a-col :span="2">
          <a-input style="width:100%" placeholder="ชลบุรี" />
        </a-col>
        <a-col :span="2" style="text-align:end">
          อำเภอ :
        </a-col>
        <a-col :span="2">
          <a-input style="width:100%" placeholder="ศรีราชา" />
        </a-col>
        <a-col :span="2" style="text-align:end">
          ตำบล :
        </a-col>
        <a-col :span="2">
          <a-input style="width:100%" placeholder="ศรีราชา" />
        </a-col>
        <a-col :span="2" style="text-align:end">
          รหัสไปรษณีย์ :
        </a-col>
        <a-col :span="2">
          <a-input style="width:100%" placeholder="20000" />
        </a-col>
      </a-row>
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        <a-col :span="24" style="text-align:end">
          <a-button type="primary">
            บันทึก
          </a-button>
        </a-col>
      </a-row>
    </a-card>
    <br>
    <a-card>
      <a-row :gutter="[8, 8]" type="flex" justify="center">
        
      </a-row>
    </a-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
