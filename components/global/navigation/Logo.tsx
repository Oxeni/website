import * as React from "react"


interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Logo({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={120}
      height={34}
      viewBox="0 0 120 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M24.93 15.888a12.726 12.726 0 00-2.751-4.063 12.511 12.511 0 00-4.105-2.667 14.164 14.164 0 00-10.22 0c-1.533.61-2.93 1.52-4.105 2.676a12.329 12.329 0 00-2.74 4.054A13.036 13.036 0 000 21.074a13.228 13.228 0 001.008 5.215 12.282 12.282 0 002.736 4.07 12.335 12.335 0 004.114 2.68 14.146 14.146 0 0010.22 0 12.511 12.511 0 004.104-2.666 12.628 12.628 0 002.75-4.084 13.318 13.318 0 001.003-5.215 13.12 13.12 0 00-1.007-5.186zM12.966 27.02a5.96 5.96 0 01-3.303-.997 5.927 5.927 0 01-2.19-2.658 5.9 5.9 0 011.288-6.453 5.966 5.966 0 016.478-1.284 5.939 5.939 0 012.668 2.18 5.906 5.906 0 01-.738 7.477 5.946 5.946 0 01-4.203 1.735z"
        fill="#fff"
      />
      <path
        d="M53.15 8.84h-8.338l-5.594 7.094-5.593-7.094h-8.34l9.764 12.38-9.764 12.382h8.34l5.593-7.093 5.594 7.093h8.339l-9.763-12.381L53.151 8.84zM105.201 33.603h-7.079v-14.25c0-1.228-.324-2.25-.973-3.062-.648-.814-1.674-1.22-3.075-1.223-1.268 0-2.269.408-3.002 1.223-.733.814-1.1 1.852-1.1 3.113V33.6h-7.367V8.842h7.117v3.528a8.009 8.009 0 013.087-3.03c.338-.19.689-.356 1.05-.498a6.96 6.96 0 012.897-.645c1.566 0 2.31.258 3.444.774a7.869 7.869 0 012.826 2.118 8.562 8.562 0 011.649 3.14c.359 1.246.536 2.538.526 3.835v13.895l1.556 1.643-1.556.002z"
        fill="#fff"
      />
      <path
        d="M66.35 8.042c6.675 0 13.013 4.646 13.013 12.372v2.242H59.724c.409 3.195 3.414 4.959 6.778 4.959 3.158 0 5.451-1.382 6.572-3.003l5.163 4.042c-2.344 3.194-6.471 5.34-11.822 5.34-7.592 0-13.916-5.234-13.916-12.768 0-7.058 6.105-13.184 13.85-13.184zM59.733 18.58H72.15c-.638-2.929-3.29-4.32-5.996-4.32-2.707 0-5.73 1.292-6.42 4.32zM118.043 32.195V8.985h-7.512v24.853h9.013l-1.501-1.643zM118.031.494h-7.5v5.612h7.5V.494z"
        fill="#fff"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(Logo)
export default MemoSvgComponent
