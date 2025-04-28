'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Event() {
    const router = useRouter();
    return (
        <div className="dark:bg-black dark:text-white min-h-screen flex flex-col ml-20 mr-10">
            <header className="mt-10 flex items-start justify-between mb-30">
                <h1 className="text-5xl text-orange-400/80">events</h1>
                <nav className="flex justify-end text-xl">
                    <div className="mr-10">
                        <Link href="/">
                            home
                        </Link>
                    </div>
                    <div className="mr-10">
                        <Link href="/intro">
                            intro
                        </Link>
                    </div>
                    <div className="mr-10">
                        <Link href="/aoi">
                            agent orange insight
                        </Link>
                    </div>
                    <div className="mr-10">join</div>
                </nav>
            </header>
            <main className="flex-1 flex justify-between gap-10 p-10">
                <div className="flex flex-col">
                    <Image
                        src="/pic3.jpg"
                        width={500}
                        height={500}
                        alt="img"
                        className="object-cover"
                    />
                    <button onClick={() => {router.push("/events/vu_thu_trip")}} className="mt-5 mx-auto px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300">
                        Vu Thu Charity trip
                    </button>
                </div>
                <div className="flex flex-col">
                    <Image
                        src="/menu.jpg"
                        width={500}
                        height={500}
                        alt="img"
                        className="object-cover"
                    />
                    <button onClick={() => {router.push("/events/peace_of_sweets")}} className="mt-5 mx-auto px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300">
                        Peace of Sweets Fundraising
                    </button>
                </div>
            </main >
        </div >
    )
}