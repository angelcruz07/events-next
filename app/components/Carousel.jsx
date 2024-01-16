function Carousel() {
	return (
		<div id='carouselExampleCaptions' className='carousel slide'>
			<div className='carousel-indicators'>
				<button
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide-to={0}
					className='active'
					aria-current='true'
					aria-label='Slide 1'
				/>
				<button
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide-to={1}
					aria-label='Slide 2'
				/>
				<button
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide-to={2}
					aria-label='Slide 3'
				/>
			</div>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img src='./img/fiesta1.avif' className='d-block w-100' alt='...' />
					<div className='carousel-caption d-none d-md-block'>
						<h5>Todos los eventos</h5>
						<p>Obten informacion sobre los eventos en la ciudad.</p>
					</div>
				</div>
				<div className='carousel-item'>
					<img src='./img/portada.avif' className='d-block w-100' alt='...' />
					<div className='carousel-caption d-none d-md-block'>
						<h5>Disfruta</h5>
						<p>La fiesta es divertida con responsabilidad.</p>
					</div>
				</div>
				<div className='carousel-item'>
					<img src='./img/portada2.avif' className='d-block w-100' alt='...' />
					<div className='carousel-caption d-none d-md-block'>
						<h5>Los mejores eventos</h5>
						<p>Calidad y diversion asegurada.</p>
					</div>
				</div>
			</div>
			<button
				className='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExampleCaptions'
				data-bs-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true' />
				<span className='visually-hidden'>Previous</span>
			</button>
			<button
				className='carousel-control-next'
				type='button'
				data-bs-target='#carouselExampleCaptions'
				data-bs-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true' />
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
	)
}
export default Carousel
