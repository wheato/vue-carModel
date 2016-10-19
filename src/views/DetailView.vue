<template>
    <div class="m-detail">
        <h3>{{ detailData.title }}</h3>
        <ul class="img-list">
            <li v-for="image in detailData.images" class="item">
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
                detailData: {}
            }
        },
        computed() {

        },
        beforeMount() {

            fetchDetailData(this.$store).then(() => {
                this.detailData = this.$store.state.detailData
            })

        }
    }
</script>

<style>
    .m-detail{
        width: 730px;
        padding: 0 35px;
        margin: 0 auto;
        background: #fff;
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }
    .m-detail h3{
        padding: 30px 0;
        font-size: 20px;
    }
    .img-list{
        list-style: none;
    }
    .img-list .item{
        margin-bottom: 20px;
    }
    .img-list .item img{
        width: 100%;
        display: block;
    }
</style>