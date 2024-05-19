
/* 首页顶部音乐播放控制 */
function syaudbf(){
    
    
    
    var bfkztu="sh-main-top-mu";//获得播放控制按钮
    var bfz=document.getElementById(bfkztu).lang;//获得播放状态
    //console.log(bfz);

    var audio = document.getElementById("sh-main-top-musicplay-b");//取到音乐播放器
    

    if (bfz == 0) {
        //没有播放则开始播放音乐
        document.getElementById("musicplay").pause();//暂停独立音乐播放器
        
        audio.play();//播放音乐
        document.getElementById(bfkztu).lang="1";//更新播放状态为播放中
        document.getElementById("sh-main-top-mucisjd").style.display="block";//显示音乐播放动画
        document.getElementById("sh-main-top-g-m").style="background: rgb(255,255,255,0);";//去除上级父元素背景

        var tul=document.querySelector("#sh-main-top-mu").getAttribute("data-bfzt");//获取当前的图标
        //console.log(tul)
        if (tul == "bb") {
            document.getElementById("sh-main-top-mu").className="fa-regular fa-circle-pause fa-lg";
            document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt","bbz");
        }else if(tul == "bbh"){
            document.getElementById("sh-main-top-mu").className="fa-regular fa-circle-pause fa-lg";
            document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt","zbbh");
        }
        
            //开一个定时器,每500毫秒检测音乐播放状态
            timer2=setInterval(function(){
            if(audio.paused){
                // 当音乐没有播放时则关闭定时器 
                //--------console.log("关闭定时器");
                //console.log("未播放");
                
                document.getElementById(bfkztu).lang="0";//更新播放状态为未播放
                document.getElementById("sh-main-top-mucisjd").style.display="none";//隐藏音乐播放动画
                document.getElementById("sh-main-top-g-m").style="background: rgb(215 215 215 / 75%);";//恢复上级父元素背景
                var tul=document.querySelector("#sh-main-top-mu").getAttribute("data-bfzt");//获取当前的图标
                //console.log(tul)
                if (tul == "bbz") {
                    document.getElementById("sh-main-top-mu").className = "fa-regular fa-circle-play fa-lg"
                    document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt","bb");
                }else if(tul == "zbbh"){
                    document.getElementById("sh-main-top-mu").className = "fa-regular fa-circle-play fa-lg"
                    document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt","bbh");
                }
                clearInterval(timer2);//关闭定时器
                return;
                
            }else{
                //console.log("在播放");
            }
                
            },500);
    }else{
        //在播放则暂停播放
        audio.pause();//暂停播放音乐
        clearInterval(timer2);//关闭定时器
        document.getElementById(bfkztu).lang="0";//更新播放状态为未播放
        document.getElementById("sh-main-top-mucisjd").style.display="none";//隐藏音乐播放动画
        document.getElementById("sh-main-top-g-m").style="background: rgb(215 215 215 / 75%);";//恢复上级父元素背景
        var tul=document.querySelector("#sh-main-top-mu").getAttribute("data-bfzt");//获取当前的图标
        //console.log(tul)
        if (tul == "bbz") {
            document.getElementById("sh-main-top-mu").className = "fa-regular fa-circle-play fa-lg"
            document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt","bb");
        }else if(tul == "zbbh"){
            document.getElementById("sh-main-top-mu").className = "fa-regular fa-circle-pause fa-lg"
            document.querySelector("#sh-main-top-mu").setAttribute("data-bfzt","bbh");
        }

    }

    


}

function showTags(url) {
      var tags = ID3.getAllTags(url);
      console.log(tags);
      document.getElementById('title').textContent = tags.title || "";
      document.getElementById('artist').textContent = tags.artist || "";
      document.getElementById('album').textContent = tags.album || "";

      var image = tags.picture;
      if (image) {
        var base64String = "";
        for (var i = 0; i < image.data.length; i++) {
            base64String += String.fromCharCode(image.data[i]);
        }
        var base64 = "data:" + image.format + ";base64," +
                window.btoa(base64String);
        document.getElementById('picture').setAttribute('src',base64);
      } else {
        document.getElementById('picture').style.display = "none";
      }
    }


