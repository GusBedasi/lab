const fs = require('fs');
const { Transform } = require('stream');
const AutoDetectDecoderStream = require("autodetect-decoder-stream");

class CreateSomethingStream extends Transform {
  constructor() {
    super(
      {
        objectMode: true
      }
    )
  }

  _transform(chunk, enconding, callback){
    callback(null, chunk + ', aqui eu coloco o que eu quiser pos leitura do arquivo raiz');
  }

}

const readStream = fs.createReadStream('./file1.txt');
const encodingStream = new AutoDetectDecoderStream({ defaultEncoding: "1255" }); // If failed to guess encoding, default to 1255
const writeSomething = new CreateSomethingStream();
const writeStream = fs.createWriteStream('file2.txt');

readStream
  .pipe(encodingStream)
  .pipe(writeSomething)
  .pipe(writeStream);