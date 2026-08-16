const scrollElements = document.querySelectorAll(".scroll-animation");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

scrollElements.forEach((element) => {
    observer.observe(element);
});