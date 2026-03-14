function reverseNumberPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let pattern = "";

        // Print spaces
        for (let j = 0; j < rows - i; j++) {
            pattern += " ";
        }

        // Print ascending numbers
        for (let j = 1; j <= i; j++) {
            pattern += j;
        }

        // Print descending numbers
        for (let j = i - 1; j >= 1; j--) {
            pattern += j;
        }

        console.log(pattern);
    }
}

// Function call
reverseNumberPyramid(4);