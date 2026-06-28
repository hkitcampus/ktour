(function(){
  'use strict';
  var bgFiles=["GettyImages-1271897700.jpg","GettyImages-a12232019.jpg","GettyImages-jv12624803.jpg","GettyImages-jv12624809.jpg","GettyImages-jv12624810.jpg","GettyImages-jv12624811.jpg"];
  var bgMobile=["GettyImages-1327113564.jpg","GettyImages-1332159646.jpg","GettyImages-a10464509.jpg","GettyImages-a11997018.jpg","GettyImages-a11997038.jpg","GettyImages-jv12255293.jpg","GettyImages-jv12627573.jpg"];
  var bgSeed=Math.random();
  function setBg(){ var bp=document.getElementById('bgPhoto'); if(bp) bp.style.backgroundImage="url('uploads/jeju_background/GettyImages-a12232019.jpg')"; }
  setBg();
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
  var heroVids=['Boy_flying_01.mp4','Boy_flying_02.mp4','Boy_flying_03.mp4'], hv=document.getElementById('heroVid'), hi=0;
  if(hv){ hv.addEventListener('ended', function(){ hi=(hi+1)%heroVids.length; hv.src='uploads/jeju_background/'+heroVids[hi]; hv.play().catch(function(){}); }); hv.play().catch(function(){}); }
  window.addEventListener('load', sizeBg); window.addEventListener('resize', sizeBg); window.addEventListener('resize', setBg); setTimeout(sizeBg, 400);
})();