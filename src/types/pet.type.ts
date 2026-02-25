import SpeciesEnum from '../enums/species.enum.js';

type PetType = {
  id: number;
  name: string;
  birth: Date;
  species: SpeciesEnum;
  adopted: boolean;
};

export default PetType;
