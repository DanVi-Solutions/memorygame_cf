import { Button } from './styled';

function PrimaryButton(props) {

  return (
    <Button>
        {props.text}
    </Button>
  );
}

export default PrimaryButton;