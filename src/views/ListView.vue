<template>
    <div class="m-list">
        <ul class="post-list">
            <ListItem v-for="item in displayData.list" :item="item">
            </ListItem>
        </ul>
        <Navigator :total="displayData.total" :current="displayData.current"></Navigator>
    </div>
</template>

<script type="text/babel">

    import ListItem from '../components/ListItem.vue'
    import Navigator from '../components/Navigator.vue'

    function fetchListData(store){
        return store.dispatch('getPostList', {
            num: [store.state.route.params.num]
        })
    }

    export default {
        name: 'm-list',
        components: {
            ListItem,
            Navigator
        },
        data() {
            return {
                displayData: {}
            }
        },
        computed: {
            num(){
                return this.$store.state.route.params.num || 1;
            }
        },
        beforeMount () {
            fetchListData(this.$store).then(() => {
                this.displayData = this.$store.state.postList;
            })
        },
        watch: {
            num (to, from){
                fetchListData(this.$store).then(() => {
                    this.displayData = this.$store.state.postList;
                })
            }
        }
    }
</script>

<style>
    .m-list{
        width: 1000px;
        margin: 0 auto;
        font-size: 14px;
    }
    .post-list {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        justify-content: space-between;
    }

</style>