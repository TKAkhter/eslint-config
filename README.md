# ESLINT

## Purpose

We use eslint to ensure code quality and consistency. Any commit should be free of errors and also warnings.
Even though warnings are not enforced they still need to be fixed as the output will otherwise get too cluttered and hard to maintain.

Now you can run `npm i @tkakhter/eslint-config --save-dev`.

## Project Usage

You can now create an `eslintrc.js` file with this as the basis

```js
module.exports = {
    extends: "@tkakhter/eslint-config",
    rules: {

    },
    ignorePatterns: [".eslintrc.js"],
};
```

## Rules

Rules are generally accepted industry standards that have proven themselves in many projects across github and are widely used.

They also:

- ensure consistent code
- point out structures that may be result in undesired side effects or are otherwise problematic
- reduce merge conflicts as they ensure a common formatting
- reduce the work needed during code reviews (and the followup corrections) as they alert you to many issues ahead of the review already

## Exceptions

Rules can be disabled on a case by case basis, this is sometimes needed (mostly for warnings).
In cases like these the rules are there to ensure that each of those usages is carefully considered before being disabled.

### Examples

The logger uses `// eslint-disable-next-line no-console` as it needs to be able to log.
But any other component should use the logger to log.

In a few components we use:

```javascript
{
  /* eslint-disable react/no-danger */
}
<div
  dangerouslySetInnerHTML={{
    __html: "<div>Some external markup</div>",
  }}
/>;
{
  /* eslint-enable react/no-danger */
}
```

We enforce this rule as every usage of dangerouslySetInnerHTML needs to be carefully considered as it opens up the possibility of harmful code injection.

## Best Practices

- eslint integrates with prettier so ensure that major versions of eslint and prettier match
- Run `npm run lint` frequently to alert you to possible issues earlier on. Issues are easier to fix if they don't extend over a large number of files already.
- some issues can be fixed automatically by running `npm run lint:fix` - this is best done with no other pending changes as the result should be checked in your git client.
- When you encounter an issue you're not familiar with or don't know how to fix always check https://eslint.org/ first and use the search functionality to look up the rule.
- Some rules may not be covered on https://eslint.org/ in this case the rule is part of a plugin and needs to be googled. Best just copy & paste the entire name of the rule into google and hit search.
