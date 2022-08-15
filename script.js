let totalBill = document.getElementById('billTotalInput');
let totalTip = document.getElementById('tipInput');
let totalPeople = document.getElementById('numberOfPeople');
let perPersonTotal = document.getElementById('perPersonTotal');

let totalPeopleNumber = Number(totalPeople.innerText);

const calculateBill = () => {
    
    let totalBillValue = Number(totalBill.value);
    let totalTipPercentage = Number(totalTip.value) / 100;
    totalTipAmount = totalBillValue * totalTipPercentage;
    totalAmount = totalBillValue + totalTipAmount;
    perPersonTotalAmount = totalAmount / totalPeopleNumber;
    perPersonTotal.innerText = `$${perPersonTotalAmount.toFixed(2)}`;
  }
  
const increasePeople = () => {
   
    totalPeopleNumber += 1;
    totalPeople.innerText = totalPeopleNumber;

    calculateBill();
}

const decreasePeople = () => {

    if(totalPeopleNumber <= 1) {
        totalPeopleNumber = 2;
    }
    totalPeopleNumber -= 1;
    totalPeople.innerText = totalPeopleNumber;
  
    calculateBill();
}