<template>
    <div id="app">
        <header class="m-header">
            <h1>媳妇当车模</h1>
        </header>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        computed: {
        }
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    body{
        background: #eef2f5;
        color: #4c5357;
    }
    .m-header{
        background-color: #282E34;
        height: 60px;
        margin: 0 0 25px;
    }
    .m-header h1{
        font-size: 22px;
        font-weight: normal;
        color: #fff;
        line-height: 60px;
        text-align: center;
    }
</style>