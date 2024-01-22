import CodeCard from "@/Components/Cards/CodeCard";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Show({ auth, post, posts }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Head title="Roast this code" />

            <Navbar auth={auth} showModal={showModal} setShowModal={setShowModal} />

            <main className="mt-32 container">
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8">
                        <h3 className='font-semibold text-2xl mb-7'>
                            Are you good enough to roast this code?
                        </h3>
                        <CodeCard
                            key={post.id}
                            post={post}
                            hideCardLink={true}
                        />
                    </div>


                    <div className="lg:col-span-4">
                        <h3 className='font-semibold text-2xl mb-7'>
                            Latest {post.language} Codes
                        </h3>

                        <div className="space-y-8">
                            {
                                posts.map((_post) => (
                                    <CodeCard
                                        key={_post.id}
                                        post={_post}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}