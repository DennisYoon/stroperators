import Add from "./operators/add";
import Subtract from "./operators/subtract";
import Multiply from "./operators/multiply";
import Divide from "./operators/divide";
import { ops } from "./operators/types";

/* o = original */

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
    return false;
  }

  public c(n1: string, operator: ops, n2: string): Error | string {
    const isError = this.checkErr(n1, n2);
    if (isError === true) return new Error("wrong parameters");

    this.initialize();
    switch (operator) {
      case "+": return this.adder.add(n1, n2);
      case "-": return this.subtracter.subtract(n1, n2);
      case "*": return this.multiplier.multiply(n1, n2);
      case "/": return this.divider.divide(n1, n2);
    }
  }
}

function testAdd(n1: string, n2: string) {
  const s = new Stroperator();
  const strValue = s.c(n1, "+", n2);
  const numValue = parseFloat(n1) + parseFloat(n2);

  console.log("strValue :", strValue);
  console.log("numValue :", numValue);
}

testAdd("0.1999999", "0.0777709");