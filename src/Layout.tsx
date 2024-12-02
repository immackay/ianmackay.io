import { createContext, PropsWithChildren, useContext } from 'react';
import { Font } from 'react-google-font-loader';
import { Property } from 'csstype';

export interface LayoutConfig {
  fonts: Array<Font>;

  titleFontFamily: Property.FontFamily;
  titleFontWeight: Property.FontWeight;
  titleFontSize: Property.FontSize;

  contactFontFamily: Property.FontFamily;
  contactFontWeight: Property.FontWeight;
  contactFontSize: Property.FontSize;

  sectionTitleFontFamily: Property.FontFamily;
  sectionTitleFontWeight: Property.FontWeight;
  sectionTitleFontSize: Property.FontSize;

  entryTitleFontFamily: Property.FontFamily;
  entryTitleFontWeight: Property.FontWeight;
  entryTitleFontSize: Property.FontSize;

  subTitleFontFamily: Property.FontFamily;
  subTitleFontWeight: Property.FontWeight;
  subTitleFontSize: Property.FontSize;

  bodyFontFamily: Property.FontFamily;
  bodyFontWeight: Property.FontWeight;
  bodyFontSize: Property.FontSize;

  linkColor: Property.Color;
}
export const layout: LayoutConfig = {
  fonts: [
    { font: 'Open Sans', weights: [300, 400, 500, 600, 700] },
    { font: 'Lora', weights: [300, 400, 500, 600, 700] },
  ],

  titleFontFamily: 'Open Sans',
  titleFontWeight: 700,
  titleFontSize: '36px',

  contactFontFamily: 'Open Sans',
  contactFontWeight: 300,
  contactFontSize: '11px',

  sectionTitleFontFamily: 'Open Sans',
  sectionTitleFontWeight: 700,
  sectionTitleFontSize: '15px',

  entryTitleFontFamily: 'Lora',
  entryTitleFontWeight: 600,
  entryTitleFontSize: '11px',

  subTitleFontFamily: 'Lora',
  subTitleFontWeight: 500,
  subTitleFontSize: '10px',

  bodyFontFamily: 'Lora',
  bodyFontWeight: 'normal',
  bodyFontSize: '10px',

  linkColor: '#6c54c4',
};

const LayoutContext = createContext<LayoutConfig>(layout);
export const LayoutProvider = ({ children }: PropsWithChildren<{}>) => (
  <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>
);
export const useLayout = () => useContext(LayoutContext);
