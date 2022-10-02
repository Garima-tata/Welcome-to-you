
function calculate(){

    var amount = document.getElementById("amt").value;
    var qualit =document.getElementById("quality").value;
    var number = document.getElementById("divide").value;
    if (amount==""){
        document.getElementById("id").innerHTML="enter amount";
    }
    else if(number==""){
        document.getElementById("id").innerHTML="enter number of people";
    }
    else{
    var three = Math.round((amount*qualit)/number);
    document.getElementById("id").innerHTML=three;}
    // alert(three);
}
