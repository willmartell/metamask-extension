/* eslint-disable no-unused-vars */
require('./lib/inpage-base.js')
require('web3/dist/web3.min.js')
window.web3 = new window.Web3(window.ethereum)
window.ethereum.publicConfigStore.subscribe(({ selectedAddress }) => {
  web3.eth.defaultAccount = selectedAddress
})
