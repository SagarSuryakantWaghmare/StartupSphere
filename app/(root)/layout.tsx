import Navbar from "@/app/components/Navbar";

export default function Layout({children}:Readonly<{children:React.ReactNode}>){
    return(
        <main className="font-word-sans">
            <Navbar/>
            {children}
        </main>
    )
}