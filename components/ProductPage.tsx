'use client'

import React, { useState } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import {
	ChevronDownIcon,
	PlusIcon,
	MinusIcon,
	HeartIcon,
} from '@radix-ui/react-icons'

import { ImageSlider } from './Slider'
import { Badge, Button, Flex, Strong } from '@radix-ui/themes'

export default function ProductPage() {
	const [selectedSize, setSelectedSize] = useState('Brown')
	const [quantity, setQuantity] = useState(1)

	const sizes = ['Brown', 'Black', 'Yellow']
	const images = ['/couch.jpg', '/couch2.jpg', '/couch3.jpg', '/couch4.jpg']

	return (
		<div className='min-h-screen bg-gray-900 text-white'>
			<main className='container mx-auto px-4 py-8'>
				<nav className='text-sm mb-8'>
					<ol className='list-none p-0 inline-flex'>
						<li className='flex items-center'>
							<a href='#' className='text-gray-400'>
								Main
							</a>
							<span className='mx-2'>&gt;</span>
						</li>
						<li className='flex items-center'>
							<a href='#' className='text-gray-400'>
								Catalog
							</a>
							<span className='mx-2'>&gt;</span>
						</li>
						<li className='flex items-center'>
							<a href='#' className='text-gray-400'>
								Couches
							</a>
							<span className='mx-2'>&gt;</span>
						</li>
						<li className='flex items-center'>
							<span className='text-gray-200'>VIMLE</span>
						</li>
					</ol>
				</nav>

				<div className='grid md:grid-cols-2 gap-8'>
					<div className='space-y-4 '>
						<ImageSlider images={images} autoScrollInterval={15000} />
					</div>

					<div className='space-y-6'>
						<div className='flex justify-between items-start'>
							<h1 className='text-3xl font-bold'>VIMLE</h1>

							<Badge size='3' color='orange' variant='solid'>
								New
							</Badge>
						</div>
						<p className='text-3xl font-bold text-green-400'>599 $</p>
						<p className='text-sm text-green-400'>• Available</p>
						<p className='text-sm'>Vendor: T-S-LOI-5999</p>
						<div>
							<p className='text-sm mb-2'>
								Color: <span className='font-medium'>Brown</span>
							</p>
							<p className='text-sm mb-2'>
								Collection: <span className='font-medium'>Classic</span>
							</p>
						</div>
						<div>
							<p className='text-sm mb-2'>Colors:</p>
							<div className='flex space-x-2'>
								{sizes.map(size => (
									<button
										key={size}
										onClick={() => setSelectedSize(size)}
										className={`w-auto h-8 px-3 rounded-full border ${
											selectedSize === size
												? 'border-purple-500 bg-purple-500'
												: 'border-gray-600'
										}`}
									>
										{size}
									</button>
								))}
							</div>
							<button className='text-sm text-purple-500 mt-2'>
								Size table
							</button>
						</div>
						<div>
							<p className='text-sm mb-2'>Count:</p>
							<div className='flex items-center space-x-4'>
								<button
									onClick={() => setQuantity(Math.max(1, quantity - 1))}
									className='w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full'
								>
									<MinusIcon />
								</button>
								<span>{quantity}</span>
								<button
									onClick={() => setQuantity(quantity + 1)}
									className='w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full'
								>
									<PlusIcon />
								</button>
							</div>
						</div>
						<div className='flex space-x-4'>
							<Button
								color='purple'
								radius='medium'
								variant='solid'
								size='4'
								style={{
									flex: '1 1 0%',
								}}
							>
								Add to cart
							</Button>

							<button className='w-12 h-12 flex items-center justify-center border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200'>
								<HeartIcon className='w-6 h-6' />
							</button>
							<button className='w-12 h-12 flex items-center justify-center border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M8.59 13.51L15.42 17.49'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M15.41 6.51L8.59 10.49'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>
						</div>
						<Accordion.Root type='single' collapsible>
							<Accordion.Item value='description'>
								<Accordion.Trigger className='flex items-center justify-between w-full py-2 text-left'>
									<span>Description:</span>
									<ChevronDownIcon className='w-4 h-4' />
								</Accordion.Trigger>
								<Accordion.Content className='py-2 text-base text-gray-400'>
									The cover is easy to keep clean as it can be wiped clean with
									a damp cloth. You can place the lounger to the left or right
									of the sofa and then change the layout according to your mood.
									There is a storage compartment underneath the chaise lounge.
									The canopy automatically stops in the open position, so you
									can safely unload and re-insert stored items. The mattress is
									easy to keep clean as the cover is simple to take off and put
									on, and is machine washable. You can add the VIMLE headrest.
									It extends the back of the VIMLE sofa, so you'll be more
									comfortable to sit on and your neck will be supported. The
									contact surfaces are upholstered in soft, smooth and firm
									GRANN leather with natural variations. The other surfaces are
									covered with BOMSTAD synthetic leather. The sofa bed has a 12
									cm thick mattress made of highly durable foam and is extremely
									comfortable even for sleeping. No joints will disturb you. 10
									years warranty. For more information, please refer to the
									warranty brochure. The sections of the sofa can be combined in
									different ways to get the size and shape that suits you and
									your home. If you need a larger sofa, you can add one or two
									sections. Use the planning tool to create your perfect
									combination. Assemble, disassemble and reassemble until you
									find the right shape. You can easily and simply turn your sofa
									into a spacious bed. Just take away the seat and back cushions
									and pull out the bottom frame. The perfect place for you or
									guests to sleep. You can lean comfortably against the backrest
									cushions in bed.
								</Accordion.Content>
							</Accordion.Item>
							<Accordion.Item value='characteristics'>
								<Accordion.Trigger className='flex items-center justify-between w-full py-2 text-left'>
									<span>Dimensions:</span>
									<ChevronDownIcon className='w-4 h-4' />
								</Accordion.Trigger>
								<Accordion.Content className='py-2 text-base text-gray-400'>
									<Strong>Bed height:</Strong> 53cm <br />
									<Strong>Height including backrest:</Strong> 83 cm <br />
									<Strong>Height of backrest:</Strong> 68 cm
									<br />
									<Strong>Width:</Strong> 271 cm <br />
									<Strong>Depth:</Strong> 98 cm <br />
									<Strong>Total depth after unfolding:</Strong> 241 cm
									<br />
									<Strong>Depth of lounger:</Strong> 125 cm <br />
									<Strong>Seat width:</Strong> 241 cm <br />
									<Strong>Seat depth:</Strong> 55 cm
									<br />
									<Strong>Seat height:</Strong> 48 cm <br />
									<Strong>Bed width:</Strong> 140 cm <br />
									<Strong>Bed length:</Strong> 200 cm
									<br />
									<Strong>Mattress thickness:</Strong> 12 cm
								</Accordion.Content>
							</Accordion.Item>
						</Accordion.Root>
					</div>
				</div>
			</main>
		</div>
	)
}
