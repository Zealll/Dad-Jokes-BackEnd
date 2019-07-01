
exports.seed = function(knex, Promise) {
  return knex('jokes').del().then(function () {
      return knex('jokes').insert([
        {
          author: "Elan Riznis",
          joke: "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!",
          likes: 0,
          user_id: 1
        },
        {
          author: 'Elan Riznis',
          joke: "How do you get a squirrel to like you? Act like a nut.",
          likes: 0,
          user_id: 1
        },
        {
          author: 'Elan Riznis',
          joke: "Did you hear the rumor about butter? Well, I'm not going to spread it!",
          likes: 0,
          user_id: 1
        },
        {
          author: 'Elan Riznis',
          joke: "This graveyard looks overcrowded. People must be dying to get in.",
          likes: 0,
          user_id: 1
        },
        {
          author: 'Elan Riznis',
          joke: "I'm reading a book about anti-gravity. It's impossible to put down!",
          likes: 0,
          user_id: 1
        }
      ]);
    });
};
