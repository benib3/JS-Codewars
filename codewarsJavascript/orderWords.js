words="is2 Thi1s T4est 3a";
alert(order(words));

function order(words){
   let arr=words.split(" ");
   let isNumber=words.match(/\d/g);
   let newWord=[];

   for(var i=1;i<=isNumber.length;i++){
       let ind= isNumber.indexOf(i.toString());
       newWord.push(arr[ind]);
   }

 return newWord.join(" ");







}