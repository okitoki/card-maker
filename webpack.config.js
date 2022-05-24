import { Module } from "webpack";
const path = require('path');
Module.export ={
resolve: 
    { alias: 
        {
            components: path.resolve(__dirname, 'src/components/'),
            css: path.resolve(__dirname, 'src/css/'),
            commonjs:path.resolve(__dirname, 'src/commonjs/')
        
        },

    } 

}