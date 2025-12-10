import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function EditVotePage({ params }: { params: { voteId: string } }) {
    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Header */}
            <section className="py-12 md:py-16 border-b border-neutral-200 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <Link href="/profile" className="flex items-center gap-2 text-primary font-semibold mb-4 hover:underline">
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Profile
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Edit Vote</h1>
                    <p className="text-neutral-600 text-lg max-w-2xl mt-2">
                        Perbarui informasi vote yang telah Anda ajukan
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16 max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-lg border border-neutral-200 p-8">
                    {/* Warning */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 flex gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm text-yellow-900 font-medium">Informasi penting</p>
                            <p className="text-sm text-yellow-800 mt-1">
                                Edit hanya bisa dilakukan jika vote masih berstatus "Aktif". Setelah diterima atau ditolak, vote tidak bisa diubah.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                        {/* Book Info - Read Only */}
                        <div className="space-y-6 pb-8 border-b border-neutral-200">
                            <h2 className="text-lg font-bold text-neutral-900">Informasi Buku</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-semibold text-neutral-900 mb-2">
                                        Judul Buku
                                    </label>
                                    <Input
                                        id="title"
                                        name="title"
                                        type="text"
                                        value="Clean Code"
                                        disabled
                                        className="bg-neutral-100 cursor-not-allowed"
                                    />
                                    <p className="text-xs text-neutral-500 mt-1">Tidak bisa diubah</p>
                                </div>

                                <div>
                                    <label htmlFor="author" className="block text-sm font-semibold text-neutral-900 mb-2">
                                        Penulis
                                    </label>
                                    <Input
                                        id="author"
                                        name="author"
                                        type="text"
                                        value="Robert C. Martin"
                                        disabled
                                        className="bg-neutral-100 cursor-not-allowed"
                                    />
                                    <p className="text-xs text-neutral-500 mt-1">Tidak bisa diubah</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="genre" className="block text-sm font-semibold text-neutral-900 mb-2">
                                        Kategori
                                    </label>
                                    <Input
                                        id="genre"
                                        name="genre"
                                        type="text"
                                        value="Technology"
                                        disabled
                                        className="bg-neutral-100 cursor-not-allowed"
                                    />
                                    <p className="text-xs text-neutral-500 mt-1">Tidak bisa diubah</p>
                                </div>

                                <div>
                                    <label htmlFor="link" className="block text-sm font-semibold text-neutral-900 mb-2">
                                        Link Gramedia
                                    </label>
                                    <Input
                                        id="link"
                                        name="link"
                                        type="url"
                                        value="https://www.gramedia.com/products/clean-code"
                                        disabled
                                        className="bg-neutral-100 cursor-not-allowed"
                                    />
                                    <p className="text-xs text-neutral-500 mt-1">Tidak bisa diubah</p>
                                </div>
                            </div>
                        </div>

                        {/* Editable Fields */}
                        <div className="space-y-6">
                            <h2 className="text-lg font-bold text-neutral-900">Informasi Tambahan</h2>

                            <div>
                                <label htmlFor="description" className="block text-sm font-semibold text-neutral-900 mb-2">
                                    Deskripsi Vote
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Ceritakan alasan Anda ingin buku ini ditambahkan ke perpustakaan"
                                    rows={5}
                                    defaultValue="Buku terbaik untuk developer yang ingin menulis kode bersih dan maintainable. Sangat diperlukan di perpustakaan kami."
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="revisi" className="block text-sm font-semibold text-neutral-900 mb-2">
                                    Alasan Revisi
                                </label>
                                <Input
                                    id="revisi"
                                    name="revisi"
                                    type="text"
                                    placeholder="Alasan mengapa Anda mengedit vote ini"
                                    className="py-3 h-auto text-base border-neutral-300 focus:border-primary"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-8">
                            <Button className="flex-1 py-3 h-auto text-base font-medium">
                                Simpan Perubahan
                            </Button>
                            <Link href="/profile" className="flex-1">
                                <Button variant="outline" className="w-full py-3 h-auto text-base font-medium">
                                    Batal
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
