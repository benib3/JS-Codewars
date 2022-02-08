var num=123999;


console.log(digRoot(num));
console.log(myDig(num));
console.log(myDig2(num));

console.log(digRootic(num));



function digRoot(n){
  while (n>9){
      let sum=0;
      while(n>0){
          const lastDig=n%10;
          n=Math.floor(n/10);
          sum+=lastDig;
      }
      n=sum;
  }
return n;
}

function myDig(n){
    while(n>9){
        n=n.toString().split("").reduce((sum,dig)=> sum+ +dig,0)
    }
    return n;
}

function myDig2(n){
    if(n<10){return n};
    var store=n.toString().split("");
    var sum=0;
    for (let index = 0; index < store.length; index++) {
        sum+=Number(store[index]);
        
    }
    return myDig2(sum);
}

function digRootic(n){
    return (n-1)%9+1;

}