
//get data from camera
let data = [
  {
    "status":"healthy",
    "prob":0.9,
    "src":"/image/test.jpg",
    "sec":1
  },
  {
    "status":"healthy",
    "prob":0.7,
    "src":"/image/test.jpg",
    "sec":2
  },
  {
    "status":"healthy",
    "prob":0.6,
    "src":"/image/test.jpg",
    "sec":3
  },
  {
    "status":"infected",
    "prob":0.7,
    "src":"/image/test.jpg",
    "sec":4
  },
  {
    "status":"healthy",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":5
  },
  {
    "status":"healthy",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":6
  },
  {
    "status":"healthy",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":7
  },
  {
    "status":"healthy",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":8
  },
  {
    "status":"a",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":9
  },
  {
    "status":"b",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":10
  },
  {
    "status":"c",
    "prob":0.3,
    "src":"/image/test.jpg",
    "sec":11
  },
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
console.log(data)

var sectioncount=0;
var healthycount = 0;
var infected = 0;
var a=0,b=0,c=0,d=0;
var adata=[],bdata=[],cdata=[],ddata=[],hdata=[]

function classifidata(data){
  data.forEach(element => {
    sectioncount+=1
    //console.log(element)   
    // if (element.status==="healthy")
    //     healthycount+=1;
    // else{

    //   infected+=1;
    // }    
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
    document.getElementById("hl2").innerHTML+=`
      <div class="img-block">
        <img src=${element.src} class="s-img">
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

function showstatus(data){

  // console.log(healthycount)
  if (healthycount!==0){
    updatehealthy()
  }
  if (infected!==0){
    document.getElementById("in-sum").innerText=`${infected} ${infected>1?" sections are ":"section is "} infected `;
  }

  if (a!==0)updatea()
  if (b!==0)updateb()
  if (c!==0)updatec()
  if (d!==0)updated()


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



window.onload = function() {
  chart_data=[{
    type: "pie",
    startAngle: 240,
    yValueFormatString: "##0.00\"%\"",
    indexLabel: "{label} {y}",
    dataPoints: [
      // {color:"lightgreen",y: `${hpor}`, label: "Healthy"},
      // {color:"crimson",y: `${ipor}`, label: "Infected"},
  
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
  // console.log(data.dataPoints)
  chart.render();
}
// detailed chart

function pcal(num){
  return num/sectioncount*100
}

// var hpor = healthycount / sectioncount*100;
// var ipor = 100 - hpor;






function readURL(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      var imgsrc;

      reader.onload = function(e) {
        imgsrc=e.target.result;
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', imgsrc);
        $('.file-upload-content').show();
  
        $('.image-title').html(input.files[0].name);
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




