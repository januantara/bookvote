import { Trophy } from 'lucide-react';
import CardTopLeaderBoard from '@/components/CardTopLeaderBoard';

const OrnamentBackground = () => (
    <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
            backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
    />
)

const TopVoted = () => {
    return (
        <div className="w-full">
            <div className="w-full h-70 flex flex-col items-center justify-center relative">
                <OrnamentBackground />
                <Trophy size={32} className="z-10" />
                <h1 className="text-5xl z-10 font-bold text-center leading-snug">Top Voted Books</h1>
                <p className="mt-2 z-10">The most loved books by our community. See what books students are most excited to read</p>
            </div>

            <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">

                {[1, 2, 3, 4, 5].map((book, idx) => (
                    <CardTopLeaderBoard
                        key={book.toString()}
                        rank={book}
                        title='The Midnight Library'
                        author='Alif Januantara Prima'
                        category='Science Fiction'
                        countVote={1242}
                        imageUrl='https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg'
                        description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nulla vel quos cupiditate ex porro consequatur unde non mollitia illo! Natus delectus aperiam voluptatibus. Aliquam quisquam eum temporibus aut, porro reiciendis reprehenderit officiis modi rerum, eveniet deleniti rem atque nulla voluptatum fugit consequatur quis facilis, aliquid harum. Laudantium tempora quaerat alias. Itaque animi, maxime consequatur facere voluptatum quidem eum! Asperiores, nobis eligendi magni delectus impedit quo iste? Ut excepturi dolorum quisquam animi dicta facilis eos illum impedit vitae mollitia possimus, quod cupiditate consequuntur dignissimos optio laboriosam libero. Sit optio repellendus nesciunt suscipit voluptate hic impedit cumque debitis odio magnam cupiditate doloremque veniam, sunt itaque, rerum quod! Rerum non dicta a officia, saepe et eveniet molestias facere corrupti ullam aspernatur id modi vitae impedit quasi natus enim repudiandae minus tempora. Molestias voluptatum dolorem fuga nihil voluptatibus! Sit consectetur corrupti saepe voluptatibus totam ex obcaecati ullam repellendus animi illum esse, dignissimos ipsum, error recusandae officiis corporis molestiae delectus enim! Voluptas sit praesentium consequuntur, id laudantium recusandae nobis perspiciatis suscipit voluptatum? Voluptates neque officia, ea quae magni ipsum cumque possimus necessitatibus vitae dolor debitis quaerat provident minus rem ut culpa cum aliquid eius? Quod, unde. Ad veritatis placeat laudantium, dignissimos, ut necessitatibus sapiente cumque repellendus quidem voluptatibus in illo, expedita natus esse eius iusto voluptates molestias soluta. Laboriosam, aut culpa, alias nisi, mollitia odit non reiciendis vel doloremque ab animi nemo repellendus. Fugiat, possimus. Rerum adipisci blanditiis, saepe odio libero quibusdam deleniti dolores suscipit, magnam esse aperiam recusandae a. Aspernatur voluptatum consectetur itaque molestias consequatur necessitatibus minus, repellat nulla similique in expedita fuga vero aut id ipsum dolorem, animi numquam explicabo maiores dolor laudantium, eum ullam libero? Dolore, quidem quos. Iste rem corporis at eaque numquam, ut, ex laborum accusamus dolore provident, adipisci rerum. Iusto tenetur iure ducimus autem qui soluta quo quam labore! Praesentium, eos suscipit. Laboriosam obcaecati pariatur ipsam, dolores aliquam quos, dolore quae eaque nihil neque rerum! Minima repellendus voluptatem ipsum in qui, iusto vel saepe quod perferendis, odio tempore consequuntur sint suscipit vitae reprehenderit laborum totam assumenda accusantium asperiores sed. Eum doloremque numquam commodi a ab ipsam quia magnam?'
                    />

                ))}

            </div>
        </div>
    )
}

export default TopVoted