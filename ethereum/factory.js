import web3 from './web3'
import Factory from './build/Factory.json'

const instance new web3.eth.Contract(
  JSON.parse(Factory.interface),
  '0xa5f5665cb7cddce66c6227eada48b96e75303769'
)

export default instance
