# ProTasker

ProTasker is a todo app that helps you revolutionize your procrastination, one task at a time. It is built using Next.js 13, Next API and MongoDB.

## With ProTasker, you can:

- Sign up and log in with user authentication
- Create tasks with a title, description, category, priority and deadline
- Delete tasks that are no longer needed
- Mark tasks as completed with a checklist
- Sync your tasks across devices with MongoDB Atlas

## Installation

To run ProTasker locally, you need to have Node.js and MongoDB installed on your machine.

1. Clone this repository: `git clone https://github.com/rajmaurya-dev/protasker.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file in the root directory and add the following variables:

   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET` : Your secret code

4. Start the development server: `npm run dev`
5. Open http://localhost:3000 in your browser and enjoy!

## Deployment

To deploy ProTasker to production, you can use Vercel or any other platform that supports Next.js.

1. Create an account on Vercel and link your GitHub repository
2. Add the same environment variables as in the `.env` file to your Vercel project settings
3. Deploy your app with one click
