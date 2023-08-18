# MUON Verify Bot

This project involves creating a Discord bot designed to verify node owners within the Muon project.

## Setup

Execute `npm i` to install the necessary dependencies.

Duplicate the ".envexample" file, renaming the copy to ".env," and configure its values accordingly.

Additionally, ensure there is a running instance of MongoDB; place the MongoDB connection string within the "DB" variable in the ".env" file.

## RUN
You can build and run this projct using following commands:
```
npm run build
node .output/server/index.mjs
``` 
or use `docker-compose up -d --build` to run it inside a docker container