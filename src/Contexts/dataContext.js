import { createContext, useContext } from 'react';

const dataContext = createContext();
export const useData = () => useContext(dataContext);

export const DataProvider = ({ children }) => {
  const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description:
      'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
      {
        id: 0,
        styleName: 'Black Strap',
        imageUrl: 'https://imgur.com/iOeUBV7.png',
      },
      {
        id: 1,
        styleName: 'Red Strap',
        imageUrl: 'https://imgur.com/PTgQlim.png',
      },
      {
        id: 2,
        styleName: 'Blue Strap',
        imageUrl: 'https://imgur.com/Mplj1YR.png',
      },
      {
        id: 3,
        styleName: 'Purple Strap',
        imageUrl: 'https://imgur.com/xSIK4M8.png',
      },
    ],
    featureList: [
      { id: 0, styleName: 'Time' },
      { id: 1, styleName: 'Heart Rate' },
    ],
  };

  return (
    <dataContext.Provider value={ProductData}>{children}</dataContext.Provider>
  );
};
