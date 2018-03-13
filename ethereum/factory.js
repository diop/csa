import web3 from './web3'
import Factory from './build/Factory.json'

const instance = new web3.eth.Contract(
  JSON.parse(Factory.interface),
  '0x00682c91F3134efc64E64214BcA2801A23FE4c55'
)

export default instance
