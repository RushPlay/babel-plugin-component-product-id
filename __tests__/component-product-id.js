const { transform } = require('babel-core')
const componentProductId = require('../plugins/component-product-id')

describe('plugins/component-product-id', () => {
  it('transforms createElement component name to LogicalExpression', () => {
    // arrange
    const input = `
      const Component = {}
      React.createElement(Component)
    `
    const options = { plugins: [componentProductId] }

    // act
    const { code } = transform(input, options)

    // assert
    expect(code).toMatchSnapshot()
  })

  it('uses given variable name instead process.env.PRODUCT_ID', () => {
    // arrange
    const input = `
      const Component = {}
      React.createElement(Component)
    `
    const pluginOptions = { productIdSource: '__PROD_ID__' }
    const options = { plugins: [[componentProductId, pluginOptions]] }

    // act
    const { code } = transform(input, options)

    // assert
    expect(code).toMatchSnapshot()
  })

  it('skips other CallExpressions', () => {
    // arrange
    const input = `
      const Component = {}
      React.createClass(Component)
      console.log(Component)
    `
    const options = { plugins: [componentProductId] }

    // act
    const { code } = transform(input, options)

    // assert
    expect(code).toMatchSnapshot()
  })

  it('skips string components', () => {
    // arrange
    const input = `
      React.createClass('div')
    `
    const options = { plugins: [componentProductId] }

    // act
    const { code } = transform(input, options)

    // assert
    expect(code).toMatchSnapshot()
  })
})
