function getForm(){
	//var res = '<form name="df" id="df" method="POST"  >' ;
	var res = "" ;
	var timeIndex = 0 ;
	var optionCounter = 0 ;
	var edit = document.getElementById('edit') ;
	//console.log(edit) ;
	var childs = edit.childNodes ;
	for(var i = 0 ; i < childs.length ; i++){
		var idval = childs[i].getAttribute('id') ;
		idval = idval.substr(0,idval.indexOf('_')) ;
		switch (idval){
			case 'tit':{
				var tit = childs[i] ;
				var titv = tit.childNodes[0] ;
				var value = titv.innerHTML ;
				//console.log(value) ;
				var  item = '<div class="tit_v" name="tit_v">'+value+'</div>' ;
				res = res +item ;
			break ;
			}
			case 'des' :{
				var des = childs[i] ;
				var desv = des.childNodes[0] ;
				var value = desv.innerHTML ;
				//console.log(value) ;
				var item = '<div class="des_v" name="des_v">'+value+'</div>' ;
				res = res+ item ;
			break ;
			}
			case 'sin' :{
				var sin = childs[i] ;
				var sinv = sin.childNodes[0] ;
				var lab = sinv.childNodes[0] ;
				var labVal = lab.innerHTML ;
				//console.log(labVal) ;
				var item = '<div class="sin_v" name="sin_v">\
										<label>'+labVal+'</label>\
										<input type="text" />\
										</div>' ;
				res+=item ;
				break ;
			}
			case 'mul' :{
				var mul = childs[i] ;
				var mulv = mul.childNodes[0] ;
				var lab ;
				for(var k = 0 ; k < mulv.childNodes.length ; k++){
					if(mulv.childNodes[k].nodeName == "LABEL"){
					lab = mulv.childNodes[k] ;
					break ;
					}
				}
				var labVal = lab.innerHTML ;
				//console.log(labVal) ;
				var item = '<div class="mul_v" name="mul_v">\
							<label>'+labVal+'</label>	\
							<textarea></textarea>\
							</div>' ;
				res+=item ;
			break ;
			}
			case 'ss' :{
				var ss = childs[i] ;
				//find ssv
				var ssv ;
				for(var k = 0 ;  k < ss.childNodes.length ; k++){
					if(ss.childNodes[k].nodeName == "DIV"){
						ssv = ss.childNodes[k] ;
						break ;
					}
				}
				//find lab,ssop
				var lab ;
				var ssop ;
				for(var k = 0 ; k < ssv.childNodes.length ; k++){
					if(ssv.childNodes[k].nodeName == 'LABEL'){
						lab = ssv.childNodes[k] ;
					}
					if(ssv.childNodes[k].nodeName == 'DIV'){
						ssop = ssv.childNodes[k] ;
						break ;
					}
				}
				var labVal = lab.innerHTML ;
				//console.log(labVal) ;
				//find radio
				var x = ssop.getElementsByTagName('input') ;
				var radios = new Array() ;
				for(var k = 0 ; k < x.length ; k++){
					radios[k] = x[k].getAttribute("value") ;
				}
				//console.log(radios) ;
				var item = '<div class="ss_v" name="ss_v">\
							<label>'+labVal+'</label><div class="ssop">' ;
				for(var k = 0 ; k < radios.length ; k++){
					item= item +'<span><input type="radio" name="radio_'+optionCounter+'" value="'+radios[k]+'" />' +radios[k] + '</span>';
				}
				optionCounter++ ;			
				item+='</div></div>' ;
				res+=item ;
				break ;
			}
			case 'ms' :{
				var ms = childs[i] ;
				//find msv
				var msv ;
				for(var k = 0 ;  k < ms.childNodes.length ; k++){
					if(ms.childNodes[k].nodeName == "DIV"){
						msv = ms.childNodes[k] ;
						break ;
					}
				}
				//find lab,msop
				var lab ;
				var msop ;
				for(var k = 0 ; k < msv.childNodes.length ; k++){
					if(msv.childNodes[k].nodeName == 'LABEL'){
						lab = msv.childNodes[k] ;
					}
					if(msv.childNodes[k].nodeName == 'DIV'){
						msop = msv.childNodes[k] ;
						break ;
					}
				}
				var labVal = lab.innerHTML ;
				//console.log(labVal) ;
				//find checkbox
				var x = msop.getElementsByTagName('input') ;
				var radios = new Array() ;
				for(var k = 0 ; k < x.length ; k++){
					radios[k] = x[k].getAttribute("value") ;
				}
				//console.log(radios) ;
				var item = '<div class="ms_v" name="ms_v">\
							<label>'+labVal+'</label><div class="msop">' ;
				for(var k = 0 ; k < radios.length ; k++){
					item= item +'<span><input type="checkbox" name="check_'+optionCounter+'" value="'+radios[k]+'" />' +radios[k] + '</span>';
				}
				optionCounter++ ;			
				item+='</div></div>' ;
				res+=item ;
			break ;
			}
			case 'time':{
				var time = childs[i] ;
				var labs = time.getElementsByTagName('label') ;
				var labVal = labs[0].innerHTML ;
				//console.log(labVal) ;
				var inputs = time.getElementsByTagName('input') ;
				var si = inputs[0].value ;
				var ei = inputs[1].value ;
				var item = '<div class="t_v" id="t_'+timeIndex+'" name="t_v">\
								<label>'+labVal+'</label>\
								<input type="hidden" id="si_'+timeIndex+'" value="'+si+'" />\
								<input type="hidden" id="ei_'+timeIndex+'" value="'+ei+'" />\
							</div>' ;
				res+=item ;
				timeIndex++ ;
				break ;
			}
			default:
			break ;
		}
	}
	res = res + '<input type="hidden" value="'+timeIndex+'" id="timeIndex" name="timeIndex"/>' ;
	res = res + '<div class="sub" name="sub"><button id="dfsub" onclick="dfpro()">提交</button></div>' ;
	res+="" ;
	//将res放入数据库，对应该活动，用户填写表单时，从数据库中读取该res，再进行下面的操作
	document.getElementById('res').innerHTML = res ;
	for(var k = 0 ; k < timeIndex ; k++){
		var time = document.getElementById('t_'+k) ;
		var xx = new setTime() ;
		time.appendChild(xx.y) ;
		time.appendChild(xx.m) ;
		time.appendChild(xx.d) ;
		var inputs =time.getElementsByTagName('input') ;
		var si = inputs[0].value ;
		var ei = inputs[1].value ;
		if(si == ""){
			xx.init() ;
		}
		else
		{
			xx.setStart(si.substr(0,4),si.substr(4,2),si.substr(6,2)) ;
			xx.setEnd(ei.substr(0,4),ei.substr(4,2),ei.substr(6,2)) ;
			xx.init() ;
		}
		addTimeAc(xx) ;		
	}
	document.getElementById('btn_sub').style.display = "inline" ;
}
