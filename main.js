noseX=0;
noseY=0;
difference=0;
leftWx=0;
rightWx=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
    background("#969A97");
    document.getElementById("font_size").innerHTML = "Width and Height of a Square will be = " + difference + "px";
    fill('#F90093');
    stroke("#F90093");
    textSize(difference);
    text("Ruthvik", 100, 250);
}

function modelLoaded(){
    console.log("PoseNet Is Intialized!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX = "+ noseX + "noseY=" + noseY);

        leftWx= results[0].pose.leftWrist.x;
        rightWx= results[0].pose.rightWrist.x
        difference= floor(leftWx- rightWx);

        console.log("leftWrist = "+ leftWx +"rightWrist = "+ rightWx + "differnce = "+ difference);
    }
}
