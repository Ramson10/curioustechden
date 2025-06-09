/*Typing Effect Script*/


    const text = "Welcome to The Curious Tech Den - Home to Tech-Curious Minds!";

    const typingText = document.getElementById("typing-text");

    let index = 0;

    let direction = 1;

    function typeEffect() {
      if (direction === 1) {
        typingText.textContent = text.substring(0, index++);

        if (index > text.length) {
          direction = -1;
          setTimeout(typeEffect, 2000);
          return;
        }
      } else {
        typingText.textContent = text.substring(0, index--);
        if (index < 0) direction = 1;
      }
      setTimeout(typeEffect, 100);
    }
    typeEffect();


/* Fly-in Scroll Effect Script*/


    const faders = document.querySelectorAll('.fly-in-left, .fly-in-right');

    const observer = new IntersectionObserver((entries, obs) => {

      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    faders.forEach(el => {
      el.classList.add('fly-in');
      observer.observe(el);
    });



/*Reuse Header/Footer via Fetch*/


    fetch('header.html')
      .then(res => res.text())
      .then(data => document.getElementById('header-placeholder').innerHTML = data);


/*Scroll button for sample section*/

    const scrollContainer = document.getElementById('scroll-container');

    const btnLeft = document.getElementById('scroll-left');

    const btnRight = document.getElementById('scroll-right');

    function updateScrollButtons() {
        btnLeft.disabled = scrollContainer.scrollLeft <= 0;
        btnRight.disabled = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1;
    }

    btnLeft.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });

    scrollContainer.addEventListener('scroll', updateScrollButtons);

    // Initial check
    updateScrollButtons();



        
  
            const modal = document.getElementById("welcome-modal");
            
            const closeBtn = document.getElementById("close-modal");
            
            const roleSpan = document.getElementById("animated-role");

            const roles = [
                "freelance writer",
                "ghost writer",
                "copywriter",
                "freelance writer"
            ];

            let inde = 0;

            function animateRoles() {
                if (inde < roles.length) {
                roleSpan.textContent = roles[inde];
                inde++;
                setTimeout(animateRoles, 1200);
                }
            }

            // Delay modal interaction for 5 seconds
            window.onload = function () {
                animateRoles();

                setTimeout(() => {
                closeBtn.disabled = false;
                }, 5000);
            };

            closeBtn.addEventListener("click", () => {
                modal.style.display = "none";
            });
        