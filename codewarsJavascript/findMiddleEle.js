var arr=[2, 3, 1];

console.log(f(arr));


function f(arr) {

    var midd=0;

    for (let i = 0; i < arr.length; i++) {
        //sad sortujemo niz i loppujemo kroz njega i uzimamo srednju vriejdnost potom tu vrijednost trazimo u nizu
        var sorted=arr.slice(0).sort((function(a,b)
        {return a-b}));
        midd+=sorted[1];

        for (let j = 0; j < arr.length; j++) {
            if(arr[j]===midd){
               return j;
            }
        
    }
    
        
    }
 

}