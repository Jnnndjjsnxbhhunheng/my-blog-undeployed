### ES6

#### 1.什么是ES6

一种代码规范。JS新特性，是JS语法的子集，规范。

#### 2. let 变量声明和特性

#### 3.const变量声明和特性

不同点

1.赋值  

`const` 声明后就要立刻赋值  `let`可以声明后可以立刻赋值或者使用时候赋值

共同点

2.作用域

`let` 和`const`在可以在全局，函数，块级中声明，但是受到块级作用域的限制。

作为对比 `var` 是属于是全局作用域或函数作用域，不收块级作用域但是限制，会造成泄露。

3.都不允许重复声明

4.都不可以变量提升，造成暂时性死区，var可以。

暂时性死区：从块级作用域的开始到变量声明语句执行之前，let 和 const 声明的变量都不可访问，这段时间称为暂时性死区。

什么是变量提升：是 JavaScript 中的一种机制：在作用域内（全局或函数作用域），用 var 声明的变量会被“提升”到作用域的顶部

```javascript
console.log(x); // undefined
var x = 10;
console.log(x); // 10


var x; // 提升到顶部，初始值为 undefined
console.log(x); // undefined
x = 10; // 赋值留在原地
console.log(x); // 10
```



#### 4.变量解构赋值

规则：

匹配模式：只要等号两边的模式相同，左边的变量就会被赋予对应的值

解构赋值规则：只要等号右边的值不是对象或数组，就先将其转为对象

解构默认值生效条件：属性值严格等于`undefined`

解构遵循匹配模式

解构不成功时变量的值等于`undefined`

`undefined`和`null`无法转为对象，因此无法进行解构

```javascript
//同名情况
const { name, age } = { name: 'Alice', age: 25 };
console.log(name); // 'Alice'
console.log(age); // 25

字符串解构：const [a, b, c, d, e] = "hello"
数值解构：const { toString: s } = 123
布尔解构：const { toString: b } = true
```

重命名

```javascript
const { name: fullName, age: yearsOld } = person;

console.log(fullName); // 输出: Alice
console.log(yearsOld); // 输出: 25
```



#### 5.箭头函数

```java
//1.箭头函数简写
let pow = n =>  n*n //一行不用return  单形参不用括号
//2 .不能使用argumnet
//3 .不能代替正常的函数构造实例化对象
//4.在传统函数中，this 的值取决于函数的调用方式，而不是定义时所在的位置
 function traditionalFunction() {
  console.log(this);
}

const obj = { name: 'Test', fn: traditionalFunction };
traditionalFunction(); // 浏览器中：window
obj.fn(); // { name: 'Test', fn: [Function: traditionalFunction] }

//箭头函数不会创建自己的 this 绑定。相反，this 的值会继承自它定义时所在的外层作用域（词法作用域）
```

#### 箭头函数注意事项

- 箭头函数不能作为构造函数使用
- 箭头函数没有原型
- 箭头函数内没有`arguments`
- 箭头函数不能使用`yield`关键字

这是箭头函数和普通函数的区别：

它不拥有自己的 this，而是从定义时所在的**外层词法作用域**（lexical scope）继承 this。

“词法作用域”指的是代码的静态结构，即函数定义时的嵌套环境，而不是运行时的调用栈。

```javascript
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++; // this 指向 Timer 实例
        console.log(this.seconds);
    }, 1000);
}
new Timer(); // 1, 2, 3...
```



#### 6.rest参数

在 ES5 及之前，处理不定数量参数通常使用 arguments 对象（一个类数组对象）。但 arguments 有以下局限性：

1. 不是真正的数组（需要手动转换，如 Array.prototype.slice.call(arguments)）。

2. 不能与命名参数结合使用时清晰区分。

3. 性能稍低，且语法不够优雅。

Rest 参数相比 arguments 更现代化：

1. 是一个真正的数组，可以直接使用数组方法（如 map、filter 等）。

2. 语法简洁，明确指定需要收集的参数。

3. 仅收集剩余参数，而不包括已命名的参数。

```javascript
// 使用 arguments
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3)); // 6

// 使用 Rest 参数
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
```

#### 7.扩展运算符

扩展运算符可以将数组展开为单独的元素，通常用于数组的合并、复制或传递给函数。

```javascript
//数组合并
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]
```

#### 8.symbol

Symbol 是一种新的原始数据类型（Primitive Type），用于创建唯一的标识符。它主要用于对象的属性键（Property Key），以避免属性名冲突

