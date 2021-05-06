const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter an exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter an exercise name",
      },
      duration: {
        type: Number,
        required: "Please enter exercise duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
