import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

const initialMd = `# ¡Hola Mundo!
## Bienvenido a mi vista previa de MarkDown

[freeCodeCamp] (https://www.freecodecamp.org/)

Proyectos de bibliotecas front-end
- Máquina de cotización aleatoria
- Vista previa de Markdown
- Caja de ritmos
- Calculadora de JavaScript
- Reloj Pomodoro

Esto es un  texto en **Negrita**  , un _enfasis_ , un _**enfasis combinado**_ , y un ~~tachado~~

Head 1 | Head 2 | Head 3
------ |--------| ------
item1 | item2 | item3
item4 | item5 | item6
item7 | item8 | item9

> Ejemplo de blockquote

Inline \`code\`

\`\`\`
// Bloque de Código

function sum (x, y) {
  return x + y;
}
\`\`\`

![Random Animals](https://res.cloudinary.com/djbaqvlnn/image/upload/v1638631178/bu_kbv5jk.png)
`;

class App extends Component {
  state = {
    markdownValue: initialMd
  };

  handleChange = e => {
    this.setState({
      markdownValue: e.target.value
    });
  };

  render() {
    const { markdownValue } = this.state;

    return (
      <div className="App">
        <h1 className="App-title"> &mdash;Previsualizador de Markdown&mdash;</h1>
        <main className="App-content">
          <Card title="Editor">
            <Editor
              onChange={this.handleChange}
              markdownValue={markdownValue}
            />
          </Card>
          <Card title="Preview">
            <Preview markdownValue={markdownValue} />
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
