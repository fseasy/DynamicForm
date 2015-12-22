<?php
	if(!empty($_REQUEST['form'])){
		$content = $_REQUEST['form'] ;
		$str = ""+$content ;
		echo $content ;
	}
	else{
		echo 'bad request' ;
	}
?>