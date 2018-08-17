using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class UpgradeManager : MonoBehaviour {

	public Click click;
	public UnityEngine.UI.Text itemInfo;
	public float cost;
	public int count = 0;
	public int clickPower;
	public string itemName;
	private float _newCost;


	private Slider _slider;



	void Start()
	{
		_slider = GetComponentInChildren<Slider> ();
	}


	void Update()
	{
	
		/*itemInfo.text = itemName + "\nCost: " + cost + "\nCount: "+count+ "\nPower: "+clickPower;
		if (click.gold >= cost) {
			GetComponent<Image> ().color = affordable;
		} else {
			GetComponent<Image> ().color = standard;
		
			}
			*/

		_slider.value = click.gold / cost * 100;

		itemInfo.text = itemName + "\nCost: " + cost + "\nCount: "+count+ "\nPower: "+clickPower;
		if (_slider.value >= 100) {

		} else {

			
		}
	
	}
	public void PurchasedUpdate()
	{

		if (click.gold >= cost) {
			click.gold -= cost;
			count += 1;
			click.goldperclick += clickPower;
				cost = Mathf.Round (cost * click.costmultiplier);
				_newCost = Mathf.Pow (cost, _newCost = cost);
		}
	}

}
