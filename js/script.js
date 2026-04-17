// ================= DARK MODE =================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// ================= SUBSIDY CALCULATOR =================
function calculateSubsidy() {
    let price = parseFloat(document.getElementById("vehiclePrice").value);
    let type = document.getElementById("vehicleType").value;

    if (isNaN(price) || price <= 0) {
        document.getElementById("result").innerHTML = "Enter valid price!";
        return;
    }

    let subsidy = 0;

    if (type === "2w") subsidy = price * 0.15;
    else if (type === "3w") subsidy = price * 0.20;
    else subsidy = price * 0.10;

    document.getElementById("result").innerHTML =
        "Estimated Subsidy: ₹ " + subsidy.toFixed(2);
}

// ================= CHARGING COST =================
function calculateChargingCost() {
    let battery = parseFloat(document.getElementById("batterySize").value);
    let rate = parseFloat(document.getElementById("electricityRate").value);

    if (isNaN(battery) || isNaN(rate)) {
        document.getElementById("chargingResult").innerHTML =
            "Enter valid values!";
        return;
    }

    let cost = battery * rate;

    document.getElementById("chargingResult").innerHTML =
        "Charging Cost: ₹ " + cost.toFixed(2);
}

// ================= SAVINGS CALCULATOR =================
function calculateSavings() {
    let petrol = parseFloat(document.getElementById("petrolCost").value);
    let ev = parseFloat(document.getElementById("evCost").value);

    if (isNaN(petrol) || isNaN(ev)) {
        document.getElementById("savingsResult").innerHTML =
            "Enter valid values!";
        return;
    }

    let savings = petrol - ev;

    document.getElementById("savingsResult").innerHTML =
        "Monthly Savings: ₹ " + savings.toFixed(2);
}

// ================= LOGIN =================
function loginUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("loginMessage").innerHTML =
            "Login Successful!";
    } else {
        document.getElementById("loginMessage").innerHTML =
            "Invalid Credentials!";
    }
}

// ================= CONTACT FORM =================
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("formMessage").innerHTML =
            "Please fill all fields!";
        return false;
    }

    document.getElementById("formMessage").innerHTML =
        "Message sent successfully!";
    return false;
}

// ================= CHARGING MAP =================
if (document.getElementById("map")) {

    var map = L.map('map').setView([19.0760, 72.8777], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Default Station
    L.marker([19.0760, 72.8777])
        .addTo(map)
        .bindPopup("EV Charging Station - Mumbai")
        .openPopup();

    // Get user location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;

            L.marker([userLat, userLng])
                .addTo(map)
                .bindPopup("Your Location");

            map.setView([userLat, userLng], 14);
        });
    }
}
function openDealer() {
    window.open("https://www.google.com/maps/search/EV+Dealer+near+me/");
}