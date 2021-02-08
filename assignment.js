//Number-1

function kilometerToMeter(kilometer){
    if(kilometer >= 0){
        var meter = kilometer*1000;
    }
    else{
        return 'distance cannot be negative'
    }
    return meter;
}


//Number-2
function budgetCalculator(watch, phone, leptop){
    var total = (watch * 50) + (phone * 100) + (leptop * 500);
    return total;
}



//Number-3
function hotelCost(days){
    var totalCost = 0;
    if(days<=10){
         totalCost=days*100;
    }
    else if(days<=20){
        var firstTimeCOst = 10 * 100;
        var remainingDays = days - 10;
        var secondTimeCost = remainingDays * 80;
        totalCost = firstTimeCOst + secondTimeCost;
    }
    else{
        firstTimeCOst = 10 * 100;
        secondTimeCost = 10 * 80;
        remainingDays = days - 20;
        var thirdTimeCost = remainingDays * 50;
        totalCost = firstTimeCOst + secondTimeCost + thirdTimeCost;

    }
    return totalCost;
}  


//Number-4

function megaFriend(name){
    var element = 0;
    for(var i = 0; i < name.length; i++){
        if(name[i].length > element){
            element = name[i].length;
            var longName = name[i];
        }
    }
    return longName;
}
