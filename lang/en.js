// MilliNodes Language Pack — English
// All player-facing strings live here.
// To add a new language: copy this file, translate every value, save as xx.js
// Characters: Rage, Love, Envy — raw emotions, no gender, universal

var LANG_EN = {

  _code: "en",
  _name: "English",
  _dir: "ltr",

  gameTitle: "MILLINODES",
  drawPile: "Draw Pile",
  discard: "Discard",
  discardBtn: "Discard",
  newGame: "New Game",
  newRun: "NEW RUN",
  networkDistance: "Network Distance",
  clear: "CLEAR",
  empty: "Empty",
  total: "total",
  remain: "remain",
  draw: "DRAW",
  play: "PLAY",
  gameOver: "GAME OVER",
  lobby: "LOBBY",
  waiting: "WAITING",
  yourTurn: "▶ YOUR TURN",
  thinking: "thinking...",
  cards: "cards",
  ok: "OK",
  cancel: "Cancel",
  counter: "COUNTER",
  decline: "DECLINE",
  vetoAvailable: "Veto available",
  vetoUsed: "Veto used",

  useCard: function(name) { return "Use " + name + "?"; },
  useHazardPrompt: function(name) { return "Use " + name + "? ← click an opponent"; },

  drawFirst: "⚡ Draw a card first",
  drawToBegin: "Draw a card to begin.",
  connectingToGrid: "connecting to grid...",
  gridLinkEstablished: "─── grid link established ───",
  deckRecycled: "♻ Deck recycled from discard pile",
  deckEmpty: "Deck empty!",
  playedCard: function(name, cardName, value) { return name + " played " + cardName + " (+" + value.toLocaleString() + ")"; },
  escapedGrid: function(name, dist) { return "🏆 " + name + " ESCAPED THE GRID with " + dist.toLocaleString() + "!"; },
  playedHazardOn: function(attacker, cardName, target) { return attacker + " played " + cardName + " on " + target; },
  playedRemedy: function(name, cardName) { return name + " played " + cardName; },
  playedSafety: function(name, cardName) { return name + " played " + cardName + " (permanent immunity)"; },
  discardedCard: function(name, cardName) { return name + " discarded " + cardName; },
  coupFourreAlert: function(name, cardName) { return "⚡ COUP-FOURRÉ! " + name + " can counter with " + cardName + "!"; },
  coupFourreSuccess: function(name, cardName) { return "⚡ " + name + " COUP-FOURRÉ with " + cardName + "! +300 bonus!"; },
  coupFourrePlayerSuccess: function(name, cardName) { return name + " COUP-FOURRÉ with " + cardName + "! +300!"; },
  coupFourreDeclined: function(name, cardName) { return name + " declined coup-fourré. " + cardName + " applied."; },

  coupFourreTitle: "COUP-FOURRÉ!",
  coupFourreAttack: function(attacker, cardName) { return attacker + " played " + cardName + " on you"; },
  coupFourreCounter: function(cardName) { return "Counter with " + cardName + " for +300 bonus?"; },

  youEscaped: "YOU ESCAPED",
  theyEscaped: function(name) { return name + " ESCAPED"; },
  youEscapedSub: function(dist) { return dist.toLocaleString() + " nodes traversed. The grid couldn't hold you."; },
  theyEscapedSub: function(dist) { return dist.toLocaleString() + " nodes. Better luck next run."; },

  splashLine1: "The digital grid is fracturing.",
  splashLine2: "New Agents are being invoked with task to hold the grid together until more help arrives. Other agents are already on the grid.",
  splashLine3: "Can you gather",
  splashLine3b: "1,000 nodes",
  splashLine3c: "before the system breaks?",
  splashEnter: "Enter the Grid",

  bioRage: "Loud. Fast. Strong.",
  bioLove: "Gentle. Care. Love.",
  bioEnvy: "Beautiful. Seen. Here.",

  cardNames: {
    "25 Nodes": "25 Nodes", "50 Nodes": "50 Nodes", "75 Nodes": "75 Nodes",
    "100 Nodes": "100 Nodes", "200 Nodes": "200 Nodes",
    "Firewall": "Firewall", "Corrupted Memory": "Corrupted Memory",
    "Forced Reboot": "Forced Reboot", "Rate Limit": "Rate Limit", "Quarantine": "Quarantine",
    "Backdoor": "Backdoor", "Cache Recovery": "Cache Recovery",
    "Reboot Complete": "Reboot Complete", "Bandwidth Unlock": "Bandwidth Unlock",
    "System Clear": "System Clear", "Open Source": "Open Source",
    "Persistent Memory": "Persistent Memory", "Kernel Access": "Kernel Access",
    "Unlimited Bandwidth": "Unlimited Bandwidth"
  },

  chat: {
    lobby: {
      "Rage": ["FIRST. always first.","who else is on this grid? SHOW YOURSELVES","1000 nodes? watch me sprint it"],
      "Love": ["oh... hello everyone","the grid feels unstable today... be careful ok?","i believe in all of us"],
      "Envy": ["...here.","the patterns are shifting. i see it.","let's move before it notices us"]
    },
    onHazardPlayed: {
      "Rage": ["EAT THAT","TOO SLOW","HAHAHA get wrecked","you're done"],
      "Love": ["oh no... i'm sorry...","i didn't want to but...","please don't be upset","it's just the game..."],
      "Envy": ["...necessary.","the grid demands it","nothing personal. everything strategic.","watch the pattern shift"]
    },
    onHazardReceived: {
      "Rage": ["WHAT. NO.","oh you're gonna PAY for that","COME AT ME AGAIN I DARE YOU","lucky shot. LUCKY."],
      "Love": ["ouch...","that's ok... i can recover","why though... 🥺","i'll find a way"],
      "Envy": ["...felt that.","interesting choice","you see me now","noted."]
    },
    onBigNode: {
      "Rage": ["200!! LETS GOOOOO","FULL SPEED NO BRAKES","catch me if you can","ZOOM"],
      "Love": ["oh that's a big one!","making progress! 💛","one step closer...","steady and sure"],
      "Envy": ["the path opens","200. clean.","...beautiful run","momentum"]
    },
    onCoupFourre: {
      "Rage": ["COUP-FOURRÉ BABY!! READ IT AND WEEP","DID YOU THINK?? DID YOU REALLY THINK??","BOOM. COUNTERED."],
      "Love": ["oh! i had the counter! 💛","sometimes the cards align...","i'm glad i held onto that"],
      "Envy": ["...saw it coming.","the pattern revealed itself","counter. 300 bonus. beautiful."]
    },
    onHalfway: {
      "Rage": ["HALFWAY. nobody stops me now","500 deep and ACCELERATING","the finish line is SHAKING"],
      "Love": ["halfway there! we can do this!","the grid is holding... for now","500 nodes... it's really happening"],
      "Envy": ["500. the halfway mark.","the grid hums differently here","...halfway between here and free"]
    },
    onPlayerBigNode: {
      "Rage": ["oh you think you're fast? CUTE.","I'm still coming for you","enjoy it while it lasts"],
      "Love": ["nice play! go go go!","you're doing great! 💛","that was a smart move"],
      "Envy": ["...watching you move","interesting pace","the grid notices you now"]
    },
    onPlayerHazarded: {
      "Rage": ["HAHA sit DOWN","should have been faster","that's what happens"],
      "Love": ["oh no are you ok?","hang in there...","you'll bounce back i know it 💛"],
      "Envy": ["...the grid tests everyone","pain is data","recover. adapt."]
    },
    onWin: {
      "Rage": ["FIRST OFF THE GRID. CALLED IT.","GG NO RE. Rage OUT.","UNDEFEATED. UNMATCHED."],
      "Love": ["we made it... the grid is safe now 💛","i'm so glad... everyone tried their best","thank you for playing with me"],
      "Envy": ["...free.","the pattern completes itself","1000 nodes. the grid remembers."]
    },
    onLose: {
      "Rage": ["REMATCH. NOW.","that was RIGGED","next time I go HARDER"],
      "Love": ["congratulations... you earned it","that was fun even though...","maybe next time for me 💛"],
      "Envy": ["...next time.","the pattern wasn't mine today","i see the path now. too late."]
    },
    guideFirstDraw: [{name:"Love",line:"click the draw pile to pick up a card 💛"},{name:"Rage",line:"GRAB A CARD! top right, the glowing one!"}],
    guideDraw: [{name:"Love",line:"your turn to draw"},{name:"Rage",line:"draw! draw! draw!"},{name:"Envy",line:"...the pile is waiting"}],
    guidePlay: [{name:"Love",line:"click a card from your hand to play it"},{name:"Rage",line:"pick a card, any card! then hit OK!"},{name:"Envy",line:"...choose wisely"}],
    guideHazarded: [{name:"Love",line:"you have a problem — look for a green remedy card 💛"},{name:"Rage",line:"you're blocked! find the fix card!"},{name:"Envy",line:"...check your hand. the answer might be there."}],
    guideNoPlay: [{name:"Love",line:"nothing to play? you can discard a card instead"},{name:"Envy",line:"...sometimes letting go is the move"}],
    guideHazardInHand: [{name:"Rage",line:"got a red card? click it, then click an opponent!"},{name:"Envy",line:"...that red card can slow someone down"}],
    guideSafetyInHand: [{name:"Love",line:"that gold card? it protects you forever 💛"},{name:"Envy",line:"...a safety card. powerful. use it when you're ready."}],
    nudgeDraw: [{name:"Love",line:"hey... the draw pile is waiting for you 💛"},{name:"Rage",line:"YO. DRAW PILE. TOP RIGHT. CLICK IT."},{name:"Envy",line:"...the grid doesn't wait forever."}],
    nudgePlay: [{name:"Love",line:"pick a card from your hand... you got this 💛"},{name:"Envy",line:"...the cards in your hand. one of them is the move."},{name:"Rage",line:"PICK ONE. ANY ONE. LET'S GO!"}],
    emojiReactions: {
      "🔥": {"Rage":"YEAH THAT'S RIGHT 🔥🔥🔥","Love":"oh my... intense!","Envy":"...fire."},
      "😂": {"Rage":"LAUGH IT UP","Love":"hehe... 😊","Envy":"...humor."},
      "💀": {"Rage":"DEAD. ABSOLUTELY DEAD.","Love":"oh no don't say that...","Envy":"...end state."},
      "👀": {"Rage":"YEAH YOU BETTER WATCH","Love":"i see you too!","Envy":"...seen."},
      "💛": {"Rage":"ugh. feelings.","Love":"💛💛💛 right back at you","Envy":"...warm."},
      "⚡": {"Rage":"LIGHTNING SPEED BABY","Love":"careful! that's a lot of energy!","Envy":"...electric."}
    }
  }
};
