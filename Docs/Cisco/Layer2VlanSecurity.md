# Layer 2 VLAN Security

Enable trunking, including all trunk security mechanisms on the link:
	$ interface f0/23
	$ switchport mode trunk
	$ switchport trunk native vlan 15
	$ switchport nonegotiate
	$ no shutdown

Enable a management VLAN (VLAN 20):
	$ vlan 20
	$ exit
	$ interface vlan 20
	$ ip address 192.168.20.1 255.255.255.0

Ensure the management PC is part of VLAN 20:
	$ interface f0/1
	$ switchport access vlan 20
	$ no shutdown

Enable a new subinterface on a router:
	$ interface g0/0.3
	$ encapsulation dot1Q 20
	$ ip address 192.168.20.10 255.255.255.0

Enable security:
	$ access-list 101 deny ip any 192.168.20.0 0.0.0.255
	$ access-list 101 permit ip any any
	$ access-list 102 permit ip host 192.168.20.6 any
	$ interface g0/0.1
	$ ip access-group 101 in
	$ interface g0/0.2
	$ ip access-group 101 in
	$ line vty 0 4
	$ access-class 102 in
