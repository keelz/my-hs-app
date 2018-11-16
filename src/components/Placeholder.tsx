import * as React from 'react';

interface PlaceholderProps {
  text: string;
}

const Placeholder: React.SFC<PlaceholderProps> = props =>
  <div>{props.text}</div>;

export default Placeholder;
