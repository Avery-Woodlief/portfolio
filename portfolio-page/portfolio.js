
function getLanguageIcon(language) {

    switch (language) {

        case "Python":
            //return `<i class="fa-brands fa-python"></i>`;
            return `<img class="language-icon" src="../icons/python.svg" alt="Python">`;

        case "JavaScript":
            return `<i class="fa-brands fa-js"></i>`;

        case "HTML":
            return `<i class="fa-brands fa-html5"></i>`;

        case "CSS":
            return `<i class="fa-brands fa-css3-alt"></i>`;

        case "Java":
            return `<i class="fa-brands fa-java"></i>`;

        case "C++":
            return `<i class="fa-solid fa-code"></i>`;

        default:
            return `<i class="fa-regular fa-circle-question"></i>`;
    }
}
// end language icon function

async function loadCodepenProjects() {
  
  const res = await fetch("codepen_projects.json");
  const projects = await res.json();
  console.log(projects);
  const codepen_projects = document.getElementById("codepen-projects");
  //const codepen_projects = document.getElementById("page-content");
  projects.forEach(project => {
    
    const link = document.createElement("a");
    link.href = project.url
    link.target = "_blank";
    link.style.textDecoration = "none";
    link.style.color="black";
    link.className = "codepen-link";
    codepen_projects.appendChild(link);
    const title = project.title;
    const description = project.descr;
    const card = document.createElement("div");
    card.className = "codepen-project-card";
    card.innerHTML = `<div class="codepen-project-header">
                        <i class="fa-brands fa-codepen"></i>
                        <h2 style="margin-top:0px;">${title}</h2>
                        <i class="fa-solid fa-globe"></i>
                      </div>
                      <p style="margin-bottom:0px;color:#59636e;">${description}</p>`;
    link.appendChild(card);
    codepen_projects.appendChild(link);
  });
}

async function loadMathPapers(){
  
  const res = await fetch("math_papers.json");
  const papers = await res.json();
  console.log(papers);
  const mathPapers = document.getElementById("math-papers");
  //const mathPapers = document.getElementById("page-content");
  papers.forEach(paper => {
    
    const link = document.createElement("a")
    link.href = paper.file;
    link.target = "_blank";
    link.className = "paper-link";
    link.style.textDecoration = "none";
    link.style.color="black";
    mathPapers.appendChild(link);
    const title = paper.title;

    const card = document.createElement("div");
    card.className = "paper";
    card.innerHTML = `<i class="fa-regular fa-file-pdf"></i>
                      <div">${title}</div>`;
    link.appendChild(card);
    
  });
}

async function loadGitHubProjects(){
  const response = await fetch("https://portfolio-server-ox5m.onrender.com/repos");
  const repos = await response.json();
  console.log(repos);
  const projects = document.getElementById("github-projects");
  repos.forEach(async repo => {
    const icons = getLanguageIcon(repo.language);
    const link = document.createElement("a");
    link.href = repo.html_url;
    link.target = "_blank";
    link.className = "github-project-link";
    link.style.textDecoration = "none";
    link.style.color="black";
    projects.appendChild(link);
    const card = document.createElement("div");
    card.className = "github-project-card";
    card.innerHTML = `

            <div class="github-project-header">
                <i class="fa-brands fa-github"></i>
                <h2 style="margin-top:0px;">${repo.name}</h2>
                <div class="language-icons">
                    ${icons}
                </div>
            </div>
            <p style="margin-bottom:0px;color: #59636e;">${repo.description ?? "No description"}</p>
        `;
    link.appendChild(card);
    projects.appendChild(link);
  });
  
}
loadCodepenProjects();
loadGitHubProjects();
loadMathPapers();




