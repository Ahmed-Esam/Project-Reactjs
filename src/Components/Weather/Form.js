import React from 'react';

const Form = (props) => {
    return ( 
        <div>
           <form onSubmit={props.getWeather}>
               <input type='text' name='city' placeholder='city......' className='m-2'/>
               <input type='text' name='country' placeholder='country......' className='m-2'/>
                <button>Get Weather</button>
           </form>
        </div>
     );
}
 
export default Form;