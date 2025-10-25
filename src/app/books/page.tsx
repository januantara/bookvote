import { Input } from "@/components/ui/input"
import { SearchIcon } from 'lucide-react';
import Dropdown from '../../components/DropDown';
import CardBook from '../../components/CardBook';

const BrowseBooks = () => {
    const categories = ["All Genres", "Fiction", "Non-Fiction", "Science", "History", "Technology", "Education", "Literature"];
    const sortOptions = ["Most Voted", "Newest", "Oldest"];

    return (
        <div className="w-full">
            <div className="max-w-7xl px-6 mx-auto mt-10">

                <section id="filter">
                    <div className="relative items-center flex">
                        <SearchIcon
                            size={16}
                            className="absolute ml-4 text-primary"
                        />

                        <Input
                            type="search"
                            placeholder="Search Books"
                            className="border border-primary py-6 ps-10 rounded-full"
                        />
                    </div>
                    <div className="flex w-full items-center mt-6 justify-between">
                        <Dropdown
                            label="All Category"
                            DropdownItems={categories}
                        />
                        <Dropdown
                            className="bg-primary text-white"
                            label="Sort By"
                            DropdownItems={sortOptions}
                        />
                    </div>
                </section>
                <section id="books" className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
                    {Array.from({ length: 6 }, (_, index) => (
                        <CardBook
                            key={`book-${index}`}
                            title="James Humility Consert Higghiels"
                            author="Jamse Arthur"
                            category="Horror"
                            likes={1245}
                            imageUrl="https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg"
                        />
                    ))}
                </section>
            </div>
        </div>
    )
}

export default BrowseBooks