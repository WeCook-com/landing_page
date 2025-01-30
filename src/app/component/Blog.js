import * as Unicons from '@iconscout/react-unicons';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
    const blog = [
        {
            id: '1',
            title: '5 Trends Shaping the Future of Restaurants in 2025',
            description:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
            image: '/images/blog/1.jpg',
            slug: '5-trends-shaping-the-future-of-restaurants-in-2025',
        },
        {
            id: '2',
            title: 'How to Streamline Operations and Save Time with KoaCook',
            description: 'When an unknown printer took a galley of type and scrambled it.',
            image: '/images/blog/2.jpg',
            slug: 'how-to-streamline-operations-and-save-time-with-koacook',
        },
        {
            id: '3',
            title: 'The Ultimate Guide to Restaurant Inventory Management',
            description: 'It has survived not only five centuries but leap in typesetting.',
            image: '/images/blog/3.jpg',
            slug: 'the-ultimate-guide-to-restaurant-inventory-management',
        },
    ];

    return (
        <>
            <section className="relative md:py-24 py-16" id="blog">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-[#3b82f6] text-base font-medium uppercase mb-2">
                            Blogs
                        </h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                            Latest News
                        </h3>

                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
                            Stay ahead with industry insights, tips, and updates from{' '}
                            <strong className="font-medium">KoaCook</strong>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
                        {blog.map((item, key) => (
                            <div
                                key={key}
                                className="blog relative rounded-md shadow shadow-slate-200 dark:shadow-slate-800 overflow-hidden flex flex-col"
                            >
                                <Link href={`/blogs/${item.slug}`}>
                                    <Image
                                        src={item.image}
                                        alt=""
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </Link>
                                <div className="content p-6 flex flex-col flex-1">
                                    <Link
                                        href={`/blogs/${item.slug}`}
                                        className="text-lg hover:text-[#3b82f6] dark:text-white dark:hover:text-[#3b82f6] transition-all duration-500 ease-in-out font-medium"
                                    >
                                        {item.title}
                                    </Link>
                                    <p className="text-slate-400 mt-3 mb-5">{item.description}</p>

                                    <div className="mt-auto">
                                        <Link
                                            href={`/blogs/${item.slug}`}
                                            className="inline-flex  btn btn-link hover:text-[#3b82f6] dark:hover:text-[#3b82f6] after:bg-[#3b82f6] dark:text-white transition duration-500"
                                        >
                                            <span>Read More</span>
                                            <Unicons.UilArrowRight width="16px" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
