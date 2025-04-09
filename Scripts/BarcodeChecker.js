document.addEventListener("DOMContentLoaded", function () {
    const barcodeInput = document.getElementById("barcodeInput");
    const checkButton = document.getElementById("checkButton");
    const clearButton = document.getElementById("clearButton");
    const resultOutput = document.getElementById("resultOutput");
    const suggestedOutput = document.getElementById("suggestedOutput");

    // Check Barcode functionality
    checkButton.addEventListener("click", function () {
        const barcode = barcodeInput.value;

        if (barcode.length !== 13 || !/^\d+$/.test(barcode)) {
            resultOutput.textContent = "Result: Invalid input. Please enter exactly 13 digits.";
            suggestedOutput.textContent = "";
            return;
        }

        const checksumDigit = parseInt(barcode[12], 10);
        let weightedSum = 0;

        for (let i = 0; i < 12; i++) {
            const digit = parseInt(barcode[i], 10);
            if (i % 2 === 0) {
                weightedSum += digit;
            } else {
                weightedSum += digit * 3;
            }
        }

        const calculatedChecksum = (10 - (weightedSum % 10)) % 10;

        if (calculatedChecksum === checksumDigit) {
            resultOutput.textContent = "Result: Valid";
            suggestedOutput.textContent = "";
        } else {
            resultOutput.textContent = "Result: Not Valid";
            suggestedOutput.textContent = `Suggested last digit: ${calculatedChecksum}`;
        }
    });

    // Clear functionality
    clearButton.addEventListener("click", function () {
        barcodeInput.value = "";
        resultOutput.textContent = "Result: ";
        suggestedOutput.textContent = "";
    });
});