import React, { useState, useEffect } from 'react'
import ShopComponList from './ShopComponList'

const defaultImgSrc = '/img/productlogo.png'
const initialFieldValues = {
    idP: 0,
    nameP: '',
    priceP: 0,
    isAvailableP: '',
    pictureP: '',
    imageSrc: defaultImgSrc,
    imageFile: null
}

export default function ShopCompon(props) {

    const { addOrEdit } = props
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImgSrc
            })
        }
    }
    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
            formData.append('idP', values.idP)
            formData.append('nameP', values.nameP)
            formData.append('priceP', values.priceP)
            formData.append('isAvailableP', values.isAvailableP)
            formData.append('pictureP', values.pictureP)
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData, resetForm)
        }
    }


    const validate = () => {
        let temp = {}
        temp.nameP = values.nameP == "" ? false : true;
        temp.imageSrc = values.imageSrc == defaultImgSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)

    }



    //  const applyErrorClass = field =>  ((field in errors && errors[field]==false)?'invalid-field':'')

return (
    <>
        <div className="container text-center">
            <p className="lead">Add product</p>
        </div>
        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
            <div className="card">
                <img src={values.imageSrc} className="card-img-top" />
                <div class="card-body">
                    <div className="form-group">
                        <input type="file" accept="image/*" className="form-control-file"
                            onChange={showPreview} id="image-uploader" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Product Name" name="nameP"
                            value={values.nameP}
                            onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Product price" name="priceP"
                            value={values.priceP}
                            onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Is available?" name="isAvailableP"
                            value={values.isAvailableP}
                            onChange={handleInputChange} />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-light">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </>
)
    
}