sudo iptables -A PREROUTING -t nat -p tcp --dport 32090 -j DNAT --to-destination 192.168.49.2:32090
sudo iptables -A FORWARD -p tcp -d 192.168.49.2 --dport 32090 -j ACCEPT
sudo ufw allow 32090/tcp