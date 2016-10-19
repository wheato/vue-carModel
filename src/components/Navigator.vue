<template>
    <div class="m-navigator">
        <ul class="nav-list">
            <router-link v-for="item in navList" v-bind:class="item.className" :to="'/' + item.num" tag="li">
                {{item.num}}
            </router-link>
        </ul>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'm-navigator',
        props: ['total', 'current'],
        computed: {
            navList(){
                let nav_arr = [];
                let current = Number.parseInt(this.current);
                let total = Number.parseInt(this.total);
                let leftGap = current - 1;
                let rightGap = total - current;

                //计算左边页数
                if(leftGap > 3){
                    nav_arr.push({
                        'num': 1,
                        'className': 'nav-item'
                    });
                    nav_arr.push({
                        'num': '...',
                        'className': 'ellipsis'
                    });

                    if(rightGap > 3){
                        nav_arr.push({
                            'num': current - 1,
                            'className': 'nav-item'
                        });
                    } else {
                        for(let i = 4 - rightGap; i > 0; i--){
                            let className = 'nav-item';
                            console.log(current - i);
                            nav_arr.push({
                                'num': current - i,
                                className
                            });
                        }
                    }
                    nav_arr.push({
                        'num': current,
                        'className': 'nav-item current'
                    });
                } else {
                    for(let i = 0; i <= leftGap; i++){
                        console.log((i + 1) == current);
                        let className = (i + 1) == current ? 'nav-item current' : 'nav-item';
                        nav_arr.push({
                            'num': i + 1,
                            className
                        });
                    }
                }

                leftGap = leftGap > 3 ? 3 : leftGap;

                //计算右边页数
                if(rightGap > 3){
                    for(let i = 1; i < 5 - leftGap; i++){
                        let className = 'nav-item';
                        nav_arr.push({
                            'num': i + current,
                            className
                        });
                    }
                    nav_arr.push({
                        'num': '...',
                        'className': 'ellipsis'
                    });
                    nav_arr.push({
                        'num': total,
                        'className': 'nav-item'
                    });

                } else {
                    for(let i = 1; i <= rightGap; i++){
                        let className = 'nav-item';
                        nav_arr.push({
                            'num': i + current,
                            className
                        });
                    }
                }
                return nav_arr;
            }
        }
    }
</script>

<style>
    .m-navigator{
        text-align: center;
        padding: 30px 0 40px;
    }
    .m-navigator .nav-list{
        list-style: none;
        font-size: 0;
    }
    .m-navigator .nav-list .nav-item, .m-navigator .nav-list .ellipsis{
        display: inline-block;
        width: 32px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        margin: 0 10px 0 0;
    }
    .m-navigator .nav-list .nav-item{
        -webkit-border-radius: 2px;
        border-radius: 2px;
        cursor: pointer;
        border: 1px solid #282E34;
    }
    .m-navigator .nav-list .nav-item:hover, .m-navigator .nav-list .nav-item.current{
        background-color: #282E34;
        color: #fff;
    }
    .m-navigator .nav-list .ellipsis{
        width: auto;
    }
    .m-navigator .nav-list .nav-item:last-child{
        margin: 0;
    }
</style>