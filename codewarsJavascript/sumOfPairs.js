var arr = [11, 3, 7, 5];
var sum=10;

console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");

function sumPairs(ints, s) {
//yzmi prvi provjeri da li se dobija suma S ako ne uvecaj index
//funkcija za sumu
const suma = (a,b) => {return a+b}
//
var sum=0;
var num=0;
var niz=[];

if(ints.length<2){return undefined};
for (let i = 0; i < ints.length; i++) {
    num=ints[i];
    for (let j = 1; j < ints.length; j++) {
        sum=suma(num,ints[j]);
        if(sum===s){
                niz.push(ints[i],ints[j])
            return niz;
        }else {
            j++;
        }
        
    }

}


    
 return [0,0];
  }