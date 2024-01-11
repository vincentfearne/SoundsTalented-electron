import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function ProductDetail() {

    const {id} = useParams();
    const [detail, setDetail] = useState([])

    const [listCat, setListCat] = useState([])
    const [listFou, setListFou] = useState([])


    useEffect(()=> {

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

        fetch(`http://127.0.0.1:8000/api/produits/${id}`, {
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            }
        })
            .then((response)=>{ return response.json() })
            .then((data)=> {
                setDetail(data)
            })
    }, [])



    return (


        <div className="global centered">


            <div className="centered mt20">
                <br/>
                <h1 className="centered mb20">Update a product</h1>
                <label htmlFor="product-name" className="title">Name :</label>
                <br/>
                <input type="text" name="product-name" id="product-name" className="smallBox" defaultValue={detail.proLibelle}/>
                <br/>
                <label htmlFor="product-price" className="title">Price :</label>
                <br/>
                <input type="text" name="product-price" id="product-price" className="smallBox" defaultValue={detail.proPrix}/>
                <br/>
                <label htmlFor="product-reference" className="title">Reference :</label>
                <br/>
                <input type="text" name="product-reference" id="product-reference" className="smallBox" defaultValue={detail.proRef}/>
                <br/>
                <label htmlFor="product-category" className="title">Category :</label>
                <br/>
                <select name="product-category" id="product-category" className="dropdown1">
                    <option className="centered bordered">{detail.cat}</option>
                    {
                        listCat.map((categorie) => (
                            <option key={categorie.id} className="centered bordered" value={categorie.id}>
                                {categorie.catNom}
                            </option>
                        ))
                    }
                </select>
                <br/>
                <label htmlFor="product-supplier" className="title">Supplier :</label>
                <br/>
                <select name="product-supplier" id="product-supplier" className="dropdown1">
                    <option value="" className="centered bordered">{detail.fou}</option>
                    {
                        listFou.map((fournisseur) => (
                            <option key={fournisseur.id} className="centered bordered" value={fournisseur.id}>
                                {fournisseur.fouNom}
                            </option>
                        ))
                    }
                </select>
                <br/>
                <label htmlFor="product-description" className="title">Description :</label><br/>
                <textarea name="product-description" id="product-description" cols="15" rows="5" className="box" defaultValue={detail.proDescription}/>
                <br/><br/>


                <label htmlFor="catPic" className="title custom-file-upload">Insert picture</label><br/>
                <input type="file" name="catPic" id="catPic"/><br/><br/>


                <button className="button">UPDATE</button>
                {/*</form>*/}
            </div>


        </div>

//--------------------------------------------------------------------------------------------
        // <div>
        //     {detail.proLibelle}
        //    {detail.proPrix}
        // </div>

    )

}

export default ProductDetail;