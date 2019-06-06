<template>
	<div>
		<div class="middle-box text-center loginscreen  animated fadeInDown">
			<div>
				<div class="famoushiLog">
					<img src="../../static/images/famou.png" />
				</div>
				
				
				<ul id="myTab" class="nav nav-tabs">
	                <li class="active">
	                    <a href="#phone" data-toggle="tab">客户注册</a>
	                </li>
	                <li><a href="#lushi" data-toggle="tab">律师注册</a></li>
				</ul>
				
				<div class="tab-content">
					<div class="tab-pane fade in active" id="phone">
						<p style="margin:15px 0px">请填写注册信息</p>
						<form class="m-t" id="phoneRegisterForm" role="form">
							<fieldset>
								<div class="form-group industry_type">
									<input type="text" class="form-control" name="firstname" placeholder="姓名" required="">
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<input type="text" class="form-control" name="city" placeholder="所在地区" required="">
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<input type="text" class="form-control" name="phone_phone" placeholder="手机号" required="">
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<input :type="showligthone ? 'password':'text'" class="form-control industry_input" id="password_phone" name="password_phone" placeholder="输入密码 (密码长度8-16字符之间)" required="">
									<a class="show_click" v-if="showligthone == true" @click="show_click"><img src="../../static/images/so.png" /></a>
									<a class="hide_click" v-else="showligthone == false" @click="show_click"><img src="../../static/images/Invisible.png" /></a>
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<input :type="showligthtwo ? 'password':'text'" class="form-control industry_input" name="password_phone_confirm" placeholder="确认密码 (密码长度8-16字符之间)" required="">
									<a class="show_click" v-if="showligthtwo == true" @click="show_clickTwo"><img src="../../static/images/so.png" /></a>
									<a class="hide_click" v-else="showligthtwo == false" @click="show_clickTwo"><img src="../../static/images/Invisible.png" /></a>
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<input type="email" class="form-control" name="email_phone" placeholder="请输入邮箱" required="">
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<input type="hidden" name="randomCode">
									<div class="code">
										<input type="text" class="form-control" name="autCode" placeholder="请输入手机验证码" required=""> &nbsp;
										<button type="button" :disabled="disabled" style="width: 140px;" :class="validCode ? 'btn btn-primary msgs':'btn btn-primary msgs msgs1'" @click="sendSMs">{{codetion}}</button>
									</div>
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<div class="uplod" @click="uplod">
										<span class="avatar">
				                            <span class="default">
				                                <img src="../../static/images/famou.png">
				                            </span>
				                        </span>
				                        <span class="info"><p class="click">点击上传</p></span>
	                        			<input type="file" id="upLogo" @change="uploadLogo" style="display: none;">
	                        		</div>
	                        		<label class="better_lable"></label>
								</div>
								<button class="btn btn-primary block full-width m-b" @click="phoneRegisterForm">注册</button>
		
								<p class="text-muted text-center method">
									<a @click="login_in">已有帐号？立即登录</a>
								</p>
							</fieldset>
						</form>
					</div>
					
					<div class="tab-pane fade" id="lushi">
						<p style="margin:15px 0px">请填写注册信息</p>
					</div>
					
				</div>
				
			</div>
		</div>
	</div>
</template>

<style scoped>
@import "../../static/css/animate.css";
@import "../../static/css/style.min.css";
</style>

<script>
	import validate from '../../static/js/validate/jquery.validate.min.js'
	import messages_zh from '../../static/js/validate/messages_zh.min.js'
	import methodyz from '../../static/js/validate/method.js'
	import "../../static/css/register.css";
	export default {
		data() {
			return {
				showligthone:true,
				showligthtwo:true,
				validCode:true,
				codetion:'获取验证码',
				disabled:false
			}
		},
		methods: {
			login_in() {
				this.$router.push('/login');
			},
			phoneRegisterForm() {
				phoneRegisterForm('#phoneRegisterForm');
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
			uplod(){
				$("#upLogo").trigger("click");
			},
			uploadLogo(){
				var uploadfile = $("#upLogo").get(0).files[0];
				var imgUrl = window.URL.createObjectURL(uploadfile)
				$('.default').html('<img src="'+imgUrl+'"/>')
			}
		}
	}

	function phoneRegisterForm(id) {
		$(id).validate({
			rules: {
				firstname:{
					required: true,
				},
				city:{
					required: true,
				},
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
				email_phone: {
					required: true,//必填
					email: false,
					isCheckEmail: true,
				},
				autCode: {
					required: true,//必填
				}
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
            　　			},
                email_phone:{
                   isCheckEmail:"请输入正确的电子邮件",
                   remote: "该邮箱已被注册使用",
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
		})
	}
	
	
</script>
