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
            youtube: "https://www.youtube.com/watch?v=8VTA-ZSAlQI",
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
            img: "./images/technologies/cypress.png", 
            github: "https://github.com/LeandroUcuamba/praticando_gitlab_CI_com_cypress",
            youtube: "https://www.youtube.com/watch?v=c0wad1ba6YU&pp=ygUPTGVhbmRybyBVY3VhbWJh", 
            tecnologias: "javaScript + Cypress + Gitlab CI -> (Web Testing)", 
            tipo: "Test Automation" 
        },
        { 
            img: "./images/technologies/cypress.png", 
            github: "https://github.com/LeandroUcuamba/Leandro_Automation_Cypress",
            youtube: "https://www.youtube.com/watch?v=c0wad1ba6YU&pp=ygUPTGVhbmRybyBVY3VhbWJh", 
            tecnologias: "javaScript + Cypress + Reports + Github Actions CI -> (Web Testing)", 
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
            github: "https://github.com/LeandroUcuamba/practicing-on-selenium-and-Rest-Assured/tree/main/TesteOne",
            youtube: "https://www.youtube.com/watch?v=oKfw11-SXFE",
            tecnologias: "java + Selenium -> (Web Testing)", 
            tipo: "Test Automation" 
        },
        { 
            img: "./images/technologies/rest-assured.png", 
            github: "https://github.com/LeandroUcuamba/practicing-on-selenium-and-Rest-Assured/tree/main/RestAssuredProject", 
            youtube: "https://www.youtube.com/watch?v=SJpg6dyQouo",
            tecnologias: "java + Rest Assured -> (API Testing)",  
            tipo: "Test Automation" 
        },
        { 
            img: "./images/technologies/k6.png", 
            github: "https://github.com/LeandroUcuamba/practicing_testing_with_k6", 
            tecnologias: "JavaScript + K6 -> (API Performance Testing)",  
            tipo: "Test Automation" 
        },
        { 
            img: "./images/technologies/katalon.png", 
            github: "https://github.com/LeandroUcuamba/My-Testing-Practices-with-katalon",
            youtube: "https://www.youtube.com/watch?v=J4IqB5syXoo", 
            tecnologias: "java + Groovy + Katalon + BDD -> ( We have 3 tests diferent tests in this Github repository)", 
            tipo: "Test Automation" 
        },
        { 
            img: "./images/technologies/react.jpg", 
            github: "https://github.com/LeandroUcuamba/MBINGULA_FRONTEND", 
            tecnologias: "javaScript + React.js -> (Frontend of Restaurant Management System)",
            tipo: "Software Development" 
        },
        { 
            img: "./images/technologies/nodejs.jpg", 
            github: "https://github.com/LeandroUcuamba/MBINGULA_BACKEND_API",  
            tecnologias: "TypeScript + Node.js + PostgreSQL -> (Backend of Restaurant Management System)", 
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/laravel.jpg", 
            github: "https://github.com/LeandroUcuamba/CreationApiWithLaravel_and_Mysql",  
            tecnologias: "PHP + Laravel + MySQL -> (Backend - API for a contact list)", 
            tipo: "Software Development" 
        },
        { 
            img: "./images/technologies/java_desktop.jpg", 
            github: "https://github.com/LeandroUcuamba/SalesSystem_With_JAVA",
            youtube: "https://www.youtube.com/watch?v=8jJ7jMBfntg&list=PL-vgmPl5Wfikh75kt9DF6btWGKtCVfq0F&index=4&pp=iAQB",  
            tecnologias: "Java + Swing + MySQL -> (Point of sales 'POS')",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/Flutter.png", 
            github: "https://github.com/LeandroUcuamba/flutter_travel_app_ui",
            tecnologias: "Dart + Flutter -> (Frontend - Angola Travel App)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/react.jpg", 
            github: "https://github.com/LeandroUcuamba/React-blog-app", 
            tecnologias: "javaScript + React.js + Fake JSON (API) -> (BLOG)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/java_web.png", 
            github: "https://github.com/LeandroUcuamba/Project_Agenda-CRUD",
            tecnologias: "Java + JSP + Servlet -> (Fullstack - API for a contact list)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/js.png", 
            github: "https://github.com/LeandroUcuamba/CRUD-Fetchi-API-Rest-2023",
            tecnologias: "JavaScript -> (Fullstack - CRUD with Fetch API)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/Angular1.png", 
            github: "https://github.com/LeandroUcuamba/BMI-Calculator_Angular",
            youtube: "https://www.youtube.com/watch?v=rmabe4vQ6Ak&list=PL-vgmPl5Wfikh75kt9DF6btWGKtCVfq0F&index=9&pp=iAQB",  
            tecnologias: "typeScript + Angular -> (BMI Calculator)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/React_Native.png", 
            github: "https://github.com/LeandroUcuamba/BMI-Calculator_React-Native",
            youtube: "https://www.youtube.com/watch?v=29hBsWdhtxo&list=PL-vgmPl5Wfikh75kt9DF6btWGKtCVfq0F&index=17&pp=iAQB",  
            tecnologias: "JavaScript + React Native -> (BMI Calculator)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/HTML_CSS_JS_php_mysql.png", 
            github: "https://github.com/LeandroUcuamba/CRUD-PHP_Student_List",
            tecnologias: "PHP + MySQL -> (Student list control)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/HTML_CSS_JS_php_mysql.png", 
            github: "https://github.com/LeandroUcuamba/CRUD_PHP_PDO_MVC_Materialize",
            tecnologias: "PHP + MySQL + MVC-> (Store Shoes Control)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/Flutter.png", 
            github: "https://github.com/LeandroUcuamba/AppMoeda_LeandroUcuamba_FlutterUI",
            tecnologias:  "Dart + Flutter -> (Frontend - Currency Converter App)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/Flutter.png", 
            github: "https://github.com/LeandroUcuamba/Calculator_with_flutter-UI",
            youtube: "https://www.youtube.com/watch?v=EcE0BlNlbTg&list=PL-vgmPl5Wfikh75kt9DF6btWGKtCVfq0F&index=12&pp=iAQB",  
            tecnologias: "Dart + Flutter -> (Calculator App)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/Angular1.png", 
            github: "https://github.com/LeandroUcuamba/Project_Angular13_FrontEnd",
            youtube: "https://www.youtube.com/watch?v=WzBU6KOo5_c&list=PL-vgmPl5Wfikh75kt9DF6btWGKtCVfq0F&index=7",  
            tecnologias: "typeScript + Angular -> (Frontend - Blog App)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/vuejs.png", 
            github: "https://github.com/LeandroUcuamba/Projeto_Make_Your_Burger",
            youtube: "https://www.youtube.com/watch?v=1olsAGkCDsM&list=PL-vgmPl5Wfikh75kt9DF6btWGKtCVfq0F&index=7&pp=iAQB",  
            tecnologias: "javaScript + VueJS + JSON API -> (Frontend - Fast Food Order Managment System)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/laravel.jpg", 
            github: "https://github.com/LeandroUcuamba/Event_Advertising_Project_with_LARAVEL",
            youtube: "https://www.youtube.com/watch?v=3vKgYEUM4d4&list=PL-vgmPl5Wfikh75kt9DF6btWGKtCVfq0F&index=8&pp=iAQB",  
            tecnologias: "PHP + Laravel + MySQL + Blade -> (Fullstack - Event Promotion Web System)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/laravel.jpg",
            github: "https://github.com/LeandroUcuamba/My_Project-LaravelApi_axios_and_vuejs3",
            youtube: "https://www.youtube.com/watch?v=Plcpm8hWP3k&list=PL-vgmPl5Wfikh75kt9DF6btWGKtCVfq0F&index=16&pp=iAQB",  
            tecnologias: "PHP + Laravel + MySQL + VueJS + MySQL -> (Fullstack - Products Control)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/java_desktop.jpg", 
            github: "https://github.com/LeandroUcuamba/projectoSD_Socket",
            tecnologias: "Java + Swing -> (Socket)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/nodejs.jpg", 
            github: "https://github.com/LeandroUcuamba/segunda_forma_API_com_NodeJs",
            tecnologias: "JavaScript + Node.JS + MySQL-> (Backend - ToDo List)",
            tipo: "Software Development"
        },
        { 
            img: "./images/technologies/nodejs.jpg", 
            github: "https://github.com/LeandroUcuamba/primeira_forma_API_com_NodeJs",
            tecnologias: "JavaScript + Node.JS + MySQL -> (Backend - API Cars Control)",
            tipo: "Software Development"
        },
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
