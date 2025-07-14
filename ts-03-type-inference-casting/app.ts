const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button');

function add(num1: number, num2: number) {
  return num1 + num2;
}

buttonElement!.addEventListener('click', () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  console.log(result);
});

let n1:string
n1="56";
let res=+n1;

let n2:unknown
n2=56;
let r2=n2 as number;

let n3:unknown
n3=56;
let r3=<number>n3;

