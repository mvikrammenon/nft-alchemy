// Deploy script for NFT smart contract
async function main() {
    // Grab contract factory
    const contractFactory = await ethers.getContractFactory("MyNFT");

    // Deploy contract
    const contract = await contractFactory.deploy();
    // log contract address
    console.log('Contract deployed to address: ',contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });