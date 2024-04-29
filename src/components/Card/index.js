import { Card_content, Card_face_Back, Card_face_Front, Card_game } from './styled';

function Card({ flipped = false, back, handleClick, id }) {

    const handleClickFn = (id) => {
        if(handleClick){
            handleClick(id)
        }
    }

    return(
        <Card_game onClick={() => handleClickFn(id)}>
            <Card_content className={flipped ? 'Card_content_flipped' : ''}>
                <Card_face_Front>?</Card_face_Front>
                <Card_face_Back>{back}</Card_face_Back>
            </Card_content>
        </Card_game>
    )
}

export default Card;