<template>
	<div>
	    <div class="middle-box text-center loginscreen  animated fadeInDown">
	        <div>
	            <div class="famoushiLog">
	                <img src="../../static/images/famou.png" />
	            </div>
	            <h4 style="padding-top: 15px;">全国律师同盟系统</h4>
	            <form class="m-t">
	                <div class="form-group">
	                    <input type="text" class="form-control" placeholder="手机号" v-model="phonename">
	                </div>
	                <div class="form-group">
	                    <input type="password" class="form-control" placeholder="密码" v-model="password">
	                </div>
	                <!--<div class="form-group">
	                	<div class="layui-form-item">
                            <select class="form-control fl" name="user_type"  lay-verify="required" lay-filter="agentList">
                                <option value="1">律师</option>
                                <option value="2">客户</option>
                                <option value="3">管理员</option>
                            </select>
                       </div>
	                </div>-->
	                <button  class="btn btn-primary block full-width m-b">登 录</button>
	
	
	                <p class="text-muted text-center method"> <a href="#"><small>忘记密码了？</small></a> | <a @click="register">没有帐号？马上注册</a>
	                </p>
	
	            </form>
	        </div>
	    </div>
    </div>
</template>

<script>
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
    	}
    }
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