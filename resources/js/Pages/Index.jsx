import CodeCard from '@/Components/Cards/CodeCard';
import HeroSection from '@/Components/HeroSection';
import SubmitPostModal from '@/Components/Modals/SubmitPostModal';
import Navbar from '@/Components/Navbar';
import SecondaryButton from '@/Components/SecondaryButton';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ auth, posts }) {
    const [showModal, setShowModal] = useState(false);
    const [submitModal, setSubmitModal] = useState(false);

    return (
        <>
            <Head title="Home" />

            <Navbar auth={auth} showModal={showModal} setShowModal={setShowModal} />

            <HeroSection auth={auth} setShowModal={setShowModal} setSubmitModal={setSubmitModal} />

            <SubmitPostModal submitModal={submitModal} setSubmitModal={setSubmitModal} />

            <div className="container mt-10 pb-10">
                <h3 className='font-semibold text-2xl'>
                    Latest Codes
                </h3>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        posts.map((post) => (
                            <CodeCard
                                key={post.id}
                                user={post.user}
                                content={post.content}
                                language={post.language}
                                code={post.code}
                            />
                        ))
                    }
                </div>

                <div className="flex justify-center mt-10">
                    <SecondaryButton>View more</SecondaryButton>
                </div>
            </div>
        </>
    );
}
