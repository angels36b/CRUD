import Item from "../models/Items.js";

const create = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    return res.json({
      msg: "Item creado satisfactoriamente",
      item,
    });
  } catch (error) {
    return res.status(500).json({
        msg:'Error al crear item',
        error,
    })
  }
};

const read = async (req, res) => {

  try {
    const items = await Item.find(req.query);
     return res.json({
        msg: 'Items encontrados en la tabla',
        items,
       
      })
  } catch (error) {
      return res.status(500).json({
        msg:'Error al buscar items',
        error, //regresa el mensaje del error.
      })
  }
  
};
const update = () => {};

const remove = () => {};

export { create, read, remove, update };
