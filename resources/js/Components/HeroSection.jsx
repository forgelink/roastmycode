import SecondaryButton from "./SecondaryButton";

export default function HeroSection() {
    return (
        <div className="h-[100vh] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between container relative h-full">
                <div>
                    <h1 className='text-6xl font-black'>
                        Talk is cheap.
                        <br />
                        Show me the code.
                    </h1>
                    <p className="text-lg mt-3">
                        Improve Your Code, Embrace Feedback.
                        <br />
                        Let's Tackle Challenges Together!
                    </p>

                    <SecondaryButton className="mt-5">
                        Submit your code
                    </SecondaryButton>
                </div>

                <div className="">
                    <div className="absolute top-50 right-56 w-[200px] h-56 bg-[#FFB86C] rounded-full blur-[500px]" />
                    <div className="absolute top-96 right-56 w-[200px] h-56 bg-[#FF79C6] rounded-full blur-[500px]" />
                    <div className="absolute top-72 right-20 w-[100px] h-56 bg-[#50FA7B] rounded-full blur-[500px]" />
                    <img className="w-[550px] z-10 relative"
                        src='/hero-image.png' alt="Roast my Code" />
                </div>
            </div>
        </div>
    );
}