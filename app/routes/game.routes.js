const controller = require('../controllers/game.controller');

module.exports = app => {
    app.prefix('/games', (game) => {
        game.route('/').get(controller.allGames);
        game.route('/').post(controller.newGame);
        game.route('/').delete(controller.allGamesDelete);
        game.route('/:sessionId').put(controller.updateGame);
        game.route('/:sessionId').get(controller.getGame);
        game.route('/:sessionId').delete(controller.deleteGame);
    });
};