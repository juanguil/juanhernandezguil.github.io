document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const loaderText = document.getElementById("loader-text");
  const languageSelect = document.getElementById("language-select");
  const hero = document.querySelector(".hero");
  const about = document.querySelector(".about");
  const skillsSections = document.querySelectorAll(".skills"); // ✅ ahora selecciona todas las secciones de skills

  // Traducciones básicas
  const translations = {
    en: {
      hero_career_title: "Telecommunications Engineer",
      hero_LLM_card: "Project on the design and development of a methodology for KPI estimation using LLMs.",
      hero_keysight: "Work experience as a C# Developer in a mobile networks environment.",
      hero_LLM_title: "KPI Estimation with LLMs",
      hero_web_card: "Portfolio website project for documenting learning.",
      hero_keysight_project: "Project",
      hero_languages: "Languages",
      hero_experience: "Experience & Applications",
      hero_copied: "Copied ✅",
      hero_1:"Telematics Engineer from the University of Málaga, with a strong interest in software development, AI, telecommunications networks, and the integration of emerging technologies.",
      hero_2:"This website is a personal tool developed from scratch as part of continuous learning, with the aim of expanding knowledge and creating a space to gather future projects.",
      hero_3:"Experience & Applications",
      hero_4:"Professional experience as a C# Developer in a mobile networks environment.",
      hero_5:"Description",
      hero_6:"Active participation in the development and maintenance of test cases for three U.S. operators: <strong>AT&T</strong>, <strong>T-Mobile</strong>, and <strong>Verizon</strong>.",
      hero_7:"Use of <strong>.NET</strong> environments in <strong>C#</strong> for solution development.",
      hero_8:"Collaboration with multidisciplinary teams under agile methodologies (<strong>Scrum</strong>).",
      hero_9:"Detection and resolution of errors to ensure software stability and functionality.",
      hero_10:"Regular use of tools such as <strong>JIRA</strong>, <strong>CloudBees</strong>, and <strong>SourceTree</strong>.",
      hero_11:"The web portfolio has been created as a space to deepen knowledge in technologies such as <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>, while also organizing and documenting shared experiences and applications.",
      hero_12:"Design and development of a methodology for estimating numerical values in mobile networks using <strong>Large Language Models (LLMs)</strong>.",
      hero_13:"Analysis and selection of the most suitable LLM model based on the characteristics of the problem.",
      hero_14:"Development in <strong>Python</strong>.",
      hero_15:"Design and implementation of techniques such as <strong>few-shot learning</strong> and <strong>expert context</strong>.",
      hero_16:"Comparison and resolution of the same problem using traditional <strong>Machine Learning</strong> models.",
      hero_17:'If you want to learn more about the motivation behind the project and access a summarized version of the code, you can do so at the following link <a href="https://github.com/juanguil/EstimationwithLLM/blob/main/EstimacionNumericaLLM.ipynb" target="_blank">https://github.com/juanguil/EstimationwithLLM/blob/main/EstimacionNumericaLLM.ipynb</a>.',
      hero_18:"Development for <strong>task automation</strong>"
    },
    es: {
        hero_copied: "Copiado ✅",
        hero_copy_error: "Error al copiar ❌"
    }
  };

  let progress = 0;

  // ====== LOADER ======
  const interval = setInterval(() => {
    progress++;
    loaderText.textContent = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      loader.style.transition = "opacity 0.6s ease";
      loader.style.opacity = "0";

      loader.addEventListener("transitionend", () => {
        loader.style.display = "none";

        // Mostrar selección de idioma
        languageSelect.style.opacity = 0;
        languageSelect.classList.remove("hidden");
        languageSelect.classList.add("visible");
        void languageSelect.offsetWidth;
        languageSelect.style.transition = "opacity 0.6s ease";
        languageSelect.style.opacity = 1;
      }, { once: true });
    }
  }, 40);

  // ====== TRADUCCIÓN ======
  function translatePage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  // ====== BOTONES DE IDIOMA ======
  document.getElementById("es-btn").addEventListener("click", () => startWebsite("es"));
  document.getElementById("en-btn").addEventListener("click", () => startWebsite("en"));

  // ====== FUNCIÓN PRINCIPAL ======
  function startWebsite(lang) {
    localStorage.setItem("language", lang);

    languageSelect.style.transition = "opacity 0.5s ease";
    languageSelect.style.opacity = 0;

    languageSelect.addEventListener("transitionend", () => {
      languageSelect.classList.remove("visible");
      languageSelect.classList.add("hidden");

      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);

      // Mostrar hero con fade in
      hero.classList.remove("hidden");
      hero.classList.add("visible");
      hero.style.opacity = 0;
      void hero.offsetWidth;
      hero.style.transition = "opacity 0.8s ease";
      hero.style.opacity = 1;

      setTimeout(() => {
        const contactInfo = document.querySelector(".contact-info");
        if (contactInfo) contactInfo.classList.add("visible");
      }, 1500);

      // ====== OBSERVADOR DE SECCIONES ======
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            if (entry.target.classList.contains("skills")) {
              entry.target.querySelectorAll(".skill-bar").forEach(bar => {
                bar.classList.add("fill");
              });
            }

            sectionObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      sectionObserver.observe(about);
      skillsSections.forEach(section => sectionObserver.observe(section)); 

      translatePage(lang);

      // ====== EFECTO DESPLEGABLE EN LAS CARDS ======
        document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.card').forEach(c => {
            if (c !== card) c.classList.remove('active');
            });

            card.classList.toggle('active');
        });
        });


    }, { once: true });
  }

  


  // ===== COPIAR AL PORTAPAPELES + MENSAJE =====
    function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000); 
    }

    document.querySelectorAll('.contact-icons .icon').forEach(icon => {
    const info = icon.getAttribute('data-info');

    if (info && info !== 'LinkedIn') {
        icon.addEventListener('click', async () => {
            const lang = localStorage.getItem('language') || 'es'; 
            try {
                await navigator.clipboard.writeText(info);
                showToast(translations[lang].hero_copied);
            } catch (err) {
                console.error('Error al copiar: ', err);
                showToast(translations[lang].hero_copy_error);
            }
        });
    }
});










});
