// functions

// function for calculating the amounts needed


function tipSplit(billTotal, percentage, amountOfPeople) {
    
    let tipPerPerson = (billTotal * percentage) / amountOfPeople;
    let totalPerPerson = billTotal / amountOfPeople;
    let amountPerPerson = totalPerPerson + tipPerPerson;
    
    tipDisplay.textContent = "$" + tipPerPerson.toFixed(2);
    totalDisplay.textContent = "$" + amountPerPerson.toFixed(2);
    return amountPerPerson;
}

//Target all inputs
    // Bill input
    // Buttons
    // Custom input
    // Number of people divided
    // Tip amound paid per person
    // Total amount paid per person
    // Reset button
    
    let billInput = document.getElementById("bill");
    let buttons = document.querySelectorAll(".button");
    let customFieldInput = document.getElementById("customField");
    let numberOfPeopleInput = document.getElementById("nop");
    let tipDisplay = document.getElementById("tipDisplay")
    let totalDisplay = document.getElementById("totalDisplay");
    let resetBtn = document.getElementById("reset");
    
    billInput.addEventListener("change", function() {
        let billTotal = parseFloat(billInput.value); 
        let percentage = parseFloat(customFieldInput.value);
        let amountOfPeople = parseFloat(numberOfPeopleInput.value);

        tipSplit(billTotal, percentage, amountOfPeople);
    });
    
    buttons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            btn.dataset.num;
            let billTotal = parseFloat(billInput.value); 
            let percentage = parseFloat(btn.dataset.num);
            let amountOfPeople = parseFloat(numberOfPeopleInput.value);

            tipSplit(billTotal, percentage, amountOfPeople);
        });
    });
    
    customFieldInput.addEventListener("change", function() {
        let billTotal = parseFloat(billInput.value); 
        let percentage = parseFloat(customFieldInput.value) / 100;
        let amountOfPeople = parseFloat(numberOfPeopleInput.value);
        tipSplit(billTotal, percentage, amountOfPeople);
    });
    
    numberOfPeopleInput.addEventListener("change", function() {
        let billTotal = parseFloat(billInput.value); 
        let percentage = parseFloat(customFieldInput.value) / 100;
        let amountOfPeople = parseFloat(numberOfPeopleInput.value);
        tipSplit(billTotal, percentage, amountOfPeople);
    });
    
    resetBtn.addEventListener("click", function() {
        bill.value = null;
        customFieldInput.value = null;
        numberOfPeopleInput.value = null;
        totalDisplay.innerText = "$0.00";
        tipDisplay.innerText = "$0.00";
    });
    
    
   

 
 




















































// let billInput = document.querySelector("#bill");

// billInput.addEventListener("input", function(){
//     let bill = billInput.value;
//     let custom = parseFloat(customInput.value) / 100;
//     let nop = parseFloat(numberOfPeople.value);
//     custom = customInput.value / 100;
//     tipAmount(bill, custom, nop)
//     totalAmount(bill, custom, nop)
// })

// let buttons = document.querySelectorAll(".button");
// buttons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         let tipPercentage = parseFloat(button.dataset.num);
//         let bill = billInput.value;
//         if(isNaN(tipPercentage)){
//             tipPercentage = 0;
//         }else{
//         customInput.value = tipPercentage * 100;
//         }
//         let nop = parseFloat(numberOfPeople.value);
//         tipAmount(bill, tipPercentage, nop)
//         totalAmount(bill, tipPercentage, nop)
//     })
// })

// let customInput = document.querySelector("#customField");
// let custom = parseFloat(customInput.value) / 100;
// customInput.addEventListener("input", function() {
//     let bill = billInput.value;
//     let custom = parseFloat(customInput.value) / 100;
//     let nop = parseFloat(numberOfPeople.value);
//     tipAmount(bill, custom, nop)
//     totalAmount(bill, custom, nop)
// })

// let numberOfPeople = document.querySelector("#nop");
// let nop = parseFloat(numberOfPeople.value);
// numberOfPeople.addEventListener("change", function() {
//     let bill = billInput.value;
//     let custom = parseFloat(customInput.value) / 100;
//     let nop = parseFloat(numberOfPeople.value);
//     tipAmount(bill, custom, nop)
//     totalAmount(bill, custom, nop)
// })

