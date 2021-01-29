//login btn handler
const loginBtn=document.getElementById("login");
loginBtn.addEventListener("click", function(){
const loginArea=document.getElementById("login-area");
     loginArea.style.display ="none";
     const TranstionArea=document.getElementById("transtion-area");
     TranstionArea.style.display="block";
})



//deposit buttion
const depostiBtn = document.getElementById("adddeposit");
depostiBtn.addEventListener("click", function(){
    //input value catch
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    // //update value in span tag
    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // //show total deposit value in span tag
    // document.getElementById("currentDeposit").innerText = totalDeposit;


    //function call
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    //for blank input field
    document.getElementById("depositAmount").value = "";

})
//withdraw button event handler
const addWithdraw = document.getElementById("addwithdraw");
addWithdraw.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrAwamount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrAwamount").value = "";

})
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = depositNumber + currentNumber;
    
    document.getElementById(id).innerText = totalBalance;
}