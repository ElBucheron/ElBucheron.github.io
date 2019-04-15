# Configure IP ACL


Try an SSH login:
	> ssh -l SSHadmin 192.168.2.1


Create a numbered IP ACL on a router:
	$ access-list 10 permit host 192.168.3.3

Apply the access list to incoming traffic on the VTY lines:
	$ line VTY 0 15
	$ access-class 10 in

Permit any outside  host to access DNS, SMTP and FTP services:
	$ ip access-list extended 120
	$ permit tcp any host 192.168.1.3 eq domain
	$ permit tcp any host 192.168.1.3 eq smtp
	$ permit tcp any host 192.168.1.3 eq ftp

Deny any outside host access to HTTPs services on an IP:
	$ deny tcp any host 192.168.1.3 eq www

Permit an IP to access another IP via SSH:
	$ permit tcp host 192.168.3.3 host 10.1.1.1 eq 22

Apply the access list to incoming traffic on interface S0/0/0:
	$ int S0/0/0
	$ ip access-group 120 in

Enable the security technology package:
	$ show version
If not enabled:
	$ license boot module c1900 technology-package securityk9

Create an internal zone:
	$ zone security OUT-ZONE
	$ exit

Create a class map referencing the internal traffic ACL:
	$ class-map type inspect match-all IN-NET-CLASS-MAP
	$ match access-group 101
	$ exit

Create a policy map to determine what to do with matched traffic:
	$ policy-map type inspect IN-2-OUT-PMAP

Specify a class type of inspect:
	$ class type inspect IN-NET-CLASS-MAP
	$ inspect
	$ exit
	$ exit

Create a pair zone:
	$ zone-pair security IN-2-OUT-ZPAIR source IN-ZONE destination OUT-ZONE

Specify the policy mapfor handling the traffic:
	$ service-policy type inspect IN-2-OUT-PMAP
	$ exit

Assigning interfaces to the appropriate security zone:
	$ interface g0/1
	$ zone-member security IN-ZONE
	$ interface s0/0/1
	$ zone-member security OUT-ZONE
