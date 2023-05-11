
//get data from camera
let data = [
  {
    "status":"healthy",
    "prob":0.9
  },
  {
    "status":"healthy",
    "prob":0.7
  },
  {
    "status":"healthy",
    "prob":0.6
  },
  {
    "status":"infected",
    "prob":0.7
  },
  {
    "status":"healthy",
    "prob":0.3
  },
  {
    "status":"healthy",
    "prob":0.3
  },
  {
    "status":"healthy",
    "prob":0.3
  },
  {
    "status":"healthy",
    "prob":0.3
  },
  {
    "status":"a",
    "prob":0.3
  },
  {
    "status":"b",
    "prob":0.3
  },
  {
    "status":"c",
    "prob":0.3
  },
  {
    "status":"d",
    "prob":0.3
  },
  {
    "status":"e",
    "prob":0.3
  },
  {
    "status":"f",
    "prob":0.3
  },
  {
    "status":"a",
    "prob":0.3
  },
  {
    "status":"a",
    "prob":0.3
  },
  {
    "status":"a",
    "prob":0.3
  },
  {
    "status":"a",
    "prob":0.3
  },
  {
    "status":"a",
    "prob":0.3
  },
] 
console.log(data)

var sectioncount=0;
var healthycount = 0;
var infected = 0;

function showstatus(data){

  data.forEach(element => {
    sectioncount+=1
    //console.log(element)   
    if (element.status==="healthy")
        healthycount+=1;
    else{
      infected+=1;
    }    
  });
  console.log(healthycount)
  if (healthycount!==0){
    document.getElementById("hsum").innerText=`${healthycount} ${healthycount>1?" sections are ":"section is "} healthy `;
  }
  if (infected!==0){
    document.getElementById("in-sum").innerText=`${infected} ${infected>1?" sections are ":"section is "} infected `;
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
console.log(data)
showstatus(data)


window.onload = function() {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Cassava Farm Record",
      color:"green"
    },
    data: [{
      type: "pie",
      startAngle: 240,
      yValueFormatString: "##0.00\"%\"",
      indexLabel: "{label} {y}",
      dataPoints: [
        {color:"lightgreen",y: `${hpor}`, label: "Healthy"},
        {color:"crimson",y: `${ipor}`, label: "Infected"},

      ]
    }]
  });
  chart.render();
}




var hpor = healthycount / sectioncount*100;
var ipor = 100 - hpor;

// const dataSource = {
//   chart: {
//     caption: "Cassava Farm Record",
//     showlabels: "0",
//     showvalues: "1",
//     showpercentvalues: "0",
//     decimal: "2",
//     enableslicing: "1",    
//     slicingdistance: "20",
//     pieYScale: "100",
//     pieSliceDepth: "25",
//     startingangle: "90",
//     reverseLegend: "1",
//     theme: "fusion"
//   },
//   data: [
//     {
//       label: "Healthy Section",
//       value: `${hpor}`,
//       displayvalue: `${hpor}%`,
//       isSliced: "1",
//       color: "#4169e1"
//     },
//     {
//       label: "Infected Section",
//       value: `${ipor}`,
//       displayvalue: `${ipor}%`,
//       isSliced: "1",
//       color: "#4169e1"
//     }
//   ]
// };

// FusionCharts.ready(function() {
//   var myChart = new FusionCharts({
//     type: "pie3d",
//     renderAt: "chart-container",
//     width: "100%",
//     height: "100%",
//     dataFormat: "json",
//     dataSource
//   }).render();
// });




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




