using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Loom.Client;

public class Click : MonoBehaviour {

	public UnityEngine.UI.Text goldDisplay;
	public UnityEngine.UI.Text GPC;
	public float gold = 0.00f;
	public int goldperclick = 1;
	public float costmultiplier = 2.00f;

 #if UNITY_WEBGL && !UNITY_EDITOR
	[DllImport("__Internal")]
    private static extern void Say(string str);

	[DllImport("__Internal")]
    private static extern void Hodl(string str);
#else
	private static void Say(string str) {}
	private static void Hodl(string str) {}
#endif

	void Start() {
		goldDisplay = GameObject.Find("GoldDisplay").GetComponent<UnityEngine.UI.Text>();
	}

	void Awake() {

	}

	void Update() {
		goldDisplay.text = "Cookie: " + CurrencyManager.Instance.GetCurrencyIntoString(gold ,false ,false);
		GPC.text = "CPC: " + CurrencyManager.Instance.GetCurrencyIntoString(goldperclick ,true ,false);
	}

	public void Clicked() {
		gold += goldperclick;
		Say("gold " + gold);
	}

	public void Echo(string str) {
		Hodl("hodl");
	}

	async Task<Contract> GetContract(byte[] privateKey, byte[] publicKey)
    {
        var writer = RpcClientFactory.Configure()
            .WithLogger(Debug.unityLogger)
            .WithHTTP("http://127.0.0.1:46658/rpc")
            //.WithWebSocket("ws://127.0.0.1:46657/websocket")
            .Create();

        var reader = RpcClientFactory.Configure()
            .WithLogger(Debug.unityLogger)
            .WithHTTP("http://127.0.0.1:46658/query")
            //.WithWebSocket("ws://127.0.0.1:9999/queryws")
            .Create();

        var client = new DAppChainClient(writer, reader)
        {
            Logger = Debug.unityLogger
        };
        // required middleware
        client.TxMiddleware = new TxMiddleware(new ITxMiddlewareHandler[]{
            new NonceTxMiddleware(publicKey, client),
            new SignedTxMiddleware(privateKey)
        });

        var contractAddr = await client.ResolveContractAddressAsync("BluePrint");
        var callerAddr = Address.FromPublicKey(publicKey);
        return new Contract(client, contractAddr, callerAddr);
    }
}
