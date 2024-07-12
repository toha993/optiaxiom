import { ESLintUtils } from "@typescript-eslint/utils";

export default ESLintUtils.RuleCreator.withoutDocs({
  create(context) {
    return {
      /**
       * @type {import('@typescript-eslint/utils').TSESLint.RuleListener['AssignmentExpression']}
       */
      'Program > ExpressionStatement > AssignmentExpression[left.type="MemberExpression"][left.object.type="Identifier"][left.property.name="displayName"][right.type="Literal"]':
        (node) => {
          const expected = `@optiaxiom/react/${node.left.object.name}`;
          if (node.right.value !== expected) {
            context.report({
              fix: (fixer) => fixer.replaceText(node.right, `"${expected}"`),
              messageId: "expected",
              node,
            });
          }
        },
    };
  },

  defaultOptions: [],

  meta: {
    fixable: "code",
    messages: {
      expected: "Please prefix the component displayName with the package name",
    },
    schema: [],
    type: "suggestion",
  },
});
