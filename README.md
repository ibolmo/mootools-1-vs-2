## MooTools 1.3.x vs 2.y.x

A repo. used to demonstrate the differences between 1.3.x, 2.y.x, and 2.y.x with the use of `Host.install`.

Branches `1.3.x` and `2.y.x` are what'd you expect them to be. Always checkout and push to the right branch depending on the code. Try not to optimize the code. We're interested in easy comparisons. 

Branch `2.y.x-installed` is code that uses the `Host.install` method. This is used for `native augmentation`. In other words: `Array.install()` will allow 1.3.x style: `[].forEach`.

### Demonstrations

[Compare 1.3.x and 2.y.x code.](https://github.com/ibolmo/mootools-1-vs-2/compare/1.3.x...2.y.x)
[Compare 1.3.x and 2.y.x-installed code.](https://github.com/ibolmo/mootools-1-vs-2/compare/1.3.x...2.y.x-installed)
[Compare 2.y.x and 2.y.x-installed code.](https://github.com/ibolmo/mootools-1-vs-2/compare/2.y.x...2.y.x-installed)

### Contribute
These examples have been selected or contributed by others. You can send your own code so that you can see the exact difference between the `1.3.x` and `2.y.x` code.

1. Fork the repo.
2. Clone your new repo: `git clone git@github.com:USERNAME/mootools-1-vs-2.git`
3. Add your 1.3.x file. `git add .; git commit -am "Added MY_FILE.js."
4. Push your changes. `git push origin 1.3.x`
5. Send a pull request.

Optionally:

1. Checkout `2.y.x` branch and try to port your code. `git checkout origin/2.y.x; commit -am "Ported to 2.y.x"
2. Push your changes. `git push origin 2.y.x`
3. Send a pull request.

Same instructions for `2.y.x-installed`.
