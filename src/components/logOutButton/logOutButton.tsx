'use server';
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const handleLogOut = async ()=>{

const cookieStore = await cookies();
cookieStore.delete('my-token')
redirect('/login')
}