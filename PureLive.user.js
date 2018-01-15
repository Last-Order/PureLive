// ==UserScript==
// @name PureLive
// @version 0.0.2
// @description:zh-cn 移除直播网站广告
// @namespace Violentmonkey Scripts
// @include https://www.zhanqi.tv/*   
// @include https://www.showroom-live.com/*
// @grant none
// ==/UserScript==

/**
 * WARNING
 * 本脚本仅支持 Violentmonkey Scripts
 */
$(document).ready(() => {
  const applyCSS = (css) => {
    let styleTag = $(css);
    $('html > head').append(styleTag);
  }
  const zhanqi = () => {
    $('.live-chat-content').remove(); // 聊天窗口
    $('.live-side-content').remove(); // 左侧边栏
    $('.want-headlines-btn').remove(); // 上头条
    $('.js-room-fun-area').remove(); // 礼物区域
    $('.sdk-zhanqiMall').remove(); // 商城按钮
    $('.anchor-info-area').remove(); // 主播信息
    applyCSS(`<style>
    .no-play-down-ibox {display: none !important;} /* 客户端下载广告 */
    #js-flash-layer {width: 100vw !important; height: 100vh !important;} /* 拉伸播放器 */
    .live-room-content {padding: 0 !important;} /* 砍掉主容器左内间距 */
    .sdk-zhanqiMall {display: none !important;} /* 商城按钮 */
    .room-rank-ibox,.ranking-btn {display: none !important;} /* 排名展示和排名按钮 */
    .zb-task .zb-task-entrance { display: none !important } /* 主播任务 */
    </style>`);
    $(window).trigger('resize');
  }

  const showroom = () => {
    applyCSS(`<style>
      #js-avatar { display: none !important; } /* 垃圾头像 */
      #gift-area, #gift-log  { display: none !important; }  /* 礼物区域 */
      #event-and-support-area  { display: none !important; }  /* 活动和赞助区域 */
      .l-room-footer { display: none !important; }  /* 底栏 */
      .room-inner {background-image: none !important;} /* 垃圾背景图 */
      .l-room-video {position: relative !important; }
    </style>`);
  }
  
  switch(location.host){
    case 'www.zhanqi.tv':
    case 'zhanqi.tv':
      zhanqi(); break;
    case 'www.showroom-live.com':
      showroom(); break;
  }
});