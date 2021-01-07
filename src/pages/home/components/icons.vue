<template>
  <div class="icons">
    <div class="icon">
      <div class='icon-img'>
        <img
          class='icon-img-content'
          src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"
          alt=""
        />
        <p>热门景点</p>
      </div>
    </div>
    <div class="icon"></div>
    <div class="icon"></div>
    <div class="icon"></div>
    <div class="icon"></div>
    <div class="icon"></div>
    <div class="icon"></div>
    <div class="icon"></div>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons'
}
</script>
<style lang="stylus" scoped>
.icons
  overflow hidden
  height 0
  padding-bottom 50%
  background green
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    padding-bottom 25%
    background red
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      background blue
      .icon-img-content
        height 100%
</style>
