const fs = require('fs/promises');

const readfile = async (fileName) => { 
  try {
    const data = await fs.readFile(fileName)
    return data.toString();
  }catch (erro) {
    return null;
  }

};

module.exports = readfile;