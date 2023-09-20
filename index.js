const annualPrice = document.querySelectorAll(".annual_price");
const monthPrice = document.querySelectorAll(".month_price");
const toggleCheckbox = document.getElementById("toggle_checkbox")

function changePrice() {
    if(toggleCheckbox.checked) {
        annualPrice.forEach(price => {
            price.classList.add("hidden");
        });
        monthPrice.forEach(price => {
            price.classList.remove("hidden")
        });
    } else {
        annualPrice.forEach(price => {
            price.classList.remove("hidden");
        });
        monthPrice.forEach(price => {
            price.classList.add("hidden")
        });
    }
}
