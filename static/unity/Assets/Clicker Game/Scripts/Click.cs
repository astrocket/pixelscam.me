using UnityEngine;
using System.Collections;

public class Click : MonoBehaviour {

	public UnityEngine.UI.Text goldDisplay;
	public UnityEngine.UI.Text GPC;
	public float gold = 0.00f;
	public int goldperclick = 1;
	public float costmultiplier = 2.00f;
	void Awake()
	{

	}
	void  Update()
	{


		goldDisplay.text = "Cookie: " + CurrencyManager.Instance.GetCurrencyIntoString(gold ,false ,false);
		GPC.text = "CPC: " + CurrencyManager.Instance.GetCurrencyIntoString(goldperclick ,true ,false);
	}
	public void Clciked(){
		gold += goldperclick;

	}

}
