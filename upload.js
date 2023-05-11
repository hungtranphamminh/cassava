
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
  }
] 
console.log(data)


function showstatus(data){
  var healthycount = 0;

  var infected = 0;
  data.forEach(element => {
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

}

showstatus(data)



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