<div align="center">

# 🏎️ Formula 1 Racing Portal

![Formula 1](https://img.shields.io/badge/Formula%201-E10600?style=for-the-badge&logo=f1&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

**A full-stack Formula 1 racing website featuring real-time updates, driver standings, team information, and race schedules.**

---

</div>

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About The Project

This Formula 1 Racing Portal is a comprehensive web application that replicates the official Formula 1 website experience. Built with modern web technologies, it provides fans with up-to-date information about drivers, teams, race schedules, and standings.

### Why This Project?

- 🏁 **Real-time Updates**: Stay current with the latest F1 news and race results
- 📊 **Comprehensive Stats**: Access detailed driver and team statistics
- 🎨 **Modern UI/UX**: Enjoy a sleek, responsive design across all devices
- ⚡ **High Performance**: Fast loading times and smooth navigation

---

## ✨ Features

<table>
  <tr>
    <td>
      <h3>🏆 Driver Standings</h3>
      <p>Real-time championship standings with detailed driver profiles and statistics</p>
    </td>
    <td>
      <h3>🏎️ Team Information</h3>
      <p>Comprehensive team data including car specifications and team history</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>📅 Race Calendar</h3>
      <p>Complete season schedule with circuit information and race timings</p>
    </td>
    <td>
      <h3>📰 News & Updates</h3>
      <p>Latest F1 news, articles, and race highlights</p>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🔐 User Authentication</h3>
      <p>Secure login and registration system for personalized experience</p>
    </td>
    <td>
      <h3>📱 Responsive Design</h3>
      <p>Fully optimized for desktop, tablet, and mobile devices</p>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

### Frontend
```
├── Angular 17+              # Progressive web framework
├── TypeScript               # Type-safe JavaScript
├── HTML5 & CSS3            # Modern markup and styling
├── Bootstrap/Angular Material # UI Component library
└── RxJS                     # Reactive programming
```

### Backend
```
├── Spring Boot 3.x          # Java-based framework
├── Spring Security          # Authentication & Authorization
├── Spring Data JPA          # Database ORM
├── RESTful API              # API architecture
└── Maven                    # Dependency management
```

### Database
```
├── MySQL 8.x                # Relational database
├── XAMPP                    # Local development environment
└── phpMyAdmin               # Database administration
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Layer                         │
│                     (Angular Frontend)                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Home    │  │ Drivers  │  │  Teams   │  │  Races   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTP/REST
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      Application Layer                       │
│                   (Spring Boot Backend)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Controllers  │  │   Services   │  │ Repositories │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└────────────────────────┬────────────────────────────────────┘
                         │ JDBC/JPA
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                       Database Layer                         │
│                    (MySQL via XAMPP)                        │
│         ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│         │ Drivers  │  │  Teams   │  │  Races   │          │
│         └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system: 

- **Node.js** (v18. x or higher)
  ```bash
  node --version
  ```

- **Angular CLI**
  ```bash
  npm install -g @angular/cli
  ```

- **Java JDK** (v17 or higher)
  ```bash
  java --version
  ```

- **Maven** (v3.8 or higher)
  ```bash
  mvn --version
  ```

- **XAMPP** (for MySQL database)
  - Download from [https://www.apachefriends.org](https://www.apachefriends.org)

---

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AchrafGuazzeh/formula1-racing-portal.git
cd formula1-racing-portal
```

#### 2️⃣ Database Setup

1. Start XAMPP and run **Apache** and **MySQL**
2. Open phpMyAdmin:  `http://localhost/phpmyadmin`
3. Create a new database: 
   ```sql
   CREATE DATABASE f1_database;
   ```
4. Import the database schema:
   ```bash
   # Navigate to the backend directory
   cd backend
   # Import the SQL file
   mysql -u root -p f1_database < database/schema.sql
   ```

#### 3️⃣ Backend Setup (Spring Boot)

```bash
# Navigate to backend directory
cd backend

# Update application.properties with your database credentials
# src/main/resources/application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/f1_database
spring.datasource.username=root
spring.datasource.password=your_password

# Build and run the application
mvn clean install
mvn spring-boot:run

# Backend will run on http://localhost:8080
```

#### 4️⃣ Frontend Setup (Angular)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
ng serve

# Frontend will run on http://localhost:4200
```

---

## 💻 Usage

1. **Access the Application**
   - Open your browser and navigate to `http://localhost:4200`

2. **Explore Features**
   - Browse driver standings and profiles
   - View team information and statistics
   - Check the race calendar and results
   - Read latest F1 news and updates

3. **API Endpoints**
   - Backend API is available at `http://localhost:8080/api`
   - API documentation can be accessed via Swagger UI (if configured)

---

## 📡 API Documentation

### Base URL
```
http://localhost:8080/api
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/drivers` | Get all drivers |
| GET | `/drivers/{id}` | Get driver by ID |
| GET | `/teams` | Get all teams |
| GET | `/teams/{id}` | Get team by ID |
| GET | `/races` | Get all races |
| GET | `/races/{id}` | Get race by ID |
| GET | `/standings/drivers` | Get driver standings |
| GET | `/standings/constructors` | Get constructor standings |


---

## 📸 Screenshots

<div align="center">

### Home Page
*Landing page with featured content and latest news*

### Driver Standings
*Comprehensive championship standings with driver statistics*

### Race Calendar
*Interactive calendar with upcoming and past races*

### Team Information
*Detailed team profiles with car specifications*

</div>

---

## 🗺️ Roadmap

- [x] Basic CRUD operations for drivers, teams, and races
- [x] User authentication and authorization
- [x] Responsive design implementation
- [ ] Real-time race updates using WebSockets
- [ ] Advanced search and filtering capabilities
- [ ] User favorite drivers and teams
- [ ] Push notifications for race updates
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Admin dashboard for content management


---

## 📞 Contact

**Achraf Guazzeh** - [@AchrafGuazzeh](https://github.com/AchrafGuazzeh)

---

<div align="center">

### ⭐ Don't forget to star this repository if you found it helpful!

Made with ❤️ and lots of ☕

</div>
