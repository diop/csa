import Web3 from 'web3'

let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser
  web3 = new Web3(window.web3.currentProvider)
} else {
  // We are on the server
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/CTNrMRz6lyyxOxddWG7y'
  )
  web3 = new Web3(provider)
}

export default web3
