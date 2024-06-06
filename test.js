// Test 1

const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Test 2
const { fromEuroToDollar } = require('./app.js');

test("One euro should be 1.07 dollars", () => {

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    let euroToDollar = fromEuroToDollar(3.5); 
    
    // This is the comparison for the unit test
     expect(euroToDollar).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

// Test 3

const { fromDollarToYen } = require('./app.js');

test("One dollar should be 146.26 yen", () => {

    // If 1 dollar is 146.261 yen, then 7 dollars should be 1023.831 yen
    let dollarToYen = fromDollarToYen(1); 
    
    // This is the comparison for the unit test
     expect(dollarToYen).toBe(146.26); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

// Test 4

const { fromYenToPound } = require('./app.js');

test("One yen should be 0.01 GBP", () => {

    // If 1 yen is 0.01 GBP, then 25000 yen should be 138.98 GBP
    let yenToPound = fromYenToPound(25000); 
    
    // This is the comparison for the unit test
     expect(yenToPound).toBe(138.98); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});