<template>
	<div>
	    <div class="middle-box text-center loginscreen  animated fadeInDown">
	        <div>
	            <div class="famoushiLog">
	                <img src="../../static/images/famou.png" />
	            </div>
	            <h4>全国律师同盟系统</h4>
	            <form class="m-t" role="form" id="toForgerPassword">
	                <div class="form-group industry_type">
	                	<input type="text" class="form-control" name="phone_phone" placeholder="手机号" required="">
	                	<label class="better_lable"></label>
	                </div>
					<div class="form-group industry_type">
						<div class="code">
							<input type="text" class="form-control" name="autCode" placeholder="请输入手机验证码" required=""> &nbsp;
							<button type="button" :disabled="disabled" style="width: 140px;" :class="validCode ? 'btn btn-primary msgs':'btn btn-primary msgs msgs1'" @click="sendSMs">{{codetion}}</button>
						</div>
						<label class="better_lable"></label>
					</div>
	                <div class="form-group industry_type">
	                	<input :type="showligthone ? 'password':'text'" class="form-control industry_input" id="password_phone" name="password_phone" placeholder="新密码" required="">
	                	<a class="show_click" v-if="showligthone == true" @click="show_click"><img src="../../static/images/so.png" /></a>
	                	<a class="hide_click" v-else="showligthone == false" @click="show_click"><img src="../../static/images/Invisible.png" /></a>
	                	<label class="better_lable"></label>
	                </div>
	                <div class="form-group industry_type">
	                	<input :type="showligthtwo ? 'password':'text'" class="form-control industry_input" name="password_phone_confirm" placeholder="确认密码" required="">
	                	<a class="show_click" v-if="showligthtwo == true" @click="show_clickTwo"><img src="../../static/images/so.png" /></a>
	                	<a class="hide_click" v-else="showligthtwo == false" @click="show_clickTwo"><img src="../../static/images/Invisible.png" /></a>
	                	<label class="better_lable"></label>
	                </div>
					
	                <button class="btn btn-primary block full-width m-b" @click="toForgerPassword">重置密码</button>
	                <p class="text-muted text-center method"><a @click="loginreturn">已经有账号?登录</a></p>
	
	            </form>
	        </div>
	    </div>
	</div>
</template>

<script>
import '../../static/js/validate/jquery.validate.min.js'
import '../../static/js/validate/messages_zh.min.js'
import '../../static/js/validate/method.js'
import "../../static/css/login.css";

export default {
	data(){
		return{
			showligthone:true,
			showligthtwo:true,
			validCode:true,
			codetion:'获取验证码',
			disabled:false,
		}
	},
	methods:{
		loginreturn(){
			this.$router.push('/login');
		},
		show_click(){
			if(this.showligthone == true){
				this.showligthone = false
			}else{
				this.showligthone = true
			}
			
		},
		show_clickTwo(){
			if(this.showligthtwo == true){
				this.showligthtwo = false
			}else{
				this.showligthtwo = true
			}
		},
		sendSMs(){
			var time=60;
			var that = this;
			if(that.validCode == true){
				that.validCode = false;
//              	获取验证码
				that.disabled = true;
				var t=setInterval(function () {
					time--;
					that.codetion = time+"秒";
					if (time==0) {
						that.disabled = false;
						clearInterval(t);
						that.codetion = '重新获取';
						that.validCode = true;
					}
				},1000)
				
			}
		},
		toForgerPassword() {
			toForgerPassword('#toForgerPassword');
		},
	}
}

function toForgerPassword(id){
	$(id).validate({
		rules: {
			phone_phone: {　　 //要对应相对应的input中的name属性
				required: true,//必填
				isPhone: true
			},
			password_phone: {
				required: true,//必填
				rangelength: [8, 16],
				passwordtext:true
			},
			password_phone_confirm: {
				required: true,//必填
				rangelength: [8, 16],
				equalTo: "#password_phone",
				passwordtext:true
			},
		},
		messages: {
			phone_phone: {
				isPhone: "请填写正确的手机号码",
				remote: "该手机号已被注册使用",	　　
			},
			password_phone: {
		       rangelength:"密码长度应该在8-16个字符",
		       remote: "密码必须字母、数字混合组成",
		　　	},
		    password_phone_confirm: {
		       rangelength:"确认密码长度应该在6~16个字符",
		       equalTo: "两次密码输入不一致"
		　　	}
		},
		errorElement: "em",
		errorPlacement: function(error, element) { //指定错误信息位置
			var eidd = element.attr('name');
			if(eidd == "autCode") {
				error.appendTo(element.parent().parent().find('.better_lable'));
			} else {
				/*  error.insertAfter(element);*/
				error.appendTo(element.parent().find('.better_lable'));
			}
		},
	});
}
</script>

<style scoped>
@import "../../static/css/animate.css";
@import "../../static/css/style.min.css";
.famoushiLog{
	width: 100px;
	height: 100px;
	display: inline-block;
}
.famoushiLog img{
	width: 100%;
}
.middle-box{
	padding-top: 80px;
}
.method a{
	color: #999;
}
.method a:hover{
	color: #333;
}
</style>
