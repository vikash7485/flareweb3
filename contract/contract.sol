// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title RandomPassword - beginner example
/// @notice Generates a pseudo-random hex password when deployed (no constructor inputs).
/// @dev Uses keccak256 of block data + deployer address. Not secure for production.
contract RandomPassword {
    address public owner;
    string private passwordHex;   // generated password (hex string)
    uint256 public passwordLength; // length in hex characters (not bytes)

    event PasswordGenerated(address indexed by, string passwordHex);

    constructor() {
        owner = msg.sender;
        // generate pseudo-random bytes32 using block values + deployer address
        bytes32 rand = keccak256(
            abi.encodePacked(block.timestamp, block.prevrandao, msg.sender)
        );

        // Convert bytes32 to a hex string and shorten it to a readable length
        // For example: produce a 32-character hex password (16 bytes)
        passwordHex = _toHexString(rand);
        // Pick how many hex chars you'd like to expose (must be even number for full bytes).
        // We'll keep first 32 hex chars (16 bytes) by default.
        passwordLength = 32;
        passwordHex = _slice(passwordHex, 0, passwordLength);

        emit PasswordGenerated(msg.sender, passwordHex);
    }

    /// @notice Returns the generated password (hex string). Publicly readable.
    function getPassword() external view returns (string memory) {
        return passwordHex;
    }

    /// @notice Owner can regenerate a new pseudo-random password (still insecure).
    function regenerate() external {
        require(msg.sender == owner, "only owner");
        bytes32 rand = keccak256(
            abi.encodePacked(block.timestamp, block.prevrandao, msg.sender, passwordHex)
        );
        passwordHex = _toHexString(rand);
        passwordHex = _slice(passwordHex, 0, passwordLength);
        emit PasswordGenerated(msg.sender, passwordHex);
    }

    /* ---------------------
       Internal helpers
       --------------------- */

    // Convert bytes32 => hex string (lowercase) with "0x" removed
    function _toHexString(bytes32 data) internal pure returns (string memory) {
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(64);
        for (uint256 i = 0; i < 32; i++) {
            uint8 _b = uint8(data[i]);
            str[2*i]   = alphabet[_b >> 4];
            str[2*i+1] = alphabet[_b & 0x0f];
        }
        return string(str); // length 64 hex chars
    }

    // Return substring of a bytes string (start inclusive, end exclusive)
    function _slice(string memory str, uint256 start, uint256 len) internal pure returns (string memory) {
        bytes memory b = bytes(str);
        require(start + len <= b.length, "slice out of bounds");
        bytes memory out = new bytes(len);
        for (uint256 i = 0; i < len; i++) out[i] = b[start + i];
        return string(out);
    }
}
