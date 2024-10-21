const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".hex-copy-color ");


// create Hex color
hexBtn.addEventListener("click", () => {
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = "";
    for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
        hexColorOutput += characterSet.charAt(Math.floor(Math.random() * charSetLength));
    }

    hexColorValue.textContent =`#${hexColorOutput}`;
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
    hexBtn.style.color =`#${hexColorOutput}`;
});

// copy hex color
hexCopyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert("Hex color copied to clipboard");
    });