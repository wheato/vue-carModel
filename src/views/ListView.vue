<template>
    <div class="m-list">
        <ul class="post-list">
            <li v-for="(item, index) in displayData.list" class="post" v-bind:index="index">
                <router-link :to="'/detail/' + encodeURIComponent(item.link).replace('/\./', '|')" tag="div">
                    <figure>
                        <img v-bind:src="item.cover" alt="" class="cover"/>
                    </figure>
                    <p class="title">{{ item.title }}</p>
                </router-link>

            </li>
        </ul>
    </div>
</template>

<script type="text/babel">

    function fetchListData(store){
        return store.dispatch('getPostList', {
            num: [store.state.route.params.num]
        })
    }
    export default {
        name: 'm-list',
        computed: {
            postList (){
                return this.$store.state.postList
            }
        },
        data() {
            return {
                displayData: {}
            }
        },
        beforeMount () {
            fetchListData(this.$store).then(() => {
                this.displayData = this.$store.state.postList
            })
        }
    }
</script>

<style>
    .m-list{
        width: 800px;
        margin: 0 auto;
        font-size: 14px;
    }
    .post-list {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        justify-content: space-between;
    }
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