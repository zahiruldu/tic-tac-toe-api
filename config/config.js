module.exports = {
  //MongoDB configuration
  development: {
    db: 'mongodb://tictac:TicUser123456@ds011495.mlab.com:11495/tictactoe',
    app: {
      name: 'tictactoe'
    }
  },
  production: {
    db: 'mongodb://127.0.0.1/tictactoe',
    app: {
      name: 'tictactoe'
    }
  }
};