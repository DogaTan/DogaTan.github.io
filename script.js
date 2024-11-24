document.addEventListener("DOMContentLoaded", function() {
// Only letters are allowed for the name field.
document.getElementById('name').addEventListener('keydown', function (e) {
    // Only letter keys and some control keys (backspace, tab) are allowed
    if (
        (e.key >= 'a' && e.key <= 'z') || // Allow lowercase letters
        (e.key >= 'A' && e.key <= 'Z') || // Allow uppercase letters
        e.key === 'Backspace' ||          // Allow backspace key
        e.key === 'Tab' ||                // Allow tab key
        e.key === 'ArrowLeft' ||          // Left arrow key
        e.key === 'ArrowRight' ||         // Right arrow key
        e.key === 'Delete'                // Allow delete key
    ) {
        return; // Allow valid keys
    } else {
        e.preventDefault(); // Invalid keys are blocked
    }
});


//FOR PHONE NUMBER CHECK WITH FORMATTING BUT CANNOT CHANGE THE NUMBERS IN BETWEEN WITHOUT DELETING THEM COMPLETELY
 // Only digits are allowed for the Phone Number field.
 document.getElementById('phoneNumber').addEventListener('keydown', function (e) {
     // Only number keys and some control keys (backspace, tab) are allowed
     if (
         (e.key >= '0' && e.key <= '9') ||  // Allow number keys
         e.key === 'Backspace' ||           // Allow backspace key
         e.key === 'Tab' ||                 // Allow tab key
         e.key === 'ArrowLeft' ||           // Left arrow key
         e.key === 'ArrowRight' ||          // Right arrow key
         e.key === 'Delete'                 // Allow delete key
      ) {
         return; // Allow valid keys
        } else {
          e.preventDefault(); // Invalid keys are blocked
        }
});

});



// JS CODE for Dropdowns (City and Course Type)
document.addEventListener("DOMContentLoaded", () => {
    const cityDropdown = document.getElementById("city");
    const courseTypeDropdown = document.getElementById("courseType");
    const areaCodeDropdown = document.getElementById("areaCode");

    const mockApiUrl = "https://run.mocky.io/v3/0fc90c9a-64ab-4384-a740-f9409e9130c1"; // Mock.io API URL

    fetch(mockApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {
            // City dropdown filling
            data.cities.forEach(city => {
                const option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                cityDropdown.appendChild(option);
            });

            // Course Type dropdown filling
            data.courseTypes.forEach(courseType => {
                const option = document.createElement("option");
                option.value = courseType;
                option.textContent = courseType;
                courseTypeDropdown.appendChild(option);
            });

            //Area Codes dropdown filling
            data.areaCodes.forEach(areaCode => {
                const option = document.createElement("option");
                option.value = areaCode;
                option.textContent = areaCode;
                areaCodeDropdown.appendChild(option);
            });

        })
        .catch(error => {
            console.error("Error:", error);
        });
});



//JS FOR CLOSING STICKY AD

// Çarpı butonunu seç
const closeAdButton = document.getElementById("closeAd");

// Sticky reklam alanını seç
const stickyAd = document.getElementById("stickyAd");

// Çarpı butonuna tıklanıldığında sticky reklamı gizle
closeAdButton.addEventListener("click", function() {
    stickyAd.style.display = "none";
});


document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Formun varsayılan davranışını durdur

    // Hata mesajlarını temizlemek için önceki uyarıları gizle
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
        el.textContent = ''; // Önceki hata mesajlarını temizle
    });

    // Form alanlarını al
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const areaCodeDropdown = document.getElementById('areaCode');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const phoneInput = document.getElementById("phone");
    const cityDropdown = document.getElementById("city");
    const courseTypeDropdown = document.getElementById("courseType");
    const hoursDropdown = document.getElementById("hours");
    const termsCheckbox = document.getElementById('terms');

    // Alanların değerlerini al
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const selectedAreaCode = areaCodeDropdown.value;
    const phoneNumber = phoneNumberInput.value.trim();
    const selectedCity = cityDropdown.value;
    const selectedCourse = courseTypeDropdown.value;
    const selectedHours = hoursDropdown.value;

    // Geçerlilik kontrolü için bayrak
    let isValid = true;

    // Hataları alanların altına göstermek için yardımcı fonksiyon
    const showError = (input, message) => {
        const errorSpan = input.nextElementSibling;
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.style.display = 'block'; // Hata mesajını görünür yap
        }
        isValid = false;
    };

    // Ad kontrolü
    if (!name) {
        showError(nameInput, "The name field cannot be left blank.");
    }

    // Email kontrolü
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        showError(emailInput, "Please enter a valid email address.");
    }

    // Alan kodu kontrolü
    if (!selectedAreaCode || selectedAreaCode === "areaCode") {
        showError(phoneInput, "Please select an area code.");
    }

    // Telefon numarası kontrolü
    if (!/^\d{7}$/.test(phoneNumber)) {
        showError(phoneNumberInput, "Phone number must be 7 digits.");
    }

    // Şehir kontrolü
    if (!selectedCity || selectedCity === "city") {
        showError(cityDropdown, "Please select a city.");
    }

    // Kurs tipi kontrolü
    if (!selectedCourse || selectedCourse === "courseType") {
        showError(courseTypeDropdown, "Please select a course type.");
    }

    // Saat kontrolü
    if (!selectedHours || selectedHours === "hours") {
        showError(hoursDropdown, "Please select hours.");
    }

    // Şartlar ve koşullar kontrolü
    if (!termsCheckbox.checked) {
        showError(termsCheckbox, "Please accept the terms and conditions.");
    }

    // Eğer tüm alanlar geçerli ise işlemi devam ettir
    if (isValid) {
        window.location.href = '/submitted.html';
    }
});

// Boş alana değer girildiğinde hata mesajını gizlemek için inputlara olay dinleyicileri ekleyin
const inputs = document.querySelectorAll('#appointmentForm input, #appointmentForm select, #appointmentForm div');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        const errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.style.display === 'block') {
            errorSpan.style.display = 'none'; // Hata mesajını gizle
        }
    });

    input.addEventListener('change', () => {
        const errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.style.display === 'block') {
            errorSpan.style.display = 'none'; // Hata mesajını gizle
        }
    });
});
