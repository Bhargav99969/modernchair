document.addEventListener("DOMContentLoaded", function () {
    const colorButtons = document.querySelectorAll('.pallet');
    const chairImage = document.querySelector('.chairset1');
    const wrapper = document.querySelector('.wrapper');
    const descriptionElement = document.querySelector('.discription');

    function changeAppearance(color) {
        let imgUrl = "";
        let backgroundUrl = "";
        let descriptionText = "";

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
                imgUrl = "./modern chair/modern chair/images/chair1.png";
                backgroundUrl = "./modern chair/modern chair/images/color1.jpg";
                descriptionText = "This modern chair features a sleek and minimalist design, perfect for any contemporary living space.";
                break;
        }

        chairImage.src = imgUrl;
        wrapper.style.backgroundImage = `url('${backgroundUrl}')`;
        descriptionElement.textContent = descriptionText;
    }

    colorButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedColor = button.getAttribute('data-color');
            changeAppearance(selectedColor);

            chairImage.classList.remove('shake');
            void chairImage.offsetWidth;
            chairImage.classList.add('shake');
        });
    });
});
