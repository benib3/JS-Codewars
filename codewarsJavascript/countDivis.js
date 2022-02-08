
console.log(getDivisorsCnt(4))

function getDivisorsCnt(n){
    // todo parseInt  return  parseInt(n/2);
 counter=0;
 var br=1;
 for(br;br<=n;br++){
     if(n%br==0){
         counter++;
     }
 }
  
  return counter;
}

function getDivisorsCnt2(n){
    let output = 0; 
    for (let i=1; i<=n; i++) {
      if (n % i == 0) {
        output += 1; 
}
}
  return output;
}

