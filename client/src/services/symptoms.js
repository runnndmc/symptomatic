import api from './api-config'

export const getAllSymptoms = async () => {
    const resp = await api.get('/symptoms')
    return resp.data
}

export const getOneSymptom = async (id) => {
    const resp = await api.get(`/symptoms/${id}`)
    return resp.data
}

