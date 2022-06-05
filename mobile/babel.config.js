const path = require('path');
const fs = require('fs');

const fileContent = fs.readFileSync('./tsconfig.json', 'utf8');
const tsconfig = JSON.parse(fileContent);
const alias = Object.keys(tsconfig.compilerOptions.paths).reduce(
  (kvp, key) => ({
    ...kvp,
    [key.replace(/\/\*/, '')]: tsconfig.compilerOptions.paths[key][0].replace(
      /\/\*/,
      ''
    ),
  }),
  {}
);

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias,
        },
      ],
    ],
  };
};
