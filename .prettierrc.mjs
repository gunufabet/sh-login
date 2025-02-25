// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        printWidth: 100,
        trailingComma: 'es5',
        astroAllowShorthand: false
      },
    },
  ],
};
