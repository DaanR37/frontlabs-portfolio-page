const Layout = ({ children, className = "" }) => {
    return (
        <div className={`${className} w-full h-full inline-block px-32 
            bg-customTwo dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 z-0 
            ${className}`}>
            {children}
        </div>
    );
}

export default Layout;