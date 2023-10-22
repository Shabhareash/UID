function calculateMeals() {
    const donationAmount = document.getElementById("donationAmount").value;
    
    if (!donationAmount) {
        alert("Please enter a valid amount.");
        return;
    }

    const mealsProvided = donationAmount * 6.5;
    document.getElementById("result").textContent = `Your donation can provide ${mealsProvided} meals.`;
}

function redirectToPaymentPage() {
    window.location.href = "qr.html";
}
