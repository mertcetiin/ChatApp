# Next.js Chat App

This project contains a simple chat application built using Next.js. Firebase is used for user authentication, and Firestore is used as the database.

## Getting Started

1. Install project dependencies:

    ```bash
    npm install
    npm install react-icons
    npm install firebase
    npm install react-firebase-hooks
    npm install dotenv
    ```

2. Configure Firebase by editing:

    Add your Firebase project configuration details to the `.env` file.

    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
    ```

3. Start the application:

    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Upon starting the application, the user will be logged in anonymously. You can log in with your Google account using the "Login" button in the top right corner.
- After logging in, you can write and send messages in the chat box.
- You can log out using the "Logout" button.

## Additional Information

- This project is built using Next.js.
- User authentication is implemented using Firebase, and Firestore is used for database integration.
- The "UserOne" and "UserTwo" components are used for displaying messages in the chat box based on the user.

---
