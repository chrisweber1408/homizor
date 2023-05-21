#Build stage

FROM gradle:latest AS BUILD
WORKDIR /usr/app/
COPY . .
RUN gradle build



FROM openjdk:latest
ENV JAR_NAME=homizor-backend-0.0.1-SNAPSHOT.jar
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY --from=BUILD $APP_HOME .
EXPOSE 8080
ENTRYPOINT exec java -jar $APP_HOME/build/libs/$JAR_NAME

##adoptopenjdk:15-jre-hotspot