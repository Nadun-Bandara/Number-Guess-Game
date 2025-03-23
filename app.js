
function gess(){
    let count=0;
    while(count<3){

        count++;
    let randomNo=Math.floor(Math.random() * 10) + 1;
    let value=document.getElementById("txt1").value;
    if(randomNo==value ){
        document.getElementById("p1").innerText=value+" is a Correct Number";
        
       
    }
    else if(value>randomNo){
        document.getElementById("p1").innerText=value+" greter than Correct Number";
        
       
    }
    else if(value<randomNo){   
        document.getElementById("p1").innerText=value+" less than Correct Number";
        
       
    }
    else{}
    }
    console.log("count : "+count);
    
}