import React from 'react';
import './loading.scss'


const Loading: React.FC = () => {
    return (
        <div className='loadingWrapper' style={{width: '100%', height: '100%'}} >
            <div className="loader" />
        </div>
    );
};

export default Loading;
