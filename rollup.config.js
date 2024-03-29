const nodeResolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const localResolve = require('@haensl/rollup-plugin-local-resolve');
const commonJS = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const minify = require('@rollup/plugin-terser');
const pkg = require('./package');

const copyright = `// ${pkg.homepage} v${pkg.version} Copyright ${(new Date()).getFullYear()} ${pkg.author.name} <${pkg.author.email}>`;

module.exports = [
  {
    input: './src/index.js',
    output: {
      esModule: false,
      exports: 'named',
      file: pkg.unpkg,
      format: 'umd',
      banner: copyright,
      name: pkg.name,
      indent: false
    },
    plugins: [
      external({
        includeDependencies: true
      }),
      babel({
        babelrc: false,
        exclude: [
          'node_modules/**',
          '**/*.test.js'
        ],
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false
            }
          ]
        ]
      }),
      commonJS({
        include: 'node_modules/**'
      }),
      localResolve(),
      nodeResolve(),
      minify()
    ]
  },
  {
    input: './src/index.js',
    output: [
      {
        file: pkg.module,
        format: 'esm',
        banner: copyright,
        indent: false,
        name: pkg.name,
        sourcemap: true
      }
    ],
    plugins: [
      external({
        includeDependencies: true
      }),
      babel({
        babelrc: false,
        exclude: [
          'node_modules/**',
          '**/*.test.js'
        ],
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                esmodules: true
              }
            }
          ]
        ]
      }),
      commonJS({
        include: 'node_modules/**'
      }),
      localResolve(),
      nodeResolve()
    ]
  },
  {
    input: './src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        name: pkg.name,
        indent: false,
        banner: copyright,
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      external({
        includeDependencies: true
      }),
      babel({
        babelrc: false,
        exclude: [
          'node_modules/**',
          '**/*.test.js'
        ],
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                node: true
              }
            }
          ]
        ]
      }),
      commonJS({
        include: 'node_modules/**'
      }),
      localResolve(),
      nodeResolve()
    ]
  }
];
