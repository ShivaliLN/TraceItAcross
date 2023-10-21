const hre = require("hardhat");

async function main() {
 
  const signer0 = await hre.ethers.provider.getSigner(0);
  const addr0 = await signer0.getAddress();

  const TrackItAcross = await hre.ethers.getContractFactory("TrackItAcross")
  const trackItAcross = await TrackItAcross.deploy()
  await trackItAcross.deployed()
  console.log("TrackItAcross Contract: " + trackItAcross.address)

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });