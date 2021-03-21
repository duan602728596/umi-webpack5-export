const path = require('path');
const fse = require('fs-extra');

const libDir = path.join(__dirname, '../lib'); // 输出的lib目录

async function childrenDir(childrenDir, plugins) {
  for (const pluginName of plugins) {
    await fse.outputFile(path.join(libDir, childrenDir, `${ pluginName }.js`), `const webpack = require('../../index');
module.exports = webpack.${ childrenDir }.${ pluginName };`);
  }
}

async function build() {
  // 输出lib插件
  const libPlugin = [
    'AutomaticPrefetchPlugin',
    'BannerPlugin',
    'Cache',
    'Chunk',
    'ChunkGraph',
    'Compilation',
    'Compiler',
    'ConcatenationScope',
    'ContextExclusionPlugin',
    'ContextReplacementPlugin',
    'DefinePlugin',
    'DelegatedPlugin',
    'Dependency',
    'DllPlugin',
    'DllReferencePlugin',
    'DynamicEntryPlugin',
    'EntryOptionPlugin',
    'EntryPlugin',
    'EnvironmentPlugin',
    'EvalDevToolModulePlugin',
    'EvalSourceMapDevToolPlugin',
    'ExternalModule',
    'ExternalsPlugin',
    'Generator',
    'HotUpdateChunk',
    'HotModuleReplacementPlugin',
    'IgnorePlugin',
    'JavascriptModulesPlugin',
    'LibManifestPlugin',
    'LibraryTemplatePlugin',
    'LoaderOptionsPlugin',
    'LoaderTargetPlugin',
    'Module',
    'ModuleFilenameHelpers',
    'ModuleGraph',
    'ModuleGraphConnection',
    'NoEmitOnErrorsPlugin',
    'NormalModule',
    'NormalModuleReplacementPlugin',
    'MultiCompiler',
    'Parser',
    'PrefetchPlugin',
    'ProgressPlugin',
    'ProvidePlugin',
    'RuntimeGlobals',
    'RuntimeModule',
    'SingleEntryPlugin',
    'SourceMapDevToolPlugin',
    'Stats',
    'Template',
    'UsageState',
    'WatchIgnorePlugin',
    'WebpackError',
    'WebpackOptionsApply'
  ];

  for (const pluginName of libPlugin) {
    await fse.outputFile(path.join(libDir, `${ pluginName }.js`), `const webpack = require('../index');
module.exports = webpack.${ pluginName };`);
  }

  await Promise.all([
    childrenDir('javascript', [
      'EnableChunkLoadingPlugin',
      'JavascriptModulesPlugin',
      'JavascriptParser'
    ]),
    childrenDir('optimize', [
      'AggressiveMergingPlugin',
      'AggressiveSplittingPlugin',
      'LimitChunkCountPlugin',
      'MinChunkSizePlugin',
      'ModuleConcatenationPlugin',
      'RealContentHashPlugin',
      'RuntimeChunkPlugin',
      'SideEffectsFlagPlugin',
      'SplitChunksPlugin'
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
    ]),
    childrenDir('container', [
      'ContainerPlugin',
      'ContainerReferencePlugin',
      'ModuleFederationPlugin'
    ])
  ]);
}

build();
