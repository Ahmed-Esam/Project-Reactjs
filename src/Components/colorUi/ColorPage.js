import React, { Component } from 'react'
import ColorLIst  from './ColorList'

class ColorPage extends Component {
    state = {
        colors :[ 
            {id:1, color:'red' , hex:'#8B0000'},
            {id:2, color:'Blue' , hex:'#0000FF'},
            {id:3, color:'BlueViolet' , hex:'#8A2BE2'},
            {id:4, color:'CadetBlue ' , hex:'#5F9EA0'},
            {id:5, color:'DarkGray ' , hex:'#A9A9A9'},
            {id:6, color:'DarkCyan ' , hex:'#008B8B'},
        ],
    }


    render() {
        let {colors} = this.state;
        let colorList = colors.map((color,index) => {
            return <ColorLIst colors={color}  key={index} />
        })
        return ( 
            <div>
                <h1>ColorPage</h1>
                <form>
                    <input type='text' placeholder='Paste Hex Code' className='p-1 rounded border-0'/>
                </form>
                <ul className='list-unstyled list-group container ulList'>
                    {colorList}
                </ul>
            </div>
            
         );
    }
}
 
export default ColorPage;