/** @type {import('fantasticon').RunnerOptions} */
module.exports = {
  // Every `.svg` in this folder becomes a glyph — keep only `qrbundle.svg` unless adding icons on purpose.
  inputDir: './icons',
  outputDir: './fonts',
  // Matches source glyph filename / package name; outputs qrbundle.{css,ttf,woff,woff2}, etc.
  name: 'qrbundle',
  prefix: 'qrb',
  fontTypes: ['ttf', 'woff', 'woff2'],
  tag: 'qrb',
  normalize: true,
  fontHeight: 1000,
  // Do NOT set `round` to a small number (e.g. 1e2): it quantizes path coords and wrecks the glyph.
  // Omit `round` for Fantasticon’s default precision (see CLI: --round → 10e12).
};
