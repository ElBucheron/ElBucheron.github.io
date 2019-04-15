# Configure AAA Authentication


Configure a local username:
	$ username Admin1 secret admin1pa55

Configure local AAA authentication for console access:
	$ line vty 0 4
	$ transport input ssh
	$ login local

Configure the line console to use the defined AAA authentication method:
	$ aaa new-model
	$ aaa authentification login default local
	$ line con 0
	$ login authentication default

Verify the AAA authentication method:
	- Exit and Exit on R1 and check that a username and password is asked

Configure domain name and crypto key for use with SSH:
	$ ip domain-name ccnasecurity.com
	$ crypto key generate rsa general-keys modulus 1024

Configure a named list AAA authentication method for the vty lines:
	$ aaa new-model
	$ aaa authentication login SSH-LOGIN local

Configure the vty lines to use the defined AAA authentication method:
	$ login authentication SSH-LOGIN

Verify the AAA authentication method:
	> ssh -l Admin1 192.168.1.1


Configure Server-Based AAA Authentication Using TACACS+:
	$ tacacs-server host 192.168.2.2
	$ tacacs-server key tacacspa55
	$ aaa new-model
	$ aaa authentication login default group tacacs+ local
	$ line con 0
	$ login authentication default

Configure Server-Based AAA Authentication Using RADIUS:
	$ radius-server host 192.168.3.2
	$ radius-server key radiuspa55
	$ aaa new-model
	$ aaa authentication login default group radius local
	$ line con 0
	$ login authentication default
