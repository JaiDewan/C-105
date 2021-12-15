Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() {
  Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capyure_image">';
  });
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WKorVTV8J/model.json",modelLoaded);
function modelLoaded(){
    console.log("model is loaded")
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
