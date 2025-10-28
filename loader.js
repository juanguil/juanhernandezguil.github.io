document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const loaderText = document.getElementById("loader-text");
  const languageSelect = document.getElementById("language-select");
  const hero = document.querySelector(".hero");
  const about = document.querySelector(".about");
  const skills = document.querySelector(".skills");

  const selectedLang = localStorage.getItem("language") || "es";

  
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
    hero_keysight_1: "Actively participate in the development and maintenance of test cases for three U.S. operators: <strong>ATT</strong>, <strong>T-Mobile</strong>, and <strong>AT&T</strong>.",
    hero_tools: "Technologies and Tools",
    hero_keysight_t1: "Use of <strong>.NET</strong> environments in <strong>C#</strong> for solution development.",
    hero_keysight_t2: "Collaborate with multidisciplinary teams under agile methodologies (<strong>Scrum</strong>), ensuring efficient delivery of results and project quality.",
    hero_keysight_t3: "Bug detection and resolution to ensure software stability and functionality.",
    hero_keysight_t4: "Regular use of tools such as <strong>JIRA</strong>, <strong>CloudBees</strong>, and <strong>SourceTree</strong> for task management, version control, and process automation.",
    hero_LLM_1: "Final project — Construction of Mobile Network Performance Models with LLMs",
    hero_LLM_2: "Objective",
    hero_LLM_3: "The objective was to develop a methodology for estimating numerical values in mobile networks using <strong>Large Language Models (LLMs)</strong>. In dynamic environments, such as future 6G networks, traditional models can be less efficient due to their limited adaptability. Typically, estimation with these models is structured in three phases: <strong>training → validation → testing</strong>. However, the training phase is often rigid and requires a large amount of resources, especially when it is necessary to readjust hyperparameters for even the slightest change in the problem characteristics. Therefore, using LLMs for estimating key performance indicators (KPIs) presents a potentially advantageous alternative in certain scenarios, as it avoids the need for full traditional training.",
    hero_LLM_4: "Tools and Development",
    hero_LLM_5: "The entire project was developed in <strong>Python</strong> using <strong>Google Colab</strong>, which enabled an agile and reproducible workflow. A conceptual summary of the code for the designed methodology can be found in my GitHub repository: <a href=\"https://github.com/tu_usuario_github\" target=\"_blank\">https://github.com/tu_usuario_github</a>.",
    hero_web_1: "The web portfolio has been created as a space to deepen knowledge in technologies such as <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>, while also organizing and documenting shared experiences and applications.",
    hero_web_2: "Objetives",
    hero_web_3: "A Future for Today",
    hero_index_1: "This website is a personal tool developed from scratch as part of continuous learning, with the aim of expanding knowledge and creating a space to gather future projects.",
    hero_index_2: "Telematics Engineer from the University of Málaga, with a strong interest in software development, AI, telecommunications networks, and the integration of emerging technologies."

  },
  es: {
    hero_keysight_project: "Proyecto"
  }
};


  function translatePage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  
  if (loader && loaderText && languageSelect) {
    let progress = 0;

    const interval = setInterval(() => {
      progress++;
      loaderText.textContent = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        loader.style.transition = "opacity 0.6s ease";
        loader.style.opacity = "0";
        loader.addEventListener("transitionend", () => {
          loader.style.display = "none";
          languageSelect.classList.remove("hidden");
          languageSelect.classList.add("visible");
        }, { once: true });
      }
    }, 40);

    document.getElementById("es-btn").addEventListener("click", () => startWebsite("es"));
    document.getElementById("en-btn").addEventListener("click", () => startWebsite("en"));

    function startWebsite(lang) {
      localStorage.setItem("language", lang);
      localStorage.setItem("visitedLoader", "true");
      languageSelect.style.transition = "opacity 0.5s ease";
      languageSelect.style.opacity = "0";
      setTimeout(() => window.location.href = "index.html", 400);
    }

    return; 
  }

  
  if (hero && about && skills) {
    translatePage(selectedLang);

    hero.classList.remove("hidden");
    hero.classList.add("visible");

    setTimeout(() => {
      const contactInfo = document.querySelector(".contact-info");
      if (contactInfo) contactInfo.classList.add("visible");
    }, 1200);

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.classList.contains("skills")) {
            entry.target.querySelectorAll(".skill-bar").forEach(bar => bar.classList.add("fill"));
          }
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    sectionObserver.observe(about);
    sectionObserver.observe(skills);
  }
});
