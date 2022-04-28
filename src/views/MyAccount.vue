<template>
  <div class="Content">
    <div class="Brand">
      <router-link to="/">
        <img class="BrandImg" src="../assets/castle.png" />
      </router-link>
    </div>
    <div class="user-info-container">
      <div class="user-info-content">
        <div class="Info">
          <h1>{{ name }}</h1>
          <div>{{ email }}</div>
        </div>
        <div class="user-info-list">
          <el-tabs tab-position="left">
            <el-tab-pane label="Account overview">
              <div class="user-info-item">
                <h2>Account</h2>
                <div class="user-info-item-panel">
                  <el-descriptions :column="1">
                    <el-descriptions-item label="Name">
                      {{ name }}
                    </el-descriptions-item>
                    <el-descriptions-item label="Phone">
                      {{ phone }}
                    </el-descriptions-item>
                    <el-descriptions-item label="Email">
                      {{ email }}
                    </el-descriptions-item>
                  </el-descriptions>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Payment methods">
              <div class="user-info-item">
                <h2>Saved payment methods</h2>
                <div class="user-info-item-panel">
                  <div class="icon">
                    <img src="../assets/visa.png" alt="" />
                  </div>
                  <div class="desc">
                    <h4>
                      {{ payment.cardType }} {{ payment.cardNumber
                      }}<span
                        >{{ payment.cardType }} {{ payment.cardNumber }}</span
                      >
                    </h4>
                    <div class="desc-list">
                      <div>
                        <p>Card Holder</p>
                        <p>{{ payment.cardHolder }}</p>
                      </div>
                      <div>
                        <p>Expires</p>
                        <p>{{ payment.expires }}</p>
                      </div>
                      <div></div>
                    </div>
                    <div class="del">
                      <el-link type="danger"
                        >Delete card <i class="el-icon-delete"></i>
                      </el-link>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
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
      phone: "18100000000",
      payment: {
        cardType: "visa",
        cardNumber: "3055",
        cardHolder: "Qi Zhang",
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
