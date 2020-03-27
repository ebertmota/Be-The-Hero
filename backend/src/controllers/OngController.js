const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const checkOngExists = await connection('ongs').where({
      name: name,
      email: email,
      whatsapp: whatsapp,
    }).select('*');

    if (checkOngExists.length > 0) {
      return res.status(400).json({ error: 'Ong already exists' })
    }
    
    const id = generateUniqueId();
    
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
    
    return res.json({ id });
  }
};