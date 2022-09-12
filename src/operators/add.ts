import { nums } from "./types";

interface upNbasic {
  up: nums,
  basic: nums
}

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

export default Add;