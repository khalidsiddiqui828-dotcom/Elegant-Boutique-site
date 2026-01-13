document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting Elegant Boutique!");
    this.reset();
});

const buttons = document.querySelectorAll(".product button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});
