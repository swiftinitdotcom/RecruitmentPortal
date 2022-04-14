import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'RecruitmentPortalWebPartStrings';
import RecruitmentPortal from './components/RecruitmentPortal';
import { IRecruitmentPortalProps } from './components/IRecruitmentPortalProps';
import { SPComponentLoader } from '@microsoft/sp-loader';

SPComponentLoader.loadCss('https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css');
SPComponentLoader.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js');


export interface IRecruitmentPortalWebPartProps {
  description: string;
  listname: string;
  merge:string;
  heading:string;
  headingvalue:string;
}

export default class RecruitmentPortalWebPart extends BaseClientSideWebPart<IRecruitmentPortalWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRecruitmentPortalProps > = React.createElement(
      RecruitmentPortal,
      {
        description: this.properties.description,
        context: this.context,
        listname: this.properties.listname,
        merge: this.properties.merge,
        heading: this.properties.heading,
        headingvalue:this.properties.headingvalue,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
              groupName: 'Page Select',
             groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Enter Page Number (1 or 2)'
                }),
                PropertyPaneTextField('listname', {
                  label: 'List Name'
                }),
                PropertyPaneTextField('merge', {
                  label: 'Merge (Yes or No)',
                  description: 'Need to change the image accordingly.'
                }),
                PropertyPaneTextField('heading', {
                  label: 'Heading(Text or Logo)',
                  description: 'Enter Text or Logo'
                }),
                PropertyPaneTextField('headingvalue', {
                  label: 'Heading Value',
                  description: 'Provide Img Url or Text to display in heading.'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
