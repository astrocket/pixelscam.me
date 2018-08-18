using UnityEngine;
using System.Collections;

public class CurrencyManager : MonoBehaviour {

	private static CurrencyManager instance;
	public static CurrencyManager Instance {
		get {
			return instance;
		}
	}

	void Awake() {
		CreateInstance ();
	}

	void CreateInstance() {
		if (instance == null) {
			instance = this;
		}
	}
		
	public string GetCurrencyIntoString(float valueToConvert, bool currencyPerSec, bool currencyPerClick ) {
		string converted;
		if (valueToConvert >= 1000000000000000000) {
			converted = (valueToConvert / 1000000000000000000f).ToString ("f2") + "Qui";
		} else if (valueToConvert >= 1000000000000000) {
			converted = (valueToConvert / 1000000000000000f).ToString ("f2") + "Qua";
		} 
		else if (valueToConvert >= 1000000000000) {
			converted = (valueToConvert / 1000000000000f).ToString ("f2") + "T";
		}
		else if (valueToConvert >= 1000000000) {
			converted = (valueToConvert / 1000000000f).ToString ("f2") + "B";
		}
		else if (valueToConvert >= 1000000) {
			converted = (valueToConvert / 1000000f).ToString ("f2") + "M";
		}
		else if (valueToConvert >= 1000) {
			converted = (valueToConvert / 1000f).ToString ("f2") + "K";
		}
		else {
			converted = "" + valueToConvert;
		}

		if (currencyPerSec == true) {
			converted = converted + " CPC";
		}
		
		if (currencyPerClick == true) {
			converted = converted + " CPS";
		}
		return converted;
	}
}
