import React from 'react';
import ReactDOM from 'react-dom';
import TypedCharacter from './TypedCharacter';
import ReactTestUtils from 'react-addons-test-utils';
import Character from '../../models/Character';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypedCharacter
    key='mockKey'
    character={new Character('c')}
    status='to-go'
  />, div);
});

it('renders a classic character with status to-go', () => {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<TypedCharacter
    key='mockKey'
    character={new Character('c')}
  />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result.props.children).toEqual('c');
  expect(result.props.className).toEqual('rtypist__manager__tracker__text__line__character__regular rtypist__manager__tracker__text__line__character__regular--to-go');
});

it('renders a classic character with status current', () => {
  const renderer = ReactTestUtils.createRenderer();
  const character = new Character('c');
  character.setCurrentCharacterFlag();
  renderer.render(<TypedCharacter
    key='mockKey'
    character={character}
  />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result.props.children).toEqual('c');
  expect(result.props.className).toEqual('rtypist__manager__tracker__text__line__character__regular rtypist__manager__tracker__text__line__character__regular--current');
});

it('renders a classic character with status error', () => {
  const renderer = ReactTestUtils.createRenderer();
  const character = new Character('c');
  character.setLastTypedValue('v');
  renderer.render(<TypedCharacter
    key='mockKey'
    character={character}
  />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result.props.children).toEqual('c');
  expect(result.props.className).toEqual('rtypist__manager__tracker__text__line__character__regular rtypist__manager__tracker__text__line__character__regular--error');
});

it('renders a classic character with status success', () => {
  const renderer = ReactTestUtils.createRenderer();
  const character = new Character('c');
  character.setLastTypedValue('c');
  renderer.render(<TypedCharacter
    key='mockKey'
    character={character}
  />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result.props.children).toEqual('c');
  expect(result.props.className).toEqual('rtypist__manager__tracker__text__line__character__regular rtypist__manager__tracker__text__line__character__regular--success');
});

it('renders a space character with special classname', () => {
  const renderer = ReactTestUtils.createRenderer();
  const character = new Character(' ');
  character.setLastTypedValue(' ');
  renderer.render(<TypedCharacter
    key='mockKey'
    character={character}
  />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result.props.children).toEqual(' ');
  expect(result.props.className).toEqual('rtypist__manager__tracker__text__line__character__space rtypist__manager__tracker__text__line__character__space--success');
});

it('renders a line break with special classname', () => {
  const renderer = ReactTestUtils.createRenderer();
  const character = new Character('\n');
  character.setLastTypedValue('\n');
  renderer.render(<TypedCharacter
    key='mockKey'
    character={character}
  />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
  expect(result.props.children).toEqual('\n');
  expect(result.props.className).toEqual('rtypist__manager__tracker__text__line__character__cr rtypist__manager__tracker__text__line__character__cr--success');
});
