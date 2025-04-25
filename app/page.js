import Link from 'next/link'

export default function Main(){
    return (
        <div>
            <div className = "flex items-center justify-end mt-3 "> 
                <div className="mr-10">intro</div>
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
        </div>
    )
}