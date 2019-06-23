
exports.seed = function(knex, Promise) {
  return knex('jokes').del().then(function () {
      return knex('jokes').insert([
        {
          author: "Elan Riznis",
          joke: "I think I'm funny... sometimes.",
          user_id: 1
        },
        {
          author: 'Andy Dillon',
          joke: "I am actually hilarious on the other hand, unlike Elan!",
          user_id: 2
        }
      ]);
    });
};
