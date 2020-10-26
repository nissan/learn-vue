# Learning Vue (2 then 3)

## First Steps

- Create HTML file index.html
- Create JS file main.js
- Install vue by adding script reference from [documentation][1]

  - Development:

    ```html
        <!-- development version, includes helpful console warnings -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    ```

    - Production:

    ```html
        <!-- production version, optimized for size and speed -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    ```

## Attribute binding

- Shorthand for `v-bind:<tag>` is simply `:<tag>`

## Conditional Rendering

- `v-if` inserts or removes elements into the DOM. It's more efficient to use `v-show` which will toggle the display property on and off.

From [docs][2]:

>...prefer `v-show` if you need to toggle something very often, and prefer `v-if` if the condition is unlikely to change at runtime.



[1]:https://vuejs.org/v2/guide/
[2]: https://vuejs.org/v2/guide/conditional.html