# News Fusion

This project allows users to select different news sources, categories, and view news based on date. Users can also view detailed information about individual news articles.

## Features

- Choose from a variety of news sources to get updates.
- Browse news articles by selecting different categories.
- View news articles based on specific dates.
- Access detailed information about any news article.

## Getting Started

### Prerequisites

- Node.js installed
- Docker installed (if running the application inside a Docker container)

### Installation

1. Clone the Repository

```
git clone https://github.com/usmangq12/news-fusion.git
cd news-fusion
```

2. Install Dependencies

```
npm install
or
yarn install
```

3. Set Environment Variables
   Create a .env file in the root directory of the project and add the following environment variables:

```
NEXT_PUBLIC_NEWS_API_KEY=nex_public_news_api_key
NEXT_PUBLIC_GUARDIAN_API_KEY=next_public_guardian_api_key
NEXT_PUBLIC_NYT_API_KEY=next_public_nyt_api_key
NEXT_PUBLIC_NEWS_API_BASE_URL=next_public_news_api_base_url
NEXT_PUBLIC_GUARDIAN_API_BASE_URL=next_public_guardian_api_base_url
NEXT_PUBLIC_NYT_API_BASE_URL=next_public_nyt_api_base_url
```

Replace the placeholder values with your actual API keys and base URLs.

### Running the Application

1. Start the Development Server

```
npm run dev
or
yarn run dev
```

- Open your browser and navigate to http://localhost:3000

## Run the Project on Docker Container

Follow below steps to run the application inside a Docker container:

### Step 1: Install Docker

For Windows and macOS

1. Download Docker Desktop:
   - Visit the official Docker Desktop page: Docker Desktop.
   - Click on "Download for Windows" or "Download for Mac" based on your operating system.
2. Install Docker Desktop:
   - Follow the instructions provided by the installer. This will typically involve double-clicking the downloaded file and following the setup wizard.
   - Once the installation is complete, open Docker Desktop from your Applications or Start Menu.
   - You may be prompted to log in or create a Docker account. You can skip this step and use Docker without logging in.

### Step 2: Set Up Environment Variables

To setup the environment variables you can follow these steps.

### Step 3: Build the Docker Image

After setting up the environment variables, build the Docker image by running the following command in the project root:

```
docker build -t news-fusion-app
```

This command will create a Docker image named news-fusion-app.

### Step 4: Run the Docker Container

docker run -p 3000:3000 --env-file .env news-fusion-app

### Step 5: Access the Application

http://localhost:3000
