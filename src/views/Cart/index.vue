<template>
  <div>
    <!-- 窗口侧边栏 -->
    <div class="toolbar toolbar-wrap">
      <div class="content"></div>
      <div class="but list"></div>
      <div class="toolist">
        <div class="pull">
          <i class="tab-ico vip"></i>
          <em class="tab-text">商品会员</em>
        </div>
        <div class="pull">
          <i class="tab-ico cart"></i>
          <em class="tab-text">购物车</em>
        </div>
        <div class="pull">
          <i class="tab-ico follow"></i>
          <em class="tab-text">我的关注</em>
        </div>
        <div class="pull">
          <i class="tab-ico history"></i>
          <em class="tab-text">我的足迹</em>
        </div>
        <div class="pull">
          <i class="tab-ico message"></i>
          <em class="tab-text">我的消息</em>
        </div>
        <div class="pull">
          <i class="tab-ico jimi"></i>
          <em class="tab-text">咨询</em>
        </div>
      </div>
      <div class="back pull">
        <i class="tab-ico top"></i>
        <em class="tab-text">顶部</em>
      </div>
    </div>
    <!-- 商品分类导航 -->
    <div class="typeNav">
      <div class="container">
        <h2 class="all">全部商品分类</h2>
        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
      </div>
    </div>

    <!-- 购物车列表 -->
    <div class="cart">
      <h4>全部商品</h4>
      <div class="cart-main">
        <div class="cart-th">
          <div class="cart-th1">全部</div>
          <div class="cart-th2">商品</div>
          <div class="cart-th3">单价（元）</div>
          <div class="cart-th4">数量</div>
          <div class="cart-th5">小计（元）</div>
          <div class="cart-th6">操作</div>
        </div>
        <div class="cart-body">
          <ul class="cart-list">
            <li class="cart-list-con1">
              <input type="checkbox" name="chk_list" />
            </li>
            <li class="cart-list-con2">
              <img src="./images/goods1.png" />
              <div class="item-msg">
                米家（MIJIA） 小米小白智能摄像机增强版
                1080p高清360度全景拍摄AI增强
              </div>
            </li>
            <li class="cart-list-con3">
              <div class="item-txt">语音升级款</div>
            </li>
            <li class="cart-list-con4">
              <span class="price">399.00</span>
            </li>
            <li class="cart-list-con5">
              <a href="javascript:void(0)" class="mins">-</a>
              <input
                autocomplete="off"
                type="text"
                value="1"
                minnum="1"
                class="itxt"
              />
              <a href="javascript:void(0)" class="plus">+</a>
            </li>
            <li class="cart-list-con6">
              <span class="sum">399</span>
            </li>
            <li class="cart-list-con7">
              <a href="#none" class="sindelet">删除</a>
              <br />
              <a href="#none">移到收藏</a>
            </li>
          </ul>

          <ul class="cart-list">
            <li class="cart-list-con1">
              <input type="checkbox" name="chk_list" id="" value="" />
            </li>
            <li class="cart-list-con2">
              <img src="./images/goods2.png" />
              <div class="item-msg">
                华为（MIJIA） 华为metaPRO 30 浴霸4摄像 超清晰
              </div>
            </li>
            <li class="cart-list-con3">
              <div class="item-txt">黑色版本</div>
            </li>
            <li class="cart-list-con4">
              <span class="price">5622.00</span>
            </li>
            <li class="cart-list-con5">
              <a href="javascript:void(0)" class="mins">-</a>
              <input
                autocomplete="off"
                type="text"
                value="1"
                minnum="1"
                class="itxt"
              />
              <a href="javascript:void(0)" class="plus">+</a>
            </li>
            <li class="cart-list-con6">
              <span class="sum">5622</span>
            </li>
            <li class="cart-list-con7">
              <a href="#none" class="sindelet">删除</a>
              <br />
              <a href="#none">移到收藏</a>
            </li>
          </ul>

          <ul class="cart-list">
            <li class="cart-list-con1">
              <input type="checkbox" name="chk_list" id="" value="" />
            </li>
            <li class="cart-list-con2">
              <img src="./images/goods3.png" />
              <div class="item-msg">
                iphone 11 max PRO 苹果四摄 超清晰 超费电 超及好用
              </div>
            </li>
            <li class="cart-list-con3">
              <div class="item-txt">墨绿色</div>
            </li>
            <li class="cart-list-con4">
              <span class="price">11399.00</span>
            </li>
            <li class="cart-list-con5">
              <a href="javascript:void(0)" class="mins">-</a>
              <input
                autocomplete="off"
                type="text"
                value="1"
                minnum="1"
                class="itxt"
              />
              <a href="javascript:void(0)" class="plus">+</a>
            </li>
            <li class="cart-list-con6">
              <span class="sum">11399</span>
            </li>
            <li class="cart-list-con7">
              <a href="#none" class="sindelet">删除</a>
              <br />
              <a href="#none">移到收藏</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="cart-tool">
        <div class="select-all">
          <input class="chooseAll" type="checkbox" />
          <span>全选</span>
        </div>
        <div class="option">
          <a href="#none">删除选中的商品</a>
          <a href="#none">移到我的关注</a>
          <a href="#none">清除下柜商品</a>
        </div>
        <div class="money-box">
          <div class="chosed">已选择 <span>0</span>件商品</div>
          <div class="sumprice">
            <em>总价（不含运费） ：</em>
            <i class="summoney">0</i>
          </div>
          <div class="sumbtn">
            <a class="sum-btn" href="###" target="_blank">结算</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style lang="less" scoped>
