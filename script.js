document.addEventListener("DOMContentLoaded", () => {
  const data = PORTFOLIO_DATA;

  const ICONS = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
    fileText: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`,
    blog: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    pdf: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`,
    paper: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>`,
  };

  const getIcon = (faName, label = "") => {
    const text = (faName + " " + label).toLowerCase();
    if (text.includes("github")) return ICONS.github;
    if (text.includes("pdf") || text.includes("paper") || text.includes("file")) return ICONS.paper;
    if (text.includes("linkedin")) return ICONS.linkedin;
    if (text.includes("blog")) return ICONS.blog;
    if (text.includes("resume") || text.includes("cv") || text.includes("pdf")) return ICONS.pdf;
    if (text.includes("paper") || text.includes("report") || text.includes("file")) return ICONS.paper;
    return ICONS.external;
  };
  
  document.getElementById("user-name").textContent = data.profile.name;
  document.getElementById("user-tagline").textContent = data.profile.tagline;
  document.getElementById("user-about").textContent = data.profile.about;
  
  const linksContainer = document.getElementById("user-links");
  if (linksContainer && data.profile.links) {
    linksContainer.innerHTML = data.profile.links.map(link => `
      <a href="${link.url}" target="_blank" rel="noopener" class="icon-link">
        ${getIcon("", link.label)}<span>${link.label}</span>
      </a>
    `).join("");
  }

  const skillsContainer = document.getElementById("skills-list");
  if (skillsContainer && data.skills) {
    skillsContainer.innerHTML = data.skills.map(skill => `
      <div class="card">
        <h3>${skill.category}</h3>
        <div class="tags" style="margin-top: 12px;">
          ${skill.items.map(item => `<span class="tag">${item}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }
  
  const expContainer = document.getElementById("experience-list");
  if (expContainer && data.experiences) {
    expContainer.innerHTML = data.experiences.map(exp => `
      <div class="job-item">
        <div class="job-header">
          <h3>${exp.title}</h3>
          <span class="date">${exp.date}</span>
        </div>
        ${exp.tasks && exp.tasks.length ? `
          <ul>
            ${exp.tasks.map(task => `<li>${task}</li>`).join("")}
          </ul>
        ` : ''}
        ${exp.skills && exp.skills.length ? `
          <div class="tags">
            ${exp.skills.map(s => `<span class="tag">${s}</span>`).join("")}
          </div>
        ` : ''}
      </div>
    `).join("");
  }
  
  const projContainer = document.getElementById("projects-list");
  if (projContainer && data.projects) {
    const allProjects = [
      ...(data.projects.c_proj || []),
      ...(data.projects.web_proj || [])
    ];

    projContainer.innerHTML = allProjects.map(proj => `
      <div class="card">
        <h3>${proj.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 8px;">${proj.desc}</p>
        
        ${proj.tools && proj.tools.length ? `
          <div class="tags" style="margin-top: 15px;">
            ${proj.tools.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        ` : ''}

        <div class="links-container" style="margin-top: 15px;">
          ${proj.github && proj.github.link ? `<a href="${proj.github.link}" target="_blank" rel="noopener" class="icon-link">${getIcon("github", "")}<span>GitHub</span></a>` : ''}
          ${proj.paper && proj.paper.link ? `<a href="${proj.paper.link}" target="_blank" rel="noopener" class="icon-link">${getIcon("report", "")}<span>Report</span></a>` : ''}
        </div>
      </div>
    `).join("");
  }

  const eduContainer = document.getElementById("education-list");
  if (eduContainer && data.education) {
    eduContainer.innerHTML = data.education.map(edu => `
      <div class="edu-item">
        <div class="job-header">
          <h3>${edu.program} <span style="color: var(--accent)">@ ${edu.university}</span></h3>
          <span class="date">${edu.date}</span>
        </div>
      </div>
    `).join("");
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
