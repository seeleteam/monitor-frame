<template>
  <div class="main-page">
    <div :xs="0" :span="2" class="main-el-row-nav lg-show" id="navbar">
      <el-menu
        default-active="1"
        class="main-nav-page"
        active-border-left="2px solid #ffd04b"
        active-text-color="#ffd04b">
        <template>
          <div class="item-logo">
            <img src="../assets/imgs/logo.png" alt="logo">
          </div>
          <el-menu-item :class="{'item-active': menuItem.id == itemId}" :index="menuItem.id" v-for="menuItem in menuList" :key="menuItem.id">
            <span class="item" slot="title" @click="selectMenu(menuItem.url, menuItem.id)">{{menuItem.menuName}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div :xs="24" :lg="0" class="main-el-row-sm sm-show">
      <img src="../assets/imgs/logo.png" alt="logo">
      <span class="sm-nav-wrap">
        <img v-if="menuVisible === false" @click="clickMenu" src="../assets/imgs/nav.png"/>
        <img v-else @click="clickMenu" src="../assets/imgs/close.png"/>
      </span>
    </div>
    <ul v-show="menuVisible" class="nav-ul-wrap">
      <li :index="menuItem.id" v-for="menuItem in menuList" :key="menuItem.id">
        <span class="item" :class="{'item-current' : menuItem.id == id}" slot="title" @click="selectMenu(menuItem.url, menuItem.id)">{{menuItem.menuName}}</span>
      </li>
    </ul>
    <div :xs="24" class="main-el-row-content">
      <div id="frame-wrapper" class="main-con-page" style="overflow: hidden;-webkit-overflow-scrolling:touch;height:100%;" >
        <iframe frameborder="0" height="100%"
          style="width: 1px; min-width: 100%; *width: 100%;"
          class="iframe-style"
          :src="url" scrolling="auto"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import { menuList } from './url'
import resize from '../untils/resize'
window.onresize = () => {
  resize()
}
export default {
  data () {
    return {
      menuVisible: false,
      menuList: menuList,
      url: menuList[0].url,
      id: '1',
      itemId: '1'
    }
  },
  components: {
  },
  mounted () {
    resize()
  },
  methods: {
    selectMenu (url, id) {
      this.url = url
      this.id = id
      this.itemId = id
      this.menuVisible = false
    },
    clickMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>
<style lang="less">
  .lg-show{
    display: block;
  }
  .sm-show{
    display: none;
  }
  .iframe-style{
    width: 1920px;
  }
  .main-page{
    height: 100%;
    .main-el-row-nav, .main-el-row-content{
      height: 100%;
    }
    .main-el-row-nav{
      float: left;
      width: 120px;
    }
    .main-el-row-content{
      width: 100%;
      padding-left: 120px;
      box-sizing: border-box;
    }
    .main-nav-page{
      background: #05172f;
      height: 100%;
      overflow-y: auto;
      border-right: none;
      .el-menu-item{
        height: 40px;
        line-height: 40px;
        color: #808080;
        border-left: 2px solid #05172f;
        &:hover{
          background: #051226;
          border-left: 2px solid #ffd04b;
          color: #ffd04b,
        }
      }
      .item-active{
        border-left: 2px solid #ffd04b;
        background: #051226;
        color: #ffd04b,
      }
      .item-logo{
        margin: 20px 0 20px 0;
        text-align: center;
        img{
          width: 80px;
        }
      }
      .item{
        display: inline-block;
        width: 100%;
        height: 40px;
      }
    }
    .main-el-row-sm{
      position: relative;
      background: #05172f;
      height: 50px;
      img{
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
      }
      .sm-nav-wrap{
        position: absolute;
        top: 50%;
        right: 60px;
        transform: translateY(-50%);
      }
    }
    .nav-ul-wrap{
      background: #05172f;
      li{
        border-bottom: 1px solid #2a4260;
        color: #808080;
        font-size: 14px;
        &:hover{
          color: #ffd04b;
          background: #051226;
          border-left: 2px solid #ffd04b;
        }
      }
      .item{
        display: inline-block;
        width: 100%;
        padding: 10px 20px;
      }
      .item-current{
        color: #ffd04b;
        background: #051226;
        border-left: 2px solid #ffd04b;
      }
    }
    .main-con-page{
      background: #05172f;
      height: 100%;
      width: 1920px;
    }
  }
  @media screen and (max-width: 768px) {
    .lg-show{
      display: none;
    }
    .sm-show{
      display: block;
    }
    .main-page{
      height: 100%;
      .main-el-row-nav, .main-el-row-content{
        height: 100%;
      }
      .main-el-row-nav{
        float: left;
        width: 200px;
      }
      .main-el-row-content{
        padding-left: 0px;
      }
      .main-con-page{
        width: 100%;
      }
    }
  }
</style>
