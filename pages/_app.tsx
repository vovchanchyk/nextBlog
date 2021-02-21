import {AppProps} from 'next/app';
import React from 'react';
import {Provider} from 'react-redux';
import {createWrapper,MakeStore} from 'next-redux-wrapper';
import store from '../store/store';
import { RootState } from '../store/redusers';
import  '../styles/globals.css'


function MyApp(props:AppProps) {
  console.log(props)
      const { Component , pageProps }= props
    return(
      <Provider store={store} >
       <Component {...pageProps} ></Component>
       </Provider>
    )
}


const makeStore:MakeStore<RootState> = ()=>store;
const wrapper = createWrapper<RootState> (makeStore);
export default wrapper.withRedux(MyApp)








