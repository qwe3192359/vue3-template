import { createWebHistory, createRouter } from "vue-router";

// 1.路由配置的公共路由
// 2.路由配置的且需要从后台拿到权限判断是否能访问的动态路由
// 3.从后台配置获取到的路由，增加到路由里
// 路由参数

// 匹配views里面所有的.vue文件
const modules = import.meta.glob("../pages/**/*.vue");
console.log(modules);
for (const path in modules) {
  console.log(path);
  console.log(path.split("pages/"));
  const dir = path.split("pages/")[1].split(".vue")[0];
  console.log(dir);
}

const routes = [
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/404",
    component: () => import("../views/error/404.vue"),
  },
  {
    path: "",
    component: () => import("../views/Login.vue"),
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
