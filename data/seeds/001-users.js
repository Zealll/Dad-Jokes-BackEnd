
exports.seed = function(knex, Promise) {
  return knex('users').del().then(function () {
      return knex('users').insert([
        {
          firstName: 'Elan',
          lastName: 'Riznis',
          email: 'elan@gmail.com',
          password: 'password1'
        },
        {
          firstName: 'Andy',
          lastName: 'Dillon',
          email: 'andy@gmail.com',
          password: 'password2'
        }
      ]);
    });
};
