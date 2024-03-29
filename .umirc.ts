import { defineConfig } from 'dumi';

let BaseUrl = ''
export default defineConfig({
  mode: 'site', // site: 站点模式（导航头 + 左侧菜单 + 右侧内容）。 doc：文档
  title: 'kely UI',
  favicon: '/images/myui.png',
  logo: '/myui.png', 
  outputPath: 'docs-dist',
  description: '自定义前端组件',
  // more config: https://d.umijs.org/config
});
 