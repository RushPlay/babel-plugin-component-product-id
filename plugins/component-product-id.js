function isTargetCallExpression(path) {
  return path.node.callee.type === 'MemberExpression'
    && path.node.callee.property.name === 'createElement'
    && path.node.arguments[0].type === 'Identifier'
}

module.exports = function componentProductId(babel) {
  const { types: t } = babel

  return {
    name: 'component-product-id',
    visitor: {
      CallExpression(path) {
        if (isTargetCallExpression(path)) {
          const componentIdentifier = path.node.arguments[0]

          path.node.arguments[0] = t.logicalExpression(
            '||',
            t.memberExpression(
              componentIdentifier,
              t.memberExpression(
                t.memberExpression(
                  t.identifier('process'),
                  t.identifier('env')
                ),
                t.identifier('PRODUCT_ID')
              ),
              true
            ),
            componentIdentifier
          )
        }
      },
    },
  }
}
