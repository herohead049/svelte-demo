# Svelte-demo

- demo shows my implementation of svelte-kit, socket.io and forerunnerdb
- UI framework I used is the flowbite and flowbite-svelte
- I use yarn but you can use npm.
- yarn install or npm install
- yarn dev or npm run dev
- browser http://localhost:3000
## Database
- db file is located ./src/lib/server/dbData/mixers.json
- You can edit the file but you will need to restart the application.
## Socket.io
- This is used for dynamic loading of any database change. 
- If a new mixer is added, 
  - the client will add the entry to the database
  - save the json file out to src/lib/server/dbData/mixers.json
  - send a socket message called "mixer-update"
  - client will then query the api/mixers and add value into the client store
  - therefore the updates will be reflected by the store subscribe ($) in the page.