import "./App.css";
import React from "react";

import Card from "./compontents/Layout/Card";

import Teste from "./compontents/teste/Teste";
import Mega from "./compontents/mega/Mega";
import Contador from "./compontents/contador/Contador";
import Input from "./compontents/formulario/Input";
import IndiretaPai from "./compontents/comunicação/IndiretaPai";
import DiretaPai from "./compontents/comunicação/DiretaPai";
import UsuarioInfo from "./compontents/condicional/UsuarioInfo";
import ParOuImpar from "./compontents/condicional/ParOuImpar";
import TabelaProduto from "./compontents/repiticao/TabelaProduto";
import ListaAluno from "./compontents/repiticao/ListaAluno";
import Familia from "./compontents/basicos/Familia";
import FamiliaMembro from "./compontents/basicos/FamiliaMembro";
import Aleatorio from "./compontents/basicos/Aleatorio";
import Primeiro from './compontents/basicos/Primeiro'
import ComParametro from './compontents/basicos/ComParametro'
import Fragmento from './compontents/basicos/Fragmento'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
    
                <Card titulo="#12 - Mega" color="#3A9AD9">
                    <Mega qtde={8}/>
                </Card>
                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial={10}></Contador>
                </Card>
                <Card titulo="#11 - Componente Controlado" color="#E45F56">
                    <Input />
                </Card>
                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>
                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai />
                </Card>
                <Card titulo="#08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Luan' }} />
                </Card>
                <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                    <TabelaProduto></TabelaProduto>
                </Card>
                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAluno />
                </Card>
                <Card titulo="#05 - Componente Com Filhos" color="#00C8F8">
                    <Familia sobrenome="Bandeira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Lucas" />
                        <FamiliaMembro nome="Ana" />
                    </Familia>
                </Card>
                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={10} />
                </Card>
                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="#02 - Com parametro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro"
                        nota="9.3"
                    />
                </Card>
                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>

            </div>
        </div>
    );
}
/* export default () => (
        <div id ="app">
            <h1>Fundamentos React</h1>
            <Primeiro></Primeiro> 
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro"   
                nota="9.3"/>
            <Fragmento/>    
        </div>
);
*/