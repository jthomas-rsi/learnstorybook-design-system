import React from "react";

import { GlobalStyle } from "../src/shared/global";

// define global decorator to be used in all apps 
export const decorators = [
  Story => (
    <>                      
      <GlobalStyle/>         
        <Story/>            
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}