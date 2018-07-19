import Link from 'next/link';
const Navbar = () => (
    <div className="container">
        <ul>
            <li> <Link href="/"><a> Home</a></Link></li>
            <li> <Link href="/about"><a> About</a></Link></li>
            <li> <Link href="/contact"><a> Contact</a></Link></li>
        </ul>
        <style jsx>{`
            ul {
                background: grey;
                color:white;
                list-style:none;
                display:flex;
            }
            li{
                padding:10px;
            }
        `}
        </style>
    </div>  
);
export default Navbar;