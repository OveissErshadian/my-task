import { IEvent } from '@/core/types/IEvent';
import Image from 'next/image'
import { FC } from 'react';

interface IProps {
  event: IEvent;
}
const EventCard: FC<IProps> = ({ event }) => {
  return (
    <div className="flex flex-col p-1.5 bg-emerald-400 p-0.5">
        <Image src={event.imageAddress} alt='image' width={200} height={400}/>
        <h3 className="">{event.title}</h3>
        <p className="">{event.description}</p>
    </div>
  )
}

export default EventCard