// let tipDis = document.getElementById("tipDisplay")
// let totalDis = document.getElementById("totalDisplay")
// function tipAmount(bill, tipPercentage, numberOfPeople) {   
//     let amount = bill * tipPercentage / numberOfPeople;
//     if(isNaN(amount)){
//         amount = 0;
//     } if(!isFinite(amount)){
//         amount = 0;
//     }
//     tipDis.innerHTML = ("$" + parseFloat(amount).toFixed(2))
// }
// function totalAmount(bill, tipPercentage, numberOfPeople) {
//     let tip = bill * tipPercentage;
//     let tipTotal = parseFloat(tip) + parseFloat(bill);
//     let tipTotalPerPerson = tipTotal / parseFloat(numberOfPeople);
//     if(isNaN(tipTotalPerPerson)){
//         tipTotalPerPerson = 0;
//     } if(!isFinite(tipTotalPerPerson)){
//         tipTotalPerPerson = 0;
//     }
//     totalDis.innerText = ("$" + parseFloat(tipTotalPerPerson).toFixed(2));
// }

// let reset = document.querySelector("#reset");
// reset.addEventListener("click", function() {
//     billInput.value = null;
//     customInput.value = null;
//     numberOfPeople.value = null;
//     totalDis.innerText = "$0.00"
//     tipDis.innerText = "$0.00"
// });

// function tipSplit(bill, numberOfPeople, tipPercentage) {

//     // calculate tip per person
    
//     let tipPerPerson = (bill * tipPercentage) / numberOfPeople;
//     // calculate total per person
//     let billPerPerson = bill / numberOfPeople;
//     let totalPerPerson = billPerPerson + tipPerPerson;
//     // returns total per persons 
   
//     document.getElementById("tipDisplay").innerText = "$" + tipPerPerson;

//     document.getElementById("totalDisplay").innerText = "$" + totalPerPerson;
//     return totalPerPerson;
// }

// function getVaribles() {
//     let bill = parseFloat(billInput.value);
    
//     let numberOfPeople = parseFloat(numberOfPeopleInput.value);
    
//     let customField = parseFloat(customFieldInput.value);
    
//     let buttons = document.querySelectorAll('.button');
    

//     buttons.forEach(button => {
//     button.addEventListener("click", function(){
//         let tipPercentage = button.dataset.num;
//         let strPercent = button.innerHTML;
//         let newNum = parseInt(strPercent)
       
      
//     tipSplit(bill, numberOfPeople, newNum/100);
        

       
//     })
// })
// }

// let billInput = document.getElementById("bill");
// billInput.addEventListener("change", getVaribles);


// let numberOfPeopleInput = document.getElementById("nop");
// numberOfPeopleInput.addEventListener("change", getVaribles);

// let customFieldInput = document.getElementById("customField");
// customFieldInput.addEventListener("input", getVaribles);



// let resetBtn = document.querySelector("#reset");
// resetBtn.addEventListener("click", function() {
//     billInput = null;
//     numberOfPeopleInput = null;
//     document.getElementById("totalDisplay").innerText = "$0.00"
//     document.getElementById("tipDisplay").innerText = "$0.00"
// })






// let button5 = document.getElementById("p5");
// button5.addEventListener("click", function() {
//     button5 = 0.05;
//     tipPercentage = button5;
//    console.log(tipPercentage);
    
// });
// let button10 = document.getElementById("p10");
// button10.addEventListener("click", function(){
//     button10 = 0.10;
//     tipPercentage = button10;
   
// });
// let button15 = document.getElementById("p15");
// button15.addEventListener("click", function(){
//     button15 = 0.15;
//     tipPercentage = button15;
// });
// let button25 = document.getElementById("p25");
// button25.addEventListener("click", function() {
//     button25 = 0.25;
//     tipPercentage = button25;
// });
// let button50 = document.getElementById("p50");
// button50.addEventListener("click", function() {
//     button50 = 0.50;
//     tipPercentage = button50;
    
// });

// function tipSplit(bill, numberOfPeople, tipPercentage) {
//     // bill = parseFloat(bill);
//     // calculate tip per person
//     let tipPerPerson = (bill * tipPercentage) / numberOfPeople;
//     // calculate total per person
//     let billPerPerson = bill / numberOfPeople
//     let totalPerPerson = billPerPerson + tipPerPerson;
//     // returns total per persons  
//     return totalPerPerson;
// }

// const billInput = document.getElementById("bill");
// billInput.addEventListener("change", function() {
//     const bill = billInput.value;
//     console.log(bill);
// });
// const numberOfPeopleInput = document.getElementById("nop");
// numberOfPeopleInput.addEventListener("change", function() {
//     const numberOfPeople = numberOfPeopleInput.value;
    
// });

// let buttons = document.querySelectorAll('.button');
// console.log(buttons);
// buttons.forEach(button => {
//     button.addEventListener("click", function(){
//         let tipPercentage = button.dataset.num;
//         let strPercent = button.innerHTML;
//        let newNum = parseInt(strPercent)
//        console.log(newNum/100);
//     })
// })



