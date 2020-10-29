<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 底部 -->
    <div class="footer">
      <div class="footer-container">
        <FooterTop v-show="!$route.meta.isHidden"></FooterTop>
        <FooterDown></FooterDown>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import FooterTop from "@/components/FooterTop";
import FooterDown from "@/components/FooterDown";
export default {
  name: "App",
  components: {
    Header,
    FooterTop,
    FooterDown,
  },
};
</script>

<style lang="less" scoped>
.footer {
  background-color: #eaeaea;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
}
</style>
