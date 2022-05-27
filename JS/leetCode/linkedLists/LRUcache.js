//Time O(1) | Space O(1)
//summary
//if the key exists in the map 
//--grab the value
//--delete the current key/value
//--add the key/value again which adds it to the bottom of the map
//return the value
LRUCache.prototype.get = function(key) {
    //if there return value else -1
    if(this.map.has(key)){
       let value = this.map.get(key);
       this.map.delete(key);
       this.map.set(key, value);
       return value;
     }else{
         return -1;
     }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
////Time O(1) | Space O(1)
//summary
//if the key to add already exists in the map delete it
//if you are trying to add when the capacity is already full delete the least recently used
//add the new key/value pair to the hash map
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        this.map.delete(key);   
    }
    if(this.map.size === this.capacity){
      this.map.delete(this.map.keys().next().value);
    }
    this.map.set(key, value)
};
