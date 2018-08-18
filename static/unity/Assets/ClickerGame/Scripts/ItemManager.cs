using UnityEngine;
using System.Collections;
using UnityEngine.UI;
public class ItemManager : MonoBehaviour {

	public UnityEngine.UI.Text itemInfo;
	public Click click;
	public float cost;
	public int tickValue;
	public int count;
	public string itemName;
	private float baseCost;
	public Color standard;
	public Color affordable;
	private Slider _slider;

	void Start() {
		baseCost = cost; 
		_slider = GetComponentInChildren<Slider>();
	}

	void Update() {
		itemInfo.text = itemName + "\nCost: "+cost+"\nGold: "+tickValue+"/s";
		_slider.value = click.gold / cost * 100;
	}

	public void PurchasedItem() {
		if (click.gold >= cost) {
			click.gold -= cost;
			count += 1;
			cost = Mathf.Round( baseCost * Mathf.Pow (click.costmultiplier, count));

		}
	}
}
