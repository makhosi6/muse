import React from "react";
import { createContext } from "react"

const state = {
    // articles: [],
    trends: [],
    types: [
       { 'politics':[

        ]}
    ]

}
console.log(import.meta.env);

const MyContext = createContext([]);

export default MyContext;