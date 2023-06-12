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
                    <div class="right-box">
                      <div class="nav-list">
                        <el-autocomplete
                          placeholder="请输入商品信息"
                          suffix-icon="el-icon-search"
                          v-model="input"
                          :fetch-suggestions="querySearchAsync"
                          >
                        </el-autocomplete>
                      </div>
                      <div class="nav-aside">
                        nav aside
                      </div>
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
<script>
import { getQuickSearch } from '../api/goods'
import 'element-ui/lib/theme-chalk/index.css'
export default {
  data () {
    return {
      user: {},
      // 查询数据库的商品
      st: false,
      // 头部购物车显示
      cartShow: false,
      positionL: 0,
      positionT: 0,
      timerCartShow: null, // 定时隐藏购物车
      input: 'init', // 搜索框
      choosePage: -1,
      initSearchResults: [
        { value: '苹果手机' },
        { value: '小米手机' },
        { value: '华为手机' }
      ],
      searchResults: [],
      timeout: null,
      token: '',
      navList: []
    }
  },
  methods: {
    querySearchAsync (queryString, cb) {
      if (this.input === undefined) {
        cb(this.initSearchResults)
      }
      this.input = this.input.trim()
      if (this.input === '') {
        cb(this.initSearchResults)
      } else {
        this.loadAll()
        setTimeout(() => {
          cb(this.searchResults)
        }, 300)
      }
    },
    // 搜索框提示
    loadAll () {
      const params = {
        params: {
          key: this.input
        }
      }
      getQuickSearch(params).then(res => {
        if (res === null || res === '') {
          return
        }
        // console.log(res)
        if (res.error) {
          this.showError(res.error.reason)
          return
        }
        const array = []
        let maxSize = 5
        if (res.hits.hits.length <= 5) {
          maxSize = res.hits.hits.length
        }
        for (let i = 0; i < maxSize; i++) {
          const obj = {}
          obj.value = res.hits.hits[i]._source.productName
          array.push(obj)
        }
        if (array.length !== 0) {
          this.searchResults = array
        } else {
          this.searchResults = []
        }
      })
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/style/theme";
@import "../assets/style/mixin";
  .header-box {
    background: $head-bgc;
    background-image: -webkit-linear-gradient(#000, #121212);
    background-image: linear-gradient(#000, #121212);
    width: 100%;
  }
  // .w {
  //     display: flex;
  //     justify-content: space-between;
  //   }
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
    // position: relative;
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
  .nav-list {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 22px;
      .el-autocomplete{
        width: 305px;
      }
      a {
        width: 110px;
        color: #c8c8c8;
        display: block;
        font-size: 14px;
        padding: 0 25px;
        &:hover {
          color: #fff;
        }
      }
      a:nth-child(2){
        // width: 5vw;
        margin-left: -10px;
      }
      // a:nth-child(3){
      //   width: 5vw;
      // }
    }
  .right-box {
      display: flex;
    }
  .nav-aside {
    display: flex;
    align-items: center;
  }
</style>
