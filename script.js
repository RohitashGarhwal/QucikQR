const main = document.querySelector(".main"),
    qrInput = main.querySelector(".tBox input"),
    generateBtn = main.querySelector(".tBox button"),
    qrImg = main.querySelector(".qr-code img");

let preValue; // Variable to store the previous QR code value

// Event listener for the generate button
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim(); // Get and trim the input value
    // If input is empty or the same as previous value, do nothing
    if (!qrValue || preValue === qrValue) 
        return;
    preValue = qrValue; // Update previous value
    generateBtn.innerText = "Generating QR Code...";
    // Set the QR code image source with the input value
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    // When QR code image is loaded
    qrImg.addEventListener("load", () => {
        main.classList.add("active");
        generateBtn.innerText = "Generate QR";
    });
});

// Event listener for keyup event on the input field
qrInput.addEventListener("keyup", () => {
    if (!qrInput) {
        main.classList.remove("active");
        preValue = "";
    }
})
