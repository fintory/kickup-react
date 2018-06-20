# Implementing a custom font-face

> This section is straight copied from the font-face guide of [aphrodite](https://github.com/Khan/aphrodite#font-faces)

Creating custom font faces is a special case. Typically you need to define a global `@font-face` rule. In the case of Aphrodite we only want to insert that rule if it's actually being referenced by a class that's in the page. We've made it so that the `fontFamily` property can accept a font-face object (either directly or inside an array). A global `@font-face` rule is then generated based on the font definition.

```js
const coolFont = {
    fontFamily: "CoolFont",
    fontStyle: "normal",
    fontWeight: "normal",
    src: "url('coolfont.woff2') format('woff2')"
};

const styles = StyleSheet.create({
    headingText: {
        fontFamily: coolFont,
        fontSize: 20
    },
    bodyText: {
        fontFamily: [coolFont, "sans-serif"]
        fontSize: 12
    }
});
```

Aphrodite will ensure that the global `@font-face` rule for this font is only inserted once, no matter how many times it's referenced.
