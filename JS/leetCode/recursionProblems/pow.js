//how to recursively find the power of a number
//https://leetcode.com/problems/powx-n/
//https://leetcode.com/problems/powx-n/discuss/1976411/JS-Solution-O(logN)-recursive-approach
//Time O(logN)
//space O(1)
var myPow = function(x, n) {
    if(n == 0){
        return 1;
    }
    //this takes care of any negative power
    if (n<0) {
		n=-n;
		x=1/x;
	}
    //if
    if(n % 2 != 0) return x * myPow(x, n - 1);
    
    return myPow(x*x,n/2)
};
