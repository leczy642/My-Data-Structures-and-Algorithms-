function isPalindrone(string){
	let left = 0;
	let right = string.length - 1;
	
	while(left < right){
		if(string[left] === string[right]){
			left++;
			right--;
		}else{
			return false
		}
	}
	return true;
}
//input : "aba"
//ouput : true
//input : ab
//ouput : false
