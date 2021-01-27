import React from 'react'

const infoView = () => {
    let dt = new Date();
    let infoDate = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));;

    return (
        <div>
            <h5>{`Date\\Time: ${infoDate}`}</h5>
        </div>
    )
}

export default infoView
