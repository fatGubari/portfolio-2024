// src/types/tailwindcss.d.ts
declare module "tailwindcss/lib/util/flattenColorPalette" {
  import { Theme } from "tailwindcss/types/config";

  function flattenColorPalette(colors: Theme["colors"]): Record<string, string>;

  export default flattenColorPalette;
}
