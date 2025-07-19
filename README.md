# Drive Tutorial - Building a Google Drive Clone

A _Google Drive Clone_ built with the latest tools and technologies of the Web
Development industry. 🗂️☁️

> This project is inspired by a YouTube tutorial of [Theo](https://x.com/theo).
> Check out [this link](https://www.youtube.com/watch?v=d5x0JCZbAJs) to watch
> the full video.

## 📖 About This Project

This project utilizes the [T3 Stack](https://create.t3.gg/) and was initialized
with `create-t3-app`. It demonstrates a modern, high-performance approach to
application development through seamless integration of cutting-edge tools and
technologies.

For more information about the technologies used in this project, consult the
official documentation linked below. Additional support is available via the
[T3 Community Discord](https://t3.gg/discord).

- [Next.js](https://nextjs.org)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)

### 🎨 UI Scaffolding

The base UI for this project was created using [v0](https://v0.dev/), a tool
that enables fast UI generation through _vibe coding_. An
[example](https://v0.dev/chat/google-drive-clone-ui-6jEAM0wxOgc?b=b_fFQhsfElqQi&f=0)
of this approach can be seen in Theo’s walkthrough on YouTube.

To apply the same base UI in a project, run the following command:

```bash
npx shadcn@latest add "https://v0.dev/chat/b/b_fFQhsfElqQi"
```

### 🧰 Learn More about the T3 Stack

To explore more about the [T3 Stack](https://create.t3.gg/), refer to the
following resources:

- [Official Documentation](https://create.t3.gg/)
- [Learning Resources](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)
  — A collection of awesome tutorials

Visit the
[create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) for
feedback and contributions.

## 🚀 Getting Started

### 🛠️ Environment Variables

To configure the environment variables, copy the example file and update the
values as needed:

```bash
cp .env.example .env
```

Open the `.env` file and fill in the required fields based on the project’s
needs (e.g., database credentials, API keys, etc.).

### 🗄️ Database Setup

This project uses [SingleStore](https://www.singlestore.com/) as the primary
database, with [Drizzle ORM](https://orm.drizzle.team) for type-safe, efficient
data access and schema management.

```bash
pnpm run db:push       # Push the schema to the database
pnpm run db:studio     # Launch Drizzle Studio
```

### 🕹️ Development Server

To start the local development server:

```bash
pnpm run dev
```

## 🚧 Development Logbook

Tracking progress on key features and tasks for the project.

- [x] 🛢️ Set up the database and define data models
- [x] 🔗 Sync folder open state with the URL
- [x] 🔐 Implement user authentication
- [x] 📁 Enable file upload functionality
- [x] 📊 Add analytics tracking

### 📝 Note from 5-28-2025

Just finished up the database connection, next steps:

- [x] Update schema to show files and folders
- [x] Manually insert examples
- [x] Render them in the UI

### 📝 Note from 6-4-2025

The database and UI are now connected, some improvements to make:

- [x] Change folders to link components, remove all client state
- [x] Clean up the database and data fetching patterns
- [ ] Real homepage

### 📝 Note from 7-4-2025

Uploading a file to '[uploadthing](https://uploadthing.com/)' works, things that
can be approved:

- [x] Add "ownership" to files and folders
- [x] Upload files to the right folder
- [ ] Delete file button
- [x] Allow files that are not images to be uploaded
