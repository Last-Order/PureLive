// ==UserScript==
// @name PureLive
// @namespace Violentmonkey Scripts
// @include https://www.zhanqi.tv/*   
// @grant none
// ==/UserScript==
$(document).ready(() => {
  const zhanqi = () => {
    $('.live-chat-content').remove(); // 聊天窗口
    $('.live-side-content').remove(); // 左侧边栏
    $('.want-headlines-btn').remove(); // 上头条
    $('.js-room-fun-area').remove(); // 礼物区域
    $('.sdk-zhanqiMall').remove(); // 商城按钮
    $('.anchor-info-area').remove(); // 主播信息
    let styleTag = $('<style>\
    .no-play-down-ibox {display: none !important;} /* 客户端下载广告 */\
    #js-flash-layer {width: 100vw !important; height: 100vh !important;} /* 拉伸播放器 */\
    .live-room-content {padding: 0 !important;} /* 砍掉主容器左内间距 */\
    .sdk-zhanqiMall {display: none !important;} /* 商城按钮 */\
    .room-rank-ibox,.ranking-btn {display: none !important;} /* 排名展示和排名按钮 */\
    </style>')
    $('html > head').append(styleTag);
  }
  
  switch(location.host){
    case 'www.zhanqi.tv':
    case 'zhanqi.tv':
      zhanqi(); break;
  }
});
