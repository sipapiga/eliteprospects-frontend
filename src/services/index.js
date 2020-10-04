import axios from 'axios';

const url = 'https://api-eliteprospects.herokuapp.com/api';

export default {
  async getStats(year) {
    try {
      const res = await axios.get(`${url}/stats/${year}`);
      return res.data;
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
