
/*
    by : 1746809408@qq.com
    
    说明：
    jq-cdn:必须写到页面
     <script src="https://cdn.bootcss.com/jquery/3.2.1/core.js"></script>
    直接把Banner new出来就行
    数据基本都是默认的  
    fangxiang:"left"/"right",  此项必填...
<script>
   var banner_con=$(".banner");//轮播图容器 id或者class
    //和样式写法和css写法完全一样 单位px
    var banner=new Banner(banner_con,{
        width:800,//轮播图片的宽
        height:350,//轮播图片的高
        imgArr:["img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg","img/1.jpg","img/2.jpg","img/3.jpg"],//存放图片的数组
        border:"1px solid blue",//容器边框
        margin:"0 auto",//div的margin
        //按钮样式
        btn_color:"rgba(102,139,139,0.3)",//按钮颜色
        btn_tcolor:"white",//按钮文字颜色
        btn_width:30,//左右按钮宽
        btn_height:100,//左右按钮高
        btn_fontsize:30,//左右按钮文字大小
        //圆点样式
        yd_color:"rgba(0,191,255,0.5)",//圆点色
        yd_width:20,//圆点宽
        yd_height:3,//圆点高
        yd_radius:"10px",//小圆点圆角
        yd_colored:"yellow",//圆点点击后颜色
        fangxiang:"right",//轮播自动滚动方向   必填***
        time:2000, //图片变换速度
        fadeTime:500,//变化速度
    });

*/
    function Banner(obj,datas){//Banner构造函数
        this.obj=obj;
        var obj_class;
        if(obj[0].className){
            obj_class="."+obj[0].className
        }else{
            obj_class="#"+obj[0].id
        }
        this.datas={};//主要数据存放对象
        str='';
        str+='<ul class="banner_ul">';
            $.each(datas.imgArr,function(i,v){
                str+='<li class="banner_li">';
                     str+='<img src=" '+v+' " alt=""/>';
                str+='</li>';
            });
        str+='<a href="javascript:;" class="banner_left"><</a>';
        str+='<a href="javascript:;" class="banner_right">></a>';
        str+='<ul class="yd">';
            $.each(datas.imgArr,function(i){
                str+='<li class="yd_li">';
                str+='</li>';
            });
        str+='</ul>';
        obj.css({//主容器的样式
            width:datas.width || 1000,
            height:datas.height || 300,
            border:datas.border || "1px solid blue",
            margin:0,padding:0,
            margin:datas.margin || "0 auto",
            position:"relative",
        });
        
       obj.html(str);//哈

        $(obj_class+" .banner_li").css({//每个li的样式
            width:datas.width || 1000,
            height:datas.height || 300,
            "list-style":"none",
            margin:0,padding:0,
            position:"absolute",
            top:0,
            left:0,
            display:"none",
        }); 
         $(obj_class+" .banner_li:first").css({
             display:"block"
         })
        $(obj_class+" .banner_ul").css({
             margin:0,padding:0,
        })
        $(obj_class+" .banner_li>img").css({//每个img的样式
            width:datas.width || 1000,
            height:datas.height || 300,
            "list-style":"none",
            margin:0,padding:0,
            vercital:"middle",
        });
        $(obj_class+" .banner_left,"+obj_class+" .banner_right").css({//左右按钮
            display:"inline-block",
            "text-decoration":"none",
            color:datas.btn_tcolor || "white",
            position:"absolute",
            top:0,
            bottom:0,
            margin:"auto",
            width:datas.btn_width || "30px",
            height:datas.btn_height || "100px",
            background:datas.btn_color || "rgba(102,139,139,0.3)",
            "text-align":"center",
            "line-height":datas.btn_height || "100px",
            "font-size":datas.btn_fontsize || 16,
            "z-index":"99",
            "cursor":"pointer",
        });
        $(obj_class+" .banner_left").css({
            left:0,
        });
         $(obj_class+" .banner_right").css({
            right:0,
        });
        $(obj_class+" .banner_left,"+obj_class+" .banner_right").hover(function(){//左右按钮效果
            $(this).css({
                width:"+=15px",
                transition:"0.3s"
            });
        },function(){
             $(this).css({
                width:datas.btn_width || 30,
                transition:"0.3s"
            });
        });
        $(obj_class+" .yd").css({//小圆点
            position:"absolute",
            width:"100%",
            "text-align":"center",
            left:"0",right:"'0",
            margin:0,padding:0,
            margin:"auto",
            bottom:10,
            "z-index":99,
        });
        $(obj_class+" .yd_li").css({//小圆点li
            "list-style":"none",
            width:datas.yd_width || 20,
            height:datas.yd_height || 3,
            display:"inline-block",
            border:"1px solid #ccc",
            "border-radius":datas.yd_radius || "10px",
            margin:0,padding:0,
            "margin":"0 10px",
            background:datas.yd_color || "rgba(0,191,255,0.5)",
            "cursor":"pointer",
        });
        $(obj_class+" .yd_li:first").css({
            background:datas.yd_colored || "yellow"
        })
        //功能实现
        var index=0;
       
        $(obj_class+" .banner_right").click(function(){//左点击
             index++;
            if(index>=$(obj_class+" .banner_li").length){
                index=0;
            }
            $(obj_class+" .yd_li").eq(index).css({ background:datas.yd_colored || "yellow"}).siblings().css("background",datas.yd_color || "rgba(0,191,255,0.5)");
            $(obj_class+" .banner_li").eq(index).fadeIn(datas.fadeTime || 700).siblings(obj_class+" .banner_li").hide(10);
        });
        $(obj_class+" .banner_left").click(function(){//右点基
             index--;
            if(index<0){
                index=$(obj_class+" .banner_li").length-1;
            }
            $(obj_class+" .yd_li").eq(index).css({background:datas.yd_colored || "yellow"}).siblings().css("background",datas.yd_color || "rgba(0,191,255,0.5)");//圆点
            $(obj_class+" .banner_li").eq(index).fadeIn(datas.fadeTime || 700).siblings(obj_class+" .banner_li").hide(10);
        });
        //每个圆点被点击
        $(obj_class+" .yd_li").click(function(){
            var m=$(this).index();//小圆点索引
            var n=index-m;//要走的次数
            if(n==0){ return;}
            if(n<0){
                (function iterator(i=0){
                    if(i>=Math.abs(n)){return};
                    $(obj_class+" .banner_right").click();
                    iterator(i+1)
                })();
            }else{
                 for(var i=0;i<Math.abs(n);i++){
                    $(obj_class+" .banner_left").click();
                }
            };

        });
        let t=null;
        t=setInterval(function(){//自动轮播
           $(obj_class+" .banner_"+datas.fangxiang || obj_class+" .banner_right").click();//可改值
        },datas.time || 2000);
        $(obj_class+" .banner_ul").hover(function(){//摸上去时干掉定时
            clearInterval(t)
        },function(){
            t=setInterval(function(){
                $((obj_class+" .banner_"+datas.fangxiang) || obj_class+" .banner_right").click();//可改值
            },datas.time||2000);
        });

    };//Banner构造函数over
