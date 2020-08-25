import faker from 'faker'
// Generate multiple products - solution from https://github.com/Marak/faker.js/issues/399
export default function dataGenerator(min, max) {
  // Set schema
  const clientsSchema = {
    id: '{{random.number}}',
    color: '{{commerce.color}}',
    department: '{{commerce.department}}',
    productName: '{{commerce.productName}}',
    price: '{{commerce.price}}',
    productAdjective: '{{commerce.productAdjective}}',
    productMaterial: '{{commerce.productMaterial}}',
    product: '{{commerce.product}}',
    productDescription: '{{commerce.productDescription}}'
  }

  // random generator
  const generator = (min = 1, max) => {
    max = max || min
    return Array.from({ length: faker.random.number({ min, max }) }).map(() => Object.keys(clientsSchema).reduce((entity, key) => {
      entity[key] = faker.fake(clientsSchema[key])
      return entity
    }, {}))
  }

  return generator(min, max)
}
