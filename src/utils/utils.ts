import { Pokemon } from "src/types/Pokemon";
import { PmUI } from "src/types/PokemonUI";

export const extractMainInfo = (pokemon: Pokemon): PmUI => {
  const { id, name, sprites, types, abilities, height, weight,  } =
    pokemon;
  const pm = {
    id,
    name,
    types: types.map((item) => item.type.name),
    abilities: abilities.map((item) => item.ability.name),
    height,
    weight,
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
      return "#947c15";
    case "dark":
      return "#808080";
    case "dragon":
      return "#6F35FC";
    case "electric":
      return "#b99f1a";
    case "fairy":
      return "#c91c72";
    case "fighting":
      return "#C22E28";
    case "fire":
      return "#cc5700";
    case "flying":
      return "#8e79c9";
    case "ghost":
      return "#735797";
    case "grass":
      return "#4f8032";
    case "ground":
      return "#615852";
    case "ice":
      return "#72979e";
    case "normal":
      return "#808080";
    case "poison":
      return "#8151b8";
    case "psychic":
      return "#F95587";
    case "rock":
      return "#B6A136";
    case "shadow":
      return "#333333";
    case "steel":
      return "#7c7c8a";
    case "unknown":
      return "#68A090";
    case "water":
      return "#254894";
    default:
      return "#808080 ";
  }
};
