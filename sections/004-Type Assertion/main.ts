
/* let message1: string = 'abc';
let endsWithC = message1.endsWith('c');

 */

let message1;
message1 = 'abc';

let endsWithC = (<string>message1).endsWith('c');
let alternativeWay = ( message1 as string).endsWith('c');