type ops = "+" | "-" | "*" | "/";

class Add {
  public add(n1: string, n2: string) {

  }
}

class Subtract {
  public subtract(n1: string, n2: string) {

  }
}

class Multiply {
  public multiply(n1: string, n2: string) {

  }
}

class Divide {
  public divide(n1: string, n2: string) {

  }
}

class Stroperator {
  private adder = new Add();
  private subtracter = new Subtract();
  private multiplier = new Multiply();
  private divider = new Divide();

  private initialize() {
    this.adder = new Add();
    this.subtracter = new Subtract();
    this.multiplier = new Multiply();
    this.divider = new Divide();
  }

  private checkErr(n1: string, n2: string): boolean {
    return true;
  }

  public c(n1: string, operator: ops, n2: string) {
    const isError = this.checkErr(n1, n2);
    if (isError === true) return;

    this.initialize();
    switch (operator) {
      case "+": return this.adder.add(n1, n2);
      case "-": return this.subtracter.subtract(n1, n2);
      case "*": return this.multiplier.multiply(n1, n2);
      case "/": return this.divider.divide(n1, n2);
    }
  }
}