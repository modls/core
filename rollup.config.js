import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from 'rollup-plugin-commonjs';
export default {
  input: "index.js",
  plugins: [resolve(),
  commonjs(), terser()],
  output: [
    {
      file: "dist/esm.js",
      format: "esm",
    },
    {
      file: "dist/bundle.js",
      format: "umd",
      name: "modls",
    },
  ],
};
