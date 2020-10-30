import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Switch, useHistory, useParams } from 'react-router-dom'
import EditSymptom from './EditSymptom'


const SymptomDetail = (props) => {
    const {symptoms} = props
    
    const history= useHistory()
    const [symptom, setSymptom] = useState(null)
    const {id} = useParams()

    useEffect(()=> {
        if(symptoms.length){
        const fetchSymptom = symptoms.find(symptom => symptom.id === Number(id))
        setSymptom(fetchSymptom)
        }
    }, [symptoms, id])

    console.log(symptom)

    const editSymptom = async (formData) => {
        const editedSymptom = await setSymptom(id, formData)
        setSymptom(prevState => prevState.map(symptom => {
            return symptom.id === Number(id) ? editedSymptom : symptom
        }))
        history.push(`symptoms/${id}`)
    }



    return(
        <>
           {
                symptom ? (
                    <div>
                        <h2>{symptom.symptom}</h2>
                        <h2>{symptom.description}</h2>
                        <h2>{symptom.pain_level}</h2>

                   
                    
                    <Switch>
                        <Route path='symptoms/:id/edit'>
                            <EditSymptom 
                                editSymptom={editSymptom}
                                symptom={symptom}
                                id={id}
                            />
                        </Route>
                    </Switch>
                    </div>
                ) : <h2>Loading . . .</h2>
            }
        </>
    )
}

export default SymptomDetail