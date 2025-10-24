import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function DataSiswa() {
    const [siswa, setSiswa] = useState([]);

    useEffect(() => {
        getAllSiswa()
    }, [])

    const getAllSiswa = async () => {
        const response = await axios.get('http://localhost:3000/siswa')
        setSiswa(response.data.siswa)
    }

    const deleteSiswa = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/siswa/${id}`);
            getAllSiswa();
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }

  return (
    <div className="flex flex-col container mx-auto my-6">
        <div className='flex items-center justify-center mb-4'>
            <h1 className='text-3xl font-bold'>Data Siswa</h1>
        </div>
        <div className='flex justify-end mb-4'>
            <Link to={'/add'}>
                <button className='px-3 py-2 text-white font-semibold bg-gray-600 hover:bg-gray-800 rounded cursor-pointer'>Tambah Siswa</button>
            </Link>
        </div>
        <div className='flex justify-center'> 
            <table>
                <thead>
                    <tr>
                        <th scope='col' className='px-12 py-2 bg-gray-400 uppercase text-xs text-white tracking-wider'>No</th>
                        <th scope='col' className='px-12 py-2 bg-gray-400 uppercase text-xs text-white tracking-wider'>Nama</th>
                        <th scope='col' className='px-12 py-2 bg-gray-400 uppercase text-xs text-white tracking-wider'>Alamat</th>
                        <th scope='col' className='px-12 py-2 bg-gray-400 uppercase text-xs text-white tracking-wider'>Tanggal Lahir</th>
                        <th scope='col' className='px-12 py-2 bg-gray-400 uppercase text-xs text-white tracking-wider'>jurusan</th>
                        <th scope='col' className='px-12 py-2 bg-gray-400 uppercase text-xs text-white tracking-wider'>Aksi</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-300'>
                    {siswa.map((s, index) => (
                        <tr key={s.id} >
                            <td className='px-12 py-2 text-center'>{index + 1}</td>
                            <td className='px-12 py-2 text-center'>{s.nama}</td>
                            <td className='px-12 py-2 text-center'>{s.alamat}</td>
                            <td className='px-12 py-2 text-center'>{new Date(s.tglLahir).toLocaleDateString("id-ID", {day: "numeric",month: "long",year: "numeric"
                            })}</td>

                            <td className='px-12 py-2 text-center'>{s.jurusan}</td>
                            <td className='px-12 py-2 text-center'>
                                <Link to={`edit/${s.id}`}>
                                <button className='px-2 py-1 border-3 border-blue-500 hover:border-blue-700 cursor-pointer mr-2 rounded'>Edit</button>
                                </Link>
                                <button onClick={() => (deleteSiswa(s.id))} className='px-2 py-1 border-3 border-red-700 hover:border-red-800 cursor-pointer rounded'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> 
    </div>
  )
}

export default DataSiswa