import * as Yup from "yup";
import CatsModel from "../models/catsModel.js";

class CatRegisterController {
  async index(req, res) {
    const { any } = req.query;

    const allcats = await CatsModel.find({ any });

    return res.json(allcats);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required().max(2),
      qtyFemale: Yup.string().required(),
      qtyMale: Yup.string().required(),
      phone: Yup.string().required(), // Alterado para Yup.string()
      notes: Yup.string().required(),
    });

    const { name, city, state, qtyFemale, qtyMale, phone, notes } =
      req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation failure!" });
    }

    const catsRegister = await CatsModel.create({
      name,
      city,
      state,
      qtyFemale,
      qtyMale,
      phone,
      notes,
    });

    return res.json(catsRegister);
  }
}

export default new CatRegisterController();
