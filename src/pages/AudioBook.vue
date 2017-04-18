<template>
	<div>
		<m-header title="书影城" bg>
		    <a href="javascript:;" slot="left">
		    	<img class="m-icon-img" src="../assets/images/arrow-left.png"/>
		    </a>
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