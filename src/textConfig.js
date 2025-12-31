const textConfig = {
  landing: {
    title: "Hey Jigglypuff! 💕",
    subtitle: "I wanted to make you smile today, so I created something very special—just for you 💖",
    lastLine: "Tap below and let me show you what’s inside my heart ✨",
    button: "Open My Heart 💗",
    footer: "Made with lots love, only for you 💕",
    },
    landing: {
      title: "Happy New Year 2026! 🎉✨",
      subtitle: "May this year bring you smiles, success, love, and countless beautiful moments 💖",
      lastLine: "Tap below and let’s begin this magical New Year journey together ✨",
      button: "Start the Celebration 🎊💫",
      footer: "Here’s to new dreams, new beginnings, and a beautiful 2026 🎉🥂",
    },

  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "A Love Letter 💌",
    headerSubtitle: "From my heart to yours",
    letterHeaderTitle: "My Love",
    letterMessage: `My Cute love,

Every moment with you feels like a beautiful dream—one I never want to wake up from.

You are the most precious person in my life. Each day with you feels like a gift, and I’m thankful for every second we spend together. You inspire me, make me smile without trying, and make me want to be the best version of myself—always.
`,
    letterSignature: "💕`",
    envelopeClickHint: "Click to open the envelope",
    specialDeliveryText: "Special Delivery 💌",
    continueButton: "Continue To See More ✨"
    },
    letter: {
      headerTitle: "A New Year Letter 💌",
      headerSubtitle: "Warm wishes for 2026",
      letterHeaderTitle: "Dear Ji",
      letterMessage: `Dear Ji,

  As the year turns, may your days be filled with laughter, love, and new adventures. May every dream you follow bring you closer to happiness, and may each moment become a memory you’ll always cherish

  Wishing you a fantastic 2026 ahead!\n\nHappy New Year! 🎉\n`,
      letterSignature: "Sisir 😎",
      envelopeClickHint: "Click to open your New Year wish",
      specialDeliveryText: "Special Delivery 🎉",
      continueButton: "Continue To Celebrate ✨"
    },

  chillZone: {
    heading: "A Dedicated Playlist For You",
    subheading: "I Hope You'll Like It",
    chooseTrackHint: "Choose a track to start vibing ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { id: 1, title: "Dil Cheeze Tujhe Dedi", caption: "You own this heart — dedicated to you 💞" },
      { id: 2, title: "If the world was ending", caption: "Even if the world ends, I'd still find you 🤍" },
      { id: 3, title: "Dil ka Jo Haal hai", caption: "Tu Kaare Dil Bekarar 💞" }
    ]
    },
    chillZone: {
      heading: "New Year Playlist",
      subheading: "Celebrate with these festive tracks!",
      chooseTrackHint: "Choose a song to start the party ✨",
      continueButton: "Continue to Next ✨",
      tracks: [
        { id: 1, title: " Chanel", caption: "Classic style, timeless confidence ✨" },
        { id: 2, title: "Shaky Shaky", caption: "Let loose and dance away the worries 🎉" },
        { id: 3, title: "APT", caption: "Cool vibes, late nights, city lights 🌃✨" }
      ]
    },

  cards: {
    heading: "Some Special Cards For You",
    subheading: "Click each card to reveal a special message!",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start by tapping any card above ✨",
      discovered: (n, total) => `${n} of ${total} messages discovered! Keep exploring 💕`,
      complete: "Amazing! You've discovered all the messages! 🎉"
    },
    popup: {
      title: "All Messages Unlocked!",
      message: "Each message is a piece of my heart that belongs to you forever. ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay here a bit longer"
    },
    cardMessages: [
      "You're my favorite kind of memory — the one that makes me smile without even realizing it. 💖",
      "I did like you and i still respect what you said about being good friends. ✨",
      "The little things you do — your expressions, your laughter, the way you talk — they've all become my favorite details. 🌸"
    ]
    },
    cards: {
      heading: "New Year Wishes",
      subheading: "Tap each card for a special New Year message!",
      tapLabel: "✨ Tap!",
      progress: {
        start: "Start by tapping any card above ✨",
        discovered: (n, total) => `${n} of ${total} wishes discovered! Keep celebrating! 🎉`,
        complete: "Awesome! You've revealed all the wishes! 🎊"
      },
      popup: {
        title: "All Wishes Unlocked!",
        message: "May every wish come true for you in 2026! ✨",
        openFinal: "Open the Final Letter 💌",
        stay: "Stay and celebrate more!"
      },
      cardMessages: [
        "Wishing you a year full of smiles and happy moments! 🎉💖",
        "May 2026 bring you joy, love, and little miracles every day 🎊💫",
        "May every day sparkle with positivity and love! 🎉"
      ]
    },

  finalLetter: {
    title: "Final Love Letter",
    sealingText: "Sealing your letter...",
    sealButton: "Seal this Letter 💌",
    restartButton: "Restart",
    sealedTitle: "Letter Sealed with Love",
    sealedSubtitle: "I Love You Always",
    typedDefault: "Always Yours 💕",
    experienceAgain: "Experience Again ✨",
    sendKissButton: "Send a Virtual Kiss 💋",
    dateLocale: "en-US",
    // Letter content
    letterGreeting: "My sweetest darling,",
    letterParagraphs: [
      "You're the calm I reach for and the laugh that brightens my day.",
      "I hope this tiny world made you smile — and whispered how much you mean to me.",
      "Only 2.5 months left... and I can't imagine these days without you. I love you so much and every moment with you is priceless.",
      "You are amazing in every way... and honestly, I feel like I haven't good enough for you."
    ],
    sealingNote: "Sealing will finish the experience."
    },
    finalLetter: {
      title: "Final New Year Wish",
      sealingText: "Sealing your wish...",
      sealButton: "Seal this Wish 🎉",
      restartButton: "Restart",
      sealedTitle: "Wish Sealed for 2026",
      sealedSubtitle: "Wishing You a Wonderful Year!",
      typedDefault: "Happy New Year! 🎊",
      experienceAgain: "Experience Again ✨",
      sendKissButton: "Send a Virtual Hug 🤗",
      dateLocale: "en-US",
      // Letter content
      letterGreeting: "Dear Madam ji,",
      letterParagraphs: [
        "May 2026 wrap you in love, joy, and sweet little miracles every day ✨",
        "Cherish every moment, dream big, and let your heart lead the way 💖",
        "I’m so grateful to have you in my life—here’s to more beautiful memories together 💫",
        "Wishing you a year as radiant, kind, and wonderful as your heart 🌹"
      ],
      sealingNote: "Sealing will finish the celebration."
    },

  common: {
    continue: "Continue to Next ✨",
    close: "Close",
    ok: "OK"
    }
};

export default textConfig;