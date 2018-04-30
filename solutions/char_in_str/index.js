/*
  Using Regular Expression efficiently matches all orders including N*N and N 
*/

const find_chars = (string1, string2) => {
	let re = new RegExp(string2, 'ig')
	return string1.match(re)
}



console.log(find_chars('ghdjhthejrkjbkthhjjerbtjjthekvhhhkhvhthhhkjthellllllkbblkthe', 'thh'))