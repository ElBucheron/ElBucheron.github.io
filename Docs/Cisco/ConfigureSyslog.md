# Configure Cisco Routers for Syslog, NTP, and SSH Operations


Configure OSPF MD5 authentication for all the routers in area 0:
	$ router ospf 1
	$ area 0 authentication message-digest

Configure the MD5 key for all the routers in area 0:
	$ interface s0/0/0
	$ ip ospf message-digest-key 1 md5 MD5pa55

Verify configurations:
	$ show ip ospf neighbor

Show NTP configuration:
	$ show ntp status

Configure routers to update hardware clock:
	$ ntp update-calendar

Configure NTP authentication on the routers:
	$ ntp authenticate
	$ ntp trusted-key 1
	$ ntp authentication-key 1 md5 NTPpa55

Configure routers to timestamp log messages:
	$ ntp server 192.168.1.5

Configure the routers to identify the remote host (Syslog Server):
	$ logging 192.168.1.6
	$ logging on
	$ service timestamps log datetime msec

Verify logging configuration:
	$ show logging

Configure a domain name:
	$ ip domain-name ccnasecurity.com

Configure users for login to the SSH server:
	$ username SSHadmin privilege 15 secret ciscosshpa55

Configure the incoming vty lines:
	$ login local
	$ transport input ssh

Erase existing key pairs:
	$ crypto key zeroize rsa

Generate the RSA encryption key pair:
	$ crypto key generate rsa

Verify the SSH configuration:
	$ show ip ssh

Configure SSH timeouts and authentication parameters:
	$ ip ssh time-out 90
	$ ip ssh authentication-retries 2
	$ ip ssh version 2

Attempt to connect to a router via Telnet:
	> telnet 192.168.3.1
