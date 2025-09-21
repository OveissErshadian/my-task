import { IEvent } from "@/core/types/IEvent";
import Image from "next/image";
import { FC } from "react";

interface IProps {
  event: IEvent;
}
const EventCard: FC<IProps> = ({ event }) => {
  return (
    <div className="flex flex-col p-1.5 bg-emerald-400 ">
      <Image
        src={event.imageAddress}
        alt={event.imageAddress}
        width={200}
        height={200}
        className="bg-amber-200"
      />
      <h3 className="">{event.title}</h3>
      <p className="">{event.description}</p>
    </div>
  );
};

export default EventCard;
