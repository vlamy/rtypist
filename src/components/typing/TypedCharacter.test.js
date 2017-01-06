import React from 'react';
import ReactDOM from 'react-dom';
import TypedCharacter from './TypedCharacter';
import ReactTestUtils from 'react-addons-test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypedCharacter
    key='mockKey'
    character='c'
    status='to-go'
  />, div);
});

it('renders a classic character with status to-go', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<TypedCharacter
        key='mockKey'
        character='c'
        status='to-go'
    />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.children).toEqual('c');
    expect(result.props.className).toEqual('typed-character char-to-go');
});

it('renders a classic character with status current', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<TypedCharacter
        key='mockKey'
        character='c'
        status='current'
    />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.children).toEqual('c');
    expect(result.props.className).toEqual('typed-character char-current');
});

it('renders a classic character with status error', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<TypedCharacter
        key='mockKey'
        character='c'
        status='error'
    />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.children).toEqual('c');
    expect(result.props.className).toEqual('typed-character char-error');
});

it('renders a classic character with status success', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<TypedCharacter
        key='mockKey'
        character='c'
        status='success'
    />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.children).toEqual('c');
    expect(result.props.className).toEqual('typed-character char-success');
});

it('renders a space character with special classname', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<TypedCharacter
        key='mockKey'
        character=' '
        status='success'
    />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.children).toEqual(' ');
    expect(result.props.className).toEqual('typed-character char-success char-space');
});

it('renders a line break with special classname', () => {
    const renderer = ReactTestUtils.createRenderer();
    const lineBreakChar = '\n';
    renderer.render(<TypedCharacter
        key='mockKey'
        character={lineBreakChar}
        status='success'
    />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.children).toEqual('\n');
    expect(result.props.className).toEqual('typed-character char-success char-cr');
});
