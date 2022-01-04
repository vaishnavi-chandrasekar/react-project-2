import React from 'react'
import { useFormik } from 'formik'

function UserCreate() {
    const formik = useFormik({
        initialValues: {
            Name: "",
            Position: "",
            Office: "",
            Age: 0,
            Startdate: "",
            Salary: ""
        },
        onSubmit: async values =>{
            try{
                await fetch("https://61c4d7a4f1af4a0017d9981e.mockapi.io/users",{
                    method:"POST",
                    body:JSON.stringify(values),
                    headers:{
                        "content-type":"application/json"
                    }
                })
                alert("data saved")
            }catch (error){
                console.log(error)
            }
        }
        })
    
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">User Create</h1>
        
            </div>
            <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-4'>
                        <label>Name</label>
                        <input type="text"
                        name='Name'
                        class="form-control" onChange={formik.handleChange}
                        value={formik.values.Name}
                        ></input>
                    </div>

                    <div className='col-lg-4'>
                        <label>Position</label>
                        <input type="text"name='Position'
                        class="form-control" onChange={formik.handleChange}
                        value={formik.values.Position}
                        ></input>
                    </div>

                    <div className='col-lg-4'>
                        <label>Office</label>
                        <input type="text" name='Office'
                        class="form-control" onChange={formik.handleChange}
                        value={formik.values.Office}
                        ></input>
                    </div>
                    <div className='col-lg-4'>
                        <label>Age</label>
                        <input type="number"name='Age'
                        class="form-control" onChange={formik.handleChange}
                        value={formik.values.Age}
                        ></input>
                    </div>
                    <div className='col-lg-4'>
                        <label>Startdate</label>
                        <input type="date"name='Startdate'
                        class="form-control" onChange={formik.handleChange}
                        value={formik.values.Startdate}
                        ></input>
                    </div>
                    <div className='col-lg-4'>
                        <label>Salary</label>
                        <input type="number" name='Salary'
                        class="form-control" onChange={formik.handleChange}
                        value={formik.values.Salary}
                        ></input>
                    </div>
                    <div className='col-lg-3 mt-3'>
                        <input type="Submit" class="btn btn-primary"></input>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
    }

export default UserCreate