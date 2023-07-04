/* eslint array-bracket-newline: 'off' */

const config = {
  rules: {
    'require-author': 'error',
    'require-bugs': 'error',
    'require-description': 'error',
    'require-devDependencies': 'error',
    'require-engines': 'error',
    'require-homepage': 'error',
    'require-keywords': 'error',
    'require-license': 'error',
    'require-main': 'error',
    'require-name': 'error',
    'require-peerDependencies': 'error',
    'require-repository': 'error',
    'require-scripts': 'error',
    'require-version': 'error',
    'config-type': 'error',
    'description-type': 'error',
    'devDependencies-type': 'error',
    'engines-type': 'error',
    'homepage-type': 'error',
    'keywords-type': 'error',
    'license-type': 'error',
    'main-type': 'error',
    'name-type': 'error',
    'peerDependencies-type': 'error',
    'repository-type': 'error',
    'scripts-type': 'error',
    'version-type': 'error',
    'valid-values-author': ['error', ['Thomas Lindner']],
    'valid-values-engines': [
      'error',
      [
        {
          node: '>=16.0.0',
          npm: '>=8.0.0',
        },
      ],
    ],
    'valid-values-private': ['error', [false]],
    'no-repeated-dependencies': 'error',
    'prefer-no-version-zero-dependencies': 'warning',
    'prefer-caret-version-dependencies': 'error',
    'prefer-no-version-zero-devDependencies': 'warning',
    'prefer-caret-version-devDependencies': 'error',
    'name-format': 'error',
    'version-format': 'error',
  },
};

module.exports = config;
