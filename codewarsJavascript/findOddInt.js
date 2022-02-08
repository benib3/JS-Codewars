var ints=[3,3,4,2,2,1,1,3];

console.log(findOdd2(ints))

function findOdd(ints){
    const counts={}

    for (let i = 0; i < ints.length; i++) {
        const num=ints[i];
        if(!counts[num]){
            counts[num]=1;
        }else {
        counts[num]++;
    }
    }
    for(const number in counts){
        const count=counts[number];
        if(count%2!==0){
                return parseInt(number);
        }
    }


}


function findOdd2(ints){
    const counts=ints.reduce((counts,num)=>{
      
        if(!counts[num]){
            counts[num]=1;
        }else {
        counts[num]++;
    }
    return counts;
    },{});


    for(const number in counts){
        const count=counts[number];
        if(count%2!==0){
                return parseInt(number);
        }
    }


}