function ajax(method,url,data,async,successfn){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest;
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.open(method,url+'?'+data,async);
	if(method=='POST'){
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
		xhr.send(data);
	}else{
		xhr.send();
	}
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				successfn(xhr.responseText);	
			}else{
				alert(xhr.status);
			}
		}
	}
}