function covertObjToArray(characterFrequencies){
	//{t:2, h:1, i:1, s:1}
	//becomes ['t','t','h','i','s'];
	let characters = [];
	for(const char in characterFrequencies){	
		for(let i = 0; i < characterFrequencies[char]; i++){
			characters.push(char)
		}
	}
	return characters
}
//input : {t:2, h:1, i:1, s:1}
//output : ['t','t','h','i','s'];
