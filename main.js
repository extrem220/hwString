const isCheckCharacter = (str, firstSymbol, secondSymbol) => {
    try {
        if(!str || !firstSymbol || !secondSymbol) {
            throw new isNotDefinedError("Var is not defined!");
        }

        if (typeof(str) !== "string") {
            throw new typeError("Input param is not string");
        }

        let countF = 0;
        let countS = 0;

        str = str.toLowerCase();
        firstSymbol = firstSymbol.toLowerCase();
        secondSymbol = secondSymbol.toLowerCase();

        for (let i = 0; i < str.length; i++) {
            if (str[i] === firstSymbol) {
                countF++;
            }

            if (str[i] === secondSymbol) {
                countS++;
            }
        }

        return countF === countS ? true : false;
    }catch (e) {
        console.log(e.message);
    }
};
const trunCate = (str, maxlength) => {
    try {
        if (!str || !maxlength) {
            throw new isNotDefinedError("Str or Maxlength is null or undefined!!!");
        }

        if ((str.length > maxlength) && (maxlength > 0)) {
            if (maxlength <= 4) {
                str = str.slice(0, maxlength);
            } else {
                str = str.slice(0, maxlength - 3);

                while (str.length !== maxlength) {
                    str += ".";
                }
            }
        }

        return str;

    } catch (e) {
        console.log(e.message);
    }
};
const isPresenceOfSubstring = (str, substr) => {
    try {
        if (!str || !substr) {
            throw new isNotDefinedError("Str or substr is not defined!")
        }

        if ((typeof (str) !== "string") || (typeof (substr) !== "string")) {
            throw new typeError("Str or substr is not string!");
        }

        if (str.includes(substr)) {
            str = str.split(substr).join("").trim();
        }

        return str;
    } catch (e) {
        console.log(e.message);
    }
};