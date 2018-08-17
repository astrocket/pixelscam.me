using UnityEngine;
using System.Collections;

public class Pause : MonoBehaviour {

		
	void Update () {
	if (Input.GetKey (KeyCode.Escape)) {
			Application.LoadLevel(0);
		}
	}
}
