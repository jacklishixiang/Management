jQuery.validator.addMethod("isPhone", function(value, element) {
	var length = value.length;
	var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
	return this.optional(element) || (length == 11 && mobile.test(value));
}, "请填写正确的手机号码"); //可以自定义手机号验证
jQuery.validator.addMethod("isCheckEmail", function(value, element) {
  var length = value.length;
  var email = /^([a-z0-9A-Z]+[-|_|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
  return this.optional(element) || (length > 0 && length <30 && email.test(value));
}, "请填写正确的邮箱");//可以自定义邮箱验证

jQuery.validator.addMethod("passwordtext", function(value, element) {
	var length = value.length;
	var passwordbag = /(([0-9]+[a-zA-Z]+[0-9]*)|([a-zA-Z]+[0-9]+[a-zA-Z]*))/;
	return this.optional(element) || (length > 8 && length <16 && passwordbag.test(value));
}, "密码长度8-16字符之间，必须字母与数字混合"); //可以自定义手机号验证