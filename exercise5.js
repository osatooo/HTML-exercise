// templateを表示させる
// var template = document.getElementById('ex-template');
// var templateContent = template.content;
// document.body.appendChild(templateContent);


var templete = document.getElementById('sample-template').content.cloneNode(true);
  var host = document.getElementById('sample');
  var root = host.attachShadow({mode: 'open'});
  root.appendChild(templete);

// cloneNode(true)：現在のcontentの複製とその子孫の複製を返す
// attachShadow：要素にShadow DOMを関連付けるメゾット
// 'open'：シャドウルートに外部のJavaScriptからアクセスできるようにする


window.addEventListener("orientationchange", function() {
	
    if(screen.orientation.angle === 0){
        host.style.border = '50px solid coral';
    } else {
        host.style.border = '50px solid cadetblue';
    }
});

