describe('Test string', () => {
    describe('trunCate', () => {
        // GIVEN
        const testData = [
            {
                str: "A",
                maxLength: 1,
                expected: "A",
            },
            {
                str: "A",
                maxLength: 0,
                expected: "A",
            },
            {
                str: "My name is Andrew",
                maxLength: 0,
                expected: "My name is Andrew",
            },
            {
                str: "My name is Andrew",
                maxLength: 7,
                expected: "My n...",
            },
            {
                str: "My name is Andrew",
                maxLength: 17,
                expected: "My name is Andrew",
            },
            {
                str: "My name is Andrew",
                maxLength: 20,
                expected: "My name is Andrew",
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {str, maxLength, expected} = data;

            const actual = trunCate(str, maxLength);

            //THEN
            it(`should return ${expected} when string = ${str} , maxLength = ${maxLength}`, () => {
                assert.strictEqual(actual, expected);
            })
        })
    });
    describe('isCheckCharacter', () => {
        // GIVEN
        const testData = [
            {
                str: "helloo",
                first: "l",
                second: "O",
                expected: true,
            },
            {
                str: "heLLoo",
                first: "l",
                second: "O",
                expected: true,
            },
            {
                str: "HeLlOo",
                first: "l",
                second: "O",
                expected: true,
            },
            {
                str: "HELLOO",
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
            {
                str: "HellO",
                first: "L",
                second: "O",
                expected: false,
            },
            {
                str: "HeLLo",
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
    describe('isPresenceOfSubstring', () => {
        // GIVEN
        const testData = [
            {
                str: "Andrew, my name is Andrew",
                substr: "Andrew",
                expected: ", my name is",
            },
            {
                str: "Andrew, my name is Andrew",
                substr: "andrew",
                expected: "Andrew, my name is Andrew",
            },
            {
                str: "Andrew, my name is Andrew",
                substr: "a",
                expected: "Andrew, my nme is Andrew",
            },
            {
                str: "Andrew, my name is Andrew",
                substr: "A",
                expected: "ndrew, my name is ndrew",
            },
            {
                str: "Andrew, my name is Andrew",
                substr: ",",
                expected: "Andrew my name is Andrew",
            },
            {
                str: "Andrew, my name is Andrew",
                substr: " ",
                expected: "Andrew,mynameisAndrew",
            },
            {
                str: " Andrew, my name is Andrew ",
                substr: "my",
                expected: "Andrew,  name is Andrew",
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {str, substr, expected} = data;

            const actual = isPresenceOfSubstring(str, substr);

            //THEN
            it(`should return ${expected} when string = ${str} , substr = ${substr}`, () => {
                assert.strictEqual(actual, expected);
            })
        })
    });
});