// import { euclideanGCD as gcd } from '../utils/index';

/*
 LCM of a number using Euclidean GCD
*/

const gcd = require('../utils').euclideanGCD

const lcm = (a,b) => {
	if (!(a || b)) return;
	return a * b / gcd(a,b)
}


console.log("THe LCM of the numbers is " + lcm(140,72))