import { Mitra } from "@/app/layout";
import EventCard from "@/components/eventCard/eventCard"
import { getEvents } from "@/core/api/event";
// import { Inter } from "next/font/google";


const Events = async  () => {
    const events = await getEvents();

  return (
    <div className="flex flex-col items-center">
      <h2 className={`${Mitra.className} text-xl font-bold text-gray-800 text-center py-3.5`} >Event List</h2>
      <div className="bg-amber-300 flex flex-wrap gap-1.5 py-3.5 px-1.5 w-11/12 rounded">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default Events
