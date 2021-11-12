import React from 'react';
import './ImageForm.css';


const ImageForm = () => {
    return (
        <div>
        <p className='f3'>
            {'This Magic Eye will detect faces in your pictures. Get started below'}
        </p>
        <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
            <input className='f4 pa2 w-70 center' type='tex' />
            <button className='w-30 grow f4 link ph3 pv2 dib black bg-light-green'>Detect</button>
        </div>            
        </div>
        </div>
    );
}

export default ImageForm;
