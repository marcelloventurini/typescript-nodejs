import type { Request, Response } from "express";

const petList = [];

export default class PetController {
  createPet(req: Request, res: Response) {
    const newPet = req.body;
    petList.push(newPet);
    
    return res.status(201).json(newPet);
  }
}
