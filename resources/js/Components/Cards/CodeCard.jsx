import { Code, CodeBlock, dracula } from "react-code-blocks";
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";
import { usePage } from "@inertiajs/react";

export default function CodeCard({
    user,
    content,
    language,
    code
}) {
    const authenticatedUser = usePage().props.auth.user;

    return (
        <div>
            <div className="bg-white text-black p-4 bg-opacity-80 rounded-2xl border-2 border-[#EBEBEB] backdrop-blur-[100px]">
                <header className="flex items-center justify-between">
                    <strong className="font-semibold">{user.name ?? user.username}</strong>
                    <span className="font-light text-xs uppercase">{language}</span>
                </header>

                <p className="mt-4 whitespace-pre-line">{content}</p>

                <div className="mt-4">
                    <div className="relative flex overflow-auto whitespace-pre p-3 bg-[#282a36] rounded-xl mt-3">
                        <Code
                            text={code}
                            language={language}
                            theme={dracula}
                        />
                        <div className="text-xs text-[#6272A4] font-light  absolute right-3 bottom-2">
                            <span>// roast.forgelink.co</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1">
                        <button className="hover:bg-gray-50 py-1 px-2 rounded-lg transition duration-200">🔥 0</button>
                        <button className="hover:bg-gray-50 py-1 px-2 rounded-lg transition duration-200">❤️ 0</button>
                    </div>

                    <div className="flex items-center gap-1">
                        {
                            authenticatedUser !== null && authenticatedUser.id === user.id
                            &&
                            <PrimaryButton>Edit</PrimaryButton>
                        }
                        <SecondaryButton>Roast</SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}