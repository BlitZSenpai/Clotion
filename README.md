# Crux - A Full-Featured Note-Taking Web App

Crux is a full-stack web application developed using Shadcn UI, Next.js, Convex Database, Clerk Authentication, TypeScript, React, Edge Store for image upload, Zustand for state management, and the Blocknote text editor. This project offers a range of features for creating, organizing, and sharing notes and pages without referencing any specific application like Notion.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

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

- Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Change to the project's directory:

   ```bash
   cd your-repo
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Configure your environment variables (e.g., Clerk API keys) as needed.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access the application.

---

## Usage

- To create a new note or page, click the "New" button.

- Edit content using the Blocknote editor. You can add text and images.

- Use the archive option to hide notes or pages from the main view.

- To permanently delete a note or page, use the delete option.

- To publish a note or page, click "Publish" and share the generated link.

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
