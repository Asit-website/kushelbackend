import { createContext } from "react";

export const globalState = createContext();

export const dataProvider = ({children}) =>{
   console.log(children);
}
