const userModel = requiere('../models/userModels');

const createUser = (req, res) => {
  // aqui dados seriam processados e enviados.
  const newUser = req.body.name;
  res.send(`Usuário ${newUser} criado com sucesso!`);
};

module.exports = {createUser};