document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const loaderText = document.getElementById("loader-text");
  const languageSelect = document.getElementById("language-select");
  const hero = document.querySelector(".hero");
  const about = document.querySelector(".about");
  const skills = document.querySelector(".skills");

  const translations = {
    en: {
      hero_career_title: "Telecommunications Engineer",
      hero_LLM_card: "Project on the design and development of a methodology for KPI estimation using LLMs.",
      hero_keysight: "Work experience as a C# Developer in a mobile networks environment.",
      hero_LLM_title: "KPI Estimation with LLMs",
      hero_web_card: "Portfolio website project for documenting learning.",
      hero_keysight_project: "Project",
      hero_languages: "Languages",
      hero_experience: "Experience & Applications"
    },
    es: {
      // opcional, ya tienes los textos en español
    }
  };

  let progress = 0;

  // 🌀 Simula la carga progresiva
  const interval = setInterval(() => {
    progress++;
    loaderText.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);

      // Fade out del loader
      loader.style.transition = "opacity 0.6s ease";
      loader.style.opacity = "0";

      loader.addEventListener(
        "transitionend",
        () => {
          loader.style.display = "none";

          // Aparece el selector de idioma
          languageSelect.style.opacity = 0;
          languageSelect.classList.remove("hidden");
          languageSelect.classList.add("visible");
          void languageSelect.offsetWidth;
          languageSelect.style.transition = "opacity 0.6s ease";
          languageSelect.style.opacity = 1;
        },
        { once: true }
      );
    }
  }, 40);

  function translatePage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if(translations[lang] && translations[lang][key]){
        el.textContent = translations[lang][key];
      }
    });
  }


  // 🌍 Elección de idioma
  document.getElementById("es-btn").addEventListener("click", () => startWebsite("es"));
  document.getElementById("en-btn").addEventListener("click", () => startWebsite("en"));

  function startWebsite(lang) {
    // Ocultar selector
    localStorage.setItem("language", lang);
    languageSelect.style.transition = "opacity 0.5s ease";
    languageSelect.style.opacity = 0;

    languageSelect.addEventListener(
      "transitionend",
      () => {
        languageSelect.classList.remove("visible");
        languageSelect.classList.add("hidden");

        document.body.style.overflow = "auto";
        window.scrollTo(0, 0);

        // Mostrar hero
        hero.classList.remove("hidden");
        hero.classList.add("visible");
        hero.style.opacity = 0;
        void hero.offsetWidth;
        hero.style.transition = "opacity 0.8s ease";
        hero.style.opacity = 1;

        // Mostrar contacto con animación
        setTimeout(() => {
          const contactInfo = document.querySelector(".contact-info");
          if (contactInfo) contactInfo.classList.add("visible");
        }, 1500);

        // Animar secciones con IntersectionObserver
        const sectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                if (entry.target.classList.contains("skills")) {
                  const bars = entry.target.querySelectorAll(".skill-bar");
                  bars.forEach((bar) => bar.classList.add("fill"));
                }
                sectionObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2 }
        );
        sectionObserver.observe(about);
        sectionObserver.observe(skills);

        // 🌍 Traducir al idioma seleccionado
        translatePage(lang);
      },
      { once: true }
    );
  }


  // 🚀 TRANSICIÓN ENTRE PÁGINAS (Keysight / LLM / Website)
  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");

    if (href && (href.endsWith(".html") || href === "/")) {
      link.addEventListener("click", (e) => {
        // Solo aplicar si no es un enlace externo (LinkedIn, etc.)
        if (link.target === "_blank" || link.href.includes("linkedin.com")) return;

        e.preventDefault();
        const url = link.href;

        // Fade-out del body
        document.body.classList.add("fade-out");

        // Esperar la transición y luego ir a la nueva página
        setTimeout(() => {
          window.location.href = url;
        }, 600); // igual a la duración de la transición CSS
      });
    }
  });
});

