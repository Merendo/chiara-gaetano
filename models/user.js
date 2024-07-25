import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema(
  {
    Presenza: {
      type: String,
      require: true,
    },
    Nome: {
      type: String,
      length: 20,
      require: true,
    },
    Cognome: {
      type: String,
      length: 20,
      require: true,
    },
    Telefono: {
      type: Number,
      length: 10,
      require: true,
      // validate: {
      //   validator: checkNumber,
      //   message: (props) => `${props.value} numero di telefono non valido!`,
      // },
    },
    Email: {
      type: String,
      require: true,
    },
    NumeroFamiglia: {
      type: Number,
      default: 0,
    },
    Intolleranze: {
      type: String,
      require: true,
    },
    IntolleranzeScritte: {
      type: String,
      length: 70,
    },
    Regime: {
      type: String,
    },
    Esigenze: {
      type: String,
      length: 70,
    },
    Accompagnatore: {
      type: String,
      require: true,
    },
    NomeA: {
      type: String,
      length: 20,
    },
    CognomeA: {
      type: String,
      length: 20,
    },
    Navetta: {
      type: String,
      require: true,
    },
    Serata: {
      type: String,
      require: true,
    },
    Extra: {
      type: String,
      length: 250,
    },
  },
  { timestamps: true }
);

function checkNumber(value) {
  if (this.Number.length != 10) return false;
}

export const User = mongoose.model("User", userSchema);
