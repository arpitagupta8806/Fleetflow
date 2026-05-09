function goTo(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  var t=document.getElementById('screen-'+id);
  if(t){
    t.classList.add('active');
    var inner=document.getElementById('phone-inner');
    if(inner)inner.scrollTop=0;
  }
}
function scalePhone(){
  var phone=document.querySelector('.iphone');
  var label=document.querySelector('.phone-label');
  if(!phone)return;
  var phoneH=800; // natural height including border
  var phoneW=410; // natural width including border
  var vw=window.innerWidth;
  var vh=window.innerHeight;
  var labelH=label?label.offsetHeight+8:0;
  var availH=vh-40; // 20px padding top+bottom
  var availW=vw-40;
  var scaleH=(availH-labelH)/phoneH;
  var scaleW=availW/phoneW;
  var scale=Math.min(scaleH,scaleW,1);
  phone.style.transform='scale('+scale+')';
  phone.style.marginBottom=((scale-1)*phoneH)+'px';
}
window.addEventListener('resize',scalePhone);
scalePhone();