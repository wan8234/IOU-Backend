const db = require('../models');

function showAll(callback){
    db.vote_boards.findAll({
        where:{}
    })
    .then(result => {0
        if(!result){
            return callback(err);
        }
        return callback(null, result);
    })
    .catch(err => {
        return callback(err);
    })
}

function showAllUserBoard(id, callback){
    db.vote_boards.findAll({
        where:{
            writer: id
        }
    })
    .then(result => {
        if(!result){
            return callback(err);
        }
        return callback(null, result);
    })
    .catch(err => {
        return callback(err);
    })
}

function showOneBoard(req, callback){
    db.vote_boards.findOne({
        where:{
            postNum: req.body.postNum
        }
    })
    .then(result => {
        if(!result){
            return callback(err);
        }
        return callback(null, result.dataValues);
    })
    .catch(err => {
        return callback(err);
    })
}

function showOnePromise(req){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            db.vote_boards.findOne({
                where:{
                    postNum: req.body.postNum
                }
            })
            .then(result => {
                if(!result){
                    reject(new Error());
                }
                resolve(result.dataValues);
            })
            .catch(err => {
                reject(err);
            })
        }, 100);
    });
}

function deleteBoard(req){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            db.vote_boards.destroy({
                where: {
                    postNum: req.body.postNum
                }
            })
            .then(result => {
                if(!result){
                    reject(new Error());
                }
                resolve(result.dataValues);
            })
            .catch(err => {
                reject(err);
            })
        }, 100);
    });
}

function makeVote(req){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            db.votes.create({
                postNum: req.body.postNum,
                user: req.body.id,
                choice: req.body.choice
            })
            .then(result => {
                if(!result){
                    reject(new Error());
                }
                resolve(result.dataValues);
            })
            .catch(err => {
                reject(err);
            })
        }, 100);
    });
}

function showVote(req){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            db.votes.findAll({
                where: {
                    postNum: req.body.postNum
                }
            })
            .then(result => {
                if(!result){
                    reject(new Error());
                }
                resolve(result);
            })
            .catch(err => {
                reject(err);
            })
        }, 100);
    }); 
}

function showUserVote(req){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            db.votes.findOne({
                where: {
                    postNum: req.body.postNum,
                    user: req.body.id
                }
            })
            .then(result => {
                if(!result){
                    resolve(result);
                }
                resolve(result.dataValues);
            })
            .catch(err => {
                reject(err);
            })
        }, 100);
    });
}

function deleteVote(req){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            db.votes.destroy({
                where: {
                    voteNum: req.body.voteNum,
                    user: req.body.id
                }
            })
            .then(result => {
                if(!result){
                    reject(new Error());
                }
                resolve(result.dataValues);
            })
            .catch(err => {
                reject(err);
            })
        }, 100);
    });
}

function deleteAllVote(req){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            db.votes.destroy({
                where: {
                    postNum: req.body.postNum
                }                
            })
            .then(result => {
                if(!result){
                    reject(new Error());
                }
                resolve(result.dataValues);
            })
            .catch(err => {
                reject(err);
            })
        }, 100);
    });
}

module.exports = {
    showAll: showAll,
    showAllUserBoard: showAllUserBoard,
    showOneBoard: showOneBoard,
    showOnePromise: showOnePromise,
    deleteBoard: deleteBoard,
    makeVote: makeVote,
    showVote: showVote,
    showUserVote: showUserVote,
    deleteVote: deleteVote,
    deleteAllVote: deleteAllVote
}