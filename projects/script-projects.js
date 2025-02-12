document.addEventListener("DOMContentLoaded", () => {
    const projetos = [
        { 
            img: "./images/ANGOLA-FLAG.png", 
            github: "https://github.com/seu-usuario/projeto1", 
            youtube: "https://youtu.be/seu-video1", 
            tecnologias: "Java + Selenium + Jenkins", 
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
            github: "https://github.com/seu-usuario/projeto3", 
            youtube: "https://youtu.be/seu-video3", 
            tecnologias: "", 
            tipo: "Test Automation" 
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
            tipo: "Test Automation" 
        },
        { 
            img: "./images/ANGOLA-FLAG.png", 
            github: "https://github.com/seu-usuario/projeto7", 
            youtube: "https://youtu.be/seu-video7", 
            tecnologias: "", 
            tipo: "Test Automation" 
        },
        { 
            img: "./images/ANGOLA-FLAG.png", 
            github: "https://github.com/seu-usuario/projeto8", 
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
