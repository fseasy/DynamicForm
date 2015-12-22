function addTimeAc(xx){
		xx.y.onchange = function(){
					var year = xx.y.value ;
					//change month
					//clear
					var childs = xx.m.childNodes ;
					/*
					console.log(childs) ;
					以下这样写会漏掉元素！！！因为删除后childs数组会动态变化！！
					for(var i = 0 ; i < childs.length ; i++){
						if(childs[i].nodeName == "OPTION"){
							alert(childs[i].nodeValue)
							xx.m.removeChild(childs[i]) ;
						}
					}*/
					while(childs.length != 0){
						xx.m.removeChild(childs[childs.length-1]) ;
					}
					//add
					
					if(year != xx.nowYear){
						for(var i = 1 ; i <= 12 ; i++){
							var mop = document.createElement('option') ;
							mop.value = i ;
							mop.innerHTML = i ;
							xx.m.appendChild(mop) ;
						}
					}
					else{
						for(var i = 1 ; i <= xx.nowMonth ; i++){
							var mop = document.createElement('option') ;
							mop.value = i ;
							mop.innerHTML = i ;
							xx.m.appendChild(mop) ;
						}
					}
					xx.m.onchange() ;//!!联动处理
				}
				xx.m.onchange = function (){
					var year = xx.y.value ;
					var month = xx.m.value ;
					//clear
					var childs = xx.d.childNodes ;
					while(childs.length != 0){
						xx.d.removeChild(childs[childs.length-1]) ;
					}
					//add
					if(year != xx.nowYear || month != xx.nowMonth){
						var days = getDaysOfMonth(month,year) ;
						for(var i = 1 ; i <= days ; i++){
							var dop = document.createElement('option') ;
							dop.id = i ;
							dop.innerHTML = i ;
							xx.d.appendChild(dop) ;
						}
					}
					else{
						for(var i = 1 ; i <= xx.nowDay ; i++){
							var dop = document.createElement('option') ;
							dop.id = i ;
							dop.innerHTML = i ;
							xx.d.appendChild(dop) ;
						}
					}
					
				}
	}
	function setTime(){
				this.y = document.createElement('select') ;
				//this.y.id ='y_'+index ;
				//this.y.name = 'y_'+index ;
				this.m = document.createElement('select') ;
				//this.m.id = 'm_'+index ;
				//this.m.name = 'm_'+index  ;
				this.d = document.createElement('select') ;
				//this.d.id ='d_'+index ;
				//this.d.name = 'd_'+index ;
				//init
				var date = new Date() ;
				this.year = date.getFullYear() ;
				this.month = date.getMonth()+1 ;//!!
				this.day = date.getDate() ;
				
				//默认加10天
				date.setDate(this.day+10) ;
				this.nowYear = date.getFullYear() ;
				this.nowMonth = date.getMonth()+1 ;
				this.nowDay = date.getDate() ;
				
				this.setStart = function(x,y,z){
					this.year = parseInt(x) ;
					this.month = parseInt(y) ;
					this.day = parseInt(z) ;
				}
				this.setEnd = function(x,y,z){
					this.nowYear = parseInt(x) ;
					this.nowMonth = parseInt(y) ;
					this.nowDay = parseInt(z) ;
				}
				//write
				this.init = function(){
				//first clear
				var childs = this.y.childNodes ;
				while(childs.length != 0){
					this.y.removeChild(childs[childs.length-1]) ;
				}
				childs = this.m.childNodes ;
				while(childs.length != 0){
					this.m.removeChild(childs[childs.length -1]) ;
				}
				childs = this.d.childNodes ;
				while(childs.length != 0){
					this.d.removeChild(childs[childs.length -1]) ;
				}
				for(var i = this.year ; i <= this.nowYear ; i++){
					var yop = document.createElement('option') ;
					yop.value = i ;
					yop.innerHTML = i ;
					this.y.appendChild(yop) ;
				}
				//output the default 
				//append
				if(this.year < this.nowYear){
					for(var i = this.month ; i<= 12 ; i++)
					{
						var mop = document.createElement('option') ;
						mop.value = i ; 
						mop.innerHTML = i ;
						this.m.appendChild(mop) ;
					}
				}
				else{
					for(var i = this.month ; i <= this.nowMonth ; i++){
						var mop = document.createElement('option') ;
						mop.value = i ;
						mop.innerHTML = i ;
						this.m.appendChild(mop) ;
					}
				}
				//day
				if(this.year != this.nowYear || this.month != this.nowMonth){
					var days = getDaysOfMonth(this.month,this.year) ;
					for(var i = this.day ; i <= days ; i++){
						var dop = document.createElement('option') ;
						dop.value = i ;
						dop.innerHTML = i ;
						this.d.appendChild(dop) ;
					}
				}
				else{
					for(var i = this.day ;i <= this.nowDay ; i++){
						var dop = document.createElement('option') ;
						dop.id = i ; 
						dop.innerHTML = i ;
						this.d.appendChild(dop) ;
					}
				}
				}
				
	}
	function getDaysOfMonth(month,year)
	{
		//var big = new array(1,3,5,7,8,10,12) ;
		var small = new Array(4,6,9,11) ;
		if(month == 2){
			if((year%4==0&&year%100!=0)||year%400 == 0){
				return 29 ;
			}
			else
			{
				return 28 ;
			}
		}
		else{
			for(var i = 0 ; i < small.length ; i++){
				if(month == small[i]){
					return 30 ;
				}
			}
			return 31 ;
		}
	}