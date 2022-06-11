# random

Simple and elegant generation of random data.



## Installtion

```sh
npm i @liting-yes/randomall
```



## Hello Random

```js
const random = require('randomall')
```

### random number

#### simple to use

```js
random.number()
// output: 88
// return an integer between [0, 100)
```
#### use with args

Function random.number has 5 params as follows:

- **min** *number*

> mininum random number isn't less than it

- **max** *number*

> maxinum random number doesn't exceed it

- **radix** *number*

> base of return value (2-36)
>
> **notice**: when radix != 10, the return value will be the string value of the corresponding random number

- **isInteger** *boolean*

> whether the return value is integer

- **decimal** *number*

> max number of decimal places returned



```js
random.number(1, 10, 10, false, 5)
// optput: 1.58
// return a float between [1, 10) with no more than 5 decimal places
```

### random boolean

#### simple to use

```js
random.string()
// output: Z1Qdvk
// return a random string whose characters are letters and numbers
```



#### use with args

Function random.stringhas 6 params as follows:



- **len** *number*

  > length of random string

- **banNum** *number*

  > random string without numbers*

- **banLowercase** *boolean*

  > random string without lowercase letters

- **banUppercase** *boolean*

  > random string without uppercase letters*

- **add** *array*

  > special characters that random string contains

- **remove** *array*

  > special characters that random string must never contain

```js
random.string(10, true, false, true, ['@', '#', '?'], ['a', 'b', 'c'])
// output: #sr#u?ljsv
// return a random string that contain possibly the characters '@', '#', '? ' and no digits, uppercase letters, 'a', 'b', 'c'
```



### random boolean

#### simple to use

```
random.boolean()
// output: true
// return a random boolean value
```



### random array

#### simple to use

```js
random.array()
// output: [45, 71,  8, 20, 79, 17, 73, 16, 85, 44]
// return an array of length 10 and each element has a value greater than 0 and less than 100
```



#### use with args

- **len** *number*

  > length of random array

- **fn** *function* 

  > the function to generate random value

- **args** *remain parameters*

  > function arguments of fn

```js
random.array(5, random.number, 1, 10)
// output: [ 9, 5, 2, 5, 5 ]
// return an array with 5 number element which is greater than 1 less than 10
```

