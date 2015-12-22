<!DOCTYPE html>
<html xmlns="www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html ; charset=utf-8 " />
	<title>弹出层测试</title>
	<script type="text/javascript" src="popdiv.js"></script>
	<?php
	include("header.php") ;
	?>
	<link href="popdiv.css" type="text/css" rel="stylesheet" />
	<script >
	window.onload = function(){
	popdiv.init({
		width: "1000px",
		height:"100%",
		divid : "popdiv",
		title: "测试一下啦"
		}) ;
		popdiv.closeBtn.onclick = function(){
			popdiv.hidePop() ;
		}
	document.getElementById('popout').onclick = function(){
		popdiv.disPop() ;
	}
	}
	</script>
	<style>
		body{
			font-size:16px ;
			background:#fff ;
		}
		.wrap{
			width:1000px ;
			height:1200px ;
			background:#f0f0f0 ;
			margin: 0 auto ;
			overflow:hidden ;
		}
		.panel{
			margin:80px auto ;
			text-align:center ;
		}
		#popdiv{
			display:none ;
		}
	</style>
</head>
<body>
	<div class="wrap">
		<div class="panel">
			<button id="popout">弹出层测试</button>
		</div>
	</div>
	<div id="popdiv">
		<?php 
		include("df.php") ;
		?>
	</div>
</body>
</html>