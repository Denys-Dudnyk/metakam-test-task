'use client'

import React, { useState, useEffect, useCallback, FC } from 'react'
import Image from 'next/image'
import { useSwipeable } from 'react-swipeable'

interface ImageSliderProps {
	images: string[]
	autoScrollInterval?: number
}

export const ImageSlider: FC<ImageSliderProps> = ({
	images,
	autoScrollInterval = 3000,
}) => {
	const [currentImage, setCurrentImage] = useState(0)

	const nextImage = useCallback(() => {
		setCurrentImage(prev => (prev + 1) % images.length)
	}, [images.length])

	const prevImage = useCallback(() => {
		setCurrentImage(prev => (prev - 1 + images.length) % images.length)
	}, [images.length])

	useEffect(() => {
		const interval = setInterval(nextImage, autoScrollInterval)
		return () => clearInterval(interval)
	}, [nextImage, autoScrollInterval])

	const handlers = useSwipeable({
		onSwipedLeft: nextImage,
		onSwipedRight: prevImage,
		trackMouse: true,
	})

	return (
		<div className='relative' {...handlers}>
			<div className='aspect-square flex justify-center items-center'>
				<Image
					src={images[currentImage]}
					alt={`Product image ${currentImage + 1}`}
					layout='fill'
					objectFit='cover'
					className='rounded-lg '
				/>
			</div>
			<div className='absolute bottom-4 left-0 right-0 flex justify-center '>
				<div className='bg-gray-600 space-x-2 flex justify-center items-center p-2 rounded-full transition-all'>
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentImage(index)}
							className={`w-2 lg:w-3 h-2 lg:h-3  rounded-full  ${
								currentImage === index ? 'bg-purple-600' : 'bg-gray-800'
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
