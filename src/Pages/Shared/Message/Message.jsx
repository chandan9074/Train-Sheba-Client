import React from 'react';

const Message = ({errormessage}) => {
    return ( 
        <div className='flex items-center justify-center bg-yellow-300 w-1/2 p-2 text-red-800 rounded'>
            <i class="fas fa-exclamation-triangle"></i>
            <p className='mb-0 ml-3'>{errormessage}</p>
        </div>
     );
}
 
export default Message;