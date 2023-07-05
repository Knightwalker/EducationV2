#### 01. Void swap function | temporary variable
```js
function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}
let a = 10;
let b = 5;
swap(a, b); // Output: 5 10
```

#### 02. Classic void swap function | temporary variable and refs

```js
let a = { value: 10 };
let b = { value: 5 };

function swap(aRef, bRef) {
  let temp = aRef.value;
  a.value = bRef.value;
  b.value = temp;
}
swap(a, b);
console.log(a.value, b.value); // Output: 5 10
```

#### 03. swap function | with arithmetic operators
```js
function swap(a, b) {
  a = a + b; // 15;
  b = a - b; // 5;
  a = a - b; // 10;
  console.log(a, b);
}

let a = 10;
let b = 5;
swap(a, b); // Output: 5 10
```

#### 04. swap function | with arithmetic operators for strings
```js
function swap(a, b) {
  a = a + b; // abcde;
  b = a.slice(0, a.length - b.length) // abc
  a = a.slice(b.length) // de
  console.log(a, b); // de abc
}

let a = "abc";
let b = "de";
swap(a, b);
```

#### 05. JavaScript only swap | ES6(ES2015) destructuring assignment

```js
let a = 10;
let b = 5;
[a, b] = [b, a];
console.log(a, b); // Output: 5 10
```
