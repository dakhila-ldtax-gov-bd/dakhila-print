const validUser = {
    username: "admin",
    password: "admin@123"
};

function login(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUser.username && password === validUser.password) {
        document.querySelector(".container").style.display = "none";
        document.getElementById("qrSection").style.display = "block";
        document.getElementById("errorMessage").innerText = "";
    } else {
        document.getElementById("errorMessage").innerText = "অবৈধ User ID অথবা Password!";
    }
}

function generateQRCode() {
    const link = document.getElementById("memoLink").value;

    if (link) {
        $('#qrcode').empty(); // Clear previous QR codes
        $('#qrcode').qrcode(link);
        
        // Redirect to the link when the QR code is scanned
        window.location.href = link; // For demonstration; in real use, this should be handled differently.
    } else {
        alert("দয়া করে একটি লিংক লিখুন!");
    }
}

// Redirect all other links to login page
window.onload = function() {
    if (!window.location.href.includes('index.html')) {
        window.location.href = 'index.html';
    }
};
