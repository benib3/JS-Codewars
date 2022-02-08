var str="abcdef";

console.log(capitalize(str))


function capitalize(s){
    var niz=[];
    var niz2=[];
    var skupa=[];
    var odvojeno=s.split("");

    for (let i = 0; i < odvojeno.length; i++) {
        if(i%2==0){
            niz.push(odvojeno[i].toUpperCase())
        }else{
            niz.push(odvojeno[i])
        }
        
       
    }
    for (let i = 0; i < odvojeno.length; i++) {
        if(i%2==0){
            niz2.push(odvojeno[i])
        }else{
            niz2.push(odvojeno[i].toUpperCase())
        }
        
       
    }
    
    skupa.push(niz.join(""))
    skupa.push(niz2.join(""))


    return skupa;
  };