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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349168415144";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_21_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE4LFxuICAgICAgICA3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDU1LFxuICAgICAgICAxMixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNixcbiAgICAgICAgMjM5LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMzLFxuICAgICAgICA0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICA2LFxuICAgICAgICAxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5TlJEN3R2TWlLV0tIRGxRdTRULyszUEgxblZUQnYyZHd2VGg4RzNaRCswPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnV0E2Q0pLeVNLMjRLa05odXAtbHdRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE1M2FlMWU2LWJlNTgtNGE1YS04MjkyLTc3ZDkzOTZiMTM5OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAyMDgsXG4gICAgICAxMCxcbiAgICAgIDE2NixcbiAgICAgIDIzNCxcbiAgICAgIDIyLFxuICAgICAgODcsXG4gICAgICAxNDMsXG4gICAgICAxNjAsXG4gICAgICA2MSxcbiAgICAgIDcsXG4gICAgICAyMTQsXG4gICAgICA1MCxcbiAgICAgIDE1NixcbiAgICAgIDM1LFxuICAgICAgNjUsXG4gICAgICAzMCxcbiAgICAgIDEwNyxcbiAgICAgIDE1MCxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMTI4LFxuICAgICAgMTM5LFxuICAgICAgMTYwLFxuICAgICAgNDYsXG4gICAgICAxNTQsXG4gICAgICAxNjUsXG4gICAgICAyMjEsXG4gICAgICAxNTYsXG4gICAgICAxMjEsXG4gICAgICA5OCxcbiAgICAgIDIyMixcbiAgICAgIDMsXG4gICAgICAxNTUsXG4gICAgICAxMTgsXG4gICAgICA0MixcbiAgICAgIDE3NixcbiAgICAgIDExNyxcbiAgICAgIDEwOSxcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlM1N0oxNkFXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYxMDcyNzk0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDA5MzE3NDgyNDk4MjU6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2VXcHhnUWd1M1dzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxUm5CT3ZPVmxiRXlHRitvaTNRbW5oSC9LNm1VOGxiZXo1d2RHMi9KUjJnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpWVThiOWl1NGlkaU1PRmg1Ti9EdDJmUjU2blJjNDNwZTl1TDZPeittZmd4S0pZV2p4UHE0WU1JR0lCaktEOUNQT3FxdE5RWEVMSEZER0l0N1p3MkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpNR0VZazMrdTQzcnR0SWJ1OXNUZCtTOFh2M3BZNTNoSm9lZEUvK0FBUFJONTFvcDQrYVloMTBaR2dQWmN4c3dOL1VSZFR6RXFRVWM1NEdIREt1MWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjEwNzI3OTQ6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5OTA0NjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCSHZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJIdi5qc29uIjogIntcImtleURhdGFcIjpcIkhmWWtvdUNzejExYVNraUUvZmVEdVdIOU15dStZNzhBSVlsTGFtckVrUVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTA5NzM1NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg5ODg1MjQ3NjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
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
