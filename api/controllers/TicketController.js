import Item from "../models/Items"

const create = async (req, res) =>{
    try{

    }catch (error){
        
    }

    const item = await Item.create(req.body);
    return res.json({
        msg: 'Item creado',
        item,
    });
};

const read = () =>{

}
const update = () =>{

}

const remove = () =>{

}

export {
    create, read, remove, update
}