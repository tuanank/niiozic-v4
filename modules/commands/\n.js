module.exports.config = {

	name: "\n",

	version: "3.0.0",

	hasPermssion: 0,

	credits: "Vtuan",

	description: "sailenh",

	commandCategory: "Hệ Thống",

	usages: "Công cụ",

	cooldowns: 0

};

module.exports.run = async ({ api, event ,Users}) => {

  const axios = require('axios');

  const request = require('request');

  const fs = require("fs");

  const moment = require("moment-timezone");

  const time = process.uptime(),hours = Math.floor(time / (60 * 60)),	minutes = Math.floor((time % (60 * 60)) / 60),seconds = Math.floor(time % 60);

  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");

  const timeStart = Date.now();

  var { threadID, messageID, body } = event,{ PREFIX } = global.config;

  let threadSetting = global.data.threadData.get(threadID) || {};

  let prefix = threadSetting.PREFIX || PREFIX;  

  const tdung = require('./../../Data_Vtuan/datajson/mp4anime.json');

  var image1 = tdung[Math.floor(Math.random() * tdung.length)].trim();

  function vtuanhihi(image,vtuandz,callback){

    request(image).pipe(fs.createWriteStream(__dirname + `/`+vtuandz)).on("close", callback);

  }

  let callback = function () {

    return api.sendMessage({

      body: `⚠ Chưa Nhập Tên Lệnh.\n⏰ Thời gian hoạt động: ${hours} : ${minutes} : ${seconds}`,

      attachment: [fs.createReadStream(__dirname + `/1.mp4`)]

    }, event.threadID, () => {

      fs.unlinkSync(__dirname + `/1.mp4`);

      

    }, event.messageID);

  };

      vtuanhihi(image1,'1.mp4',callback)}

