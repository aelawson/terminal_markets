import axios from 'axios';

const API_ENDPOINT = 'https://api.iextrading.com/1.0/';

export default class StockService {
  constructor() { }

  async getStockInfo() {
    try {
      let response = await axios.get(
        "${API_ENDPOINT}/stock/aapl/stats"
      );
    }
    catch (error) {
      console.log(error);
    }
  }
}