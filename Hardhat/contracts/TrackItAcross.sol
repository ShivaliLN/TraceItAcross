// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TrackItAcross is ERC1155, Ownable {
    uint public nextTokenId;
    address public admin;
    mapping(uint => Product) public products;

    struct Product {
        string uri;
        bool isVerified;
    }

    constructor(address initialOwner) ERC1155("https://ipfs.io/ipfs/{id}/metadata.json") Ownable(initialOwner) {
        admin = initialOwner;
    }

    function createProduct(string memory uri) external {
        products[nextTokenId] = Product(uri, true);
        _mint(msg.sender, nextTokenId, 1, "");
        nextTokenId++;
    }

    function getProduct(uint productId) external view returns (Product memory) {
        Product memory product = products[productId];
        require(bytes(product.uri).length > 0, "Product does not exist");
        return product;
    }

    function verifyProduct(uint productId) external {
        Product storage product = products[productId];
        require(bytes(product.uri).length > 0, "Product does not exist");
        product.isVerified = true;
    }
}
