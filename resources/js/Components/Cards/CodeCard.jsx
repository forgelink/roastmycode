import { Code, dracula } from "react-code-blocks";
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function CodeCard({
    post,
    replyButton = null,
    hideCardLink = false
}) {
    const authenticatedUser = usePage().props.auth.user;

    const { post: submitPost, processing } = useForm({

    });

    const likePost = () => {
        if (!authenticatedUser) return Toast.fire({ icon: 'error', title: "Please login in order to like a comment" });

        submitPost(route('post.like', post.id), {
            onError: (error) => {
                Toast.fire({ icon: 'error', title: error.post });
            }
        })
    }

    return (
        <div>
            <div className="bg-white text-black p-4 bg-opacity-80 rounded-2xl border-2 border-[#EBEBEB] backdrop-blur-[100px]">
                <header className="flex items-center justify-between">
                    <strong className="font-semibold">{post.user.name ?? post.user.username}</strong>
                    <span className="font-light text-xs uppercase">{post.language}</span>
                </header>

                <p className="mt-4 whitespace-pre-line">{post.content}</p>

                {
                    post.code &&
                    <div className="mt-4">
                        <div className="relative flex overflow-auto whitespace-pre p-3 bg-[#282a36] rounded-xl mt-3">
                            <Code
                                text={post.code}
                                language={post.language}
                                theme={dracula}
                            />
                            <div className="text-xs text-[#6272A4] font-light  absolute right-3 bottom-2">
                                <span>// roast.forgelink.co</span>
                            </div>
                        </div>
                    </div>
                }

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1">
                        <Link href={route('post.show', post.id)}>
                            <button className="hover:bg-gray-50 py-1 px-2 rounded-lg transition duration-200">🔥 {post.replies_count ?? 0}</button>
                        </Link>
                        <button
                            onClick={likePost}
                            disabled={processing}
                            className="hover:bg-gray-50 py-1 px-2 rounded-lg transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed">
                            ❤️ {post.likes_count ?? 0}
                        </button>
                    </div>

                    <div className="flex items-center gap-1">
                        {
                            authenticatedUser !== null && authenticatedUser.id === post.user.id
                            &&
                            <Link href={route('post.edit', post.id)}>
                                <PrimaryButton>Edit</PrimaryButton>
                            </Link>
                        }

                        {
                            !hideCardLink &&
                            <Link href={route('post.show', post.id)}>
                                <SecondaryButton>
                                    {
                                        authenticatedUser !== null && authenticatedUser.id === post.user.id ?
                                            'View roasts'
                                            :
                                            'Roast'
                                    }
                                </SecondaryButton>
                            </Link>
                        }

                        {replyButton}
                    </div>
                </div>
            </div>
        </div>
    )
}