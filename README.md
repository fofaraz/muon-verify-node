# MUON Verify Bot

This project involves creating a Discord bot designed to verify node owners of the Muon network.

## Setup

Execute `npm i` to install the necessary dependencies.

Duplicate the ".envexample" file, renaming the copy to ".env," and configure its values accordingly.

Additionally, ensure there is a running instance of MongoDB; place the MongoDB connection string within the "DB" variable in the ".env" file.

## RUN
To build and run this project using on local machine you need to install env-cmd package
 
 `npm install -g env-cmd`

then build the project :

`npm run build`

then run the project using following command:

`env-cmd node .output/server/index.mjs`

or if using pm2:

`env-cmd pm2 start .output/server/index.mjs ` 

or use `docker-compose up -d --build` to run it inside a docker container