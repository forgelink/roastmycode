import CodeCard from "@/Components/Cards/CodeCard";
import InputError from "@/Components/InputError";
import ReplyModal from "@/Components/Modals/ReplyModal";
import Navbar from "@/Components/Navbar";
import PrimaryButton from "@/Components/PrimaryButton";
import TextAreaInput from "@/Components/TextAreaInput";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Show({ auth, post, posts }) {
    const [showModal, setShowModal] = useState(false);
    const [submitModal, setSubmitModal] = useState(false);

    const authenticatedUser = auth.user;

    return (
        <>
            <Head title="Roast this code" />

            <Navbar auth={auth} showModal={showModal} setShowModal={setShowModal} />

            <ReplyModal post={post} submitModal={submitModal} setSubmitModal={setSubmitModal} />

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
                            replyButton={(
                                authenticatedUser && authenticatedUser.id !== post.user_id ?
                                    <PrimaryButton onClick={() => setSubmitModal(true)}>
                                        Reply
                                    </PrimaryButton>
                                    :
                                    null
                            )}
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