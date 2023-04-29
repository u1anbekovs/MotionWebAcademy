import React, {useState} from 'react';
import "./Gallery.scss"
import gallery1 from "./../../../img/gallery1.svg"
import gallery2 from "./../../../img/gallery2.svg"
import gallery3 from "./../../../img/gallery3.svg"
import gallery4 from "./../../../img/gallery4.svg"
import temir from "./../../../img/temir.svg"


const Gallery = () => {

    const [gallery, setGallery] = useState(false)

    return (
        <section id="gallery">
            <div className="container">
                <div className="gallery">
                    <h2>Галерея</h2>
                    <img src={gallery1} alt=""/>
                    <img src={gallery2} alt=""/>
                    <img src={gallery3} alt=""/>
                    <img src={gallery4} alt=""/>
                    {
                        gallery ? <img src={gallery1} alt=""/> : ""
                    }
                    {
                        gallery ? <img src={gallery2} alt=""/> : ""
                    }
                    {
                        gallery ? <img src={gallery3} alt=""/> : ""
                    }
                    {
                        gallery ? <img src={gallery4} alt=""/> : ""
                    }

                    <p onClick={() => setGallery(!gallery)}>{gallery ? "Повернуть" : "Показать ещё"}</p>
                </div>
            </div>
            <img className="temir" src={temir} alt=""/>
        </section>
    );
};

export default Gallery;