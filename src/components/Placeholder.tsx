import * as React from 'react';

// implementation props.
interface IPlaceholderProps {
  text: string;
}

const Placeholder: React.SFC<IPlaceholderProps> = props =>
  <div>{props.text}</div>;

export default Placeholder;
