import Link from "next/link";
export default function Intro() {
    return (
        <div className="dark:bg-black dark:text-white min-h-screen flex flex-col ml-20">
            <header className="mt-10 flex items-start justify-between">
                <h1 className="text-5xl text-orange-400/80">introduction</h1>
                <nav className="flex justify-end text-xl">
                    
                    <div className="mr-10">
                        <Link href="/">
                            home
                        </Link>
                    </div>
                    <div className="mr-10">
                        <Link href="/events">
                            events
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
            <main className="flex-1 mt-20">
                <article className="mb-20">
                    <h2 className="mb-5 text-blue-300 text-3xl">Overview: </h2>
                    <p className="leading-relaxed">The Embers of War is a student charity fund for Vietnamese war victims, established in August 2024 by high school students. <br />
                        Headquartered in Hanoi, the charity operates on a nationwide scale, combining both in-person and online activities. <br />
                        Its mission is to become a platform that connects young people with a special interest in Vietnamese history in general and war victims in particular. <br />
                        The goal is to spread the strength of the community and contribute to improving the lives of veterans and war victims in difficult and unfortunate circumstances.
                    </p>
                </article>
                <article>
                    <h2 className="mb-5 text-blue-300 text-3xl">Our mission:</h2>
                    <p className="leading-relaxed">As the first student charity fund for war victims established in Vietnam, <br />
                        The Embers of War has a mission to share information and raise awareness among young people, <br />
                        and broadly, among Vietnamese and international citizens, about unjust wars and their harsh legacies in Vietnam.<br />
                        Through this, it aims to convey the message of peace. <br />
                        Moreover, the charity also seeks to share losses and spread love to the community of veterans and war victims in Vietnam through meaningful charitable activities.<br />
                        In doing so, it aims to build a network of individuals and groups who are compassionate, sincere, and ready to take action.
                    </p>
                </article>
            </main>
        </div>
    )
}