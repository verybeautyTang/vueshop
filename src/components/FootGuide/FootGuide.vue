<template>
  <div>
    <footer class="footer_guide border-1px">
      <a
        href="javascript:;"
        class="guide_item"
        :class="{on:'/msite'==$route.path}"
        @click="goTo('/msite')"
      >
        <span class="item_icon">
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
      </a>
      <a
        href="javascript:;"
        class="guide_item"
        :class="{on:'/search'==$route.path}"
        @click="goTo('/search')"
      >
        <span class="item_icon">
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </a>
      <a
        href="javascript:;"
        class="guide_item"
        :class="{on:'/order'==$route.path}"
        @click="goTo('/order')"
      >
        <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </a>
      <a
        href="javascript:;"
        class="guide_item"
        :class="{on:'/profile'==$route.path}"
        @click="goTo('/profile')"
      >
        <span class="item_icon">
          <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      /*router.go(n)
这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)
router.push(location)
想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
router.replace(location)
跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
      */
      return this.$router.replace(path);
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins.styl';

.footer_guide { // footer
  top-border-1px(#e4e4e4);
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;

    &.on {
      color: #02a774;
    }

    span {
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;

      .iconfont {
        font-size: 22px;
      }
    }
  }
}</style>