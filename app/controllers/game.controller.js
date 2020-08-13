
const Game =  require('../models/game.model');
const Winner =  require('../../utils/winner');

exports.allGames = async (req, res) => {

  const result = await Game.find({}).exec();

  res.send(result);
};

exports.newGame = (req, res) => {

  const sessionId = req.body.sessionId;
  if(!sessionId) {
    res.status(400).send({
      message: ' SessionId required'
    });
  } else {
    // check if already this session exist;
    Game.findOne({sessionId:  sessionId}).exec((error, gameInfo)=>{
      if(error) {
        res.status(403).send({
          message: 'Unable to serve'
        });
      } else {
        if(gameInfo) {
          // game already exist
          res.status(401).send({
            message: 'Game session already exist'
          });
        } else {
          // create a new game
          const newGame = new Game({
            sessionId: sessionId,
            board: ['','','','','','','','','']
          });
          newGame.save((err, result)=>{
            if(err) {
              res.status(403).send({
                message: 'Unable to serve'
              });
            } else {
              res.send(result);
            }
          });
        }
      }
    });
  }

};

exports.updateGame = (req, res) => {

  const sessionId = req.params.sessionId;
  const { player , position } = req.body;

  if(!sessionId && !player && ! position ) {
    res.status(400).send({
      message: ' Required information missing'
    });
  } else {
    Game.findOne({sessionId:  sessionId}).exec((error, gameInfo)=>{
      if(error) {
        res.status(403).send({
          message: 'Unable to serve'
        });
      } else {
        
        let newBoard = gameInfo.board;
        newBoard.splice(position, 1, player);
        gameInfo.board = newBoard;
        gameInfo.lastPlayer = player;

        // check if winner
        const isWinner = Winner.isWinner(newBoard, player);
        if(isWinner) {
          // save the  winning
          gameInfo.winner = player;
          gameInfo.status = 'won';

        }

        gameInfo.save((error, result)=>{
          if(error){
            res.status(403).send({
              message: 'Unable to serve'
            });
          } else {
            res.send(result);
          }
        });
      }
    });
  }
};

exports.getGame = (req, res) => {
  const sessionId = req.params.sessionId;
  if(!sessionId) {
    res.status(400).send({
      message: ' SessionId required'
    });
  } else {
    Game.findOne({sessionId:  sessionId}).exec((error, gameInfo)=>{
      if(error) {
        res.status(403).send({
          message: 'Unable to serve'
        });
      } else {
        res.send(gameInfo);
      }
    });
  }

};

exports.deleteGame = (req, res) => {

  const sessionId = req.params.sessionId;
  if(!sessionId) {
    res.status(400).send({
      message: ' SessionId required'
    });
  } else {
    Game.findOneAndDelete({sessionId:  sessionId}).exec((error, gameInfo)=>{
      if(error) {
        res.status(403).send({
          message: 'Unable to serve'
        });
      } else {
        res.send(gameInfo);
      }
    });
  }
};

module.exports = exports;