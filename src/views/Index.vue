<template>
    <div class="index">
        <TabBar :data="tabbarData" />
        <router-view></router-view>
    </div>
</template>


<script>
import TabBar from '../components/Basal/TabBar';

export default {
    name: 'Index',
    data() {
        return {
            tabbarData: [
                { title: '外卖', icon: 'home', path: '/home' },
                { title: '订单', icon: 'align-justify', path: '/order' },
                { title: '我的', icon: 'user', path: '/me' }
            ]
        };
    },
    components: {
        TabBar
    }
};
</script>

<style>
.index {
    width: 100%;
    height: calc(100% - 45px);
}
</style>
