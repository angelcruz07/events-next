export async function getEvents() {
	const res = await fetch('https://api-events-six.vercel.app/events')
	if (!res.ok) {
		throw new Error('Failded to fetch data')
	}
	return res.json()
}

export function groupEventsByCategory(events) {
	return events.reduce((groupedEvents, event) => {
		const category = event.categoria

		if (!groupedEvents[category]) {
			groupedEvents[category] = []
		}

		groupedEvents[category].push(event)

		return groupedEvents
	}, {})
}

export async function getFeaturedEvents() {
	const res = await fetch(
		'https://api-events-six.vercel.app/events?destacado=1'
	)
	if (!res.ok) {
		throw new Error('Failded to fetch data')
	}
	return res.json()
}

export async function getPlaces() {
	const res = await fetch('https://api-events-six.vercel.app/lugares')
	if (!res.ok) {
		throw new Error('Failed to fetch')
	}
	return res.json()
}
