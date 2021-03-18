var dialogs = document.getElementById('dialogs');
var dialog1 = document.getElementById('dialog1');
var closeBtn = document.getElementById('close');

closeBtn.addEventListener('click',function() {
    dialog1.close();
})

var dialog2 = document.getElementById('dialog2');
var showModeless = document.getElementById('modeless-show');
var okModeless = document.getElementById('modeless-ok');

// modeless-show が押されたらモードレスダイアログが開く
showModeless.addEventListener('click', function() {
    dialog2.show();
})

// okBtn が押されたらダイアログが閉じる
okModeless.addEventListener('click', function() {
    dialog2.close();
})

var dialog3 = document.getElementById('dialog3');
var showModal = document.getElementById('modal-show');
var okModal = document.getElementById('modal-ok');

// modal-show が押されたらモードレスダイアログが開く
showModal.addEventListener('click', function() {
    dialog3.showModal();
})

// okBtn が押されたらダイアログが閉じる
okModal.addEventListener('click', function() {
    dialog3.close();
})


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(10, 10, 100, 100);
ctx.fillStyle = 'brown';
ctx.arc(100,60,30,0*Math.PI,360/180*Math.PI,true);
ctx.fill();

ctx.beginPath();    //新しいパスを始める
ctx.strokeStyle = '#cc1234'
ctx.arc(220,70,30,0/180*Math.PI,72/180*Math.PI,true);
ctx.stroke();
ctx.beginPath();    
ctx.arc(270,50,30,72/180*Math.PI,144/180*Math.PI,true);
ctx.stroke();
ctx.beginPath();    
ctx.arc(300,90,30,144/180*Math.PI,216/180*Math.PI,true);
ctx.stroke();
ctx.beginPath();    
ctx.arc(275,135,30,216/180*Math.PI,288/180*Math.PI,true);
ctx.stroke();
ctx.beginPath();    
ctx.arc(223,123,30,288/180*Math.PI,360/180*Math.PI,true);
ctx.stroke();