// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    //debugger;
    let answer = {
        "H": 0,
        "Q": 0,
        "D": 0,
        "N": 0,
        "P": 0
    }
    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    while (currency != 0) {
        if (currency >= 50) {
            answer.H = Math.floor(currency / 50);
            currency = currency % 50;

        } else if (currency >= 25) {
            answer.Q = Math.floor(currency / 25);
            currency = currency % 25;
            
        } else if (currency >= 10) {
            answer.D = Math.floor(currency / 10);
            currency = currency % 10;
            
        } else if (currency >= 5) {
            answer.N = Math.floor(currency / 5);
            currency = currency % 5;
            
        } else {
            answer.P = currency / 1;
            currency = 0;            
        }
    }

    for (const key in answer) {
        if (answer.hasOwnProperty(key) && answer[key] === 0) {
            delete answer[key];
        }
    }
    return answer;
}
