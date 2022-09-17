/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Anish R. Verma",
  description:
    "I solve problems using data science, quantum computing, and mathematics; driven by my passion, and presented with my charisma.",
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
    "I solve problems using data science, quantum computing, and mathematics; driven by my passion, and presented with my charisma.",
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
    link: "mailto:anishrverma@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/anishrverma",
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
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "📈 Experienced in handling and visualizing large data sets, in order to discover solutions and translate them to end-users, developers, the public, and more.",
        "📈 Led projects with various forms of data, from quantitative numerical time-series in supervised and unsupervised models to qualitative text data in NLP projects.",
        "📈 Quantitative modelling for classical, machine learning, and quantum paradigms.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SciKit Learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:azure-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "mdi:bash",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Fortran",
          fontAwesomeClassname: "vscode-icons:file-type-fortran",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Quantum Computing and Scientific Research",
      fileName: "FullStackImg",
      skills: [
        "⚡ Use and development of tools using quantum computing sotware and algorithms for various quantum computing hardware – Gate Model, Quantum Annealers, and Photonic.",
        "⚡ Experienced in quantum computing libraries – Qiskit, PennyLane, Cirq, 1Qloud – and cloud platform access points – Azure Quantum, Amazon Braket.",
        "⚡ Accomplished in developing mathematical, computational, and statistical models to understand underlying structures and meaning in data.",
        "⚡ Able to communicate these findings through various forms of scientific communication for academic publishing, presentations, and public outreach.",
      ],
      softwareSkills: [],
    },
    {
      title: "Project Management",
      fileName: "DesignImg",
      skills: [
        "🌐 Experienced in leading in-person and distributed remote teams to plan and execute time-sensitive, large-scale projects.",
        "🌐 Able to leverage multidisciplinary and cross-functional teams to make use of their unique skillsets in project development and implementation.",
        "🌐 Skilled in communicating with internal and external stakeholders with diverse backgrounds – CEOs, PMs, government, academics, hardware developers, software developers, data scientists, and more.",
      ],
      softwareSkills: [],
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
      title: "Project Management Institute (PMI)",
      subtitle: "Project Management Professional (PMP)",
      logo_path: "pmi-6.svg",
      alt_name: "PMP",
      duration: "May 2022",
      descriptions: [
        "💻 Having managed technical and non-technical projects related to data science, quantum computing, and education I have extensive experience to track, expand, and quantitatively improve project development and launches.",
        "🏦 Educated through practice and a number of Project Management Certified Educational Providers.",
        "🎓 Certified as of May 15 2022.",
      ],
      website_link: "https://www.pmi.org/",
    },
    {
      title: "Simon Fraser University",
      subtitle: "B.Sc. Honours in Chemical Physics",
      logo_path: "SFU.png",
      alt_name: "SFU",
      duration: "2013 - 2018",
      descriptions: [
        "⚛️ I studied Chemical Physics, and took advanced courses in mathematics, physics, chemistry, and nuclear science.",
        "💻 I conducted research as part of the nuclear science group, and constructed mathematical and computational models using Fortran, MATLAB, and Python. For this work, I was awarded scholarships and awards.",
        "🎓 I graduated with honours, and was the Class Speaker / Valedictorian for the faculty of science graduating class of 2018. I was on both the Dean's Honour Roll and the President's Honour Roll.",
      ],
      website_link: "http://www.sfu.ca",
    },
    {
      title: "University of Guelph",
      subtitle: "M.Sc. in Physics",
      logo_path: "UoG.png",
      alt_name: "UoG",
      duration: "2019 - 2021",
      descriptions: [
        "📈 I studied physics, conducting research in theoretical and computational nuclear physics. Some courses I took include Statistical Mechanics, Quantum Mechanics, and Nuclear Reactions in Stellar Astrophysics.",
        "💻 My research involved using cluster supercomputers to run Quantum Monte Carlo simulations to calculate accurate and precise results, which were then modeled using a statistical and physical mathematical framework.",
        "🏦 I was funded by several major scholarships including the Natural Sciences and Engineering Research Council Canada Graduate Scholarship - Master's (NSERC CGS-M), the Queen Elizabeth II Graduate Scholarship in Science and Technology, and the Mitacs Accelerate Fellowship.",
      ],
      website_link: "http://wwww.uoguelph.ca",
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
  subtitle: "Industry, Research, and Education",
  description:
    "I have been able to excel in finance, technology, scientific research, data science, and education in a variety of roles over the past five years. My technical, leadership, and team skills have allowed me to advance projects and grow each organization through demonstrated record breaking. Summarized here is my work experience.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Industry Work",
      experiences: [
        {
          title: "Quantum Computing Research Scientist + Product Owner",
          company: "1QBit",
          company_url: "https://www.1qbit.com/",
          logo_path: "1QBit-logo.png",
          duration: "January 2020 - PRESENT",
          location: "Vancouver, BC",
          description:
            "I am working on applying quantum-inspired and quantum computing solutions to financial problems. In exploring the quantum landscape, I've learned about various quantum algorithms, hardware classes, and the major players today. I have modeled risk for futures, analyzed major price moves in equities, FX, and commodities, and worked on trading algorithms, all documented in open access papers. In addition to this, I currently lead the academic collaboration in finance program, in which we provide training in quantum computing to professors, graduate students, and researchers across the world to expose them to quantum technologies and find new applications. Through this program, we have provided training and supervision to researchers at University College London, University of British Columbia, Stevens Institute of Technology, University of Toronto Mississauga, and more.",
          color: "#0879bf",
        },
        {
          title: "Chief Operating Officer + Program Manager",
          company: "STEM Fellowship",
          company_url: "https://www.stemfellowship.com",
          logo_path: "stem-logo.png",
          duration: "February 2022 - PRESENT",
          location: "Toronto, ON",
          description:
            "I direct the operations and direction of the organization, pushing forward the three major pillars of the organization: Data Science Education for Change, STEMpowerment, and Science Communication. In particular, I managed the Data Science pillar program, which covered internal Data Science operations/research, Cybersecurity, Blockchain, and Digital Citizenship. I have worked with the managing team, board of directors, and stakeholders to renew the mission and vision, having seen major growth of the number of programs, funding, and number of organization members. In this process, the organization has continued to break the previous KPIs of all its major programs, allowing us to expand beyond our previous reach. In addition to this, I have started new initiatives that are allowing the organization to adopt new technologies and train the youth of Canada in artificial intelligence, machine learning, blockchain, quantum computing, and more.",
          color: "#9b1578",
        },
        {
          title: "Business and Project Manager (Secondment)",
          company: "Quantum Algorithms Institute",
          company_url: "http://quantumalgorithms.ca/",
          logo_path: "QAI.jpeg",
          duration: "October 2021 - March 2022",
          location: "Vancouver, BC",
          description:
            "As a business and project manager, I led initiatives to establish an applied quantum computing ecosystem that brings together industry, academia, and government to bring quantum computing technologies to the real world, by acquiring and managing projects between Canadian Companies and Quantum Computing members. Through a series of strategic workshops, initiatives, and research, I successfully generated leads of companies that can benefit from incorporating quantum computing and quantum-inspired solutions. By working with our stakeholders, board members and partners, I managed several contracted projects resultant from the aforementioned lead generation strategy.",
          color: "#0879bf",
        },
        {
          title: "Chief Data Officer + Project Manager",
          company: "STEM Fellowship",
          company_url: "https://www.stemfellowship.com",
          logo_path: "stem-logo.png",
          duration: "February 2020 - January 2022",
          location: "Toronto, ON",
          description:
            "I led the data science division, in which I directed the organization's data analytics to improve internal operations, and manage several teams in conducting research projects. I also led and oversaw the organization of the National Big Data Challenge program, in which we empowered students to use data science in an interdisciplinary setting. This took the form of hackathons, extracurricular learning programs, learning modules, and workshops with topics ranging from statistics to machine learning. In addition, I consulted in the planning, organization, and data analytics with other organizations like Resolution Blue Labs.",
          color: "#9b1578",
        },
        {
          title: "Executive Editor + Journal Manager",
          company: "SFU Science Undergraduate Research Journal",
          company_url: "https://sfusurj.com/",
          logo_path: "surj.png",
          duration: "September 2016 - September 2019",
          location: "Burnaby, BC",
          description:
            "In this role, I actively managed, financed, and promoted the Journal’s operations. Along with two other executives, I led a team of 20 to ensure a effective and efficient pipeline in communicating with authors, referees, and sponsors, before leading to an annual publication. I helped lead new initiatives by actively working with subordinates of all levels to meet our goal of increased outreach and brand awareness within the community. In addition to this, I conducted back-end work with the online journal system as well as the typesetting and publishing softwares.",
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
          company: "M.Sc. Thesis",
          company_url:
            "https://anishrverma.github.io/assets/Anish-Verma_Thesis.pdf",
          logo_path: "UoG.png",
          duration: "May 2019 - April 2021",
          location: "Guelph, ON",
          description:
            "I researched quasiparticle excitations in nuclear matter by extending finite Fermi liquid theory to the thermodynamic limit for strongly interacting neutrons. I performed highly precise and accurate Quantum Monte Carlo simulations on cluster supercomputers, housed by Compute Canada. I was awarded the Natural Sciences and Engineering Research Council of Canada Canada Graduate Scholarship - Master’s (NSERC CGS-M), a Mitacs Accelerate Fellowship, the Queen Elizabeth II in Science and Technology.",
          color: "#ee3c26",
        },
        {
          title:
            "Collective and Single-Particle Degrees of Freedom in Rotating Nuclei",
          company: "B.Sc. Honours Publication",
          company_url: "https://anishrverma.github.io/assets/SFU_Delta.pdf",
          logo_path: "SFU.png",
          duration: "May 2016 - August 2017",
          location: "Vancouver, BC",
          description:
            "I mathematically modeled pair-breaking in quadrupole deformed nuclei and predicted its effects on observables by treating both single-particle and collective degrees of freedom. The model reduced the computational time required to diagonalize the large matrices usually involved in nuclear structure calculations by significant reduction of the phase space. I was funded by Natural Sciences and Engineering Research Council (NSERC) and the Canadian Institute of Nuclear Physics (CINP), resulting in publication and several conference presentations; I was awarded 2nd place presentation award in the division of nuclear physics at a national conference (CAP Congress 2017).",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Teaching Work",
      experiences: [
        {
          title: "Graduate Teaching Assistant",
          company: "Department of Physics - University of Guelph",
          company_url: "https://www.physics.uoguelph.ca/",
          logo_path: "UoG.png",
          duration: "September 2019 - December 2019",
          location: "Guelph, ON",
          description:
            "As part of a team of graduate teaching assistants, I assisted in the marking of weekly quizzes and the facilitation of laboratory experiments for 1000 students in various physics courses. The content covered included mechanics, dynamics, electromagnetism, fluid mechanics, biophysics, and modern physics.",
          color: "#ee3c26",
        },
        {
          title: "Undergraduate Teaching Assistant",
          company: "Department of Physics - Simon Fraser University",
          company_url: "https://www.sfu.ca/physics.html",
          logo_path: "SFU.png",
          duration: "September 2017 - December 2017",
          location: "Vancouver, ON",
          description:
            "I planned, modified, and taught a variety of laboratory experiments for a freshman physics laboratory course, working directly alongside the professor. This was a new iteration of the program, so we had to create innovative material to go with the new curriculum content. The experiments involved circuits, data analysis, optics, electricity and magnetism, and materials science.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Publications",
  description:
    "Here you can download and read my research manuscripts and publications in Nuclear Physics, Finance, Data Science, and more.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  publications: [
    {
      title:
        "A sentiment analysis of the Black Lives Matter movement using Twitter",
      subtitle: "J. Peng, J.S. Fung, M. Murtaza, A. Rahman, P. Walia, D. Obande, A. Verma",
      duration: "September 2022. STEM Fellowship Journal",
      descriptions: [
        "As more attention is brought to the issue of racial injustice, public sentiments and opinions on racial issues are increasingly important to track. At the same time, recent progress in machine learning and natural language processing methods, coupled with the growing amount of available data for training and analysis, allows researchers to extract sentiments from text data at large scales. We applied a natural language processing framework to study public sentiment surrounding the Black Lives Matter (BLM) movement. Specifically, we used a state-of-the-art BERT model fine-tuned for Twitter sentiment classification to predict the sentiment from approximately 1 million tweets from July 2013 to March 2021 related to BLM. The BERT model was trained on the Sentiment 140 dataset on which it obtained an AUC of 0.97 on the training data and 0.94 on testing data, outperforming other machine learning models. We found that retweet frequency and word count frequency were able to illustrate important themes in the BLM movement as well as indicate events of significant importance to the movement. Additionally, sentiment analysis revealed which of these themes and events were associated with positive public sentiment, such as social justice, and which were associated with negative sentiment, such as police brutality. Our analyses can also be applied to better understand other social and political movements to aid related research and activism.",
      ],
      website_link:
        "https://anishrverma.github.io/assets/BLM.pdf",
    },
    {
      title:
        "An Analysis of the COVID-19 Infodemic: The Impact of American Public Sources on Sentiment, Conversation, and Physician Behaviour Towards Hydroxychloroquine",
      subtitle: "E.W.L. Chan, G. Choi, K.S.K. Wong, S. Zeng, A. Verma",
      duration: "August 2021. STEM Fellowship Journal",
      descriptions: [
        "The COVID-19 infodemic, described as an overabundance of both accurate and inaccurate information, poses a significant public health risk in spreading fear and provoking inappropriate prescription. The overwhelming and often contradictory information on as potential treatments for COVID-19 have contributed to this infodemic. Public sources including the US federal government, health organizations, and research publications have released conflicting statements on the efficacy of hydroxychloroquine. Previous research has not analyzed the influence of these sources on public attitudes and conversation towards the drug. To evaluate this impact, changes in the number and sentiment of tweets tagged with the hashtag or keyword “hydroxychloroquine” from March 12th to June 22nd, 2020 in relation to public sources were analyzed. We found that the US government had a statistically significant influence on public attitudes and behaviour (p < 0.001), unlike health organizations and research publications. Public sentiment on hydroxychloroquine has also been observed to become more negative over time, suggesting that public attitudes towards controversial topics can change. This study also found a positive correlation between public sentiment of hydroxychloroquine and other drugs (i.e. azithromycin and remdesivir) which indicates that public sources disseminating hydroxychloroquine-related information could also affect public attitudes towards related treatments. In a public health crisis, all statements and actions from public sources regarding contentious topics like hydroxychloroquine should be made with caution. To mitigate the disproportionate influence of public sources in an infodemic, we recommend three solutions: (a) education to empower individuals of all ages to develop critical thinking and digital literacy skills; (b) stronger action from social media platforms in labeling misinformation; (c) and cooperation between entities with strong influence (e.g. federal government) and other sources for public health measures. Together, these recommendations could resolve shortcomings existent with a single approach. Future research should be conducted with a custom trained model for sentiment analysis. It would also be valuable to conduct a similar version of the study on other social media platforms as well as for public health issues beyond COVID-19.",
      ],
      website_link:
        "https://anishrverma.github.io/assets/SF_COVID_Sentiment.pdf",
    },
    {
      title:
        "A Comparison of Text Sentiment and Market Sentiment US Treasury 10-Year Note Futures and Changes to Cash in Circulation using Sentiment Analysis and the CME Market Sentiment Meter",
      subtitle: "P. Hong, A. Verma",
      duration: "May 2021. 1QB Information Technologies Inc.",
      descriptions: [
        "The CME Market Sentiment Meter (MSM) calculates market sentiment states based on a novel mixture distribution, taking input from options and futures settlement data. We compare market sentiment from financial data to text sentiment from sentiment analysis as an indicator for market trends due to external events. Both types of sentiment were explored in a case study of the year 2020 about the US Treasury 10-Year Note futures (TYF). The year brought large fluctuations in the US economy due to the COVID-19 pandemic and other major events. The standard deviation of MSM mixture distribution has shifted earlier than the polarity score found through sentiment analysis. The movement in the MSM mixture distribution standard deviation preceded a price movement in the most active settlement price of the TYF.",
      ],
      website_link: "https://anishrverma.github.io/assets/1QBit_NLP.pdf",
    },
    {
      title:
        "CME Market Sentiment Meter Historical Market Analyses - Natural Gas: 2014 North American Cold Wave",
      subtitle: "A. He, A. Verma",
      duration: "January 2021. 1QB Information Technologies Inc.",
      descriptions: [
        "From late 2013 through early 2014 there were severe cold fronts across North America, during which time natural gas futures (NG1) prices spiked, peaking in February of 2014. The Market Sentiment Meter (MSM) indicated Complacent and Balanced states before the cold period. As the cold wave became more severe, the MSM indicated Anxious states, which preceded an upward movement in settlement price. During and following the price spike, the MSM indicated Balanced states. This was indicative of options traders not expecting the gas shortage would persist beyond March, in line with previous years’ supply and demand cycles.",
      ],
      website_link: "https://anishrverma.github.io/assets/1QBit_NG.pdf",
    },
    {
      title:
        "Trading Algorithm Navigation Using a Mixture Distribution Risk Model",
      subtitle: "A. Milne, A. Verma, P. Goddard, C. Adolphs",
      duration: "October 2020. 1QB Information Technologies Inc.",
      descriptions: [
        "The CME Market Sentiment Meter (MSM) provides a daily risk–return estimate based on end-of-day settlement data from previous days. We show how MSM can be used to ‘‘navigate’’ a reversion-to-mean (RTM) algorithm across changing market states, and, in doing so, increase its profitability (from 60% to 135% annualized ROI in our example). We then describe a procedure by which other trading algorithms can be similarly improved.",
      ],
      website_link: "https://anishrverma.github.io/assets/1QBit_ATS.pdf",
    },
    {
      title:
        "CME Market Sentiment Meter Historical Market Analyses - 2019 Federal Funds Rate Cuts",
      subtitle: "A. Verma",
      duration: "August 2020. 1QB Information Technologies Inc.",
      descriptions: [
        "Periods of Anxious market states for Gold futures (GC1 ) tended to be either short-lived or long-lived in the eight year period ending in December 2019. In the year 2018, the U.S. saw economic growth and the Federal Reserve hiked rates four times through the year. This year was dominated primarily by Balanced market states. GC consistently fell once the rate hikes were announced. The year 2019 saw slowed economic growth and increased tensions with China, Iran, and Russia. This led to a large rise in GC from July to November. GC remained at a high relative to the beginning of the year. In 2019, the Federal Reserve made 3 rate cuts. During this time, the Market Sentiment Meter (MSM) indicated an extended period of Anxious market states from July to November.",
      ],
      website_link: "https://anishrverma.github.io/assets/1QBit_GC.pdf",
    },
    {
      title:
        "Market Reactions to COVID-19 - A review of Q1 2020 as seen in the CME Market Sentiment Meter",
      subtitle: "A. Verma, A. Milne",
      duration: "May 2020. 1QB Information Technologies Inc.",
      descriptions: [
        "The COVID-19 pandemic had a notable effect on the eight futures and options products tracked by 1QBit’s CME Market Sentiment Meter. In some markets, such as U.S. equity index futures and U.S. interest rate futures, there were rapid increases in daily futures volumes as prices changed, and traders managed their evolving risk. The peaks in daily volume were followed by diminishments that varied from market to market, as well as changes in the volumes and positions observed in the corresponding options markets. The CME Market Sentiment Meter reported transitions from the Balanced state to the Anxious state in all products except soybeans and natural gas. The Anxious state is associated with an expectation of larger price movements, which were observed in the markets. In addition, it was seen that forward-looking activity moved from futures to options at a different rate for each product, and that market sentimentstook time to become established.",
      ],
      website_link: "https://anishrverma.github.io/assets/1QBit_COVID.pdf",
    },
    {
      title:
        "CME Market Sentiment Meter Historical Market Analyses - September 14, 2019 Abqaiq-Khurais Attack",
      subtitle: "A. Verma, A. Milne",
      duration: "April 2020. 1QB Information Technologies Inc.",
      descriptions: [
        "In the year 2019, daily settlement prices (most active expiry) for WTI Crude Oil futures (CL) rose as tensions with China and Iran grew from January to April. During this period, the Market Sentiment Meter (MSM) indicated Balanced market states. Following a period of Conflicted market states in May, CL fell from 63.21 USD/bbl to 51.14 USD/bbl. The market state became Anxious and CL began to rise. In August, the prospect of trade talks diminished and the market state was Balanced. The MSM indicated that the market state remained Balanced for the rest of the 2019. On September 14th 2019, there was a drone attack on the Saudi Aramco facilities located in Abqaiq and Khurais, Saudi Arabia. There was a rise in CL from 54.85 USD/bbl to 62.9 USD/bbl. The market state was Balanced prior to the attack. The risk-return curve became skewed immediately after the attack. However, the market state remained Balanced. This rise in price was short lived and fell the following day, period of Balanced market states.",
      ],
      website_link: "https://anishrverma.github.io/assets/1QBit_CL.pdf",
    },
    {
      title:
        "Collective and Single-Particle Degrees of Freedom in Rotating Nuclei",
      subtitle: "A. Verma, K. Starosta",
      duration: "Aug. 2017. Canadian Journal of Chemistry.",
      descriptions: [
        "In 1937, Hermann Jahn and Edward Teller published their research describing a mechanism of symmetry breaking in nonlinear polyatomic molecules resulting in a lifting of orbital degeneracy of an electronic state, yielding insight into molecular structure. The impact of symmetry breaking on the energy and structure of quantum states is not unique to molecules and may be applied to nuclei, involving degenerate nucleon states as opposed to electronic states. Reinhard and Otten showed that the nuclear Jahn–Teller effect provides a mechanism applicable to describe the commonly observed collective quadrupole surface motion. To take into account single-particle effects, it is important to properly model the valence nucleons, especially those occupying large angular momenta orbitals near the Fermi level. In this work, a model has been developed in which two valence nucleons of the same kind are coupled to an axially symmetric quadrupole deformed rotor of the D2 symmetry and interact through the nuclear delta force. To test this model, the band of the lowest-energy state at a given spin for 126Ce is reproduced. The resultant wavefunctions are then used to calculate the g factor, reduced electric quadrupole transition probability, and spectroscopic quadrupole moment all as a function of spin. This method lays the groundwork to explore higher order symmetries following the multipole expansion.",
      ],
      website_link: "https://anishrverma.github.io/assets/SFU_Delta.pdf",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "AnishVerma.png",
    description:
      "I'm always happy to connect and discuss any of my work, or topics of interest. I look forward to connecting with you!",
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
