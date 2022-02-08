function openOrSenior(data){
    var res=[];

    for(var i=0;i<data.length;i++){
        res[i]=(data[i][0]>=55 && data[i][1]>7) ? 'Senior' : 'Open';
    }

   return res;
        
}

function openOrSenior2(data){
    var res=[];
    for(var i=0;i<data.length;i++){
        if(data[i][0]>=55 && data[i][1]>7){
            res.push("Senior");
        }else {
            res.push("Open");
        }
    }
    return res;
}


