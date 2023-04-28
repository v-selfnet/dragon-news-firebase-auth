import React from 'react';

import qzone1 from '.././../../assets/qZone1.png';
import qzone2 from '.././../../assets/qZone2.png';
import qzone3 from '.././../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='mt-5'>
            <h3>Q-Zone</h3>
            <div className='bg-secondary'>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            
        </div>
    );
};

export default QZone;