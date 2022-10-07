import { expect, it } from "vitest";

interface IParams { 
  first: string; 
  last?: string; 
}

export const getName = (params: IParams) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "Ahmet",
  });
  expect(name).toEqual("Ahmet");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Ahmet",
    last: "Ustun",
  });
  expect(name).toEqual("Ahmet Ustun");
});
