<template>
    <div class="m-tabbar">
        <slot></slot>
    </div>
</template>

<script>
    import mTabbarItem from './tabbar-item';
    export default {
        props: ['value'],
        computed:{
            value(){
                return this.$route.matched[0].name
            }
        }
    }
</script>

<style lang="less">
   .m-tabbar{
       display:flex;
       flex-direction:row;
       position:fixed;
       bottom:0;
       left:0;
       right:0;
       width:100%;
       overflow:hidden;
       height:100px;
       background:#fff;
       border-top:1px solid #e4e4e4;
   }
</style>