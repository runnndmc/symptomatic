import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneSymptom } from '../services/symptoms'


const EditSymptom = (props) => {
    const {updateSubmit, symptoms} = props
    const [formData, setFormData] = useState({
        symptom: '', 
        description: '', 
        pain_level: ''
    })

    const { symptom, description, pain_level } = formData
    const { id } = useParams()

    useEffect(() => {
        const prefillForm = () => {
            const singleSymptom = symptoms.find(symptom => symptom.id === Number(id))
            const { symptom, description, pain_level } = singleSymptom
            setFormData({symptom, description, pain_level})
        }
        if(symptoms.length){
            prefillForm()
        }
    }, [symptoms])

    const handleChange = (e) => {
        const {value, name} = e.target
        setFormData((prevState) => ({
            ...prevState, 
            [name]:value,
        }))
    } 

    // app/controllers/symptoms_controller.rb:48:in `set_symptom'
    return(
        <>
        <form
            onSubmit={(e)=> {
                e.preventDefault()
                updateSubmit(id, formData)
            }}
        >
        <h2>Edit your symptom</h2>
            <label>Symptom:</label>
            <input name='symptom' type="text" value={symptom} onChange={handleChange} />
            <label>Description:</label>
            <textarea name='description' type="textarea" value={description} onChange={handleChange} />
            <label>Pain Level:</label>
            <input name='pain_level' type='text' value={pain_level} onChange={handleChange} />
            <div className="submit-edit">
                <button className='edit-save'>Save</button>
            </div>
        </form>
        </>
        
    )
}

export default EditSymptom