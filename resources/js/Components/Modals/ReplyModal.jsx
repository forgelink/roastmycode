import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import InputError from '../InputError'
import { useForm } from '@inertiajs/react'
import TextAreaInput from '../TextAreaInput'
import SecondaryButton from '../SecondaryButton'

export default function ReplyModal({ submitModal, setSubmitModal, post}) {
    const {
        data,
        setData,
        post: submitPost,
        processing,
        reset,
        errors,
    } = useForm({
        parent_id: post.id,
        content: '',
        language: post.language,
        code: '',
    });

    function submit(e) {
        e.preventDefault();

        submitPost(route('post.submit'), {
            onSuccess: () => {
                Toast.fire({ icon: "success", title: 'Your reply has been posted successfully.' })
                setSubmitModal(false)
                reset('content', 'code');
            },
        })
    }

    return (
        <>
            <Transition appear show={submitModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setSubmitModal(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#44475acb]" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-75"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-75"
                            >
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-[#282A36] p-6 text-left align-middle shadow-xl transition-all">
                                    <header>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-white"
                                        >
                                            Roasting <span className='italic font-light'>{post.user.name ?? post.user.username}</span> code
                                        </Dialog.Title>
                                        <div className="mt-1">
                                            <p className="text-sm font-light text-gray-100">
                                                Show this user how it can write better code 😉
                                            </p>
                                        </div>
                                    </header>

                                    <form method='post' onSubmit={submit} className="mt-4 space-y-4">
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
                                                className="w-full bg-[#44475A] rounded-lg border border-transparent focus:border-[#6272A4] focus:ring-0 disabled:opacity-75 disabled:cursor-not-allowed"
                                                disabled
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
                                                placeholder={`Write the best you got!`}
                                                required
                                            />

                                            <InputError message={errors.code} className="mt-2" />
                                        </div>

                                        <div className="flex justify-end mt-4">
                                            <SecondaryButton
                                                disabled={processing}
                                                type="submit"
                                            >
                                                Submit Reply
                                            </SecondaryButton>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    );
}
