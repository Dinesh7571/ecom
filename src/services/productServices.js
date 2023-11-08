import apiClient from "../utils/api-client";


export function getSuggestionAPI(search){
    return apiClient.get(`/products/suggestions?search=${search}`)
}