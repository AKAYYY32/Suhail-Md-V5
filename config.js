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


global.SESSION_ID = process.env.SESSION_ID ||SUHAIL_21_42_01_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcxLFxuICAgICAgICA0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxODksXG4gICAgICAgIDM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0LFxuICAgICAgICA0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMixcbiAgICAgICAgMTI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDgxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyLFxuICAgICAgICA3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYVN3UDZUU3Y0NU1pZVEwOUxza2hBb2pNNk5MVVdoeXRrZUN2VTA0VExmYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLUljZ3lBOGtRMFdOX1ROZVlyVTNOQVwiLFxuICBcInBob25lSWRcIjogXCI5NzYxODY1My0yOGY5LTQ5OTItYWRhMC0yMzg2NzQ1ZWM0MjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxNDksXG4gICAgICAyNSxcbiAgICAgIDIzOCxcbiAgICAgIDc4LFxuICAgICAgMTEzLFxuICAgICAgMCxcbiAgICAgIDEyMyxcbiAgICAgIDE5NCxcbiAgICAgIDEyMCxcbiAgICAgIDE4MCxcbiAgICAgIDE5OSxcbiAgICAgIDI0NSxcbiAgICAgIDEyOCxcbiAgICAgIDE2OSxcbiAgICAgIDE5NCxcbiAgICAgIDEyMSxcbiAgICAgIDI0OSxcbiAgICAgIDMyLFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDIwOCxcbiAgICAgIDE1NSxcbiAgICAgIDE4MixcbiAgICAgIDMxLFxuICAgICAgOTIsXG4gICAgICAyMDIsXG4gICAgICAxNTIsXG4gICAgICAxMDYsXG4gICAgICA5OSxcbiAgICAgIDIwMCxcbiAgICAgIDExOCxcbiAgICAgIDQ2LFxuICAgICAgMTQsXG4gICAgICAyMjYsXG4gICAgICAxMDcsXG4gICAgICA3MyxcbiAgICAgIDEzNCxcbiAgICAgIDU1LFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFLSFdNMlNSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMwNjkwODY4OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NTg0OTMyMzc3ODEyNToyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLVG0vQ2NRcDRmMXZBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJLSld0ek52emlmS2FmdGMvbFIvbHFXNGZzaG0wWjhyV2tKbXZNL3c1bTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS0RIWTRQZ3pvYTZ2K1pEMnhqbUFsbk1DL20zYlozMzhzWU1Ta0VnT1BRRUNrQ1ZZclpmWGVhaUpSNStiSEw5ekVXMlVrRW1zbWhUSWZXZllQRDdrRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN1VSbnBhak5oSzVWTmJYdkNqQXpmdXg5TXNEYkUrd0UzRFJQTjNaTGF5Yy9wSmVtdktlUDFXQlBZeEJoRlVRaEwvZk9NL01GOE94YmViak52QWhTQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMDY5MDg2ODoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzgzNTk3MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFRURcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVFRC5qc29uIjogIntcImtleURhdGFcIjpcIitzQ0tZdUhRaDlvYi8xTjA0L0tsY2xIVVg5SkZ1U21NSTJBMmVaK3EyZEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODM4MzM2MzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTc3NjM0NDIwMFwifSIKfQ==// PUT your SESSION_ID


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
