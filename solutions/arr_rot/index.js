const arr_rotate = (arr, n) => {
	const len = arr.length
	const delim = n < 0 ? (n % len) + len : n % len // for negative n
	return arr.slice(-delim).concat(arr.slice(0, len-delim))
}