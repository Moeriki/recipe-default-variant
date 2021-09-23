import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { build } from "esbuild";

build({
  entryPoints: ["./src/index.js"],
  bundle: true,
  plugins: [vanillaExtractPlugin()],
  outdir: "dist/",
}).catch(() => process.exit(1));
