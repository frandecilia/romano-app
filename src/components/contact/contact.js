
import AllF from '../footandheader/all-f/f'
import './contact.css'
import Oheader from '../oheader/oheader'

const Contact= () => {
    return(
        <>
        <Oheader/>
        <form id="contactUs" method="post" action="#">

                
                <input type="text" name="name" id="name" required="required" className="form" placeholder="Nombre" />

                <input type="email" name="mail" id="mail" required="required" className="form" placeholder="Email" />

                <input type="text" name="subject" id="subject" required="required" className="form" placeholder="Asunto" />

                <textarea name="message" id="message" className="form textArea"  placeholder="Mensaje"></textarea>
                <button type="submit" id="submit" name="submit" className="formBtn semibold">Enviar</button>
        </form>

        <AllF/>
        
        
        </>
    )
}

export default Contact;