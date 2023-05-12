
//get data from camera
let data = [
  {
    "status":"healthy",
    "prob":0.9,
    "src":"/image/test.jpg",
    "sec":"1"
  },
  {
    "status":"healthy",
    "prob":0.7,
    "src":"/image/test.jpg",
    "sec":"2"
  },
  {
    "status":"healthy",
    "prob":0.6,
    "src":"/image/test.jpg",
    "sec":"3"
  },
  {
    "status":"infected",
    "prob":0.7,
    "src":"/image/test.jpg",
    "sec":"4"
  },
  {
    "status":"healthy",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":"5"
  },
  {
    "status":"healthy",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":"6"
  },
  {
    "status":"healthy",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":"7"
  },
  {
    "status":"healthy",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":"8"
  },
  {
    "status":"a",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":"9"
  },
  {
    "status":"b",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":10
  },
  // {
  //   "status":"c",
  //   "prob":0.3,
  //   "src":"/image/test.jpg",
  //   "sec":11
  // },
  {
    "status":"d",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":12
  },
  {
    "status":"a",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":13
  },
  {
    "status":"b",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":14
  },
  {
    "status":"a",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":15
  },
  {
    "status":"a",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":16
  },
  {
    "status":"d",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":17
  },
  {
    "status":"a",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":18
  },
  {
    "status":"d",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":19
  },
  {
    "status":"healthy",
    "prob":0.9,
    "src":"/image/test.jpg",
    "sec":20
  },
  {
    "status":"healthy",
    "prob":0.9,
    "src":"/image/test.jpg",
    "sec":21
  },
  {
    "status":"healthy",
    "prob":0.9,
    "src":"/image/test.jpg",
    "sec":22
  },
  {
    "status":"healthy",
    "prob":0.9,
    "src":"/image/test.jpg",
    "sec":23
  },
  {
    "status":"healthy",
    "prob":0.9,
    "src":"/image/test.jpg",
    "sec":24
  },
  {
    "status":"healthy",
    "prob":0.9,
    "src":"/image/test.jpg",
    "sec":25
  },
  {
    "status":"healthy",
    "prob":0.9,
    "src":"/image/test.jpg",
    "sec":26
  },

] 
// console.log(data)

var sectioncount=0;
var healthycount = 0;
var infected = 0;
var a=0,b=0,c=0,d=0;
var adata=[],bdata=[],cdata=[],ddata=[],hdata=[]

//take in array of object and then classifi them into different array
function classifidata(data){
  data.forEach(element => {
    sectioncount+=1
    
    switch(element.status){
      case "healthy":
        healthycount+=1;
        hdata.push(element);
        break;
      case "a":
        a+=1;
        infected+=1;
        adata.push(element)
        break;
      case "b":
        b+=1;
        infected+=1;
        bdata.push(element)
        break;
      case "c":
        c+=1;
        infected+=1;
        cdata.push(element)
        break;
      case "d":
        d+=1;
        infected+=1;
        ddata.push(element)
        break;
      default:
        
        
    }
  });
}

function updatehealthy(){
  document.getElementById("hsum").innerText=`${healthycount} ${healthycount>1?" sections are ":"section is "} healthy `;
  document.getElementById("hl1").innerHTML=`${healthycount} ${healthycount>1?"sections are ":"section is"} in a healthy state`

  hdata.forEach(element=>{
    console.log(element)
    let sid=element.sec.toString()
    console.log(sid)
    document.getElementById("hl2").innerHTML+=`
      <div class="img-block">
        <img id=${sid} src=${element.src} class="s-img">
        <div class="sec-name">Section ${element.sec}</div>
      </div>
    `
  });


}

function updatea(){
  document.getElementById("a1").innerHTML=`${a} ${a>1?"sections are ":"section is"} infected with a`
  adata.forEach(element=>{
    console.log(element)
    document.getElementById("a2").innerHTML+=`
      <div class="img-block">
        <img src=${element.src} class="s-img">
        <div class="sec-name">Section ${element.sec}</div>
      </div>
    `
  });
}

function updateb(){
  document.getElementById("b1").innerHTML=`${b} ${b>1?"sections are ":"section is"} infected with b`
  bdata.forEach(element=>{
    console.log(element)
    document.getElementById("b2").innerHTML+=`
      <div class="img-block">
        <img src=${element.src} class="s-img">
        <div class="sec-name">Section ${element.sec}</div>
      </div>
    `
  });
}

function updatec(){
  document.getElementById("c1").innerHTML=`${c} ${c>1?"sections are ":"section is"} infected with c`
  cdata.forEach(element=>{
    console.log(element)
    document.getElementById("c2").innerHTML+=`
      <div class="img-block">
        <img src=${element.src} class="s-img">
        <div class="sec-name">Section ${element.sec}</div>
      </div>
    `
  });
}

function updated(){
  document.getElementById("d1").innerHTML=`${d} ${d>1?"sections are ":"section is"} infected with d`
  ddata.forEach(element=>{
    console.log(element)
    document.getElementById("d2").innerHTML+=`
      <div class="img-block">
      <img src=${element.src} class="s-img">
        <div class="sec-name">Section ${element.sec}</div>
      </div>
    `
  });
}

classifidata(data)

