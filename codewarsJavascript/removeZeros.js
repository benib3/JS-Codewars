




//remove zeros from start 
a=[0,9,5,0,0,0,0,2,0,0];
n=a.length;
removeZeros(a,n);
function removeZeros(a , n) {
 
    // index to store the first
    // non-zero number
    var ind = -1;

    // traverse in the array and
    // find the first
    // non-zero number
    for (i = 0; i < n; i++) {
        if (a[i] != 0) {
            ind = i;
            break;
        }
    }
   



    // if no non-zero number is there
    if (ind == -1) {
        document.write("Array has leading zeros only");
        return;
    }

    // Create an array to store
    // numbers apart from leading zeros
    var b = Array(n - ind).fill(0);

    // store the numbers removing leading zeros
    for (i = 0; i < n - ind; i++)
        b[i] = a[ind + i];

    // prvar the array
    for (i = 0; i < n - ind; i++)
        document.write(b[i] + " ");
}
 

   



