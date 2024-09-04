import Link from "next/link";
const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/"><img src="/logo-no-background.svg" alt="" /></Link>
                    <Link href="/">Vedant Khare</Link>
                </div>
                <div className="links">
                    <Link href="/about">About</Link>
                    <Link href="/skills">Skills</Link>
                    <Link href="/code/repos">Repository</Link>
                </div>
            </div>
        </div>
    )
}

export default Header