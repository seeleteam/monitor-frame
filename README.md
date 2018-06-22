# Monitor Frame
Seele Monitor integration frame for sharding.

## Prerequisite
### development mode
* node
* npm
### production mode
* node
* npm
* nginx

## Installation
### dev mode
make sure you have node.js and npm installed
``` bash
# clone seele-frame repository
git clone https://github.com/seeleteam/monitor-frame.git
cd monitor-frame
# install the dependencies
npm install
# start seele-frame front
npm run dev
```
### production mode
make sure you have node.js,npm,nginx installed
``` bash
# clone monitor-frame repository
git clone https://github.com/seeleteam/monitor-frame.git
cd monitor-frame
# install the dependencies
npm install
# build production output
npm run build
# deploy monitor-frame vue front
cp -r dist /usr/local/nginx/monitor-frame
# config nginx server
...
# reload nginx
nginx -s reload
```

## Config Item Description
### src/pages/url.js 
``` bash
  // set the shard view of seele-monitor, default display index 1
  menuList: [
    {
      id: '1', // index unique id
      menuName: 'Shard 01', // display name
      url: 'http://localhost:3001' // access url
    },
  ]
```

## View
see seele-frame at http://localhost:8000(default)

## Commands
``` bash
# install dependencies
npm install
# start server
npm run start  
# code check
npm run lint
# build for production
npm run build
```