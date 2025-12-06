import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default UserLayout;