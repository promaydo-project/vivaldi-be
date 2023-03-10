const loaningModel = require('../models/loaning')
const miscHelper = require('../helpers/helpers')

module.exports = {
    getLoaning: (req, res) => {
        loaningModel.getloaning()
            .then((resultLoaning) => {
                const result = resultLoaning

                if (result[0]) {
                    miscHelper.response(res, result, 200)
                } else {
                    miscHelper.response(res, 'null', 404, 'no data!')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },

    getLoanByUser: (req, res) => {
        const iduser = req.params.iduser
        loaningModel.getLoanByUser(iduser)
            .then((resultLoaning) => {
                const result = resultLoaning

                if (result[0]) {
                    miscHelper.response(res, result, 200)
                } else {
                    miscHelper.response(res, 'kamu belum meminjam buku', 404, 'data not found')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },

    detailLoaning: (req, res) => {
        const loaningid = req.params.loaningid

        loaningModel.detailLoaning(loaningid)
            .then((resultLoaning) => {
                const result = resultLoaning

                if (result[0]) {
                    miscHelper.response(res, result, 200)
                } else {
                    miscHelper.response(res, 'null', 404, 'data not found')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },

    addLoaning: (req, res) => {
        let expired_date = new Date()
        expired_date.setDate(expired_date.getDate() + 5)
        const data = {
            bookid: req.body.bookid,
            id_card: req.body.id_card,
            expired_date: expired_date,
            forfeit: 0,
            isverify: "false",
            created_at: new Date(),
            updated_at: new Date()
        }
        loaningModel.addLoaning(data)
            .then(() => {
                miscHelper.response(res, data, 201)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    deleteLoaning: (req, res) => {
        const loaningid = req.params.loaningid

        loaningModel.deleteLoaning(loaningid)
            .then((resultLoaning) => {
                const result = resultLoaning

                if (result) {
                    miscHelper.response(res, result, 200)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },

    updateLoaning: (req, res) => {
        const loaningid = req.params.loaningid
        const data = {
            bookid: req.body.bookid,
            forfeit: req.body.forfeit,
            isverify: "true",
            updated_at: new Date()
        }

        loaningModel.updateLoaning(loaningid, data)
            .then(() => {
                miscHelper.response(res, data, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}