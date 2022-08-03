import { createRoot } from 'react-dom/client';
import { Table } from './lib/index';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <div>
    <h1>table_openclassroom_dervilon</h1>
      <Table />
  </div>
); 