```javascript
const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2); // false（每个 Symbol 都是唯一的）

//描述
const sym3 = Symbol('uniqueKey');
const sym4 = Symbol('uniqueKey');
console.log(sym3 === sym4); // false（描述相同，但 Symbol 不同）
console.log(sym3.toString()); // "Symbol(uniqueKey)"（显示描述）

//作为对象的属性
const mySymbol = Symbol('myKey');

const obj = {
  [mySymbol]: 'Hello, Symbol!',
  name: 'Test'
};

console.log(obj[mySymbol]); // 'Hello, Symbol!'
console.log(obj.name); // 'Test'
console.log(Object.keys(obj)); // ['name']（Symbol 属性不包含在 keys 中）
```

#### 9.迭代器和生成器

可迭代对象是实现了 Symbol.iterator 的对象。常见的可迭代对象包括：

- 数组（Array）

- 字符串（String）

- Set

- Map

- 自定义对象（通过实现 Symbol.iterator）

  ```javascript
  // 数组是可迭代的
  const arr = [1, 2, 3];
  const iterator = arr[Symbol.iterator]();
  
  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: 3, done: false }
  console.log(iterator.next()); // { value: undefined, done: true }
  
  //可以使用for ... of 遍历
  const arr = [1, 2, 3];
  for (const value of arr) {
    console.log(value); // 1, 2, 3
  }
  
  ```

  生成器（Generator）是 ES6 引入的一种特殊函数，用于更简洁地创建迭代器。生成器通过 function* 定义，并使用 yield 关键字暂停和恢复执行。

  ```javascript
  function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = simpleGenerator();
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: false }
  console.log(gen.next()); // { value: undefined, done: true}
  ```

10.Promise

Promise 是一种用于处理异步操作的对象，旨在解决传统回调函数（Callback Hell）的问题

  ```javascript
  //1.创建promise
  //使用 new Promise() 创建一个 Promise，接受一个执行器函数（executor），该函数有两个参数：resolve（成功回调）和 reject（失败回调）。
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.5) {
        resolve(`Success: ${random}`); // 成功时调用 resolve
      } else {
        reject(new Error(`Failure: ${random}`)); // 失败时调用 reject
      }
    }, 1000);
  });
  
  //2.使用promise
  //Promise 提供了链式调用和处理异步结果的方法，如 .then() 和 .catch()。
  //.then() 返回一个新 Promise，可以继续链式调用。
  //.catch() 处理 Promise 的拒绝（Rejected）情况。
  //.finally() 在 Promise 完成（无论成功或失败）后执行，通常用于清理操作。
  
  myPromise
    .then(result => {
      console.log(result); // "Success: [随机值 > 0.5]"
    })
    .catch(error => {
      console.log(error.message); // "Failure: [随机值 <= 0.5]"
    })
    .finally(() => {
      console.log('Operation completed'); // 无论成功或失败都执行
    });
  
  //回调地狱
  setTimeout(() => {
    console.log('Step 1');
    setTimeout(() => {
      console.log('Step 2');
      setTimeout(() => {
        console.log('Step 3');
      }, 1000);
    }, 1000);
  }, 1000);
  
  ```

#### 10.set集合

Set 是一种存储唯一值的集合，不允许重复元素。它适用于需要去重或检查元素存在的情况。

```javascript
// 创建空 Set
const set = new Set();

// 通过数组初始化
const setFromArray = new Set([1, 2, 3, 3, 4]); // 重复的 3 只保留一个
console.log(setFromArray); // Set(4) { 1, 2, 3, 4 }
```

#### 11.map

Map 是一种存储键值对的集合，键可以是任意类型，适合需要键值映射的场景

```javascript
// 创建空 Map
const map = new Map();

// 通过数组初始化
const mapFromArray = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  [3, 'numberValue'],
  [{}, 'objectKey']
]);
console.log(mapFromArray); // Map(4) { 'key1' => 'value1', 'key2' => 'value2', 3 => 'numberValue', {} => 'objectKey' }
```

#### 12.class

使用 class 关键字定义一个类，类名通常以大写字母开头（约定俗成）

- 构造函数是类中用于创建和初始化实例的方法。
- 每个类只能有一个 constructor，如果定义多个，JavaScript 会抛出 SyntaxError。
- 如果没有显式定义 constructor，会默认生成一个空构造函数。

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, I am ${this.name}, ${this.age} years old.`;
  }
}

// 创建实例
const person = new Person('Alice', 25);
console.log(person.sayHello()); // 'Hello, I am Alice, 25 years old.'
```

get和set

