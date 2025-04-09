document.getElementById("convertStringButton").addEventListener("click", () => {
    const stringInput = document.getElementById("stringInput").value;
    let ascii = "";
    let binary = "";
    let hex = "";

    for (let i = 0; i < stringInput.length; i++) {
        const charCode = stringInput.charCodeAt(i);
        ascii += charCode + " ";
        binary += charCode.toString(2) + " ";
        hex += charCode.toString(16) + " ";
    }

    document.getElementById("asciiOutput").textContent = `ASCII: ${ascii}`;
    document.getElementById("binaryOutput").textContent = `Binary: ${binary}`;
    document.getElementById("hexOutput").textContent = `Hexadecimal: ${hex}`;
});

document.getElementById("convertIntegerButton").addEventListener("click", () => {
    const integerInput = parseInt(document.getElementById("integerInput").value, 10);
    if (isNaN(integerInput)) {
        alert("Please enter a valid integer.");
        return;
    }

    const binary = integerInput.toString(2);
    const hex = integerInput.toString(16);

    document.getElementById("binaryIntOutput").textContent = `Binary: ${binary}`;
    document.getElementById("hexIntOutput").textContent = `Hexadecimal: ${hex}`;
});

document.getElementById("clearStringButton").addEventListener("click", () => {
    document.getElementById("stringInput").value = "";
    document.getElementById("asciiOutput").textContent = "ASCII: ";
    document.getElementById("binaryOutput").textContent = "Binary: ";
    document.getElementById("hexOutput").textContent = "Hexadecimal: ";
});

document.getElementById("clearIntegerButton").addEventListener("click", () => {
    document.getElementById("integerInput").value = "";
    document.getElementById("binaryIntOutput").textContent = "Binary: ";
    document.getElementById("hexIntOutput").textContent = "Hexadecimal: ";
});