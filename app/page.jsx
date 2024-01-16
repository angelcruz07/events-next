import Carousel from './components/Carousel'
import Link from 'next/link'

// Feching of data
async function getEvents() {
	const res = await fetch('http://localhost:4000/events')
	if (!res.ok) {
		throw new Error('Failded to fetch data')
	}
	return res.json()
}

function groupEventsByCategory(events) {
	return events.reduce((groupedEvents, event) => {
		const category = event.categoria

		if (!groupedEvents[category]) {
			groupedEvents[category] = []
		}

		groupedEvents[category].push(event)

		return groupedEvents
	}, {})
}

async function getEventosDestacados() {
	const res = await fetch('http://localhost:4000/events?destacado=1')
	if (!res.ok) {
		throw new Error('Failded to fetch data')
	}
	return res.json()
}

const Home = async () => {
	const events = await getEvents()
	const eventsDestacados = await getEventosDestacados()
	const groupedEvents = groupEventsByCategory(events)
	return (
		<>
			<Carousel />
			<section className='mt-5'>
				<h2 className='text-center m-3 ' style={{ color: '#FF0049' }}>
					Ultimos eventos {events.length}
				</h2>
				<div className='container m-2'>
					<div className='row '>
						<div className='col-8'>
							{Object.keys(groupedEvents).map((category) => (
								<div key={category}>
									<h5 className='text-center'>{category}</h5>
									<ul className='list-group '>
										{groupedEvents[category].map((event) => (
											<li
												key={event.id}
												className='list-group-item text-bg-secondary'>
												{event.nombre}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
						<div className='col-4'>
							<img
								src='./img/categoRIAS.avif'
								alt='...'
								className='object-fit-cover rounded p-0 m-0'
								width='500px'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='mt-5 mb-5 text-center'>
				<h2 className='m-4 ' style={{ color: '#FF0049' }}>
					Eventos destacados
				</h2>

				<div className='card-group gap-4 m-4 border-0'>
					{eventsDestacados.map((event) => (
						<div className='card  border-0'>
							<div className='card-body'>
								<img
									src={event.imagen}
									className='card-img-top'
									alt='...'
									height='300px'
								/>
								<h5 className='card-title text-center'>{event.categoria}</h5>
								<p className='card-text'>{event.descripcion}</p>
								<Link className='btn btn-primary text-center' href='/events'>
									Leer más
								</Link>
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

			<section className='text-center'>
				<h2 style={{ color: '#FF0049' }}>Lugares &amp; sitios</h2>
				<div
					className='container text-bg-secondary rounded-4 mb-3'
					style={{ width: '40rem' }}>
					<div className='row'>
						<div className='col m-3'>
							<h2>Da un vistazo a nuestras instalaciones</h2>
							<img src='./img/bar.avif' alt='bar' />
							<Link href='/locales' className='btn btn-primary m-3'>
								Ver mas
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
