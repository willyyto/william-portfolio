// Array of texts for the typewriter effect
const texts = ["I am a software engineer", "I am a full-stack developer", "I am a data analyst"];

// Function to initialize a typewriter effect on a given element
function setupTypewriter(typewriter) {
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (count === texts.length) {
            count = 0; // Loop back to the first text once all have been displayed
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        typewriter.textContent = letter;
        if (letter.length === currentText.length) {
            setTimeout(erase, 2000); // Wait before starting to erase
        } else {
            setTimeout(type, 120); // Speed of typing
        }
    }

    function erase() {
        letter = currentText.slice(0, --index);
        typewriter.textContent = letter;

        if (letter.length === 0) {
            count++; // Move to the next text
            index = 0; // Reset index to start typing next text
            setTimeout(type, 1000); // Delay before starting to type again
        } else {
            setTimeout(erase, 60); // Speed of erasing
        }
    }

    type(); // Start the typewriter effect
}

// Find all elements with the class 'typewriter' and initialize the typewriter effect on each
document.addEventListener('DOMContentLoaded', () => {
    const typewriters = document.querySelectorAll('.typewriter-display');
    typewriters.forEach(setupTypewriter);
});
