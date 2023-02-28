import imagem from '../assets/img2.jpg'

const Images = () => {
    return(
        <div>
            <img src="/img1.jpeg" />
            <img src={imagem}/>
        </div>
    )
}

export default Images