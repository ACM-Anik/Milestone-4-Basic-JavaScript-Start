/*
1. if ticket numbers is less than 100, then per ticket price : 100
2. if ticket numbers is more than 100, but less than 200 ; then 100 ticket will be 100/ticket rest tickets will be 90 taka per price
3. if you purchase more than 20 tickets
         first 100 ----> 100tk
         101 - 200 ----->90tk
         200+ ---------70tk
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const thirdTicketsRate = 70;
    if(ticketQuantity <= 100){
        const firstTotalCost = ticketQuantity * first100Rate;
        return firstTotalCost;
    }
    else if(ticketQuantity > 100 && ticketQuantity <= 200){
        const first100Taka = 100 * first100Rate;
        const remainingTickets = ticketQuantity - 100;
        const remainingTicketsPrice = remainingTickets * second100Rate;
        const totalCost = first100Taka + remainingTicketsPrice;
        return totalCost;
    }
    else if(ticketQuantity > 200){
        const first100Taka = 100 * first100Rate;
        const second100Taka = 100 * second100Rate ;
        const remainingTickets = ticketQuantity - 200;
        const remainingTicketsPrice = remainingTickets * thirdTicketsRate;
        const thirdTotalCost = first100Taka + second100Taka + remainingTicketsPrice;
        return thirdTotalCost;
    }
} 
const total = ticketPrice(220);   
console.log(total);     
