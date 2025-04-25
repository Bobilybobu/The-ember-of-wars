'use client'
import Image from 'next/image';

 
import { useRouter } from 'next/navigation'
export default function Event() {
    const router = useRouter();
    function handleClick() {

        router.push("/events/vuthu");
    }
    return (
        <div className="bg-white w-screen h-screen">
            <h1 className="text-center mt-5 text-[40px] text-red-400">Events</h1>
            <div>
                <Image
                src="/pic3.jpg"
                width={500}
                height={500}
                alt="img"
                />
                <button onClick = {handleClick} className='border-2 rounded-[1vw] border-red-400 border-solid text-black ml-10 mt-2 px-2 bg-red-400'>Vu Thu trip</button>
            </div>
        </div>
    )
}