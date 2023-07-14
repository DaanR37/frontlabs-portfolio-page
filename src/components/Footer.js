import Layout from "./Layout"

const Footer = () => {
    return (
        <footer className="w-full mt-[5rem] border-solid border-t-2 border-dark 
       font-medium text-lg dark:text-light dark:border-light
       sm:text-base">
            <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
                <span>FrontLabs {new Date().getFullYear()} &copy; All Rights Reserved</span>
            </Layout>
        </footer>
    )
}

export default Footer