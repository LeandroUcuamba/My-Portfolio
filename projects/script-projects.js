document.addEventListener("DOMContentLoaded", () => {
    const projetos = [
        { 
            img: "./images/technologies/cypress.png", 
            github: "https://github.com/LeandroUcuamba/API_TESTING_WITH_CYPRESS",
            tecnologias: "javaScript + Cypress -> (API Testing)", 
            tipo: "Test Automation" 
        },
        { 
            img: "./images/technologies/cypress.png", 
            github: "https://github.com/LeandroUcuamba/CYPRESS-AND-GITHUB-ACTIONS-CI",
            tecnologias: "javaScript + Cypress + Github Actions CI -> (Web Testing)", 
            tipo: "Test Automation" 
        },
        { 
            img: "./images/technologies/cypress.png", 
            github: "https://github.com/LeandroUcuamba/CYPRESS-CUCUMBER-BDD", 
            tecnologias: "javaScript + Cypress + Cucumber + BDD -> (Web Testing)", 
            tipo: "Test Automation" 
        },
        { 
            img: "./images/technologies/playwright.png", 
            github: "https://github.com/LeandroUcuamba/Playwright_login_tests", 
            tecnologias: "typeScript + Playwright -> (Web Testing)", 
            tipo: "Test Automation"
        },
        { 
            img: "./images/technologies/selenium.png", 
            github: "https://github.com/LeandroUcuamba/praticando-sobre-selenium-e-Rest-Assured/tree/main/TesteOne",
            youtube: "https://www.youtube.com/watch?v=oKfw11-SXFE",
            tecnologias: "java + Selenium -> (Web Testing)", 
            tipo: "Test Automation" 
        },
        { 
            img: "./images/technologies/rest-assured.png", 
            github: "https://github.com/LeandroUcuamba/praticando-sobre-selenium-e-Rest-Assured/tree/main/RestAssuredProject", 
            youtube: "https://www.youtube.com/watch?v=SJpg6dyQouo",
            tecnologias: "java + Rest Assured -> (API Testing)",  
            tipo: "Test Automation" 
        },
        { 
            img: "./images/technologies/Katalon.png", 
            github: "https://github.com/LeandroUcuamba/Minhas-Praticas-de-Testes-com-katalon",
            youtube: "https://www.youtube.com/watch?v=J8cEqvK-aws", 
            tecnologias: "java + Groovy + Katalon -> ( We have 3 tests in this Github repository - Web Testing)", 
            tipo: "Test Automation" 
        },
        { 
            img: "./images/ANGOLA-FLAG.png", 
            github: "https://github.com/seu-usuario/projeto2", 
            tecnologias: "", 
            tipo: "Software Development" 
        },
        { 
            img: "./images/ANGOLA-FLAG.png", 
            github: "https://github.com/seu-usuario/projeto4", 
            tecnologias: "", 
            tipo: "Software Development" 
        },
        { 
            img: "./images/ANGOLA-FLAG.png", 
            github: "https://github.com/seu-usuario/projeto5", 
            youtube: "https://youtu.be/seu-video5", 
            tecnologias: "", 
            tipo: "Software Development" 
        },
        { 
            img: "./images/ANGOLA-FLAG.png", 
            github: "https://github.com/seu-usuario/projeto6", 
            tecnologias: "", 
            tipo: "Software Development"
        }
    ];

    const container = document.getElementById("projetos-container");

    const showProjects = (type) => {
        container.innerHTML = '';
        projetos.forEach(projeto => {
            if (type === 'all' || projeto.tipo === type) {
                const card = document.createElement("div");
                card.classList.add("card");

                if (!projeto.youtube) {
                    card.classList.add("no-youtube");
                }

                let buttonsHTML = `
                    <a href="${projeto.github}" target="_blank" class="github">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                `;

                if (projeto.youtube) {
                    buttonsHTML += `
                        <a href="${projeto.youtube}" target="_blank" class="youtube">
                            <i class="fab fa-youtube"></i> YouTube
                        </a>
                    `;
                }

                card.innerHTML = `
                    <img src="${projeto.img}" alt="Projeto">
                    <p><strong>Technologies Used:</strong> ${projeto.tecnologias}</p>
                    <div class="card-buttons">
                        ${buttonsHTML}
                    </div>
                `;

                container.appendChild(card);
            }
        });
    };

    showProjects('all');

    document.getElementById("show-test-automation").addEventListener("click", () => {
        showProjects('Test Automation');
    });

    document.getElementById("show-software-development").addEventListener("click", () => {
        showProjects('Software Development');
    });
});
