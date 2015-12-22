var index= 0 ;
	var opindex = 0 ;
	var add = function(){
		var seltype = parseInt(document.getElementById("type_sel").value) ;
		var edit = document.getElementById('edit') ;
		//alert(seltype) ;
		switch(seltype){
		case 0 :{
			// div title, titv_index , titc_index ,
			var title = document.createElement("div") ;
			title.id = "tit_"+index ;
			title.name = "tit_"+index ;
			title.className ="title" ;
			edit.appendChild(title) ;
			//----val
			var tit_val = document.createElement("div") ;
			tit_val.id = "titv_"+index ;
			tit_val.name = "titv_"+index ;
			tit_val.className="tit_v" ;
			tit_val.innerHTML = "请先编辑标题" ;
			title.appendChild(tit_val) ;
			//----ctrl
			var tit_ctrl = document.createElement("div") ;
			tit_ctrl.id="titc_"+index ;
			tit_ctrl.name="titc_"+index ;
			tit_ctrl.className="tit_c" ;
			
			tit_ctrl.innerHTML = '<div>\
								<a href="javascript:titEdit('+index+') ;">编辑标题</a>\
								<a href="javascript:titRm('+index+') ;">移除</a></div>\
								' ;
			title.appendChild(tit_ctrl) ;
			//console.log(title) ;
			index++ ;
			break ;
		}
		case 1 :{
			var des = document.createElement("div") ;
			des.id = "des_"+index ;
			des.name = "des_"+index ;
			des.className = "des" ;
			edit.appendChild(des) ;
			//---val
			var desVal = document.createElement('div') ;
			desVal.id = "desv_"+index ;
			desVal.name = "desv_"+index ;
			desVal.className = "des_v" ;
			desVal.innerHTML = "请更改备注内容";
			des.appendChild(desVal) ;
			//---ctrl
			var desCtrl = document.createElement('div') ;
			desCtrl.id = "desc_"+index ;
			desCtrl.name = "desc_"+index ;
			desCtrl.className = "des_c" ;
			desCtrl.innerHTML = '<a href="javascript:desEdit('+index+')">编辑备注</a>\
								<a href="javascript:desRm('+index+')">删除</a>\
								<div id="et_'+index+'"></div>\
								' ;
			des.appendChild(desCtrl) ;
			index++ ;
			break ;
		}
		case 2:{
			var sin = document.createElement('div') ;
			sin.id = "sin_"+index ;
			sin.name = "sin_"+index ;
			sin.className = "sin" ;
			edit.appendChild(sin) ;
			//--val
			var sinv = document.createElement('div') ;
			sinv.id = "sinv_"+index ;
			sinv.name = "sinv_"+index ;
			sinv.className = "sin_v" ;
			sinv.innerHTML = '<label id="lab_'+index+'">请修改标签名</label>\
								<input type="text" />' ;
			sin.appendChild(sinv) ;
			//--ctrl
			var sinc = document.createElement('div') ;
			sinc.id = "sinc_"+index ;
			sinc.name = "sinc_"+index ;
			sinc.className = "sin_c" ;
			sinc.innerHTML = '<a href="javascript:sinEdit('+index+')">修改标签</a>\
								<a href="javascript:sinRm('+index+')">移除</a>\
								<div id="et_'+index+'"></div>\
								' ;
			sin.appendChild(sinc) ;
			index++ ;
			break ;
		}
		case 3 :{
			var mul = document.createElement('div') ;
			mul.id="mul_"+index ;
			mul.name='mul_'+index ;
			mul.className='mul' ;
			edit.appendChild(mul) ;
			mul.innerHTML = '<div class="mul_v" id="mulv_'+index+'" name="mulv_'+index+'">\
								<label id="lab_'+index+'">请修改标签名</label>\
								<textarea ></textarea>\
								</div>\
								<div class="mul_c" id="mulc_'+index+'" name="mulc_'+index+'">\
									<a href="javascript:sinEdit('+index+')">修改标签</a>\
									<a href="javascript:mulRm('+index+')">移除</a>\
									<div id="et_'+index+'"></div>\
								<div>';
			index++ ;
			break ;
		}
		case 4:{
			var ss = document.createElement('div') ;
			ss.id="ss_"+index ;
			ss.name="ss_"+index ;
			ss.className="ss" ;
			edit.appendChild(ss) ;
			//---val
			var ssv = document.createElement('div') ;
			ssv.id = "ssv_"+index ;
			ssv.name = "ssv_"+index ;
			ssv.className = 'ss_v' ;
			ssv.innerHTML = '<label id="lab_'+index+'">请修改单项选择框名称:</label></br><div id="ssop_'+index+'" class="ssop"></div>' ;
			ss.appendChild(ssv) ;
			var tmp = document.getElementById('ssop_'+index) ;
			add_x(tmp,"radio") ;
			add_x(tmp,"radio") ;
			//---ctrl
			var ssc = document.createElement('div') ;
			ssc.id='ssc_'+index ;
			ssc.name = 'ssc_'+index ;
			ssc.className = "ss_c" ;
			ssc.innerHTML = '<a href="javascript:add_x(ssop_'+index+","+"'radio'"+')">添加选项</a>\
							<a href="javascript:sinEdit('+index+')">修改标签</a>\
							<a href="javascript:objRm(ss_'+index+')">移除</a> \
							<div id="et_'+index+'"></div>';
			ss.appendChild(ssc) ;
			//console.log(ss) ;
			index++ ;
			break ;
		}
		case 5:{
			//multipe select
			var ms = document.createElement('div') ;
			ms.id = "ms_"+index ;
			ms.name = "ms_"+index ;
			ms.className = "ms" ;
			edit.appendChild(ms) ;
			//ms_val
			var msv = document.createElement('div') ;
			msv.id = "msv_"+index ;
			msv.name = "msv_"+index ;
			msv.className = "ms_v" ;
			msv.innerHTML = "<label id='lab_"+index+"'>请修改多项选择框名称</label><br /><div id='msop_"+index+"' class='msop'></div>" ;
			ms.appendChild(msv) ;
			var tmp = document.getElementById('msop_'+index) ;
			add_x(tmp,"checkbox") ;
			add_x(tmp,"checkbox") ;
			//ms_ctrl
			var msc = document.createElement('div') ;
			msc.id = "msc_"+index ;
			msc.name = 'msc_'+index ;
			msc.className = "ms_c" ;
			msc.innerHTML = '<a href="javascript:add_x(msop_'+index+','+"'checkbox'"+')">添加选项</a>\
							<a href="javascript:sinEdit('+index+')">修改标签</a>\
							<a href="javascript:objRm(ms_'+index+')">移除</a>\
							<div id="et_'+index+'"></div>' ;
			ms.appendChild(msc) ;
			index++ ;
			break ;
		}
		case 6:{
			var time = document.createElement('div') ;
			time.id = 'time_'+index ;
			time.name = "time_"+index ;
			time.className = 'time' ;
			edit.appendChild(time) ;
			//val
			var tv = document.createElement('div') ;
			tv.id = 'tv_'+index ;
			tv.name = 'tv_'+index ;
			tv.className = 't_v' ;
			tv.innerHTML = '<label id="lab_'+index+'">请修改标签名:</label>' ;
			time.appendChild(tv) ;
				//-val-select,time span
				var ts = document.createElement('span') ;
				ts.id = 'ts_'+index ;
				ts.name = 'ts_'+index ;
				ts.className = 'ts' ;//ts
				tv.appendChild(ts) ;
				//year
				var xx = new setTime() ;
				ts.appendChild(xx.y) ;
				ts.appendChild(xx.m) ;
				ts.appendChild(xx.d) ;
				xx.init() ;
				var tcx = new timeCtrl(index) ;
				
				time.appendChild(tcx.tc) ;
				tcx.sinput = document.getElementById('sinput_'+index) ;
				tcx.einput = document.getElementById('einput_'+index) ;
				tcx.setbtn.onclick = function(){
					 //alert(tcx.timepanel.style.display) ;
					 tcx.dis() ;
					// alert(tcx.timepanel.style.dispaly) ;
				}
				tcx.sub.onclick = function(){
					var start = tcx.sinput.value ;
					//console.log(tcx.sinput.value) ;
					//console.log(document.getElementById('sinput_0').value) ;
					var end = tcx.einput.value ;
					if(start.length != 8 || end.length!= 8){
						alert("ilegal input!") ;
						//alert(start) ;
						return false ;
					}
					for(var i = 0 ; i < 8 ; i++){
						if(!(start[i]>='0'&&start[i]<='9'))
						{
							alert("ilegal inputs") ;
							return false ;
						}
						if(!(end[i]>='0'&&end[i] <= '9')){
							alert("ilegal input") ;
							return false ;
						}
					}
					xx.setStart(start.substr(0,4),start.substr(4,2),start.substr(6,2)) ;
					xx.setEnd(end.substr(0,4),end.substr(4,2),end.substr(6,2)) ;
					xx.init() ;
					tcx.dis() ;
				}
				tcx.cac.onclick = function(){
					tcx.dis() ;
				}
				tcx.labbtn.onclick = function(){
					sinEdit(tcx.loc_index) ;
				}
				tcx.rmbtn.onclick = function(){
					tcx.tc.parentNode.parentNode.removeChild(tcx.tc.parentNode) ;
				}
				//console.log(time) ;
				//-----------------
				addTimeAc(xx) ;
				
		index++ ;
				
		}
		default:
			return false ;
		}
		
	}
	function timeCtrl(loc_index){
		this.tc = document.createElement('div') ;
		this.tc.id = 'tc_'+loc_index ;
		this.tc.name = 'tc_'+loc_index ;
		this.tc.className = 't_c' ;
		this.setbtn = document.createElement('a') ;
		this.setbtn.innerHTML ="设置起止时间";
		this.setbtn.href="###" ;
		this.labbtn = document.createElement('a') ;
		this.labbtn.innerHTML = "标签名"
		this.labbtn.href ="###" ;
		this.rmbtn = document.createElement('a') ;
		this.rmbtn.innerHTML = "移除" ;
		this.rmbtn.href="###" ;
		this.tc.appendChild(this.setbtn) ;
		this.tc.appendChild(this.labbtn) ;
		this.tc.appendChild(this.rmbtn) ;
		//this.tc.innerHTML+=('<div id="et_'+loc_index+'"></div>') ;
		var et = document.createElement('div') ;
		et.id="et_"+loc_index ;
		this.tc.appendChild(et) ;
		this.loc_index = loc_index ;
		//
		this.timepanel = document.createElement('div') ;
		this.timepanel.style.display = "none" ;
		//this.timepanel.style.display = "none" ;
		this.dis = function(){
			var status = this.timepanel.style.display ;
			if(status == "none"){
				this.timepanel.style.display = 'block' ;
			}
			else{
				this.timepanel.style.display = 'none' ;
			}
		}
		//
		this.tc.appendChild(this.timepanel) ;
		this.ss = document.createElement('span') ;
		this.es = document.createElement('span') ;
		this.timepanel.innerHTML = "<label>请输入起、止时间（8位数字，如20080808）</label><br/>" ;
		this.ss.innerHTML = "<label>起始时间:</label><input type='text' id='sinput_"+loc_index+"' value=''/>" ;
		this.es.innerHTML = "<label>截止时间:</label><input type='text' id='einput_"+loc_index+"' value='' />" ;
		/*
		this.sinput = document.createElement("input") ;
		this.einput = document.createElement("input") ;
		*/
		
		//console.log(this.si) ;
		//console.log(this.sinput) ;
		//this.ss.appendChild(this.sinput) ;
		this.ss.innerHTML+="<br />" ;
		//this.es.appendChild(this.einput) ;
		this.es.innerHTML+="<br />" ;
		this.timepanel.appendChild(this.ss) ;
		this.timepanel.appendChild(this.es) ;
		this.sub = document.createElement('button') ;
		this.cac = document.createElement('button') ;
		this.sub.innerHTML = "确定" ;
		this.cac.innerHTML = "取消" ;
		this.timepanel.appendChild(this.sub) ;
		this.timepanel.appendChild(this.cac) ;
	}
	function add_x(parent,type){
		var x =  new add_option(parent,type) ;
		x.mod.onclick = function (){
			//x.op.type="text" ;
			//x.op.setAttribute('type','text') ;
			x.ori_opval = x.op.value ;
			//remove
			x.op.parentNode.removeChild(x.op) ;
			//add text
			x.con.insertBefore(x.optext,x.opdis) ;
			
			x.opdis.innerHTML = "" ;
			x.cs.removeChild(x.mod) ;
			x.cs.removeChild(x.del) ;
			x.cs.appendChild(x.change) ;
		}
		x.del.onclick =function(){
			x.con.parentNode.removeChild(x.con) ;
		}
		x.change.onclick = function(){
			//x.op.type = type ;
			//get value
			x.op.value = x.optext.value ;
			x.opdis.innerHTML = x.op.value ;
			//remove
			x.optext.parentNode.removeChild(x.optext) ;
			//add
			x.con.insertBefore(x.op,x.opdis) ;
			x.cs.removeChild(x.change) ;
			x.cs.appendChild(x.mod) ;
			x.cs.appendChild(x.del) ;
		}
		//console.log(x.con) ;
	}
	function add_option(parent,type){
			this.con = document.createElement('span') ;
			this.ori_opval ;
			
			this.con.id = "con_"+opindex ;
			this.con.name = 'con_'+opindex ;
			parent.appendChild(this.con) ;
			//op
			this.op = document.createElement('input') ;
			//this.op.type = type ;
			this.op.setAttribute('type',type) ;
			this.op.id = 'op_'+opindex ;
			this.op.name = 'op_'+opindex ;
			this.op.value = "新建选项" ;
			this.con.appendChild(this.op) ;
			//for mod
			this.optext = document.createElement('input') ;
			this.optext.setAttribute('type','text') ;
			this.optext.value = "" ;
			//dis
			this.opdis = document.createElement('label') ;
			this.opdis.id = 'opdis_'+opindex ;
			this.opdis.name = 'opdis_'+opindex ;
			this.opdis.innerHTML = '新建选项' ;
			this.con.appendChild(this.opdis) ;
			//ctrl span
			this.cs = document.createElement('span') ;
			this.cs.className = 'opcs' ;// class opcs
			this.cs.id = 'cs_'+opindex ;
			this.cs.name = 'cs_'+opindex ;
			this.con.appendChild(this.cs) ;
			//a
			this.mod = document.createElement('a') ;
			this.mod.href="###" ;
			this.mod.innerHTML = '修改名称' ;
			this.del = document.createElement('a') ;
			this.del.innerHTML = '删除' ;
			this.del.href="###" ;
			this.cs.appendChild(this.mod) ;
			this.cs.appendChild(this.del) ;
			//function
			//bangding
			this.change = document.createElement('button');
			this.change.innerHTML  = "确定" ;
			
		opindex++ ;
	}
	var objRm = function(objName){
		//alert(objName) ;
		//var child = document.getElementById(objName) ;
		//console.log(objName) ;
		objName.parentNode.removeChild(objName) ;
	}
	var mulRm = function(loc_index){
		var child = document.getElementById('mul_'+loc_index) ;
		child.parentNode.removeChild(child) ;
	}
	var sinEdit = function(loc_index){
		var et = document.getElementById('et_'+loc_index) ;
		et.innerHTML = '<label>输入标签：</label>\
						<input type="text" id="labv_'+loc_index+'" />\
						<button onclick="sinEdit.changelab()">更改</button>\
						<button onclick="sinEdit.changeCac()">取消</button>\
						' ;
		sinEdit.changelab = function(){
			var val = document.getElementById('labv_'+loc_index).value ;
			document.getElementById('lab_'+loc_index).innerHTML = val ;
			et.innerHTML = '' ;
		}
		sinEdit.changeCac = function(){
			et.innerHTML = '' ;
		}
		
	}
	var sinRm = function(loc_index){
		var child =document.getElementById('sin_'+loc_index) ;
		child.parentNode.removeChild(child) ;
	}
	var desEdit = function(loc_index){
		var et = document.getElementById('et_'+loc_index) ;
		et.innerHTML = '<label>输入备注:</label>\
							<input type=text id="descv_'+loc_index+'" name="descv_'+loc_index+'" />\
							<button onclick="javascript:desEdit.changeDes()">更改</button>\
							<button onclick="javascript:desEdit.changeCac()">取消</button>\
		' ;
		desEdit.changeDes = function(){
			var desval = document.getElementById('descv_'+loc_index).value ;
			document.getElementById('desv_'+loc_index).innerHTML = desval ;
			et.innerHTML = '' ;
		}
		desEdit.changeCac = function(){
			et.innerHTML = '' ;
		}
	
	}
	var desRm = function(loc_index){
		var des = document.getElementById('des_'+loc_index) ;
		des.parentNode.removeChild(des) ;
	
	}
	var titEdit = function(loc_index){
		var et = document.createElement("div") ;
		var p = document.getElementById('titc_'+loc_index) ;
		et.innerHTML='\
					<label>输入标题</label><input type="text" name="titvalc_'+loc_index+'" id="titvalc_'+loc_index+'" /> \
					<button onclick="javascript:titEdit.changeTit()">更改</button> \
					<button onclick="javascript:titEdit.changeCac()">取消</button>\
					' ;
		//console.log(p) ;
		var ori = p.innerHTML ;
		p.innerHTML = "" ;
		p.appendChild(et) ;
		
		titEdit.changeTit = function(){
			var x = document.getElementById('titvalc_'+loc_index).value ;
			var tit_val = document.getElementById('titv_'+loc_index) ;
			//console.log(tit_val) ;
			tit_val.innerHTML = x ;
			p.innerHTML = ori ;
		}
		titEdit.changeCac = function ()
		{
			p.innerHTML = ori ;
		}
	}
	var titRm = function(loc_index){
		//alert(loc_index) ;
		var title = document.getElementById('tit_'+loc_index) ;
		title.parentNode.removeChild(title) ;
		index-- ;
		//console.log(edit) ;
	}
	