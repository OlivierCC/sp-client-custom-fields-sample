import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'customFieldsSampleStrings';
import CustomFieldsSample from './components/CustomFieldsSample';
import { ICustomFieldsSampleProps } from './components/ICustomFieldsSampleProps';
import { ICustomFieldsSampleWebPartProps } from './ICustomFieldsSampleWebPartProps';
//Import the custom fields
import { PropertyFieldColorPickerMini } from 'sp-client-custom-fields/lib/PropertyFieldColorPickerMini';
import { PropertyFieldFontPicker } from 'sp-client-custom-fields/lib/PropertyFieldFontPicker';
import { PropertyFieldFontSizePicker } from 'sp-client-custom-fields/lib/PropertyFieldFontSizePicker';

export default class CustomFieldsSampleWebPart extends BaseClientSideWebPart<ICustomFieldsSampleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICustomFieldsSampleProps > = React.createElement(
      CustomFieldsSample,
      {
        text: this.properties.text,
        color: this.properties.color,
        font: this.properties.font,
        fontSize: this.properties.fontSize
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('text', {
                  label: "Select a text"
                }),
                PropertyFieldColorPickerMini('color', {
                  label: 'Select a bg color',
                  initialColor: this.properties.color,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId'
                }),
                PropertyFieldFontPicker('font', {
                  label: 'Select a font',
                  initialValue: this.properties.font,
                  useSafeFont: true,
                  previewFonts: true,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'fontFieldId'
                }),
                PropertyFieldFontSizePicker('fontSize', {
                  label: 'Select a font size',
                  initialValue: this.properties.fontSize,
                  usePixels: true,
                  preview: true,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'fontSizeFieldId'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
