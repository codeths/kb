---
layout: page
title: General Resources
---

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Languages](#languages)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript + TypeScript](#javascript--typescript)
  - [Rust](#rust)

## Languages

For programming languages, there will be an example that completes the common FizzBuzz interview question. Otherwise, the example will be arbitrary.

### HTML

HTML is an XML-based **markup** language (**not** a programming language - that's a common misconception) used to specify your website's organization.

[MDN](https://developer.mozilla.org/) is an excellent resource. They provide resources for [beginners](https://developer.mozilla.org/en-US/docs/Learn) learning HTML and a [reference](https://developer.mozilla.org/en-US/docs/Web/HTML) for working with it.

```html
<html>
  <head>
    <title>Cool Page</title>
  </head>
  <body>
    <ul>
      <li class="cool">Cool Thing 1</li>
      <li class="cool">Cool Thing 2</li>
      <li class="uncool">Uncool thing!</li>
    </ul>
  </body>
</html>
```

### CSS

CSS is a pseudo-programming-language used to declare the appearance of a webpage or application using selectors and properties.

[MDN](https://developer.mozilla.org/) is an excellent resource. They provide resources for [beginners](https://developer.mozilla.org/en-US/docs/Learn) learning CSS and a [reference](https://developer.mozilla.org/en-US/docs/Web/CSS) for working with it.

```css
li.cool {
  color: blue
}
li.uncool {
  color: red
}
```

### JavaScript + TypeScript

JavaScript is a simple interpreted/JIT language that's gained an incredible mind share because it's the only language that can run in all modern web browsers. It was originally made as a simpler alternative to Java applets in the browser, which is the reason behind its name; otherwise, it has nothing to do with Java.

TypeScript is an extension to JavaScript allowing for compile-time type checking before being converted to JavaScript. Its syntax is a superset of JavaScript's; all JavaScript is valid TypeScript.

JavaScript and TypeScript are useful for building web apps and network services, so long as optimal performance isn't a concern.

[MDN](https://developer.mozilla.org/) is an excellent resource. They provide resources for [beginners](https://developer.mozilla.org/en-US/docs/Learn) learning JavaScript and a [reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for working with it.

```javascript
let checks = [
  [3, "Fizz"],
  [5, "Buzz"]
]
for (let i = 0; i < 100; i++) {
  let out = ''
  checks.forEach(check => {
    if (i % check[0] === 0) {
      out += check[1]
    }
  })
  if (out.length === 0) {
    out = i.toString()
  }
  console.log(out)
}
```

### Rust

Rust is a modern compiled language backed by Mozilla, designed to provide zero-cost abstractions, ease the pain of multi-threading, and guarantee safety from memory leaks and undefined behavior.

Rust is useful for building bare-metal systems, C-compatible libraries, command-line and graphical programs, network services, and even fast client-side web apps thanks to WebAssembly.

Rust has a considerable learning curve, but the official resources are intended to ease the process.

[The Book](https://doc.rust-lang.org/stable/book/) is the Rust Foundation's official path to learning Rust.

[Rust By Example](https://doc.rust-lang.org/stable/rust-by-example/) is a collection of examples of Rust code that demonstrate certain features.

[The Rustonomicon](https://doc.rust-lang.org/nomicon/) is n̮͉̠̥̦̥͙̣̪̗͉͚͈̺̟̲ͥͭ̈ͩ̉̂ͯ͒̌̏̐̎͑̓̀͘͜͟͟ͅo̟̦̖͈̞̹̫̰̲̮̺̠͍̺̮ͮ̿͗̐̾ͭ͒ͨͭ̒̎͐ͣ͊̈̓͆̚͘͝t͛̍͌ͥ̐̀̔ͤ̌̂͒̐ͥ͆͊͐͏̙̬̦͔̪̭͍̰̦̕ ̴̶̡̥̪̭̩̹͈̬̲̺͇̮̝̘͇͆͊̀̍ͥ̀̊̒ͨͫͣ̈́ͥ͑ͦ̃͢tͯͪ͛̋̈́̑̎͑ͯͦͥͮͭͭ͛͐͒ͮ́͡҉̶̨̲̼̦̼o͆͂ͨ̽̌͑̍̊̚͏̠̰͙̺̲̦̦̭̤͡ ̸̨̛͈̮̺̜̝̗͕͈̮̜͚̯̰̦ͭ̏̒ͬ̍̑ͦ̌ͤ͋̀͐͒͑́͠b̸̸̳͕̩͚͕̳͉̩̼̺̰̱̭͊͆ͦ̆ͥ͐̓̇̽̆ͬ͛ͣͩ̽̎͐ͣͣ̀͡e̷̥̯̯̮̦̬̲͚͓̲̰͍͎͎̜͕̿ͮͫͪ͑͌͠ ̢̱͇̙̦̯̺̘̙̜̙̆̅ͥ̌̒̐̃̌ͯ̃ͧ͗ͪ̒́̕ͅu̵̸̴̪͓̭̜̭̻̝̜̜̻̥͕̬̬̲̫̥ͥ͗ͯ̈̄ͤ͗ͮ͜͜sͦ̽̌̃̽̓ͧ̓́ͮͧ̅̒̑̐͆̐͆͏̞̖̻̯̀ͅē̶̮͈̖̥̩̭̘͕̪̻͓̗̙̊̓ͤͣ̆͐ͦ́͜͟͠d̨ͨͭ̾̇͊̕͏͎̫̹̮̰̺̪̹̮̟͙̻́͘

```rust
let checks = vec![(3, "Fizz"), (5, "Buzz")];
  (1..100)
    .into_iter()
    .map(|n| {
      match checks
        .iter()
        .filter(|(quotient, _)| n % quotient == 0)
        .map(|(_, string)| string.to_string())
        .collect::<String>()
      {
        s if s.len() > 0 => s,
        _ => n.to_string(),
      }
    })
    .for_each(|v| println!("{}", v))
```