import { getEvents } from '../utils/callback-api'

const Page = async () => {
	const events = await getEvents()

	return (
		<main className='contPrincipal'>
			<section className='text-center '>
				<h2 className='m-3' style={{ color: '#FF0049' }}>
					Ultimos eventos
				</h2>
				<div className='container text-center'>
					<div className='row gap-3'>
						{events.map((event) => (
							<div className='col' key={event.id}>
								<div
									className='card text-bg-secondary'
									style={{ width: '18rem' }}>
									<div className='card-body'>
										<h5 className='card-title'>{event.nombre}</h5>
										<p className='card-text'>{event.descripcion}</p>
										<a href='#' className='btn btn-primary'>
											Saber mas
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}

export default Page
