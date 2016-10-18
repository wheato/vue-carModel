<template>
    <div class="m-list">
        <ul class="post-list">
            <li v-for="(item, index) in displayList" class="post" v-bind:index="index">
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
                displayList: []
            }
        },
        beforeMount () {
            fetchListData(this.$store).then(() => {
                this.displayList = this.$store.state.postList
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