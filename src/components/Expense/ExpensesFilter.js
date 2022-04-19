import React from 'react';
import './ExpensesFilter.css'

const ExpensesFilter =(props) =>{
    const dropDownChangeHandler =(event)=>{
        props.onChangeFilter(event.target.value)
    };
    return (
        
        <div className='expence-filter'>
            <div className='expence-filter_controls'> 
                <label className='expence-filter_label'  >Filter By Year</label>
                <select value={props.selected} className='expence-filter_select' onChange={dropDownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
    
}
export default ExpensesFilter;