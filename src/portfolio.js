/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Anish R. Verma",
  description:
    "I build and scale products at the intersection of AI, quantum computing, and scientific software—translating complex research into practical tools for developers, researchers, and enterprises.",
  og: {
    title: "Anish R. Verma",
    type: "website",
    url: "http://anishrverma.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Anish R. Verma",
  logo_name: "AnishRVerma",
  nickname: "Hello, hello!",
  subTitle:
    "I build and scale products at the intersection of AI, quantum computing, and scientific software—translating complex research into practical tools for developers, researchers, and enterprises.",
  resumeLink: "https://anishrverma.github.io/assets/Anish_Verma_Resume.pdf",
  portfolio_repository: "https://github.com/anishrverma/anishrverma.github.io",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/anishrverma",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anishrverma/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:AnishRVerma@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X",
    link: "https://x.com/anishrverma",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/anish.verma.12979/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/anishrverma/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Product Management",
      fileName: "DataScienceImg",
      skills: [
        "Own product strategy, discovery, roadmaps, requirements, and prioritization for complex technical products, from 0-to-1 definition through launch and iteration.",
        "Translate quantum computing, AI, simulation, and research capabilities into intuitive workflows and clear customer and enterprise value propositions.",
        "Align research, engineering, design, commercial, and leadership teams around user needs, release readiness, measurable outcomes, and long-term product direction.",
      ],
    },
    {
      title: "Quantum Computing and Research",
      fileName: "FullStackImg",
      skills: [
        "Work across quantum programming, hybrid algorithms, optimization, scientific computing, simulation, AI/ML, and developer-facing research infrastructure.",
        "Bring experience spanning quantum algorithms, hardware modalities, cloud platforms, computational chemistry, finance, and nuclear physics.",
        "Communicate complex technical work through peer-reviewed publications, white papers, demonstrations, product materials, and cross-disciplinary collaboration.",
      ],
    },
    {
      title: "Project Management",
      fileName: "DesignImg",
      skills: [
        "Apply PMP and Professional Scrum Master foundations to multidisciplinary technical programs, product delivery, and research initiatives.",
        "Establish practical systems for planning, prioritization, risk management, stakeholder alignment, execution, feedback, and performance measurement.",
        "Lead distributed, cross-functional initiatives spanning scientists, engineers, designers, commercial teams, academic partners, government, and community organizations.",
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "LVMH (Louis Vuitton Moët Hennessy)",
      subtitle:
        "Inside LVMH Certificate — Creation & Branding; Operations & Supply Chain",
      logo_path: "lvmh-logo.png",
      alt_name: "LVMH logo",
      duration: "June 2026 · Online",
      descriptions: [
        "Completed Inside LVMH, a cross-functional program exploring the luxury value chain through brand creation, retail excellence, client experience, operations, and supply-chain management. Studied how leading maisons balance heritage and innovation while advancing sustainability, responsible sourcing, brand desirability, and operational excellence.",
      ],
      website_link:
        "https://www.insidelvmh.com/certificate/0fcccdf8-df06-441f-9da6-e7cfff523979",
    },
    {
      title: "Harvard Medical School",
      subtitle:
        "Certificate of Achievement in Pharmacology — Drug Discovery and Development",
      logo_path: "harvard-medical-school-logo.png",
      alt_name: "Harvard Medical School logo",
      duration: "2024 · Online",
      descriptions: [
        "Completed Harvard Medical School’s Drug Discovery and Development program, developing an end-to-end understanding of target identification, preclinical research, clinical translation, regulatory considerations, and therapeutic strategy. The program added biomedical and pharmacology context to my work across AI, simulation, quantum computing, and scientific product development.",
        "To verify this credential, go to https://learn.hms.harvard.edu/verify and enter the Document ID: 38d8ffa5",
      ],
      website_link: "https://learn.hms.harvard.edu/verify",
    },
    {
      title: "Scrum.org",
      subtitle: "Professional Scrum Master I (PSM I)",
      logo_path: "scrumorg-1.svg",
      alt_name: "PSM I",
      duration: "November 2022 · Online",
      descriptions: [
        "Earned the Professional Scrum Master I credential, validating a practical understanding of Scrum principles, accountabilities, events, artifacts, empirical process control, and continuous improvement. Applied these foundations to support cross-functional teams, product delivery, and adaptive planning.",
      ],
      website_link:
        "https://www.credly.com/badges/0b1638d6-2a1f-481d-a17e-9993740615af/public_url",
    },
    {
      title: "Project Management Institute",
      subtitle: "Project Management Professional (PMP)",
      logo_path: "pmi-6.svg",
      alt_name: "PMP",
      duration: "May 2022 · Online",
      descriptions: [
        "Earned the Project Management Professional credential, demonstrating experience and knowledge across project leadership, planning, execution, stakeholder engagement, resource management, risk management, and delivery. Applied these practices to multidisciplinary programs spanning scientific research, software, product development, and education.",
      ],
      website_link:
        "https://www.credly.com/badges/586b3ec9-be5d-4073-a61d-2cae8bd91fbb/public_url",
    },
    {
      title: "University of Guelph",
      subtitle: "Graduate Studies in Physics",
      logo_path: "UoG.png",
      alt_name: "UoG",
      duration: "2019 - 2021",
      descriptions: [
        "Pursued graduate studies and research in theoretical and computational nuclear physics, applying Fermi-liquid theory and high-precision Quantum Monte Carlo results to pure neutron matter and neutron-star physics. Used national supercomputing infrastructure and received support through the NSERC Canada Graduate Scholarship–Master’s, the Queen Elizabeth II Graduate Scholarship in Science and Technology, and a Mitacs Accelerate Fellowship before transitioning to industry to apply scientific computing and quantum methods to real-world products.",
      ],
      website_link: "https://www.uoguelph.ca/",
    },
    {
      title: "Simon Fraser University",
      subtitle:
        "Bachelor of Science Honours in Chemical Physics; Minor in Nuclear Science",
      logo_path: "SFU.png",
      alt_name: "SFU",
      duration: "2013–2018 · Burnaby, British Columbia, Canada",
      descriptions: [
        "Graduated with Distinction with a Bachelor of Science Honours in Chemical Physics and a Minor in Nuclear Science, and was selected as Valedictorian for the Faculty of Science graduating class of 2018. Built a rigorous foundation across quantum mechanics, statistical mechanics, thermodynamics, computational chemistry, mathematics, scientific programming, and physics-based modelling. Conducted award-supported nuclear-physics research that resulted in a peer-reviewed publication and national conference presentations.",
      ],
      website_link: "https://www.sfu.ca/",
    },
    {
      title: "Windermere Secondary School",
      subtitle: "British Columbia Certificate of Graduation — Dogwood Diploma",
      logo_path: "windermere-secondary-logo.png",
      alt_name: "Windermere Secondary School logo",
      duration: "2013 · Vancouver, British Columbia, Canada",
      descriptions: [
        "Completed the British Columbia Certificate of Graduation while developing early experience in community leadership and service. Served as a Community Programs Supervisor and LINK Crew Leader and participated in the Career Preparations Program and Moon Festival volunteering.",
      ],
      website_link: "https://www.vsb.bc.ca/windermere",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Rising Youth Grant (2020)",
      subtitle: "TakingITGlobal",
      logo_path: "Rising-Youth.png",
      alt_name: "Rising Youth",
      color_code: "#8C151599",
    },
    {
      title:
        "Queen Elizabeth II Graduate Scholarship in Science and Technology (2020)",
      subtitle: "OSAP",
      logo_path: "UoG.png",
      alt_name: "QEIISST",
      color_code: "#1F70C199",
    },
    {
      title: "Mitacs Accelerate Fellowship (2019)",
      subtitle: "Mitacs",
      logo_path: "mitacs.png",
      alt_name: "Mitacs",
      color_code: "#0C9D5899",
    },
    {
      title: "Canada Graduate Scholarship - Master's (2019)",
      subtitle: "Natural Sciences and Engineering Research Council",
      logo_path: "NSERC.png",
      alt_name: "CGSM",
      color_code: "#1F70C199",
    },
    {
      title:
        "Valedictorian / Class Speaker for the Graduating Class of 2018 (2018)",
      subtitle: "Simon Fraser University",
      logo_path: "SFU.png",
      alt_name: "ClassSpeaker",
      color_code: "#00000099",
    },
    {
      title:
        "Division Oral Finalist: 2nd Place in the Division of Nuclear Physics (2017)",
      subtitle: "Canadian Association of Physicists",
      logo_path: "cap.png",
      alt_name: "CAP",
      color_code: "#1F70C199",
    },
    {
      title: "Undergraduate Research Scholarship (2017)",
      subtitle: "Canadian Institute of Nuclear Physics",
      logo_path: "cinp.png",
      alt_name: "CINP",
      color_code: "#0C9D5899",
    },
    {
      title: "Undergraduate Student Research Award (2017)",
      subtitle: "Natural Sciences and Engineering Research Council",
      logo_path: "NSERC.png",
      alt_name: "USRA",
      color_code: "#00000099",
    },
    {
      title: "Melanie O'Neill Undergraduate Research Award (2016)",
      subtitle: "Department of Chemistry - Simon Fraser University",
      logo_path: "SFUChem.png",
      alt_name: "MON",
      color_code: "#2A73CC",
    },
    {
      title: "Chemistry Undergraduate Research Presentation Award (2016)",
      subtitle: "Department of Chemistry - Simon Fraser University",
      logo_path: "SFUChem.png",
      alt_name: "RPA",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Product Leadership, Scientific Research, and Technical Programs",
  description:
    "Experience building products, leading multidisciplinary programs, and translating advanced research into practical outcomes across quantum computing, AI, scientific software, finance, academic infrastructure, and STEM education.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Industry Work",
      experiences: [
        {
          title: "Senior Product Manager",
          company: "Horizon Quantum",
          company_url: "https://www.horizonquantum.com/",
          logo_path: "horizon-quantum-logo.jpg",
          alt_name: "Horizon Quantum logo",
          duration: "July 2026–Present",
          location: "Singapore — Hybrid",
          highlights: [
            "Own product requirements, roadmap priorities, and workflows spanning quantum programming languages, compilers, optimization, resource estimation, hardware portability, and application deployment.",
            "Translate research and technical infrastructure into intuitive developer products with quantum scientists, engineers, designers, and commercial teams.",
            "Lead discovery with researchers, developers, enterprises, and ecosystem partners to identify barriers to quantum application development.",
            "Establish product systems for prioritization, PRDs, cross-functional alignment, release readiness, user feedback, and performance measurement.",
            "Support commercialization through positioning, use cases, demonstrations, pilot structures, and technical and enterprise value propositions.",
          ],
          color: "#0879bf",
        },
        {
          title: "Head of Product",
          company: "Liberata",
          company_url: "https://liberata.info/",
          logo_path: "liberata-logo.png",
          alt_name: "Liberata logo",
          duration: "April 2025–July 2026",
          location: "Durham, North Carolina, United States — Remote",
          highlights: [
            "Led product for a Duke-affiliated startup building AI-enabled infrastructure for academic publishing, peer review, replication, research discovery, attribution, and evaluation.",
            "Defined the 0-to-1 vision and roadmap across publishing, research analytics, institutional data, and API products.",
            "Translated contribution shares, Academic Capital metrics, graph scientometrics, taxonomies, and marketplace workflows into product architecture.",
            "Built the product function from the ground up, establishing discovery, prioritization, PRDs, design documentation, sprint alignment, and feedback processes.",
            "Managed and mentored a cross-functional team across product research, UX, software, data visualization, marketing, finance, and partnerships.",
          ],
          color: "#9b1578",
        },
        {
          title: "Product Manager",
          company: "SandboxAQ",
          company_url: "https://www.sandboxaq.com/",
          logo_path: "sandboxaq-logo.svg",
          alt_name: "SandboxAQ logo",
          logo_background: "#10172a",
          duration: "January 2024–April 2025",
          location: "Palo Alto, California, United States — Remote",
          highlights: [
            "Led product development and go-to-market for AQChemSim, combining physics-based simulation, machine learning, and generative AI for materials science.",
            "Supported $1M+ in enterprise collaborations by translating technical capabilities into customer value, success metrics, and deployment plans.",
            "Defined customer workflows for molecular simulation, materials discovery, and R&D decision support.",
            "Built pilot materials, sales enablement, demonstrations, and executive product collateral for Fortune 500 and Global 1000 customers.",
            "Led the published research project “Market-Informed Portfolio Optimization Methods with Hybrid Quantum Computing.”",
          ],
          color: "#0879bf",
        },
        {
          title: "Associate Product Manager",
          company: "Good Chemistry Company — Acquired by SandboxAQ",
          company_url: "https://goodchemistry.com/",
          logo_path: "GoodChemistry.png",
          duration: "December 2022–January 2024",
          location: "Vancouver, British Columbia, Canada — Remote",
          highlights: [
            "Supported 0-to-1 development of QEMIST Cloud, translating computational chemistry and molecular-simulation research into an enterprise cloud product.",
            "Coordinated scientists, engineers, designers, and leadership to move the product from concept through MVP.",
            "Defined requirements, user workflows, and MVP scope for computational chemistry use cases.",
            "Led market and competitive research across quantum chemistry, materials science, molecular simulation, and pharmaceutical R&D.",
            "Produced white papers, case studies, pitch decks, technical explainers, and customer materials supporting commercialization and acquisition readiness.",
          ],
          color: "#0879bf",
        },
        {
          title: "Research Scientist",
          company: "1QBit",
          company_url: "https://www.1qbit.com/",
          logo_path: "1QBit-logo.png",
          duration: "January 2020–December 2022",
          location: "Vancouver, British Columbia, Canada — Remote",
          highlights: [
            "Created a trading algorithm that improved the best tested annual return by 75% while optimizing profit and loss and reducing drawdown.",
            "Developed VQE- and QAOA-based portfolio solutions across equities, commodities, currencies, futures, options, and cryptocurrencies.",
            "Researched quantum computing, hybrid algorithms, AI/ML, and optimization for finance and portfolio-management applications.",
            "Oversaw a diffusion-based portfolio-suggestion tool trained on public 13F filing data.",
            "Founded and managed the Academic Collaboration in Finance program and supported product strategy, commercialization, and hiring.",
          ],
          color: "#0879bf",
        },
        {
          title: "Chief Operating Officer and Technical Program Manager",
          company: "STEM Fellowship",
          company_url: "https://www.stemfellowship.com/",
          logo_path: "stem-logo.png",
          duration: "September 2021–October 2022",
          location: "Toronto, Ontario, Canada — Remote",
          highlights: [
            "Directed national operations and program strategy across data science, STEMpowerment, science communication, and grassroots programming.",
            "Managed education initiatives spanning AI/ML, cybersecurity, blockchain, digital citizenship, quantum computing, and emerging technologies.",
            "Helped renew the organization’s mission, operating model, and growth priorities with leadership and the board.",
            "Built planning, stakeholder-alignment, coordination, and execution systems for a distributed national network.",
            "Developed industry, academic, government, and community partnerships to expand equitable access to STEM education.",
          ],
          color: "#9b1578",
        },
        {
          title: "Business and Project Manager — Secondment",
          company: "Quantum Algorithms Institute",
          company_url: "https://quantumalgorithms.ca/",
          logo_path: "QAI.jpeg",
          duration: "October 2021–March 2022",
          location: "Vancouver, British Columbia, Canada — Remote",
          highlights: [
            "Managed contracted projects valued at up to $250,000, aligning scope, stakeholders, timelines, technical requirements, and business outcomes.",
            "Generated and qualified 50+ B2B leads for Canadian companies.",
            "Connected industry, academia, and government around commercial applications of quantum and quantum-inspired technologies.",
            "Designed workshops to identify adoption opportunities across optimization, simulation, finance, logistics, and advanced computing.",
            "Translated complex quantum capabilities into practical use cases and funded project opportunities.",
          ],
          color: "#0879bf",
        },
        {
          title: "Chief Data Officer",
          company: "STEM Fellowship",
          company_url: "https://www.stemfellowship.com/",
          logo_path: "stem-logo.png",
          duration: "February 2020–August 2021",
          location: "Toronto, Ontario, Canada — Remote",
          highlights: [
            "Increased the client base by 123.5% while expanding remote access during the COVID-19 pandemic.",
            "Grew digital engagement to 56,221 users and helped earn recognition from the Prime Minister of Canada.",
            "Directed the data science division and national education, student research, and hackathon programs.",
            "Managed the organization’s largest STEM education program and developed curricula for multiple levels of technical depth.",
            "Built partnerships with the United Nations, the Government of Canada, and Hoffmann-La Roche.",
          ],
          color: "#9b1578",
        },
        {
          title: "Executive Editor and Journal Manager",
          company: "SFU Science Undergraduate Research Journal",
          company_url: "https://sfusurj.com/",
          logo_path: "surj.png",
          duration: "September 2016–September 2019",
          location: "Burnaby, British Columbia, Canada",
          highlights: [
            "Co-led the editorial board and managed the journal’s publication, operations, and promotion.",
            "Solicited submissions and conducted editorial evaluations.",
            "Coordinated authors, supervisors, and peer reviewers through the publication process.",
            "Managed and mentored senior and junior editors.",
          ],
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Academic Research",
      experiences: [
        {
          title:
            "Quantum Monte Carlo Methods and Its Application to Fermi Liquid Theory",
          company: "Graduate Research Project",
          company_url:
            "https://anishrverma.github.io/assets/Anish-Verma_Thesis.pdf",
          logo_path: "UoG.png",
          duration: "May 2019 - April 2021",
          location: "Guelph, ON",
          description:
            "Graduate research conducted at the University of Guelph on quasiparticle excitations in nuclear matter, extending finite Fermi-liquid theory to the thermodynamic limit for strongly interacting neutrons. Used high-precision Quantum Monte Carlo results produced on Compute Canada cluster supercomputers. The research received support through the NSERC Canada Graduate Scholarship–Master’s, a Mitacs Accelerate Fellowship, and the Queen Elizabeth II Graduate Scholarship in Science and Technology.",
          color: "#ee3c26",
        },
        {
          title: "Research Assistant",
          company: "Simon Fraser University",
          company_url: "https://www.sfu.ca/",
          logo_path: "SFU.png",
          duration: "May 2016–August 2017",
          location: "Burnaby, British Columbia, Canada",
          description:
            "Conducted research funded by NSERC and the Canadian Institute of Nuclear Physics. Extended the two-particle rotor model to include a delta-force interaction between valence nucleons. Modeled pair breaking in quadrupole-deformed nuclei and its effects on nuclear observables. Contributed to research later published in the Canadian Journal of Chemistry.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Teaching Work",
      experiences: [
        {
          title: "Graduate Teaching Assistant",
          company: "University of Guelph",
          company_url: "https://www.uoguelph.ca/",
          logo_path: "UoG.png",
          duration: "September 2019–December 2019",
          location: "Guelph, Ontario, Canada",
          description:
            "Supported undergraduate instruction, assessment, and student learning in university-level science coursework.",
          color: "#ee3c26",
        },
        {
          title: "Undergraduate Teaching Assistant",
          company: "Simon Fraser University",
          company_url: "https://www.sfu.ca/",
          logo_path: "SFU.png",
          duration: "January 2017–May 2017",
          location: "Burnaby, British Columbia, Canada",
          description:
            "Supported undergraduate teaching, student learning, assessment, and course delivery in the Faculty of Science.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Publications",
  subtitle: "Research and Technical Publications",
  description:
    "Peer-reviewed research and industry white papers spanning hybrid quantum optimization, financial-market analytics, natural language processing, public-health communication, and nuclear physics.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  publications: [
    {
      title:
        "Market-Informed Portfolio Optimization Methods with Hybrid Quantum Computing",
      subtitle:
        "Giancarlo Martínez Salirrosas; Jinglun Gao; Anish R. Verma; Arthur Yu",
      duration: "November 16, 2024 · Review of Financial Economics",
      descriptions: [
        "This document presents a portfolio optimization framework that employs a hybrid quantum computing algorithm and a futures market sentiment indicator—The Market Sentiment Meter (MSM) variable, developed jointly by CME Group and 1QBit. The methodology used was the Variational Quantum Eigensolver (VQE). The work presented here is divided into four portfolio optimization problem formulations, of binary and continuous variable formulations, determining which assets to pick their weights. This work demonstrates that adding the MSM variable can improve the performance of hybrid quantum solutions, by informing the asset selection problem with market environment information through the four MSM states.",
      ],
      website_link: "https://doi.org/10.1002/rfe.1219",
    },
    {
      title:
        "A Sentiment Analysis of the Black Lives Matter Movement Using Twitter",
      subtitle:
        "Jacqueline Peng; Jun Shen Fung; Muhammad Murtaza; Afnan Rahman; Pallav Walia; David Obande; Anish R. Verma",
      duration: "September 13, 2022 · STEM Fellowship Journal",
      descriptions: [
        "As more attention is brought to racial injustice, public sentiments and opinions on racial issues are increasingly important to track. Recent progress in machine learning and natural language processing, coupled with growing amounts of data, allows researchers to extract sentiment from text at large scales. We applied a natural language processing framework to study public sentiment surrounding the Black Lives Matter (BLM) movement, using a state-of-the-art BERT model fine-tuned for Twitter sentiment classification to predict sentiment from approximately one million BLM-related tweets posted from July 2013 to March 2021. The model obtained an AUC of 0.97 on the training data and 0.94 on the testing data, outperforming other machine learning models. Retweet frequency and word frequency illustrated important themes and events, while sentiment analysis identified themes associated with positive sentiment, such as social justice, and negative sentiment, such as police brutality. The approach can also help researchers and activists understand other social and political movements.",
      ],
      website_link: "https://doi.org/10.17975/sfj-2022-015",
    },
    {
      title:
        "An Analysis of the COVID-19 Infodemic: The Impact of American Public Sources on Sentiment, Conversation, and Physician Behaviour Towards Hydroxychloroquine",
      subtitle:
        "Emily W. L. Chan; Ginah Choi; Kendrew S. K. Wong; Shirley Zeng; Anish R. Verma",
      duration: "August 6, 2021 · STEM Fellowship Journal",
      descriptions: [
        "The COVID-19 infodemic—an overabundance of accurate and inaccurate information—poses a public-health risk by spreading fear and provoking inappropriate prescribing. Conflicting statements from the US federal government, health organizations, and research publications about hydroxychloroquine contributed to this problem. To evaluate their influence, we analyzed changes in the volume and sentiment of tweets containing “hydroxychloroquine” from March 12 to June 22, 2020. The US government had a statistically significant influence on public attitudes and behaviour (p < 0.001), unlike health organizations and research publications. Sentiment toward hydroxychloroquine became more negative over time, and its positive correlation with sentiment toward azithromycin and remdesivir indicated that information about one treatment could affect attitudes toward related treatments. We recommend strengthening critical thinking and digital literacy education, improving social-media misinformation labels, and increasing cooperation between highly influential entities and other public-health sources.",
      ],
      website_link: "https://doi.org/10.17975/sfj-2021-001",
    },
    {
      title:
        "A Comparison of Text Sentiment and Market Sentiment: US Treasury 10-Year Note Futures and Changes to Cash in Circulation Using Sentiment Analysis and the CME Market Sentiment Meter",
      subtitle: "Pazinski Hong; Anish R. Verma",
      duration: "May 27, 2021 · 1QBit White Paper",
      descriptions: [
        "The CME Market Sentiment Meter (MSM) calculates market-sentiment states from a novel mixture distribution using options and futures settlement data. We compare market sentiment derived from financial data with text sentiment from sentiment analysis as indicators of market trends following external events. Both types of sentiment were explored in a 2020 case study of US Treasury 10-Year Note futures (TYF), a year marked by large fluctuations in the US economy due to the COVID-19 pandemic and other major events. Changes in the standard deviation of the MSM mixture distribution occurred earlier than changes in the sentiment-analysis polarity score and preceded movement in the most active TYF settlement price.",
      ],
      website_link:
        "https://1qbit.com/whitepaper/a-comparison-of-text-sentiment-and-market-sentiment-us-treasury-10-year-note-futures-and-changes-to-cash-in-circulation-using-sentiment-analysis-and-the-cme-market-sentiment-meter-2/",
    },
    {
      title:
        "CME Market Sentiment Meter Historical Market Analyses: Natural Gas 2014 North American Cold Wave",
      subtitle: "Aaron He; Anish R. Verma",
      duration: "January 15, 2021 · 1QBit White Paper",
      descriptions: [
        "From late 2013 through early 2014, severe cold fronts crossed North America while natural-gas futures (NG1) prices rose sharply, peaking in February 2014. The CME Market Sentiment Meter (MSM) indicated Complacent and Balanced states before the cold period. As the cold wave intensified, the MSM indicated Anxious states that preceded an upward movement in settlement price. During and after the price spike, the MSM returned to Balanced states, indicating that options traders did not expect the gas shortage to persist beyond March, consistent with previous years’ supply-and-demand cycles.",
      ],
      website_link:
        "https://1qbit.com/whitepaper/cme-market-sentiment-meter-historical-market-analyses-natural-gas-2014-north-american-cold-wave/",
    },
    {
      title:
        "Trading Algorithm Navigation Using a Mixture Distribution Risk Model",
      subtitle: "Andrew Milne; Anish R. Verma; Phil Goddard; Clemens Adolphs",
      duration: "October 1, 2020 · 1QBit White Paper",
      descriptions: [
        "The CME Market Sentiment Meter (MSM) provides a daily risk-return estimate based on end-of-day settlement data from previous days. We show how the MSM can be used to navigate a reversion-to-the-mean trading algorithm across changing market states and, in our example, increase its annualized return on investment from 60% to 135%. We then describe a procedure through which other trading algorithms can be similarly improved.",
      ],
      website_link:
        "https://1qbit.com/whitepaper/trading-algorithm-navigation-using-a-mixture-distribution-risk-model/",
    },
    {
      title:
        "CME Market Sentiment Meter Historical Market Analyses — Gold — 2019 Federal Funds Rate Cuts",
      subtitle: "Anish R. Verma; Andrew Milne",
      duration: "August 31, 2020 · 1QBit White Paper",
      descriptions: [
        "Periods of Anxious market states for Gold futures (GC1) tended to be either short-lived or long-lived during the eight-year period ending in December 2019. In 2018, the US experienced economic growth and the Federal Reserve raised rates four times; the year was dominated primarily by Balanced market states, and GC consistently fell after rate increases were announced. In 2019, slower economic growth and increased tensions with China, Iran, and Russia accompanied a large rise in GC from July to November, with prices remaining high relative to the beginning of the year. During the Federal Reserve’s three rate cuts, the CME Market Sentiment Meter indicated an extended period of Anxious market states from July to November.",
      ],
      website_link:
        "https://1qbit.com/whitepaper/cme-market-sentiment-meter-historical-market-analyses-gold/",
    },
    {
      title:
        "Market Reactions to COVID-19: A Review of Q1 2020 as Seen in the CME Market Sentiment Meter",
      subtitle: "Anish R. Verma; Andrew Milne",
      duration: "May 1, 2020 · 1QBit White Paper",
      descriptions: [
        "The COVID-19 pandemic had a notable effect on the eight futures and options products tracked by the CME Market Sentiment Meter. In markets including US equity-index and interest-rate futures, daily futures volumes rose rapidly as prices changed and traders managed evolving risk. Volume peaks were followed by declines that varied by market, alongside changes in corresponding options volumes and positions. The meter reported transitions from Balanced to Anxious states in every product except soybeans and natural gas. Anxious states are associated with expectations of larger price movements, which were observed in the markets. Forward-looking activity also moved from futures to options at a different rate for each product, and market sentiment took time to become established.",
      ],
      website_link: "https://1qbit.com/whitepaper/market-reactions-covid-19/",
    },
    {
      title:
        "CME Market Sentiment Meter Historical Market Analyses — September 14, 2019 Abqaiq–Khurais Attack",
      subtitle: "Anish R. Verma",
      duration: "April 1, 2020 · 1QBit White Paper",
      descriptions: [
        "In 2019, the most active daily settlement price for WTI Crude Oil futures (CL) rose as tensions with China and Iran grew from January to April, while the CME Market Sentiment Meter (MSM) indicated Balanced market states. After a period of Conflicted states in May, CL fell from 63.21 USD/bbl to 51.14 USD/bbl. The state then became Anxious as CL began to rise, before returning to Balanced in August. On September 14, a drone attack on Saudi Aramco facilities in Abqaiq and Khurais, Saudi Arabia, was followed by a rise in CL from 54.85 USD/bbl to 62.90 USD/bbl. The risk-return curve became skewed immediately after the attack, but the market state remained Balanced. The price increase was short-lived and reversed the following day.",
      ],
      website_link:
        "https://1qbit.com/whitepaper/cme-market-sentiment-meter-historical-market-analyses/",
    },
    {
      title:
        "Collective and Single-Particle Degrees of Freedom in Rotating Nuclei",
      subtitle: "Anish R. Verma; Krzysztof Starosta",
      duration: "August 16, 2017 · Canadian Journal of Chemistry",
      descriptions: [
        "In 1937, Hermann Jahn and Edward Teller described a mechanism of symmetry breaking in nonlinear polyatomic molecules that lifts orbital degeneracy and provides insight into molecular structure. The effects of symmetry breaking on quantum states also apply to nuclei, where degenerate nucleon states replace electronic states. Reinhard and Otten showed that the nuclear Jahn–Teller effect can describe commonly observed collective quadrupole surface motion. To incorporate single-particle effects, we developed a model in which two valence nucleons of the same kind are coupled to an axially symmetric, quadrupole-deformed rotor with D2 symmetry and interact through the nuclear delta force. The model reproduces the lowest-energy band at a given spin for cerium-126. The resulting wavefunctions are used to calculate the g factor, reduced electric quadrupole transition probability, and spectroscopic quadrupole moment as functions of spin, laying groundwork for exploring higher-order symmetries in the multipole expansion.",
      ],
      website_link: "https://doi.org/10.1139/cjc-2017-0275",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "anish-verma-headshot.jpg",
    description:
      "I’m always happy to connect and discuss product, AI, quantum computing, scientific software, research, or other areas of shared interest. Feel free to reach out through email or any of the platforms below.",
  },
  blogSection: {
    title: "CV",
    subtitle:
      "I find it is important to keep an academic CV as well, which lists my publications, awards, honors, career, and everything else one may need to know about me.",
    link: "https://anishrverma.github.io/assets/Anish_Verma_CV.pdf",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    avatar_image_path: "developerActivity.svg",
  },
  phoneSection: {},
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  publications,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
