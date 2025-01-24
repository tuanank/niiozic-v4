module.exports.config = {
  name: "nino",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vthien", //mod vd nino by vchien
  description: "Random video nino",
  commandCategory: "Random-mp4",
  usages: "vd nino",
  cooldowns: 10,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("NINO")==0 || (event.body.indexOf("nino")==0) || event.body.indexOf("nakanonino")==0 ||
event.body.indexOf("NAKANONINO")==0 ||
event.body.indexOf("VONINO")==0 ||
event.body.indexOf("NINOLAVOANHA")==0 ||
event.body.indexOf("Nino")==0 ||
event.body.indexOf("voanhlanino")==0 ||
event.body.indexOf("ninoiuiu")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
        "https://i.imgur.com/CeUG4Xk.mp4", 
"https://i.imgur.com/oruKYH4.mp4", 
"https://i.imgur.com/a58Vok8.mp4", 
"https://i.imgur.com/WR9KtzR.mp4", 
"https://i.imgur.com/P5IX8Sd.mp4", 
"https://i.imgur.com/P2D5GTp.mp4", 
"https://i.imgur.com/puvAaxv.mp4", 
"https://i.imgur.com/135XUVh.mp4", 
"https://i.imgur.com/N074X6w.mp4", 
"https://i.imgur.com/mqO5Ni3.mp4", 
"https://i.imgur.com/9e7UmOz.mp4", 
"https://i.imgur.com/R9Ne4a4.mp4",
"https://i.imgur.com/3L99uWV.mp4", 
"https://i.imgur.com/Fx8haui.mp4", 
"https://i.imgur.com/uvvRWFm.mp4", 
"https://i.imgur.com/SMkHMqk.mp4", 
"https://i.imgur.com/SMkHMqk.mp4", 
"https://i.imgur.com/P17zXaM.mp4", 
"https://i.imgur.com/up1QU61.mp4", 
"https://i.imgur.com/Y81ciGW.mp4", 
"https://i.imgur.com/VloGcz7.mp4", 
        "https://i.imgur.com/spBv20j.mp4",
        "https://i.imgur.com/8NFRXAP.mp4",
        "https://i.imgur.com/UpGcXDF.mp4",
        "https://i.imgur.com/S2dg9sg.mp4"
         ];
     var callback = () => api.sendMessage({body:"𝙑𝙞𝙙𝙚𝙤 𝙉𝙞𝙣𝙤 𝙑𝙤̛̣ 𝘾𝙪̉𝙖 𝘼𝙣𝙝💞 ┃ 𝙁𝙗 𝘼𝙙𝙢𝙞𝙣:https://www.facebook.com/vanchiendzs",attachment: fs.createReadStream(__dirname + "/cache/nino.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/nino.mp4"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/nino.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };