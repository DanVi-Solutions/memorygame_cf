import { Input } from './styled';

function TextInput(props) {

  return (
    <Input type={props.tipo} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
  );
}

export default TextInput;