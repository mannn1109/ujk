import axios from 'axios'
import React, { useState } from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'

function TambahSiswa() {
    const [nama, setNama] = useState('')
    const [alamat, setAlamat] = useState('')
    const [tglLahir, setTglLahir] = useState('')
    const [jurusan, setJurusan] = useState('')
    const navigate = useNavigate();

    const tambahSiswa = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3000/siswa`, {
                nama,
                alamat,
                tglLahir,
                jurusan
            });
            navigate('/')
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }

  return (
    <div className="flex flex-col container mx-auto">
        <div className='flex justify-between items-center my-6'>
            <Link to={'/'}>
                <FaArrowLeft className='cursor-pointer'/>
            </Link>
            <h1 className='text-2xl font-semibold'>Tambah Siswa</h1>
            <div className="w-6"></div>
        </div>

        
        <div className="flex w-full justify-center">
            <div className="w-md p-6 shadow-md rounded-xl">
                <form onSubmit={tambahSiswa}>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="nama" className='mb-1'>Nama Siswa</label>
                        <input 
                            type="text"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            className='border py-1 rounded border-gray-300 p-2'
                            placeholder='Masukkan nama siswa' 
                            />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="alamat" className='mb-1'>Alamat Siswa</label>
                        <input 
                            type="text"
                            value={alamat}
                            onChange={(e) => setAlamat(e.target.value)}
                            className='border py-1 rounded border-gray-300 p-2'
                            placeholder='Masukkan alamat siswa' 
                            />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="tglLahir" className='mb-1'>Tanggal Lahir Siswa</label>
                        <input 
                            type="date"
                            value={tglLahir}
                            onChange={(e) => setTglLahir(e.target.value)}
                            className='border py-1 rounded border-gray-300 p-2'
                            placeholder='Masukkan tanggal lahir siswa' 
                            />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="jurusan" className='mb-1'>Jurusan Siswa</label>
                        <input 
                            type="text"
                            value={jurusan}
                            onChange={(e) => setJurusan(e.target.value)}
                            className='border py-1 rounded border-gray-300 p-2'
                            placeholder='Masukkan Jurusan siswa' 
                            />
                    </div>

                    <button className='bg-gray-700 hover:bg-gray-800 rounded text-white w-full p-2 cursor-pointer mt-2 font-semibold'>Simpan</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default TambahSiswa