import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Link as LinkIcon, BookOpen, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function CreateVotePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-secondary/20">
            {/* Header */}
            <section className="py-12 md:py-16 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Buat Vote Buku</h1>
                    </div>
                    <p className="text-neutral-600 text-lg max-w-2xl">
                        Ajukan buku baru yang ingin Anda baca dan biarkan komunitas memilih buku yang paling diminati untuk dimasukkan ke perpustakaan.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left - Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg border border-neutral-200 p-8 shadow-sm">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-8">Masukkan Link Buku</h2>

                            {/* Info Box */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex gap-3">
                                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm text-blue-900 font-medium">Informasi penting</p>
                                    <p className="text-sm text-blue-800 mt-1">
                                        Buku harus tersedia di Gramedia. Pastikan link yang Anda masukkan adalah link resmi dari gramedia.com
                                    </p>
                                </div>
                            </div>

                            {/* Form */}
                            <form className="space-y-6">
                                {/* Gramedia Link Input */}
                                <div>
                                    <label htmlFor="link" className="block text-sm font-semibold text-neutral-900 mb-3">
                                        Link Buku Gramedia
                                    </label>
                                    <div className="relative">
                                        <LinkIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                        <Input
                                            id="link"
                                            name="link"
                                            type="url"
                                            placeholder="https://www.gramedia.com/products/..."
                                            className="pl-12 py-3 h-auto text-base border-neutral-300 focus:border-primary"
                                        />
                                    </div>
                                    <p className="text-xs text-neutral-500 mt-2">
                                        Contoh: https://www.gramedia.com/products/atomic-habits
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 pt-6">
                                    <Button className="flex-1 py-3 h-auto text-base font-medium">
                                        Buat Vote
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" className="flex-1 py-3 h-auto text-base font-medium">
                                        Batal
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right - Preview */}
                    <div>
                        <div className="sticky top-6 space-y-6">
                            {/* Preview Card */}
                            <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Preview</h3>

                                <div className="space-y-4">
                                    {/* Book Image Placeholder */}
                                    <div className="bg-neutral-100 rounded-lg h-48 flex items-center justify-center">
                                        <div className="text-center">
                                            <BookOpen className="w-10 h-10 text-neutral-400 mx-auto mb-2" />
                                            <p className="text-xs text-neutral-500">Gambar buku akan tampil di sini</p>
                                        </div>
                                    </div>

                                    {/* Book Info */}
                                    <div>
                                        <p className="text-xs text-neutral-500 mb-1">Judul</p>
                                        <p className="font-semibold text-neutral-900 line-clamp-2">Atomic Habits</p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-neutral-500 mb-1">Penulis</p>
                                        <p className="text-sm text-neutral-700">James Clear</p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-neutral-500 mb-1">Kategori</p>
                                        <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                                            Self-Help
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Box */}
                            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                                <h4 className="text-sm font-semibold text-green-900 mb-2">💡 Tips</h4>
                                <ul className="text-xs text-green-800 space-y-2">
                                    <li>✓ Pastikan buku belum pernah diajukan</li>
                                    <li>✓ Gunakan link Gramedia yang valid</li>
                                    <li>✓ Isi deskripsi untuk hasil lebih baik</li>
                                    <li>✓ Tunggu verifikasi dari moderator</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
