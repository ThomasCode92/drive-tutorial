/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [{ files: ["**/*.md"], options: { proseWrap: "always" } }],
};

export default config;
