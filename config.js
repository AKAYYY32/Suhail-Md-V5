const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349130690868" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349130690868";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  SUHAIL_19_05_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDc5LFxuICAgICAgICA0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxODgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0LFxuICAgICAgICAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDIxLFxuICAgICAgICA0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDk5LFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODksXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFQVFXcDA3Q2VHcWpZb2lEaWdoLzNOTFA0SVQxa0ZQYXRVYXI0SnVRS0FBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkR25PR25UQ1NtQ3drTU1VWTVSNVlBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRjNTY4YWYwLTk4ZWMtNDM0Yi1iNGJiLWNhMTM5ZTRmZTdlZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDkxLFxuICAgICAgMjA1LFxuICAgICAgMjE2LFxuICAgICAgMTYzLFxuICAgICAgMTIzLFxuICAgICAgNDEsXG4gICAgICA1OCxcbiAgICAgIDExMSxcbiAgICAgIDIxOSxcbiAgICAgIDkyLFxuICAgICAgMjU1LFxuICAgICAgMjExLFxuICAgICAgMTc2LFxuICAgICAgMjA2LFxuICAgICAgMTY3LFxuICAgICAgNTMsXG4gICAgICA3NyxcbiAgICAgIDEzMixcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDEyNyxcbiAgICAgIDE2MSxcbiAgICAgIDI4LFxuICAgICAgOSxcbiAgICAgIDEwOCxcbiAgICAgIDE3MyxcbiAgICAgIDcxLFxuICAgICAgMjI4LFxuICAgICAgMixcbiAgICAgIDI1NCxcbiAgICAgIDI0NyxcbiAgICAgIDQsXG4gICAgICAxODMsXG4gICAgICAxNjcsXG4gICAgICA0NyxcbiAgICAgIDQyLFxuICAgICAgNjUsXG4gICAgICAzNCxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUlZBOUxYQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMDY5MDg2ODoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzU4NDkzMjM3NzgxMjU6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0xtL0NjUThmK1d1d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyS0pXdHpOdnppZkthZnRjL2xSL2xxVzRmc2htMFo4cldrSm12TS93NW00PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtpOWtTSjdLeC9HL0pwNnJJdmFlQS9TUEsyYWtnWWJkNFQ5UU01SkJyKzN4M1RIQmhDSDZsZHZZem1kRjljdi9SbVBFVlBJM3BvU09Uc0FDa0pCOENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhBNnllK3hNdUNwdlVKZVZtRnlnOHVXbm83aUQxZU8xZ2dFdTVYRjNYL0hJRGtzZ2NQTHU1V2N5MXZDM0RkZjVqVFA0bDUxbmxFRm1sakgwakhSYmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzA2OTA4Njg6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NzIxNTI2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==// PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
