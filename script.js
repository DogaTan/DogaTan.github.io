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
    // Form alanlarını al
    const areaCodeDropdown = document.getElementById('areaCode');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const termsCheckbox = document.getElementById('terms');

    const cityDropdown = document.getElementById("city");
    const courseTypeDropdown = document.getElementById("courseType");
    const hoursDropdown = document.getElementById("hours");
    const selectedCity = cityDropdown.value;
    const selectedCourse = courseTypeDropdown.value;
    const selectedHours = hoursDropdown.value;


    const selectedAreaCode = areaCodeDropdown.value;
    const phoneNumber = phoneNumberInput.value.trim();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();


    // Geçerlilik kontrol bayrağı
    let isValid = true;


    // Ad boşluk kontrolü
    if (!name) {
        alert("The name field cannot be left blank.");
        isValid = false;
   }


   // Email validation
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
   if (!emailRegex.test(email)) {
       alert("Please enter a valid email address.");
       isValid = false;
   }

   // Area codes validation
   if (!selectedAreaCode || selectedAreaCode === "areaCode") {
       alert("Please select an area code.");
       e.
       isValid = false;
   }

   // Telefon numarası doğrulama
   if (!/^\d{7}$/.test(phoneNumber)) {
       alert("Phone number must be 7 digits.");
       isValid = false;
   }

    // Alan kodu ve telefon numarası birleştirilmiş doğrulama
    const fullPhoneNumber = selectedAreaCode + phoneNumber;
    if (fullPhoneNumber.length !== 10) {
       alert("Please enter a valid phone number.");
       isValid = false;
    }

    //Course type validation
    if(!selectedCourse || selectedCourse === "courseType"){
        alert("Please select a course type.");
        isValid = false;
    }

    // City validation
    if(!selectedCity || selectedCity === "city"){
        alert("Please select a city.");
        isValid = false;
    }

    //Hours validation
    if(!selectedHours || selectedHours === "hours"){
        alert("Please select hours.");
        isValid = false;
    }

     // Şartlar ve koşullar doğrulama
   if (!termsCheckbox.checked) {
    alert("Please accept the terms and conditions.");
    isValid = false;
   }

    
    // Eğer herhangi bir doğrulama başarısızsa form gönderimini durdur
    if (!isValid) {
        e.preventDefault();
    } else {
        // Eğer tüm doğrulamalar başarılıysa submitted.html'e yönlendir
        e.preventDefault(); // Formun varsayılan davranışını durdur
        window.location.href = '/submitted.html';
    }
});


