// ================= PAGE LOAD =================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Smart Campus Hub Loaded Successfully!");

});


// ================= SCROLL TO TOP =================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "⬆";
scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#0d6efd";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});


scrollBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= CARD HOVER EFFECT =================

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-10px)";
        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0px)";

    });

});


// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll("h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    if (!isNaN(target)) {

        let count = 0;

        const updateCounter = () => {

            count += Math.ceil(target / 50);

            if (count < target) {

                counter.innerText = count;

                setTimeout(updateCounter, 40);

            } else {

                counter.innerText = target;
            }
        };

        updateCounter();
    }

});


// ================= WELCOME MESSAGE =================

setTimeout(() => {

    console.log("Welcome to Smart Campus Hub!");

}, 2000);
// ================= NOTICE SEARCH =================

const noticeSearch = document.getElementById("noticeSearch");
const noticeItems = document.querySelectorAll(".notice-item");

if (noticeSearch) {

    noticeSearch.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        noticeItems.forEach(function (notice) {

            const noticeText = notice.textContent.toLowerCase();

            if (noticeText.includes(searchText)) {
                notice.style.display = "";
            } else {
                notice.style.display = "none";
            }

        });

    });

}
//------------------RESOURCES SEARCH--------------------//
document.addEventListener("DOMContentLoaded", function () {

    const searchBox = document.getElementById("resourceSearch");
    const resources = document.querySelectorAll(".resource-item");

    if (!searchBox) {
        return;
    }

    searchBox.addEventListener("input", function () {

        const searchValue = searchBox.value.toLowerCase().trim();

        resources.forEach(function (resource) {

            const text = resource.innerText.toLowerCase();

            if (text.includes(searchValue)) {
                resource.style.display = "";
            } else {
                resource.style.display = "none";
            }

        });

    });

});
function showRoute(route) {

    const routeData = {

        "Route 01": {
            path: "Azamgarh → Sagri → Patwadh Kautuk → SSPI College",
            departure: "7:00 AM",
            returnTime: "4:30 PM",
            stops: [
                "Azamgarh",
                "Sagri",
                "Patwadh Kautuk",
                "SSPI College"
            ]
        },

        "Route 02": {
            path: "Sagri → Bilariya → Patwadh → SSPI College",
            departure: "7:30 AM",
            returnTime: "5:00 PM",
            stops: [
                "Sagri",
                "Bilariya",
                "Patwadh",
                "SSPI College"
            ]
        },

        "Route 03": {
            path: "Bilariya → Local Market → Patwadh Kautuk → SSPI College",
            departure: "7:45 AM",
            returnTime: "4:45 PM",
            stops: [
                "Bilariya",
                "Local Market",
                "Patwadh Kautuk",
                "SSPI College"
            ]
        },

        "Route 04": {
            path: "Patwadh Kautuk → Bilariya → College Road → SSPI College",
            departure: "8:15 AM",
            returnTime: "4:15 PM",
            stops: [
                "Patwadh Kautuk",
                "Bilariya",
                "College Road",
                "SSPI College"
            ]
        }

    };


    const data = routeData[route];

    document.getElementById("modalRouteName").textContent = route;

    document.getElementById("modalRoutePath").textContent =
        data.path;

    document.getElementById("modalDeparture").textContent =
        data.departure;

    document.getElementById("modalReturn").textContent =
        data.returnTime;


    const stopsContainer =
        document.getElementById("modalStops");

    stopsContainer.innerHTML = "";


    data.stops.forEach(function (stop) {

        const badge = document.createElement("span");

        badge.className =
            "badge bg-light text-dark border p-2";

        badge.innerHTML =
            '<i class="bi bi-geo-alt text-primary"></i> ' +
            stop;

        stopsContainer.appendChild(badge);

    });


    const modal =
        new bootstrap.Modal(
            document.getElementById("routeModal")
        );

    modal.show();

}
function openRegistration(eventName) {

    // Event ka naam automatically form me show hoga
    document.getElementById("eventName").value = eventName;

    // Bootstrap modal open
    const modal = new bootstrap.Modal(
        document.getElementById("registrationModal")
    );

    modal.show();
}


// Form Submit
document.getElementById("registrationForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("studentName").value;
    const event = document.getElementById("eventName").value;

    alert(
        "Registration Successful! 🎉\n\n" +
        "Student: " + name +
        "\nEvent: " + event
    );

    // Form reset
    this.reset();

    // Modal close
    const modalElement = document.getElementById("registrationModal");
    const modal = bootstrap.Modal.getInstance(modalElement);

    modal.hide();
});
// ==========================================
// SMART CAMPUS HUB JAVASCRIPT
// ==========================================


// ================= DARK MODE =================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const icon = themeToggle.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {

            icon.classList.remove("bi-moon-fill");
            icon.classList.add("bi-sun-fill");

            localStorage.setItem("theme", "dark");

        } else {

            icon.classList.remove("bi-sun-fill");
            icon.classList.add("bi-moon-fill");

            localStorage.setItem("theme", "light");

        }

    });

}


// ================= REMEMBER THEME =================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    const icon = themeToggle?.querySelector("i");

    if (icon) {

        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");

    }

}


// ================= NAVBAR SHADOW =================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.15)";

    }

});


// ================= CURRENT YEAR =================

console.log(
    "Smart Campus Hub loaded successfully!"
);