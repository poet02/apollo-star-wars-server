import { RESTDataSource } from "apollo-datasource-rest";
import camelCaseKeys from "camelcase-keys";

export class StarWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  async getPagedPeople(search: string, page: number) {
    // searchTerm ='s';
    // page = 2;
    const response = await this.get("people", { search: search, page:page });

    // const data = {
    //   count: response.count,
    //   next: response.next,
    //   people: response.results,
    // };
    // { count, next, results } = response;
    return camelCaseKeys(response, { deep: true });
  }
}

// module.exports = StarWarsAPI;
export const dataSources = () => ({ StarWarsAPI: new StarWarsAPI() })
