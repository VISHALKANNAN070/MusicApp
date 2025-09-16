# 🎧 Spotify Clone (Under Construction)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A work-in-progress Spotify-like music player application. Currently, it allows users to search for songs and play 30-second audio previews using a third-party API. Future updates will introduce user authentication, full song playback via the official Spotify API, and personalized features.

> This project serves as a demonstration of frontend-backend integration, API consumption, and building a foundation for a rich music streaming experience.

***

## 🚀 Current Features

* **🔍 Song Search**: Search for songs by title or artist.
* **▶️ 30-Second Previews**: Play short audio snippets for each search result, provided by a third-party music API.
* **Responsive UI**: A basic, responsive interface to browse and play music previews.

***

## 🚧 Under Construction / Upcoming Features

This application is actively being developed. Here's what's planned for future releases:

* **🔐 User Authentication**: Secure user login/registration.
* **❤️ User-Specific Favorites**: Ability for authenticated users to save and manage their favorite songs.
* **☁️ Persistent Storage**: Integration with a database (e.g., MongoDB) to store user data and favorite songs.
* **🎵 Full Song Playback**: Integration with the **official Spotify API** for complete song streaming (requires Spotify Premium account and OAuth implementation).
* **Personalized Playlists**: Create and manage custom music playlists.
* **Improved UI/UX**: Enhanced design and user experience.

***

## 🛠️ Tech Stack (Current & Planned)

* **Frontend**: [React.js](https://react.dev/), [React Router](https://reactrouter.com/), [Axios](https://axios-http.com/)
* **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
* **Database (Planned)**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) ODM
* **Current API**: Third-party Music API ([Deezer API](https://developers.deezer.com/api))
* **Future API**: [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
* **Authentication (Planned)**: OAuth 2.0 (e.g., Passport.js for Spotify authentication)

***

## ⚙️ Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

You must have [Node.js](https://nodejs.org/) and `npm` installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/spotify-clone.git](https://github.com/your-username/spotify-clone.git)
    cd spotify-clone
    ```

2.  **Install server dependencies:**
    Navigate to the `server` directory and run `npm install`.
    ```bash
    cd server
    npm install
    ```

3.  **Install client dependencies:**
    Navigate to the `client` directory and run `npm install`.
    ```bash
    cd ../client
    npm install
    ```

4.  **Set up Environment Variables:**
    Create a new file named `.env` in the `server/config` directory. You will need to obtain API keys for your chosen third-party music API.

    > ***Important:*** *Never commit your `.env` file to version control! Make sure it is listed in your `.gitignore` file.*

    Add the following variables to your `server/config/.env` file:
    ```env
    PORT=5000
    THIRD_PARTY_API_KEY=your_third_party_api_key_here
    # SPOTIFY_CLIENT_ID= (Planned for official Spotify API)
    # SPOTIFY_CLIENT_SECRET= (Planned for official Spotify API)
    ```

5.  **Run the application:**
    From the root directory, you can run both the client and server concurrently using the `dev` script defined in the root `package.json`.
    ```bash
    # From the root directory
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

***

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Especially as this project is under active development, your input is valuable. Feel free to check the [issues page](https://github.com/your-username/spotify-clone/issues).

1.  **Fork** the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

***

## 📄 License

This project is distributed under the MIT License. See the `LICENSE` file for more information.
