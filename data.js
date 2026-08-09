const PORTFOLIO_DATA = {
  profile: {
    name: "Ju Hong Kim",
    tagline: "Computer Enthusiast & Systems Developer",
    about: "Hello World! My background is in Computer Science and Mathematics. I am particularly interested in reading and learning about Systems Programming, Operating Systems, embedded programming, and working on projects to improve my low-level engineering skills.",
    links: [
      { label: "Blog", url: "https://randombits.ca" },
      { label: "LinkedIn", url: "https://linkedin.com/in/ju-hong-kim-zaku" },
      { label: "GitHub", url: "https://github.com/zakuArbor" },
      { label: "Resume", url: "resume.pdf" }
    ]
  },
  skills: [
    { 
      category: "Programming Languages", 
      items: ["C", "C++", "Java", "Python", "Kotlin"] 
    },
    { 
      category: "Scripting Languages", 
      items: ["Perl", "Bash", "Ruby"] 
    },
    { 
      category: "Web Languages & Tech", 
      items: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "MongoDB", "Node.js", "React"] 
    },
    { 
      category: "Version Control & Systems Tools", 
      items: ["Git", /*"GitLab", "Clearcase",*/ "Linux", "QNX", "GDB", "Valgrind", "Perf", "Flamegraphs", /*"Protobuf", "Avro", "Fluent Bit", "Kafka"*/] 
    }
  ],
  education: [
    {
      university: "Carleton University",
      program: "Mathematics",
      date: "September 2021 - Present"
    },
    {
      university: "University of Toronto Mississauga",
      program: "Computer Science",
      date: "September 2015 - June 2020"
    }
  ],
  experiences: [
    {
      title: "GPU Validation Intern @ AMD",
      date: "May 2025 - August 2026 (16 months)",
      tasks: [],
      skills: ["Linux", "C++", "GPU"]
    },
    {
      title: "Software Developer Intern @ Ericsson",
      date: "May 2024 - April 2025 (12 months)",
      tasks: [
        "Developed an interactive dashboard to visualize resource consumption on software running on Linux-based radios, enabling the analysis of code changes on internal radio startup times, CPU, and memory consumption",
        "Integrated an internal analytics framework to automate test failure tracking, correlating failures with known errors and enhancing visibility through Kibana dashboards"
      ],
      skills: ["Linux", "C", "Java", "Bash", "Python"]
    },
    {
      title: "Teaching Assistant @ CarletonU",
      date: "September 2023 - Dec 2024 (12 months i.e. 3 semesters)",
      tasks: [
        "MATH1004 - Calculus for Engineering or Physics: Fall 2023, Fall 2024",
        "MATH1104 - Linear Algebra for Engineering or Science: Winter 2024"
      ],
      skills: []
    },
    {
      title: "Systems Software Developer Intern @ Blackberry",
      date: "May 2023 - August 2023 (4 months)",
      tasks: [
        "Developed a Protobuf plugin for Fluent Bit in C, optimizing data serialization and achieving a 50% reduction in data size, while also decreasing transmission time per message",
        "Optimized performance of the Protobuf plugin by leveraging Callgrind, perf, and flamegraphs for performance analysis, significantly improving execution efficiency",
        "Simplified Gitlab Pipeline configurations to increase readability and maintainability"
      ],
      skills: ["C", "Bash", "Gitlab", "Protobuf", "Avro", "Fluent Bit", "Kafka", "Ruby"]
    },
    {
      title: "Teaching Assistant @ CarletonU",
      date: "September 2022 - April 2023 (8 months)",
      tasks: [
        "MATH1004 - Calculus for Engineering or Physics: Fall 2022",
        "MATH1104 - Linear Algebra for Engineering or Science: Winter 2023",
        "MATH1152 - Introductory Algebra I: Fall 2022",
        "MATH2107 - Linear Algebra Learning Assistant (MSLap): Fall 2022 - Winter 2023"
      ],
      skills: []
    },
    {
      title: "Software Support Developer Intern @ Blackberry QNX",
      date: "January 2021 - April 2021 (4 months)",
      tasks: [
        "Delivered QNX and POSIX C debugging and design support to clients, helping resolve development blockers",
        "Assisted with compilation, API/utility usage, networking, and debugging for QNX and POSIX C environments",
        "Used GDB and Valgrind to debug memory and execution issues and leveraged Wireshark and tcpdump for network analysis"
      ],
      skills: ["QNX", "C", "GDB", "Momentics IDE"]
    },
    {
      title: "Build DevOps Intern @ IBM",
      date: "July 2020 - August 2021 (13 months)",
      tasks: [
        "Improved developer efficiency by creating Perl & Python-based build automation tools, optimizing the development pipeline",
        "Assisted in transitioning legacy build infrastructure to a secured zone by identifying and resolving Perl & C dependencies and adapting scripts to align with new constraints",
        "Mentored 4 junior developers and interns, improving team efficiency and knowledge retention"
      ],
      skills: ["Node.js", "Perl", "Python", "C", "Git", "Clearcase", "Jenkins"]
    },
    {
      title: "Db2 Build Infrastructure Intern @ IBM",
      date: "May 2018 - August 2019 (16 months)",
      tasks: [
        "Managed builds across UNIX/Linux platforms running on 32/64-bit CPU architectures (x86, Itanium, PowerPC, SPARC), isolating breakages across complex multi-commit build histories",
        "Enhanced build infrastructure and Perl-based automation tools to provide developers with stable, up-to-date code",
        "Led server migration efforts, coordinating the setup and validation of all Perl and PHP programs to ensure smooth transition with minimal downtime and improved deployment reliability"
      ],
      skills: ["Perl", "C", "PHP", "Clearcase", "Jenkins", "Buildforge"]
    },
    {
      title: "IT Intern @ Ericsson",
      date: "February 2015 - June 2015 (5 months)",
      tasks: [
        "Assisted in configuration and planned migration of a server",
        "Maintained and debugged servers and programs to ensure services are available"
      ],
      skills: ["Apache", "Windows Server", "HTML", "PHP", "Python"]
    }
  ],
  projects: {
    c_proj: [
      {
        title: "ProxyAuth (A security Capstone Project)",
        desc: "A continuous authentication that aims to replace password login on your desktop by using your smartphone as an authentication device via Bluetooth. Since ProxyAuth uses continuous authentication scheme, you do not need to worry about leaving your computer unlocked. The computer will lock if it cannot detect the device within its vicinity.",
        tools: ["C", "PAM", "Bluetooth Programming", "D-Bus", "Kotlin Android Programming"],
        github: {
          icon_name: "fa fa-github",
          link: "https://github.com/zakuArbor/proxyAuth/"
        },
        paper: {
          icon_name: "fa fa-file-pdf-o",
          link: "https://github.com/zakuArbor/proxyAuth/blob/master/kim_proxyauth_paper.pdf"
        }
      },
      {
        title: "16-bit Assembler Implementation",
        desc: "A two-pass C assembler for a 16-bit ISA, resolving forward references via a symbol table",
        tools: ["C", "Assembly"],
        github: {
          icon_name: "fa fa-github",
          link: "https://codeberg.org/zakuArbor/hackAssembler/"
        },
        paper: {
          icon_name: "",
          link: ""
        }
      },
      /*
      {
        title: "A Network text-based Tic Tac Toe",
        desc: "A tic tac toe game implemented in C that utilizes sockets to allow play over the network. A good refresher on sockets.",
        tools: ["C", "sockets"],
        github: {
          icon_name: "fa fa-github",
          link: "https://github.com/zakuArbor/ticTacToeC/"
        },
        paper: {
          icon_name: "",
          link: ""
        }
      }*/
    ],
    web_proj: [
      /*
      {
        title: "PAR: Progress and Report Card Generator",
        desc: "A web based application designed for teachers to create progress report cards. A semester long High School project that aimed to replace the current program used by the school. (Unfortunately the administration did not adopt our product)",
        tools: ["PHP", "SQL", "HTML", "CSS", "Javascript"],
        github: {
          icon_name: "fa fa-github",
          link: "https://github.com/zakuArbor/PAR"
        },
        paper: {
          icon_name: "fa fa-file-pdf-o",
          link: "https://github.com/zakuArbor/PAR/blob/master/final_summative_report.pdf"
        }
      },
      {
        title: "Portfolio",
        desc: "This very website you are looking at is made using React. Displays some of my projects, skills and knowledge",
        tools: ["React", "HTML", "CSS", "Javascript"],
        github: {
          icon_name: "fa fa-github",
          link: "https://github.com/zakuArbor/portfolio/"
        },
        paper: {
          icon_name: "",
          link: ""
        }
      },
      {
        title: "FreeCodeCamp Projects",
        desc: "A repository for most of the projects I worked on from the FreeCodeCamp Curriculum which includes a Random Quote Generator, Calculator, Pomodoro Clock, Tic Tac Toe and Simon Game",
        tools: ["HTML", "CSS", "Javascript", "AJAX"],
        github: {
          icon_name: "fa fa-github",
          link: "https://github.com/zakuArbor/FreeCodeCampAssignments/"
        },
        paper: {
          icon_name: "",
          link: ""
        }
      },
      {
        title: "votingApp-fcc",
        desc: "Create and vote on Polls. My first MEAN application",
        tools: ["Node.js", "MongoDB", "HTML", "CSS", "Javascript", "AJAX"],
        github: {
          icon_name: "fa fa-github",
          link: "https://github.com/zakuArbor/votingApp-fcc"
        },
        paper: {
          icon_name: "",
          link: ""
        }
      }*/
    ]
  }
};
