<template>
    <div class="m-list">
        <h1>Photo List</h1>
        <ul>
            <li v-for="post in displayList"></li>
        </ul>
    </div>
</template>

<script>
    import store from '../store'

    function fetchListData(store){
        return store.dispatch('getPostList', {
            num: [store.state.route.params.num]
        })
    }
    export default {
        name: 'm-list',
        computed: {
            postList (){
                return store.state.postList
            }
        },
        data() {
            return {
                displayList: []
            }
        },
        beforeMount () {
            fetchListData(store).then(function (){
                console.log(this)
            })
        }

    }
</script>