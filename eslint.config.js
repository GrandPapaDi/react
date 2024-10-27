import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      'linebreak-style': ['error', 'windows'], // Исправлено: ключи правил должны быть строками
      indent: ['warn', 'tab'],
      semi: ['true'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['warn'],
    },
  },

  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
