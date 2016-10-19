<template>
    <li class="post" :class="item.title ? '' : 'prefix'">
        <router-link :to="'/detail/' + encodeURIComponent(item.link).replace('/\./', '|')" tag="div">
            <figure :style="'background-image:url(' + item.cover + ');'" class="cover">
            </figure>
            <p class="title">{{ item.title }}</p>
            <span class="classify">{{ item.classify.replace('论坛', '')}}</span>
        </router-link>
    </li>
</template>

<script type="text/babel">
    export default {
        name: 'post',
        props: ['item']
    }
</script>

<style>
    .post{
        width: 220px;
        overflow: hidden;
        vertical-align: top;
        box-shadow: 0 2px 0 #D9E1E7;
        border-radius: 3px;
        background: #fff;
        margin-bottom: 4%;
        -webkit-transition: -webkit-transform .5s ease;
        transition: transform .5s ease;
        position: relative;
    }
    .post:hover{
        -webkit-transform: translate3d(0, -6px, 0);
        transform: translate3d(0, -6px, 0);
        cursor: pointer;
    }
    .post.prefix{
        height: 0;
        overflow: hidden;
    }
    .post .classify{
        display: inline-block;
        margin: 10px;
        padding: 0 10px;
        border-radius: 4px;
        height: 28px;
        line-height: 28px;
        background: #EAF0F4;
        color: #8597A3;
        font-size: 13px;
    }
    .post .title{
        padding: 10px;
        line-height: 1.4;
        border-bottom: dashed 1px #DBE0E4;
        height: 38px;
    }
    .cover{
        padding-bottom: 75%;
        background-color: #D9E1E7;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
    }
</style>
