<template>
	<div>
		<m-header title="我的" fixed>
			<a href="javascript:;" slot="right"><img class="m-icon-img margin-right-10" src="../assets/images/search-active.png"/></a>
			<a href="javascript:;" slot="right"><img class="m-icon-img" src="../assets/images/comments-active.png"/></a>
		</m-header>
	</div>
</template>

<script>
	import mHeader from '../components/header';
	export default {
		name: 'mine',
		components:{
			mHeader
		}
	}
</script>