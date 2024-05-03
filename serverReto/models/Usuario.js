import mongoose from 'mongoose';

const User = mongoose.model('usuarios', new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  usuario: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  }
}));

export default User