import React from 'react';
import ReactDOM from 'react-dom/client';
import  UseEffectinreact from './UseEffectinreact'
import UseStateExample3Hai from './UseStateExample3'
import SimplrProjectinHook from './SimplrProjectinHook'
import UseStateInHook from './UseStateInHook'
import Car from './ChangeStateObject'
import Papa from './propsinreact/Papa'
import ClassComponent from './ClassComponent';
import ConstuctorUsingClass from './classwithconstuctor';
import Helloworld from './Helloworld';
import UseEffectex2 from './UseEffectex2'
import UseStateUseEffect from './UseState&UseEffect'
import MeraMessageContext from './MeraUseContext/MeraMessageContext';
import PassingPropsFunction from './propsinreact/PassingPropsFunction'
import ComponentDidMount from './LifeCycleMethod/ComponentDidMount'
import ComponentDidUodate from './LifeCycleMethod/ComponentDidUodate'
//import ShouldComponentUpdateKro from './ShouldComponentUpdateKro'
import CssInReact from './cssinreact/CssInReact'
import ArrayMap from './PropsInmap/ArrayMap'
import UseMemoHook from './UseMemoHook'
//import UseMemoHookEx2 from './UseMemoHookEx2'
import UseRefhook from './UseRefhook'
import ControlledComponent from './ControlledComponent'
import UncontrolledComponent from './UncontrolledComponent'
import IndexRouter from './ReactRouter/IndexRouter'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <div>
  {/*<IndexRouter/>*/}
   <UncontrolledComponent/>
   <ControlledComponent/>
   <UseRefhook/>
    {/*<UseMemoHookEx2/>*/}
    <UseMemoHook/>
   
   <ArrayMap/>
   <CssInReact/>
  {/*<ShouldComponentUpdateKro/>*/}
  <ComponentDidUodate/>
   <ComponentDidMount/>
   <PassingPropsFunction/>
  <UseStateUseEffect/>
   <MeraMessageContext/>
  <UseEffectex2/>
  < UseEffectinreact/> 
   <UseStateExample3Hai/>
   <SimplrProjectinHook/>
   <UseStateInHook/>
   <Car/>
    <Papa/>
    <ClassComponent/>
    <ConstuctorUsingClass/>
    <Helloworld/>

 </div>
 </>
);


