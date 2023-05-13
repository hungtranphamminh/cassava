
//sections's data
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
    "src":"/image/rwanda_story.jpeg",
    "sec":"3"
  },
  {
    "status":"a",
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


var sectioncount=0;   //total numbs of sections
var healthycount = 0; //total healthy secs
var infected = 0;     //total infected secs
var a=0,b=0,c=0,d=0;  // 4 diseases count
var adata=[],bdata=[],cdata=[],ddata=[],hdata=[]  //obj ar for each disease

//take in array of object and then classifi them into different array
function classifiData(data){
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


function updateHealthy(){
  document.getElementById("hsum").innerText=`${healthycount} ${healthycount>1?" sections are ":"section is "} healthy `;
  document.getElementById("hl1").innerHTML=`${healthycount} ${healthycount>1?"sections are ":"section is"} in a healthy state`

  hdata.forEach(element=>{
    
    let sid=element.sec.toString()
    var onClickParam = element.src
    
    onClickParam="zoomSection(\""+onClickParam+"\",\""+element.sec+"\")"
    

    document.getElementById("hl2").innerHTML+=`
      <div class="img-block">
        <img id=${sid} src=${element.src} class="s-img" onclick='${onClickParam}'>
        <div class="sec-name">Section ${element.sec}</div>
      </div>
    `

  });


}

// cuz healthy have some more stuff so me separate healthy | 4 disease
function updateSection(secState){
  var plural;
  var secArray;
  switch(secState){
    case "a":
      plural=a;
      secArray=adata;
      break;
    case "b":
      plural=b;
      secArray=bdata;
      break;
    case "c":
      plural=c;
      secArray=cdata;
      break;
    case "d":
      plural=d;
      secArray=ddata;
      break;
    default:
      break;
  }

  

  document.getElementById(secState+"1").innerHTML=`${plural} ${plural>1?"sections are ":"section is"} infected with ${secState}`

  

  secArray.forEach(element=>{
    // console.log(element)

    var onClickParam = element.src
    
    onClickParam="zoomSection(\""+onClickParam+"\",\""+element.sec+"\")"

    document.getElementById(secState+"2").innerHTML+=`
      <div class="img-block">
        <img src=${element.src} class="s-img" onclick='${onClickParam}'>
        <div class="sec-name">Section ${element.sec}</div>
      </div>
    `
  });
}


//show summary as well as section status
function showStatus(data){

  // console.log(healthycount)
  if (healthycount!==0){
    document.getElementById("hl").style.display="flex"
    updateHealthy()
    changeDisplay("hl")
  }
  else{
    hideEmptyCb("hl")
    document.getElementById("hl").style.display="none"
  }
  if (infected!==0){
    document.getElementById("in-sum").innerText=`${infected} ${infected>1?" sections are ":"section is "} infected `;
  }

  if (a!==0){
    document.getElementById("a").style.display="flex"
    updateSection("a")
    changeDisplay("a")
  }
  else{
    hideEmptyCb("a")
    document.getElementById("a").style.display="none"
  }
  if (b!==0){
    document.getElementById("b").style.display="flex"
    // updateb()
    updateSection("b")
    changeDisplay("b")
  }
  else{
    hideEmptyCb("b")
    document.getElementById("b").style.display="none"
  }
  if (c!==0){
    document.getElementById("c").style.display="flex"
    // updatec()
    updateSection("c")
    changeDisplay("c")
  }
  else{
    hideEmptyCb("c")
    document.getElementById("c").style.display="none"
  }
  if (d!==0){
    document.getElementById("d").style.display="flex"
    // updated()
    updateSection("d")
    changeDisplay("d")
  }
  else{
    hideEmptyCb("d")
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

// classifiData(data)
// showStatus(data)

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

// window.onload = function() {
function showPie() {
  chart_data=[{
    type: "pie",
    startAngle: 240,
    yValueFormatString: "##0.00\"%\"",
    indexLabel: "{label} {y}",
    dataPoints: [

    ]
  }]
  
  if (healthycount>0)chart_data[0].dataPoints.push({color:"lightgreen",y: `${percentageCal(healthycount)}`, label: "Healthy"})
  if (a>0)chart_data[0].dataPoints.push({y: `${percentageCal(a)}`, label: "a"})
  if (b>0)chart_data[0].dataPoints.push({y: `${percentageCal(b)}`, label: "b"})
  if (c>0)chart_data[0].dataPoints.push({y: `${percentageCal(c)}`, label: "c"})
  if (d>0)chart_data[0].dataPoints.push({y: `${percentageCal(d)}`, label: "d"})
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
function percentageCal(num){
  return num/sectioncount*100
}

//keeping the upload img source
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
        //document.getElementById("directthis").setAttribute("src", imgsrc);
        console.log("this the upload one:",imgsrc)
      };
      
      reader.readAsDataURL(input.files[0]);
      
      testDirect()
      

    } else {
      removeUpload();
    }
  }



function hideEmptyCb(status){
  document.getElementById(status+'cb').setAttribute("style","display:none")
}

function changeDisplay(status){

  document.getElementById(status+'cb').setAttribute("style","display:flex")

  var displaySec = document.getElementById(status)
  if (displaySec.style.display!=="none")displaySec.setAttribute("style","display:none")
  else {
    if ((status==="hl" && healthycount!==0)||
    (status==="a"&&a!==0)||
    (status==="b"&&b!==0)||
    (status==="c"&&c!==0)||
    (status==="d"&&d!==0))
    displaySec.setAttribute("style","display:flex")
  }
}


function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}




function zoomSection(isrc,sec){
  // console.log("event work")
  // console.log(isrc)
  var zoomAtr = "background-image:url(\""+isrc+"\")"
  // console.log(zoomAtr)
  document.getElementById("zoomC").setAttribute("style",`${zoomAtr}`)
  // console.log(document.getElementById("zoomC"))
  if (document.getElementById("mydiv").style.display!=="block")
    document.getElementById("mydiv").setAttribute("style","display:block")
  document.getElementById("zoomtitle").innerText=`Section ${sec} zoom out`
  
}

function resetSecDisplay(){
  var idArray = ["hl2","a2","b2","c2","d2"]
  idArray.forEach(element =>{
    document.getElementById(element).innerHTML=``
  })
}

function showColChart(){
  var options = {
    series: [{
    name: 'PRODUCT 1',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'PRODUCT 2',
    data: [13, 23, 20, 8, 13, 27]
  }, {
    name: 'PRODUCT 3',
    data: [11, 17, 15, 15, 21, 14]
  }, {
    name: 'PRODUCT 4',
    data: [21, 7, 25, 13, 22, 8]
  }],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
      '01/05/2011 GMT', '01/06/2011 GMT'
    ],
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
  };

  var chart = new ApexCharts(document.querySelector("#colchart"), options);
  chart.render();

}





