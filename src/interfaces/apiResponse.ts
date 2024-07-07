import Animal from './animal';
import Page from './page';

interface ApiResponse {
  page: Page;
  sort: {
    clauses: [];
  };
  animals: Animal[];
}
export default ApiResponse;
