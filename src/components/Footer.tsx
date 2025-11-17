
import { BookOpen, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-neutral-900 text-neutral-300 mt-20">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-wrap gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="w-sm mr-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <BookOpen className="w-6 h-6 text-primary" />
                            <span className="text-xl font-bold text-white">BookVote</span>
                        </div>
                        <p className="text-sm text-neutral-400 mb-4">Platform komunitas untuk merekomendasikan dan memilih buku baru di perpustakaan.</p>
                    </div>

                    {/* Quick Links */}
                    <div className='max-sm:flex-1 md:pr-20 lg:pr-30'>
                        <h3 className="text-white font-semibold mb-4">Navigasi</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="/" className="text-neutral-400 hover:text-primary transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="/books" className="text-neutral-400 hover:text-primary transition-colors">Browse Books</a>
                            </li>
                            <li>
                                <a href="/top-voted" className="text-neutral-400 hover:text-primary transition-colors">Top Voted Books</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='max-sm:flex-1 md:pr-10 lg:pr-20'>
                        <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <a href="mailto:works@januantara.dev" className="text-neutral-400 hover:text-primary transition-colors">works@januantara.dev</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <a href="tel:+6289636033947" className="text-neutral-400 hover:text-primary transition-colors">+62 896 3603 3947</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span className="text-neutral-400">Jakarta, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-800 my-8"></div>

                {/* Bottom Footer */}
                <div className="text-center text-sm text-neutral-400">
                    <p>© {currentYear} BookVote. Semua hak dilindungi. Temukan dan voting buku favorit Anda bersama komunitas.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;