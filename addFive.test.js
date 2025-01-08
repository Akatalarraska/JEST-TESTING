const addFive = require('./addFive');


test('return the value + 5',( ) => {
    expect(addFive(7)).toBe(12);
    expect(addFive(0)).toBe(5);
    expect(addFive(-7)).toBe(-2);
    expect(addFive("abdc")).toBe("abdc5");
    }
)