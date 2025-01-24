module.exports.config = {

  name: "ad",

  version: "1.0.0",

  hasPermssion: 0,

  credits: "",

  description: "Admin Cuti",

  commandCategory: "Admin dz",

  usages: "admin",

  cooldowns: 5,

  dependencies: {

    "request":"",

    "fs-extra":"",

    "axios":""

  }

    

};

module.exports.handleEvent = async ({ api, event, Threads }) => {

  if (event.body.indexOf("Ad")==0 || (event.body.indexOf("vchien")==0) || (event.body.indexOf("vc")==0) || event.body.indexOf("ad")==0) {

    const axios = global.nodemodule["axios"];

const request = global.nodemodule["request"];

const fs = global.nodemodule["fs-extra"];

    var link = [

      "https://i.imgur.com/uubCDXG.mp4"

    ];

     var callback = () => api.sendMessage({body:`━━━━━━━[𝙷𝚎𝚕𝚕𝚘]━━━━━━━\n→𝚃𝚑𝚘̂𝚗𝚐 𝚃𝚒𝚗 𝙰𝚍𝚖𝚒𝚗 𝙱𝚘𝚝\n𝙵𝚋:https://www.facebook.com/vanchiendzs\n𝚉𝚊𝚕𝚘:𝟶𝟹𝟹𝟿𝟻𝟾𝟸𝟿𝟸𝟸\n𝚃𝚒𝚔𝚃𝚘𝚔:https://www.tiktok.com/@ninokawaiii\n→𝙰𝚍𝚖𝚒𝚗 𝙲𝚑𝚞̛𝚊 𝙲𝚘́ 𝙽𝚐𝚢 𝙽𝚑𝚊𝚊𝚊=))`,attachment: fs.createReadStream(__dirname + "/cache/ad.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad.mp4"), event.messageID);

      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ad.mp4")).on("close",() => callback());

}

                                                                                                         }

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };