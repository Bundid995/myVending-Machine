  var money = {
    onebaht: {
        name: '1baht',
        value: 1,
        count: 0
    },
    twobaht: {
        name: '2baht',
        value: 2,
        count: 0
    },
    fivebaht: {
        name: '5baht',
        value: 5,
        count: 0
    },
    tenbaht: {
        name: '10baht',
        value: 10,
        count: 0
    },
}

var url = 'http://www.mocky.io/v2/5c4982d83200004b000b588c';
var Product = [];
this.total = 0;
this.change = 0;
this.coinReturn = [];

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    this.Product = data.data;

    //display product list
    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    var ul = document.getElementById('productLst');
    return Product.map(function(product) {
        let div = createNode('div'),
        img = createNode('img'),
        p = createNode('p');
        img.src = product.image;          
        p.innerHTML = `${product.name} ${product.price+" baht"}`;
        append(div, img);
        append(div, p);
        append(ul, div);
    })
})
.catch(function(error) {
    console.log(error);
});   

         //insert coin
         function inSertCoin() {

            var attempt = 0;
            var txt;
            while (attempt < 1 ) {
              var added = prompt("Insert coins,only 1 baht, 2 baht, 5 baht or 10 baht: ");
              var intAdded = parseInt(added);
              if (intAdded === 1 || intAdded === 2 || intAdded === 5 || intAdded === 10 ) {

                if (confirm("The coin is added.")) {

                  this.total += intAdded;
                  moneyCount(intAdded, 1);
                  attempt++;
                  txt = "The total is: "+ this.total;
              } 
          }  
          else{
            alert("Please insert coins,only 1 baht, 2 baht, 5 baht or 10 baht are accepted:")
            added = 0;
            intAdded = 0;
            attempt++;
            txt = "The total is: "+ this.total;
        }

        document.getElementById("coin").innerHTML = txt;
    }
  }


      //count the money
      function moneyCount(count, flag) {

        if (count === 1 && flag === 1) {
            money.onebaht.count++;
        }
        if (count === 2 && flag === 1) {
            money.twobaht.count++;
        }
        if (count === 5 && flag === 1) {
            money.fivebaht.count++;
        }
        if (count === 10 && flag === 1) {
            money.tenbaht.count++;
        }
        
        var text = (money.onebaht.name) + " coin: " + (money.onebaht.count) + " coins" + "<br>"+(money.twobaht.name) +" coin: " + (money.twobaht.count) + " coins" + "<br>"+ (money.fivebaht.name) + " coin: " + (money.fivebaht.count) + 
        " coins"+ "<br>"+ (money.tenbaht.name) + " coin: " + (money.tenbaht.count) + " coins";
        
        document.getElementById("displayCoin").innerHTML = text;
    }      

      //select the product
      function selectProduct() {

        var data = this.Product;
        selection()

        function selection() {
            selectionFlag = false;
            alert("Welcome to our vending machine,  \n PepsiMax: " + data[0].price + " baht, PepsiDiet: " + data[1].price + " baht, Coke: " + data[2].price + " baht, Coke Vanilla (S): " + data[3].price + " baht, Coke Vanilla (L): " + data[4].price + " baht, Mountain Dew: " + data[5].price + " baht, ; \n click OK for select product")
            while (!selectionFlag) {
                var selection = prompt("type 1 for Pepsi Max, type 2 for Pepsi Diet ,type 3 for Coke, type 4 for Coke Vanilla (S) , type 5 for Coke Vanilla (L), type 6 for Mountain Dew")
                var selectionInt = parseInt(selection);
                if (selectionInt === 1 || selectionInt === 2  ||selectionInt ===  3 ||selectionInt ===  4 ||selectionInt ===  5 ||selectionInt ===  6) {
                    selectionFlag = true
                } else {
                    alert("Please ensure type 1-6 for product selection!")
                }
            }
            
            checkStock(selectionInt);
            
        }
        //check item
        function checkStock(choice) {

            if ((data[choice-1].in_stock) == true) {
                payment(choice);
            }
            else { alert("This product is currently out of stock, sorry for the inconvenience.")
        }     
}
  //calculate coin
  function payment(selected) {

    var totalInserted = this.total;
    var change = this.change;
    var productIndex = selected - 1;
    var price = data[Object.keys(data)[productIndex]].price;
    var name = data[Object.keys(data)[productIndex]].name;

    change = totalInserted - price;
    
    if (change < 0){
        alert("Please add more coins.")
        
    }else{
        //change tab
        $('[href="#returnCoin"]').tab('show');
        //display coins return
        var text = ("Your choice is: " + name + " and your change is " + change + " baht");
        document.getElementById("selection").innerHTML = text;
        //return change
        returnCoins(change);
    }
    
    
}
//return coin function
function returnCoins(change) {

    var coinsRefund = [money.onebaht, money.twobaht, money.fivebaht, money.tenbaht];
    var cashArray = coinsRefund.map((coin) => {
        return (coin.count = 0);
    })
    var coinReturn = change;
    var count = 0;
    var text = [];

    while(coinReturn > 0){
        if(coinReturn>=10) {
            coinReturn -= 10;
            coinsRefund[3].count++;
            
        }
        if (coinReturn >= 5){
            coinReturn -= 5;
            coinsRefund[2].count++;
        }
        if (coinReturn >= 2){
            coinReturn -= 2;
            coinsRefund[1].count++;
        }
        if (coinReturn >= 1){
            coinReturn -= 1;
            coinsRefund[0].count++;
        }
        
    }

    var result = coinsRefund.filter((returnC) => {
        return returnC.count >= 1
    })

    for (var i = 0; i < result.length; i++) {
        text.push(result[i].name + " : " + result[i].count + " Coins" + "<br>");
    }
    document.getElementById("result").innerHTML = text;
}

}

//refund coin function
function refundCoin(){

    var coinsRefund = [money.onebaht, money.twobaht, money.fivebaht, money.tenbaht];
    var total = 0;
    var text = [];
    console.log(coinsRefund);
    
    for (var i = 0; i < coinsRefund.length; i++) {
        if((coinsRefund[i].count) > 0) {

            total += (coinsRefund[i].value * coinsRefund[i].count);
            text.push(coinsRefund[i].name + " : " + coinsRefund[i].count + " Coins" + "<br>");
        }
    }
    $('[href="#returnCoin"]').tab('show');
    document.getElementById("refund").innerHTML = text;

    
}


