import Image from 'next/image'
import React from 'react'
import NoAvatarImage from '@/assets/images/noavatar.png'

function TestimonialCard({ post }) {
    return (
        <>
            <article className="flex flex-col items-start justify-between bg-gray-100 rounded-lg px-4 py-6 h-full">
                <div className="flex flex-row">
                    <div className='flex-shrink-0 mr-5'>
                        <Image src={post?.full_path?.image ? post?.full_path?.image : NoAvatarImage} alt={post?.name} className="h-14 w-14 rounded-full bg-gray-50" width={100} height={100} />
                    </div>
                    <div>
                        <div className="relative mb-4 flex items-center gap-x-4">
                            <div className="leading-6">
                                <p className="text-sm font-semibold text-[#00004b]">
                                    <span className="absolute inset-0" />
                                    {post?.name}
                                </p>
                                <p className="text-sm text-[#00004b]">{post?.position}</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <p className="line-clamp-3 text-sm leading-6 text-gray-600">{post?.description}</p>
                        </div>

                    </div>
                </div>
            </article>
        </>
    )
}

export default TestimonialCard