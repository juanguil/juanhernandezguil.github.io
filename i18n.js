// ✅ Archivo común para traducciones
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
    hero_LLM_5: 'The entire project was developed in <strong>Python</strong> using <strong>Google Colab</strong>, which enabled an agile and reproducible workflow. If you want to learn more about the motivation behind the project and access a summarized version of the code, you can do so at the following link <a href="https://github.com/juanguil/EstimationwithLLM/blob/main/EstimacionNumericaLLM.ipynb" target="_blank">https://github.com/juanguil/EstimationwithLLM/blob/main/EstimacionNumericaLLM.ipynb</a>.',
    hero_web_1: "The web portfolio has been created as a space to deepen knowledge in technologies such as <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>, while also organizing and documenting shared experiences and applications.",
    hero_web_2: "Objetives",
    hero_web_3: "A Future for Today",
    hero_index_1: "This website is a personal tool developed from scratch as part of continuous learning, with the aim of expanding knowledge and creating a space to gather future projects.",
    hero_index_2: "Telematics Engineer from the University of Málaga, with a strong interest in software development, AI, telecommunications networks, and the integration of emerging technologies.",
    hero_5:"Description",
    hero_6:"Active participation in the development and maintenance of test cases for three U.S. operators: <strong>AT&T</strong>, <strong>T-Mobile</strong>, and <strong>Verizon</strong>.",
    hero_7:"Use of <strong>.NET</strong> environments in <strong>C#</strong> for solution development.",
    hero_8:"Collaboration with multidisciplinary teams under agile methodologies (<strong>Scrum</strong>).",
    hero_9:"Detection and resolution of errors to ensure software stability and functionality.",
    hero_10:"Regular use of tools such as <strong>JIRA</strong>, <strong>CloudBees</strong>, and <strong>SourceTree</strong>.",
    hero_18:"Development for <strong>task automation</strong>",
    hero_12:"Design and development of a methodology for estimating numerical values in mobile networks using <strong>Large Language Models (LLMs)</strong>.",
    hero_13:"Analysis and selection of the most suitable LLM model based on the characteristics of the problem.",
    hero_14:"Development in <strong>Python</strong>.",
    hero_15:"Design and implementation of techniques such as <strong>few-shot learning</strong> and <strong>expert context</strong>.",
    hero_16:"Comparison and resolution of the same problem using traditional <strong>Machine Learning</strong> models.",
    hero_17:"If you want to learn in detail the motivation behind the project and access the code, you can do so at the following link."

  },
  es: {
    hero_keysight_project: "Proyecto"
  }
};

// ✅ Función de traducción
function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key]; // ✅ permite HTML como <strong>
    }
  });
}

