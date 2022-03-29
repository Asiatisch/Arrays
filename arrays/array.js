let donuts =['chocolate',];

let firstDonut = donuts[0]

console.log(donuts);

donuts[1] = 'red velvet';
let i = 2;
donuts[i] = 'custard';
donuts[i + 1] = 'pistachio';

donuts.push('hazelnut');
donuts.push('hazelnut', 'jam');

console.log(donuts.length);

for(let i = 0; i < donuts.length; i++){
    console.log(donuts[i]);
}
/////////////////////////////////////////

const menuItems = [];
menuItems