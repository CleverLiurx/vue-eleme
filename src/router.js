import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    // 活动的路由加claass
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: () => import('./views/Index.vue'),
            children: [
                {
                    path: '',
                    // 重定向
                    redirect: '/home'
                },
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('./views/Home/Home.vue')
                },
                {
                    path: '/order',
                    name: 'order',
                    component: () => import('./views/Orders/Order.vue')
                },
                {
                    path: '/me',
                    name: 'me',
                    component: () => import('./views/Me/Me.vue')
                },
                {
                    path: '/address',
                    name: 'address',
                    component: () => import('./views/Home/Address.vue')
                },
                {
                    path: '/city',
                    name: 'city',
                    component: () => import('./views/Home/City.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('./views/Home/Search.vue')
        },
        {
            path: '/shop',
            name: 'shop',
            component: () => import('./views/Shops/Shop.vue'),
            children: [
                {
                    path: '/goods',
                    name: 'goods',
                    component: () => import('./views/Shops/Goods.vue')
                },
                {
                    path: '/comments',
                    name: 'comments',
                    component: () => import('./views/Shops/Comments.vue')
                },
                {
                    path: '/seller',
                    name: 'seller',
                    component: () => import('./views/Shops/Seller.vue')
                }
            ]
        },
        {
            path: '/personalInfo',
            name: 'personalInfo',
            component: () => import('./views/Me/PersonalInfo.vue')
        },
        {
            path: '/setPwd',
            name: 'setPwd',
            component: () => import('./views/Me/SetPwd.vue')
        },
        {
            path: '/addAddress',
            name: 'addAddress',
            component: () => import('./views/Orders/AddAddress.vue')
        },
        {
            path: '/myAddress',
            name: 'myAddress',
            component: () => import('./views/Orders/MyAddress.vue')
        },
        {
            path: '/settlement',
            name: 'settlement',
            component: () => import('./views/Orders/Settlement.vue')
        },
        {
            path: '/remark',
            name: 'remark',
            component: () => import('./views/Orders/Remark.vue')
        },
        {
            path: '/pay',
            name: 'pay',
            component: () => import('./views/Orders/Pay.vue')
        },
        {
            path: '/orderInfo',
            name: 'orderInfo',
            component: () => import('./views/Orders/OrderInfo.vue')
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: () => import('./views/Welcome.vue')
        },
        {
            path: '/addComment',
            name: 'addComment',
            component: () => import('./views/Orders/AddComment.vue')
        }
    ]
});
// 设置路由守卫 -> 第一次打开 进入welcome页面  未登录进入login页面
router.beforeEach((to, from, next) => {
    const enterFlag = !!sessionStorage.enter_flag;
    if (to.path == '/welcome') {
        if (enterFlag) next('/home');
        else next();
    } else {
        if (enterFlag) {
            const isLogin = !!localStorage.ele_login;
            if (to.path == '/login') {
                next();
            } else {
                isLogin ? next() : next('/login');
            }
        } else {
            next('/welcome');
        }
    }
});

export default router;
