# StoreIt

StoreIt is a Google / iCloud drive clone, allowing users to upload, share, and organise their files.

## Tech Stack

⭐ Next.JS

⭐ React

⭐ Appwrite

⭐ TailwindCSS

⭐ ShadCN

⭐ Typescript

## Features

👉 User Authentication via Appwrite - Handle signup, login, and logout using Appwrite's authentication system, particular One Time Passwords

👉 File Upload - Upload different file types e.g., docs, images, videos, audio

👉 Dashboard - Overview with a dynamic dashboard displaying storage capacity, recent uploads and type summaries

👉 View and Manage Files - Browser uploaded files (stored in Appwrite storage), open in a new tab, rename, delete

👉 Download Files

👉 File Sharing - Share files with other accounts, even if not yet signed up prior

👉 Global Search - Find files and shared content quickly which utilises debouncing for queries

👉 Sorting options - Sort files by date, size, etc.

👉 Modern Design

## Usage

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/AaronJai/google_drive_clone
cd google_drive_clone
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

Replace the values with your actual Appwrite credentials. You can obtain these credentials by signing up &
creating a new project on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
