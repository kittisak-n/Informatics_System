<template>
  <div id="display">
    <a-crad
      :style="{
        width: '300px',
        background: '#ffffff90',
        border: '2px solid #035096',
        padding: '3%',
        borderRadius: '5%',
      }"
    >
      <a-row :gutter="[8, 8]">
        <a-col :span="24">
          <h1>Informatics System</h1>
        </a-col>
      </a-row>
      <a-row :gutter="[8, 16]">
        <a-col :span="24">
          <a-input type="text" placeholder="ชื่อผู้ใช้">
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-col>
        <a-col :span="24">
          <a-input type="password" placeholder="รหัสผ่าน">
            <a-icon slot="prefix" type="lock" />
          </a-input>
        </a-col>
        <a-col :span="24" :style="{ textAlign: 'start' }">
          <a-checkbox @change="onChange">
            จดจำรหัสผ่าน
          </a-checkbox>
        </a-col>
      </a-row>
      <br />

      <a-row :gutter="[8, 8]">
        <a-col :span="24">
          <a-button type="primary" :style="{ width: '100%' }" @click="login()">
            เข้าสู่ระบบ
          </a-button>
        </a-col>
      </a-row>
    </a-crad>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ path: "home" });
      this.$store.state.status_login = true;
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
#display {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
