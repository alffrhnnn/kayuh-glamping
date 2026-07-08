/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    preloader.style.opacity = "0";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 300);
});


/* ==========================================
   DOM ELEMENT
========================================== */

const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navMenu a");

const stats = document.querySelector(".stats");
const counters = document.querySelectorAll(".counter");

let counterStarted = false;


/* ==========================================
   STICKY HEADER
   BACK TO TOP
   ACTIVE NAV
   COUNTER
========================================== */

function handleScroll() {

    const scroll = window.scrollY;

    /* Header */

    if (header) {
        header.classList.toggle("scrolled", scroll > 50);
    }

    /* Back To Top */

    if (backToTop) {
        backToTop.classList.toggle("show", scroll > 500);
    }

    /* Counter */

    if (stats && !counterStarted) {

        if (scroll >= stats.offsetTop - 500) {

            counterStarted = true;

            startCounter();

        }

    }

    /* Active Navigation */

    let current = "";

    sections.forEach(section => {

        if (
            scroll >= section.offsetTop - 150 &&
            scroll < section.offsetTop + section.offsetHeight
        ) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.toggle(
            "active",
            current &&
            link.getAttribute("href").includes(current)
        );

    });

}

window.addEventListener("scroll", handleScroll, {
    passive: true
});


/* ==========================================
   HAMBURGER
========================================== */

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        navMenu.classList.toggle("active");

    });

}

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        hamburger?.classList.remove("active");

        navMenu?.classList.remove("active");

    });

});


/* ==========================================
   BACK TO TOP
========================================== */

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ==========================================
   COUNTER
========================================== */

function startCounter() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 60));

        function update() {

            current += increment;

            if (current < target) {

                counter.textContent = current;

                requestAnimationFrame(update);

            } else {

                counter.textContent = target;

            }

        }

        update();

    });

}


/* ==========================================
   FAQ
========================================== */

document.querySelectorAll(".faq-item").forEach(item => {

    const btn = item.querySelector(".faq-question");

    if (!btn) return;

    btn.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(
    ".feature-card,.package-card,.gallery-item,.contact-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

reveals.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});