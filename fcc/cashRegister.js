"use strict";

function checkCashRegister(price, cash, cid) {

    let currency = {
        'ONE HUNDRED':  100,
        'TWENTY':       20,
        'TEN':          10,
        'FIVE':         5,
        'ONE' :         1,
        'QUARTER':      0.25,
        'DIME':         0.10,
        'NICKEL':       0.05,
        'PENNY':        0.01,
    }
    let drawer = getTotal(cid)
    let changeDue = cash - price

    if (drawer < changeDue) {
        return {
            'status': 'INSUFFICIENT_FUNDS', 
            'change': []};
    } else if (drawer === changeDue) {
        return {
            'status': 'CLOSED', 
            'change': cid};   
    } else {
        let change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
        while (getTotal(cid) > 0 && changeDue > 0) {
            // Determine coin to give as change
            let coinChange = getChange(changeDue, cid)
            // Update changedue, cid, and change
            changeDue -= currency[coinChange]
            cid.forEach((coin, i) => {
                if (coin[0] === coinChange && coin[1] !== 0) {
                    change[i][1] += currency[coinChange]
                    cid[i][1] -= currency[coinChange]
                }
            })
        }
        change = change.filter(a => a[1] !== 0).reverse()
        if (cash - price === +getTotal(change).toFixed(2)) {
            return {
                'status': 'OPEN', 
                'change': change}; 
        } else {
            return {
                'status': 'INSUFFICIENT_FUNDS', 
                'change': []};            
        }       
    }
}

function getTotal(arr) {
    return arr.reduce((sum, [_, val]) => sum + val, 0)
}

function getChange(val, cid) {
    let currency = {
        'ONE HUNDRED':  100,
        'TWENTY':       20,
        'TEN':          10,
        'FIVE':         5,
        'ONE' :         1,
        'QUARTER':      0.25,
        'DIME':         0.10,
        'NICKEL':       0.05,
        'PENNY':        0.01,
    }
    let cidObj = cid.reduce((obj, a) => {
        if (!(a[0] in obj)) {
            obj[a[0]] = a[1] 
        }
        return obj
    }, {})
    for (let coin in currency) {
        if (currency[coin] <= val.toFixed(2) && cidObj[coin] !== 0) {
            return coin
        }
    }
    return undefined
}

//   Tests

// let x = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// console.log(x) // {status: "INSUFFICIENT_FUNDS", change: []}

// let y = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// console.log(y) // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

// let z = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// console.log(z) // {status: "OPEN", change: [["QUARTER", 0.5]]}

// console.log( checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) )
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}