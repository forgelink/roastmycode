import Modal from '@/Components/Modal';
import InputError from "../InputError";
import TextInput from "../TextInput";
import SecondaryButton from "../SecondaryButton";
import { useForm } from '@inertiajs/react';

export default function AuthenticateModal({showModal, setShowModal}) {
    const {
        data,
        setData,
        post,
        processing,
        reset,
        errors,
    } = useForm({
        username: '',
        password: '',
    });

    const authenticate = (e) => {
        e.preventDefault();

        post(route('authenticate'), {
            onSuccess: () => {
                Toast.fire({icon: 'success', title: 'Authentication was successful. Happy roasting.'})
                setShowModal(false);
            }
        });
    }

    return (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
            <div className="w-full p-4">
                <header className="flex items-center justify-between">
                    <div>
                        <strong className="font-semibold text-lg">Login/Register Anonymously</strong>
                        <p className="font-light text-xs mt-1">
                            Login or Register by simply entering a username and password
                        </p>
                    </div>
                    <button onClick={() => setShowModal(false)} className="text-[#FF5555]">X</button>
                </header>

                <form onSubmit={authenticate} method="POST" className="flex flex-col w-full gap-3 mt-5">
                    <div>
                        <TextInput
                            id="username"
                            type="text"
                            name="username"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            className="w-full"
                            isFocused
                            placeholder="Enter your username"
                            required
                        />

                        <InputError message={errors.username} className="mt-2" />
                    </div>

                    <div>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full"
                            isFocused
                            placeholder="Enter your password"
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex justify-end mt-3">
                        <SecondaryButton type="submit" disabled={processing}>Authenticate</SecondaryButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}