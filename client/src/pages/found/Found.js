import React, { useState } from 'react'
import { Sidemenu } from '../../components/menu/Sidemenu';

const FOUND = () => {

    const [formState, setFormState] = useState(true)
    const [displayState, setDisplayState] = useState('block');
    const [foundResult,setFoundResult] = useState(null);
    const [foundState,setFoundState] = useState(null)

    const imageData = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    const MissReport = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        let formdata = {}

        // console.log(data.get("aadhar_no"),data.get('image'));
        const temp = ['reporter_name', 'aadhar_no', 'missing_name', 'gender', 'contact', 'clothes_color'];

        let hairColor = `${data.get('hair_color')},${data.get('hair_color1')},${data.get('hair_color2')}`
        let Complexion = `${data.get('complexion')},${data.get('complexion1')}`
        let bodycharacterstics = `${data.get('body_characterstics')},${data.get('body_characterstics1')}`
        let heightcharacterstics = `${data.get('height_characterstics')},${data.get('height_characterstics1')}`

        const file = data.get('image');
        const base64 = await imageData(file)
        console.log(base64)

        for (let i = 0; i < temp.length; i++) {
            const element = temp[i];
            formdata[element] = data.get(`${element}`)
        }

        formdata["height_characterstics"] = heightcharacterstics
        formdata["body_characterstics"] = bodycharacterstics
        formdata["complexion"] = Complexion
        formdata["hair_characterstics"] = hairColor
        formdata['image'] = base64

        const { reporter_name, aadhar_no, missing_name, gender, contact, clothes_color, body_characterstics, height_characterstics, complexion, hair_characterstics, image } = formdata
        console.log(formdata)


        const res = await fetch('http://localhost:8000/people_found/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                reporter_name,
                aadhar_no,
                missing_name,
                gender,
                image,
                contact,
                clothes_color,
                body_characterstics,
                height_characterstics,
                complexion,
                hair_characterstics
            })
        })

        console.log(res.status)
        if (res.status === 201) {
            setFormState(false);
            setDisplayState('none')
            const result = await res.json()
            if(result === 0){
                setFoundState(false);
            }else{
                setFoundState(true);
                setFoundResult(result);
            }
        }
        // console.log(await res.json())
    }

    return (
        <>
            <div className="container">
                <Sidemenu id={3} />
                <div className="right-cont">
                    <div className="nav">
                        <h1>Found Report</h1>
                    </div>
                    <hr />
                    <div className="mainSection">
                        <div className="row">
                            <div className="cards" style={{ width: "100%", height: "auto" }}>
                                {formState ? (
                                    <form id='foundreport' onSubmit={MissReport} style={{ display: displayState }}>
                                        <div className="card-items">
                                            <div className="items">
                                                <h3>Found Person Report</h3>
                                            </div>
                                            <div className="items" style={{ color: "#999", marginTop: "20px", paddingLeft: "50px" }}>
                                                <tr >
                                                    <span>UPLOAD IMAGE</span>
                                                    <input type="file" name="image" id="" style={{ margin: "0px 10px" }} />
                                                </tr>
                                            </div>
                                            <div className="items">

                                                <li>
                                                    <label htmlFor="reporter_name">
                                                        REPORTER NAME
                                                    </label>
                                                    <input type="text" name="reporter_name" placeholder='Full Name' />
                                                </li>
                                                <li>
                                                    <label htmlFor="contact">
                                                        CONTACT
                                                    </label>
                                                    <input type="text" name='contact' placeholder='xxxxxxxxxx' />
                                                </li>
                                            </div>
                                            {/* <div className="items">
                                            <li style={{ display: "unset", textAlign: "left", width: "92%" }}>
                                                <label htmlFor="address">ADDRESS</label>
                                                <input type="text" name='address' placeholder='Address' />
                                            </li>
                                        </div> */}
                                        </div>
                                        <div className="card-items">
                                            <div className="items">
                                                <h3>Physical Appearance</h3>
                                            </div>
                                            <div className="items">
                                                <li>
                                                    <label htmlFor="gender">GENDER</label>
                                                    <div style={{ marginTop: "4px" }}>
                                                        <input type="radio" name="gender" value={"Male"} />
                                                        <span style={{ marginRight: "50px" }}>Male</span>
                                                        <input type="radio" name="gender" value={"Female"} />
                                                        <span>Female</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <label htmlFor="missing_name">
                                                        MISSING PERSON NAME
                                                    </label>
                                                    <input type="text" name="missing_name" placeholder='Full Name' />
                                                </li>
                                                <li>
                                                    <label htmlFor="clothes_color">COLOR OF CLOTHES</label>
                                                    <input type="text" name="clothes_color" placeholder='Color' />
                                                </li>
                                            </div>
                                            <div className="items">
                                                <li style={{ display: "unset", textAlign: "left", width: "92%" }}>
                                                    <label htmlFor="aadhar_no">AADHAR NO.</label>
                                                    <input type="text" name="aadhar_no" placeholder='xxxx-xxxx-xxxx' style={{ width: "98%" }} />
                                                </li>
                                            </div>
                                        </div>
                                        <div className="card-items">
                                            <div className="items">
                                                <h3>Height Characterstics</h3>
                                            </div>
                                            <div className="items">
                                                <li style={{ marginLeft: "40px" }}>
                                                    <label className="label-checkbox">
                                                        <input type="checkbox" name='heightCharacterstic' />
                                                        <span>SLIM</span>
                                                    </label>
                                                    <label className="label-checkbox">
                                                        <input type="checkbox" name='heightCharacterstic1' />
                                                        <span>GENETIC</span>
                                                    </label>
                                                </li>
                                            </div>
                                        </div>
                                        <div className="card-items">
                                            <div className="items">
                                                <h3>Body Characterstics</h3>
                                            </div>
                                            <div className="items">
                                                <li style={{ marginLeft: "40px" }}>
                                                    <label className="label-checkbox">
                                                        <input type="checkbox" name='bodyCharacterstic' />
                                                        <span>SLIM</span>
                                                    </label>
                                                    <label className="label-checkbox">
                                                        <input type="checkbox" name='bodyCharacterstic1' />
                                                        <span>FIT</span>
                                                    </label>
                                                </li>
                                            </div>
                                        </div>
                                        <div className="card-items">
                                            <div className="items">
                                                <h3>Complexion</h3>
                                            </div>
                                            <div className="items">
                                                <li style={{ marginLeft: "40px" }}>
                                                    <label className="label-checkbox">
                                                        <input type="checkbox" name='bodyCharacterstic' />
                                                        <span>PALE</span>
                                                    </label>
                                                    <label className="label-checkbox">
                                                        <input type="checkbox" name='bodyCharacterstic1' />
                                                        <span>FAIR</span>
                                                    </label>
                                                </li>
                                            </div>
                                        </div>
                                        <div className="card-items">
                                            <div className="items">
                                                <h3>HAIR Characterstics</h3>
                                            </div>
                                            <div className="items">
                                                <li style={{ marginLeft: "40px" }}>
                                                    <label className="label-checkbox">
                                                        <input type="checkbox" name='HAIRCharacterstic' />
                                                        <span>BLACK</span>
                                                    </label>
                                                    <label className="label-checkbox">
                                                        <input type="checkbox" name='HAIRCharacterstic1' />
                                                        <span>SMOOTH</span>
                                                    </label>
                                                    <label className="label-checkbox">
                                                        <input type="checkbox" name='HAIRCharacterstic2' />
                                                        <span>LONG</span>
                                                    </label>
                                                </li>
                                            </div>
                                        </div>
                                        <div className="card-items">
                                            <div className="items">
                                                <button type="submit" form='foundreport' className="custom-btn btn-16">Update Profile</button>
                                            </div>
                                        </div>
                                    </form>
                                ) : (
                                    <div style={{margin:"auto",fontSize:"50px"}} >
                                        Your form submit
                                        <p>
                                            {foundState?(<div style={{textAlign:"center"}} >Report Found</div>):(<>Not Found</>)}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FOUND;
