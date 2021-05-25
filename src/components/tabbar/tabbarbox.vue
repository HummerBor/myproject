<template>
  <div>
    <div class="tabbar-box">
        <slot></slot>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
  .tabbar-box{
    position: fixed;
    display: flex;
    bottom:0;
    justify-content: space-around;
    width: 100%;
    height: 49px;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(0,0,0,0.08);
  }
</style>>

