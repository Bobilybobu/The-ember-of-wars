import Image from 'next/image'

export default function AOI() {
    return(
        <div className = "flex justify-center"> 
            <div className='mr-20'>
                <Image
                src="/pic1.jpg"
                width={500}
                height={500}
                alt='pic1'
                />
            </div>

            <Image
            src="/pic2.jpg"
            width={500}
            height={500}
            alt='pic2'
            />
        </div>
    )
}