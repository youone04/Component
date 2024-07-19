const StikySectionHeader = ({children, header}) => {
    return (
        <>
            <section>
                <header className="section-header">
                    <h2>{header}</h2>
                </header>
               {children}
            </section>
        </>
    )
}

export default StikySectionHeader;