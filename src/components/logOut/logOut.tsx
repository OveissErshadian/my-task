'use client';
import { handleLogOut } from "../logOutButton/logOutButton";

export const LogOut = ()=>{
    return(
        <form action={handleLogOut} className="inline">
            <button type="submit" className="cursor-pointer">Log out</button>
        </form>
    )
}