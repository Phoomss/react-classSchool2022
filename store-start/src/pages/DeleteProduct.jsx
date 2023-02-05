import React, {useEffect, useState, useRef} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductService from '../services/ProductService'
import swal from 'sweetalert'
import MainLayout from '../layouts/MainLayout'

const DeleteProduct = () => {
    let navigate = useNavigate();
    let params = useParams();
    let id  = params.id;

    ProductService.deleteProduct(id)
        .then((res)=>{
            navigate("/product")
            swal({
                icon: "success",
                text: "delete conplete",
                title: "Result"   
            })
        })
        .catch((e)=>{
            console.log(e)
        })
  return (
    <MainLayout>

    </MainLayout>
  )
}

export default DeleteProduct