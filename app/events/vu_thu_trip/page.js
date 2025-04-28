import Link from "next/link";
export default function Trip() {
    return (
        <div className="dark:bg-black dark:text-white min-h-screen flex flex-col ml-20 mr-10">
            <header className="mt-10 flex items-start justify-between mb-30">
                <h1 className="text-3xl text-orange-400/80">back to events</h1>
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

        </div>
    )
}