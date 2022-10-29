"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import NextImage from "next/image";
import { ImageProps } from "next/image";
import { defaultStyles } from '../lib/button/Button.style';



interface IMdxWrapper {
    compiledSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Image = ({ ...props }: ImageProps) => {
    return (
        <NextImage
            {...props}
            alt="some image"
            style={{
                maxWidth: '100%',
                height: 'auto',
            }}
        />
    );
};

const MdxWrapper = ({ compiledSource }: IMdxWrapper) => {
    return (
        <>
            <MDXRemote {...compiledSource} components={{ Image }} />
        </>
    );
};

export default MdxWrapper;