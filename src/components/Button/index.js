import { Button } from './styled';

function PrimaryButton(props) {

  return (
    <Button className={props.Class} onClick={props.onClick}>
        {props.text}
    </Button>
  );
}

export default PrimaryButton;