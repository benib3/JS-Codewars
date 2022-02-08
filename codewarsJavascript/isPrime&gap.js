g=2;
m=100;
n=120;

console.log(gap(g,m,n))

function isPrime(n) {
        if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
        var m = Math.sqrt(n);
        for (var i=2;i<=m;i++) if (n%i==0) return false;
        return true;
}
     
     
function gap(g, m, n) {
       let mx = 0;
       for (m, n; m < n; m++) {
         if (isPrime(m)) {
           if (m - mx === g) return [mx, m];
           mx = m;
         }
       }
       return null;
}
