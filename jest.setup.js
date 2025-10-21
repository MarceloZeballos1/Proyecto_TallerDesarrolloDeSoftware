// Jest setup: Polyfill algunas API Web que algunas dependencias (p. ej. undici/cheerio)
// esperan en tiempo de ejecución. Definimos una clase simple para evitar
// ReferenceError: File is not defined durante las pruebas.

if (typeof global.File === 'undefined') {
  global.File = class File {
    constructor(bits = [], filename = 'file', options = {}) {
      this.bits = bits;
      this.name = filename;
      this.lastModified = options.lastModified || Date.now();
    }
  };
}

if (typeof global.Blob === 'undefined') {
  global.Blob = class Blob {
    constructor(parts = [], options = {}) {
      this.parts = parts;
      this.type = options.type || '';
    }
  };
}
