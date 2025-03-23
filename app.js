
function gess(){
    let count=0;
    while(count<3){
    let randomNo=Math.floor(Math.random() * 10) + 1;
    let value=document.getElementById("txt1").value;
    if(randomNo==value ){
        document.getElementById("p1").innerText=value+" is a Correct Number";
        document.getElementById("h3").innerText="Correct Number is "+randomNo
        count++;
    }
    else if(value>randomNo){
        document.getElementById("p1").innerText=value+" greter than Correct Number";
        document.getElementById("h3").innerText="Correct Number is "+randomNo
        count++;
    }
    else if(value<randomNo){   
        document.getElementById("p1").innerText=value+" less than Correct Number";
        document.getElementById("h3").innerText="Correct Number is "+randomNo
        count++;
    }
    else{}
    }
    console.log("count : "+count);
    
}