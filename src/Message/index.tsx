import React, { useState, useEffect } from 'react';
import './index.less';

type NoticeType = 'info' | 'success' | 'error' | 'warning';
interface MessageProps {
  content?: string;
  duration?: number;
}

// let wrapDiv = document.createElement("div");
// document.body && document.body.appendChild(wrapDiv); //挂body上
let i = 0;
const notice = (content: string, type?: NoticeType) => {
  setTimeout(() => {
    console.log();
    let wrap = document.createElement('div');
    wrap.style.color = '#fff';
    wrap.style.marginTop = `${i * 65}px`; //每增加一个就增加一些上边距
    i++;
    if (wrap) {
      document.body && document.body.appendChild(wrap); //挂body上
      setTimeout(() => {
        wrap.className = `message show ${type} ${Math.random()}`;
        wrap.innerText = content.content;
      }, 1);
    }
    setTimeout(() => {
      if (wrap) {
        document.body && document.body.removeChild(wrap); //卸载body上
        i--;
      }
    }, 4000);
  }, 0);
};

export default {
  info(content: string) {
    return notice(content, 'info');
  },
  warning(content: string) {
    return notice(content, 'warning');
  },
  error(content: string) {
    return notice(content, 'error');
  },
  success(content: string) {
    return notice(content, 'success');
  },
};
