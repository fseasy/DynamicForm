﻿//ajax 写入数据库
function btn_sub(){
	var resval = document.getElementById('res').innerHTML ;
	var trans = encodeURI(resval) ;
	//注意转义！！
	var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
   alert(xmlhttp.responseText);
    }
  }
xmlhttp.open("POST","ajax.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
var data="form="+trans ;
xmlhttp.send(data);

}