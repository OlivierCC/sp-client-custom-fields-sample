import * as React from 'react';
import { ICustomFieldsSampleProps } from './ICustomFieldsSampleProps';

export default class CustomFieldsSample extends React.Component<ICustomFieldsSampleProps, void> {
  public render(): React.ReactElement<ICustomFieldsSampleProps> {
    return (
      <div style={{
          backgroundColor: this.props.color, 
          fontFamily: this.props.font, 
          fontSize: this.props.fontSize}}>
        Your text: {this.props.text}
      </div>
    );
  }
}
