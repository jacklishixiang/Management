<template>
<!-- Sidebar -->
    <nav class="navbar navbar-inverse navbar-fixed-top modify_nav" id="sidebar-wrapper" role="navigation">
        <ul class="nav sidebar-nav">
            <li class="sidebar-brand">
                <a>巡回大律师平台</a>
            </li>
            <!--<li @click="onClickTabBarItem(0)" v-bind:class="{activeLi: actives[0]}">
                <router-link to="/" replace><i class="fa fa-home" style="padding-right: 10px;"></i>首页</router-link>
            </li>
            <li @click="onClickTabBarItem(1)" v-bind:class="{activeLi: actives[1]}">
                <router-link to="/anter" replace><i class="fa fa-cog" style="padding-right: 10px;"></i>个性化设置</router-link>
            </li>-->
            <!--<li :class=" isTop  ? 'activeLi':''" v-for="item in nav"  @click="didClickedItem(0)">
            	<router-link :to="item.path"><i :class="item.classicon" style="padding-right: 10px;"></i>{{item.title}}</router-link>
            </li>-->
            <li @click="clickback" :class="href == 'HelloWorld' ? 'activeLi':''">
            	<router-link to="/"><i class="fa fa-home" style="padding-right: 10px;"></i>首页</router-link>
            </li>
            <li @click="clickback" :class="href == 'Anterbox' ? 'activeLi':''">
            	<router-link to="/anter"><i class="fa fa-cog" style="padding-right: 10px;"></i>个性化设置</router-link>
            </li>
        </ul>
    </nav>
<!-- /#sidebar-wrapper -->
</template>

<script>
export default{
	props:['href'],
	methods:{
		clickback(){
			this.$emit('clickback')
		}
  	}
}
</script>

<style>
</style>