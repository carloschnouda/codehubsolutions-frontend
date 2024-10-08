import Link from 'next/link'
import React from 'react'

function NotFound() {

    return (
        <main className="bg-gradient-to-b from-[#00004b] to-indigo-500 grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 ">
            <div className="text-center">
                <p className="text-2xl font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-white">{"Sorry, we couldn't find the page you're looking for."}</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#00004b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default NotFound