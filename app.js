const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

const fromDollarToYen = (amount) => {
    let toDollar = amount / oneEuroIs.USD
    let toYen = toDollar * oneEuroIs.JPY
    return Number(toYen.toFixed(2))
};

const fromEuroToDollar = (amount) => {
    return amount * oneEuroIs.USD
};

const fromYenToPound = (amount) => {
    let toEuro = amount / oneEuroIs.JPY;
    let toPound = toEuro * oneEuroIs.GBP
    return Number(toPound.toFixed(2))
};


console.log(fromYenToPound(25000))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };