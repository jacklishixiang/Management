<template>
	<div>
		<div class="telephone" id="telephone">
			<a href="javascript:;" @click="custosever">
				<div class="img_duilog">
					<img  src="../../static/images/duihua.png"/>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
export default{
	name:'Robot',
	data(){
		return{
			
		}
	},
	methods:{
		custosever(){
			const {href} = this.$router.resolve({
				name: "Robot",
			});
			openWebChat(href)
		},
		webchat_voice_open(){
			console.log(4561651)
		}
	}
}

var webchat_index;//聊天对话框索引对象
function openWebChat(url) {
	if(webchat_index!=undefined && webchat_index!=null){
		layer.restore(webchat_index);
	}else{
		webchat_index=layer.open({
			type: 2,
			title: '法谋仕AI客服',
			shadeClose: true,
			shade: 0,
			maxmin: true,
			area: ['780px', '60%'],
			offset: 'rb',
			resize: false,
			content: url,
			min:function () {
				$(".layui-layer-max").show();
			},
			restore:function () {
				$(".layui-layer-max").hide();
			},
			cancel: function(){
				webchat_index=undefined;
			}
		});
	}
	$('.layui-layer-setwin').addClass("webchat_boxcontent");
	var voice=$('<a href="javascript:;" class="webchat_voice_open"><img src="../../static/images/talk/voice.png" width="100%"></a><a class="webchat_voice_out" id="webchat_voice_out" href="javascript:;" style="display:none;"><img src="../../static/images/talk/voice-not.png" width="100%"></a>');
	if($('.webchat_boxcontent').find('a').is('.webchat_voice_open')|| $('.webchat_boxcontent').find('a').is('.webchat_voice_out')){
	}else{
		$(".webchat_boxcontent").css("right","0px");
		$(".webchat_boxcontent").prepend(voice);
		$(".layui-layer-close").removeClass('layui-layer-ico');
		$(".webchat_boxcontent").find(".layui-layer-close").css({"width":"15px","height":"15px","margin-right":"15px"});
		$(".webchat_boxcontent").find(".layui-layer-close").append('<img src="../../static/images/talk/close_layer.png" style="width:17px;"/>');
	}
	$(".layui-layer-max").hide();
	screenFuc();
	
	$('.webchat_voice_open').on('click',function(){
		$(this).hide();
		$(this).parents('.webchat_boxcontent').find('.webchat_voice_out').show();
	})
	
	$('.webchat_voice_open').on('click',function(){
		$(this).hide();
		$(this).parents('.webchat_boxcontent').find('.webchat_voice_out').show();
	})
	
	$('.webchat_voice_out').on('click',function(){
		$(this).hide();
		$(this).parents('.webchat_boxcontent').find('.webchat_voice_open').show();
	})
}
/*声音开启*/
// function webchat_voice_open(open) {
// 	console.log(23123123)
// 	$(open).hide();
// 	$(open).parents('.webchat_boxcontent').find('.webchat_voice_out').show();
// }
/*声音关闭*/
// function webchat_voice_out(out) {
// 	$(out).hide();
// 	$(out).parents('.webchat_boxcontent').find('.webchat_voice_open').show();
// }
/*浏览器缩小的时候隐藏最小化按钮*/
function screenFuc(){
	var winWidth = $(window).innerWidth();
	var winHeight=$(window).innerHeight();
	console.log(winHeight)
	if (winWidth <= 768) {
		$(".layui-layer-min").hide();
	} else {
		$(".layui-layer-min").show();
	}
	if(winWidth<=992 && winHeight<=808){
		$(".explain").hide();
	}else{
		$(".explain").show();
	}
}
(window.onresize = function () {
	screenFuc();
})();
</script>

<style scoped>
@import "../../static/css/custosever.css";
</style>
