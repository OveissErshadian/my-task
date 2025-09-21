import axios from "axios"
import { IEvent } from "../types/IEvent";


export const getEvents = async():Promise<IEvent[]> =>{
    const res = await axios.get("https://68acab60b996fea1c08a9849.mockapi.io/api/v1/events")
    return res.data;
}