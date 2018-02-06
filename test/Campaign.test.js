const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const compiledFactory = require('../ethereum/buid/Factory.json')
const compiledCampaign = require('../ethereum/build/Campaign.json')

let accounts
let Factory
let campaignAddres
let campaign

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

  factory = await new web3.eth.Contract()
})
