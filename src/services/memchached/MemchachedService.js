const Memcached = require('memjs');

class MemcachedService {
  constructor() {
    this._client = Memcached.Client.create();
  }

  async set(key, data) {
    let isSuccess = null;
    try {
      const result = await this._client.set(key, JSON.stringify(data), { expires: 600 });
      isSuccess = result;
    } catch (error) {
      console.log(error.message);
    }
    return isSuccess;
  }

  async get(key) {
    let value = null;
    try {
      const result = await this._client.get(key);
      value = JSON.parse(result.value);
    } catch (error) {
      console.log(error.message);
    }
    return value;
  }
}

module.exports = MemcachedService;
