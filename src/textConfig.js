const textConfig = {
  landingLove: {
    title: "Hi there, my lovely Jigglypuff! 💕💕",
    subtitle: "I made a little surprise to make you smile today—something special just for you 💖",
    lastLine: "Tap below and discover a piece of my heart ✨",
    button: "Unlock My Heart 💗",
    footer: "Made with so much love, just for you 💕",
  },

  landingNewYear: {
    title: "Happy New Year 2083! 🎉✨",
    subtitle: "May this year bring you smiles, success, love, and countless beautiful moments 💖",
    lastLine: "Tap below and let’s begin this magical New Year journey together ✨",
    button: "Start the Celebration 🎊💫",
    footer: "Here’s to new dreams, new beginnings, and a beautiful 2026 🎉🥂",
  },

  letterLove: {
    headerTitle: "A Little Love Note 💌",
    headerSubtitle: "Straight from my heart to yours",
    letterHeaderTitle: "My Dearest",
    letterMessage: `My Cute love,

Every moment by your side feels like a dream I wish would last forever 💫

You’re the most important person in my life...`,
    letterSignature: "💕",
    envelopeClickHint: "Click to open the envelope",
    specialDeliveryText: "Special Delivery 💌",
    continueButton: "Continue To See More ✨"
  },

  letterNewYear: {
    headerTitle: "A New Year Letter 💌",
    headerSubtitle: "Warm wishes for 2026",
    letterHeaderTitle: "Dear Ji",
    letterMessage: `Dear Ji,

As the year turns, may your days be filled with laughter, love, and new adventures 🎉`,
    letterSignature: "Sisir 😎",
    envelopeClickHint: "Click to open your New Year wish",
    specialDeliveryText: "Special Delivery 🎉",
    continueButton: "Continue To Celebrate ✨"
  },

  chillZoneLove: {
    heading: "A Dedicated Playlist For You",
    subheading: "I Hope You'll Like It",
    chooseTrackHint: "Choose a track to start vibing ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { id: 1, title: "Dil Cheeze Tujhe Dedi", caption: "You own this heart 💞" },
      { id: 2, title: "If the world was ending", caption: "I'd still find you 🤍" },
      { id: 3, title: "Dil ka Jo Haal hai", caption: "Tu Kaare Dil Bekarar 💞" }
    ]
  },

  chillZoneNewYear: {
    heading: "New Year Playlist",
    subheading: "Celebrate with festive tracks!",
    chooseTrackHint: "Choose a song to start the party ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { id: 1, title: "Chanel", caption: "Classic style ✨" },
      { id: 2, title: "Shaky Shaky", caption: "Let loose 🎉" },
      { id: 3, title: "APT", caption: "City lights 🌃✨" }
    ]
  },

  cardsLove: {
    heading: "Some Special Cards For You",
    subheading: "Click each card to reveal a special message!",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start by tapping any card above ✨",
      discovered: (n, total) => `${n} of ${total} messages discovered! 💕`,
      complete: "All messages discovered! 🎉"
    },
    popup: {
      title: "All Messages Unlocked!",
      message: "Each message is a piece of my heart ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay here a bit longer"
    },
    cardMessages: [
      "You’re my favorite memory 💖",
      "I still respect you. ✨",
      "Your laughter is my favorite detail 🌸"
    ]
  },

  cardsNewYear: {
    heading: "New Year Wishes",
    subheading: "Tap each card for a message!",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start tapping ✨",
      discovered: (n, total) => `${n} of ${total} wishes discovered! 🎉`,
      complete: "All wishes revealed! 🎊"
    },
    popup: {
      title: "All Wishes Unlocked!",
      message: "May all wishes come true ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay and celebrate more!"
    },
    cardMessages: [
      "Love & happiness 💖🎉",
      "Peace & miracles 💫💞",
      "Joy & success ✨💗"
    ]
  },

  finalLetterLove: {
    title: "Final Love Letter",
    sealingText: "Sealing your letter...",
    sealButton: "Seal this Letter 💌",
    restartButton: "Restart",
    sealedTitle: "Letter Sealed with Love",
    sealedSubtitle: "I Love You Always",
    typedDefault: "Always Yours 💕",
    sendKissButton: "Send a Virtual Kiss 💋",
    letterGreeting: "My sweetest darling,",
    letterParagraphs: [
      "You're the calm I reach for 💕",
      "I hope this made you smile ✨",
      "I love you so much 💖"
    ]
  },

  finalLetterNewYear: {
    title: "Final New Year Wish",
    sealingText: "Sealing your wish...",
    sealButton: "Seal this Wish 🎉",
    restartButton: "Restart",
    sealedTitle: "Wish Sealed for 2026",
    sealedSubtitle: "Happy New Year!",
    typedDefault: "Happy New Year! 🎊",
    sendKissButton: "Send a Virtual Hug 🤗",
    letterGreeting: "Dear Madam ji,",
    letterParagraphs: [
      "May 2083 bring love ✨💖",
      "Follow your dreams 💫",
      "You are special 💕"
    ]
  },

  common: {
    continue: "Continue to Next ✨",
    close: "Close",
    ok: "OK"
  }
};

export default textConfig;
