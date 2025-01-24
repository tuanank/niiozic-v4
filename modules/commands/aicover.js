module.exports.config = {
  name: "aicover",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vthien", //mod vd ai cover by vchien
  description: "Random video Ai cover",
  commandCategory: "Random-mp4",
  usages: "cover",
  cooldowns: 10,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("AI")==0 || (event.body.indexOf("COVER")==0) || event.body.indexOf("animecover")==0 ||
event.body.indexOf("ai")==0 ||
event.body.indexOf("cover")==0 ||
event.body.indexOf("music")==0 ||
event.body.indexOf("mp4")==0 ||
event.body.indexOf("coverai")==0 ||
event.body.indexOf("nhac")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
        "https://i.imgur.com/DjScU3D.mp4",
        "https://i.imgur.com/KrmlRqA.mp4",
        "https://i.imgur.com/yahN1zX.mp4",
        "https://i.imgur.com/B1ugvMk.mp4",
        "https://i.imgur.com/fSIJPN9.mp4",
        "https://i.imgur.com/rXDtEDx.mp4",
        "https://i.imgur.com/hW6LnNZ.mp4",
        "https://i.imgur.com/NZW9fG3.mp4",
        "https://i.imgur.com/fcZclUJ.mp4",
        "https://i.imgur.com/xMsKWMC.mp4",
        "https://i.imgur.com/AzMIoNM.mp4",
        "https://i.imgur.com/9Is2Gw7.mp4",
        "https://i.imgur.com/NSpkFjY.mp4",
        "https://i.imgur.com/NNAF2Vl.mp4",
        "https://i.imgur.com/JLCa87C.mp4",
        "https://i.imgur.com/yCxsfD3.mp4",
        "https://i.imgur.com/DlgM3Nj.mp4",
        "https://i.imgur.com/yVsvFld.mp4",
        "https://i.imgur.com/proxQNT.mp4",
        "https://i.imgur.com/pGSQPei.mp4",
        "https://i.imgur.com/xKWSOIQ.mp4",
        "https://i.imgur.com/0QRql7U.mp4",
        "https://i.imgur.com/2PqUoVX.mp4",
        "https://i.imgur.com/yVUOmFj.mp4",
        "https://i.imgur.com/cRIWfEc.mp4",
        "https://i.imgur.com/3TE2WkN.mp4"
         ];
     var callback = () => api.sendMessage({body:"𝙰𝚒 𝙲𝚘𝚟𝚎𝚛 ┃ 𝙵𝚋 𝙰𝚍𝚖𝚒𝚗:https://www.facebook.com/vanchiendzs",attachment: fs.createReadStream(__dirname + "/cache/aicover.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/aicover.mp4"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/aicover.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };