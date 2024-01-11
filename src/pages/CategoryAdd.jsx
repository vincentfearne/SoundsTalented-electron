import {useEffect, useState} from "react";


export default function CategoryAdd() {

    const [catCat, setCatCat] = useState("")
    const [catNom, setCatNom] = useState("")
    const [catPhoto, setCatPhoto] = useState("")
    const [catDescription, setCatDescription] = useState("")


    const handleChangeCatCat = (event) => {
        setCatCat(event.target.value)
    }
    const handleChangeCatNom = (event) => {
        setCatNom(event.target.value)
    }
    const handleChangeCatPhoto = (event) => {
        setCatPhoto(event.target.value)
    }
    const handleChangeCatDescription = (event) => {
        setCatDescription(event.target.value)
    }



    const handleClick = () => {
        fetch("http://127.0.0.1:8000/api/categories", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cat : "/api/categories/" + catCat, catNom: catNom, catPhoto: catPhoto, catDescription: catDescription})
        })
            .then((reponse)=>{ console.log(reponse) })
    }


    const [list, setList] = useState([])
    const [listCat, setListCat] = useState([])


    useEffect(()=> {
        fetch("http://127.0.0.1:8000/api/categories", {
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

    }, [])



    return (
        <div className="global centered">


            <div className="centered mt20">
                <br />
                <h1 className="centered mb20">Add a Category</h1>
                <label htmlFor="cat-name" className="title">Name :</label>
                <br/>
                <input type="text" name="cat-name" id="cat-name" className="smallBox" value={catNom} onChange={handleChangeCatNom}/>
                <br />
                <label htmlFor="cat-category" className="title">Category :</label>
                <br/>
                <select name="cat-category" id="cat-category" className="dropdown1" value={catCat} onChange={handleChangeCatCat}>
                    {
                        listCat.map((categorie) => (
                            <option key={categorie.id} className="centered bordered" value={categorie.id}>
                                {categorie.catNom}
                            </option>
                        ))
                    }
                </select>
                <br/>
                <label htmlFor="cat-description" className="title">Description :</label><br />
                <textarea name="cat-description" id="cat-description" cols="15" rows="5" className="box" value={catDescription} onChange={handleChangeCatDescription}/>
                <br /><br />


                <label htmlFor="catPic" className="title custom-file-upload">Insert picture</label><br />
                <input type="file" name="catPic" id="catPic" value={catPhoto} onChange={handleChangeCatPhoto}/><br /><br />


                <button onClick={handleClick} className="button">ADD CATEGORY</button>
                {/*</form>*/}
            </div>


        </div>
    )
}