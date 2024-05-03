import{ ref } from 'vue'
import axios from 'axios'

export default function useTemperatura() {
    const url = "http://localhost:8000/api/temperaturas"
    const temperaturaData = ref([])
    const error = ref(null)

    const getAllTemperatura = async () => {
        temperaturaData.value = []
        error.value = null
        try{
            const res = await axios(url)
            temperaturaData.value = res.data
        }catch (err) {
            error.value = err
        }
    }

    return {
        temperaturaData,
        error,
        getAllTemperatura
    }
}