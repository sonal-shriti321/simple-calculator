function gethistory(){
     return document.getElementById("history-val").innerText;
}


function printhistory(num){
    document.getElementById("history-val").innerText=num;

}


function getresult(){
    return document.getElementById("result-val").innerText;

}
function printresult(num){
    if(num==""){
        document.getElementById("result-val").innerText=num;
    }
    else{
    document.getElementById("result-val").innerText=formattednum(num);}
}
function formattednum(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
function reverseformat(num){
    return num.replace(/,/g,"");

}

var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var op=reverseformat(getresult());
        if(op!=NaN){
            op=op + this.id;
            printresult(op);
            

        }
        
    })}

var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printhistory("");
            printresult("");
        }
        else if(this.id=="backspace"){
            var op=reverseformat(getresult());
            op.toString;
            if(op){
                op=op.substring(0,op.length-1);
                printresult(op);
            }
            
        }
        else  {
            var op=getresult();
            var history=gethistory();
            
            
            
            if(op!=""){
                op=reverseformat(op);
                history=history+op;
                
                if(this.id=="="){
                    var result=eval(history);
                    printresult(result);
                    printhistory("");

                }
                else{
                    history=history+this.id;
                    printhistory(history);
                    printresult("");}

            }  



        }
        }); 
    }


