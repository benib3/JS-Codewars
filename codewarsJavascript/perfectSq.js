var sq=121;
alert(fun(sq));


function fun(sq){
    var root1;
    var nextroot;
    if(Math.sqrt(sq)%1 ===0){
         root1=Math.sqrt(sq)
         nextroot=root1+1
    }else{
        return -1;
    }
    return nextroot*nextroot;
}