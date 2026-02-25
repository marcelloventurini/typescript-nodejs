import SpeciesEnum from '../enums/species.enum.js';

type PetType = {
  id: number;
  name: string;
  age: number;
  species: SpeciesEnum;
  adopted: boolean;
};

export default PetType;
