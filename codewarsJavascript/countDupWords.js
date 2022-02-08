var str="beni Beni beni kako kako je";

console.log(f(str))

function f(str) {
    
    var s=str.split(" ").map(word => word.toLowerCase());
    counter=0;
    console.log(s);

    let i=1;
    while(i<s.length){
        if(s[i]===s[i-1]){
            counter+=1;
            i+=1;
        while(s[i]===s[i-1]){
            i+=1;
        }
        }else{
            i+=1;

        }
    }
    return counter;
}


