<template>
 <!-- Page Content -->
<div id="page-content-wrapper" style="height: 100%; overflow: hidden;">
	
	<div class="btn_cl modify_btn">  
      <!-- <button type="button" class="hamburger is-closed animated fadeInLeft hidden-lg bad_button" data-toggle="offcanvas">
        <span class="hamb-top"></span>
        <span class="hamb-middle"></span>
        <span class="hamb-bottom"></span>
      </button> -->
	  <div class="loginimg" @click="show = !show">
		  <img src="../../static/images/famou.png" />
		  <span>宅小祥</span>
	  </div>
	  <transition  name="fade">
	  <div class="signout"  v-show="show">
			<div class="triangle_border_up"></div>
		  	<div class="sign_out_i">
				<i class="fa fa-sign-out" style="padding-right: 5px;"></i>
				<span>退出</span>
			</div>
	  </div>
	  </transition>
  	</div>
  	<!--<include src="public/top.html"></include>-->

  	<div class="container_box" style="height: 100%; margin-top: 10px;">
     	<div class="colclass_row" id="colclass_row">
		    <router-view/>
		</div>
    </div>
</div>
<!-- /#page-content-wrapper -->
</template>

<script>
export default{
	data(){
		return{
			show:false,
		}
	}
}
</script>

<style scoped>
.loginimg{
	width: 120px;
    float: right;
	cursor: pointer;
}
.loginimg img{
	width: 35px;
	height: 35px;
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
	line-height: 55px;
}
.signout{
	position: absolute;
    right: 0;
    top: 55px;
    width: 120px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.18);
    z-index: 1111;
}
.sign_out_i{
	padding: 15px;
	cursor: pointer;
	color: #666;
}
/*向上*/
.triangle_border_up{
    width: 0;
    height: 0;
    border-width: 0 8px 10px;
    border-style: solid;
    border-color: transparent transparent #fff;
    position: absolute;
    top: -10px;
    right: 50%;
    left: 50%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>