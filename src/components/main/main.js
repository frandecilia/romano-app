import "./main.css"
import '../footandheader/footer/footer.css'
import '../footandheader/header/header.css'
import Header from "../footandheader/header/header";
import Footer from "../footandheader/footer/footer";
/*Importo las imagenes que utilizo*/
import nosotros1 from "../../assets/img/nosotros1.jpg"
import nosotros2 from "../../assets/img/nosotros2.jpg"
import nosotros3 from "../../assets/img/nosotros3.jpg"


const Main= () => {
    return (
        <>
        <Header/>
        <main>
            <div className="welcomeContainer container">
            <div className="welcomeText">
                <p className="welcome">Bienvenido a</p>
                <h1>Romano Desings</h1>
                <p>
                    Amet similique dolorem porro quia vel Tempore incidunt fugiat consequuntur molestiae itaque velit numquam Eius qui eius eius vitae dicta consequatur a autem ullam? Delectus in neque voluptatibus dolorem modi.
                    Sit commodi eligendi quis voluptates quidem ipsam Iure temporibus quia quasi sapiente minus Asperiores doloremque recusandae rem animi nam! Earum expedita ducimus mollitia incidunt laboriosam eaque. Ut commodi placeat ullam.
                </p>
                <a href="views\contact.html" className="btn btnDark">Contactar</a>
            </div>
            <div className="welcomeImages">
                <div className="image1">
                    <img src={nosotros1} alt=""/>
                </div>
                <div className="images2">
                    <img src={nosotros2} alt=""/>
                    <img src={nosotros3} alt=""/>
                </div>
            </div>
        </div>
        </main>
        <Footer/>
        </>
    )
}

export default Main;