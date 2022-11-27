"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import NextImage from "next/image";
import { ImageProps } from "next/image";
import "./tokyo-night-dark.css"


interface IMdxWrapper {
    compiledSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Image = ({ ...props }: ImageProps) => {

    return (
        <NextImage
            {...props}
            alt="some image"
            quality={75}
            blurDataURL={`/_next/image?url=${props.src}&w=16&q=10`}
            placeholder="blur"
            // blurDataURL={`${props.src}`}
            style={{
                maxWidth: '100%',
                height: 'auto',
                margin: "0 auto"
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