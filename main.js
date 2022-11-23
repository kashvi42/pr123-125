
noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
  
  function draw ()
  {
      background('grey');
      document.getElementById("text_side").innerHTML = 
  "Width And Height of a Text will be = " + difference +"px";
   textSize(difference);
   fill("purple");

  text("kashvi",noseX, noseY);
  }
  function modelLoaded()
  {
      console.log("poseNet is initialized");
  
  }
  function gotPoses(results){
      if (results.length >0){
          console.log("results is" + results);
          noseX = results[0].pose.nose.x;
          noseY = results[0].pose.nose.y;
          console.log("noseX = " + noseX +" noseY = " + noseY);
       
          leftWristX = results[0].pose.leftWrist.x;
          rightWristX = results[0].pose.rightWrist.x;
          difference = floor(leftWristX - rightWristX);
       
          console.log("leftWristX  = " + leftWristX  + 
          " rightWristX = "+ rightWristX + " difference = " + difference);
      }
  }
