import api from './api-config'

export const getAllSymptoms = async () => {
    const resp = await api.get('/symptoms')
    return resp.data
}

export const getOneSymptom = async (id) => {
    const resp = await api.get(`/symptoms/${id}`)
    return resp.data
}

export const postSymptom = async (formData) => {
    const resp = await api.post(`/symptoms`, { symptom: formData })
    return resp.data
}
