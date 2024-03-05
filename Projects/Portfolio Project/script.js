// Define an array of text titles
const titles = ["Content Creator", "Founder at CareerCraftHub", "Tech Enthuasiast"];

// Function to change text every few seconds
function changeText() {
    const textElement = document.getElementById("changing-text");
    let index = 0;

    setInterval(() => {
        textElement.textContent = titles[index];
        index = (index + 1) % titles.length;
    }, 5000); // Change text every 2 seconds
}