<template>
  <div class="navbar">
    <ul class="nav-detail">
      <router-link to="/" tag="li">
        <a href="">主页</a>
      </router-link >
      <router-link to="/Collection" tag="li">
        <a href="">收藏</a>
      </router-link>
      <router-link to="/my" tag="li">
        <a href="">我的</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Nav',
    created () {
      console.log('Nav')
    }
  }
</script>
<style lang="less" scoped>
  .navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #ccc;
    .nav-detail {
    display: flex;
      li {
        flex: 1;
        border-right: 1px solid #fff;
        &:last-child {
          border-right: none;
        }
        a{
          display: block;
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }


</style>
