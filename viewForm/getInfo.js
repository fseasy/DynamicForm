//从div id = res 中获取表单的信息
function getInfo(res){
	var info = "" ;
	var container = document.getElementById(res) ;
	var childs = container.childNodes ;
	for(var i = 0 ; i < childs.length ; i++){
		var nameval = childs[i].getAttribute('name') ;
		if(nameval == null)
		continue ;
		nameval = nameval.substr(0,nameval.indexOf('_')) ;
		switch (nameval){
			case 'sin' :{
				var sin = childs[i] ;
				info += getText(sin,'input') ;
				break ;
			}
			case 'mul' :{
				var mul = childs[i] ;
				
				info += getText(mul,"textarea") ;
			break ;
			}
			case 'ss' :{
				var ss = childs[i] ;
				//!!
				info+= getSelect(ss,'radio') ;
				break ;
			}
			case 'ms' :{
				var ms = childs[i] ;
				info+= getSelect(ms,'checked') ;
			break ;
			}
			case 't':{
				var t = childs[i] ;
				var lab = t.getElementsByTagName('label') ;
				var labVal = lab[0].innerHTML ;
				var selects = t.getElementsByTagName('select') ;
				var value = selects[0].value+"year"+selects[1].value+"m"+selects[2].value ;
				info = info + '<label>'+labVal+'</label><span>'+value+'</span><br />' ;
				break ;
			}
			default:
			break ;
		}
	}
	return info ;
}
function getText(obj,tag){
				var lab = obj.getElementsByTagName('label') ;
				var labVal = lab[0].innerHTML ;
				var valobj = obj.getElementsByTagName(tag) ;
				var val = valobj[0].value ;
				//console.log(labVal) ;
				var x = '<label>'+labVal+'</label>:<span>'+val+'</span><br />' ;
				return x ;
}
function getSelect(obj,tag){
	//get lab
	var lab = obj.getElementsByTagName('label') ;
	var labVal = lab[0].innerHTML ;
	//get value
	var value = "" ;
	var options = obj.getElementsByTagName('input') ;
	for(var i = 0 ; i < options.length ; i++){
		if(options[i].checked){
			value = value + options[i].value +"  " ;
		}
	}
	var item = '<label>'+labVal+'</label><span>'+value+'</span><br />' ;
	return item ;
}
function dfpro(){
	document.getElementById('info').innerHTML = getInfo('res') ;
}
