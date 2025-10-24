import express from 'express'
import { getAllSiswa, createSiswa, getSiswaById, updateSiswa, deleteSiswa } from '../controllers/siswa.controller.js';

const siswaRoute = express.Router();

siswaRoute.post('/', createSiswa)
siswaRoute.get('/', getAllSiswa)
siswaRoute.get('/:id', getSiswaById)
siswaRoute.put('/:id', updateSiswa)
siswaRoute.delete('/:id', deleteSiswa)

export default siswaRoute