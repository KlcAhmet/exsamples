class CodeFile {
  constructor(codefileName) {
    this.codefileName = codefileName;
  }
}

class Formatter {
  format(codefile) {
  }
}

class PythonFromatter extends Formatter {
  constructor() {
    super();
    console.log("Python Formatter instance created");
  }

  format(codefileName) {
    console.log(`"Fromatting the Python ${codefileName} file you uploaded.`);
  }
}

const codefile = new CodeFile("helloworld.py");
const pythonFormatter = new PythonFromatter();
pythonFormatter.format(codefile.codefileName);