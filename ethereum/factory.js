import web3 from './web3'
import Factory from './build/Factory.json'

const instance = new web3.eth.Contract(
  JSON.parse(Factory.interface),
  '0x69e1f635e0c652dAC8c5c16034feBF2897ea870D'
)

export default instance
