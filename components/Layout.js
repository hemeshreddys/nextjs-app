import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout =(props) => (
    <div>
    <Head>
        <title>Next app!!</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>
     <Navbar/>
        <div className="container mainContainer">
            {props.children} 
        </div>   
        <style jsx>{`
            .mainContainer{
                min-height:500px;
            }
            `}
        </style>
    <Footer/>  
    </div>
);
export default Layout;