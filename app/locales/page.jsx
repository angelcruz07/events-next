import { getPlaces } from '../utils/callback-api'

const Page = async () => {
	const places = await getPlaces()
	return (
		<main className='contPrincipal'>
			<section className='mt-5 mb-5 text-center'>
				<h2 className='m-4 ' style={{ color: '#FF0049' }}>
					Locales
				</h2>
				<div className='card-group gap-4 m-4 border-0'>
					{places.map((place) => (
						<div className='card text-bg-secondary border-0' key={place.id}>
							<img
								src={place.img}
								className='card-img-top object-fit-cover'
								alt={place.nombre}
								height='300px'
							/>
							<div className='card-body'>
								<h5 className='card-title text-center'>{place.nombre}</h5>
								<p className='card-text'>{place.descripcion}</p>
								<a className='btn btn-primary text-center'>Leer más</a>
								<p className='card-text'>
									<small className='text-body-secondary'>
										Actualizado hace 5 minutos
									</small>
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}

export default Page
