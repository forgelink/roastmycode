import PrimaryButton from "./PrimaryButton";

export default function Navbar() {
    return (
        <header className="absolute top-0 left-0 right-0 w-full z-50">
            <div className="container">
                <nav className="flex items-center justify-between py-5">
                    <span className="text-lg font-semibold">
                        &lt;🔥/&gt;
                    </span>

                    <PrimaryButton>Login Anonymously</PrimaryButton>
                </nav>
            </div>
        </header>
    );
}