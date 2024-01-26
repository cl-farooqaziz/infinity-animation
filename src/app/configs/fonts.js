import localFont from "next/font/local";

const primary = localFont({
    src: [{
        path: '../../fonts/SF-Pro-Display-Black.otf',
        weight: '400',
        style: 'normal',
    }],
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap',
});

export { primary }