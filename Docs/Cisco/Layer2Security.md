# Layer 2 Security


Determine the current root bridge:
	$ show spanning-tree

Assign Central as the primary root bridge (on Central):
	$ spanning-tree vlan 1 root primary

Assign SW-1 as a secondary root bridge (on switch SW-1):
	$ spanning-tree vlan 1 root secondary

Enable PortFast on all access ports:
	$ interface range f0/1 - 4
	$ spanning-tree portfast

Enable BPDU guard on all access ports:
	$ interface range f0/1 - 4
	$ spanning-tree bpduguard enable

Enable root guard:
	$ interface range f0/23 – 24
	$ spanning-tree guard root

Configure basic port security on all ports connected to host devices (Set the maximum number of learned MAC addresses to 2, allow the MAC address to be learned dynamically, and set the violation to shutdown):
	$ interface range f0/1 – 22
	$ switchport mode access
	$ switchport port-security
	$ switchport port-security maximum 2
	$ switchport port-security violation shutdown
	$ switchport port-security mac-address sticky

Verify port security:
	$ show port-security interface f0/1

Disable unused ports:
	$ interface range f0/5 – 22
	$ shutdown