// reload with interval
function pageReload(){
  healthycount=infected=a=b=c=d=sectioncount=0
  resetSecDisplay()
  classifiData(data)
  showPie()
  
  showStatus(data)
  showColChart()
  
}

pageReload()



// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function setDragDisplay(state){
  document.getElementById("mydiv").setAttribute("style",`display:${state}`)
}



//hover zoom
var addZoom = target => {
  // (A) GET CONTAINER + IMAGE SOURCE
  let container = document.getElementById(target),
      imgsrc = container.currentStyle || window.getComputedStyle(container, false);
      imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, "");
 
  // (B) LOAD IMAGE + ATTACH ZOOM
  let img = new Image();
  img.src = imgsrc;
  img.onload = () => {
    // (B1) CALCULATE ZOOM RATIO
    let ratio = img.naturalHeight / img.naturalWidth,
        percentage = ratio * 100 + "%";
 
    // (B2) ATTACH ZOOM ON MOUSE MOVE
    container.onmousemove = e => {
      let rect = e.target.getBoundingClientRect(),
          xPos = e.clientX - rect.left,
          yPos = e.clientY - rect.top,
          xPercent = xPos / (container.clientWidth / 100) + "%",
          yPercent = yPos / ((container.clientWidth * ratio) / 100) + "%";
 
      Object.assign(container.style, {
        backgroundPosition: xPercent + " " + yPercent,
        backgroundSize: img.naturalWidth + "px"
      });
    };
 
    // (B3) RESET ZOOM ON MOUSE LEAVE
    container.onmouseleave = e => {
      Object.assign(container.style, {
        backgroundPosition: "center",
        backgroundSize: "cover"
      });
    };
  }
};
 
// (C) ATTACH FOLLOW ZOOM
window.onload = () => addZoom("zoomC");




// {
// $('.image-upload-wrap').bind('dragover', function () {
//       $('.image-upload-wrap').addClass('image-dropping');
//     });
//     $('.image-upload-wrap').bind('dragleave', function () {
//       $('.image-upload-wrap').removeClass('image-dropping');
// });
// }


// setInterval(pageReload,300000)




// const upload = async () => {
  async function testDirect(){
  const inputFile = document.getElementById('input-img').files[0]
  if (inputFile) {
      const formdata = new FormData();
      formdata.append('file', inputFile, inputFile.name);
      const res = await fetch('http://127.0.0.1:8000/classfication/', {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
        mode: 'cors',
      });
      data = await res.json();
      console.log(data);
  }
  else console.log('Empty file input')
}