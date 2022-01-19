import React from 'react';
import ScriptTag from 'react-script-tag';

function PageScriptTag(props) {
  return props.script ? <ScriptTag isHydrating={true} type="text/javascript" src={props.script} /> : '';
}

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <script type='text/javascript' src="/js/main.js" />
          <PageScriptTag script={this.props.script}/>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

export default DefaultLayout;