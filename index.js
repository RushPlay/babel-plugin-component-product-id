const componentProductId = require('./plugins/component-product-id')

module.exports = function preset(context, opts = {}) {
  const componentProductIdOptions = { productIdSource: opts.productIdSource }

  return { plugins: [[componentProductId, componentProductIdOptions]] }
}
