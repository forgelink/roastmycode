import CodeCard from '@/Components/Cards/CodeCard';
import HeroSection from '@/Components/HeroSection';
import Navbar from '@/Components/Navbar';
import SecondaryButton from '@/Components/SecondaryButton';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />

            <Navbar />

            <HeroSection />

            <div className="container mt-10 pb-10">
                <h3 className='font-semibold text-2xl'>
                    Latest Codes
                </h3>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CodeCard
                        name="John Doe"
                    />

                    <CodeCard
                        name="John Doe"
                    />

                    <CodeCard
                        name="John Doe"
                    />
                </div>

                <div className="flex justify-center mt-10">
                    <SecondaryButton>View more</SecondaryButton>
                </div>
            </div>
        </>
    );
}
