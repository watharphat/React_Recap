import "../styles/Gallery.css"
function Gallery(){
    return(
        <div className="Gallery">
        <section>
        <h2>
            Gallery
        </h2>
        <ul>
            <li>
            <img width={200} src="././public/assets/pic.jpg" />
            </li>
            <li>
            <img width={200} src="././public/assets/pic.jpg" />
            </li>
            <li>
            <img width={200} src="././public/assets/pic.jpg" />
            </li>
        </ul>
        
        </section>
        </div>
    )
}
export default Gallery;