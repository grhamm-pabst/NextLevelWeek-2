import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {

    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1277078839940825088/P29jVCDV_400x400.jpg" alt="Adriel Villas"/>
                        <div>
                            <strong>Adriel Villas</strong>
                            <span>Pixel Art</span>
                        </div>
                    </header>

                    <p>
                        Artista brabissimo.
                    </p>

                    <footer>
                        <p>
                            Preço p/Hora
                            <strong>R$ 20,00</strong>
                        </p>

                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp contato"/>
                            Entrar em Contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;