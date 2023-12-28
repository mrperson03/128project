song1 = "";
song2 = "";
rightwristX = 0;
rightwristY = 0;
leftwristX = 0;
leftwristY = 0;
leftwristscore = 0;
status_leftwrist = "";

function preload() {
    song1= loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
  }
  
  function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
  
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function modelLoaded() {
    console.log("posenet is initialized");
  }
  

  function gotPoses(results) {
    if(results.length > 0) {
      console.log(results);
      leftwristX = results[0].pose.leftWrist.x;
      leftwristY = results[0].pose.leftWrist.y;
      console.log("lefteywristx = " + leftwristX + "leftwristy = " + leftwristY);
      rightwristX = results[0].pose.rightWrist.x;
      rightwristY = results[0].pose.rightWrist.y;
      console.log("rightwristx = " + rightwristX + "rightwristy = " + rightwristY);
  
    }
  }
  
  function draw() {
      background("white")
      image(video, 0, 0, 350, 350)
  }
