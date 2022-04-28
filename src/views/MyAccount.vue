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
                <h2>info</h2>
                <div class="user-info-item-panel">
                  <el-descriptions :column="2">
                    <el-descriptions-item label="用户名">
                      kooriookami
                    </el-descriptions-item>
                    <el-descriptions-item label="手机号">
                      18100000000
                    </el-descriptions-item>
                    <el-descriptions-item label="居住地">
                      苏州市
                    </el-descriptions-item>
                    <el-descriptions-item label="备注">
                      <el-tag size="small">学校</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="联系地址">
                      江苏省苏州市吴中区吴中大道 1188 号
                    </el-descriptions-item>
                  </el-descriptions>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Payment methods">
              <div class="user-info-item">
                <h2>已保存的付款方式</h2>
                <div class="user-info-item-panel">
                  <div class="icon">
                    <img src="../assets/visa.png" alt="" />
                  </div>
                  <div class="desc">
                    <h4>3055签证<span>3055签证</span></h4>
                    <div class="desc-list">
                      <div>
                        <p>持卡人</p>
                        <p>zhangqi</p>
                      </div>
                      <div>
                        <p>过期</p>
                        <p>06/22</p>
                      </div>
                      <div></div>
                    </div>
                    <div class="del">
                      <el-link type="danger"
                        >删除卡 <i class="el-icon-delete"></i>
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
