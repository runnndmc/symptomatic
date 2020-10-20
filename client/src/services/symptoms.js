import api from './api-config'

export const getAllSymptoms = async () => {
    const resp = await api.get('/symptoms')
    return resp.data
}

