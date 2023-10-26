# DigiQuiz

DigiQuiz is a web-based quiz game application that challenges your knowledge in various categories. Test your wits and learn something new with each question!

## Table of Contents

-   [Description](#description)
-   [Features](#features)
-   [Demo](#demo)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
-   [API Endpoints](#api-endpoints)
-   [Contributing](#contributing)
-   [License](#license)
-   [Acknowledgments](#acknowledgments)

## Description

DigiQuiz is an interactive quiz game designed to challenge your knowledge. It offers a wide range of questions in different categories, including science, computers, and more. Answer questions, earn points, and compete with friends to see who knows the most!

## Features

-   Multiple-choice questions from various categories.
-   Randomly generated questions for replayability.
-   Keep track of your score as you progress.
-   Compete with others to reach the top of the leaderboard.

## Demo

Check out the live demo of DigiQuiz [here](https://gamedigi.vercel.app).

## Getting Started

Follow these steps to set up and run DigiQuiz on your local machine.

### Prerequisites

Before you begin, ensure you have the following software installed:

-   Node.js
-   MongoDB (for storing questions and user scores)

### Installation

1. Clone this repository:

    ```sh
    git clone https://github.com/yourusername/digiquiz.git
    ```

2. Navigate to project directory:

    ```sh
    cd digiquiz
    ```

3. There are separate folders for frontend and backend. Again navigate to those folders:

    ```sh
    cd frontend
    ```

    also for backend

    ```sh
    cd backend
    ```

4. Install dependencies:

    ```sh
    npm install
    ```

    install dependencies separately on both frontend and backend

5. Set up environment variables by creating a .env file in the project root. Define the following variables:

    # frontend

    - REACT_APP_API_URL= Your server url.
    - REACT_APP_VERSION= Version of React app.

    # backend

    - DB_URL: MongoDB connection string.
    - APP_VERSION: Version of your app(ex. v1).

## Usage

Sign up or log in to start playing.
Choose a category and answer the questions.
Earn points for each correct answer.
Check your score and compete on the leaderboard.

## API Endpoints

-   /api/questions: Get quiz questions.
-   /api/highscore: Submit and retrieve high scores.

## Contributing

We welcome contributions from the community. If you want to contribute to DigiQuiz, follow these steps:

1. Fork the project on GitHub.
2. Create a new branch with your feature or bug fix: git checkout -b feature/your-feature.
3. Commit your changes: git commit -m 'Add new feature'.
4. Push your branch to your fork: git push origin feature/your-feature.
5. Open a pull request to the main repository.

## License

This project is currently unlicensed

## Acknowledgments

-   Special thanks to the creators of external libraries used in this project.
-   Hat tip to anyone whose code was used or inspired by this project.
