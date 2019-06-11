<template>
  <div v-if="path !='/login'&& path !='/register'&& path !='/toForgetPassword'&& path !='/robot'" id="wrapper" class="toggled_one" style="height: calc(100% - 10px); padding-top: 60px;">
		<div class="overlay" data-toggle="offcanvas"></div>
		<div id="app">
			<Top></Top>
	    <Left :href="href" v-on:clickback="clickback"></Left>
			<Custosever></Custosever>
	  </div>
	</div>
	<div v-else-if="path ==='/login' || path ==='/register' || path ==='/toForgetPassword'">
		<router-view/>
	</div>
	<div v-else-if="path ==='/robot'">
		<router-view/>
	</div>
</template>


<script>
import Top from '@/components/top'
import Left from '@/components/left'
import Custosever from '@/components/custosever'
export default {
  name: 'App',
  data(){
  	return{
  		href:'HelloWorld',
  		path:''
  	}
  },
  components: { Top,Left,Custosever },
  mounted(){//页面加载完成时
    this.href = this.$route.matched[0].name;
    this.path = this.$route.path;
	},
  methods:{
  	clickback(){
  		this.href = this.$route.matched[0].name
  	}
  },
  watch:{
  	$route(to,from){
        this.path = to.path
    }
  }
}
</script>

<style>
</style>
