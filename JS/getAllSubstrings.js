function getAllSubstrings(string){
	const results = []
	for(let i = 0; i < string.length; i++){
		for(let j = i + 1; j < string.length + 1; j++){
			results.push(string.slice(i,j))
		}
	}
	return results;
}
//input : "aba"
//output : ['a','ab','aba',..]
