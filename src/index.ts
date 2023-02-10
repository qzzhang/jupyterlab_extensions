import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the firstextension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'firstextension:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension firstextension is activated!');
  }
};

export default plugin;
