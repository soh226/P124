difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is initialized!");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
}
}
function draw(){
    background('#00ffe5');
    document.getElementById("text_size").innerHTML="Font size will be" +difference+"px";
    textSize(difference);
    fill('#009e37');
    stroke('#f7ff03');
    text("Soham",60,300);
}