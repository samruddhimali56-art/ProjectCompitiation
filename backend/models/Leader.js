import mongoose from "mongoose";

const leaderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
    },

   category: {
  type: String,
  enum: [
    "King",
    "Queen",
    "Emperor",
    "Warrior",
    "Freedom Fighter",
    "Leader",
    "Scientist",
    "Philosopher",
    "Social Reformer",
    "President"
  ],
  required: true,
},

    empire: {
      type: String,
      required: true,
    },

    dynasty: String,

    birth: String,
    death: String,
    placeOfBirth: String,

    father: String,
    mother: String,

    reign: String,
    capital: String,


    image: {
      type: String,
      required: true,
    },


    biography: {
      type: String,
      required: true,
    },


    achievements: [String],

    battles: [String],

    quotes: [String],


    timeline: [
      {
        year: String,
        event: String,
      },
    ],


    gallery: [String],

    interestingFacts: [String],
  },

  {
    timestamps: true,
  }
);


export default mongoose.model("Leader", leaderSchema);