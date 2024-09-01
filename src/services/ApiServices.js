
import { useEffect } from "react"
import { makeJsonApiRequest } from "./ApiRequest"
import {toast} from "react-toastify";

const apiURL = 'http://localhost:8080/api/v1/admin/';

export const hotProducts = async ()=>{
    try {
        const response = await makeJsonApiRequest(
            'get',
            `${apiURL}get-featured-products`,
            {}
        )

        if(response.data.success){
            return response.data
        }
        else{
            toast.warning("Something Wrong, Try Again After Some Time");
            return {success:false}
        }
    } catch (error) {
        toast.error("Try Again After Sometime");
        throw new error 
    }

}


export const fetchProducts = async () =>{
    try {
        const response = await makeJsonApiRequest(
            'get',
            `${apiURL}get-products`,
            {}
        )
        if(response && response.data.success){
            return(response.data);
        }
        else{
            toast.warning("Something Wrong, Try Again After Some Time");
            return {success:false}
        }
    } catch (error) {
            toast.error("Try Again After Sometime");
            throw new error 
    }
}


export const getProductById = async (id) =>{
    try {
        const response = await makeJsonApiRequest(
            'get',
            `${apiURL}get-product-details?pid=${id}`,
        )
        if(response && response.data.success){
            return(response.data);
        }
        else{
            toast.warning("Something Wrong, Try Again After Some Time");
            return {success:false}
        }
    } catch (error) {
        toast.error("Try Again After Sometime");
        throw new error 
    }
}

export const getFandQ = async (id) =>{
    try {
        const response = await makeJsonApiRequest(
            'get',
            `${apiURL}get-faq-details?pid=${id}`,
        )
        if(response && response.data.success){
            return(response.data);
        }
        else{
            toast.warning("Something Wrong, Try Again After Some Time");
            return {success:false}
        }
    } catch (error) {
        toast.error("Try Again After Sometime");
        throw new error 
    }
}


export const sendCallRequest = async (payload) =>{
    try {
        const response = await makeJsonApiRequest(
            'post',
            `${apiURL}save-contact`,
            payload,
        )
        console.log(response,"contact-response");
        if(response && response.data.success){
            return(response.data);
        }
        else{
            toast.warning("Something Wrong, Try Again After Some Time");
            return {success:false}
        }
    } catch (error) {
        toast.error("Try Again After Sometime");
        throw new error 
    }
}