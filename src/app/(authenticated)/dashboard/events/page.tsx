import EventCard from "@/components/eventCard/eventCard"
import { getEvents } from "@/core/api/event";


const Events = async  () => {
    const events = await getEvents();

  return (
    <div>
      <h2>Event List</h2>
      <div className="bg-amber-500 flex flex-wrap gap-1.5 py-3.5 px-1.5">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default Events
