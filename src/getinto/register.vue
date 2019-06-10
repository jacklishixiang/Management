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
									<div class="code">
										<input type="text" class="form-control" name="autCode" placeholder="请输入手机验证码" required=""> &nbsp;
										<button type="button" :disabled="disabled" style="width: 140px;" :class="validCode ? 'btn btn-primary msgs':'btn btn-primary msgs msgs1'" @click="sendSMs">{{codetion}}</button>
									</div>
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<div class="uplod" @click="uplod">
										<span class="avatar">
				                            <span class="default defaultimg">
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
						<form class="m-t" id="laywerRegisterForm" role="form">
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
									<input type="text" class="form-control" name="laywernum" placeholder="律师证号" required="">
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<select class="selectpicker" name="selectpicker" multiple>
										<template v-for="item in items">
											<option :value="item.value">{{item.name}}</option>
										</template>
									</select>
<!-- 									<input type="text" class="form-control tselectpicker" name="selectpicker" required=""> -->
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<input type="text" class="form-control" name="layweroffice" placeholder="所在事务所" required="">
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<input type="text" class="form-control" name="laywer_phone" placeholder="手机号" required="">
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<input :type="laywerfrist ? 'password':'text'" class="form-control industry_input" id="laywer_password" name="laywer_password" placeholder="输入密码 (密码长度8-16字符之间)" required="">
									<a class="show_click" v-if="laywerfrist == true" @click="laywer_click"><img src="../../static/images/so.png" /></a>
									<a class="hide_click" v-else="laywerfrist == false" @click="laywer_click"><img src="../../static/images/Invisible.png" /></a>
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<input :type="laywersecond ? 'password':'text'" class="form-control industry_input" name="laywer_password_confirm" placeholder="确认密码 (密码长度8-16字符之间)" required="">
									<a class="show_click" v-if="laywersecond == true" @click="laywer_clickTwo"><img src="../../static/images/so.png" /></a>
									<a class="hide_click" v-else="laywersecond == false" @click="laywer_clickTwo"><img src="../../static/images/Invisible.png" /></a>
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<input type="email" class="form-control" name="laywer_email" placeholder="请输入邮箱" required="">
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<div class="code">
										<input type="text" class="form-control" name="autCode" placeholder="请输入手机验证码" required=""> &nbsp;
										<button type="button" :disabled="laywerdel" style="width: 140px;" :class="laywerCode ? 'btn btn-primary msgs':'btn btn-primary msgs msgs1'" @click="laysendSMs">{{laywercodetion}}</button>
									</div>
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<textarea class="form-control"  placeholder="个人简介"></textarea>
									<label class="better_lable"></label>
								</div>
								<div class="form-group industry_type">
									<div class="uplod" @click="layweruplod">
										<span class="avatar">
								            <span class="default laywerimg">
								                <img src="../../static/images/famou.png">
								            </span>
								        </span>
								        <span class="info"><p class="click">点击上传</p></span>
										<input type="file" id="laywerupLogo" @change="layweruploadLogo" style="display: none;">
									</div>
									<label class="better_lable"></label>
								</div>
								
								<button class="btn btn-primary block full-width m-b" @click="laywerRegisterForm">注册</button>
										
								<p class="text-muted text-center method">
									<a @click="login_in">已有帐号？立即登录</a>
								</p>
							</fieldset>
						</form>
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
	import '../../static/bootstrap-3.3.7-dist/js/bootstrap-select.js';
	import "../../static/css/bootstrap-select.css";
	import validate from '../../static/js/validate/jquery.validate.min.js';
	import messages_zh from '../../static/js/validate/messages_zh.min.js';
	import methodyz from '../../static/js/validate/method.js';
	import "../../static/css/register.css";
	
	
	
	export default {
		data() {
			return {
				showligthone:true,
				showligthtwo:true,
				laywerfrist:true,
				laywersecond:true,
				validCode:true,
				codetion:'获取验证码',
				disabled:false,
				laywerCode:true,
				laywercodetion:'获取验证码',
				laywerdel:false,
				items:[
				  { value: '劳动纠纷', name: '劳动纠纷' },
				  { value: '物权纠纷', name: '物权纠纷' },
				  { value: '侵权纠纷', name: '侵权纠纷' },
				  { value: '股权纠纷', name: '股权纠纷' },
				  { value: '票据纠纷', name: '票据纠纷' },
				  { value: '法律顾问', name: '法律顾问' },
				  { value: '公司管理', name: '公司管理' },
				  { value: '股权激励', name: '股权激励' },
				  { value: '公司上市', name: '公司上市' },
				  { value: '改制重组', name: '改制重组' },
				  { value: '破产重整', name: '破产重整' },
				  { value: '企业财税', name: '企业财税' },
				  { value: '非法集资', name: '非法集资' },
				  { value: '文书模板', name: '文书模板' },
				  { value: '尽职调查', name: '尽职调查' },
				  { value: '不正当竞争', name: '不正当竞争' },
				  { value: '票据犯罪', name: '票据犯罪' },
				  { value: '走私犯罪', name: '走私犯罪' },
				  { value: '单位犯罪', name: '单位犯罪' },
				  { value: '职务犯罪', name: '职务犯罪' },
				  { value: '合同犯罪', name: '合同犯罪' },
				  { value: '知识产权犯罪', name: '知识产权犯罪' },
				  { value: '银行业务犯罪', name: '银行业务犯罪' },
				  { value: '著作权纠纷', name: '著作权纠纷' },
				  { value: '专利权纠纷', name: '专利权纠纷' },
				  { value: '商标权纠纷', name: '商标权纠纷' },
				  { value: '劳动合同纠纷', name: '劳动合同纠纷' },
				  { value: '买卖合同纠纷', name: '买卖合同纠纷' },
				  { value: '借贷合同纠纷', name: '借贷合同纠纷' },
				  { value: '租赁合同纠纷', name: '租赁合同纠纷' },
				  { value: '运输合同纠纷', name: '运输合同纠纷' },
				  { value: '担保合同纠纷', name: '担保合同纠纷' },
				  { value: '其他合同纠纷', name: '其他合同纠纷' },
				  { value: '消费者权益保护', name: '消费者权益保护' },
				  { value: '建筑工程合同纠纷', name: '建筑工程合同纠纷' },
				  { value: '土地和房地产纠纷', name: '土地和房地产纠纷' },
				  { value: '商品房买卖合同纠纷', name: '商品房买卖合同纠纷' },
				]
			}
		},
		mounted(){
			$('.selectpicker').selectpicker({
				title:'请选择服务领域'
			});
			$('.selectpicker').on('hidden.bs.select', function (e) {
				var teamselect=$('.selectpicker').val();
				if(teamselect != ''){
					$('#selectpicker-error').html('').hide();
					$('.btnlaywer').addClass('btnfontcolor')
					$('.btnlaywer').removeClass('btnerror');
				}else{
					$('#selectpicker-error').html('<i class="fa fa-times-circle"></i>  必填').show();
					
					$('.btnlaywer').removeClass('btnfontcolor')
				}
			});
		},
		methods: {
			login_in() {
				this.$router.push('/login');
			},
			phoneRegisterForm() {
				phoneRegisterForm('#phoneRegisterForm');
			},
			laywerRegisterForm() {
				laywerRegisterForm('#laywerRegisterForm');
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
			laywer_click(){
				if(this.laywerfrist == true){
					this.laywerfrist = false
				}else{
					this.laywerfrist = true
				}
			},
			laywer_clickTwo(){
				if(this.laywersecond == true){
					this.laywersecond = false
				}else{
					this.laywersecond = true
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
			laysendSMs(){
				var time=60;
				var that = this;
				if(that.laywerCode == true){
					that.laywerCode = false;
//              	获取验证码
					that.laywerdel = true;
					var t=setInterval(function () {
						time--;
						that.laywercodetion = time+"秒";
						if (time==0) {
							that.laywerdel = false;
							clearInterval(t);
							that.laywercodetion = '重新获取';
							that.laywerCode = true;
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
				$('.defaultimg').html('<img src="'+imgUrl+'"/>')
			},
			layweruplod(){
				$("#laywerupLogo").trigger("click");
			},
			layweruploadLogo(){
				var uploadfile = $("#laywerupLogo").get(0).files[0];
				var imgUrl = window.URL.createObjectURL(uploadfile)
				$('.laywerimg').html('<img src="'+imgUrl+'"/>')
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
	
	//律师注册模块
	function laywerRegisterForm(id){
		$('.selectpicker').on('hidden.bs.select', function (e) {
			var teamselect=$('.selectpicker').val();
			if(teamselect != ''){
				
			}else{
				$('.btnlaywer').addClass('btnerror');
			}
		});
		$(id).validate({
			ignore: ":hidden:not(select)",
			rules: {
				laywername:{
					required: true,
				},
				laywercity:{
					required: true,
				},
				laywernum:{
					required: true,
				},
				selectpicker:{
					required: true,
				},
				layweroffice:{
					required: true,
				},
				laywer_phone:{
					required: true,
					isPhone: true
				},
				laywer_password: {
					required: true,//必填
					rangelength: [8, 16],
					passwordtext:true
				},
				laywer_password_confirm: {
					required: true,//必填
					rangelength: [8, 16],
					equalTo: "#laywer_phone",
					passwordtext:true
				},
				laywer_email: {
					required: true,//必填
					email: false,
					isCheckEmail: true,
				},
			},
			messages: {
				laywer_phone: {
					isPhone: "请填写正确的手机号码",
					remote: "该手机号已被注册使用",	　　
				},
				laywer_password: {
			       rangelength:"密码长度应该在8-16个字符",
			       remote: "密码必须字母、数字混合组成",
			　　	},
			    laywer_password_confirm: {
			       rangelength:"确认密码长度应该在6~16个字符",
			       equalTo: "两次密码输入不一致"
			　　	},
			    laywer_email:{
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
				if(element.hasClass('selectpicker')){
					error.appendTo(element.parent().parent().children('.better_lable'))
					$('.btnlaywer').addClass('btnerror')
				}
			},
		})
	}
</script>
