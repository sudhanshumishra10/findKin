import React from 'react'
import { Sidemenu } from '../../components/menu/Sidemenu';
import './main.css'

const Mreport = () => {

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
        const temp = ['aadhar_no', 'name', 'age', 'gender', 'contact', 'address', 'clothes_color', 'height', 'weight'];

        let hairColor = `${data.get('hair_color')},${data.get('hair_color1')},${data.get('hair_color2')}`
        let Complexion = `${data.get('complexion')},${data.get('complexion1')}`
        let bodycharacterstics = `${data.get('body_characterstics')},${data.get('body_characterstics1')}`
        let heightcharacterstics = `${data.get('height_characterstics')},${data.get('height_characterstics1')}`

        const file = data.get('image');
        const base64 = await imageData(file)
        const btest = base64.split(':')[1]
        console.log(btest)
        console.log(base64)

        for (let i = 0; i < temp.length; i++) {
            const element = temp[i];
            formdata[element] = data.get(`${element}`)
        }

        formdata["height_characterstics"] = heightcharacterstics
        formdata["body_characterstics"] = bodycharacterstics
        formdata["complexion"] = Complexion
        formdata["hair_color"] = hairColor
        formdata['image'] = base64

        const { aadhar_no, name, image, age, gender, contact, address, clothes_color, height, weight, body_characterstics, height_characterstics, complexion, hair_color } = formdata
        console.log(formdata)


        const res = await fetch('http://localhost:8000/people/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                aadhar_no,
                name,
                image,
                age,
                gender,
                contact,
                address,
                clothes_color,
                height,
                weight,
                body_characterstics,
                height_characterstics,
                complexion,
                hair_color
            })
        })

        console.log(await res.json())
    }

    return (
        <>
            <div className="container">
                <Sidemenu id={2} />
                <div className="right-cont">
                    <div className="nav">
                        <h1>Missing Report</h1>
                    </div>
                    <hr />
                    <div className="mainSection">
                        <div className="row">
                            <div className="cards" style={{ width: "100%", height: "auto" }}>
                                <form onSubmit={MissReport} id='missreport' >
                                    <div className="card-items">
                                        <div className="items">
                                            <h3>Missing Person Report</h3>
                                        </div>
                                        <div className="items" style={{ color: "#999", marginTop: "20px", paddingLeft: "50px" }}>
                                            <tr >
                                                <span>UPLOAD IMAGE</span>
                                                <input type="file" name="image" id="" style={{ margin: "0px 10px" }} />
                                            </tr>
                                        </div>
                                        <div className="items">
                                            <li>
                                                <label htmlFor="aadhar_no">AADHAR NO.</label>
                                                <input type="text" name="aadhar_no" placeholder='xxxx-xxxx-xxxx' />
                                            </li>
                                            <li>
                                                <label htmlFor="name">
                                                    FULL NAME
                                                </label>
                                                <input type="text" name="name" placeholder='Full Name' />
                                            </li>
                                            <li>
                                                <label htmlFor="age">
                                                    AGE
                                                </label>
                                                <input type="text" name="age" placeholder='AGE' />
                                            </li>
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
                                                <label htmlFor="contact">
                                                    CONTACT
                                                </label>
                                                <input type="text" name='contact' placeholder='xxxxxxxxxx' />
                                            </li>
                                        </div>
                                        <div className="items">
                                            <li style={{ display: "unset", textAlign: "left", width: "92%" }}>
                                                <label htmlFor="address">ADDRESS</label>
                                                <input type="text" name='address' placeholder='Address' />
                                            </li>
                                        </div>
                                    </div>
                                    <div className="card-items">
                                        <div className="items">
                                            <h3>Physical Appearance</h3>
                                        </div>
                                        <div className="items">
                                            <li>
                                                <label htmlFor="clothes_color">COLOR OF CLOTHES</label>
                                                <input type="text" name="clothes_color" placeholder='Color' />
                                            </li>
                                            <li>
                                                <label htmlFor="height">
                                                    HEIGHT
                                                </label>
                                                <input type="text" name="height" placeholder='Height' />
                                            </li>
                                            <li>
                                                <label htmlFor="weight">
                                                    WEIGHT
                                                </label>
                                                <input type="text" name="weight" placeholder='Weight' />
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
                                                    <input type="checkbox" name='height_characterstics' value='slim' />
                                                    <span>SLIM</span>
                                                </label>
                                                <label className="label-checkbox">
                                                    <input type="checkbox" name='height_characterstics1' value='genetic' />
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
                                                    <input type="checkbox" name='body_characterstics' value='slim' />
                                                    <span>SLIM</span>
                                                </label>
                                                <label className="label-checkbox">
                                                    <input type="checkbox" name='body_characterstics1' value='fit' />
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
                                                    <input type="checkbox" name='complexion' value='pale' />
                                                    <span>PALE</span>
                                                </label>
                                                <label className="label-checkbox">
                                                    <input type="checkbox" name='complexion1' value='fair' />
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
                                                    <input type="checkbox" name='hair_color' value='black' />
                                                    <span>BLACK</span>
                                                </label>
                                                <label className="label-checkbox">
                                                    <input type="checkbox" name='hair_color1' value='smooth' />
                                                    <span>SMOOTH</span>
                                                </label>
                                                <label className="label-checkbox">
                                                    <input type="checkbox" name='hair_color2' value='long' />
                                                    <span>LONG</span>
                                                </label>
                                            </li>
                                        </div>
                                    </div>
                                    <div className="card-items">
                                        <div className="items">
                                            <button type="submit" form='missreport' className="custom-btn btn-16">Update Profile</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mreport;
