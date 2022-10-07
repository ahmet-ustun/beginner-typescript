import { Equal, Expect } from "./helpers/type-utils";

type TOnFocusChange = (isFocused: boolean) => void;

const addListener = (onFocusChange: TOnFocusChange) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });
  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
