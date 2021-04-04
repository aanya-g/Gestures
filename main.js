
Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 100
   });
   camera = document.getElementById("camera").innerHTML
   Webcam.attach('#camera');
   
   prediction_1 = "";
   prediction_2 = "";
   function take_snapshot(){
     Webcam.snap(function (data_url){
     document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_url+"' />"
     })
   }
   
   classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rLQ88Q27Z/model.json" , model_loaded);
   
   function model_loaded(){
     console.log("Model loaded succesfully!!")
   }
   
   function speak(){
       var synth = window.speechSynthesis;
       speak_data1 = "The first prediction is"+prediction_1;
       speak_data2 = "the second prediction is"+prediction_2;
       var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
       synth.speak(utterThis)
   }
   
   function check(){
     img = document.getElementById('captured_image');
     classifier.classify(img, gotResult);
   }
   
   function gotResult(error , result){
     if(error){
       console.error(error);
     }
     else {
       console.log(result);
       document.getElementById("result_emotion_name").innerHTML = result[0].label;
       document.getElementById("result_emotion_name2").innerHTML = result[1].label;
       console.log(result[1].label);
       prediction_1 = result[0].label;
       prediction_2 = result[1].label;
       speak()
      
       if(prediction_1 == "Thumbs up"){
         document.getElementById("update_emoji").innerHTML = "&#128077";
       }
       if(prediction_1 == "Victory"){
         document.getElementById("update_emoji").innerHTML = "&#x270C";
       }
       if(prediction_1 == "Amazing"){
         document.getElementById("update_emoji").innerHTML = "&#128076";
       }
       if(prediction_1 == "Vulcan Salute"){
         document.getElementById("update_emoji").innerHTML = "&#128406";
       }
       if(prediction_1 == "High Five"){
         document.getElementById("update_emoji").innerHTML = "&#128400";
       }
       if(prediction_1 == "Rock on"){
         document.getElementById("update_emoji").innerHTML = "&#129304";
       }
       if(prediction_1 == "Best of luck"){
         document.getElementById("update_emoji").innerHTML = "&#129310";
       }
       if(prediction_1 == "Call"){
         document.getElementById("update_emoji").innerHTML = "&#129305";
       }
       if(prediction_1 == "Bad"){
         document.getElementById("update_emoji").innerHTML = "&#128078";
       }
      
     
      if(prediction_2 == "Thumbs up"){
         document.getElementById("update_emoji2").innerHTML = "&#128077";
       }
       if(prediction_2 == "Victory"){
         document.getElementById("update_emoji2").innerHTML = "&#x270C";
       }
       if(prediction_2 == "Amazing"){
         document.getElementById("update_emoji2").innerHTML = "&#128076";
       }
       if(prediction_2 == "Vulcan Salute"){
         document.getElementById("update_emoji2").innerHTML = "&#128406";
       }
       if(prediction_2 == "High Five"){
         document.getElementById("update_emoji2").innerHTML = "&#128400";
       }
       if(prediction_2 == "Rock on"){
         document.getElementById("update_emoji2").innerHTML = "&#129304";
       }
       if(prediction_2 == "Best of luck"){
         document.getElementById("update_emoji2").innerHTML = "&#129310";
       }
       if(prediction_2 == "Call"){
         document.getElementById("update_emoji2").innerHTML = "&#129305";
       }
       if(prediction_2 == "Bad"){
         document.getElementById("update_emoji2").innerHTML = "&#128078";
       }
      }
   }