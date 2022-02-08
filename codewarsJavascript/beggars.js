

const niz=[1,2,3,4,5];

console.log(beggars(niz,2))


function beggars(niz,n){
    
    var rez=[];
    var sum=0;

    for (let index = 0; index < n; index++) {
        sum=0;
      
        for (let i = index; i < niz.length; i+=n) {
            
            sum+=(niz[i]);
          
            }
            
            rez.push(sum);
        }
        return rez;

}