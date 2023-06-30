Iniciar Cypress
./node_modules/.bin/cypress open

Corre todos los test suite en modo headless sin abrir el navegador y graba video de la ejecuccionc
./node_modules/.bin/cypress run

Corre los test suite usando el browser Electron pero esta vez si muestra la pantalla
./node_modules/.bin/cypress open --headed

Selecciona el buscador con el cual correr el testsuite
./node_modules/.bin/cypress run --browser chrome

Corre un especifico test case
./node_modules/.bin/cypress run cypress\e2e\webdriver-uni\contact-us.js

Corre todos los test case dentro de la carpeta
./node_modules/.bin/cypress run cypress\e2e\webdriver-uni\*