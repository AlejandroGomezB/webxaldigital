FROM openjdk:8-jdk-alpine
MAINTAINER goba011291@gmail.com
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} WebXaldigital-0.0.1.jar
ENTRYPOINT ["java","-jar","/WebXaldigital-0.0.1.jar"]