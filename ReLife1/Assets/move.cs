using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class move : MonoBehaviour
{
    // Start is called before the first frame update
    Vector3 Vec;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
     Vec = transform.localPosition;
     Vec.y += Input.GetAxis("Jump") * Time.deltaTime * 20;
     Vec.x += Input.GetAxis("Horizontal") * Time.deltaTime * 20;
     Vec.z += Input.getAxis("Vertical") * Time.deltaTime * 20;
     transform.localPosition = Vec;   
    }
}
