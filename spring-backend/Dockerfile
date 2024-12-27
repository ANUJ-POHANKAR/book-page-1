# Stage 1: Build Stage
FROM maven:3.9.5-eclipse-temurin-17 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml and src folder from the current directory (spring-backend)
COPY pom.xml .
COPY src ./src

# Run Maven to build the application
RUN mvn -f pom.xml clean package 

# Stage 2: Runtime Stage
FROM eclipse-temurin:17-jre-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=builder /app/target/*.jar backend.jar

# Expose port 8080 for the Spring Boot application
EXPOSE 8080

# Set the entrypoint to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "backend.jar"]

