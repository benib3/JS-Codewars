var list=([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]);
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

console.log(f(list));



function f2(names) {
    var rez="";

    while(names.length){
        rez+=names.shift().name;
        if(names.length==1){
            rez+="&";
        }else if(names.length>1){
            rez+=",";
        }
    }
    return rez;
    // console.log(count);
    // return novaLista;
}