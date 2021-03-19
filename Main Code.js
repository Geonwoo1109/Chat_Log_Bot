const scriptName = "Chatlog.v2";

const Fs = FileStream;

var allsee = "\u200d".repeat (500);
var Log = [];

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

var 날짜 = new Date();
var hour = 날짜.getHours();
var minutes = 날짜.getMinutes();
var seconds = 날짜.getSeconds();
var 시간 = ("["+hour+":"+minutes+":"+seconds+"]");

  try {
   Fs.append("/sdcard/Chatlog.v2/" + room,
   시간 + " " + sender + "\n=> " + msg + "☆♡♧");
   
    if (msg.startsWith(".로그 ")) {
      var abc = Number(msg.substr(4));
      
      if (isNaN(abc) == false) {
      if (abc > 10000) abc = 10000;
      
       Log = Fs.read ("/sdcard/Chatlog.v2/" + room).split ("☆♡♧").reverse ();
       var b = [];
       
        for (i = 0; i < abc; i++) {
          b.push(Log[i]);
        }
        
        replier.reply (
        "최근 "+ abc +"개의 메시지"+allsee +"\n방이름: "+room +b.join("\n\n") );
        b = [];
    } else {
      replier.reply("이상한거하지마세요");
    }
    }
    if (msg.startsWith(".로그-")) {
      
      var roomName = msg.substr(4).split("-")[0];
      var msgNumber = msg.substr(4).split("-")[1];
      
       Log = Fs.read (
       "/sdcard/Chatlog.v2/" + roomName).split ("☆♡♧").reverse ();
       var c = [];
       
        for (i = 0; i < msgNumber * 1 + 1; i++) {
          c.push(Log[i]);
        }
        
        replier.reply (
        roomName + "방의 최근 "+ msgNumber +"개의 메시지"+allsee + c.join("\n\n") );
        c = [];
    
    }
    if (msg == ".리셋") {
      if (sender == "ᴳᵉᵒⁿʷᵒᵒ ᴷⁱᵐ_건우" || sender == "건우입니다") {
      Fs.remove ("/sdcard/Chatlog.v2/" + room);
      replier.reply (room + "에 저장된 채팅기록이 리셋되었습니다.");
      
    } else {
      replier.reply("넌 뭐야");
    }
    }
    if (msg.startsWith(".리셋 ")/* && sender == "ᴳᵉᵒⁿʷᵒᵒ ᴷⁱᵐ_건우"*/) {
      Fs.remove ("/sdcard/Chatlog.v2/" + msg.substr(4));
      replier.reply (msg.substr(4) + "에 저장된 채팅기록이 리셋되었습니다.");
    }
    
  } catch  (e) {
    Api.reload("Chatlog.v2");
    replier.reply (e);
  }
  
}
