// Compiled with --strictNullChecks

let surname: string;
surname = "Marius";  // OK
// surname = null;      // Error
// surname = undefined; // Error

let age: number;
age = 24;        // OK
// age = null;      // Error
// age = undefined; // Error

let isMarried: boolean;
isMarried = true;      // OK
isMarried = false;     // OK
// isMarried = null;      // Error
// isMarried = undefined; // Error


type User = {
    firstName: string;
    lastName: string | undefined;
  };
  
  let jane: User = { firstName: "Jane", lastName: undefined };
  let john: User = { firstName: "John", lastName: "Doe" };

  type User2 = {
    firstName: string;
    lastName?: string;
  };
  
  // We can assign a string to the "lastName" property
  let john2: User2 = { firstName: "John", lastName: "Doe" };
  
  // ... or we can explicitly assign the value undefined
  let jane2: User2 = { firstName: "Jane", lastName: undefined };
  
  // ... or we can not define the property at all
  let jake2: User2 = { firstName: "Jake" };

  function getLength(s: string | null) {
    return s ? s.length : 0;
  }