# Movie Review Project

## Overview

This is a **frontend-only** web application built with **React**, **TypeScript**, and **Vite**, styled using **Material-UI (MUI)**. It allows users to browse movie categories such as **Top Rated**, **Upcoming**, **Now Playing**, and **Popular** movies. Users can mark movies as their **favorites** on the discovery page, and only authenticated users can view their favorite list. Movie data and reviews are fetched from **The Movie Database (TMDb)** API.

The **authentication service** is provided by a backend API that was developed in **Assignment 1**, which you can find [here](https://github.com/rukaiya22/movie-review). This service handles user sign-up, sign-in, and session management.

## Features

- **Browse Movies by Categories:**
  - **Top Rated**
  - **Upcoming**
  - **Now Playing**
  - **Popular**
  
- **Add to Favorites:** Users can mark movies as favorites directly from the discovery page.
- **View Favorites:** Only authenticated users can view their list of favorite movies.
- **Movie Details and Reviews:** View movie details, ratings, and reviews from TMDb.
- **User Authentication:** The backend API from **Assignment 1** is used to authenticate users. Sign in to view and manage your favorites list.
- **Responsive UI:** The app is fully responsive with a modern interface powered by **Material-UI (MUI)** components.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Material-UI (MUI) for UI components and styling.
- **API Integration:** 
  - The Movie Database (TMDb) API for movie data and reviews.
  - Authentication handled via the backend API from **Assignment 1**.
- **Authentication:** User authentication and session management via the **Assignment 1 backend API**.
- **Routing:** React Router for navigation across different pages.
- **Libraries:** **Fetch** API for making HTTP requests to external services (such as TMDb API).

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/assignment2.git
   cd assignment2
   ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Environment Variables
    - Create a `.env` file in the root directory. 
    - Add your TMDb API key:
    ```ini
    VITE_TMDB_API_KEY=your_tmdb_api_key_here
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```
    This will start the application locally. Open your browser and go to http://localhost:3000 (or the port provided in the terminal).  

## Deployment

### Step 1: Deploy Backend (Assignment 1)

1. First, follow the **README** provided in **[Assignment 1](https://github.com/rukaiya22/movie-review)** to set up and deploy the backend application.
2. Deploy the backend to **AWS**.
3. Once the backend is deployed, you will get the API path for authentication (e.g., `https://<your-backend-api-url>`).

### Step 2: Update Frontend API URLs

1. After deploying the backend and getting the authentication API path, update the URLs in the following frontend files:

   - **SignInPage.tsx**
   - **SignUpPage.tsx**
   - **ConfirmPage.tsx**

   Update the URLs for authentication and API requests to point to the deployed backend API.

### Step 3: Build the Frontend

1. Run the following command to build the frontend application:

   ```bash
   npm run build

2. This will create a `dist` folder in the project directory containing the static files.


### Step 4: Upload to S3

1. Upload the contents of the `dist` folder to your **AWS S3** bucket.
   - In AWS S3, create a new bucket or use an existing one.
   - Ensure that the bucket has the necessary **public access permissions** to serve static files.

### Step 5: Set Up CloudFront (Frontend CDN)

1. After uploading the files to S3, set up **AWS CloudFront** for **CDN deployment**.
   - Create a CloudFront distribution.
   - Set the **origin** to the S3 bucket where your frontend files are uploaded.
   - Configure the distribution settings (cache behavior, etc.).
   - After the distribution is deployed, you’ll get a **CloudFront URL** to access your frontend.

2. Your application will now be accessible via the CloudFront URL.

### Helpful Video Tutorial

For detailed steps on how to deploy the frontend to **AWS S3** and **CloudFront**, refer to this [video tutorial](https://www.youtube.com/watch?v=GUfAQUjA3a0) that explains the process.
