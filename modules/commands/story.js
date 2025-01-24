module.exports.config = {

  name: "story",

  version: "2.0.0",

  hasPermssion: 0,

  Rent: 2,

  credits: "Vtuan",

  description: "Xem video về story buồn",

  commandCategory: "Random-mp4",

  usages: "",

  cooldowns: 2

};

module.exports.run = async ({ api, event ,Users}) => {

  const axios = require('axios');

  const request = require('request');

  const fs = require("fs");

  const video = require('./../../Data_Vtuan/datajson/story.json');

  const randomVideo = video[Math.floor(Math.random() * video.length)].trim();

  const fileName = 'cache/5.mp4';

  const filePath = __dirname + `/${fileName}`;

  function downloadAndSendImage(image, fileName, callback) {

    request(image).pipe(fs.createWriteStream(fileName)).on("close", callback);

  }

  let callback = function () {

    return api.sendMessage({

      body: 'Video story của bạn đây',

      attachment: [

        fs.createReadStream(filePath)

      ]

    }, event.threadID, () => {

      fs.unlinkSync(filePath);

    }, event.messageID);

  };

  downloadAndSendImage(randomVideo, filePath, callback);

}

