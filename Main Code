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
      
       Log = Fs.read ("/sdcard/Chatlog.v2/" + room).split ("☆♡♧").reverse ();
       var b = [];
       
        for (i = 0; i < msg.substr(4) * 1 + 1; i++) {
          b.push(Log[i]);
        }
        
        replier.reply (
        "최근 "+ msg.substr(4) +"개의 메시지"+allsee +"\n방이름: "+room +b.join("\n\n") );
        b = [];
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
      Fs.remove ("/sdcard/Chatlog.v2/" + room);
      replier.reply (room + "에 저장된 채팅기록이 리셋되었습니다.");
    }
    if (msg.startsWith(".리셋 ")) {
      Fs.remove ("/sdcard/Chatlog.v2/" + msg.substr(4));
      replier.reply (msg.substr(4) + "에 저장된 채팅기록이 리셋되었습니다.");
    }
    
  } catch  (e) {
    replier.reply (e);
  }
  
}
