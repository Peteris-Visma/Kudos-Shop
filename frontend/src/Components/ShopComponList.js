import { Divider } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import ShopCompon from './ShopCompon'
import ShopComponent from './ShopComponent'
import axios from 'axios';
export default function ShopComponList() {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        refreshProductList();
    }, [productList])
    const productAPI = (url = 'https://localhost:44324/api/product/addproduct') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }
    function refreshProductList() {
        productAPI('https://localhost:44324/api/product/getproductlist').fetchAll()
            .then(res => setProductList(res.data))
    }
    const addOrEdit = (formData, onSuccess) => {
        productAPI().create(formData)
            .then(res => {
                onSuccess();
                refreshProductList();
            })
            .catch(err => console.log(err))
    }
    const deleteProduct = (formData, onSuccess) => {
        productAPI('https://localhost:44324/api/product/deleteproducts').delete(formData)
            .then(res => {
                onSuccess();
                refreshProductList();
            })
            .catch(err => console.log(err))
    }
    const imageCard = data => (
        <div className="card">
            <img src={data.imageSrc} className="card-img-top round" />
            <div className="card-body">
                <h5>Name: {data.name}</h5>
                <span>Price: {data.price}</span>
            </div>
            <button className="btn btn-danger btn-lg btn-lg" type={"submit"}>Buy</button>
            <button onClick={deleteProduct} >
  delete
</button>
        </div>
    )
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div class="container text-center">
                        <h1 class="display-4">Product Shop</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <ShopCompon
                    addOrEdit={addOrEdit} />
            </div>
            <div className="col-md-8">
                <table>
                    <tbody>
                        {
                            [...Array(Math.ceil(productList.length / 3))].map((e, i) =>
                        <tr key={i}>
                            <td>{productList[3 * i] ? imageCard(productList[3*i]): null}</td>
                            <td>{productList[3 * i + 1] ? imageCard(productList[3*i+1]): null}</td>
                            <td>{productList[3 * i + 2] ? imageCard(productList[3*i+1]): null}</td>
                       </tr>
                            )
                        }    
                   </tbody>
                </table>
            </div>
        </div>
    )
}