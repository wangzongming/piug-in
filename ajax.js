function ajax(method,url,data,async,successfn){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest;// 非ie6
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHTTP');// 兼容ie6
	}
	xhr.open(method,url,data,async); //异步填 true或者 false
	if(method=='POST'){
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
		xhr.send(data);
	}else{
		xhr.send();
	}
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){//4.代表通讯读取完成、不代表成功
			if(xhr.status==200){//成功
				successfn(xhr.responseText);	
			}else{
				alert(xhr.status);
			}
		}
	}
}
