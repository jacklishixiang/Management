<template>
 <!-- Page Content -->
<div id="page-content-wrapper" style="height: 100%; overflow: hidden;">
	
	<div class="btn_cl modify_btn">  
      <!-- <button type="button" class="hamburger is-closed animated fadeInLeft hidden-lg bad_button" data-toggle="offcanvas">
        <span class="hamb-top"></span>
        <span class="hamb-middle"></span>
        <span class="hamb-bottom"></span>
      </button> -->
	  <div class="loginimg">
		  <img src="../../static/images/famou.png" />
		  <span>宅小祥</span>
	  </div>
	  <div class="">
		  <div>
			  <i></i>
			  <span>退出</span>
		  </div>
	  </div>
  	</div>
  	<!--<include src="public/top.html"></include>-->

  	<div class="container_box" style="height: 100%; margin-top: 20px;">
     	<div class="colclass_row" id="colclass_row">
		    <router-view/>
		</div>
    </div>
</div>
<!-- /#page-content-wrapper -->
</template>

<script>
</script>

<style scoped>
.loginimg{
	width: 120px;
    float: right;
    line-height: 65px;
	cursor: pointer;
}
.loginimg img{
	width: 45px;
	height: 45px;
	border-radius: 50%;
	display: inline-block;
	overflow: hidden;
	float: left;
	margin-top: 10px;
	margin-right: 10px;
}
.loginimg span{
	width: 60px;
	display: inline-block;
	color: #fff;
    font-weight: bold;
	overflow: hidden;
	text-overflow:ellipsis;
	-o-text-overflow:ellipsis;
	white-space:nowrap;
}
</style>