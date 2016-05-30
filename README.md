# ES6-Classes-Mixin

You can use function mix to extend your classes like this:

```Javascript
class NewClass extends mix(classA, classB [, classC, ...]){
  constructor(...args) {
    super(...args)

    // Your code here
  }
}
```

This function will automatically mix all your class in together and manage every `Constructor` for you. In other words, you're able to set your superclass as the first class.

```Javascript
class NewClass extends mix(superclass, classA, [, classB, ...]){
  constructor(...args) {
    super(...args)

    // Your code here
  }
}
```


If you don't like this kind of mixin function, please check [MixWith.js](https://github.com/justinfagnani/mixwith.js) for more infomation.

#### Define a Mixin:

```javascript
let MyMixin = (superclass) => class extends superclass {
  // mixin methods here
};
```

#### Use a Mixin without mixwith:

```javascript
class MyClass extends MyMixin(MySuperClass) {
  // class methods here, go ahead, use super!
}
```

#### Use a Mixin with mixwith:

```javascript
class MyClass extends mix(MySuperClass).with(MyMixin, OtherMixin) {
  // class methods here, go ahead, use super!
}
```
