import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

import { Link, usePage } from "@inertiajs/react";
import AuthenticateModal from "./Modals/AuthenticateModal";
import Dropdown from "./Dropdown";

export default function Navbar({ auth, showModal, setShowModal }) {

    return (
        <header className="absolute top-0 left-0 right-0 w-full z-50">
            <div className="container">
                <nav className="flex items-center justify-between py-5">
                    <Link href={route('index')}>
                        <span className="text-lg font-semibold">
                            &lt;🔥/&gt;
                        </span>
                    </Link>

                    <AuthenticateModal showModal={showModal} setShowModal={setShowModal} />

                    {
                        auth.user ?
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-xl bg-[#44475A] hover:bg-[#3a3d4e] text-white focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {auth.user.name ?? auth.user.username}

                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    {/* <Dropdown.Link href={route('profile.edit')}>Submit code</Dropdown.Link> */}
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                            :
                            <PrimaryButton onClick={() => setShowModal(true)}>Login Anonymously</PrimaryButton>
                    }

                </nav>
            </div>
        </header>
    );
}