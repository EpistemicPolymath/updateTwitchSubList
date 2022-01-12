# About updateTwitchSubList

This is a very simple script that takes the file subscriber-list.csv which you can download from Twitch Analytics and adds all of the usernames to a txt file separated by a space.


## Setup

```
git clone https://github.com/EpistemicPolymath/updateTwitchSubList.git
cd updateTwitchSubList/
npm install
```

### .env File Setup

Add a .env file with the following values. If you do not need a value simply leave it blank.

``` .env
# File Locations
SUBLISTCSV=""
SUBLISTTXT=""
# Streamer Account
STREAMER=""
# Bot Account
BOT=""
```

### Run the script

```
node main.js
```

## Potential Future Updates

I could make it so that it works with the [Twitch API - GET Broadacast Subscriptions](https://dev.twitch.tv/docs/api/reference#get-broadcaster-subscriptions) and grabs the list from there to completely bypass the need to download the csv file each time. For now this works for me. I can definitely expand upon functionality in the future.
