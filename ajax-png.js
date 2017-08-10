
//get 获取二进制图片

function ajax(method,url,async,successfn){
	var xhr;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest;// 非ie6
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHTTP');// 兼容ie6
	}
	xhr.open(method,url,async); //异步填 true或者 false
    xhr.send();
    xhr.timeout=3000;
    xhr.ontimeout=function(event){
        alert("请求超时！")
    };
    xhr.responseType='blob';
    
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){//4.代表通讯读取完成、不代表成功
            if(xhr.status==200){//成功
                var blob=new Blob([xhr.response],{type:"image/png"});
				successfn(blob);	
			}else{
				alert(xhr.status);
			}
		}
	}
