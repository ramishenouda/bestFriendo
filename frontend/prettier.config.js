module.exports = {
  printWidth: 140,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'ignore',
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  overrides: [
    {
      files: '**/*.component.html',
      options: {
        parser: 'angular',
        singleQuote: false,
        printWidth: 140,
        tabWidth: 2,
      },
    },
  ],
};
