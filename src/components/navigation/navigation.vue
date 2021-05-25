<template>
  <div>
    <tabBar>
      <tabbarItem path="/home">
        <img slot="img" src="../../assets/img/dingdan.svg" alt="">
        <img slot="img-active" src="../../assets/img/dingdan_active.svg" alt="">
        <p slot="name">首页</p>
      </tabbarItem>

      <tabbarItem path="/category">
        <img slot="img" src="../../assets/img/fenlei.svg" alt="">
        <img slot="img-active" src="../../assets/img/fenlei_active.svg" alt="">
        <p slot="name">分类</p>
      </tabbarItem>

      <tabbarItem path="/cart">
        <img slot="img" src="../../assets/img/gouwuche.svg" alt="">
        <img slot="img-active" src="../../assets/img/gouwuche_active.svg" alt="">
        <p slot="name">购物车</p>
      </tabbarItem>

      <tabbarItem path="/profile">
        <img slot="img" src="../../assets/img/wode.svg" alt="">
        <img slot="img-active" src="../../assets/img/wode_active.svg" alt="">
        <p slot="name">我的</p>
      </tabbarItem>
    </tabBar>
  </div>
</template>

<script>
  import tabBar from "../tabbar/tabbarbox";
  import tabbarItem from "../tabbar/tabbarItem";
  export default{
    components:{tabBar,tabbarItem}
  }
</script>

<style>

</style>