import api from './api-config'

export const getAllSymptoms = async () => {
    const resp = await api.get('/symptoms')
    return resp.data
}

/* export const putSymptom = async () => {
    const resp = await api.put(`/symptoms/${id}`, {symptom: formData})
    return resp.data
} */

/* export const postSymptom = async () => {
    const resp = await api.post(`/symptoms`, {symptom: formData})
    return resp.data
} */