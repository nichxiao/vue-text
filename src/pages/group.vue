<template>
	<div>
		<m-header title="小组" fixed>
			<a href="javascript:;" slot="right"><img src="../assets/images/search-active.png" class="m-icon-img margin-right-10" alt=""></a>
			<a href="javascript:;" slot="right"><img src="../assets/images/comments-active.png" class="m-icon-img" alt=""></a>
		</m-header>
	</div>
</template>

<script>
	import mHeader from '../components/header';
	export default {
		name: 'gruop',
		components:{
			mHeader
		}
	}
</script>