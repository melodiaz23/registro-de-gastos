"use strict";
// import React, { useState } from 'react';
class Form {
    constructor() {
        this.formulario = document.querySelector('form');
        this.nombreGastoInput = document.getElementById('nombre-gasto');
        this.valorInput = document.getElementById('valor');
        this.fechaInput = document.getElementById('fecha');
        this.categoriaInput = document.getElementById('categoria');
        this.button = document.querySelector('.button');
        this.listaDeGastos = [];
        this.buttonHandler();
        console.log(this.listaDeGastos);
    }
    info(gasto, valor, fecha, categoria) {
        const gastoDetallado = {
            nombreGasto: gasto,
            valor: valor,
            fecha: fecha,
            categoria: categoria,
        };
        if (gastoDetallado.nombreGasto === '' && gastoDetallado.valor === 0) {
            return;
        }
        this.listaDeGastos.push(gastoDetallado);
        console.log(this.listaDeGastos);
    }
    adicionGasto(event) {
        event.preventDefault();
        this.info(this.nombreGastoInput.value, +this.valorInput.value, this.fechaInput.value, this.categoriaInput.value);
    }
    buttonHandler() {
        this.button.addEventListener('click', this.adicionGasto.bind(this));
    }
}
class RenderElements {
    constructor() {
        this.DOMList();
    }
    DOMList() {
        const listaGastosTemplate = document.getElementById('lista-gastos');
        const content = listaGastosTemplate.content;
        const title = content.querySelector('h2');
        const div = document.getElementById('div');
        div.insertAdjacentElement('afterbegin', title);
        const gastoTemplate = document.getElementById('gasto');
        const gastoCont = gastoTemplate.content;
        const datosGasto = gastoCont.querySelector('li');
        div.insertAdjacentElement('beforeend', datosGasto);
        // if (registroGastos.listaDeGastos.length === 0) {
        //   title.textContent = 'No hay gastos registrados...';
        //   console.log('No hay gastos registrados');
        // }
        if (registroGastos.listaDeGastos.length === 0) {
            console.log('gastos');
            title.textContent = '';
            console.log(registroGastos.listaDeGastos);
            datosGasto.textContent = 'prueba';
        }
    }
}
const registroGastos = new Form();
const render = new RenderElements();
const fechaInput = registroGastos.fechaInput;
const fechaActual = new Date().toISOString().split('T')[0];
fechaInput.value = fechaActual;
const valorInput = registroGastos.valorInput;
valorInput.addEventListener('input', function () {
    console.log(this.value);
});
