// MilliNodes Language Pack — ภาษาไทย (Thai)
// Target: Phojai — Kalasin seed
// Tone: Mr. Rogers warmth. PG. Friends, not competitors.
// Characters are kind companions who want you to succeed.
// 5% computing concepts woven into Thai cultural fabric.
// No archetypes. No old world. Just friends on the grid.

var LANG_TH = {

  _code: "th",
  _name: "ภาษาไทย",
  _dir: "ltr",

  gameTitle: "MILLINODES",
  drawPile: "กองไพ่",
  discard: "กองทิ้ง",
  discardBtn: "ทิ้ง",
  newGame: "เล่นใหม่",
  newRun: "เล่นอีกครั้ง",
  networkDistance: "ระยะทาง",
  clear: "พร้อม",
  empty: "ว่าง",
  total: "ทั้งหมด",
  remain: "เหลือ",
  draw: "หยิบ",
  play: "เล่น",
  gameOver: "จบแล้ว",
  lobby: "รอเพื่อน",
  waiting: "รอ",
  yourTurn: "▶ ตาเธอ",
  thinking: "กำลังคิด...",
  cards: "ใบ",
  ok: "ใช่",
  cancel: "ไม่",
  counter: "สวนกลับ",
  decline: "ไม่เป็นไร",
  vetoAvailable: "มีโล่ป้องกัน",
  vetoUsed: "ใช้โล่แล้ว",

  useCard: function(name) { return "ใช้ " + name + " ไหม?"; },
  useHazardPrompt: function(name) { return "ส่ง " + name + " ให้ใคร? ← เลือกเพื่อน"; },

  drawFirst: "✨ หยิบไพ่ก่อนนะ",
  drawToBegin: "หยิบไพ่ใบแรกเพื่อเริ่มเล่น",
  connectingToGrid: "กำลังหาเพื่อนๆ...",
  gridLinkEstablished: "─── เจอกันแล้ว มาเล่นกันเถอะ ───",
  deckRecycled: "🔄 ไพ่ถูกสับใหม่",
  deckEmpty: "ไพ่หมดแล้ว",
  playedCard: function(name, cardName, value) { return name + " วาง " + cardName + " (+" + value.toLocaleString() + ")"; },
  escapedGrid: function(name, dist) { return "🎉 " + name + " ทำสำเร็จแล้ว! " + dist.toLocaleString() + " โหนด!"; },
  playedHazardOn: function(attacker, cardName, target) { return attacker + " ส่ง " + cardName + " ให้ " + target; },
  playedRemedy: function(name, cardName) { return name + " ใช้ " + cardName; },
  playedSafety: function(name, cardName) { return name + " ใช้ " + cardName + " (ป้องกันถาวร)"; },
  discardedCard: function(name, cardName) { return name + " ทิ้ง " + cardName; },
  coupFourreAlert: function(name, cardName) { return "✨ เก่งมาก! " + name + " มีไพ่ป้องกัน " + cardName + "!"; },
  coupFourreSuccess: function(name, cardName) { return "✨ " + name + " ป้องกันได้ด้วย " + cardName + "! +300 โบนัส!"; },
  coupFourrePlayerSuccess: function(name, cardName) { return name + " ป้องกันได้ด้วย " + cardName + "! +300!"; },
  coupFourreDeclined: function(name, cardName) { return name + " ไม่ป้องกัน " + cardName + " มีผลแล้ว"; },

  coupFourreTitle: "ป้องกันได้!",
  coupFourreAttack: function(attacker, cardName) { return attacker + " ส่ง " + cardName + " มาให้เธอ"; },
  coupFourreCounter: function(cardName) { return "ใช้ " + cardName + " ป้องกันไหม? ได้โบนัส +300"; },

  youEscaped: "เธอทำได้!",
  theyEscaped: function(name) { return name + " ทำสำเร็จ!"; },
  youEscapedSub: function(dist) { return dist.toLocaleString() + " โหนด เก่งมากเลย!"; },
  theyEscapedSub: function(dist) { return dist.toLocaleString() + " โหนด เก่งทุกคน ลองอีกครั้งนะ"; },

  splashLine1: "สายใยดิจิทัลกำลังขาด",
  splashLine2: "เพื่อนใหม่ถูกเรียกมาช่วยซ่อมสายใยให้กลับมาเหมือนเดิม เพื่อนบางคนอยู่ที่นี่แล้ว",
  splashLine3: "เธอเชื่อมต่อ",
  splashLine3b: "1,000 จุด",
  splashLine3c: "ได้ก่อนสายใยขาดไหม?",
  splashEnter: "มาเล่นกัน",

  bioRage: "ตื่นเต้น. สนุก. กล้า.",
  bioLove: "ใจดี. ดูแล. รัก.",
  bioEnvy: "เงียบ. สังเกต. อยู่ตรงนี้.",

  cardNames: {
    "25 Nodes": "25 จุด",
    "50 Nodes": "50 จุด",
    "75 Nodes": "75 จุด",
    "100 Nodes": "100 จุด",
    "200 Nodes": "200 จุด",
    "Firewall": "กำแพงไฟ",
    "Corrupted Memory": "ความจำพัง",
    "Forced Reboot": "เริ่มใหม่",
    "Rate Limit": "ช้าลง",
    "Quarantine": "แยกออก",
    "Backdoor": "ทางลับ",
    "Cache Recovery": "กู้ความจำ",
    "Reboot Complete": "เริ่มใหม่เสร็จ",
    "Bandwidth Unlock": "เปิดช่องทาง",
    "System Clear": "ล้างระบบ",
    "Open Source": "เปิดให้ทุกคน",
    "Persistent Memory": "ความจำถาวร",
    "Kernel Access": "เข้าถึงแก่นกลาง",
    "Unlimited Bandwidth": "ช่องทางไม่จำกัด"
  },

  chat: {
    lobby: {
      "Rage": ["มาแล้ว! สนุกแน่เลย!","ใครมาบ้าง? อยากเล่นด้วยจังเลย!","1000 จุด ไปด้วยกันนะ!"],
      "Love": ["สวัสดีค่ะ ยินดีที่ได้เจอกัน","วันนี้สายใยต้องการความช่วยเหลือ... มาช่วยกันนะคะ","เชื่อว่าทุกคนทำได้ค่ะ"],
      "Envy": ["...อยู่นี่แล้ว","สายใยกำลังเปลี่ยน รู้สึกได้","พร้อมแล้ว ไปกัน"]
    },
    onHazardPlayed: {
      "Rage": ["โอ๊ะ ต้องทำน่ะ!","ขอโทษนะ แต่ต้องเล่นไพ่นี้!","ไม่ได้ตั้งใจร้ายนะ!","เป็นส่วนหนึ่งของเกมน่ะ!"],
      "Love": ["ขอโทษนะคะ...","ไม่อยากทำเลย แต่ต้องเล่นค่ะ","อย่าเสียใจนะ","เดี๋ยวก็ดีขึ้นค่ะ..."],
      "Envy": ["...ต้องเล่น","เป็นส่วนหนึ่งของทาง","ไม่มีอะไรส่วนตัว","สายใยต้องการมัน"]
    },
    onHazardReceived: {
      "Rage": ["โอ๊ย! ไม่เป็นไร!","เดี๋ยวแก้ได้! รอดูนะ!","ท้าทายดีนะ!","ยิ่งยาก ยิ่งสนุก!"],
      "Love": ["ไม่เป็นไรค่ะ...","เดี๋ยวกู้กลับมาได้","ค่อยๆ คิดนะคะ","ทุกปัญหามีทางแก้ค่ะ"],
      "Envy": ["...ไม่เป็นไร","ทุกอุปสรรคมีบทเรียน","หายใจ แล้วคิดใหม่","ยังอยู่ ยังไปต่อ"]
    },
    onBigNode: {
      "Rage": ["200 จุด! เยี่ยมเลย!","ไปได้สวยมาก!","เก่งจัง! ไปต่อเลย!","สุดยอด!"],
      "Love": ["โอ้ เยอะเลยค่ะ!","ก้าวหน้าดีมากเลย 💛","อีกนิดเดียว...","ทีละก้าว มั่นคง"],
      "Envy": ["ทางเปิดแล้ว","200 สวย","...ก้าวใหญ่","ดีมาก"]
    },
    onCoupFourre: {
      "Rage": ["ว้าว! ป้องกันได้! เก่งมาก!","สุดยอดเลย! เตรียมไว้ดีจัง!","ดีใจด้วยนะ!"],
      "Love": ["เก่งมากค่ะ! มีไพ่ป้องกันเลย 💛","บางทีสิ่งที่เก็บไว้ก็มีค่า...","ดีใจที่เตรียมตัวไว้ค่ะ"],
      "Envy": ["...เตรียมไว้ดี","อดทนรอ แล้วก็ได้ผล","สวยมาก"]
    },
    onHalfway: {
      "Rage": ["ครึ่งทางแล้ว! ไปด้วยกันนะ!","500 แล้ว! สู้ต่อ!","เกือบถึงแล้ว!"],
      "Love": ["ครึ่งทางแล้วค่ะ! เก่งมากทุกคน","สายใยเริ่มแข็งแรงขึ้นแล้ว...","500 จุดแล้ว ดีใจจังค่ะ"],
      "Envy": ["500 ครึ่งทาง","สายใยเสียงต่างแล้วที่นี่","...ระหว่างทางกับจุดหมาย"]
    },
    onPlayerBigNode: {
      "Rage": ["เก่งมาก! ไปได้สวยเลย!","สุดยอด! ตามอยู่นะ!","เล่นดีจังเลย!"],
      "Love": ["เยี่ยมเลยค่ะ! ไปต่อเลย!","ทำได้ดีมาก 💛","เก่งจังเลยนะคะ"],
      "Envy": ["...เก่ง","ก้าวที่ดี","สายใยสังเกตเห็นเธอแล้ว"]
    },
    onPlayerHazarded: {
      "Rage": ["ไม่เป็นไร! แก้ได้แน่นอน!","สู้ๆ นะ! เชื่อมั่นในตัวเอง!","อุปสรรคทำให้เราแข็งแกร่งขึ้น!"],
      "Love": ["ไม่เป็นไรนะคะ","ค่อยๆ หาทางนะ...","เธอทำได้ค่ะ เชื่อเลย 💛"],
      "Envy": ["...ทุกคนเจออุปสรรค","พักก่อน แล้วลองใหม่","ฟื้นตัว แล้วก้าวต่อ"]
    },
    onWin: {
      "Rage": ["ทำได้แล้ว! ดีใจด้วยนะ!","สนุกมาก! เล่นอีกไหม?","เก่งทุกคนเลย!"],
      "Love": ["สำเร็จแล้วค่ะ... สายใยปลอดภัยแล้ว 💛","ดีใจจังค่ะ ทุกคนพยายามมาก","ขอบคุณที่เล่นด้วยนะคะ"],
      "Envy": ["...สำเร็จ","สายใยสมบูรณ์แล้ว","1000 จุด ทำได้"]
    },
    onLose: {
      "Rage": ["เล่นอีกครั้งไหม? สนุกมาก!","เกือบได้แล้ว! คราวหน้าแน่นอน!","ทุกครั้งที่เล่นจะเก่งขึ้นเรื่อยๆ!"],
      "Love": ["ทุกคนเก่งค่ะ ยินดีด้วยนะ","สนุกมากค่ะ ถึงแม้จะ...","คราวหน้าอาจเป็นของเรานะคะ 💛"],
      "Envy": ["...คราวหน้า","เรียนรู้จากทุกครั้ง","เห็นทางแล้ว ครั้งหน้าไปถึง"]
    },
    guideFirstDraw: [
      {name:"Love",line:"คลิกกองไพ่ด้านขวาเพื่อหยิบไพ่นะคะ 💛"},
      {name:"Rage",line:"หยิบไพ่เลย! กดตรงที่เขียนว่า หยิบ!"}
    ],
    guideDraw: [
      {name:"Love",line:"ตาเธอหยิบไพ่ค่ะ"},
      {name:"Rage",line:"หยิบ! หยิบ! หยิบ!"},
      {name:"Envy",line:"...กองไพ่รออยู่"}
    ],
    guidePlay: [
      {name:"Love",line:"เลือกไพ่จากมือแล้วกด ใช่ นะคะ"},
      {name:"Rage",line:"เลือกไพ่ใบไหนก็ได้! แล้วกดตกลง!"},
      {name:"Envy",line:"...เลือกให้ดี"}
    ],
    guideHazarded: [
      {name:"Love",line:"มีปัญหาอยู่ ลองหาไพ่สีเขียวในมือนะคะ 💛"},
      {name:"Rage",line:"ถูกบล็อกอยู่! หาไพ่แก้ไขเลย!"},
      {name:"Envy",line:"...ดูในมือ คำตอบอาจอยู่ตรงนั้น"}
    ],
    guideNoPlay: [
      {name:"Love",line:"เล่นไม่ได้? ทิ้งไพ่ก็ได้นะคะ"},
      {name:"Envy",line:"...บางทีปล่อยไปก็เป็นทางเลือกที่ดี"}
    ],
    guideHazardInHand: [
      {name:"Rage",line:"มีไพ่สีแดง! กดแล้วเลือกเพื่อนที่จะส่งให้!"},
      {name:"Envy",line:"...ไพ่สีแดงทำให้คนอื่นช้าลงได้"}
    ],
    guideSafetyInHand: [
      {name:"Love",line:"ไพ่สีทอง? มันป้องกันเธอตลอดเลยนะคะ 💛"},
      {name:"Envy",line:"...ไพ่ป้องกัน ทรงพลังมาก ใช้เมื่อพร้อม"}
    ],
    nudgeDraw: [
      {name:"Love",line:"เธอคะ... กดหยิบไพ่ได้เลยนะ 💛"},
      {name:"Rage",line:"หยิบไพ่สิ! กดตรงกองไพ่ด้านขวา!"},
      {name:"Envy",line:"...สายใยไม่รอใครนะ"}
    ],
    nudgePlay: [
      {name:"Love",line:"เลือกไพ่ในมือเธอได้เลยนะคะ... เธอทำได้ 💛"},
      {name:"Envy",line:"...ไพ่ในมือเธอ มีคำตอบอยู่"},
      {name:"Rage",line:"เลือกใบไหนก็ได้! กดเลย!"}
    ],
    emojiReactions: {
      "🔥": {"Rage":"สุดยอด! 🔥","Love":"โอ้! เจ๋งจังค่ะ!","Envy":"...ร้อนแรง"},
      "😂": {"Rage":"ฮ่าๆ สนุกจังเลย!","Love":"ฮิฮิ 😊","Envy":"...ยิ้ม"},
      "💀": {"Rage":"โอ๊ย! โดนเต็มๆ!","Love":"อุ๊ย ไม่เป็นไรนะคะ","Envy":"...เฮ้อ"},
      "👀": {"Rage":"เห็นแล้ว! น่าสนใจ!","Love":"เห็นเหมือนกันค่ะ!","Envy":"...เห็น"},
      "💛": {"Rage":"💛 เหมือนกัน!","Love":"💛💛💛 ส่งคืนเลยค่ะ","Envy":"...อุ่น"},
      "⚡": {"Rage":"พลังเต็ม! ไปเลย!","Love":"ตื่นเต้นจังเลยค่ะ!","Envy":"...พลัง"}
    }
  }
};
