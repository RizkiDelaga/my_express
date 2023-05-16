const {
    response
} = require('express')
const mahasiswaService = require('../services/mahasiswaService')

module.exports = {
    async getAll(req, res) {
        try {
            const data = await mahasiswaService.getAll()
            res.status(200).json({
                status: true,
                message: "Data Berhasil di Tampilkan!",
                data: data
            })
        } catch (error) {
            res.status(404).json({
                status: false,
                message: error.message
            })
        }
    },

    async getById(req, res) {
        try {
            const data = await mahasiswaService.getById(req.params.id)
            res.status(200).json({
                status: true,
                message: "Data Berhasil di Tampilkan!",
                data: data
            })
        } catch (error) {
            res.status(404).json({
                status: false,
                message: error.message
            })
        }
    },

    async createData(req, res) {
        try {
            const data = await mahasiswaService.createMahasiswa(req.body)
            res.status(200).json({
                status: true,
                message: "Data Berhasil di Tampilkan!",
                data: data
            })
        } catch (error) {
            res.status(404).json({
                status: false,
                message: error.message
            })
        }
    },

    async updateData(req, res) {
        try {
            console.log(req.body)

            await mahasiswaService.updateMahasiswa(req.params.id, {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description
            })
            console.log("salah")
            const data = await mahasiswaService.getById(req.params.id)
            res.status(200).json({
                status: true,
                message: "Data Berhasil di Tampilkan!",
                data: data
            })
        } catch (error) {
            console.log(error)
            res.status(404).json({
                status: false,
                message: "error.message"
            })
        }
    },

    async deleteData(req, res) {
        try {
            const data = await mahasiswaService.deleteMahasiswa(req.params.id)
            if (data === 1) {
                res.status(200).json({
                    status: true,
                    message: "Data Berhasil di Hapus!",
                    data: data
                })
                
            }else {
                res.status(404).json({
                    status: false,
                    message: "data not found"
                })
            }
        } catch (error) {
            res.status(404).json({
                status: false,
                message: error.message
            })
        }
    }
}