```javascript
class Person {
  constructor(name) {
    this._name = name; // 使用下划线表示私有属性（约定）
  }

  get name() {
    return this._name.toUpperCase();
      //在调用person.name的时候会执行
  }

    //在改变person.name的时候会执行，同时也执行了get name()所有变成大写了
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new Error('Name must be a string');
    }
  }
}

const person = new Person('Alice');
console.log(person.name); // 'ALICE'
person.name = 'Bob';
console.log(person.name); // 'BOB'
person.name = 123; // Error: Name must be a string
```

class 支持通过 extends 关键字实现继承，子类可以继承父类的属性和方法，并可以重写（Override）或扩展。

```javascript
class Employee extends Person {
  constructor(name, age, job) {
    super(name, age); // 调用父类的 constructor
    this.job = job;
  }

  sayHello() {
    return `${super.sayHello()} I work as a ${this.job}.`;
  }
}

const employee = new Employee('Bob', 30, 'Engineer');
console.log(employee.sayHello()); // 'Hello, I am Bob, 30 years old. I work as a Engineer.'
```

#### 13.模板字符串

```javascript
const city ='Guangzhou'

// ES5中
console.log('I live in '+city) // I live in Guangzhou
// ES6中
console.log(`I live in ${city}`) // I live in Guangzhou

```

#### 14.导入导出

1.默认导入导出

```javascript
// ./out.js
let name = '张三';
let age = 21;
function show() {
    console.log(name, age);
}
// 默认导出name和show方法
export default {
    name,
    show
}
```

```javascript
// App.vue
// 默认导入
import test from './default';
test.show();
//输出结果为：
// 张三 21
```

每个模块中只允许使用唯一的一次 `export default`，默认导入时的接收名称可以是任意合法名称。

2.按需导入

```javascript
// ./need.js
export let name = '张三';
let age = 21;
export let gender = '男';
export function show() {
    console.log(name, age, gender);
}
```

```javascript
// App.vue
// 按需导入
import { name, show } from '.need';
show();
// 输出结果
// 张三 21 男
```

- 每个模块中可以使用多次按需导出。
- 按需导入的成员名称必须和按需导出的名称保持一致。
- 按需导入时，可以使用 `as` 关键字进行重命名。

3.直接导入

```javascript
// ./direct.js
let name = '张三';
let age = 21;
let gender = '男';
console.log(name, age,gender);
```

```javascript
// App.vue
// 直接导入并执行
import './direct';
// 输出结果：张三 21 男
```

直接导入并执行方式主要用于模块中包含一些全局执行的代码，而不是导出特定的成员。

#### 15.Promise

一个 `Promise` 对象代表一个异步操作的最终完成（或失败），及其结果值。`Promise` 有三种状态：

- **Pending（进行中）**：初始状态，既不是成功，也不是失败。
- **Fulfilled（已成功）**：意味着操作成功完成。
- **Rejected（已失败）**：意味着操作失败。

一旦 `Promise` 状态从 Pending 变为 Fulfilled 或 Rejected，它的状态就不可再改变，并且会触发相应的处理函数

##### 创建 Promise

你可以通过 `new Promise(executor)` 来创建一个新的 `Promise` 实例。`executor` 是一个执行器函数，它接收两个参数：`resolve` 和 `reject`

```javascript
const myPromise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('操作成功');
    } else {
      reject('操作失败');
    }
  }, 1000);
});
```

##### 使用 then 方法

`then` 方法用于指定 `Promise` 被解决（fulfilled）或被拒绝（rejected）时应执行的操作。它接受两个可选参数：第一个是当 `Promise` 成功完成时调用的回调函数；第二个是当 `Promise` 被拒绝时调用的回调函数。

```javascript
myPromise.then(
  (value) => console.log(value), // 成功时的回调
  (error) => console.error(error) // 失败时的回调
);
```

链式调用

`then` 方法本身也返回一个 `Promise`，这使得我们可以链式调用多个 `then` 方法。如果在 `then` 回调中返回了一个新的 `Promise`，后续的 `then` 将等待该 `Promise` 完成后再执行。

```javascript
myPromise
  .then((value) => {
    console.log(value);
    return '下一步';
  })
  .then((nextStep) => {
    console.log(nextStep);
  })
  .catch((error) => {
    console.error(error);
  });
```

catch 方法

`catch` 方法用于捕获 `Promise` 链中的任何错误。它可以看作是只接受拒绝回调的 `then` 方法。

```javascript
myPromise
  .then((value) => {
    console.log(value);
    throw new Error('故意抛出异常');
  })
  .catch((error) => {
    console.error(error.message); // 输出: 故意抛出异常
  });
```

