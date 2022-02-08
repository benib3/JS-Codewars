var order="milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"


console.log(getOrder(order));

function getOrder(input) {
    
        const menu = [
          'burger',
          'fries',
          'chicken',
          'pizza',
          'sandwich',
          'onionrings',
          'milkshake',
          'coke'
        ];
      
        let order = [];
      
        while (input !== '') {
          for (let i = 0; i < menu.length; i++) {
            while (input.indexOf(menu[i]) !== -1) {
              if (input.indexOf(menu[i]) >= 0) {
                order.push(menu[i][0].toUpperCase() + menu[i].slice(1));
                input = input.replace(menu[i], '');
              }
            }
          }
        }
      
      
        return order.join(' ');






    
  
  }