<template>
  <div class="container-fluid cont_fluid" style="height: calc(100% - 10px);">
  	<div class="col-lg-12 wencontent_bottom">
  		<div class="alert alert-warning wentcont_alert">
  			<ul id="marquee" class="marquee">
  				<li>
            <i class="fa fa-info-circle text-warning" style="padding-right: 5px;"></i>
            <span>温馨提示：</span>
            <span>{{qwe}}</span>
        	</li>
  			</ul>
  		</div>
  	</div>
  	
  	<div class="col-lg-12">
  		<div>
  			<button @click="show = !show">点我</button>
  			<transition  name="fade">
  				<p v-show="show" v-bind:style="styleobj">动画示例</p>
  			</transition>
  		</div>
  	</div>
  </div>
</template>
<script>
import "../../static/css/jquery.marquee.min.css";
import marq from '../../static/js/jquery.marquee.min.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      qwe:'为方便用户了解通话内容，完整录音附带语音转文字的翻译内容，受通信信号、背景音、噪音等因素的影响，翻译内容仅供参考，以录音内容为准，重要号码来电，建议听录音内容。',
      show:false,
      styleobj:{
      	fontSize:'30px',
        color:'red'
      }
    }
  },
  created:function(){
		marqueePost('#marquee')
	}
}

function marqueePost(id){
	marq.jQuery.Marquee(function(){
		jQuery(id).marquee({
			yScroll: "top",   
			showSpeed: 850, 
			scrollSpeed: 30,
			pauseSpeed: 3000,
			pauseOnHover: false,
			loop: -1
		})
	})
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
