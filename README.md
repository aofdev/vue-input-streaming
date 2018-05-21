# vue-input-streaming

> A Vue2 Input Streaming RealTime And two way data binding broadcasting with Pusher

<p align="center">
  <img src ="https://i.imgur.com/oBLArRm.gif" />
</p>


## Setup Project

``` bash
# Git Clone Project
git clone git@github.com:aofdev/vue-input-streaming.git

# CD project
cd vue-input-streaming

# install dependencies project
npm install || yarn install

```

## Setup server app

``` bash
# CD folder server-app 
cd server-app

# install dependencies 
npm install

```

## Config
### Step 1
 Create a new project or click on an existing project.  [Pusher Console](https://dashboard.pusher.com/)  
 insert key At folder/file ``server-app/app.js``
``` bash
const pusher = new Pusher({
    appId: '',
    key: '',
    secret: '',
    cluster: '',
    encrypted: true
});
```
### Step 2
insert key At file ``Input.vue``
``` bash
 const pusher = new Pusher('', {
   cluster: '',
   encrypted: true
 });
```

## Running Project

``` bash
# run server app 
node app

# run project app
npm run dev || yarn dev

# build for production with minification and to build Progressive Web Apps
npm run build || yarn build

```

## Donation

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C9L4PNA5WH3LW)
