import photo from '../assets/image/pri_foto.png'
import github from '../assets/image/github.png'
import linkedin from '../assets/image/linkedin.png'

export function Footer() {
    return (
        <div className="image_footer">

            <div>
                <img src={photo} alt="Foto Autora" className="photo_author" />
            </div>

            <div>
                <p> &copy; Copyright Autora Projeto: Priscila Regina da Silva</p>
                <p>Projeto Final</p>
                <p>Desenvolvedora Front-End</p>
                <p>Reprograma</p>
                <a href="https://github.com/priscilaregsilva" target="_blank">
                    <img src={github} alt="Foto GitHub" className="social_network" /> 
                </a>
                <a href="http://www.linkedin.com/in/priscila-reginasilva" target="_blank">
                    <img src={linkedin} alt="Foto Linkedin" className="social_network" />
                </a>
            </div>
        </div>
    )
}