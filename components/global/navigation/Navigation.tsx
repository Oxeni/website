import Logo from './Logo';
import Link from 'next/link';
// import BlogIcon from './Blog.icon';
// import Button from 'components/lib/button/Button';

const Navigation = () => {

    return (
        <nav className='navigation'>
            <Link href="/" >
                <Logo
                    className="navigation_logo"
                    pathFill='var(--primary-black)' />
            </Link>

            <div className="navigation_links">

                {/* <Link href='/blog'>
                    <div className="link">
                        <Button
                            className="hero_button"
                            color="black"
                            size="small"
                            icon={<BlogIcon props={{color: 'white'}} size={30} />}>
                            <p className='f-size-p3 f-weight-r'> blog </p>
                        </Button>
                    </div>
                </Link> */}
            </div>
        </nav>
    );
};


export default Navigation;