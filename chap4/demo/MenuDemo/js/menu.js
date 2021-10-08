function change(){
	var SecondDiv=this.parentNode.getElementsByTagName('ul')[0];
	if(SecondDiv.className=="myHide"){
		SecondDiv.className="myShow";
	}else {SecondDiv.className="myHide";}
}
window.onload=function() {
	var Ul=document.getElementById('listUL');
	var aLi=Ul.childNodes;
	var A;
	for(var i=0;i<aLi.length;i++){
		if(aLi[i].tagName=="LI"&&aLi[i].getElementsByTagName("ul").length){
			A=aLi[i].firstChild;
			A.onclick=change;
		}
	}
	
}
