
    document.addEventListener("DOMContentLoaded", () => {
        const signupForm = document.getElementById("signupForm");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const savedName = document.getElementById("savedName");
        const savedEmail = document.getElementById("savedEmail");
        const clearDataButton = document.getElementById("clearData");

        // Load saved data when the page loads
        if (localStorage.getItem("userName")) {
            savedName.textContent = "Name: " + localStorage.getItem("userName");
            savedEmail.textContent = "Email: " + localStorage.getItem("userEmail");
        }

        signupForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form submission

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim(); // Not saving password

            if (name && email) {
                // Save user data in localStorage
                localStorage.setItem("userName", name);
                localStorage.setItem("userEmail", email);

                // Display saved data
                savedName.textContent = "Name: " + name;
                savedEmail.textContent = "Email: " + email;
                alert("Sign-up successful! Data saved.");

                // Clear input fields after saving
                nameInput.value = "";
                emailInput.value = "";
                passwordInput.value = "";
            }
        });

        // Clear data button
        clearDataButton.addEventListener("click", () => {
            localStorage.clear();
            savedName.textContent = "";
            savedEmail.textContent = "";
            alert("Data cleared.");
        });
    });
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });

