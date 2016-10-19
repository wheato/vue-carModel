<template>
    <li class="post">
        <router-link :to="'/detail/' + encodeURIComponent(item.link).replace('/\./', '|')" tag="div">
            <figure>
                <img v-bind:src="item.cover" alt="" class="cover"/>
            </figure>
            <p class="title">{{ item.title }}</p>
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
    }
    .post:hover{
        -webkit-transform: translate3d(0, -6px, 0);
        transform: translate3d(0, -6px, 0);
        cursor: pointer;
    }
    .post .title{
        padding: 5px;
        line-height: 1.4;
    }
    .cover{
        display: block;
        width: 100%;
    }
</style>
