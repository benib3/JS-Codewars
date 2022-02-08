var arr=[42, 5, 19, 2, 77];
var arr1=["C", "A", 
"b", 2, 77];
 alert(fun2(arr1));


function fun(arr){
   
    arr.sort(function(a,b)
       {return a-b});
    
return arr[0]+arr[1];
 

}
function fun2(arr){
   
    arr.sort();
    
return arr;
 

}


