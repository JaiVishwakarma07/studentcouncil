import React from 'react'
import './feedback.scss'

const Feedback = () => {
    return (
        <div className='feedback'>
            <h1 className='heading'>Feedback Form</h1>
            <form>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Roll No.' />
                <input type="email" placeholder='email' />
                <label for="Clubs">Select Club</label>
                <select name="Clubs">
                    <option value="Web">Web Club</option>
                    <option value="Dance">Dance</option>
                    <option value="PhotoGrapgy">Photography</option>
                    <option value="Music">Music</option>
                </select>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Feedback