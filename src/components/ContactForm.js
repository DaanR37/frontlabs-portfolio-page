const ContactForm = (props) => {
    return (
        <form
            onSubmit={props.onFormSubmit}
            className="form rounded-lg bg-customTwo p-4 flex flex-col text-dark"
        >
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
                Name
            </label>
            <input
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                type="text"
                id="name"
                name="name"
                value={props.name}
                onChange={props.onNameChange}
                placeholder="enter your name"
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
                Email
            </label>
            <input
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                type="email"
                id="email"
                name="email"
                value={props.email}
                onChange={props.onEmailChange}
                placeholder="enter your email"
            />
            <label htmlFor="message" className="text-sm text-gray-600 mx-4 mt-4">
                Message
            </label>
            <textarea
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                rows="4"
                type="text"
                id="message"
                name="message"
                value={props.message}
                onChange={props.onMessageChange}
                placeholder="your message"
            ></textarea>

            <div className="w-full flex justify-between items-center p-4">
                <div className="2xl:text-sm text-dark">
                    {props.validation}
                </div>
                <button
                    type="submit"
                    className="bg-dark text-light text-sm rounded-md w-1/4 py-2 font-semibold
        hover:bg-customTwo hover:text-dark
        border-[1px] border-solid border-light hover:border-dark
        transition duration-300 ease-in-out"
                    disabled={props.loading}
                >
                    Send
                </button>
            </div>
            {props.successMessage && (<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    rounded-2xl border-solid p-16 w-1/3 
    bg-dark/90 text-light dark:bg-light/90 dark:text-dark shadow-2xl drop-shadow-xl
    text-lg text-center">{props.successMessage}</p>)}
        </form>
    )
}

export default ContactForm