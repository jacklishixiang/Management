<template>
	<div>
	    <div class="middle-box text-center loginscreen  animated fadeInDown">
	        <div>
	            <div class="famoushiLog">
	                <img src="../../static/images/famou.png" />
	            </div>
	            <h4>全国律师同盟系统</h4>
	            <form class="m-t" role="form" id="phoneLoginForm">
	                <div class="form-group industry_type">
	                    <input type="text" class="form-control" name="phonename" placeholder="手机号" v-model="phonename">
	                    <label class="better_lable"></label>
	                </div>
	                <div class="form-group industry_type">
	                    <input type="password" class="form-control" name="passwordname" placeholder="密码" v-model="password">
	                	<label class="better_lable"></label>
	                </div>
	                <div class="form-group industry_type">
	                	<div class="layui-form-item" style="margin-bottom: 0;">
                            <select class="form-control fl" name="user_type"  lay-verify="required" lay-filter="agentList">
                                <option value="1">律师</option>
                                <option value="2">客户</option>
                                <option value="3">管理员</option>
                            </select>
							<label class="better_lable"></label>
                       </div>   
	                </div>
	                <button @click="phoneLoginForm" class="btn btn-primary block full-width m-b">登 录</button>
	                <p class="text-muted text-center method"> <a @click="toForgetPassword"><small>忘记密码了？</small></a> | <a @click="register">没有帐号？马上注册</a></p>
	
	            </form>
	        </div>
	    </div>
    </div>
</template>

<script>
import validate from '../../static/js/validate/jquery.validate.min.js'
import messages_zh from '../../static/js/validate/messages_zh.min.js'
import methodyz from '../../static/js/validate/method.js'
import "../../static/css/login.css";
export default{
    data(){
        return{
            phonename: '',
            password: ''
        }
    },
    methods:{
    	register(){
    		this.$router.push('/register');
    	},
		toForgetPassword(){
			this.$router.push('/toForgetPassword');
		},
    	phoneLoginForm(){
    		phoneLoginForm('#phoneLoginForm');
    	}
    }
}

function phoneLoginForm(id){
	$(id).validate({
		rules:{
			phonename:{
				required: true,//必填
				isPhone: true
			},
			passwordname: {
				required: true,//必填
				rangelength: [8, 16],
				passwordtext:true
			},
		},
		messages: {
			phone_phone: {
				isPhone: "请输入正确的手机号",
				remote: "该手机号未注册使用",	　　
			},
			passwordname:{
				rangelength:"密码长度应该在8~16个字符",
                remote: "密码必须字母、数字混合组成",
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