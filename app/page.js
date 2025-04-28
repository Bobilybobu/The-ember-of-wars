import Link from 'next/link'
import Image from 'next/image'; 
export default function Main(){
    return (
        <div className="flex flex-col dark:bg-black dark:text-white min-h-screen">
            <div className = "flex items-center justify-end py-10 text-xl"> 
                <div className="mr-10">
                    <Link href= "/intro">
                        intro
                    </Link>
                </div>
                <div className="mr-10">
                    <Link href = "/events">
                        events
                    </Link>
                </div>
                <div className="mr-10">
                    <Link href = "/aoi">
                        agent orange insight
                    </Link>
                </div>
                <div className="mr-10">join</div>
            </div>
            <div className = "flex-1 flex flex-col items-center justify-center h-screen mb-20">
                <Image src="/logo.png" alt="logo" width={500} height={500} className="rounded-full"/>
                <p className="text-base tracking-wide italic text-center text-orange-400/80"> 
                    Not all fires die when the war ends. 
                </p>
            </div>
        </div>
    )
}