
document.getElementById('dpButton').addEventListener('click', function(){


    const getdoposit = document.getElementById('dp');
    const newDepositstring = getdoposit.value;
    const depositAmount = parseFloat(newDepositstring);

    getdoposit.value = '';

    if(isNaN(newDepositstring)){
        alert('Enter Number');
        return;
    }

    if(newDepositstring == '') {
        alert('Enter Number');
        return;
    }

    getdoposit.value = '';
    // console.log(typeof depositAmount);

    const depoAmount = document.getElementById('totaldeposit');
    const oldDpMoney = depoAmount.innerText;
    const newSetAmount = parseFloat(oldDpMoney);

    // console.log(typeof newSetAmount);

    const totalDpamount = depositAmount + newSetAmount;

    // console.log(totalDpamount);

    depoAmount.innerText = totalDpamount;


    const mainAcountBalance = document.getElementById('totalBalance');
    const balanceRepet = mainAcountBalance.innerText;
    const balance = parseFloat(balanceRepet);

    // console.log(balance);
    // console.log(typeof balance);

    mainAcountBalance.innerText = balance + depositAmount;


    getdoposit.value = '';

    


})

document.getElementById('submitWidthdreow').addEventListener('click', function(){
    const inputWidrow = document.getElementById('inpuWidth');
    const widthdrowfun = inputWidrow.value;
    const widthfun = parseFloat(widthdrowfun);
    // console.log(widthfun)
    // console.log(typeof widthfun)

    inputWidrow.value = '';

    if(isNaN(widthdrowfun)){
        alert('Enter Number');
        return;
    }else if(widthdrowfun == ""){
        alert('Enter Number');
        return;
    }else{



        const outMoney = document.getElementById('totalwidthdrow');
        const Omoney = outMoney.innerText;
        const conOutMoney = parseFloat(Omoney);
    
        // console.log(conOutMoney)
        // console.log(typeof conOutMoney)



        
    
        const totwid = widthfun + conOutMoney;

       
        

        // console.log(totwid);
    
        outMoney.innerText = totwid;
    
        const mainAcountBalance = document.getElementById('totalBalance');
        const balanceRepet = mainAcountBalance.innerText;
        const balance = parseFloat(balanceRepet);
    
        // console.log(balance);
        // console.log(typeof balance);

       
        mainAcountBalance.innerText = balance - widthfun;

    
        inputWidrow.value = '';


    }


})
