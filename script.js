
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
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    if (themeToggle) {
        // Set initial theme based on local storage or default to light
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            // Store the theme preference in local storage
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
            updateButtonText();
        });
    
        function updateButtonText() {
            if (html.classList.contains('dark')) {
                themeToggle.textContent = 'Light Mode';
            } else {
                themeToggle.textContent = 'Dark Mode';
            }
        }
    
        // Check for saved theme preference on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            html.classList.toggle('dark', savedTheme === 'dark');
        }
        updateButtonText();
    }
