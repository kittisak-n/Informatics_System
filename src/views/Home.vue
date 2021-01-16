<template>
  <div class="home">
    <a-row :gutter="[8, 8]">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <a-card size="small">
          ระบบจัดการสิทธิ์
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card size="small">
          ระบบคำนวณภาระงาน
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card size="small">
          ระบบเบิกจ่ายวัสดุ
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
