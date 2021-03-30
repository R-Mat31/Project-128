function preload(){
 song1 = loadSound("Harry Potter Theme.mp3");
 song2 = loadSound("Pirates of the Caribbean Theme.mp3");
}
function setup(){
 canvas = createCanvas(350, 350);
 canvas.position(450, 200);
 video = createCapture(VIDEO);
 video.hide();
 poseNet = ml5.poseNet(video, model_loaded);
 poseNet.on("pose", got_poses);
}
function draw(){
 webcam = image(video, 0, 0, 350, 350);
}
function model_loaded(){
 console.log("Pose Net was initialised.");
}
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
function got_poses(results){
 if(results.length > 0){
  console.log(results);
  leftWristX = results[0].pose.leftWrist.x;
  leftWristY = results[0].pose.leftWrist.y;
  rightWristX = results[0].pose.rightWrist.x;
  rightWristY = results[0].pose.rightWrist.y;
  console.log("Left Wrist X = " + leftWristX + " Y = " + leftWristY + " Right Wrist X = " + rightWristX + " Y = " + rightWristY);
 }
}