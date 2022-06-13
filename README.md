# Prueba Xaldigital - Aplicacion web 
@Alejandro Gomez Barreto
## Tecnologias Utilizadas
- Aplicacion
  - Java JDK 8
  - Spring Boot 2.5.2
  - Thymeleaft
- IDE
  - Eclipse
- Herramientas web
  - HTML
  - Javascript
  - JQuery/Ajax
  - CSS
  - Nicepage
## Experiencia
La realización de esta prueba fue un reto para mi debido que no tenia los conocimientos suficientes para el manejo de dockers, asi como de la API de swagger para la generacion de los contratos de interfaz. Durante la investigación se observo varias formas de implementar dichas herramientas pero por cuestión de tiempo no se pudo probar dichos métodos por lo cual se implemento el método mas sencillo en su aplicación.
## Retos
Uno de los retos presentados fue la generacion de la plantilla, por la experiencia te cuento en la parte de diseño se empleo una herramienta Nicepage, el cual nos permite generar platillas de manera dinamica y exportarlo a HTML, el cual ya se le dio funcionamiento y la comunicacion necesaria para consumir el servicio web
## Intalación
### Configuración
Antes de deployarlo en su servidor, se modificara del archivo de application.properties el atributo "servicio", por la ruta donde se encuentra alojada el servicio web por defafult tiene el siguiente parametro: http://localhost:8081/wsxaldigital.
Nota: Se sugiere que se deploye primero el servicio web.
### Ejecución
Para poder visualizar la aplicacion web debera de ingresar en la siguiente ruta: http://localhost:8080/webxaldigital/. Nota: recuerde que puede cambiar la ruta de la pagina dependiento donde lo deploye, para este ejemplo se uso la ruta de localhost:8080


