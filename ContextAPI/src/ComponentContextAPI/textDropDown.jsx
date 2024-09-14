import React, { useState } from "react";
function DropDown() {
    const Countries = [
        {
            name: 'india', value: 'IN', cities: [
                'Delhi',
                'Mumbai'
            ]
        },
        {
            name: 'pakistan', value: 'PK', cities: [
                'Karachi',
                'Lahore',
                'Islamabad',
                'Gujranwala'
            ]
        },
        {
            name: 'Sudia Arabia', value: 'SU', cities: [
                'Makka',
                'Madina',
                'Jadha'
            ]
        }
    ]
    let [country,setcountry]=useState(null)
    return (
        <>
            <h1>DropDown</h1>
            {/* 1st DropDown */}
            <select onChange={(e) => {
                setcountry(e.target.value)
            }}
            value={country !== null ? country :''}>
                <option value="" disabled>Select Country</option>
                {
                    Countries.map((item, index) =>
                        <option key={index} value={index}>{item.name}</option>

                    )
                }


            </select>

            {/* 2nd DropDown */}

            <select>
                {
                    country !== null && Countries[country].cities.map((item,index)=>
                    <option key={index} value={index}>{item}</option>
                    )
                }
            </select>

        </>
    )
}
export default DropDown