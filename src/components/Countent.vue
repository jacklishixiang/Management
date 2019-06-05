<template>
	<div class="col-lg-12">
		<button @click="incrament">+</button>
		<button @click="delcrament">-</button>
		<p><span>{{num}}</span></p>
		<router-link to="/anter/title">商品列表</router-link>
		<div>
			<router-view></router-view>
		</div>
		<button @click="jump">button - 跳转购物车页面</button>
	</div>
</template>

<script>
export default {
	props:["num"],
	data () {
		return{
//			num:0
		}
	},
	methods: {
		incrament:function(){
			this.$emit('incrament');
		},
		delcrament:function(){
			this.$emit('delcrament');
		},
		jump(){
			this.$router.push({path:'/image?goodid=123'});
			//this.$router.go(-2)
		}
	}
}
</script>

<style>
</style>