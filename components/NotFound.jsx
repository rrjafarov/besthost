import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='notFound'>
        <Image src="/images/notfound0.png" alt="notfound" width={1000} height={1000} />
        <Link href="/" className='notFound-link'>Go back</Link>
    </div>
  )
}

export default NotFound