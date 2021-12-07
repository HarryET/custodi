const OauthProvider = () => {
    return (
        <div className="flex space-x-6 w-max mx-auto mt-6">
            <button className='filter drop-shadow-3xl rounded-lg p-2.5 bg-white'>
                <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                        <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                        <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                        <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                        <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                    </g>
                </svg>
            </button>
            <button className='filter drop-shadow-3xl rounded-lg p-2.5 bg-black'>
                <svg version="1.1" id="Layer_1" fill="#FFF" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1024 1024" xmlSpace="preserve">
                    <path className="st0" d="M512,0C229.1,0,0,229.1,0,512c0,226.6,146.6,417.9,350.1,485.8c25.6,4.5,35.2-10.9,35.2-24.3 c0-12.2-0.6-52.5-0.6-95.4c-128.6,23.7-161.9-31.4-172.2-60.2c-5.8-14.7-30.7-60.2-52.5-72.3c-17.9-9.6-43.5-33.3-0.6-33.9 c40.3-0.6,69.1,37.1,78.7,52.5c46.1,77.4,119.7,55.7,149.1,42.2c4.5-33.3,17.9-55.7,32.6-68.5c-113.9-12.8-233-57-233-252.8 c0-55.7,19.8-101.8,52.5-137.6c-5.1-12.8-23-65.3,5.1-135.7c0,0,42.9-13.4,140.8,52.5c41-11.5,84.5-17.3,128-17.3 c43.5,0,87,5.8,128,17.3c97.9-66.6,140.8-52.5,140.8-52.5c28.2,70.4,10.2,122.9,5.1,135.7c32.6,35.8,52.5,81.3,52.5,137.6 c0,196.5-119.7,240-233.6,252.8c18.6,16,34.6,46.7,34.6,94.7c0,68.5-0.6,123.5-0.6,140.8c0,13.4,9.6,29.4,35.2,24.3 C877.4,929.9,1024,737.9,1024,512C1024,229.1,794.9,0,512,0z"/>
                </svg>
            </button>
            <button className='filter drop-shadow-3xl rounded-lg p-2.5 bg-discord'>
                <svg height="24" width="24" viewBox="-10.63 -.07077792 823.87 610.06955549" xmlns="http://www.w3.org/2000/svg">
                    <path d="m678.27 51.62c90.35 132.84 134.97 282.68 118.29 455.18-.07.73-.45 1.4-1.05 1.84-68.42 50.24-134.71 80.73-200.07 100.95a2.55 2.55 0 0 1 -2.81-.95c-15.1-21.01-28.82-43.16-40.84-66.42-.69-1.37-.06-3.02 1.36-3.56 21.79-8.21 42.51-18.05 62.44-29.7 1.57-.92 1.67-3.17.22-4.25-4.23-3.14-8.42-6.44-12.43-9.74-.75-.61-1.76-.73-2.61-.32-129.39 59.75-271.13 59.75-402.05 0-.85-.38-1.86-.25-2.59.35-4 3.3-8.2 6.57-12.39 9.71-1.45 1.08-1.33 3.33.25 4.25 19.93 11.43 40.65 21.49 62.41 29.74 1.41.54 2.08 2.15 1.38 3.52-11.76 23.29-25.48 45.44-40.86 66.45-.67.85-1.77 1.24-2.81.92-65.05-20.22-131.34-50.71-199.76-100.95-.57-.44-.98-1.14-1.04-1.87-13.94-149.21 14.47-300.29 118.18-455.18.25-.41.63-.73 1.07-.92 51.03-23.42 105.7-40.65 162.84-50.49 1.04-.16 2.08.32 2.62 1.24 7.06 12.5 15.13 28.53 20.59 41.63 60.23-9.2 121.4-9.2 182.89 0 5.46-12.82 13.25-29.13 20.28-41.63a2.47 2.47 0 0 1 2.62-1.24c57.17 9.87 111.84 27.1 162.83 50.49.45.19.82.51 1.04.95zm-339.04 283.7c.63-44.11-31.53-80.61-71.9-80.61-40.04 0-71.89 36.18-71.89 80.61 0 44.42 32.48 80.6 71.89 80.6 40.05 0 71.9-36.18 71.9-80.6zm265.82 0c.63-44.11-31.53-80.61-71.89-80.61-40.05 0-71.9 36.18-71.9 80.61 0 44.42 32.48 80.6 71.9 80.6 40.36 0 71.89-36.18 71.89-80.6z" fill="#FFF"/>
                </svg>
            </button>
            <button className='filter drop-shadow-3xl rounded-lg p-2.5 bg-white'>
                <svg width="24" height="24" viewBox="0 0 256 236" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M128.075 236.075l47.104-144.97H80.97l47.104 144.97z" fill="#E24329"/>
                    <path d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97z" fill="#FC6D26"/>
                    <path d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012-113.12-144.97z" fill="#FCA326"/>
                    <path d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315z" fill="#E24329"/>
                    <path d="M128.075 236.074l47.104-144.97h66.015l-113.12 144.97z" fill="#FC6D26"/>
                    <path d="M241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012 113.119-144.97z" fill="#FCA326"/>
                    <path d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315z" fill="#E24329"/>
                </svg>
            </button>
            <button className='filter drop-shadow-3xl rounded-lg p-2.5 bg-twitter'>
                <svg clipRule="evenodd" fillRule="evenodd" height="24" width="24" strokeLinejoin="round" strokeMiterlimit="2" viewBox="-89.00934757 -46.8841404 643.93723344 446.8841404" xmlns="http://www.w3.org/2000/svg">
                    <path d="m154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052a205.304 205.304 0 0 0 50.352-52.29c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 0 1 -64.098 24.511c-18.42-19.628-44.644-31.904-73.682-31.904-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504a100.739 100.739 0 0 0 -13.668 50.754c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 0 1 -45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 0 1 -26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224a204.9 204.9 0 0 1 -24.078-1.399c44.674 28.645 97.72 45.359 154.734 45.359" fill="#FFF" fillRule="nonzero"/>
                </svg>
            </button>
        </div>
    )
}

export default OauthProvider