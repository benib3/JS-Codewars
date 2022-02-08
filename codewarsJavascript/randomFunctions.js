var s=['n','s','n','s','n','s','n','s','n','s'];
var num=[2,3,1,0,0,4,5,7,2,0,3];
var s="1";
var exp=('512+4*+3-')
console.log(set(num));

function set(array){
  const set=new Set();
  for (let index = 0; index < array.length; index++) {
    set.add(array[index]);
    
  }
  return set;
  
}

function moveZeros(n){
  let zeros=0;
  const movedZeros=n.reduce((mZeros,val,i)=>{
    if(val!=0){
      mZeros[i-zeros]=val;
    }else {
      zeros++;
    }
    return mZeros;
  },Array(n.length).fill(0));
  return movedZeros;
}


function sumTwoLowwest(){
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  num=num.sort((a, b) => b - a);
  return reducer(num[num.length-1],num[num.length-2]);

}


function isValidWalk2(walk) {
    let total = 0;
    if(walk.length!==10) return false;
    for(el of walk)
      if(el==='n' || el==='w') { 
          total++ 
        }else{
             total--};
      
    return !total;
}

function maskify(s){

  var arr=s.split('');

  for (let i = 0; i < arr.length; i++) {
    if(i<arr.length-4){
      arr[i]="#"
    }
  }
  return arr.join("");

}

function calc(e){
  const input=e.split('');
  const stack=[];
  const operations={
    "+":(a,b)=>a+b,
    "-":(a,b)=>a-b,
    "*":(a,b)=>a*b,
    "/":(a,b)=>a/b,
  }

  for (let i = 0; i < input.length; i++) {

    var token=input[i];
    
    if(operations[token]){
      console.log("Ovo je operativi: "+operations[token])
      const rValue=stack.pop()     
       const lValue=stack.pop()
       const result=operations[token](+lValue,+rValue);
       stack.push(result)

    }else{
      stack.push(token)
    }
    
  }
  return +stack.pop();
}