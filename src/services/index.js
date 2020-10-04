import axios from 'axios';

const url = 'http://localhost:3000/api';

export default {
  async getStats(year) {
    console.log(year);
    try {
      const res = await axios.get(`${url}/stats/${year}`);
      console.log(res);
      return res;
    } catch (err) {
      return err;
    }
  },
  async getTeams() {
    try {
      const res = await axios.get(`${url}/teams`);
      return res.data;
    } catch (err) {
      return err;
    }
  },
};
