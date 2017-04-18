<template>
	<header class="m-header" :class="{'is-bg':bg,'is-fixed':fixed}">
		<div class="m-header-button is-left">
			<slot name="left"></slot>
        </div>
			<h1 class="m-header-title" v-text="title"></h1>
		<div class="m-header-button is-right">
			<slot name="right"></slot>
		</div>
		
	</header>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
			    default:''
			},
			bg:{
				type:Boolean,
				default:false
			},
			fixed:{
				type:Boolean,
				default:false
			}
		}
	}
</script>
<style lang="less">
	@import "../assets/less/var.less";
.m-header{
	display:flex;
	align-items:center;
    font-size:30px;
	height:100px;
	padding:0 10px;
	background:#fff;
	color:@headerDefaultColor;
	border-bottom:1px solid #eee;
	a{
	    color:@headerDefaultColor;
	}
	.m-header-button{
	     width:90px;
	     align-items:stretch;
	     &.is-left{
	         text-align:left;
	     }
	     &.is-right{
	         text-align:right;
	     }
         .m-icon-img{
              width:40px;
              height:40px;
         }
         .margin-right-10{
              margin-right:10px;
         }
	}
	.m-header-title{
	     flex:1;
	     text-align:center;
	     text-overflow:ellipsis;
	     font-size: 36px;
	     white-space:nowrap;
	     overflow:hidden;
	}
	&.is-bg{
	     background:@headerBg;
	     color:#fff;
	     a{color:#fff};
	     .m-header-title{
	         color:#fff;
	     }
	}
	&.is-fixed{
	     position:fixed;
	     left:0;
	     right:0;
	     top:0;
	     z-index:9;
	}
}
</style>
