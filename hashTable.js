function HashTable() {
  const table = {};

  // Hash function to generate an index from a key
  function hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  // Add a key-value pair to the hash table
  function insert(key, value) {
    const index = hash(key);
    table[index] = value;
  }

  // Get the value associated with a key
  function get(key) {
    const index = hash(key);
    return table[index];
  }

  // Remove a key-value pair from the hash table
  function remove(key) {
    const index = hash(key);
    delete table[index];
  }

  return {
    insert,
    get,
    remove,
  };
}

// Usage example
const hashTable = new HashTable();
hashTable.insert("name", "John");
hashTable.insert("age", 30);

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 30
console.log(hashTable)