document.addEventListener("DOMContentLoaded", function () {
    const colorButtons = document.querySelectorAll('.pallet');
    const chairImage = document.querySelector('.chairset1'); // Select the first chair image
    const wrapper = document.querySelector('.wrapper'); // Select the wrapper for background changes
    const descriptionElement = document.querySelector('.discription'); // The description element

    // Function to change chair image, background and description based on selected color
    function changeAppearance(color) {
        let imgUrl = "";
        let backgroundUrl = "";
        let descriptionText = "";

        // Define the image URLs, background URLs, and descriptions based on color choice
        switch (color) {
            case "1":
                imgUrl = "./modern chair/modern chair/images/chair1.png";
                backgroundUrl = "./modern chair/modern chair/images/color1.jpg";
                descriptionText = "This modern chair features a sleek and minimalist design, perfect for any contemporary living space.";
                break;
            case "2":
                imgUrl = "./modern chair/modern chair/images/chair2.png";
                backgroundUrl = "./modern chair/modern chair/images/color2.jpg";
                descriptionText = "With its luxurious fabric and elegant frame, this chair brings sophistication to any room.";
                break;
            case "3":
                imgUrl = "./modern chair/modern chair/images/chair3.png";
                backgroundUrl = "./modern chair/modern chair/images/color3.jpg";
                descriptionText = "This vibrant chair adds a pop of color to your living room, combining comfort with style.";
                break;
            case "4":
                imgUrl = "./modern chair/modern chair/images/chair4.png";
                backgroundUrl = "./modern chair/modern chair/images/color4.jpg";
                descriptionText = "A timeless design, this chair offers a perfect blend of tradition and modernity.";
                break;
            case "5":
                imgUrl = "./modern chair/modern chair/images/chair5.png";
                backgroundUrl = "./modern chair/modern chair/images/color5.jpg";
                descriptionText = "A perfect choice for relaxation, this chair provides unmatched comfort and durability.";
                break;
            case "6":
                imgUrl = "./modern chair/modern chair/images/chair6.png";
                backgroundUrl = "./modern chair/modern chair/images/color6.jpg";
                descriptionText = "With its unique style and contemporary look, this chair is the epitome of luxury and comfort.";
                break;
            default:
                imgUrl = "./modern chair/modern chair/images/chair1.png"; // Default to color 1
                backgroundUrl = "./modern chair/modern chair/images/color1.jpg"; // Default background
                descriptionText = "This modern chair features a sleek and minimalist design, perfect for any contemporary living space.";
                break;
        }

        // Update the chair image source
        chairImage.src = imgUrl;

        // Use backgroundImage on the wrapper to change the background dynamically
        wrapper.style.backgroundImage = `url('${backgroundUrl}')`;

        // Update the description based on the selected color
        descriptionElement.textContent = descriptionText;
    }

    // Function to set background image on buttons
    function setButtonBackgroundImages() {
        colorButtons.forEach(button => {
            const color = button.getAttribute('data-color');
            let backgroundUrl = "";

            // Set background image URL based on button color
            switch (color) {
                case "1":
                    backgroundUrl = "./modern chair/modern chair/images/color1.jpg";
                    break;
                case "2":
                    backgroundUrl = "./modern chair/modern chair/images/color2.jpg";
                    break;
                case "3":
                    backgroundUrl = "./modern chair/modern chair/images/color3.jpg";
                    break;
                case "4":
                    backgroundUrl = "./modern chair/modern chair/images/color4.jpg";
                    break;
                case "5":
                    backgroundUrl = "./modern chair/modern chair/images/color5.jpg";
                    break;
                case "6":
                    backgroundUrl = "./modern chair/modern chair/images/color6.jpg";
                    break;
                default:
                    backgroundUrl = "./modern chair/modern chair/images/color1.jpg"; // Default to color 1
                    break;
            }

            // Set the background image for each button
            button.style.backgroundImage = `url('${backgroundUrl}')`;
            button.style.backgroundSize = 'cover'; // Ensure the image covers the entire button
            button.style.backgroundPosition = 'center'; // Center the background image
        });
    }

    // Initialize background images for buttons
    setButtonBackgroundImages();

    // Add click event listeners to each color button
    colorButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedColor = button.getAttribute('data-color');
            changeAppearance(selectedColor); // Change both image, background, and description based on clicked button

            // Trigger shake animation on the chair image
            chairImage.classList.remove('shake'); // Remove the class if it's already there
            void chairImage.offsetWidth; // Trigger reflow to restart the animation
            chairImage.classList.add('shake'); // Add the class to start the shake animation
        });
    });
});
