const path = require('path');
const fse = require('fs-extra');

const libDir = path.join(__dirname, '../lib'); // 输出的lib目录

async function childrenDir(childrenDir, plugins) {
  for (const pluginName of plugins) {
    fse.outputFile(path.join(libDir, childrenDir, `${ pluginName }.js`), `const { __WEBPACK__ } = require('../../index');
module.exports = __WEBPACK__.${ childrenDir }.${ pluginName };`);
  }
}

async function build() {
  // 输出lib插件
  const libPlugin = [
    'AutomaticPrefetchPlugin',
    'BannerPlugin',
    'ContextExclusionPlugin',
    'ContextReplacementPlugin',
    'DefinePlugin',
    'DelegatedPlugin',
    'DllPlugin',
    'DllReferencePlugin',
    'DynamicEntryPlugin',
    'EntryOptionPlugin',
    'EntryPlugin',
    'EnvironmentPlugin',
    'EvalDevToolModulePlugin',
    'EvalSourceMapDevToolPlugin',
    'ExternalsPlugin',
    'HotModuleReplacementPlugin',
    'IgnorePlugin',
    'JavascriptModulesPlugin',
    'LibManifestPlugin',
    'LibraryTemplatePlugin',
    'LoaderOptionsPlugin',
    'LoaderTargetPlugin',
    'SingleEntryPlugin',
    'WatchIgnorePlugin'
  ];

  for (const pluginName of libPlugin) {
    fse.outputFile(path.join(libDir, `${ pluginName }.js`), `const { __WEBPACK__ } = require('../index');
module.exports = __WEBPACK__.${ pluginName };`);
  }

  await Promise.all([
    childrenDir('javascript', [
      'EnableChunkLoadingPlugin',
      'JavascriptModulesPlugin',
      'JavascriptParser'
    ]),
    childrenDir('web', [
      'FetchCompileAsyncWasmPlugin',
      'FetchCompileWasmPlugin',
      'JsonpChunkLoadingRuntimeModule',
      'JsonpTemplatePlugin'
    ]),
    childrenDir('webworker', [
      'WebWorkerTemplatePlugin'
    ]),
    childrenDir('node', [
      'NodeEnvironmentPlugin',
      'NodeSourcePlugin',
      'NodeTargetPlugin',
      'NodeTemplatePlugin',
      'ReadFileCompileWasmPlugin'
    ]),
    childrenDir('electron', [
      'ElectronTargetPlugin'
    ]),
    childrenDir('wasm', [
      'AsyncWebAssemblyModulesPlugin'
    ]),
    childrenDir('library', [
      'AbstractLibraryPlugin',
      'EnableLibraryPlugin'
    ]),
    childrenDir('container', [
      'ContainerPlugin',
      'ContainerReferencePlugin',
      'ModuleFederationPlugin'
    ])
  ]);
}

build();
