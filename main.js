
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});
Webcam.attach('#camera');
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"'+ data_uri+'"/>';
    });
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Pz1_o_2z9/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }

}