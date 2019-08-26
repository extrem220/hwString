describe('Test string', () => {
    describe('isCheckCharacter', () => {
        // GIVEN
        const testData = [
            {
                str: "HellOo",
                first: "l",
                second: "O",
                expected: true,
            },
            {
                str: "Hello",
                first: "L",
                second: "O",
                expected: false,
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {str, first, second, expected} = data;

            const actual = isCheckCharacter(str, first, second);

            //THEN
            it(`should return ${expected} when string = ${str} , firstSymbol = ${first} and secondSymbol = ${second}`, () => {
                assert.strictEqual(actual, expected);
            })
        })
    });
});