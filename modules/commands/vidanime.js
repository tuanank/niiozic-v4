module.exports.config = {
  name: "vid",	
  version: "4.0.0", 
  hasPermssion: 0,
  credits: "Vtuan",//mod ramdom video by vchien
  description: "rd vdanime", 
  commandCategory: "Random-mp4",
  usages: "",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event, Threads }) {
  const request = require('request');
  const fs = require("fs");
  var { threadID, messageID, body } = event;
  const tdungs = [
   require('./../../Data_Vtuan/datajson/mp4anime.json')];
 function vtuanhihi(image, vtuandz, callback) {
    request(image).pipe(fs.createWriteStream(__dirname + `/` + vtuandz)).on("close", callback);
  }

  if (body.toLowerCase() == "vid" || (body.toLowerCase() == "Vid")) {
    const numImages = Math.floor(Math.random() * 0) + 1; // Random 1 vid anime
    let imagesDownloaded = 0;
    let attachments = [];

    for (let i = 0; i < numImages; i++) {
      const randomTdung = tdungs[Math.floor(Math.random() * tdungs.length)];
      let image = randomTdung[Math.floor(Math.random() * randomTdung.length)].trim();
      let imgFileName = `/cache/anime.mp4`;
      vtuanhihi(image, imgFileName, () => {
          imagesDownloaded++;
          attachments.push(fs.createReadStream(__dirname + `/${imgFileName}`));
          if (imagesDownloaded === numImages) {
            api.sendMessage({
              body: `𝑽𝒊𝒅𝒆𝒐 𝑨𝒏𝒊𝒎𝒆 | 𝑭𝒃 𝑨𝒅𝒎𝒊𝒏:https://www.facebook.com/vanchiendzs`,
              attachment: attachments
            }, event.threadID, () => {

              for (let img of attachments) {
                fs.unlinkSync(img.path); 
              }
            }, event.messageID);
          }
      });
    }
  }
}

module.exports.run = async ({ api, event, args, Threads }) => {}