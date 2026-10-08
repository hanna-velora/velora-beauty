const salonName = "Velora Beauty";
console.log(salonName);
const bookingAvailable = true;
if (bookingAvailable) {
    console.log("Booking is available");
} else {
    console.log("Booking is not available");
}
function calculateTotal(firstPrice, secondPrice) {
    return firstPrice + secondPrice;
}
const total = calculateTotal(50, 30);
console.log(total);
const procedures = ["Kasvohoito", "Biorevitalisaatio", "HIFU-hoito"];
procedures.forEach(function(procedure) {
    console.log(procedure);
});
const cartButton = document.querySelector("#cart-button");

cartButton.addEventListener("click", function() {
    alert("Palvelut lisättiin ostoskoriin!");
});
