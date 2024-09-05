import React from 'react';
import ReactDOM from 'react-dom/client';

export default function HelloReact() {
    
}
const container = document.getElementById('hello-react');
const root = ReactDOM.createRoot(container);
root.render(<HelloReact/>);
/*if (document.getElementById('hello-react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
}*/