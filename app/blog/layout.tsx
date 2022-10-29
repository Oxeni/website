import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode; }) => {
    return (
        <div
            style={{ padding: "15vh 8vw 0 8vh" }}>
            {children}
        </div>
    );
};

export default Layout;