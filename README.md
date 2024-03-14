# Crux - A Full-Featured Note-Taking Web App

Crux is a full-stack web application developed using Shadcn UI, Next.js, Convex Database, Clerk Authentication, TypeScript, React, Edge Store for image upload, Zustand for state management, and the Blocknote text editor. This project offers a range of features for creating, organizing, and sharing notes and pages without referencing any specific application like Notion.

---

## Table of Contents

- [Crux - A Full-Featured Note-Taking Web App](#crux---a-full-featured-note-taking-web-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)

---

## Features

- **Rich Text Editing**: Utilizes the Blocknote text editor to create and format text content with ease.

- **Image Upload**: Allows users to add images to their notes and pages using Edge Store.

- **Authentication**: Users can log in and access their notes securely using Clerk Authentication.

- **Data Storage**: Persists data efficiently with Convex Database.

- **State Management**: Utilizes Zustand for effective state management, ensuring a smooth user experience.

- **Note/Page Management**: Users can create, edit, delete, and archive notes and pages.

- **Publishing**: Notes and pages can be published publicly, with a unique link for easy sharing. Published content is view-only, ensuring that viewers cannot edit the content.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and pnpm installed on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/koushikyemula/Crux
   ```

2. Change to the project's directory:

   ```bash
   cd crux
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Configure your environment variables (e.g., Clerk API keys) as needed.

5. Start the development server:

   ```bash
   pnpm dev
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access the application.

---

## Technologies Used

- Shadcn UI
- Next.js
- Convex Database
- Clerk Authentication
- TypeScript
- React
- Edge Store
- Zustand

---

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
