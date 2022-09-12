type ops = "+" | "-" | "*" | "/";
type nums = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
interface upNbasic {
  up: nums,
  basic: nums
}

/* o = original */
class Add {
  public add(n1o: string, n2o: string): string {
    const [n1, n2] = Add.addZeros(n1o, n2o);
    let result: (nums | '.')[] = [];

    let up = 0;
    for (let i = n1.length - 1; i >= 0; i--) {
      if (n1[i] === '.') {
        result.unshift('.');
      } else {
        const basicAdded = Add.basicAdd(n1[i] as nums, n2[i] as nums, up);
        result.unshift(basicAdded.basic);
        up = parseInt(basicAdded.up);
      }
    }

    if (up !== 0) {
      result.unshift(up.toString() as nums)
    }
    return result.join('');
  }

  private static addZeros(n1o: string, n2o: string): string[] {
    let n1 = Add.pushDot(n1o);
    let n2 = Add.pushDot(n2o);

    /* dp = decimal places */
    const dp1 = n1.length - n1.indexOf(".") - 1;
    const dp2 = n2.length - n2.indexOf(".") - 1;

    for (let i = 0; i < Math.abs(dp1 - dp2); i++) {
      if (dp1 >= dp2) {
        n2 += "0";
      } else {
        n1 += "0";
      }
    }

    const dp1VSdp2 = dp1 >= dp2 ? dp1 : dp2;

    /* wp = whole places */
    const wp1 = n1.length - dp1VSdp2 - 1;
    const wp2 = n2.length - dp1VSdp2 - 1;


    for (let i = 0; i < Math.abs(wp1 - wp2); i++) {
      if (wp1 >= wp2) {
        n2 = "0" + n2;
      } else {
        n1 = "0" + n1;
      }
    }

    return [n1, n2];
  }

  private static pushDot(no: string): string {
    let n = no;
    if (!~n.indexOf(".")) {
      n += ".0";
    }
    return n;
  }

  private static basicAdd(n1o: nums, n2o: nums, up: number): upNbasic {
    const n1 = parseInt(n1o);
    const n2 = parseInt(n2o);

    const addedResult = n1 + n2 + up;
    const result = addedResult.toString();

    if (result.length === 1) {
      return {
        up: '0',
        basic: result as nums
      };
    }

    return {
      up: result[0] as nums,
      basic: result[1] as nums
    };
  }
}

class Subtract {
  public subtract(n1: string, n2: string): string {
    return "";
  }
}

class Multiply {
  public multiply(n1: string, n2: string): string {
    return "";
  }
}

class Divide {
  public divide(n1: string, n2: string): string {
    return "";
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