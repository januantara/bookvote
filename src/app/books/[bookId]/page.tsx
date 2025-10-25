import { ArrowLeft, StarsIcon, ThumbsUpIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BookDetails = () => {
    return (
        <div className="max-w-7xl px-6 mx-auto">

            <Link href="/" className="flex gap-x-2 items-center text-primary font-semibold mt-10 hover:opacity-80">
                <ArrowLeft size={16} />
                Back to Books
            </Link>

            <div className="flex mt-10 gap-8">

                <div className="books-cover flex size-100 p-6 rounded-2xl bg-teal-500">
                    <div className="relative m-auto shadow-2xl">
                        <Image
                            src="https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg"
                            alt="sjndsjfn"
                            width={180}
                            height={0}
                            className='h-auto bg-cover'
                        />
                    </div>
                </div>

                <div className="book-information flex flex-1 flex-col items-start">
                    <Link href="/" className="bg-teal-50 text-teal-500 text-sm font-semibold rounded-full px-4 py-2">Science Fiction</Link>
                    <h1 className='text-3xl font-bold mt-6'>Judul Buku</h1>
                    <h4 className='mt-4 text-neutral-500'>by <span className='font-semibold text-neutral-800'>Hubert</span></h4>
                    <div className="mt-6">
                        <strong className='antialiased'>Description</strong>
                        <p className='text-neutral-500 mt-4 text-justify'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa explicabo ad repellat. Deleniti possimus incidunt consectetur temporibus. Praesentium quo fugit reprehenderit debitis at, veniam est ullam ducimus fuga eaque placeat. Aperiam, iste maxime neque voluptatibus ipsa provident similique, velit doloremque vel, incidunt facilis? Quis, rem illo labore harum ullam est quibusdam quaerat qui aliquid distinctio quasi quo esse sed a officiis expedita illum. Ad inventore cupiditate in, aliquid impedit magnam at animi perferendis voluptates. Voluptatem numquam explicabo eaque quibusdam fugiat sequi facere soluta cumque, rerum earum inventore ut mollitia reiciendis dicta laborum, sapiente veniam quisquam magni in voluptatibus quas distinctio dolorem delectus. Cumque aperiam molestias est, quibusdam quas saepe doloribus, quasi laudantium molestiae nemo, culpa quae aliquid. Iste, veritatis tempora? Distinctio soluta ut veniam qui tenetur quo, libero iusto ipsam accusantium eveniet dolore placeat consectetur, optio itaque numquam quasi quia laudantium! Ad et tempore aliquam error, quam mollitia modi nulla suscipit. Vel explicabo consectetur saepe voluptas reprehenderit cupiditate molestias error blanditiis aspernatur expedita quod ducimus at magnam, autem doloremque asperiores consequatur animi? Tenetur quaerat voluptate nulla nihil praesentium dolores impedit, fuga sequi provident fugiat odio. Odit culpa soluta inventore? Blanditiis libero nostrum saepe voluptas accusamus voluptates, maxime hic quo? Nobis.
                        </p>
                    </div>
                    <div className="vote flex justify-between items-center p-4 mt-6 rounded-2xl overflow-hidden border border-primary/10 bg-teal-50 w-full relative">
                        <StarsIcon className='absolute text-primary bottom-0 left-0 opacity-10 z-0' size={64} />
                        <div className="vote-count">
                            <h4 className='text-neutral-400'>Total Votes</h4>
                            <h2 className='font-bold text-2xl text-primary'>12314</h2>
                        </div>
                        <Button className='gap-x-2 !px-10 text-lg h-full inline-flex'>
                            <ThumbsUpIcon />
                            Vote
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookDetails