var hour=new Date().getHours();
// var hour = 22;
document.body.style.backgroundColor="#ff9999";

if (hour>=12 && hour<16){
    document.getElementById("time").innerHTML="Afternoon";
    document.getElementById("image").src="afternoon.jpg";
    document.body.style.backgroundColor="#ffff80";
}
else if (hour>=16 && hour<22){
    document.getElementById("time").innerHTML="Evening";
    document.getElementById("image").src="evening.jpg";
    document.body.style.backgroundColor="#ff9933";
}
else if (hour>=22 || hour<4){
    document.getElementById("time").innerHTML="Night";
    document.getElementById("image").src="night.jpg";
    document.body.style.backgroundImage = "url('background.jpg')";
    
}
else if(hour>=4 && hour<12){
    document.getElementById("time").innerHTML="Morning";
    document.getElementById("image").src="morning.jpg";
    document.body.style.backgroundColor="blood";
}