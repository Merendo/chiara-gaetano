import mongoose, { mongo } from "mongoose";

const credentialSchema = mongoose.Schema(
  {
    Username: {
      type: String,
      require: true,
      unique: true,
    },
    Password: {
      type: String,
      require: true,
      validate: checkPassword,
    },
  },
  { timestamps: true }
);

function checkPassword(value) {
  if (!this.Password) {
    message: (props) => `${props.value} password non valida!`;
    return false;
  } else if (this.Password.length < 5) {
    message: (props) =>
      `${props.value} la password deve essere di almeno 6 caratteri!`;
    return false;
  }

  return true;
}

export const Credential = mongoose.model("Credential", credentialSchema);
