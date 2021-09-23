import { recipe } from "@vanilla-extract/recipes";

export const color = recipe({
  defaultVariants: {
    color: "red",
  },
  variants: {
    color: {
      red: { color: "red" },
      green: { color: "green" },
      blue: { color: "blue" },
    },
  },
});
