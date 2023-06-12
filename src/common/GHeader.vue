<template>
    <div class="header-box">
        <div>
            <header class="w">
                <div class="w-box">
                    <div class="nav-logo">
                        <h1>
                            <router-link to="/" title="XMall商城官网">XMall商城</router-link>
                        </h1>
                    </div>
                </div>
                <div class="w-box">
                    <div class="nav-logo">
                        <h1>
                            <router-link to="/" title="XMall商城官网">XMall商城</router-link>
                        </h1>
                    </div>
                </div>
            </header>
        </div>
    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav> -->
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/style/theme";
@import "../assets/style/mixin";
  .header-box {
    background: $head-bgc;
    background-image: -webkit-linear-gradient(#000, #121212);
    background-image: linear-gradient(#000, #121212);
    width: 100%;
  }
  .w {
      display: flex;
      justify-content: space-between;
    }
  header {
    height: 100px;
    z-index: 30;
    position: relative;
  }
  .w-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
    h1 {
      height: 100%;
      display: flex;
      align-items: center;
      > a {
        background: url(/static/images/global-logo-red@2x.png) no-repeat ;
        background-size: cover;
        display: block;
        @include wh(50px, 40px);
        text-indent: -9999px;
        background-position: 0 0;
      }
    }
  }
</style>
