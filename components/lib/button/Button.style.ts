
export const colorStyles = {
    yellow: {
        bg: 'var(--primary-yellow)',
        border: 'none',
    },
    blue: {
        bg: 'var(--secondary-dark-blue)',
        border: 'none',
    },
    black: {
        bg: 'var(--primary-black)',
        border: '0.5px solid rgba(255, 255, 255, 0.08)',
    },
    white:{
        bg: 'var(--primary-white)',
        border: 'none',
    }
   
}


export const sizeStyles = {
    large: {
        padding: '22px 50px',
        fontSizeClass: 'f-size-p2'
    },
    medium: {
        padding: '20px 30px',
        fontSizeClass: 'f-size-p3'
    },
    small: {
        padding: '18px 15px',
        fontSizeClass: 'f-size-p4'
    }
}

export const defaultStyles = {
    bg: colorStyles.black.bg,
    border: colorStyles.black.border,
    padding: sizeStyles.medium.padding,
    fontSizeClass: sizeStyles.medium.fontSizeClass,
}