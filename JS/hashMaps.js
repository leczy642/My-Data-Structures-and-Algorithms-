console.log("Hello, World!");

let map1 = new Map()

//adding elements to the Map
map1.set("First_name", "Alexander")
map1.set("last_name", "Irabor")
map1.set("Age", 30)
map1.set("Nationality", "Nigerian")
map1.set(1,2)
console.log("Displaying the entire map")
console.log(map1)
//using Map.prototype.has(k)
//returns true
console.log("The map has first_name ?"+ map1.has("First_name"))
//returns false
console.log("The map has first_name ?"+ map1.has("Tribe"))

//using Map.prototype.get(k)
//returns true
console.log("Retrieving the last_name .."+ map1.get("last_name"))
//returns undefined
console.log("Retrieving the Tribe .."+ map1.get("Tribe"))

//using Map.prototype.delete(k)
//returns true
console.log("deleting the Age .."+ map1.delete("Age"))
console.log(map1)
//returns false
console.log("deleting the Tribe .."+ map1.delete("Tribe"))

//using Map.protype.clear()
//clears the entire list uncomment to see in action 
//map1.clear()
//console.log(map1)
console.log(" ")
//declaring iterator objects
//-keys()
//-values()
//-entries()
//--foreach(callback)

//retrieving entries 
console.log("--using iterator methods--")
console.log(" ")

//using Map.prototype.entries()
console.log("Displaying entries")
var get_entries = map1.entries()
for(elements of get_entries)
console.log(elements)
console.log(" ")

//using Map.prototype.keys()
console.log("Displaying keys")
var get_keys = map1.keys()
for(key_elem of get_keys)
console.log(key_elem)
console.log(" ")

//using Map.prototype.values()
console.log("Displaying values")
var get_values = map1.values()
for(val of get_values)
console.log(val)
console.log(" ")

// using Map.prototype[@@iterator]()
console.log("Displaying values using [Symbol.iterator]")
var get_all_entries = map1[Symbol.iterator]()
for(it_entries of get_all_entries)
console.log(it_entries)