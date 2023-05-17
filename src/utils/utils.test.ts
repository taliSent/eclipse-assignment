import { filterCallback } from "./utils";

describe("Test filtration logic", () => {
  test("Test that callback returns true for matching pm ", () => {
    const pm1 = {
      id: 4,
      name: "charmander",
      types: ["fire"],
      abilities: ["blaze", "solar-power"],
      height: 6,
      weight: 85,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    };
    expect(filterCallback(pm1, "charmander", ["fire"])).toBe(true);
  });
  test("Test that callback returns false for not-matching pm", () => {
    const pm2 = {
      id: 6,
      name: "charizard",
      types: ["fire"],
      abilities: ["blaze", "solar-power"],
      height: 7,
      weight: 905,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    };
    expect(filterCallback(pm2, "charmander", ["fire"])).toBe(false);
  });
  test("Test that callback returns correct answer for one filter enabled", () => {
    const pm2 = {
      id: 6,
      name: "charizard",
      types: ["fire"],
      abilities: ["blaze", "solar-power"],
      height: 7,
      weight: 905,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    };
    expect(filterCallback(pm2, "", ["blaze"])).toBe(false);
  });
  test("Test that callback returns correct answer for one filter enabled", () => {
    const pm2 = {
      id: 6,
      name: "charizard",
      types: ["fire"],
      abilities: ["blaze", "solar-power"],
      height: 7,
      weight: 905,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    };
    expect(filterCallback(pm2, "charizard", [])).toBe(true);
  });

  test("Test that callback returns true with no filters enabled", () => {
    const pm2 = {
      id: 6,
      name: "charizard",
      types: ["fire"],
      abilities: ["blaze", "solar-power"],
      height: 7,
      weight: 905,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    };
    expect(filterCallback(pm2, "", [])).toBe(true);
  });
});
