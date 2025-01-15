'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='min-h-screen max-w-xl mx-auto flex flex-col mt-20 items-center'>
        <Image src='/images/not_found.svg' alt="not_found.svg" width={350} height={350} className="w-full"/>
        <h3 className='text-color-accent text-2xl font-bold mt-10'>404 | PAGE NOT FOUND</h3>
        <Link href='/' className='text-color-primary hover:text-color-accent transition-all underline mt-5'>
          <h3 className='flex items-center  gap-1'><i className='bi bi-arrow-left-short text-2xl'></i> Kembali</h3>
        </Link>
    </div>
  )
}

export default Page
