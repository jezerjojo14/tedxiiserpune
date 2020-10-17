document.addEventListener("DOMContentLoaded", ()=>{
  var canvas = document.getElementById("acanvas");

  var w = canvas.width = 500;
  var h = canvas.height = 500;

  var context = canvas.getContext("2d");

  for(i=0;i<w/8;i++) {
      for(j=0;j<h/8;j++) {

          var t=150;
          var num = Math.floor(Math.sqrt(Math.random())*((t)+0.07));
          // num+=60;
          var radius = Math.random()*10;
          context.beginPath();
          context.arc((i*123 + j)%w, (j*123)%h, radius, 0, 2*Math.PI);
          context.fillStyle = (num<t) ? ("rgb(" + num*0.8 + "," + num*0.9 + "," + num + ")"):("#e62b1e");
          context.fill();
          if ((i*123 + j)%w < radius) {
            context.beginPath();
            context.arc(w+(i*123 + j)%w, (j*123)%h, radius, 0, 2*Math.PI);
            context.fillStyle = (num<t) ? ("rgb(" + num*0.8 + "," + num*0.9 + "," + num + ")"):("#e62b1e");
            context.fill();
          }
          else if (w-((i*123 + j)%w) < radius) {
            context.beginPath();
            context.arc(w-(i*123 + j)%w, (j*123)%h, radius, 0, 2*Math.PI);
            context.fillStyle = (num<t) ? ("rgb(" + num*0.8 + "," + num*0.9 + "," + num + ")"):("#e62b1e");
            context.fill();
          }
          else if ((j*123)%h < radius) {
            context.beginPath();
            context.arc((i*123 + j)%w, h+(j*123)%h, radius, 0, 2*Math.PI);
            context.fillStyle = (num<t) ? ("rgb(" + num*0.8 + "," + num*0.9 + "," + num + ")"):("#e62b1e");
            context.fill();
          }
          else if (h-((j*123)%h) < radius) {
            context.beginPath();
            context.arc((i*123 + j)%w, h-(j*123)%h, radius, 0, 2*Math.PI);
            context.fillStyle = (num<t) ? ("rgb(" + num*0.8 + "," + num*0.9 + "," + num + ")"):("#e62b1e");
            context.fill();
          }
      }
  }

  document.getElementsByClassName('preloader')[0].style.background="url("+canvas.toDataURL()+") fixed";
  document.getElementsByClassName('translucent')[0].style.background="url("+canvas.toDataURL()+") fixed";
});

window.onload=()=>{
  setTimeout(function () {
    window.scrollTo(0,0);
    document.getElementsByClassName('preloader-wrapper')[0].style.animationPlayState="running";
    document.body.style.overflowY="scroll";
    document.getElementsByClassName('content-wrapper')[0].style.paddingRight="0";
    document.getElementsByClassName('content-wrapper')[0].style.opacity=1;
    document.getElementsByClassName('content-wrapper')[0].style.filter="blur(0)";
    document.getElementsByClassName('preloader-wrapper')[0].addEventListener("animationend", ()=>{
      document.getElementsByClassName('preloader-wrapper')[0].style.display="none";
    });
  }, 20000);
};
