import MainNavigation from "./main-navigation.js"

function Layout({children}) {
    return (
        <>
            <MainNavigation />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout