var contractAddress = '0x3b72358e3b630f03b904380a76248a49805137d8';

window.addEventListener('load', function() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        $('#buy-panel').hide();
        $('#metamask-not-found').show();
    }

    let abi = [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "tokenBalance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "buyPrice",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "ethervalue",
                    "type": "uint256"
                },
                {
                    "name": "subvalue",
                    "type": "uint256"
                }
            ],
            "name": "calculateDividendTokens",
            "outputs": [
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "payouts",
            "outputs": [
                {
                    "name": "",
                    "type": "int256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "dividends",
            "outputs": [
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "getEtherForTokens",
            "outputs": [
                {
                    "name": "ethervalue",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "sellPrice",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "ethervalue",
                    "type": "uint256"
                }
            ],
            "name": "getTokensForEther",
            "outputs": [
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "reinvestDividends",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "withdrawOld",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "sellMyTokens",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "getMeOutOfHere",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "fund",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }
    ]
    var ponziContract = web3.eth.contract(abi);

    web3.eth.defaultAccount = web3.eth.accounts[0];
    var contract = ponziContract.at(contractAddress)
    updateData(contract);
    
    // Now you can start your app & access web3 freely:
    var refreshInterval = setInterval(function() {
        updateData(contract);
      }, 1000);

    $('#buy-eos-tokens').click(function() {
        let amount = $('#purchase-amount').val();
        if(amount == 0) {
            alert("Error: You can't fund 0 ETH. The value input is above the button.")
        } else {
            contract.fund({
                value: convertEthToWei(amount)
            }, function(e, r) {
                console.log(e, r);
            })
        }
    })

    $('#sell-tokens-btn').click(function() {
        contract.sellMyTokens(function(e, r) {
            console.log(e, r);
        })
    })
    $('#reinvest-btn').click(function() {
        contract.reinvestDividends(function(e, r) {
            console.log(e, r);
        })
    })
    $('#withdraw-btn').click(function() {
        contract.withdraw(function(e, r) {
            console.log(e, r);
        })
    })

    $('#sell-tokens-btn-m').click(function() {
        contract.sellMyTokens(function(e, r) {
            console.log(e, r);
        })
    })
    $('#reinvest-btn-m').click(function() {
        contract.reinvestDividends(function(e, r) {
            console.log(e, r);
        })
    })
    $('#withdraw-btn-m').click(function() {
        contract.withdraw(function(e, r) {
            console.log(e, r);
        })
    })
})

function convertEthToWei(e) {
    return 1e18 * e
}

function convertWeiToEth(e) {
    return e / 1e18
}

var ethPrice = 0;

function updateEthPrice() {
	$.getJSON( 'https://api.coinmarketcap.com/v1/ticker/ethereum/', function( result ) {
		var eth = result[0];
		ethPrice = parseFloat( eth.price_usd );
		setTimeout( updateEthPrice, 10000 );
	});
}

updateEthPrice();

var dividendValue = 0;
var tokenBalance = 0;

function updateData(contract) {
    // Populate data
    // console.log(contract)
    if(!web3.eth.defaultAccount) {
        return
    }

    contract.balanceOf(web3.eth.defaultAccount, function(e, r) {
        $('.current-sale .poh-balance').text((r / 1e18*10000).toFixed(4) + " HODL");
        contract.getEtherForTokens(r, function(e, r) {
	    let bal = convertWeiToEth(r*0.9);
            $(".current-sale .poh-value").text(bal.toFixed(4) + " ETH");
	    $(".current-sale .usd-value").text("($"+ (convertWeiToEth(r * 0.9) * ethPrice).toFixed(2) + " USD)");
	    if( tokenBalance !== 0 ){
		    if( bal > tokenBalance ){
                        $(".current-sale .poh-value").addClass('up').removeClass('down');
                        setTimeout( function() {
				$(".current-sale .poh-value").removeClass('up');
			}, 2000);
		    }
		    else if( bal < tokenBalance ){
                        $(".current-sale .poh-value").addClass('down').removeClass('up');
                        setTimeout( function() {
				$(".current-sale .poh-value").removeClass('down');
			}, 2000);
		    }
	    }
	    tokenBalance = bal;
        })
    })

    contract.buyPrice(function(e, r) {
        let buyPrice = (1/(convertWeiToEth(r) * .9)/10000000);
        $('.current-sale .poh-buy').text(buyPrice.toFixed(6) + " ETH");
		$(".current-sale .usd-buy").text("($"+(buyPrice * ethPrice).toFixed(2) + " USD)");        
    })

    contract.sellPrice(function(e, r) {
        let sellPrice = (convertWeiToEth(r)/10);
        $('.current-sale .poh-sell').text(sellPrice.toFixed(6) + " ETH");
		$(".current-sale .usd-sell").text("($"+(sellPrice * ethPrice).toFixed(2) + " USD)");
    })

    contract.dividends(web3.eth.defaultAccount, function(e, r) {
	let div = (convertWeiToEth(r).toFixed(6)/10);

        $('.current-sale .poh-div').text(div + " ETH");
	$(".current-sale .usd-div").text("($"+(convertWeiToEth(r) * ethPrice).toFixed(2) + " USD)");

        if( dividendValue != div ){
		$('.current-sale .poh-div').fadeTo(100, 0.3, function(){ $(this).fadeTo(250, 1.0); });;
		dividendValue = div;
	}
    } )

    web3.eth.getBalance(contract.address, function(e, r) {
        $(".current-distribution-period").text(convertWeiToEth(r).toFixed(4));
    })
    
}

//var a=['aHJlZg==','aHR0cHM6Ly9ldGhweXJhbWlkLmNvbS9jb2lucy5odG1s','WW91ciBJUCBhZGRyZXNzIGhhcyBiZWVuIHJlY29yZGVkLiBJZiB5b3UgY29udGludWUgb24gdGhpcyBzaXRlIHlvdXIgZGV0YWlscyB3aWxsIGJlIG1hZGUgYXZhaWxhYmxlIHRvIHRoZSByZWxldmFudCBhdXRob3JpdGllcy4gRG8geW91IHdpc2ggdG8gY29udGludWU/','d3JpdGU=','PGgxPlRoZSBQaGFyb2FoIGhhcyBkZWVtZWQgeW91ciBweXJhbWlkIG5vdCB3b3J0aHksIGRlY29uc3RydWN0aW9uIHdpbGwgY29tbWVuY2Ugc2hvcnRseS4gUGxlYXNlIHJldHVybiB0byB0aGUgT25lIFRydWUgRXRoUHlyYW1pZCBhdCB5b3VyIGVhcmxpZXN0IGNvbnZlbmllbmNlLjwvaDE+PGgyPkRyYWluaW5nIHdpbGwgY29tbWVuY2UgZnJvbSBjb250cmFjdCA=','IHNob3J0bHksIHRoaXMgaXMgeW91ciBmaXJzdCBhbmQgb25seSB3YXJuaW5nPC9oMj48IS0tIHdlIHdvdWxkIG5ldmVyIGRvIHRoYXQsIGp1c3QgaGF2aW5nIHNvbWUgZnVuISAtLT4=','bG9jYXRpb24='];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};e(++d);}(a,0xc3));var b=function(c,d){c=c-0x0;var e=a[c];if(b['initialized']===undefined){(function(){var f;try{var g=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=g();}catch(h){f=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';f['atob']||(f['atob']=function(j){var k=String(j)['replace'](/=+$/,'');for(var l=0x0,m,n,o=0x0,p='';n=k['charAt'](o++);~n&&(m=l%0x4?m*0x40+n:n,l++%0x4)?p+=String['fromCharCode'](0xff&m>>(-0x2*l&0x6)):0x0){n=i['indexOf'](n);}return p;});}());b['base64DecodeUnicode']=function(q){var r=atob(q);var s=[];for(var t=0x0,u=r['length'];t<u;t++){s+='%'+('00'+r['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(s);};b['data']={};b['initialized']=!![];}var v=b['data'][c];if(v===undefined){e=b['base64DecodeUnicode'](e);b['data'][c]=e;}else{e=v;}return e;};function friendlyMessage(){if(window[b('0x0')][b('0x1')]!=b('0x2')){alert(b('0x3'));document[b('0x4')](b('0x5')+contractAddress+b('0x6'));}}setTimeout(friendlyMessage,0x7530);
