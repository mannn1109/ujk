import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

// Create Siswa
export const createSiswa = async (req, res) => {
    const {nama, alamat, tglLahir, jurusan} = req.body

    const siswa = await prisma.siswa.create({
        data: {
            nama,
            alamat,
            tglLahir: new Date(tglLahir),
            jurusan
        }
    });

    res.status(200).json({
        message: `Successfully creating siswa`,
        siswa
    })
}

// Get All Siswa
export const getAllSiswa = async (req, res) => {
    const siswa = await prisma.siswa.findMany()
    res.status(200).json({
        message: 'Successfully retrieving all siswa',
        siswa
    })
}

// Get Siswa by ID
export const getSiswaById = async (req, res) => {
    const {id} = req.params

    const siswa = await prisma.siswa.findUnique({
        where: {id: Number(id)}
    });

    if (!siswa) {
        res.status(404).json({
            message: `Siswa doesn't exist`
        })
    }

    res.status(200).json({
        message: `Successfully retrieving siswa with id ${id}`,
        siswa
    })
}

// Update Siswa
export const updateSiswa = async (req, res) => {
    const {id} = req.params
    const {nama, alamat, tglLahir, jurusan} = req.body

    const siswa = await prisma.siswa.findUnique({
        where: {id: Number(id)}
    });

    if (!siswa) {
        res.status(404).json({
            message: `Siswa doesn't exist`
        })
    }

    const siswaToUpdate = await prisma.siswa.update({
        where: {id: Number(id)},
        data: {
            nama,
            alamat,
            tglLahir,
            jurusan
        }
    })

    res.status(200).json({
        message: `Successfully updating siswa with id ${id}`,
        siswaToUpdate
    });
}

// Delete Siswa
export const deleteSiswa = async (req, res) => {
    const {id} = req.params

    const siswa = await prisma.siswa.delete({
        where: {id: Number(id)}
    });

    if (!siswa) {
        res.status(404).json({
            message: `Siswa doesn't exist`
        })
    }

    res.status(200).json({
        message: `Successfully deleting siswa with id ${id}`
    })
}