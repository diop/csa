const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const compiledFactory = require('../ethereum/buid/Factory.json')
const compiledCampaign = require('../ethereum/build/Campaign.json')

let accounts
let factory
let campaignAddres
let campaign

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' })

  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  })

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call()

  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  )
})

describe('Campaigns', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address)
    assert.ok(campaign.options.address)
  })
})