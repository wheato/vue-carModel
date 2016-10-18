<template>
    <div class="m-detail">
        <ul class="img-list">
            <li v-for="image in images" class="item">
                <img v-bind:src="image" alt="">
            </li>
        </ul>
    </div>
</template>

<script type="text/babel">

    function fetchDetailData(store){
        return store.dispatch('getDetail', {
            link: [store.state.route.params.link]
        })
    }

    export default {
        name: 'm-detail',
        data() {
            return {
                images: []
            }
        },
        computed() {

        },
        beforeMount() {

            fetchDetailData(this.$store).then(() => {
                this.images = this.$store.state.imageList
            })

        }
    }
</script>

<style>
    .m-detail{
        width: 800px;
        margin: 0 auto;
    }
    .img-list{
        list-style: none;
        padding: 0 20px;
    }
    .img-list .item{
        margin-bottom: 20px;
    }
    .img-list .item img{
        width: 100%;
        display: block;
    }
</style>