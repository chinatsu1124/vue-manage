<template>
  <header>
    <div class="l-content">
      <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
      <!-- <h3 style="color: #fff">首页</h3> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span><img :src="userImg" class="user"/></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
import {mapState} from 'vuex';

export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("../assets/images/user.png"),
    };
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
    logOut() {
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      this.$store.commit('clearTabsList')
      this.$router.push("/login")
      console.log(this.$route);
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  }
};
</script>
<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.l-content {
  display: flex;
  align-items: center;

  .el-button {
    margin-right: 20px;
  }
}

.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

// style使用了scoped选项后无法穿透第三方组件的子类，需使用:deep()来进行穿透
.el-breadcrumb :deep(.el-breadcrumb__inner.is-link) {
  color: #606266;
  font-weight: 400;
}

.el-breadcrumb :deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
  color: #ffffff;
}
</style>
