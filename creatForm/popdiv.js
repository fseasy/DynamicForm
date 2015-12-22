var popDiv = function (){} ;
popDiv.prototype = {
	getOptions : function(argc){
		var i ,
		options = {} ,
		defaults = {
			width : "150px",
			height:"100px" ,
			divid : null ,
			title:"弹出层"
		} ;
		for(i in defaults){
			options[i] = (argc[i] != undefined)?argc[i]:defaults[i] ;
		}
		return options ;

	} ,
	getPadding : function(w_str,h_str){
		var i ,
			screenW = document.body.clientWidth,
			screenH = document.body.clientHeight ;
		if((i = w_str.indexOf('%')) != -1){
			var w_p = parseInt(w_str.substr(0,i)) ,
				w = w_p/100 * screenW ;
		}
		else{
			w = parseInt(w_str) ;
		}
		if((i = h_str.indexOf('%')) != -1){
			var h_p = parseInt(h_str.substr(0,i)) ,
			h = h_p/100 * screenH ;
		}
		else{
			h = parseInt(h_str) ;
		}
		var p_l = (screenW - w) /2  ,
		    p_h = (screenH - h) /2 /2,
		    pos = [p_l,p_h] ;
		return pos ;
	},
	init : function(argc){
		this.createEle(argc) ;
	},
	disPop : function(){
		this.back.style.display = "block" ;
	},
	hidePop : function(){
		this.back.style.display = "none" ;
	}
	,
	createEle : function(argc){
		var options = this.getOptions(argc) ,
		i ;
		//popback
		this.back = document.createElement('div') ;
		this.back.className = "popout" ;
		
		document.body.appendChild(this.back) ;
		//popdiv
		this.popdiv = document.createElement("div") ;
		this.popdiv.style.cssText = [ 'width:',options['width'],"; height:",options['height'],";"
									].join('') ;
		this.popdiv.className = "popdiv" ;
		//margin
		var pos = this.getPadding(options['width'],options['height']) ;
		console.log(pos) ;
		this.popdiv.style.marginTop = pos[1] + "px" ;
		this.popdiv.style.marginLeft = pos[0]+"px" ;
		this.back.appendChild(this.popdiv) ;
		//title
		this.title = document.createElement('div') ;
		this.title.className = "poptit" ;
		this.title.innerHTML = options['title'] ;
		this.closeBtn = document.createElement('a') ;
		this.closeBtn.innerHTML = "&times" ;
		this.closeBtn.className = "closeBtn" ;
		this.title.appendChild(this.closeBtn) ;
		this.popdiv.appendChild(this.title) ;
		//content
		this.content = document.createElement('div') ;
		this.content.className = "popcont" ;
		if(options['divid'] != null){
			var tmp = document.getElementById(options['divid']) ;
			this.content.innerHTML = tmp.innerHTML ;
			//销毁tmp的内容，防止重复
			tmp.innerHTML = "" ;
		}
		else{
			alert("div is null") ;
		}
		this.popdiv.appendChild(this.content) ;
		this.back.style.display= "none" ;
		console.log(document.body) ;
	}
} ; 

var popdiv = new popDiv() ;