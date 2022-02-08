


const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    var rez=0;
    if (begin>end) return 0;
    
    while(begin<=end) {
        

        begin+=step;
        rez+=begin-step;

    }

    return rez;

  };

  console.log(sequenceSum(1,5,3));

