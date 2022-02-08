s="Lisk Lisk Waves Steem Ripple Monero";

alert(findShort(s));

function findShort(s){
   s=s.trim();
   let words=s.split(" ");
   let shortestWord=words[0];

   for(let word of words){
       if(word.length!==0){
           if(word.length<=shortestWord.length){
               shortestWord=word;
           }
       }
   }
   return shortestWord.length;
   

}

//// LONGEST WORD

// function longestWord(str){
//     let words=str.split(" ");
//     let longestWord="";

//     for(let word of words){
//         if(word.length>longestWord.length){
//             longestWord=word;
//         }

//     }

//     return longestWord;
// }