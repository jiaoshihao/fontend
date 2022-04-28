<template>
  <div class="Content">
    <div class="Brand">
      <router-link to="/">
        <img class="BrandImg" src="../assets/castle.png" />
      </router-link>
    </div>
    <div class="user-info-content">
      <div class="Info">
        <h1>{{ name }}</h1>
        <div>{{ email }}</div>
      </div>
      <el-tabs tab-position="left" style="menu" :tab-click="click()">
        <el-tab-pane label="Account overview">My Account</el-tab-pane>
        <el-tab-pane label="Payment methods">Saved payment methods</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyAccount",
  data() {
    return {
      name: "zzzq",
      email: "zqzq@gmail.com",
      payment: {
        cardType: "visa",
        cardNumber: "3055",
        cardHolder: "zzzq",
        expires: "05/22",
      },
    };
  },
  methods: {
    click() {
      console.log("index");
    },
  },
};
</script>
<style lang="less">
@import url("../style/myAccount.less");
</style>
