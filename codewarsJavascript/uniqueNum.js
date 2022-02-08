var arr=[3, 10, 3, 3, 3 ];

alert(findUniq(arr));


function findUniq(arr){
//   alert(arr.sort());
  for(var i=1;i<arr.length;i++){
      first=arr[0];
      if(first!=arr[i]){
          return arr[i];

      }else 
      continue;
  }

  
   
    
}