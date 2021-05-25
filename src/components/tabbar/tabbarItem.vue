<template>
    <div class="tabbar-item" @click="itemFn">
      <div v-if="!isActive" class="item-div"><slot name="img"><img src="../../assets/img/dingdan.svg" alt=""></slot></div>
      <div v-else class="item-div"><slot name="img-active"><img src="../../assets/img/dingdan_active.svg" alt=""></slot></div>
      <div :style="isActiveColor">
        <slot name="name"><p>首页</p></slot>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    path:String,
    color:{
      type:String,
      default:"deeppink"
    }
  },
  computed:{
    isActive(){return this.$route.path==this.path},
    isActiveColor(){return this.isActive?{'color':this.color}:{}}
  }
  ,
  methods:{
    itemFn(){
      if (this.$route.path!=this.path)
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tabbar-item{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .tabbar-item img{
    width:22px;
  }
  .item-div{
    height: 22px;
  }
</style>