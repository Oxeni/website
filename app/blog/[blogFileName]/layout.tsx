import { ReactNode } from 'react';

const SingleBlogPageLayout = ({ children }: { children: ReactNode; }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default SingleBlogPageLayout;