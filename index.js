import Component from './Component.js';
import RawComponent from './RawComponent.js';
import safeFetch from './lib/safeFetch.js';
import _registerComponent from './lib/registerComponent.js';
import lighterhtml from './lib/lighterhtml.js';
import css from './lib/css.js';

export const { html, render, svg } = lighterhtml(Component);
const registerComponent = _registerComponent(Component);
export { Component, RawComponent, registerComponent, safeFetch, css }
