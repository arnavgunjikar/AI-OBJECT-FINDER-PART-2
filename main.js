video = "";
status = "";

function preload()
{
    
}

function setup()
{
    canvas = createCanvas(430,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 430, 380);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " Status : Detecting Objects ";
    document.getElementById("input_box").value;
}

function modelLoaded()
{
    console.log("MODEL LOADED!");
    status = true;
}