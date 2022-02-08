

console.log(multiplicationTable(3));

function multiplicationTable(indexes){

    var array = [];

  
    //---Loop for the groups
    for( var g = 0; g < indexes; g++){
  
      array[g] = [];
  
      
      for( var i = 0; i < indexes; i++){
  
        array[g][i] = (g + 1) * (i + 1);
  
      }
  
    }
  
    return array;
  
  }