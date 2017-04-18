<template>
	<div>
		<m-header title="豆瓣App" :bg="true">
		    <a href="javascript:;" slot="left"><img class="m-icon-img" src="../assets/images/arrow-left.png"/></a>
            <a href="javascript:;" slot="right">分享</a>			
		</m-header>
	</div>
</template>

<script>
   import mHeader from '../components/header';
	export default {
		name: 'index',
		components:{
			mHeader
		}
	}
</script>

<style lang="less">
	.is-fixed ~ .page-content{
		padding-top: 50px;
	}
	.slide01{
		background-color: #41b883;
		text-align: center;
		line-height: 200px;
		font-size: 30px;
		color:#fff;
	}
	.slide02{
    background: #364a60;
    text-align: center;
    line-height: 200px;
    font-size: 30px;
    color: #fff;
	}
	.slide03{
	    background: #ea6f5a;
	    text-align: center;
	    line-height: 200px;
	    font-size: 30px;
	    color: #fff;
	}
</style>