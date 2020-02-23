require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain unfold imitate private fortune secret'; 
let testAccounts = [
"0xaa7283f0368b53b81f824cc9320b04a639f9bad01ae6890a3fa8b2323707e9df",
"0xba9b072a83738092c657312d082bd26f788bd04e58c80bb8154e1ad7486aa0fc",
"0x46cdeffe0dd10756118b93c150f3312a5ffcf6f5802603443f49870770f28ba7",
"0x39736f1d1fdec3b96394edab4dd35e6bb36f9800790b4890c32f0e5ce2ef46cd",
"0xa5ec4f3c70e349e8fbe6c563ae525e75558fcea37c5d1b3de831999a2c8cbc8a",
"0x305d454264d2d64d1505317ffcd0336c0582f2f49560600e138ce958a4c1dd78",
"0x59bcaba42e550ed812cb30ef52b42962de072771322bea6ad685878fb8496777",
"0x35f012fa7439afe07efdce6c633438ed80d5910bfe2cbfdc81fa783e62f681fe",
"0xc3a1fc9d94427abcb6d96ae54a4c07c5382a4616d3b3b148761ef54e36840674",
"0xbcedbda1e45843f25b79664fa01bf7d681f4ae6fd3c3f3e6559d71669cc2d71b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
