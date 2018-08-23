using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;

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
}
