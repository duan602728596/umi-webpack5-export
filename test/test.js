const util = require('util');
const path = require('path');
const glob = require('glob');

const globPromise = util.promisify(glob);
const libDir = path.join(__dirname, '../lib');

test('export lib plugin', async function() {
  const plugins = await globPromise('**/*.js', {
    cwd: libDir
  });

  for (const plugin of plugins) {
    const PluginModule = require(path.join(libDir, plugin));
    const isPlugin = typeof PluginModule !== 'undefined';

    if (!isPlugin) {
      console.log(plugin);
    }

    expect(isPlugin).toBe(true);
  }
});
