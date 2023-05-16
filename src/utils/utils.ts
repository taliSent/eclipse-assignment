import { Pokemon } from "src/types/Pokemon";
import { PmUI } from "src/types/PokemonUI";

export const extractMainInfo = (pokemon: Pokemon): PmUI => {
  const { id, name, sprites, types, abilities, stats, species, forms } =
    pokemon;
  const pm = {
    id,
    name,
    types: types.map((item) => item.type.name),
    abilities: abilities.map((item) => item.ability.name),
    forms: forms.map((item) => item.name),
    species: species.name,
    img: sprites.front_default,
  };
  return pm;
};

export const debounce = (f: () => void, time: number) => {
  let timeoutId: any = null;
  const functionCall = () => {
    timeoutId = null;
    f();
  };
  return function debouncedFunction(...arg: any[]) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    } else {
      timeoutId = setTimeout(functionCall, time, ...arg);
    }
  };
};

export const sortTypes = (a: PmTypeT, b: PmTypeT) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const getTypeColor = (typeName: string) => {
  switch (typeName) {
    case "bug":
      return "#A6B91A";
    case "dark":
      return "#808080";
    case "dragon":
      return "#6F35FC";
    case "electric":
      return "#d1b021";
    case "fairy":
      return "#D685AD";
    case "fighting":
      return "#C22E28";
    case "fire":
      return "#EE8130";
    case "flying":
      return "#A98FF3";
    case "ghost":
      return "#735797";
    case "grass":
      return "#7AC74C";
    case "ground":
      return "#E2BF65";
    case "ice":
      return "#72979e";
    case "normal":
      return "#A8A77A";
    case "poison":
      return "#B763CF";
    case "psychic":
      return "#F95587";
    case "rock":
      return "#B6A136";
    case "shadow":
      return "#333333";
    case "steel":
      return "#B7B7CE";
    case "unknown":
      return "#68A090";
    case "water":
      return "#6390F0";
    default:
      return "#808080 ";
  }
};
