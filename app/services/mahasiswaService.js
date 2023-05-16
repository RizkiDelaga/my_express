const {
    Model
} = require('sequelize')
const {
    Mahasiswa
} = require('../models')

module.exports = {
    async getAll() {
        try {
            return await Mahasiswa.findAll()
        } catch (error) {
            throw error;
        }
    },
    
    async getById(id) {
        try {
            return await Mahasiswa.findOne({
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw error;
        }
    },

    async createMahasiswa(data) {
        try {
            return await Mahasiswa.create(data)
        } catch (error) {
            throw error;
        }
    },

    async updateMahasiswa(id, updatex) {
        try {
            console.log(id)
            return await Mahasiswa.update(updatex, {
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw error;
        }
    },

    async deleteMahasiswa(id) {
        try {
            return await Mahasiswa.destroy({
                where: {
                    id: id
                }
            })
        } catch (error) {
            throw error;
        }
    }
}