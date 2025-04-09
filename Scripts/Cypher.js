document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("inputText");
    const siferInput = document.getElementById("sifer");
    const encodeButton = document.getElementById("encodeButton");
    const decodeButton = document.getElementById("decodeButton");
    const clearButton = document.getElementById("clearButton");
    const outputText = document.getElementById("outputText");

    // Encode button functionality
    encodeButton.addEventListener("click", function() {
        console.log("Encode button clicked");
        const text = inputText.value;
        const sifer = Math.abs(parseInt(siferInput.value));
        outputText.value = encode(text, sifer);
    });

    // Decode button functionality
    decodeButton.addEventListener("click", function() {
        const text = inputText.value;
        const sifer = Math.abs(parseInt(siferInput.value));
        outputText.value = decode(text, sifer);
    });

    // Clear button functionality
    clearButton.addEventListener("click", function() {
        inputText.value = "";
        siferInput.value = "";
        outputText.value = "";
    });

    function encode(text, sifer) {
        let output = "";
        for (let i = 0; i < text.length; i++) {
            let tmp = text.charCodeAt(i);
            tmp += sifer;
            output += String.fromCharCode(tmp);
        }
        return output;
    }

    function decode(text, sifer) {
        let output = "";
        for (let i = 0; i < text.length; i++) {
            let tmp = text.charCodeAt(i);
            tmp -= sifer;
            output += String.fromCharCode(tmp);
        }
        return output;
    }
});