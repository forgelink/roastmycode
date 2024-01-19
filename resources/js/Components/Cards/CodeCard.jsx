import { Code, CodeBlock, dracula } from "react-code-blocks";
import SecondaryButton from "../SecondaryButton";

export default function CodeCard({
    name,
    content,
    code
}) {
    return (
        <div className="bg-white text-black p-4 bg-opacity-80 rounded-2xl border-2 border-[#EBEBEB] backdrop-blur-[100px]">
            <header className="flex items-center justify-between">
                <strong className="font-semibold">{name}</strong>
                <span className="font-light text-xs">PHP</span>
            </header>

            <p className="mt-4">
                Roast my code if you can 😄!
                I'm just learning, but how can anyone write this simple function better than now?
            </p>

            <div className="mt-4">
                <div className="flex overflow-auto whitespace-pre p-3 bg-[#282a36] rounded-xl mt-3">
                    <Code
                        text={"<?php\n$foo = 'bar';\necho 'Hello world'.$foo; \n?>"}
                        language={'PHP'}
                        theme={dracula}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between mt-4">
                <span>🔥 0 Roasts</span>

                <SecondaryButton>Roast</SecondaryButton>
            </div>
        </div>
    )
}