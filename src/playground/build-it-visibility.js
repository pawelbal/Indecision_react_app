// let buttonMsg = 'Show details';

// const statusChange = () => {
//   if (buttonMsg === 'Show details') {
//     buttonMsg = 'Hide details';
//     renderApp();
//   } else {
//     buttonMsg = 'Show details';
//     renderApp();
//   }
// };

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={statusChange}>{buttonMsg}</button>
//       {buttonMsg === 'Hide details' && <p>This is a message!</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// renderApp();

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibitity Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && <p>The hidden text appears!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
