

var domain="http://github.com/carbonfive/raygun";

console.log(domainName(domain));



function domainName(name){
    var urlic=new URL(name).host;
    console.log(urlic)
    var tacka=".";
    
    for (let i = 0; i < urlic.length; i++) {
        if(urlic[i].includes(tacka)){
            return urlic.substring(0,i);
            
        }
        
        
    }
    



}