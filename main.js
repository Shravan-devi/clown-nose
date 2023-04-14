noseX=0;
noseY=0;
function preload(){
    clown_nose= loadImage("https://i.postimg.cc/Hn0vMgmh/clownnose.png");
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', getPose);

}

function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX,noseY,20);
    image(clown_nose, noseX-15, noseY-15, 30, 30);

}

function take_snapshot(){
    save("snap.png");
}

function modelLoaded(){
    console.log('modelLoaded');
}
function getPose(results){
    if(results.length>0){
        console.log(results);
        console.log('nose_x'+ results[0].pose.nose.x);
        console.log('nose_y' +results[0].pose.nose.y);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
    }
}