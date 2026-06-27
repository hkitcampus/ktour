(function(){
  'use strict';
  var bgFiles=["GettyImages-1271897700.jpg","GettyImages-a12232019.jpg","GettyImages-jv12624803.jpg","GettyImages-jv12624809.jpg","GettyImages-jv12624810.jpg","GettyImages-jv12624811.jpg"];
  var bp=document.getElementById('bgPhoto');
  if(bp) bp.style.backgroundImage="url('uploads/jeju_background/"+bgFiles[Math.floor(Math.random()*bgFiles.length)]+"')";
  function sizeBg(){ var bl=document.getElementById('bgLayer'), p=document.getElementById('prog'); if(bl&&p) bl.style.height=(p.offsetTop+p.offsetHeight)+'px'; }
  document.querySelectorAll('.faq-item').forEach(function(item){
    var body=item.querySelector('.faq-body'), sign=item.querySelector('.faq-sign'), btn=item.querySelector('button'); if(!btn) return;
    btn.addEventListener('click', function(){
      var open=body.style.maxHeight && body.style.maxHeight!=='0px';
      document.querySelectorAll('.faq-body').forEach(function(b){ b.style.maxHeight='0px'; });
      document.querySelectorAll('.faq-sign').forEach(function(s){ s.textContent='＋'; });
      if(!open){ body.style.maxHeight=body.scrollHeight+40+'px'; sign.textContent='－'; }
    });
  });
  var ov=document.getElementById('zoomOverlay'), zi=document.getElementById('zoomImg');
  if(ov){ document.addEventListener('click', function(e){ var img=e.target.closest && e.target.closest('img[data-zoom]'); if(img){ zi.setAttribute('src', img.getAttribute('src')); ov.style.display='flex'; } });
    ov.addEventListener('click', function(){ ov.style.display='none'; zi.setAttribute('src',''); }); }
  window.addEventListener('load', sizeBg); window.addEventListener('resize', sizeBg); setTimeout(sizeBg, 400);
})();