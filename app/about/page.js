import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
    // let myPromise = new Promise(function(myResolve, myReject) {
    //     setTimeout(() => {
    //         myResolve();
    //     }, 4000);
    // });
    // await myPromise;
    return(
        <>
            <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
                <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">About</h1>
                <div className="text-center"><p className="text-lg">We are a small passionate team.</p></div>

                <div className="grid mb-3 mt-3 justify-center">
                    <div className="mb-3">
                        <a href="/author/joshua-wood">
                        <img alt='Bunk Pe' src='/logo.png' />
                        </a>
                    </div>
                </div>

                <div className="mx-auto prose text-center dark:prose-invert mt-3">
                    <p>
                        At Bunk Pe, we are a dynamic and results-driven digital marketing and web development agency dedicated to helping businesses thrive in the ever-evolving digital landscape. With our expertise and passion for all things digital, we empower our clients to achieve their online goals and maximize their digital potential.
                    </p>
                    <p className='mt-8 mb-3'>
                        <Link href="/contact" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Get In Touch</Link>
                    </p>
                </div>
            </div>
        </>
    )
}