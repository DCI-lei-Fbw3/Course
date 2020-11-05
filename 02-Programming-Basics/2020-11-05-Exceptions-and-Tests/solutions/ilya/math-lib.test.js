const {difference, sum, product, quotient, abs, remainder, pow} = require('./math-lib');

test('subtracts second from first', () => {
    expect(difference(3, 2)).toBe(1);
}
);

test('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
}
); 

test('multiplies two numbers', () => {
    expect(product(2, 3)).toBe(6);
}
);

test('devides first by second', () => {
    expect(quotient(12, 4)).toBe(3);
}
);

test('devides first by second and outputs the remainder', () => {
    expect(remainder(7, 3)).toBe(1);
}
);

test('outputs absolute value of a number', () => {
    expect(abs(-10)).toBe(10);
}
);

test('takes first to the power of second', () => {
    expect(pow(2, 6)).toBe(64);
}
); 