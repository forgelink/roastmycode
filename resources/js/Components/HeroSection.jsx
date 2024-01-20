import SecondaryButton from "./SecondaryButton";

export default function HeroSection({ auth, setShowModal }) {
    return (
        <div className="h-[145vh] lg:h-[100vh] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between container relative h-full">
                <div className="mt-32 lg:mt-0">
                    <h1 className='text-6xl font-black'>
                        Talk is cheap.
                        <br />
                        Show me the code.
                    </h1>
                    <p className="text-lg mt-3">
                        Think your code is flawless?
                        <br />
                        Share your 'perfect' masterpiece and let the roasting begin.
                    </p>

                    {
                        !auth.user ?
                            <SecondaryButton onClick={() => setShowModal(true)} className="mt-5">
                                Challenge accepted?
                            </SecondaryButton>
                            :
                            <SecondaryButton className="mt-5">
                                Submit your code
                            </SecondaryButton>
                    }

                </div>

                <div className="mt-10">
                    <div className="absolute -z-10 top-50 right-56 w-[200px] h-56 bg-[#FFB86C] rounded-full blur-[500px]" />
                    <div className="absolute -z-10 top-96 right-56 w-[200px] h-56 bg-[#FF79C6] rounded-full blur-[500px]" />
                    <div className="absolute -z-10 top-72 right-20 w-[100px] h-56 bg-[#50FA7B] rounded-full blur-[500px]" />
                    <img className="w-[550px]"
                        src='/hero-image.png' alt="Roast my Code" />
                </div>
            </div>
        </div>
    );
}