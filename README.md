# SvelteKit Refresher Notes
## Startup
- `npx sv create app-name` if you want to create a new folder with the app or alternatively drop the app name if you are already in the folder.
- `npm install` to install all dependencies
- In this example I will use SQLite and prisma, as prisma ensures that you do not need to write all queries to the DB in SQL and does auto migrations.
- `To install and initialise prisma:
```
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```
- Inside the `schema.prisma` file, set the provider to the type of DB e.g. "sqlite" in this case and in the `prisma.config.ts` file, only 1 export can occur, so add the location of the sqlite db:
```
datasource: {
    url: "file:./dev.db",
  },
```
- To make updates to the DB structure/schema, make a migration afterwards in the terminal with `npx prisma migrate dev --name associated-message` and verify all is as expected with the studio `npx prisma studio`, which allows you to see a visual representation of the DB without having to use a vs extension if using another code editor.
- `npm run dev` when cd inside the folder in the terminal to run the project.

- Abandoned due to fucsing on active project and prisma issue