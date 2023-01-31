import AllH from '../footandheader/all-h/h'
import AllF from '../footandheader/all-f/f'
import './about.css'
import Oheader from '../oheader/oheader'

import nosotros1 from "../../assets/img/nosotros1.jpg"
import nosotros2 from "../../assets/img/nosotros2.jpg"
import nosotros3 from "../../assets/img/nosotros3.jpg"

const About= () => {
    return(
        <>
        <Oheader/>
        <main>
            <div className="welcomeContainer container">
                <div className="welcomeText">
                    <p className="welcome">Bienvenido a</p>
                    <h1>Romano Desings</h1>
                    <p>
                        Amet similique dolorem porro quia vel Tempore incidunt fugiat consequuntur molestiae itaque velit numquam Eius qui eius eius vitae dicta consequatur a autem ullam? Delectus in neque voluptatibus dolorem modi.
                        Sit commodi eligendi quis voluptates quidem ipsam Iure temporibus quia quasi sapiente minus Asperiores doloremque recusandae rem animi nam! Earum expedita ducimus mollitia incidunt laboriosam eaque. Ut commodi placeat ullam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae aperiam doloremque voluptas soluta quisquam dicta, est laudantium laboriosam necessitatibus eius, perferendis eveniet quod. Repellat voluptatibus inventore error quia voluptate aliquid.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores velit recusandae consectetur voluptates libero magni suscipit, aliquam rem natus minus maxime ullam culpa optio ut saepe aut omnis ducimus expedita!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, nemo corporis, rem repudiandae placeat blanditiis ea nobis debitis molestias quo deleniti quasi sed veniam quisquam tempora, rerum consectetur cumque nihil.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod optio eaque minus, rerum cumque laborum? Obcaecati aliquam sed voluptatem eligendi illum nostrum, quasi eum! Quibusdam quo quos sequi sint aliquid?                       
                    </p>
                    <a href="contact.html" className="btn btnDark">Contactar</a>
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
            <div className="welcomeContainer container">
                <div className="welcomeText">
                    <p className="welcome">¿Quienes somos?</p>
                    <h2>Nombre Genérico 1</h2>
                    <p>
                        Amet similique dolorem porro quia vel Tempore incidunt fugiat consequuntur molestiae itaque velit numquam Eius qui eius eius vitae dicta consequatur a autem ullam? Delectus in neque voluptatibus dolorem modi.
                        Sit commodi eligendi quis voluptates quidem ipsam Iure temporibus quia quasi sapiente minus Asperiores doloremque recusandae rem animi nam! Earum expedita ducimus mollitia incidunt laboriosam eaque. Ut commodi placeat ullam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae aperiam doloremque voluptas soluta quisquam dicta, est laudantium laboriosam necessitatibus eius, perferendis eveniet quod. Repellat voluptatibus inventore error quia voluptate aliquid.
                        </p>
                        </div>
                <div className="welcomeImages">
                    <div className="image1 firstCard">
                        <img src={nosotros1} alt=""/>
                    </div>
                    <div className="images2 firstCard">
                        <img src={nosotros2} alt=""/>
                    </div>
                </div>
            </div>
            <div className="welcomeContainer container">
                <div className="welcomeText">
                    <h2>Nombre Genérico 2</h2>
                    <p>
                        Amet similique dolorem porro quia vel Tempore incidunt fugiat consequuntur molestiae itaque velit numquam Eius qui eius eius vitae dicta consequatur a autem ullam? Delectus in neque voluptatibus dolorem modi.
                        Sit commodi eligendi quis voluptates quidem ipsam Iure temporibus quia quasi sapiente minus Asperiores doloremque recusandae rem animi nam! Earum expedita ducimus mollitia incidunt laboriosam eaque. Ut commodi placeat ullam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae aperiam doloremque voluptas soluta quisquam dicta, est laudantium laboriosam necessitatibus eius, perferendis eveniet quod. Repellat voluptatibus inventore error quia voluptate aliquid.
                        </p>
                        </div>
                <div className="welcomeImages">
                    <div className="image1 employeeCard">
                        <img src={nosotros1} alt=""/>
                    </div>
                    <div className="images2 employeeCard">
                        <img src={nosotros2} alt=""/>
                    </div>
                </div>
            </div>
            <div className="welcomeContainer container">
                <div className="welcomeText">
                    <h2>Nombre Genérico 3</h2>
                    <p>
                        Amet similique dolorem porro quia vel Tempore incidunt fugiat consequuntur molestiae itaque velit numquam Eius qui eius eius vitae dicta consequatur a autem ullam? Delectus in neque voluptatibus dolorem modi.
                        Sit commodi eligendi quis voluptates quidem ipsam Iure temporibus quia quasi sapiente minus Asperiores doloremque recusandae rem animi nam! Earum expedita ducimus mollitia incidunt laboriosam eaque. Ut commodi placeat ullam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae aperiam doloremque voluptas soluta quisquam dicta, est laudantium laboriosam necessitatibus eius, perferendis eveniet quod. Repellat voluptatibus inventore error quia voluptate aliquid.
                        </p>
                        </div>
                <div className="welcomeImages">
                    <div className="image1 employeeCard">
                        <img src={nosotros1} alt=""/>
                    </div>
                    <div className="images2 employeeCard">
                        <img src={nosotros2} alt=""/>
                    </div>
                </div>
            </div>
        </main>
        <AllF/>


        </>
    )
}

export default About;