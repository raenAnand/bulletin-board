/**
 * Seed users table.
 *
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('users')
    .del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert([
          {
            name: 'Ayush Ghimire',
            username: 'ayush',
            password: 'ghimire',
            updated_at: new Date()
          },
          {
            name: 'Basanta Maharjan',
            username: 'basanta',
            password: 'maharjan',
            updated_at: new Date()
          }
        ])
      ]);
    });
}
