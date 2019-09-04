//this initialzes our string so it can be passed from
//function to function, growing line by line into
//a full reciept
function getReceipt() {
    var text1 = "<td>Size: </td>"; //don't understand why this matters
    var runningTotal = 0;
    var sizeTotal = 0;
    var selectedSize = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) { //this is talling up the checked items in array
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize +"<br>";//aren't lines 27-30 covering this?
        }
    }

    //connecting size with amounts
    if (selectedSize === "personal") {
        sizeTotal = 6;
    }  else if (selectedSize === "medium") {
        sizeTotal = 10;
    }  else if (selectedSize === "large") {
        sizeTotal = 14;
    }  else if (selectedSize === "xl") {
        sizeTotal = 16;
    }
    var textSize = document.getElementById("tSize");
    var textSizeTotal = document.getElementById("sizeTotal");
    textSize.innerHTML = "Size: " + selectedSize;
    textSizeTotal.innerHTML= "$ " + sizeTotal;
    runningTotal = sizeTotal;
    console.log(selectedSize + " =  $" + sizeTotal + " .00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + " .00");
    getCrust(runningTotal, text1); //all three vars will be passed on to each function

};
//adding crust to total
function getCrust( runningTotal, text1) {
    var text2 = "<th>Crust: </th>";
    var runningTotal = (0 + runningTotal);
    var crustTotal = 0;
    var selectedCrust = 0;
    var crustArray = document.getElementsByClassName("crust");
    for (var j = 0; j < crustArray.length; j++) { //this is talling up the checked items in array
        if (crustArray[j].checked) {
            selectedCrust = crustArray[j].value;
            text2 = text2 + selectedCrust + "<br>";
        }
    }
    //connecting crust with amounts
    if (selectedCrust === "plain") {
        crustTotal = 0;
    }  else if (selectedCrust === "garlic") {
        crustTotal = 0;
    }  else if (selectedCrust === "spicy") {
        crustTotal = 0;
    }  else if (selectedCrust === "house") {
        crustTotal = 0;
    } else if (selectedCrust === "stuffed") {
        crustTotal = 3;
    }

    var textCrust = document.getElementById("tCrust");
    textCrust.innerHTML = ("Crust: " + selectedCrust);
    var textCrustTotal = document.getElementById("crustTotal");
    textCrustTotal.innerHTML = ("$" + crustTotal); 
    runningTotal = runningTotal + crustTotal;
    console.log(selectedCrust + " =  $" + crustTotal +".00");
    console.log("crust text2: " + text2);
    console.log("subtotal: $" + runningTotal + " .00");
    getCheese(runningTotal, text2); //all three vars will be passed on to each function

};

//adding cheese totals
function getCheese(runningTotal, tex2) {
    var text3 = "<th>Cheese: </th>";
    var runningTotal = (0 + runningTotal);
    var cheeseTotal = 0;
    var selectedCheese = "";
    var cheeseArray = document.getElementsByClassName("cheese");
    for (var k = 0; k < cheeseArray.length; k++) { //this is talling up the checked items in array
        if (cheeseArray[k].checked) {
            selectedCheese = cheeseArray[k].value;
            text3 = text3 + selectedCheese + "<br>";
        }
    }
    //connecting cheese with amounts
    if (selectedCheese === "chNone") {
        cheeseTotal = 0;
    }  else if (selectedCheese === "reg") {
        cheeseTotal = 0;
    }  else if (selectedCheese === "xCheese") {
        cheeseTotal = 3;
    }

    var textCheese = document.getElementById("tCheese");
    textCheese.innerHTML = ("cheese: " + selectedCheese);
    var textCheeseTotal = document.getElementById("cheeseTotal");
    textCheeseTotal.innerHTML = ("$" + cheeseTotal);
    runningTotal = runningTotal + cheeseTotal;
    console.log(selectedCheese + " =  $" + cheeseTotal +".00");
    console.log("cheese text3: " + text3);
    console.log("subtotal: $" + runningTotal + " .00");
    getSauce(runningTotal, text3); //all three vars will be passed on to each function

};