//show summary as well as section status
function showstatus(data){

  // console.log(healthycount)
  if (healthycount!==0){
    document.getElementById("hl").style.display="block"
    updatehealthy()
  }
  else{
    document.getElementById("hl").style.display="none"
  }
  if (infected!==0){
    document.getElementById("in-sum").innerText=`${infected} ${infected>1?" sections are ":"section is "} infected `;
  }

  if (a!==0){
    document.getElementById("a").style.display="block"
    updatea()
  }
  else{
    document.getElementById("a").style.display="none"
  }
  if (b!==0){
    document.getElementById("b").style.display="block"
    updateb()
  }
  else{
    document.getElementById("b").style.display="none"
  }
  if (c!==0){
    document.getElementById("c").style.display="block"
    updatec()
  }
  else{
    document.getElementById("c").style.display="none"
  }
  
  
  if (d!==0){
    document.getElementById("d").style.display="block"
    updated()
  }
  else{
    document.getElementById("d").style.display="none"
  }



  var currentdate = new Date(); 
  var datetime = "Latest Record On " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  
  document.getElementById("now").innerText=datetime
  document.getElementById("total").innerText=`Out of ${sectioncount} ${sectioncount>1?"sections ":"section "}:`

}

showstatus(data)

//////////////////////////////////////////////////////////////////////////////////////////// 
                              //image zoom


// function imageZoom(imgID, resultID) {
//   var img, lens, result, cx, cy;
//   img = document.getElementById(imgID);
//   console.log(img)
//   result = document.getElementById(resultID);
//   /*create lens:*/
//   lens = document.createElement("DIV");
//   lens.setAttribute("class", "img-zoom-lens");
//   /*insert lens:*/
//   img.parentElement.insertBefore(lens, img);
//   /*calculate the ratio between result DIV and lens:*/
//   cx = result.offsetWidth / lens.offsetWidth;
//   cy = result.offsetHeight / lens.offsetHeight;
//   /*set background properties for the result DIV:*/
//   result.style.backgroundImage = "url('" + img.src + "')";
//   result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
//   /*execute a function when someone moves the cursor over the image, or the lens:*/
//   lens.addEventListener("mousemove", moveLens);
//   img.addEventListener("mousemove", moveLens);
//   /*and also for touch screens:*/
//   lens.addEventListener("touchmove", moveLens);
//   img.addEventListener("touchmove", moveLens);
//   function moveLens(e) {
//     var pos, x, y;
//     /*prevent any other actions that may occur when moving over the image:*/
//     e.preventDefault();
//     /*get the cursor's x and y positions:*/
//     pos = getCursorPos(e);
//     /*calculate the position of the lens:*/
//     x = pos.x - (lens.offsetWidth / 2);
//     y = pos.y - (lens.offsetHeight / 2);
//     /*prevent the lens from being positioned outside the image:*/
//     if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
//     if (x < 0) {x = 0;}
//     if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
//     if (y < 0) {y = 0;}
//     /*set the position of the lens:*/
//     lens.style.left = x + "px";
//     lens.style.top = y + "px";
//     /*display what the lens "sees":*/
//     result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
//   }
//   function getCursorPos(e) {
//     var a, x = 0, y = 0;
//     e = e || window.event;
//     /*get the x and y positions of the image:*/
//     a = img.getBoundingClientRect();
//     /*calculate the cursor's x and y coordinates, relative to the image:*/
//     x = e.pageX - a.left;
//     y = e.pageY - a.top;
//     /*consider any page scrolling:*/
//     x = x - window.pageXOffset;
//     y = y - window.pageYOffset;
//     return {x : x, y : y};
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////// 



//pie chart

window.onload = function() {
  chart_data=[{
    type: "pie",
    startAngle: 240,
    yValueFormatString: "##0.00\"%\"",
    indexLabel: "{label} {y}",
    dataPoints: [

    ]
  }]
  
  if (healthycount>0)chart_data[0].dataPoints.push({color:"lightgreen",y: `${pcal(healthycount)}`, label: "Healthy"})
  if (a>0)chart_data[0].dataPoints.push({y: `${pcal(a)}`, label: "a"})
  if (b>0)chart_data[0].dataPoints.push({y: `${pcal(b)}`, label: "b"})
  if (c>0)chart_data[0].dataPoints.push({y: `${pcal(c)}`, label: "c"})
  if (d>0)chart_data[0].dataPoints.push({y: `${pcal(d)}`, label: "d"})
  console.log(chart_data[0].dataPoints)
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Cassava Farm Record",
      color:"green"
    },
    data: chart_data
    
  });
  
  chart.render();
}


//calculate % for pie chart
function pcal(num){
  return num/sectioncount*100
}




var imgsrc;

function readURL(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      

      reader.onload = function(e) {
        imgsrc=e.target.result;
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', imgsrc);
        $('.file-upload-content').show();
  
        $('.image-title').html(input.files[0].name);
        document.getElementById("directthis").setAttribute("src", imgsrc);
        console.log("this the upload one:",imgsrc)
      };
      
      reader.readAsDataURL(input.files[0]);
  
      

    } else {
      removeUpload();
    }
  }





function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
      $('.image-upload-wrap').addClass('image-dropping');
    });
    $('.image-upload-wrap').bind('dragleave', function () {
      $('.image-upload-wrap').removeClass('image-dropping');
});



