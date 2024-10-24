import React from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon, HeartIcon } from '@radix-ui/react-icons'

export function Header() {
	return (
		<header className={`bg-gray-900 text-white p-4 border-b border-gray-700 `}>
			<div className='container mx-auto flex items-center justify-between'>
				<div>
					<button className='mr-4 text-xl'>☰</button>
				</div>
				<div className='flex items-center '>
					<Link
						href='/'
						className='flex items-center justify-center text-xl font-bold'
					>
						Furniture
					</Link>
				</div>
				<div className='flex items-center space-x-4'>
					<button aria-label='Search'>
						<MagnifyingGlassIcon className='w-6 h-6' />
					</button>
					<button aria-label='Wishlist'>
						<HeartIcon className='w-6 h-6' />
					</button>
				</div>
			</div>
		</header>
	)
}
