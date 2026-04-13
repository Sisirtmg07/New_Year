const textConfig = {
  landingLove: {
    title: "Hi there, my lovely Jigglypuff! 💕💕",
    subtitle: "I made a little surprise to make you smile today 💖",
    lastLine: "Tap below and discover a piece of my heart ✨",
    button: "Unlock My Heart 💗",
    footer: "Made with so much love, just for you 💕",
  },

  landingNewYear: {
    title: "Happy New Year 2026! 🎉✨",
    subtitle: "May this year bring you smiles and success 💖",
    lastLine: "Let's begin this magical journey ✨",
    button: "Start the Celebration 🎊💫",
    footer: "Here's to 2026 🎉🥂",
  },

  letterLove: {
    headerTitle: "A Little Love Note 💌",
    headerSubtitle: "Straight from my heart to yours",
    letterHeaderTitle: "My Dearest",
    letterMessage: `My Cute love,

Every moment by your side feels like a dream I wish would last forever 💫

You inspire me every day...`,
    letterSignature: "💕",
    continueButton: "Continue To See More ✨"
  },

  letterNewYear: {
    headerTitle: "A New Year Letter 💌",
    headerSubtitle: "Warm wishes for 2026",
    letterHeaderTitle: "Dear Ji",
    letterMessage: `Dear Ji,

Wishing you a fantastic 2026 ahead 🎉`,
    letterSignature: "Sisir 😎",
    continueButton: "Continue To Celebrate ✨"
  },

  chillZoneLove: {
    heading: "A Dedicated Playlist For You",
    subheading: "I Hope You'll Like It",
    chooseTrackHint: "Choose a track ✨",
    continueButton: "Continue",
    tracks: [
      { id: 1, title: "Dil Cheeze Tujhe Dedi", caption: "You own this heart 💞" },
      { id: 2, title: "If the world was ending", caption: "I'd still find you 🤍" },
      { id: 3, title: "Dil ka Jo Haal hai", caption: "💞" }
    ]
  },

  chillZoneNewYear: {
    heading: "New Year Playlist 🎉",
    subheading: "Celebrate with music",
    chooseTrackHint: "Choose a song ✨",
    continueButton: "Continue",
    tracks: [
      { id: 1, title: "Chanel", caption: "Classic ✨" },
      { id: 2, title: "Shaky Shaky", caption: "Dance 🎉" },
      { id: 3, title: "APT", caption: "Vibes 🌃✨" }
    ]
  },

  cardsLove: {
    heading: "Some Special Cards For You",
    subheading: "Tap to reveal messages",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start tapping ✨",
      discovered: (n, total) => `${n} of ${total} messages discovered 💕`,
      complete: "All messages unlocked 🎉"
    },
    cardMessages: [
      "You're my favorite memory 💖",
      "I respect you always ✨",
      "Your laughter is my favorite 🌸"
    ]
  },

  cardsNewYear: {
    heading: "New Year Wishes 🎉",
    subheading: "Tap each card",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start tapping ✨",
      discovered: (n, total) => `${n} of ${total} wishes discovered 🎉`,
      complete: "All wishes revealed 🎊"
    },
    cardMessages: [
      "Love 💖",
      "Peace 💫",
      "Happiness ✨"
    ]
  },

  finalLetterLove: {
    title: "Final Love Letter",
    sealButton: "Seal 💌",
    typedDefault: "Always Yours 💕",
    letterGreeting: "My sweetest darling,",
    letterParagraphs: [
      "You're my calm 💕",
      "I love you 💖"
    ]
  },

  finalLetterNewYear: {
    title: "Final New Year Wish 🎉",
    sealButton: "Seal 🎉",
    typedDefault: "Happy New Year 🎊",
    letterGreeting: "Dear Madam ji,",
    letterParagraphs: [
      "May 2026 bring love 💖",
      "Stay happy ✨"
    ]
  },

  common: {
    continue: "Continue ✨",
    close: "Close",
    ok: "OK"
  }
};

export default textConfig;