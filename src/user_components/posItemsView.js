
import React  from 'react'
import InfoView from './infoView'

const posItemsView = () => {
    
    return (
        <>
        <div className='customer_view'>
            <button>Tab 001</button>
            <button>Tab 002</button>
            <button>Tab 003</button>
            <button>Tab 004</button>
            <button>Tab 005</button>
            <button>Tab 006</button>
            <button>Tab 007</button>
            <button>Tab 008</button>
            <button>Tab 009</button>
            <button>Tab 010</button>
        </div>
        <div className='information_view'>
            <InfoView />
        </div>
        <div className='tab_view'>
            <h3>Tab view</h3>
        </div>
        <div className='product_range'>
            <button>drinks</button>
            <button>food</button>
        </div>
        <div className='product_item'>
            <button>One</button>
            <button>Two</button>
        </div>
        </>
    )
       
        
        
    
}

export default posItemsView
