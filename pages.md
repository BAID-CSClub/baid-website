# 分页

> 使用vue-router@4完成分页



## 1. 首页

- 地址: /
- Name: Index
- Component: Index.vue

### 首页结构：
- 头图（红叶）
- 学校介绍
    - 理念
    - 环境
    - 师资
    - （浏览更多：指向【学校介绍】子页面）
- 新闻
    - 两条最新新闻
    - （浏览更多：指向【新闻】子页面）
- footer

## 2. 学校介绍

- 地址: /about
- Name: About
- Component: About.vue

## 3. 新闻

- 地址: /events
- Name: Events
- Component: Events.vue

## 4. 照片墙

- 地址: /gallery
- Name: Gallery
- Component: Gallery.vue

## 这些页面在哪里?
### 路由表位于 _/src/router.js_
### 路由页面位于 _/src/components_
