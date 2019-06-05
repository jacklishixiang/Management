<template>
	<div class="col-lg-12">
		<div class="col-lg-12">
			<div v-for="(value,key,index) in object">
				<div>{{index}}.{{key}}:{{value}}</div>
			</div>
			<button v-on:click.once="triggerLoadBlackListData()">下一步</button>
			<Countent :num="num" v-on:incrament="incrament" v-on:delcrament="delcrament"></Countent>
			<p>parent:{{num}}</p>
			<!--<div>{{$route.params.goodid}}</div>-->
		</div>
	</div>
</template>

<script>
import Countent from './Countent'
export default {
	data () {
		return {
			num:0,
			object: {
				name: '文本值',
		      	url: '链接',
		      	slogan: '属性'
			}
		}
	},
	components:{
		Countent
	},
	methods: {
		triggerLoadBlackListData:function(){
			alert('123132123')
		},
		incrament:function(){
			this.num++;
		},
		delcrament:function(){
			if(this.num <=0){
			}else{
				this.num--;
			}
		}
	}
}
</script>

<style>
</style>