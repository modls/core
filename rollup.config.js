import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.js",
  plugins: [resolve(), terser()],
  output: [
    {
      file: "dist/esm.js",
      format: "esm",
    },
    {
      file: "dist/bundle.js",
      format: "umd",
      name: "BaseWebComponent",
    },
  ],
};
