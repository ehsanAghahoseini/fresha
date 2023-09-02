
interface ICSvgProps {
    className: string,
    onClick?: () => void
}


export const CSvgLogo: React.FunctionComponent<ICSvgProps> = ({ className, onClick }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.8 24"  ><path d="M51.5 2.1h3.9v8.1c1.3-1.9 4-2.5 6.2-1.6 2.2.9 2.9 2.5 3 2.7.2.5.4 1 .5 1.5.6 3.6-.6 7.2.5 10.7h-3.8c-1-2.5-.4-5.3-.4-7.9 0-.7 0-1.5-.4-2.2-.5-.9-1.5-1.6-2.5-1.6-1.1 0-2.1.6-2.6 1.5-.4.8-.4 1.8-.4 2.7v7.5h-3.9l-.1-21.4zM36 15.7c.1-4.3-2.6-7.5-6.8-7.5-2.8 0-5.2 1.4-6.5 3.8-1.4 2.6-1.3 6.3.4 8.8 2.5 3.4 7.6 4.2 12.5 1.9l-1.2-3.1c-4.1 1.8-8.5 1.3-8.8-2.4H36v-1.5zm-10.3-1.5c.3-.8.7-1.4 1.3-1.9 1.2-.9 3.3-1 4.4-.1.5.4.9 1.1 1.2 1.9h-6.9zM13.1 13.9s0-2.3-1.9-2.3H6.9v12.1H3V11.6H0V8.3h3V5.7C3 3.4 5.1 0 9.7 0s6.4 3.9 6.4 3.9l-3 2.1s-.8-2.5-3.3-2.5C8.7 3.5 7 4.4 7 6.2v2h6.1c2.7 0 3.4 2 3.4 2 1-2.4 4.6-2.1 5.3-2v3.1c-2.5-.2-4.8 1.2-4.8 4.1v8h-3.9v-9.5zM48.9 16.2c-1.2-1.2-4.3-1.6-6.3-2-1-.2-1.8-.4-1.8-1.4 0-1.2 1.2-1.5 2.4-1.5s2.4.5 3.1 1.5l3-1.6c-1.7-3-6.2-3.6-9.1-2.4-.9.4-1.6 1-2.1 1.7-1.1 1.5-1 4.1.3 5.3.7.7 1.9 1.2 3.4 1.5l2.8.5c1 .2 1.9.4 1.9 1.5 0 1.3-1.4 1.6-2.6 1.6-3.2 0-3.8-3-3.8-3L36.4 19c.2 1 1.5 5 7.4 5 3.3 0 6.2-1.3 6.3-4.8-.1-1.3-.5-2.3-1.2-3zM81.2 20.8c-.7 0-1.3-.4-1.3-1.4 0-.5-.1-2.2-.1-2.6 0-2.6.1-5.1-1.7-6.9-2-2-6.6-2.2-9-.6-.9.5-1.7 1.2-2.3 2.1l2.3 2.4c.9-1.5 2.2-2.2 3.7-2.2 1.4-.1 2.6.6 3.1 2-3.1.8-7.1 1.1-8.8 4.3-.8 1.5-.6 3.4.6 4.7.9 1 2.4 1.3 3.8 1.3 2.2 0 4.3-.5 5.6-2.5.7 1.7 2.2 2.5 4 2.5.3 0 .6-.1.8-.2v-3c-.2.1-.4.1-.7.1zm-5.3-3.1c.1 2.2-1.7 3.4-3.7 3.4-1.1 0-1.8-.5-1.8-1.6 0-1.2 1-1.6 2.1-1.9l3.4-1v1.1z" ></path></svg>
    );
};

export const CSvgSearch: React.FunctionComponent<ICSvgProps> = ({ className, onClick }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export const CSvgLocation: React.FunctionComponent<ICSvgProps> = ({ className, onClick }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export const CSvgCalender: React.FunctionComponent<ICSvgProps> = ({ className, onClick }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z" /></svg>
    );
};

export const CSvgClock: React.FunctionComponent<ICSvgProps> = ({ className, onClick }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};


export const CSvgMore: React.FunctionComponent<ICSvgProps> = ({ className, onClick }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9V5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V15Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 5C14 4.44772 14.4477 4 15 4H19C19.5523 4 20 4.44772 20 5V9C20 9.55228 19.5523 10 19 10H15C14.4477 10 14 9.55228 14 9V5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 15C14 14.4477 14.4477 14 15 14H19C19.5523 14 20 14.4477 20 15V19C20 19.5523 19.5523 20 19 20H15C14.4477 20 14 19.5523 14 19V15Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};