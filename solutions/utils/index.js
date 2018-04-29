const _euclideanGCD = (a,b) => {
	if (b === 0) return a;
	return _euclideanGCD(b, a%b)
}


// export { euclideanGCD }

module.exports =  { 
	euclideanGCD: _euclideanGCD,
}