import CodeCard from "@/Components/Cards/CodeCard";
import InputError from "@/Components/InputError";
import Navbar from "@/Components/Navbar";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextAreaInput from "@/Components/TextAreaInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Show({ auth, post, posts }) {
    const [showModal, setShowModal] = useState(false);

    const {
        data,
        setData,
        post: postData,
        processing,
        reset,
        errors,
    } = useForm({
        content: post.content,
        language: post.language,
        code: post.code,
    });

    const submit = (e) => {
        e.preventDefault();

        postData(route('post.update', post.id), {
            onSuccess: () => {
                Toast.fire({ icon: "success", title: 'Your code has been updated.' })
            },
        })
    }

    return (
        <>
            <Head title="Roast this code" />

            <Navbar auth={auth} showModal={showModal} setShowModal={setShowModal} />

            <main className="mt-32 container">
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8">
                        <h3 className='font-semibold text-2xl mb-7'>
                            Already changed your mind?
                        </h3>

                        <form method='post' onSubmit={submit}
                            className=" space-y-4">
                            <div>
                                <TextAreaInput
                                    id="content"
                                    type="text"
                                    name="content"
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    className="w-full"
                                    rows={3}
                                    isFocused
                                    placeholder="Add a description to your code; it may not be as readable as you think."
                                    required
                                />

                                <InputError message={errors.content} className="mt-2" />
                            </div>

                            <div>
                                <select
                                    name="language"
                                    id="language"
                                    value={data.language}
                                    onChange={(e) => setData('language', e.target.value)}
                                    className="w-full bg-[#44475A] rounded-lg border border-transparent focus:border-[#6272A4] focus:ring-0"
                                    required
                                >
                                    <option value="JavaScript">JavaScript</option>
                                    <option value="TypeScript">TypeScript</option>
                                    <option value="PHP">PHP</option>
                                    <option value="Python">Python</option>
                                    <option value="HTML">HTML</option>
                                    <option value="CSS">CSS</option>
                                    <option value="Go">Go</option>
                                    <option value="Ruby">Ruby</option>
                                    <option value="Rust">Rust</option>
                                    <option value="SQL">SQL</option>
                                    <option value="Java">Java</option>
                                </select>

                                <InputError message={errors.content} className="mt-2" />
                            </div>

                            <div>
                                <TextAreaInput
                                    id="code"
                                    type="text"
                                    name="code"
                                    value={data.code}
                                    onChange={(e) => setData('code', e.target.value)}
                                    className="w-full"
                                    rows={7}
                                    isFocused
                                    placeholder={`Add your "${data.language}" code to get roasted`}
                                    required
                                />

                                <InputError message={errors.code} className="mt-2" />
                            </div>

                            <div className="flex gap-1 justify-end mt-4">
                                <Link href={route('post.show', post.id)}>
                                    <PrimaryButton type="button">Cancel</PrimaryButton>
                                </Link>
                                <SecondaryButton
                                    type="submit"
                                >
                                    Submit changes
                                </SecondaryButton>
                            </div>
                        </form>
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