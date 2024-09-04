// components/LoadingPage.jsx
'use client'; // Add this directive

import { BallTriangle } from 'react-loader-spinner';

const LoadingPage = () => {
    return (
        <div className="loading-container">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}

export default LoadingPage;
