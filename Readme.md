# Full-Stack Polling Application with Spring Boot and React

This repository contains the source code for a full-stack polling application. The backend is built with Java and Spring Boot, using Spring Security for token-based authentication. The frontend is a React application built with Ant Design.

The application allows users to register, log in, create polls, vote on polls, and view their own profile with a list of created and voted-on polls.

## Features

  * **User Authentication:** Secure user registration and login with JWT (JSON Web Token).
  * **Poll Creation:** Logged-in users can create new polls with multiple choices.
  * **Voting:** Logged-in users can vote on any poll, but only once per poll.
  * **Paginated Poll Lists:** The main page displays a paginated list of all available polls.
  * **User Profiles:** View a user's profile, including their name, username, join date, and separate tabs for polls they've created and polls they've voted on.
  * **Protected Routes:** Both backend APIs and frontend routes are protected, redirecting unauthorized users to the login page.

-----

## Technical Stack

### Backend (`polling-app-server`)

  * **Java 8**
  * **Spring Boot:** Core backend framework.
  * **Spring Security:** For JWT authentication and authorization.
  * **Spring Data JPA (Hibernate):** For database ORM.
  * **MySQL:** SQL database.
  * **Flyway:** For database schema management and migrations.
  * **Maven:** For build and dependency management.

### Frontend (`polling-app-client`)

  * **React**
  * **React Router:** For client-side routing.
  * **Ant Design (`antd`):** UI component library.
  * **NPM / Yarn:** For frontend package management.

-----

## Prerequisites

To run this project locally, you must have the following tools installed:

1.  **Java JDK 8 or 11**
2.  **Node.js and npm** (LTS version recommended)
3.  **MySQL Server** (MySQL Workbench is a recommended GUI)

-----

## How to Run Locally

### 1\. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-repository-name>
```

### 2\. Set Up the Database

1.  Start your local MySQL server.
2.  Open **MySQL Workbench** (or your preferred SQL tool) and connect to your server.
3.  Run the following SQL command to create the empty database:
    ```sql
    CREATE DATABASE polling_app;
    ```
    The server will automatically create all the necessary tables when it starts.

### 3\. Configure and Run the Backend Server

1.  **Set `JAVA_HOME`:** Ensure you have a `JAVA_HOME` environment variable set on your system that points to your JDK installation (e.g., `C:\Program Files\Java\jdk-11`). You **must restart your terminal or IDE** after setting this.

2.  **Configure Database Credentials:**

      * Open the file `polling-app-server/src/main/resources/application.properties`.
      * Edit the `username` and `password` to match your local MySQL credentials:
        ```properties
        spring.datasource.username = YOUR_MYSQL_USERNAME
        spring.datasource.password = YOUR_MYSQL_PASSWORD
        ```

3.  **Run the Server:**

      * Open a terminal and navigate to the backend directory:
        ```bash
        cd polling-app-server
        ```
      * Run the server using the Maven Wrapper (this will download Maven if you don't have it):
          * **On Windows (PowerShell/CMD):**
            ```bash
            .\mvnw spring-boot:run
            ```
          * **On macOS/Linux:**
            ```bash
            ./mvnw spring-boot:run
            ```
      * The backend will start on `http://localhost:5000`.

### 4\. Run the Frontend Client

1.  **Open a *new* terminal.**
2.  Navigate to the frontend directory:
    ```bash
    cd polling-app-client
    ```
3.  Install all required packages:
    ```bash
    npm install
    ```
4.  Start the React development server:
    ```bash
    npm start
    ```
5.  Your browser will automatically open to `http://localhost:3000`, and you can now use the application.

-----

## Deployment

This project is fully containerized and configured for deployment.

### Docker Compose

The easiest way to run the entire application stack (frontend, backend, database) in a production-like environment is with Docker Compose.

1.  Ensure **Docker Desktop** is installed and running.
2.  From the project's root directory, run:
    ```bash
    docker compose up --build
    ```
    This will build the images and start all services. The app will be available at `http://localhost:3000`.

### Kubernetes

The `deployments/` directory contains all the necessary Kubernetes (`.yaml`) files to deploy this application to a cluster (like Minikube, GKE, or EKS). This includes deployments for:

  * `mysql-deployment.yaml`
  * `polling-app-server.yaml`
  * `polling-app-client.yaml`
