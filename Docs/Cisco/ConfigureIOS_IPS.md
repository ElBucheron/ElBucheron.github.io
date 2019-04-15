# Configure IOS Intrusion
# Prevention System (IPS)


View the Technology Package license information:
	$ show version

Enable the Technology Package:
	$ license boot module c1900 technology-package securityk9

Save the running-config and reload the router to enable the security license:
	$ copy running-config startup-config
	$ reload

Create a directory named ipsdir:
	$ mkdir ipsdir

Configure the IPS signature storage location to be the directory:
	$ ip ips config location ipsdir

Create an IPS rule:
	$ ip ips name iosips

Enable logging:
	$ service timestamps log datetime msec

Reset the clock:
	$ clock set 15:05:45 5 March 2019

Verify that the timestamp service for logging is enabled:
	$ show run

Send log messages to the syslog server at IP address 192.168.1.50:
	$ logging on
	$ logging 192.168.1.50
	$ ip ips notify log

Retire the all signature category:
	$ ip ips signature-category
	$ category all
	$ retired true

Unretire the IOS_IPS Basic category:
	$ category ios_ips basic
	$ retired false

Apply the IPS rule to an interface:
	$ int G0/1
	$ ip ips iosips out

Un-retire the echo request signature (signature 2004, subsig ID 0), enable it, and change the signature action to alert and drop:
	$ ip ips signature-definition
	$ signature 2004 0
	$ status
	$ retired false
	$ enabled true
	$ exit
	$ engine
	$ event-action deny-packet-inline