.toolbar {
  position: fixed;
  z-index: 999;
  width: 300px;
  height: 100%;
  background-color: #7a6e6e;
  transition: right 0.3s ease-in-out 0s;
  &.toolbar-out {
    top: 0px;
    right: 0px;
  }
  &.toolbar-wrap {
    top: 0px;
    right: -294px;
  }
  .content {
    position: relative;
    left: 6px;
    width: 294px;
    background-color: bisque;
    height: 100%;
    z-index: 99;
  }
  .but {
    position: relative;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 1px;
    cursor: pointer;
    background-color: #7a6e6e;
    border-radius: 3px 0 0 3px;
    position: absolute;
    top: 0;
    /*right: -6px;*/
    left: -29px;
    &.list {
      background-image: url(./images/list.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.pull-wrap {
      background-image: url(./images/cross.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .toolist {
    position: absolute;
    top: 50%;
    left: -29px;
    width: 35px;
    margin-top: -80px;
    /*background-color: cadetblue;*/
    .pull {
      position: relative;
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      margin-bottom: 1px;
      cursor: pointer;
      background-color: #7a6e6e;
      border-radius: 3px 0 0 3px;
      z-index: 66;
      .vip {
        background-image: url(./images/toolbars.png);
        background-position: -88px -175px;
      }
      .cart {
        background-image: url(./images/toolbars.png);
        background-position: -50px 0;
      }
      .follow {
        background-image: url(./images/toolbars.png);
        background-position: -50px -50px;
      }
      .history {
        background-image: url(./images/toolbars.png);
        background-position: -50px -100px;
      }
      .message {
        background-image: url(./images/toolbars.png);
        background-position: -190px -150px;
      }
      .jimi {
        background-image: url(./images/toolbars.png);
        background-position: -50px -150px;
      }
      .top {
        background-image: url(./images/toolbars.png);
        background-position: -50px -250px;
      }

      .tab-text {
        width: 62px;
        height: 35px;
        line-height: 35px;
        color: #fff;
        text-align: center;
        font-family: 微软雅黑;
        position: absolute;
        /*position: relative;*/
        z-index: 1;
        left: 35px;
        top: 0;
        background-color: #7a6e6e;
        border-radius: 3px 0 0 3px;
        font-style: normal;
        -webkit-transition: left 0.3s ease-in-out 0.1s;
        transition: left 0.3s ease-in-out 0.1s;
      }
      .tab-ico {
        display: inline-block;
        position: relative;
        /*background-image: url(img/toolbars.png);*/
        background-color: #7a6e6e;
        border-radius: 3px 0 0 3px;
        z-index: 2;
        width: 35px;
        height: 35px;
      }
    }
  }

  & > .pull {
    position: relative;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 1px;
    cursor: pointer;
    background-color: #7a6e6e;
    border-radius: 3px 0 0 3px;
    z-index: 66;
    .tab-ico {
      display: inline-block;
      position: relative;
      /*background-image: url(img/toolbars.png);*/
      background-color: #7a6e6e;
      border-radius: 3px 0 0 3px;
      z-index: 2;
      width: 35px;
      height: 35px;
    }
    .top {
      background-image: url(./images/toolbars.png);
      background-position: -50px -250px;
    }

    .tab-text {
      width: 62px;
      height: 35px;
      line-height: 35px;
      color: #fff;
      text-align: center;
      font-family: 微软雅黑;
      position: absolute;
      /*position: relative;*/
      z-index: 1;
      left: 35px;
      top: 0;
      background-color: #7a6e6e;
      border-radius: 3px 0 0 3px;
      font-style: normal;
      -webkit-transition: left 0.3s ease-in-out 0.1s;
      transition: left 0.3s ease-in-out 0.1s;
    }
  }
  & > .back {
    position: absolute;
    bottom: 0;
    /*right: -6px;*/
    left: -29px;
    display: inline-block;
    background-image: url(./images/toolbars.png);
  }
}
.typeNav {
  border-bottom: 2px solid #e1251b;
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }
    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }
  }
}
.cart {
  width: 1200px;
  margin: 0 auto;
  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }
  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;
      & > div {
        float: left;
      }
      .cart-th1 {
        width: 25%;
        input {
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
      .cart-th2 {
        width: 25%;
      }
      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }
    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;
      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        & > li {
          float: left;
        }
        .cart-list-con1 {
          width: 4.1667%;
        }
        .cart-list-con2 {
          width: 25%;
          img {
            width: 82px;
            height: 82px;
            float: left;
          }
          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }
        .cart-list-con3 {
          width: 20.8333%;
          .item-txt {
            text-align: center;
          }
        }
        .cart-list-con4 {
          width: 12.5%;
        }
        .cart-list-con5 {
          width: 12.5%;
          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }
          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }
        .cart-list-con6 {
          width: 12.5%;
          .sum {
            font-size: 16px;
          }
        }
        .cart-list-con7 {
          width: 12.5%;
          a {
            color: #666;
          }
        }
      }
    }
  }
  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;
    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;
      span {
        vertical-align: middle;
      }
      input {
        vertical-align: middle;
      }
    }
    .option {
      padding: 10px;
      overflow: hidden;
      float: left;
      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }
    .money-box {
      float: right;
      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }
      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;
        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }
      .sumbtn {
        float: right;
        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
