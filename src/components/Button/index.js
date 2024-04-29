import { Button } from './styled';

function PrimaryButton(props) {

  return (
    <Button onClick={props.onClick}>
        {props.text}
    </Button>
  );
}

export default PrimaryButton;