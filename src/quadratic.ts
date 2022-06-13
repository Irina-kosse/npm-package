// program to solve quadratic equation
export const quadraticEquation = (a : number, b : number, c : number)  => {

const result = [];
let root1; 
let root2;
// calculate discriminant
const discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    result.push( root1, root2);
}

// condition for real and equal roots
else if (discriminant === 0) {
    root1 = root2 = -b / (2 * a);

    result.push(root1, root2);
}

// if roots are not real
else {
    const realPart : number = parseFloat((-b / (2 * a)).toFixed(2));
    const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2) + 'i';

    result.push(realPart, imagPart);
}
    return result;
}