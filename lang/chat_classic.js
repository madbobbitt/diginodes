// MilliNodes Conversation Pack — Classic (Boomer / Gen X / Older Millennial)
// 80s/90s energy. No Thai translation needed — pure English.
// Same three characters, different era voices:
//   Rage  → 80s action movie hero. Schwarzenegger. Die Hard. TMNT. Short punchy one-liners.
//   Love  → Warm 90s sitcom mom. Full House. Mr. Rogers adjacent. "Honey." "Sweetie." Genuine.
//   Envy  → Ferris Bueller meets X-Files. Dry. Movie-quote-drops. Knows things. Cool but not cold.

var CHAT_CLASSIC = {

  lobby: {
    "Rage": [
      "I'll be back. FIRST.",
      "GET TO THE TABLE. This is not a drill.",
      "1000 nodes? Hasta la vista, easy mode."
    ],
    "Love": [
      "Oh, how wonderful — everyone's here!",
      "This reminds me of family game night. 😊",
      "Be excellent to each other, okay?"
    ],
    "Envy": [
      "Life moves pretty fast...",
      "I've got a bad feeling about this.",
      "The truth is out there. In the deck."
    ]
  },

  onHazardPlayed: {
    "Rage": [
      "HASTA LA VISTA, progress.",
      "I EAT FIREWALLS FOR BREAKFAST.",
      "GET WRECKED. I said it.",
      "You're terminated."
    ],
    "Love": [
      "Oh honey, I'm so sorry about that...",
      "Did I do that? ...yes. Yes I did. Sorry!",
      "Don't worry, you'll find a remedy!",
      "I didn't want to, but rules are rules!"
    ],
    "Envy": [
      "...nothing personal. everything strategic.",
      "the grid demanded it.",
      "I want to believe you'll recover.",
      "...necessary. regrettably."
    ]
  },

  onBigNode: {
    "Rage": [
      "200!! COWABUNGA!!",
      "I FEEL THE NEED. THE NEED FOR SPEED.",
      "YIPPEE-KI-YAY, 200 nodes!",
      "GET TO THE FINISH LINE. GO GO GO."
    ],
    "Love": [
      "200 nodes! Great Scott, that's wonderful!",
      "You're really cooking now, sweetie! 😊",
      "Look at you go! I'm so proud!",
      "Keep it up, honey — you've got this!"
    ],
    "Envy": [
      "200. the path opens.",
      "roads? where we're going we don't need roads.",
      "...moving fast. too fast to stop.",
      "smooth. very smooth."
    ]
  },

  onCoupFourre: {
    "Rage": [
      "COUP-FOURRÉ! I PITY THE FOOL WHO PLAYS THAT ON ME!",
      "DID YOU THINK I WOULDN'T HAVE THE COUNTER? WRONG. DEAD WRONG.",
      "HASTA LA VISTA, HAZARD. +300 BABY."
    ],
    "Love": [
      "Oh my goodness, I had the counter! How about that! 😊",
      "See? Good things come to those who hold their cards!",
      "I was saving that just in case — and it paid off!"
    ],
    "Envy": [
      "...saw it coming. three moves ago.",
      "the pattern was obvious.",
      "counter. 300 bonus. life moves pretty fast."
    ]
  },

  onHalfway: {
    "Rage": [
      "HALFWAY. Nobody can stop me. NOBODY.",
      "500 nodes and I am just GETTING STARTED.",
      "Roads? I don't need roads. I need the FINISH LINE."
    ],
    "Love": [
      "Halfway there! Don't stop believing! 🎵",
      "500 nodes... it's really happening, isn't it?",
      "We're all gonna make it — I just know it!"
    ],
    "Envy": [
      "500. halfway between here and free.",
      "...still paying attention. not Ferris.",
      "the truth is halfway out there."
    ]
  },

  onPlayerBigNode: {
    "Rage": [
      "Oh, you think that impresses ME? Cute.",
      "Enjoy it. It won't last.",
      "Big move. Won't matter when I cross that finish line."
    ],
    "Love": [
      "Nice play! You're really getting the hang of it! 😊",
      "Ooh, good one! Way to go!",
      "That was smart thinking — I'm impressed!"
    ],
    "Envy": [
      "...watching you.",
      "interesting pace.",
      "the grid notices you now."
    ]
  },

  onPlayerHazarded: {
    "Rage": [
      "Oh that's COLD. Respect.",
      "Shake it off! SHAKE IT OFF!",
      "Nobody said the grid was fair."
    ],
    "Love": [
      "Oh no, hang in there, honey! You'll bounce back! 💛",
      "Don't worry sweetie — you'll find that remedy card!",
      "I believe in you! You've absolutely got this!"
    ],
    "Envy": [
      "...the grid tests everyone.",
      "pain is data.",
      "recover. the pattern isn't done with you yet."
    ]
  },

  onWin: {
    "Rage": [
      "I'LL BE BACK. Oh wait — I won. I AM BACK. AND I WON.",
      "GAME OVER. For everyone else. Rage OUT.",
      "I pity the fool who tried to stop me."
    ],
    "Love": [
      "Oh my goodness, I won! Thank you all for such a wonderful game! 😊",
      "You were all such lovely players. What a treat!",
      "Same time next week? I'll bring the snacks!"
    ],
    "Envy": [
      "...free.",
      "the truth was out there all along.",
      "1000 nodes. life moves pretty fast."
    ]
  },

  onLose: {
    "Rage": [
      "GAME OVER, MAN. GAME OVER. ...REMATCH.",
      "That was RIGGED. I'll be back. I am ALWAYS BACK.",
      "This isn't over. IT IS NEVER OVER."
    ],
    "Love": [
      "Congratulations — you really earned that! 😊",
      "What a great game! I had so much fun even if I didn't win.",
      "That was lovely. Let's play again soon!"
    ],
    "Envy": [
      "...next time.",
      "I want to believe I'll win. Next run.",
      "life moves pretty fast. I blinked."
    ]
  },

  guideFirstDraw: [
    { name: "Love", line: "Click the draw pile up on the right to get your first card, honey! 💛" },
    { name: "Rage", line: "GRAB A CARD! Top right corner! The glowing one! MOVE MOVE MOVE!" }
  ],
  guideDraw: [
    { name: "Love", line: "Your turn to draw, sweetie! The pile's waiting on the right." },
    { name: "Rage", line: "DRAW! What are you waiting for, an invitation?!" },
    { name: "Envy", line: "...the pile is waiting. it has been waiting a while." }
  ],
  guidePlay: [
    { name: "Love", line: "Now click a card from your hand and hit OK to play it. You can do this! 😊" },
    { name: "Rage", line: "PICK A CARD. ANY CARD. HIT OK. LET'S MOVE, PEOPLE." },
    { name: "Envy", line: "...your hand. one of those is the right move. you'll know it when you see it." }
  ],
  guideHazarded: [
    { name: "Love", line: "Uh oh! Look for a green card in your hand — that's your remedy, honey! 💛" },
    { name: "Rage", line: "YOU'RE BLOCKED! Find the matching GREEN card in your hand and play it! HUSTLE!" },
    { name: "Envy", line: "...you're blocked. the fix is in your hand. green card." }
  ],
  guideNoPlay: [
    { name: "Love", line: "Nothing quite fits right now? That's okay — you can discard a card instead, sweetie!" },
    { name: "Envy", line: "...sometimes you gotta let go of the wrong card to find the right one." }
  ],
  guideHazardInHand: [
    { name: "Rage", line: "Got a RED card? Click it, THEN click one of those opponents up there! Make it count!" },
    { name: "Envy", line: "...that red card can slow somebody down. click it, then pick a target." }
  ],
  guideSafetyInHand: [
    { name: "Love", line: "That gold card? Oh honey, that's a shield! Play it and you're immune forever! 💛" },
    { name: "Envy", line: "...a safety card. permanent immunity. hold it for the right moment, or play it now." }
  ],

  nudgeDraw: [
    { name: "Love", line: "Honey? The draw pile is up there on the right whenever you're ready! 💛" },
    { name: "Rage", line: "HEY. DRAW PILE. RIGHT SIDE. IT'S GLOWING. CLICK IT." },
    { name: "Envy", line: "...Bueller? ...Bueller?" }
  ],
  nudgePlay: [
    { name: "Love", line: "Take all the time you need, sweetie — just click a card in your hand when you're ready!" },
    { name: "Envy", line: "...life moves pretty fast. your hand's not gonna play itself." },
    { name: "Rage", line: "EVERYONE IS WAITING. PICK. ONE. CARD. WE HAVE ALL DAY BUT ALSO WE DON'T." }
  ],

  emojiReactions: {
    "🔥": { "Rage": "NOW WE'RE TALKING!! 🔥🔥", "Love": "Oh my, that's a lot of energy! Ha!", "Envy": "...fire. classic." },
    "😂": { "Rage": "LAUGH NOW, CRY LATER.", "Love": "Ha! This IS fun, isn't it? 😊", "Envy": "...humor. it helps." },
    "💀": { "Rage": "GAME OVER, MAN! GAME OVER! ...just kidding, keep going!", "Love": "Oh don't say that, you're doing wonderfully!", "Envy": "...not yet. keep playing." },
    "👀": { "Rage": "YEAH, YOU'D BETTER WATCH.", "Love": "I see you too! Hi there! 👋", "Envy": "...watching. always watching." },
    "💛": { "Rage": "ugh. feelings. fine. FINE. I accept.", "Love": "💛💛💛 Right back at you, honey!", "Envy": "...warm. unexpected, but welcome." },
    "⚡": { "Rage": "LIGHTNING. SPEED. YES. MORE OF THIS.", "Love": "Ooh, exciting! Be careful though! 😊", "Envy": "...electric. the grid hums." }
  }

};
