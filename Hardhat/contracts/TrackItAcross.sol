// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Importing required libraries from OpenZeppelin
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Defining the main contract for the TrackItAcross platform
contract TrackItAcross is ERC1155, Ownable {
    uint256 private nextTokenId;  // Variable to keep track of the next token ID
    address private contractOwner;  // Variable to store the contract owner's address

    // Mapping to store product details against each token ID
    mapping(uint256 => Product) private products;

    // Struct to define the attributes of a product
    struct Product {
        string name;
        string batchNumber;
        string productionDate;
        string origin;
        string description;
        string imageUrl;
        bool isVerified;
    }

    // Constructor to initialize the contract with metadata URI
    constructor() ERC1155("https://red-spatial-angelfish-279.mypinata.cloud/ipfs/{id}") {
    contractOwner = msg.sender; // Setting the contract owner to the address deploying the contract
    }

    // Modifier to ensure only the contract owner can call certain functions
    modifier onlyOwner() {
        require(msg.sender == contractOwner, "Caller is not owner");
        _;
    }

    // Function to register a new product and mint a new token
    function registerProduct(
        string memory _name,
        string memory _batchNumber,
        string memory _productionDate,
        string memory _origin,
        string memory _description,
        string memory _imageUrl
    ) external onlyOwner returns (uint256) {
        uint256 tokenId = nextTokenId;  // Getting the next available token ID
        nextTokenId++;  // Incrementing the token ID for the next registration
        // Storing the product details against the token ID
        products[tokenId] = Product({
            name: _name,
            batchNumber: _batchNumber,
            productionDate: _productionDate,
            origin: _origin,
            description: _description,
            imageUrl: _imageUrl,
            isVerified: false  // Setting verification status to false initially
        });
        _mint(msg.sender, tokenId, 1, "");  // Minting a new token with the product details
        return tokenId;  // Returning the token ID of the newly registered product
    }

    // Function to update the verification status of a product
    function updateVerificationStatus(uint256 _tokenId, bool _isVerified) external onlyOwner {
        Product storage product = products[_tokenId];  // Getting the product details using token ID
        require(address(product) != address(0), "Product does not exist");  // Checking if product exists
        product.isVerified = _isVerified;  // Updating the verification status
    }

    // Function to retrieve the product details using token ID
    function getProductInfo(uint256 _tokenId) external view returns (Product memory) {
        Product memory product = products[_tokenId];  // Getting the product details using token ID
        require(address(product) != address(0), "Product does not exist");  // Checking if product exists
        return product;  // Returning the product details
    }
}