- **`then(onFulfilled, onRejected)`**：适用于需要在同一地方处理成功和失败情况的场景，但容易导致代码混乱，尤其是在较长的 `Promise` 链中。
- **`catch(onRejected)`**：推荐用于集中处理错误，特别是当你希望在整个 `Promise` 链中统一处理错误时。它使得错误处理更加清晰、易于维护。

Promise.all

`Promise.all(iterable)` 方法用于将多个 `Promise` 实例包装成一个新的 `Promise` 实例。当所有 `Promise` 都成功完成时，新 `Promise` 才会被解决；如果有任何一个被拒绝，则立即拒绝。

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});
```

Promise.race

`Promise.race(iterable)` 方法同样是将多个 `Promise` 实例包装成一个新的 `Promise` 实例，但它会在任何一个 `Promise` 被解决或拒绝时立即解决或拒绝。

```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([p1, p2]).then((value) => {
  console.log(value); // "two"
});
```



#### 16.CommonJS

CommonJS 是一种模块化规范，主要用于服务器端的 JavaScript 模块管理（特别是在 Node.js 环境中）。它定义了一种模块加载机制，使得开发者可以方便地创建、导入和导出模块。

1. **模块**：
   - 在 CommonJS 中，每个文件都被视为一个独立的模块。
   - 模块之间通过 `require` 和 `module.exports` 进行交互。
2. **`require`**：
   - 用于加载模块。
   - 示例：`const module = require('./path/to/module');`
3. **`module.exports`**：
   - 用于导出模块的内容。
   - 示例：`module.exports = { key: 'value' };`
4. **`exports`**：
   - `exports` 是 `module.exports` 的快捷方式，但直接赋值给 `exports` 会覆盖整个模块对象。
   - 示例：`exports.functionName = function() {};`

工作原理

- 当使用 `require` 加载模块时，Node.js 会解析指定路径并执行该模块的代码。
- 每个模块都有自己的作用域，不会污染全局作用域。
- 加载的模块会被缓存，因此多次调用 `require` 不会导致重复执行。

### JS

#### 1.pop()

  **功能**：从数组的末尾移除并返回最后一个元素。

  **返回值**：移除的元素（如果数组为空，则返回 undefined）。

  **影响原数组**：是的，数组长度减少 1。

  ```javascript
  let arr = [1, 2, 3];
  let removed = arr.pop();
  console.log(removed); // 3
  console.log(arr); // [1, 2]
  ```
#### 2.push()

  **功能**：向数组的末尾添加一个或多个元素，并返回新数组的长度。

  **返回值**：新数组的长度（数字）。

  **影响原数组**：是的，数组长度增加，末尾添加新元素。

  ```javascript
  let arr = [1, 2, 3];
  let length = arr.push(4, 5);
  console.log(length); // 5
  console.log(arr); // [1, 2, 3, 4, 5]
  ```

####   3.shift()

**功能**：从数组的开头移除并返回第一个元素。

**返回值**：移除的元素（如果数组为空，则返回 undefined）。

**影响原数组**：是的，数组长度减少 1，剩余元素向前移动。

```javascript
let arr = [1, 2, 3];
let removed = arr.shift();
console.log(removed); // 1
console.log(arr); // [2, 3]
```

#### 4.unshift()

**功能**：向数组的开头添加一个或多个元素，并返回新数组的长度。

**返回值**：新数组的长度（数字）。

**影响原数组**：是的，数组长度增加，元素向后移动，新元素添加到开头

```javascript
let arr = [1, 2, 3];
let length = arr.unshift(0, -1);
console.log(length); // 5
console.log(arr); // [-1, 0, 1, 2, 3]
```

#### 5.reverse()

**功能**：将数组的元素顺序反转（第一个元素变为最后一个，最后一个元素变为第一个）。

**返回值**：反转后的原数组（即修改后的数组本身）。

**影响原数组**：是的，数组的顺序被完全颠倒。

```javascript
let arr = [1, 2, 3, 4];
let reversed = arr.reverse();
console.log(reversed); // [4, 3, 2, 1]
console.log(arr); // [4, 3, 2, 1]
```

#### 6.sort()

**功能**：按升序（默认）或指定比较函数的顺序对数组元素进行排序。元素通常被转换为字符串进行比较。

**返回值**：排序后的原数组（即修改后的数组本身）。

**影响原数组**：是的，数组的元素顺序被重新排列。

```javascript
let arr = [3, 1, 4, 2];
arr.sort();
console.log(arr); // [1, 2, 3, 4]

// 自定义排序（数字降序）
arr.sort((a, b) => b - a);
console.log(arr); // [4, 3, 2, 1]
```

#### 7.splice()

**功能**：从数组中移除、替换或添加元素，并返回被移除的元素（如果没有移除元素，则返回空数组）。

**参数**：

- start：开始位置（从 0 开始，负数表示从末尾计数）。

- deleteCount：要删除的元素数量（可选，默认为数组剩余长度）。

- items：要添加的元素（可选，0 个或多个）。

  ```javascript
  let arr = [1, 2, 3, 4, 5];
  
  // 移除元素
  let removed = arr.splice(1, 2); // 从索引 1 开始，删除 2 个元素
  console.log(removed); // [2, 3]
  console.log(arr); // [1, 4, 5]
  
  // 添加元素
  arr.splice(1, 0, 2, 3); // 在索引 1 处添加 2, 3，无删除
  console.log(arr); // [1, 2, 3, 4, 5]
  
  // 替换元素
  arr.splice(1, 2, 6, 7); // 从索引 1 开始，删除 2 个元素，添加 6, 7
  console.log(arr); // [1, 6, 7, 4, 5]
  ```

#### 8.forEach

**功能**：遍历数组的每个元素，执行回调函数，但不返回新数组，仅用于副作用（Side Effects，如打印、修改外部变量等）。

**返回值**：undefined（不返回任何值）。

**参数**：回调函数接收三个参数：

- element：当前元素。
- index：当前元素的索引。
- array：原始数组。

**是否影响原数组**：不直接修改原数组，但回调函数中可以修改原数组或外部变量。

**注意**：

- forEach 无法中断循环（没有类似 break 或 return false 的机制）。
- 不返回新数组，适合仅需遍历和执行操作的场景。

```javascript
const arr = [1, 2, 3];
arr.forEach((element, index, array) => {
  console.log(`Element ${element} at index ${index}`);
});
// 输出:
// Element 1 at index 0
// Element 2 at index 1
// Element 3 at index 2
```

#### 9.map

**功能**：创建并返回一个新数组，新数组的每个元素是由回调函数处理原数组元素后生成的。

**返回值**：一个新数组，长度与原数组相同。

**参数**：回调函数接收三个参数：

- element：当前元素。
- index：当前元素的索引。
- array：原始数组。

**是否影响原数组**：不修改原数组，仅返回新数组

```javascript
const arr = [1, 2, 3];
const newArr = arr.map((element, index, array) => element * 2);
console.log(newArr); // [2, 4, 6]
console.log(arr); // [1, 2, 3]（原数组未变）
```

#### 10.filter

**功能**：创建并返回一个新数组，包含通过回调函数测试的元素（返回 true 的元素）。

**返回值**：一个新数组，可能比原数组短（或为空）。

**参数**：回调函数接收三个参数：

- element：当前元素。
- index：当前元素的索引。
- array：原始数组。

**是否影响原数组**：不修改原数组，仅返回新数组。

```javascript
const arr = [1, 2, 3, 4, 5];
const filtered = arr.filter((element, index, array) => element > 3);
console.log(filtered); // [4, 5]
console.log(arr); // [1, 2, 3, 4, 5]（原数组未变）
```

#### 11.some

**功能**：测试数组中是否至少有一个元素通过回调函数的测试（返回 true）。

**返回值**：布尔值（true 表示至少有一个元素满足条件，false 表示没有）。

**参数**：回调函数接收三个参数：

- element：当前元素。
- index：当前元素的索引。
- array：原始数组。

**是否影响原数组**：不修改原数组。

```javascript
const arr = [1, 2, 3, 4, 5];
const hasEven = arr.some((element, index, array) => element % 2 === 0);
console.log(hasEven); // true（因为 2 和 4 是偶数）
```

#### 12.find

**功能**：返回数组中第一个通过回调函数测试的元素（返回 true 的元素），如果没有找到则返回 undefined。

**返回值**：找到的元素（或 undefined）。

**参数**：回调函数接收三个参数：

- element：当前元素。
- index：当前元素的索引。
- array：原始数组。

**是否影响原数组**：不修改原数组。

```javascript
const arr = [1, 2, 3, 4, 5];
const found = arr.find((element, index, array) => element > 3);
console.log(found); // 4（第一个大于 3 的元素）
```

#### 12.findIndex

**功能**：返回数组中第一个通过回调函数测试的元素的索引（返回 true 的元素），如果没有找到则返回 -1。

**返回值**：找到的元素索引（或 -1）。

**参数**：回调函数接收三个参数：

- element：当前元素。
- index：当前元素的索引。
- array：原始数组。

**是否影响原数组**：不修改原数组

```javascript
const arr = [1, 2, 3, 4, 5];
const index = arr.findIndex((element, index, array) => element > 3);
console.log(index); // 3（第一个大于 3 的元素索引）
```

