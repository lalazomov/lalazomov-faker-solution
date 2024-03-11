const axios = require('axios')
const { FAKER_API_URL2 } = require('./constants')
const { mapResponse } = require('./utils')

/** Depencency **/
console.log('test')

/**
 * Generates fake data using Faker API.
 * @async
 * @function generate
 * @param {Object} [params={}] - The parameters for generating fake data.
 * @param {string} [params.gender=''] - The gender for fake data generation.
 * @param {number} [params.results=''] - The number of results to generate.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of generated fake data objects.
 * @throws {Error} - Throws an error if failed to generate faker data.
 */
async function generate(params = {}) {
  let q = { gender: '', results: '' }

  if (params.gender) {
    q.gender = params.gender
  }

  if (params.results) {
    q.results = parseInt(params.results)
  }

  q = new URLSearchParams(q).toString()
  const req = await axios.get(FAKER_API_URL2 + '?' + q)
  const res = await req.data

  if (!res.results) {
    throw new Error('failed to generate faker data.')
  }

  let results = []
  for (let i = 0; i < res.results.length; i++) {
    results.push(mapResponse(res.results[i]))
  }

  return results
}

module.exports = generate
