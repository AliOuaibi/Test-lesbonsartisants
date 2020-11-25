import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4242/api',
})

export const insertProduct = payload => api.post(`/addProduct`, payload)
export const getAllProducts = () => api.get(`/products`)
export const updateProductByNumeroProduct = (NumeroProduct, payload) => api.put(`/product/${NumeroProduct}`, payload)
export const deleteProductByNumeroProduct = NumeroProduct => api.delete(`/product/${NumeroProduct}`)
export const getProductByNumeroProduct = NumeroProduct => api.get(`/product/${NumeroProduct}`)
// export const insertUser = payload => api.post(`/adduser`, payload)
// export const loginConexion = payload => api.post(`/login`, payload)

const apis = {
    insertProduct,
    getAllProducts,
    updateProductByNumeroProduct,
    deleteProductByNumeroProduct,
    getProductByNumeroProduct,
    // loginConexion,
    // insertUser,
}

export default apis