<template>
  <div class="menu-page">
    <el-menu
      default-active="1"
      mode="horizontal"
      class="el-menu-vertical"
      @select="selectMenu"
      background-color="#08274f"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-if="menuType === '0'">
        <el-menu-item :index="menuItem.id" v-for="(menuItem) in menuList" :key="menuItem.id">
          <span slot="title">{{menuItem.menuName}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      menuList: [
        {
          id: 'monitor',
          menuName: 'monitor'
        },
        {
          id: 'monitor1',
          menuName: 'monitor1'
        },
        {
          id: 'monitor2',
          menuName: 'monitor2'
        },
        {
          id: 'monitor3',
          menuName: 'monitor3'
        },
        {
          id: 'monitor4',
          menuName: 'monitor4'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
  },
  computed: mapState({
    menuType: state => state.navMenu.menuType
  })
}
</script>

<style lang="less">
.menu-page{
  min-height: 100%;
  .el-menu-vertical{
    min-height: 600px;
    border-right: none;
    .el-menu-item{
      height: 40px;
      line-height: 40px;
      padding: 0 15px !important;
    }
  }
}
@media screen and (max-width: 768px) {
.menu-page{
  min-height: 100%;
  .el-menu-vertical{
    min-height: auto;
    border-right: none;
    .el-menu-item{
      height: 40px;
      line-height: 40px;
      padding: 0 15px !important;
    }
  }
}
}
</style>