//adding sauce totals
function getSauce( runningTotal, text3) {
    var text4 = "<th>Sauce: </th>";
    var runningTotal = (0 + runningTotal);
    var sauceTotal = 0;
    var selectedSauce = 0;
    var sauceArray = document.getElementsByClassName("sauce");
    for (var m = 0; m < sauceArray.length; m++) { //this is talling up the checked items in array
        if (sauceArray[m].checked) {
            selectedSauce = sauceArray[m].value;
            text4 = text4 + selectedSauce + "<br>";
        }
    }
    //connecting sauce with amounts
    if (selectedSauce === "sNone") {
        sauceTotal = 0;
    }  else if (selectedSauce === "marinara") {
        sauceTotal = 0;
    }  else if (selectedSauce === "white") {
        sauceTotal = 0;
    } else if (selectedSauce === "bbq") {
        sauceTotal = 0;
    }


    var textSauce = document.getElementById("tSauce");
    textSauce.innerHTML = ("Sauce: " + selectedSauce);
    var textSauceTotal = document.getElementById("sauceTotal");
    textSauceTotal.innerHTML = ("$" + sauceTotal);
    runningTotal = runningTotal + sauceTotal;
    console.log(selectedSauce + " =  $" + sauceTotal +".00");
    console.log("sauce text4: " + text4);
    console.log("subtotal: $" + runningTotal + ".00");
    getMeat(runningTotal, text4); //all three vars will be passed on to each function

};


function getMeat(runningTotal, text4) {
    var text5 = "<th>Meat: </th>";
    var runningTotal = (0 + runningTotal);
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meat");
    for (var m = 0; m < meatArray.length; m++) {
        if (meatArray[m].checked) {
            selectedMeat.push(meatArray[m].value);
                console.log("selected meat item: (" + meatArray[m].value + ")");
                text5 = text5 + meatArray[m].value + "<br>";
        }
    }

    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    }  else {
        meatTotal = 0;
    }

    var textMeat = document.getElementById("tMeat");
    textMeat.innerHTML = ("Meat: " + selectedMeat);
    var textMeatTotal = document.getElementById("meatTotal");
    textMeatTotal.innerHTML = ("$" +  meatTotal);
    runningTotal = runningTotal + meatTotal;
    console.log(selectedMeat + " =  $" + meatTotal +".00");
    console.log("meat text4: " + text5);
    console.log("subtotal: $" + runningTotal + " .00");
    getVeggie(runningTotal, text5); //all three vars will be passed on to each function
};

function getVeggie(runningTotal, text5) {
    var text6 = "<th>Veggie: </th>"; 
    var runningTotal = (0 + runningTotal);
    var veggieTtl = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggie");

    for (var n = 0; n < veggieArray.length; n++) {
        if (veggieArray[n].checked) {
            selectedVeggie.push(veggieArray[n].value);
                console.log("selected veggie item: (" + veggieArray[n].value + ")");
                text6 = text6 + veggieArray[n].value + "<br>";
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTtl = (veggieCount - 1);
    }  else {
        veggieTtl = 0;
    }

    var textVeggie = document.getElementById("tVeggie");
    textVeggie.innerHTML = ("Veggie: " + selectedVeggie);
    var textVeggieTotal = document.getElementById("veggieTotal");
    textVeggieTotal.innerHTML = ("$" + veggieTtl); 
    runningTotal = (runningTotal + veggieTtl);
    console.log("total selected veggie items: " + veggieCount);
    console.log(veggieCount + "veggie -  1 free veggie = " + '$' + veggieTtl + ".00");
    console.log("veggie text6: " + text6);
    console.log("Purchase Total: "+"$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = "Total:";
    document.getElementById("total").innerHTML = "$ " + runningTotal + ".00";
    $("#getReceipt").show();
};
