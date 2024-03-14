import { createWebHistory, createRouter } from 'vue-router'

// 匹配views里面所有的.vue文件
const modules = import.meta.glob('../pages/**/*.vue')

console.log(modules)

for (const path in modules) {
    console.log(path)
    console.log(path.split('pages/'))
    const dir = path.split('pages/')[1].split('.vue')[0];
    console.log(dir)
}


const routes = [
    { path: '/login', component: import('../Login.vue') },
    // { path: '/about', component: About },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})


export default router;