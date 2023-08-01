import { FaceBookIcon, InstagramIcon, MailIcon, PinpointIcon, TelIcon } from "@/components/Icons";
import MyUserData from "@/components/MyUserData";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [validation, setValidation] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!name) {
            setValidation("Please enter a name");
            return;
        }
        if (!email) {
            setValidation("Please enter a valid email");
            return;
        }
        if (!message) {
            setValidation("Please type me a message");
            return;
        }

        try {
            setLoading(true);
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                console.log('Email sent successfully');
                setName("");
                setEmail("");
                setMessage("");
                setValidation("");
                setSuccessMessage("Email sent successfully!");
                // Clear success message after 3 seconds
                setTimeout(() => {
                    setSuccessMessage("");
                }, 2500);
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        } finally {
            setLoading(false);
        }
    };

    function handleNameChange(e) {
        setName(e.target.value);
    };
    function handleEmailChange(e) {
        setEmail(e.target.value);
    };
    function handleMessageChange(e) {
        setMessage(e.target.value);
    };

    return (
        <>
            <Head>
                <title>FrontLabs | Contact Page</title>
                <meta name="description" content="lorem ipsum" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <TransitionEffect />
            <div className={`${loading ? 'blur-xs' : ''}`}>
                {loading && <Loader />}
                <section className={`relative text-dark w-full h-[150vh] min-h-screen dark:text-light`}>
                    <NavBar />
                    <div className={`max-w-6xl mx-auto h-48 antialiased z-0`}>
                        <h1 className=" text-5xl 2xl:text-8xl md:text-9xl font-bold py-20 text-center 2xl:text-left md:text-left">
                            Contact
                        </h1>
                    </div>

                    <div className="relative flex items-center justify-between w-full max-w-6xl mx-auto rounded-md shadow-md bg-custom p-4 md:p-10 2xl:p-20 lg:p-20 -mt-10 mb-0 z-10">
                        <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2 2xl:gap-14 md:grid-cols-2">
                            <div className="md:ml-4 2xl:ml-4">
                                <header className="">
                                    <h1 className="text-gray-50 font-semibold text-2xl">
                                        {`Leave me a quote & let's talk.`}
                                    </h1>
                                    <p className="font-light text-base text-gray-200 mt-2">
                                        {`Fill in the details and I'll get back to you as soon as I can`}
                                    </p>
                                </header>

                                <div className="icons-container inline-flex flex-col my-20 cursor-pointer">

                                    <a href="tel:0652624512" target="_blank" rel="noreferrer"
                                        className="flex flex-row items-center space-x-6 rounded-md border border-transparent hover:border hover:border-customTwo px-2 py-4">
                                        <TelIcon className="w-6 h-7 text-customTwo" />
                                        <p className="text-gray-50 font-light text-sm">
                                            {MyUserData.phone}
                                        </p>
                                    </a>

                                    <a href="mailto:frontlabsamsterdam@gmail.com" target="_blank" rel="noreferrer"
                                        className="flex flex-row items-center space-x-6 rounded-md border border-transparent hover:border hover:border-customTwo px-2 py-4">
                                        <MailIcon className="w-6 h-7 text-customTwo" />
                                        <p className="text-gray-50 font-light text-sm">
                                            {MyUserData.email}
                                        </p>
                                    </a>

                                    <a href="https://goo.gl/maps/C8tcosBz27NuL5dt8" target="_blank" rel="noreferrer"
                                        className="flex flex-row items-center space-x-6 rounded-md border border-transparent hover:border hover:border-customTwo px-2 py-4">
                                        <PinpointIcon className="w-6 h-7 text-customTwo" />
                                        <p className="text-gray-50 font-light text-sm">
                                            {MyUserData.address}
                                        </p>
                                    </a>

                                </div>

                                <div className="social-icons flex flex-row space-x-6">
                                    <motion.a
                                        href={MyUserData.socialLinks.facebook}
                                        target="_blank" rel="noreferrer"
                                        className="flex items-center justify-center cursor-pointer 
                                    w-7 rounded-full text-customTwo"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaceBookIcon />
                                    </motion.a>
                                    <motion.a
                                        href={MyUserData.socialLinks.instagram}
                                        target="_blank" rel="noreferrer"
                                        className="flex items-center justify-center cursor-pointer 
                                    w-7 rounded-full text-customTwo"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <InstagramIcon />
                                    </motion.a>
                                </div>
                            </div>
                            <ContactForm name={name} email={email} message={message} validation={validation}
                                successMessage={successMessage} onNameChange={handleNameChange}
                                onEmailChange={handleEmailChange} onMessageChange={handleMessageChange}
                                onFormSubmit={handleFormSubmit}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};