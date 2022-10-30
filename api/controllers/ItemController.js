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
const readById = async (req, res) => {
  const {id} = req.params;
  try {
    const item = await Item.findById(id);
    return res.json({
      msg: 'Item puntual ubicado',
      item,
    })
    
  } catch (error) {
    return res.json({
      msg: 'Error al buscar por id',
      error,
    });
  }
}


const update = async (req, res) => {
 const {id } = req.params;
  try {
    Item.findByIdAndUpdate(id, req.body);
    return res.json({
      msg: 'Item modificado',
      item,
    })
    
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar item',
      error,
    })
    
  }
};

const remove = () => {};

export { create, read,readById, remove, update };
