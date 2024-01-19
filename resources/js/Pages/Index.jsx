import HeroSection from '@/Components/HeroSection';
import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />
            
            <Navbar />

            <HeroSection />
        </>
    );
}
