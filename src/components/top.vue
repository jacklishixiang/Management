<template>
 <!-- Page Content -->
<div id="page-content-wrapper" style="height: 100%; overflow: hidden;">
	
	<div class="btn_cl modify_btn">  
      <button type="button" class="hamburger is-closed animated fadeInLeft hidden-lg bad_button" data-toggle="offcanvas">
        <span class="hamb-top"></span>
        <span class="hamb-middle"></span>
        <span class="hamb-bottom"></span>
      </button>
  	</div>
  	<!--<include src="public/top.html"></include>-->

  	<div class="container_box" style="height: 100%;">
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
</style>