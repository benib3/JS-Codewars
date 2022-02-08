input=[1,2,3,-4,-2];


alert(countPositivesSumNegatives(input));

function countPositivesSumNegatives(input) {
    var countpos=0;
    var sumneg=0;
    var res=[];
    
    
    for(var i=0;i<input.length;i++){
      if(input[i]>0){
        countpos++;
        
      }else {
        sumneg+=input[i];
     
    }
    
    // res.push(sumneg);


} 

 return res=[countpos,sumneg];
    
    
      
  }