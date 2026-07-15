const iphone = document.getElementById("iphone");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  const rotateY = scroll * 0.04;
  const rotateX = 15 - scroll * 0.015;
  const scale = 1 + (scroll * 0.00015);
  const translateY = -scroll * 0.15;

  iphone.style.transform = `
    rotateY(${rotateY}deg)
    rotateX(${rotateX}deg)
    scale(${scale})
    translateY(${translateY}px)
  `;

});

window.addEventListener("load", () => {

  iphone.animate(
    [
      {
        opacity: 0,
        transform: "translateY(100px) rotateX(25deg)"
      },
      {
        opacity: 1,
        transform: "translateY(0px) rotateX(15deg)"
      }
    ],
    {
      duration: 1500,
      easing: "ease-out",
      fill: "forwards"
    }
  );

});

function toggleContent(id, button) {

    const content = document.getElementById(id);

    content.classList.toggle("active");

    if(content.classList.contains("active")) {
        button.innerText = "Minimizar";
    } else {
        button.innerText = "Saber mais";
    }

}

function animateCounters() {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = parseInt(counter.dataset.target);
        let current = 0;

        const interval = setInterval(() => {

            current += Math.ceil((target - current) * 0.08);

            if(current >= target) {

                current = target;
                clearInterval(interval);

            }

            counter.textContent = "+" + current + "%";

        }, 40);

    });

}

window.addEventListener("load", () => {

    animateCounters();

});

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.toggle("active");

}