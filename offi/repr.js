function Step() {
    this.data = [];
}

// Define the prototype with ADD, REM, and MOD methods
Step.prototype = {
    // Method to add an element to the array
    add: function(element) {
        this.data.push(element);
    },

    // Method to remove an element from the array by value
    remove: function(element) {
        var index = this.data.indexOf(element);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    },

    // Method to modify an element in the array by index
    modify: function(index, newElement) {
        if (index >= 0 && index < this.data.length) {
            this.data[index] = newElement;
        }
    }
};

// Example usage:
var stepInstance = new Step();

// Adding elements
stepInstance.add(10);
stepInstance.add(20);
stepInstance.add(30);

console.log("After adding elements:", stepInstance.data); // Output: [10, 20, 30]

// Removing an element
stepInstance.remove(20);

console.log("After removing an element:", stepInstance.data); // Output: [10, 30]

// Modifying an element
stepInstance.modify(1, 50);

console.log("After modifying an element:", stepInstance.data); // Output: [10, 50]
