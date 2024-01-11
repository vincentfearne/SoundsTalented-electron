import {useEffect, useState} from "react";

export default function ProductAdd() {

    const [proName, setProName] = useState("")
    const [proPrice, setProPrice] = useState("")
    const [proRef, setProRef] = useState("")
    const [proCat, setProCat] = useState("")
    const [proSup, setProSup] = useState("")
    const [proDescription, setProDescription] = useState("")
    const [proPicture, setProPicture] = useState("")

    const handleChangeProName = (event) => {
        setProName(event.target.value)
    }
    const handleChangeProPrice = (event) => {
        setProPrice(event.target.value)
    }
    const handleChangeProRef = (event) => {
        setProRef(event.target.value)
    }
    const handleChangeProCat = (event) => {
        setProCat(event.target.value)
    }
    const handleChangeProSup = (event) => {
        setProSup(event.target.value)
    }
    const handleChangeProDescription = (event) => {
        setProDescription(event.target.value)
    }
    const handleChangeProPicture = (event) => {
        setProPicture(event.target.value)
    }



    const handleClick = () => {
        fetch("http://127.0.0.1:8000/api/produits", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cat : "/api/categories/" + proCat, proLibelle: proName, proPrix: parseFloat(proPrice), proRef :proRef, fou: "/api/fournisseurs/" + proSup, proDescription: proDescription, proPhoto: proPicture})
        })
            .then((reponse)=>{ console.log(reponse) })
    }


    const [list, setList] = useState([])
    const [listCat, setListCat] = useState([])
    const [listFou, setListFou] = useState([])

    useEffect(()=> {
        fetch("http://127.0.0.1:8000/api/produits", {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            }
        })
            .then((response)=>{ return response.json() })
            .then((data)=> {
                setList(data)
            })

        fetch("http://127.0.0.1:8000/api/fournisseurs", {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            }
        })
            .then((response)=>{ return response.json() })
            .then((data)=> {
                setListFou(data)
            })

        fetch("http://127.0.0.1:8000/api/categories", {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            }
        })
            .then((response)=>{ return response.json() })
            .then((data)=> {
                setListCat(data)
            })
    }, [])



    return (
        <div className="global centered">


                <div className="centered mt20">
                    <br />
                    <h1 className="centered mb20">Add a product</h1>
                    {/*<form className="centered">*/}
                        <label htmlFor="techno-name" className="title">Name :</label>
                        <br/>
                        <input type="text" name="techno-name" id="techno-name" className="smallBox" value={proName} onChange={handleChangeProName}/>
                        <br />
                        <label htmlFor="techno-price" className="title">Price :</label>
                        <br/>
                        <input type="text" name="techno-price" id="techno-price" className="smallBox" value={proPrice} onChange={handleChangeProPrice}/>
                        <br />
                        <label htmlFor="techno-reference" className="title">Reference :</label>
                        <br/>
                        <input type="text" name="techno-reference" id="techno-reference" className="smallBox" value={proRef} onChange={handleChangeProRef}/>
                        <br />
                        <label htmlFor="techno-category" className="title">Category :</label>
                        <br/>
                        <select name="techno-category" id="techno-category" className="dropdown1" value={proCat} onChange={handleChangeProCat}>
                            {
                                listCat.map((categorie) => (
                                    <option key={categorie.id} className="centered bordered" value={categorie.id}>
                                        {categorie.catNom}
                                    </option>
                                ))
                            }
                        </select>
                        <br />
                        <label htmlFor="techno-supplier" className="title">Supplier :</label>
                        <br/>
                        <select name="techno-supplier" id="techno-supplier" className="dropdown1" value={proSup} onChange={handleChangeProSup}>
                            <option value="" className="centered bordered">Select a supplier</option>
                            {
                                listFou.map((fournisseur) => (
                                    <option key={fournisseur.id} className="centered bordered" value={fournisseur.id}>
                                        {fournisseur.fouNom}
                                    </option>
                                ))
                            }
                        </select>
                        <br/>
                        <label htmlFor="techno-description" className="title">Description :</label><br />
                        <textarea name="techno-description" id="techno-description" cols="15" rows="5" className="box" value={proDescription} onChange={handleChangeProDescription}/>
                        <br /><br />


                        <label htmlFor="catPic" className="title custom-file-upload">Insert picture</label><br />
                        <input type="file" name="catPic" id="catPic" value={proPicture} onChange={handleChangeProPicture}/><br /><br />


                        <button onClick={handleClick} className="button">ADD PRODUCT</button>
                    {/*</form>*/}
                </div>


        </div>
    )
}