module.exports.config = {
  name: "upt",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "dtai", //bố m đã bỏ công ra ngồi làm thì đừng có đổi credits
  description: "no prefix",
  commandCategory: "Hệ thống",
  usages: "xem thời gian bot onl",
    cooldowns: 5
};
module.exports.handleEvent = async ({ api, event, Users, Threads }) => { 
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const moment = require("moment-timezone");
  const time = process.uptime(),hours = Math.floor(time / (60 * 60)),	minutes = Math.floor((time % (60 * 60)) / 60),seconds = Math.floor(time % 60);
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  if (!event.body) return;
  const timeStart = Date.now();
  var { threadID, messageID } = event;
  const threadname = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
  if (event.body.toLowerCase().indexOf("upt","Upt") == 0) {
    //getPrefix
    const threadSetting = (await Threads.getData(String(threadID))).data || {};
    const prefix = (threadSetting.hasOwnProperty("Upt")) ? threadSetting.PREFIX : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
  const admins = global.config.ADMINBOT;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
  var i = 1;
  var msg = [];
  var msg = []
    for(var a of admins) {
    if (parseInt(a)) {
    var name = await Users.getNameUser(a);
      msg.push(`${i++}. ${name}`);
    }
    }
    api.sendMessage(`📌 ${thu} ${moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY')} ${gio}\n📝 Bot name: ${global.config.BOTNAME}\n📶 Ping: ${Date.now() - timeStart}ms\n📂 Lệnh còn sống: ${client.commands.size}\n🕐 Time onl: ${hours} giờ ${minutes} phút ${seconds} giây`,event.threadID, event.messageID);
  }
};
module.exports.run = () => {};